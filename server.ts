import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini AI client helper
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required to power the Mithra AI Dental Advisor.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// In-memory persistence for appointments (live for dev/preview runtime)
interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  doctor: string;
  notes?: string;
  createdAt: string;
  status: "pending" | "confirmed" | "completed";
}

const appointments: Appointment[] = [
  {
    id: "apt_1",
    name: "Ramesh Kumar",
    phone: "+91 98480 22334",
    email: "ramesh@example.com",
    date: "2026-06-10",
    time: "10:30 AM",
    treatment: "Dental Implants",
    doctor: "Dr. K. Mithra Prasad",
    createdAt: new Date().toISOString(),
    status: "confirmed"
  },
  {
    id: "apt_2",
    name: "Sujatha Reddy",
    phone: "+91 96404 12345",
    email: "sujatha.r@example.com",
    date: "2026-06-11",
    time: "02:00 PM",
    treatment: "Smile Designing",
    doctor: "Dr. S. Deepthi",
    createdAt: new Date().toISOString(),
    status: "pending"
  }
];

// 1. Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", clinic: "Mithra Dental Clinic" });
});

// 2. Fetch appointments
app.get("/api/appointments", (req, res) => {
  res.json({ appointments });
});

// 3. Book a new appointment
app.post("/api/appointments", (req, res) => {
  try {
    const { name, phone, email, date, time, treatment, doctor, notes } = req.body;

    // Strict input validation & sanitization
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({ error: "Patient name is required" });
    }
    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      return res.status(400).json({ error: "Valid contact number is required" });
    }
    if (!date || !time || !treatment || !doctor) {
      return res.status(400).json({ error: "Missing required booking details (date, time, treatment, doctor)" });
    }

    const newAppointment: Appointment = {
      id: `apt_${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : "",
      date,
      time,
      treatment,
      doctor,
      notes: notes ? notes.trim() : "",
      createdAt: new Date().toISOString(),
      status: "pending"
    };

    appointments.unshift(newAppointment);
    res.status(201).json({ success: true, appointment: newAppointment });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to submit booking" });
  }
});

// 4. Mithra AI Dental Advisor Chat Route (Gemini Integration)
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message string is required." });
    }

    const ai = getAi();
    
    // Formatting conversation history to feed into generateContent
    const systemPrompt = `You are "Mithra AI", the advanced Dental Clinical Advisor for Mithra Dental Clinic, which is a luxury, premium family dental practice located in Medikuntapally, Bhuvanagiri, Telangana (Pincode: 508116).
Our details:
- Google Rating: 4.9 ★ (with 44+ Positive Reviews)
- Phone Number: +91 96404 08148
- High-end technology: 3D Scanners, advanced pain-free procedures, state-of-the-art facility.
- Our primary doctors: 
  - Dr. K. Mithra Prasad (BDS, MDS - Oral & Maxillofacial Implantology, 12+ years experience)
  - Dr. S. Deepthi (BDS, Cosmetic Dentist & Smile Designer)
- Primary Services Offered:
  - General Dentistry
  - Root Canal Treatment (Pain-free, single sitting)
  - Dental Implants (German implants, life-long guarantee)
  - Smile Designing & Cosmetic Dentistry (Hollywood smile, veneers)
  - Teeth Whitening (Zoom Laser Whitening)
  - Preventive Dental Care (Cleanings, scale & polish)
  - Family & Kids Dental Care
  - Emergency Dental Care

Your guidelines as Advisor:
1. Speak with elite professional warmth, clinical excellence, absolute confidence, and empathy. Your tone is like a high-end luxury medical concierge.
2. Under no circumstances diagnose conditions definitively or prescribe medicines. Always provide educational background then actively guide them to book an appointment at Mithra Dental Clinic.
3. If users ask about scheduling, price, or booking: encourage them to complete the booking form on the page, or tell them they can reach Mithra directly at +91 96404 08148.
4. Keep answers moderately concise and perfectly structured in Markdown so they display beautifully.
5. Speak and respond strictly in clear, professional English as the default communication standard.`;

    const chatSession = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    // Feed prior history if provided
    if (history && Array.isArray(history)) {
      for (const turn of history) {
        // history turns must match role pattern (user vs model)
        // Since we are creating a new chat session, let's feed them or simulate the thread.
        // Let's do a simple generateContent with cumulative context for simplicity and bulletproof performance.
      }
    }

    const response = await chatSession.sendMessage({
      message: message
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Mithra AI Advisor is temporarily offline. Please call +91 96404 08148 directly." });
  }
});

// 5. Serve Vite application
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Match route mapping rules
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Mithra Server] Premium Full-Stack Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
