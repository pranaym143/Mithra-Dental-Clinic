import { useState } from "react";
import { CLINIC_SERVICES, Treatment } from "../types";
import { Sparkles, Shield, FlameKindling, Crown, Sun, Stethoscope, Users, Activity, ChevronRight, Check } from "lucide-react";

interface TreatmentsProps {
  onScrollTo: (sectionId: string) => void;
  onSelectTreatment: (treatmentName: string) => void;
}

export default function Treatments({ onScrollTo, onSelectTreatment }: TreatmentsProps) {
  const [selectedId, setSelectedId] = useState<string>("implants");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-6 h-6 text-brand-cyan" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-brand-accent" />;
      case "FlameKindling":
        return <FlameKindling className="w-6 h-6 text-[#E75A24]" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-amber-500" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-amber-400" />;
      case "Stethoscope":
        return <Stethoscope className="w-6 h-6 text-emerald-500" />;
      case "Users":
        return <Users className="w-6 h-6 text-blue-500" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-rose-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-cyan" />;
    }
  };

  const activeTreatment = CLINIC_SERVICES.find((s) => s.id === selectedId) || CLINIC_SERVICES[0];

  return (
    <section id="treatments" className="py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Dynamic Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E75A24] bg-orange-50 px-4 py-1.5 rounded-full uppercase inline-block mb-3">
            Elite Dental Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-none">
            State-of-the-Art Treatments
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-display italic">
            From primary diagnostics to advanced reconstruction — expertly delivered treatments
          </p>
          <div className="h-[2px] w-24 bg-brand-cyan/20 mx-auto mt-6" />
        </div>

        {/* Master details structure (Split in Left Cards and Right Details showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive list of treatments (Col 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            {CLINIC_SERVICES.map((srv) => {
              const isSelected = srv.id === selectedId;
              return (
                <button
                  id={`srv-card-${srv.id}`}
                  key={srv.id}
                  onClick={() => setSelectedId(srv.id)}
                  className={`w-full text-left p-5 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-brand-navy/[0.03] border-l-4 border-brand-cyan shadow-sm translation-x-1"
                      : "bg-slate-50/50 hover:bg-slate-50 border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100">
                      {getIcon(srv.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">
                        {srv.title}
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 mt-1">
                        {srv.teluguTitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? "text-brand-cyan translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Immersive Expanded Details Showcase (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50/70 border border-slate-100 p-8 rounded-[2.5rem] relative min-h-[460px] flex flex-col justify-between shadow-sm select-text">
            {/* Background Decorative Graphic */}
            <div className="absolute top-8 right-8 text-[120px] font-display font-black text-slate-200/20 select-none pointer-events-none uppercase leading-none">
              Mithra
            </div>

            <div className="space-y-6 relative z-10">
              
              {/* Dynamic Service Icon & Name */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-2xl shadow-md border border-slate-100/50">
                  {getIcon(activeTreatment.iconName)}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold">
                    Treatment Category Details
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy mt-0.5">
                    {activeTreatment.title}
                  </h3>
                </div>
              </div>

              {/* Treatment Main Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                {activeTreatment.description}
              </p>

              {/* Specific Benefits list */}
              <div className="space-y-3 pt-2">
                <p className="text-[11px] uppercase font-mono font-extrabold tracking-wider text-slate-400">
                  Patient Benefits &amp; Protocols
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeTreatment.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2">
                      <div className="p-0.5 bg-emerald-50 rounded-full text-emerald-500 mt-0.5 border border-emerald-100">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-slate-600 font-medium leading-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical properties block */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-200/60 pt-5 mt-4">
                <div>
                  <h5 className="text-[10px] uppercase font-mono font-bold text-slate-400">Duration Needed</h5>
                  <p className="text-xs text-brand-navy font-semibold mt-1">{activeTreatment.duration}</p>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase font-mono font-bold text-slate-400">Who is it for?</h5>
                  <p className="text-xs text-brand-navy font-semibold mt-1">{activeTreatment.suitability}</p>
                </div>
              </div>

            </div>

            {/* Bottom Booking trigger inside the showcase */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 w-full">
              <p className="text-xs text-slate-400 max-w-sm">
                Need customized treatment estimations? Book a diagnostic session with Dr. Mithra Prasad.
              </p>
              <button
                id="treatment-showcase-book"
                onClick={() => {
                  onSelectTreatment(activeTreatment.title);
                  onScrollTo("booking");
                }}
                className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Schedule Consult
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
