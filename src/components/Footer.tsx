import { Phone, MapPin, Mail, Sparkles, Shield, Clock } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8 relative overflow-hidden select-none border-t border-brand-cyan/20">
      
      {/* Background Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 select-text border-b border-white/10 pb-16">
        
        {/* Left Column: Clinic Bio (Col 5) */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => onScrollTo("home")}>
            <div className="bg-brand-cyan p-2 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
                  MITHRA
                </span>
                <span className="text-xs font-mono tracking-wider text-brand-accent uppercase">
                  Dental Clinic
                </span>
              </div>
              <p className="text-[10px] font-sans font-medium text-slate-400 -mt-0.5 tracking-wider leading-none">
                Mithra Family Practice
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Experience premium clinical dental diagnostics and painless bio-reconstructions. Led by Dr. Mithra Prasad in Medikuntapally, Bhuvanagiri. Engineered on par with elite healthcare benchmarks.
          </p>

          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-2xl w-fit">
            <Shield className="w-4 h-4 text-brand-accent shrink-0" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-300 font-bold">
              ISO 9001:2015 certified sterilisation
            </span>
          </div>
        </div>

        {/* Center Column: Quick Navigation Links (Col 3) */}
        <div className="md:col-span-3 space-y-4 select-none">
          <h4 className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#14B8A6]">
            Clinic Index
          </h4>
          <div className="flex flex-col space-y-2.5">
            {[
              { label: "Home Base", id: "home" },
              { label: "Clinic Profile", id: "about" },
              { label: "Our Treatments", id: "treatments" },
              { label: "Therapeutic Tech", id: "tech" },
              { label: "Mithra AI Advisor", id: "advisor" },
              { label: "Doctors Panel", id: "doctors" },
              { label: "Appoint Scheduling", id: "booking" }
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => onScrollTo(link.id)}
                className="text-xs text-slate-400 hover:text-brand-accent transition-colors text-left font-medium cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Contact info & Address (Col 4) */}
        <div className="md:col-span-4 space-y-5">
          <h4 className="font-mono text-xs uppercase font-extrabold tracking-widest text-[#14B8A6] select-none">
            Clinic Coordinates
          </h4>

          <div className="space-y-4 font-sans text-xs text-slate-300">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <div className="space-y-0.5">
                <span className="font-bold text-white block">Mithra Dental Clinic</span>
                <span className="text-slate-400">
                  Medikuntapally, Bhuvanagiri town, Yadadri Bhuvanagiri, Telangana 508116, India
                </span>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
              <div>
                <a href="tel:+919640408148" className="font-bold text-white hover:text-brand-accent transition-colors">
                  +91 96404 08148
                </a>
                <p className="text-[10px] text-slate-400">Direct booking support hotline</p>
              </div>
            </div>

            {/* Support timing */}
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-slate-400 shrink-0" />
              <div>
                <p className="text-white font-semibold">10:00 AM - 07:00 PM</p>
                <p className="text-[10px] text-slate-400">All Days open (Sundays on emergencies)</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Under Legal info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-xs text-slate-400 font-medium">
        
        <p className="text-center md:text-left select-text">
          &copy; {currentYear} Mithra Dental Clinic. All rights reserved. 
          <br className="sm:hidden" />
          <span className="hidden md:inline ml-1.5">|</span> Developed for elite medical standards in Yadadri-Bhuvanagiri, Telangana.
        </p>

        {/* Regulatory legal anchors */}
        <div className="flex items-center space-x-6 select-none text-[11px]">
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); onScrollTo("booking"); }}
            className="hover:text-brand-accent transition-colors"
          >
            Privacy Policy
          </a>
          <span>&bull;</span>
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); onScrollTo("booking"); }}
            className="hover:text-brand-accent transition-colors"
          >
            Terms &amp; Conditions
          </a>
        </div>

      </div>
    </footer>
  );
}
