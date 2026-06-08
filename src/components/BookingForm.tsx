import React, { useState, useEffect } from "react";
import { CLINIC_SERVICES, CLINIC_DOCTORS } from "../types";
import { Calendar, Clock, CheckCircle, User, Phone, Mail, Award, ClipboardList, ShieldAlert, Sparkles } from "lucide-react";

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

interface BookingFormProps {
  initialSelectedTreatment?: string;
}

export default function BookingForm({ initialSelectedTreatment = "" }: BookingFormProps) {
  // Form values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:30 AM");
  const [treatment, setTreatment] = useState("Dental Implants");
  const [doctor, setDoctor] = useState("Dr. K. Mithra Prasad");
  const [notes, setNotes] = useState("");

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [appQueue, setAppQueue] = useState<Appointment[]>([]);

  // Time Slots
  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:30 AM",
    "12:00 PM",
    "02:00 PM",
    "03:30 PM",
    "04:30 PM",
    "06:00 PM"
  ];

  // Sync initial user treatment selection choices
  useEffect(() => {
    if (initialSelectedTreatment) {
      setTreatment(initialSelectedTreatment);
    }
  }, [initialSelectedTreatment]);

  // Retrieve current active clinical appointments
  const fetchQueue = async () => {
    try {
      const response = await fetch("/api/appointments");
      if (response.ok) {
        const data = await response.json();
        setAppQueue(data.appointments || []);
      }
    } catch (err) {
      console.error("Failed to sync queue logs");
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg(false);

    // Sanity checks
    if (!name.trim()) {
      setErrorMsg("Please enter Patient Name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Please enter valid Contact Phone.");
      return;
    }
    if (!date) {
      setErrorMsg("Please choose an appointment Date.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          date,
          time,
          treatment,
          doctor,
          notes
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed registration session.");
      }

      // Success
      setSuccessMsg(true);
      setName("");
      setPhone("");
      setEmail("");
      setNotes("");
      
      // Refresh list
      fetchQueue();
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please speak directly with us at +91 96404 08148.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden select-none">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 animate-fade-in">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E75A24] bg-orange-50 px-4 py-1.5 rounded-full uppercase inline-block mb-3">
            Real-time Reservation Engine
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B1530] tracking-tight leading-none">
            Schedule Appointment
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-display italic">
            Mithra Dental Clinic — Automated online reservation for personalized diagnostic consultations
          </p>
          <div className="h-[2px] w-24 bg-brand-cyan/20 mx-auto mt-6" />
        </div>

        {/* Dynamic Booking split grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Glassmorphic Form (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50/80 border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm select-text">
            
            <div className="mb-8 select-none">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold block">
                Security Validated Intake
              </span>
              <h3 className="text-xl font-display font-extrabold text-brand-navy mt-1 tracking-tight">
                Submit Patient Information
              </h3>
            </div>

            {errorMsg && (
              <div className="mb-6 p-4.5 bg-rose-50 border border-rose-200/60 rounded-2xl flex items-center space-x-3 text-rose-700 text-xs font-semibold animate-pulse">
                <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-6 p-5 bg-emerald-50 border border-emerald-200/60 rounded-3xl flex items-start space-x-3.5 text-emerald-800 text-sm animate-fade-in shadow-sm select-none">
                <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 leading-tight">Appointment Registered Successfully!</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Mithra&apos;s medical desk will contact you over phone within 15 minutes to confirm your final clinical seat. For priority access, mention case reservation to support or call **+91 96404 08148**.
                  </p>
                </div>
              </div>
            )}

            {/* Main Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Patient Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4.5 py-3.5 text-sm font-medium outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Contact Phone *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 96404 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4.5 py-3.5 text-sm font-medium outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@gamil.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4.5 py-3.5 text-sm font-medium outline-none"
                  />
                </div>

                {/* Appointment Date */}
                <div className="space-y-2">
                  <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                    <Calendar className="w-3.5 h-3.5 text-[#E75A24]" />
                    <span>Schedule Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4.5 py-3.5 text-sm font-medium text-slate-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Desired Treatment Selection */}
                <div className="space-y-2">
                  <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                    <ClipboardList className="w-3.5 h-3.5 text-slate-400" />
                    <span>Select Clinic Treatment</span>
                  </label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4.5 py-4 text-xs font-bold text-slate-600 outline-none"
                  >
                    {CLINIC_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title} &bull; {srv.teluguTitle}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Surgeon */}
                <div className="space-y-2">
                  <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                    <Award className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preferred Specialist</span>
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-4.5 py-4 text-xs font-bold text-slate-600 outline-none"
                  >
                    {CLINIC_DOCTORS.map((doc, dIdx) => (
                      <option key={dIdx} value={doc.name}>
                        {doc.name} &bull; {doc.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slots Radio selection */}
              <div className="space-y-2.5">
                <label className="text-slate-700 text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 select-none">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Select Time Window *</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map((ts, tIdx) => {
                    const isSelected = time === ts;
                    return (
                      <button
                        type="button"
                        key={tIdx}
                        onClick={() => setTime(ts)}
                        className={`py-3.5 text-xs font-bold tracking-wide rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-brand-cyan text-white border-brand-cyan shadow-sm"
                            : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100/50"
                        }`}
                      >
                        {ts}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Patient Notes */}
              <div className="space-y-2">
                <label className="text-slate-700 text-xs font-bold uppercase tracking-wide select-none">
                  Symptom History or Special Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sharp pain under lower wisdom, severe bleeding during tooth brush, or veneers shade requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl p-4 text-xs font-medium outline-none"
                />
              </div>

              {/* Submit trigger */}
              <button
                id="booking-submit"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E75A24] hover:bg-brand-navy hover:scale-[1.01] text-white text-xs font-extrabold uppercase tracking-widest py-4.5 rounded-full transition-all shadow-md hover:shadow-xl cursor-pointer disabled:bg-slate-300"
              >
                {isSubmitting ? "PROCESSING TRANSACTION SECURELY..." : "CONFIRM CLINIC APPOINTMENT QUEUE ↗"}
              </button>

            </form>
          </div>

          {/* Clinical Booking Logs / Live Queue Console (Col 5) */}
          <div className="lg:col-span-5 bg-slate-50/70 border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between select-text min-h-[500px] shadow-sm">
            <div className="space-y-6">
              
              <div id="live-console-header" className="flex items-center justify-between select-none border-b border-slate-200/60 pb-4">
                <div>
                  <h4 className="font-display font-black text-brand-navy text-sm tracking-tight flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-brand-accent animate-spin-slow" />
                    <span>Mithra Active Patient Queue</span>
                  </h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-0.5">
                    Live database synchronization console
                  </p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full uppercase flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Review below the registered patient logs in our database for Bhuvanagiri clinic appointments. This transparent workflow ensures prompt seat distribution.
              </p>

              {/* Patient Log Elements */}
              <div className="space-y-3 pt-2">
                {appQueue.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xs border border-slate-100 flex items-center justify-between transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3 text-xs">
                      {/* Left icon status */}
                      <div className="p-2.5 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{item.name}</h4>
                        <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono mt-0.5">
                          <span>{item.date}</span>
                          <span>&bull;</span>
                          <span>{item.time}</span>
                        </div>
                        <p className="text-[9px] bg-sky-50 text-brand-cyan px-2 py-0.5 mt-1 rounded-md font-bold inline-block">
                          {item.treatment}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          item.status === "confirmed"
                            ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                            : "bg-amber-50 border-amber-200 text-amber-600"
                        }`}
                      >
                        {item.status}
                      </span>
                      <p className="text-[9px] text-slate-400 mt-1.5">{item.id.replace("apt_", "RE_")}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick trust help notes */}
            <div className="p-5 bg-sky-50/50 border border-sky-100 rounded-2xl select-none mt-8 text-xs">
              <span className="font-bold text-brand-cyan block">Privacy and Data Protection</span>
              <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                Patients&apos; phone numbers are sanitized for secure transmission. Mithra Clinic uses clinical data exclusively to configure treatments in accordance with telemedicine regulatory protocols.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
