import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToothExhibit from "./components/ToothExhibit";
import About from "./components/About";
import Treatments from "./components/Treatments";
import TechShowcase from "./components/TechShowcase";
import SmileAdvisor from "./components/SmileAdvisor";
import DoctorShowcase from "./components/DoctorShowcase";
import BookingForm from "./components/BookingForm";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { Sparkles, Phone, ArrowUpRight } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll active indicator synchronization
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sections = ["home", "about", "treatments", "tech", "advisor", "doctors", "booking"];

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-bg font-sans text-brand-text">
      
      {/* Floating Speed Emergency Action Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3.5 select-none shrink-0 pointer-events-auto">
        <a
          id="floating-emergency-call"
          href="tel:+919640408148"
          className="bg-brand-cyan hover:bg-brand-navy p-4 rounded-full text-white shadow-2xl flex items-center justify-center relative group transition-all duration-300 transform hover:scale-105"
          title="Emergency support line"
          aria-label="Call emergency support"
        >
          <Phone className="w-5.5 h-5.5" />
          <span className="absolute right-14 bg-brand-navy border border-white/10 text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-md scale-0 group-hover:scale-100 transition-all origin-right duration-300 whitespace-nowrap">
            Yadadri emergency consult (Call)
          </span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-brand-accent rounded-full animate-ping text-[0px]" />
        </a>

        <button
          id="floating-book-trigger"
          onClick={() => handleScrollTo("booking")}
          className="bg-[#E75A24] hover:bg-brand-navy p-4 rounded-full text-white shadow-2xl flex items-center justify-center relative group transition-all duration-300 transform hover:scale-105"
          title="Schedule Appointment"
        >
          <ArrowUpRight className="w-5.5 h-5.5" />
          <span className="absolute right-14 bg-brand-navy border border-white/10 text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-md scale-0 group-hover:scale-100 transition-all origin-right duration-300 whitespace-nowrap">
            Schedule seat appointment
          </span>
        </button>
      </div>

      {/* 1. Global Floating Navigation Bar */}
      <Navbar onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* 2. Cinematic Hero landing panel */}
      <Hero onScrollTo={handleScrollTo} />

      {/* 3. Splashing Tooth Interactive Exhibit (Screenshot 1 replica) */}
      <ToothExhibit onScrollTo={handleScrollTo} />

      {/* 4. Modular Bento About Us room (Screenshot 1 about section replica) */}
      <About />

      {/* 5. Custom click drawer Treatments gallery */}
      <Treatments
        onScrollTo={handleScrollTo}
        onSelectTreatment={(name) => setSelectedTreatment(name)}
      />

      {/* 6. High-Tech Precision active room (Screenshot 3 cyber scanner room replica) */}
      <TechShowcase />

      {/* 7. Advanced Intelligent Gemini Oral Health Advisor */}
      <SmileAdvisor />

      {/* 8. Doctor Profile Cards (Chief surgeon credentials trust) */}
      <DoctorShowcase />

      {/* 9. Verified Patient Reviews google statistics block */}
      <Reviews />

      {/* 10. Glassmorphism Booking scheduler connected to Express appointments */}
      <BookingForm initialSelectedTreatment={selectedTreatment} />

      {/* 11. Custom address links, ISO sterilisation labels and Footer */}
      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
}
