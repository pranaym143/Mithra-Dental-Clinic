import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, Info, ChevronsLeftRight } from "lucide-react";

interface ComparisonScenario {
  id: string;
  name: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  clinicalNote: string;
}

const COMPARISON_SCENARIOS: ComparisonScenario[] = [
  {
    id: "restoration",
    name: "Smile Reconstruction",
    title: "Biological Veneers & Deep Cleaning",
    description: "Correction of extreme tooth surface decay, calculus accumulation, and severe spacing utilizing high-end porcelain veneers.",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", // Clinical inspection showing raw enamel decay and alignment issues
    afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800", // Glistening healthy clean aesthetic alignment
    beforeLabel: "PRE-TREATMENT DECAY",
    afterLabel: "HOLLYWOOD SMILE DESIGN",
    clinicalNote: "Completed across two sessions with sub-millimeter conservative structural prep."
  },
  {
    id: "implants",
    name: "Implant Crown Replacement",
    title: "Computer-Guided Titanium Implantation",
    description: "Full restoration of deteriorated and cracked enamel to complete mastication efficiency and light-reflecting natural ceramic crown.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", // Damaged/wear states
    afterImg: "https://images.unsplash.com/photo-1579684389782-64d84b5e9053?auto=format&fit=crop&q=80&w=800", // Fully restored state
    beforeLabel: "DAMAGED STATE",
    afterLabel: "INTEGRATED ZIRCONIA IMPLANT",
    clinicalNote: "Digital guided micro-surgical installation showing lifetime bone integration."
  }
];

export default function BeforeAfter() {
  const [activeScenario, setActiveScenario] = useState<ComparisonScenario>(COMPARISON_SCENARIOS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="results" className="py-24 bg-slate-50 relative overflow-hidden select-none border-t border-slate-100">
      
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#E75A24]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E75A24] bg-orange-50 px-4 py-1.5 rounded-full uppercase inline-block mb-3">
            Interactive Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-none">
            Before & After Clinical Gallery
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-display italic">
            Drag the slider in the middle to compare our premium dental artistry with real pre-treatment states
          </p>
          <div className="h-[2px] w-24 bg-brand-cyan/20 mx-auto mt-6" />
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {COMPARISON_SCENARIOS.map((scen) => {
            const isSelected = scen.id === activeScenario.id;
            return (
              <button
                key={scen.id}
                onClick={() => {
                  setActiveScenario(scen);
                  setSliderPosition(50);
                }}
                className={`px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-brand-navy text-white shadow-md scale-[1.02]"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-cyan"
                }`}
              >
                {scen.name}
              </button>
            );
          })}
        </div>

        {/* Comparison Showcase Visualizer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context Card */}
          <div className="lg:col-span-5 space-y-6 select-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm space-y-6"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-brand-navy tracking-tight">
                    {activeScenario.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wide font-bold">
                    Procedure Showcase
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {activeScenario.description}
                </p>

                {/* Clinical note footer */}
                <div className="flex items-start bg-sky-50/70 rounded-2xl p-4 border border-sky-100/40 text-xs space-x-3 text-slate-600">
                  <Info className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800">Clinical Specialist Review</h4>
                    <p className="text-[11px] mt-0.5 leading-normal text-slate-500 font-medium">
                      {activeScenario.clinicalNote}
                    </p>
                  </div>
                </div>

                {/* Call-to-action */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                    Interactive Prompt
                  </p>
                  <p className="text-xs text-slate-500 mt-1 italic">
                    Place your finger or cursor on the center line handle and drag horizontally to view complete tooth structural restoration.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Comparison Drag Screen */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
              
              {/* After image (Fully Clean state as background) */}
              <img
                src={activeScenario.afterImg}
                alt="Fully restored state"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
              {/* Label After */}
              <div className="absolute right-6 top-6 bg-brand-cyan/95 text-white font-mono text-[9px] sm:text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full z-10 uppercase shadow-md select-none">
                {activeScenario.afterLabel}
              </div>

              {/* Before image (Damaged Tooth state on overlay) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden select-none pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeScenario.beforeImg}
                  alt="Damaged dirty tooth"
                  className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                  style={{ width: "100%", height: "100%" }}
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Label Before */}
              <div className="absolute left-6 top-6 bg-[#E75A24]/95 text-white font-mono text-[9px] sm:text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full z-10 uppercase shadow-md select-none">
                {activeScenario.beforeLabel}
              </div>

              {/* Drag Line Split Indicator */}
              <div
                className="absolute inset-y-0 w-[4px] bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Visual Handle Circular Toggle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-brand-navy shadow-2xl flex items-center justify-center border-2 border-slate-200 select-none pointer-events-none transition-transform group-hover:scale-110">
                  <ChevronsLeftRight className="w-5 h-5 animate-pulse text-brand-cyan" />
                </div>
              </div>

              {/* Native Transparent Drag Input Overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                onFocus={() => setIsSliding(true)}
                onBlur={() => setIsSliding(false)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none"
                aria-label="Before and after tooth image slider"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
