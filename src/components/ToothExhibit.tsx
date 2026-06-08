import { Calendar, CheckCircle2, Award, Clock } from "lucide-react";

interface ToothExhibitProps {
  onScrollTo: (sectionId: string) => void;
}

export default function ToothExhibit({ onScrollTo }: ToothExhibitProps) {
  return (
    <section id="tooth-exhibit" className="relative py-16 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Main Exhibit Container mimicking Screenshot 1 precisely */}
        <div className="relative rounded-[40px] bg-sky-50/70 border border-slate-100 overflow-hidden py-16 px-6 md:px-16 flex flex-col items-center">
          
          {/* Subtle Background Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* LARGE BLUE HEADLINE: "EVERY SMILE MATTERS" */}
          <h2 className="text-center font-display font-black text-4xl sm:text-6xl md:text-8xl text-[#1EA1F2] tracking-tighter uppercase leading-none mb-10 w-full animate-pulse select-text">
            EVERY SMILE MATTERS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-4 flex flex-col space-y-6 select-text">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-slate-100">
                <p className="text-xs font-semibold text-brand-cyan tracking-wider uppercase mb-2 flex items-center space-x-1">
                  <span>Our Medical Philosophy</span>
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our skilled dentists use advanced guided technology to offer complete dental care in an exceptionally comfortable, sterile, and friendly environment.
                </p>
              </div>

              {/* Working Hours Block (as seen in screenshot 1) */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center space-x-2 text-[#E75A24] font-semibold text-xs uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-[#E75A24]" />
                  <span>We&apos;re Open Daily</span>
                </div>
                <p className="text-xl font-bold text-slate-900 leading-none">10:00 AM - 07:00 PM</p>
                <p className="text-[11px] text-slate-500 mt-1.5 font-medium">Sunday by Appointment Only</p>
              </div>

              {/* Booking CTA Button (as seen in screenshot 1 with diagonal arrow ↗) */}
              <button
                onClick={() => onScrollTo("booking")}
                className="bg-[#E75A24] hover:bg-brand-navy hover:scale-[1.01] text-white font-sans font-bold text-xs uppercase tracking-widest py-4.5 px-8 rounded-full flex items-center justify-center space-x-2.5 shadow-md hover:shadow-lg transition-all duration-300 transform self-start cursor-pointer w-full sm:w-auto"
              >
                <span>BOOK APPOINTMENT</span>
                <span className="text-sm font-semibold">↗</span>
              </button>
            </div>

            {/* Center Dynamic Tooth Splashed Graphic Column (as seen in screenshot 1) */}
            <div className="lg:col-span-4 flex justify-center relative py-12 lg:py-0">
              
              {/* Splashing Liquid Ring Animations (CSS generated absolute shapes) */}
              <div className="absolute inset-x-0 mx-auto w-72 h-72 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

              {/* Dynamic SVGs for splashing blue liquid dental asset */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center scale-105 floating-element">
                {/* Simulated 3D Tooth Splash */}
                <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 select-none">
                  <defs>
                    <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#F1F5F9" />
                      <stop offset="100%" stopColor="#CBD5E1" />
                    </linearGradient>
                    <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#1EA1F2" />
                    </linearGradient>
                    <filter id="toothShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="16" stdDeviation="12" floodOpacity="0.15" />
                    </filter>
                  </defs>

                  {/* Liquid Crown Splash Background */}
                  <g fill="url(#splashGradient)" opacity="0.85">
                    {/* Dynamic Splash droplets */}
                    <circle cx="90" cy="120" r="14" />
                    <circle cx="310" cy="110" r="10" />
                    <circle cx="320" cy="220" r="8" />
                    <circle cx="80" cy="240" r="12" />
                    <circle cx="200" cy="70" r="16" />
                    <circle cx="130" cy="310" r="11" />
                    <circle cx="270" cy="290" r="13" />

                    {/* Fluid splash waves */}
                    <path d="M 120 180 Q 80 120 130 140 T 200 130 T 270 140 T 280 180 Q 320 250 250 280 T 150 280 Q 80 250 120 180 Z" />
                  </g>

                  {/* Primary 3D Dental Tooth Figure layered in front */}
                  <g filter="url(#toothShadow)">
                    {/* Crown curves - beautiful hand-crafted vector shapes */}
                    <path
                      d="M 140,150 
                         C 140,110 170,120 200,135 
                         C 230,120 260,110 260,150
                         C 260,190 250,225 245,245
                         C 240,265 255,305 240,320
                         C 225,335 210,290 200,265
                         C 190,290 175,335 160,320
                         C 145,305 160,265 155,245
                         C 150,225 140,190 140,150 Z"
                      fill="url(#toothGradient)"
                    />
                    {/* Light-reflecting gloss highlights for 3D realism */}
                    <path
                      d="M 155,145 C 155,130 162,135 175,142 C 160,142 155,145 155,145 Z"
                      fill="#FFFFFF"
                      opacity="0.8"
                    />
                    <path
                      d="M 233,145 C 233,130 240,135 253,142 C 238,142 233,145 233,145 Z"
                      fill="#FFFFFF"
                      opacity="0.8"
                    />
                  </g>
                </svg>

                {/* Micro Liquid droplets pulsing around */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-brand-cyan animate-ping text-[0px]" />
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-brand-accent animate-ping text-[0px]" />
              </div>
            </div>

            {/* Right Statistics Column */}
            <div className="lg:col-span-4 flex flex-col space-y-8 select-text lg:pl-10">
              
              {/* Stat 1: Google Rating */}
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy flex items-baseline">
                  <span>4.9</span>
                  <span className="text-amber-500 font-sans text-xl ml-1">★</span>
                </h3>
                <p className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold">Google Rating</p>
                <p className="text-xs text-slate-500">44+ verified dental reviews in Bhuvanagiri</p>
              </div>

              {/* Stat 2: Patient Satisfaction */}
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy">99.8%</h3>
                <p className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold">Clinical Success Rate</p>
                <p className="text-xs text-slate-500">Over 2,500 pain-free procedures conducted</p>
              </div>

              {/* Stat 3: Implants guarantee */}
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1EA1F2]">100%</h3>
                <p className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold">Zirconia Bio-Materials</p>
                <p className="text-xs text-slate-500">High-end restorative fixtures from Germany</p>
              </div>
            </div>

          </div>

        </div>

        {/* SWEEPING MARQUEE BANNER: "Braces + Denta Care + Dentist + Dentures" (Screenshot 1) */}
        <div id="service-marquee" className="mt-8 bg-sky-100/50 backdrop-blur-sm rounded-2xl py-4.5 px-6 flex items-center justify-center border border-sky-100 overflow-hidden">
          <div className="flex space-x-12 shrink-0 animate-marquee text-brand-cyan md:text-xl font-display font-bold whitespace-nowrap">
            <span>Braces + Mithra Care + Dentist + Implants + Smile Designing + Root Canals + Painless Restorations</span>
          </div>
        </div>

      </div>
    </section>
  );
}
