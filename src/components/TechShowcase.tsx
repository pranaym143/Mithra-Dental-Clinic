import { Cpu, Zap, Eye, RefreshCw, Layers } from "lucide-react";

export default function TechShowcase() {
  return (
    <section id="tech" className="py-24 bg-brand-navy relative overflow-hidden select-none text-white">
      
      {/* Decorative Cyan cyber lights simulating biological lasers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Thin grid lines in the background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-[#14B8A6] bg-brand-accent/15 border border-brand-accent/30 px-4 py-1.5 rounded-full uppercase inline-block mb-3 animate-pulse">
            Digital Precision Lab
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
            Advanced Clinical Technology
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-display italic">
            Mithra Dental Clinic — Equipped with state-of-the-art German clinical technology
          </p>
        </div>

        {/* Column layout mimicking Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Cyber-cyan dental room illustration (Col 6) */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Cyber dental chamber background container representing standard dental operatory */}
            <div className="relative w-full max-w-md rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0F1E36] to-[#0D394E] p-8 border border-brand-cyan/30 shadow-[0_0_50px_rgba(14,116,144,0.3)] floating-element">
              
              {/* Top scanner active light dots overlay */}
              <div className="absolute top-4 right-6 flex items-center space-x-2 text-[10px] text-brand-accent font-mono tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                <span>3D SCANNER CONNECTED</span>
              </div>

              {/* Title label mimicking "INNOVATTION" design in Screenshot 3 */}
              <div className="mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold block">
                  SYSTEM ACTIVE
                </span>
                <span className="text-3xl font-tech font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-brand-cyan">
                  INNOVATION
                </span>
              </div>

              {/* Vector diagram representing a cyber-mesh surgical plan */}
              <div className="relative aspect-video rounded-2xl bg-black/40 border border-brand-cyan/20 p-4 flex flex-col justify-between overflow-hidden">
                {/* Simulated digital diagnostics */}
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>IMPLANT PLANE #802</span>
                  <span>OPG RESOLUTION: 8K</span>
                </div>

                {/* Cyber surgical tooth wireframe */}
                <div className="w-full flex justify-center py-6">
                  <svg viewBox="0 0 100 60" className="w-28 h-16 stroke-brand-accent fill-none stroke-[0.7] animate-pulse">
                    <path d="M 20,10 C 20,4 35,6 50,12 C 65,6 80,4 80,10 C 80,25 75,35 70,45 C 65,55 75,58 70,60 C 50,52 50,60 50,60 C 50,60 50,52 30,60 C 25,58 35,55 30,45 C 25,35 20,25 20,10 Z" />
                    {/* Diagnostic scanner laser sweep line */}
                    <line x1="10" y1="20" x2="90" y2="20" className="stroke-brand-cyan stroke-1" opacity="0.6">
                      <animate attributeName="y1" values="5;45;5" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="5;45;5" dur="4s" repeatCount="indefinite" />
                    </line>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-brand-accent">
                  <span>99.8% PRECISION METRIC</span>
                  <span>SCANNING COMPLETE</span>
                </div>
              </div>

              {/* Main textual statement mimicking Screenshot 3 exactly */}
              <div className="mt-8 select-text">
                <h3 className="text-xl font-tech font-bold tracking-wide">3D SCANNERS</h3>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  Efficient digital impressions for accurate restorations using state-of-the-art 3D scanners, enhancing precision and patient comfort. No messy clay impressions — just clean, rapid digital scans.
                </p>
              </div>

            </div>

            {/* Back ambient grids styling */}
            <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-48 h-48 border-b border-l border-brand-cyan/20 rounded-bl-[40px]" />
          </div>

          {/* Core high-tech specifications bullets (Col 6) */}
          <div className="lg:col-span-6 flex flex-col space-y-8 select-text lg:pl-6">
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-cyan/25 rounded-2xl border border-brand-cyan/40 text-brand-accent">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold tracking-wide">German biological dental implants</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  We use biological grade titanium fixtures from leading manufacturer factories in Germany, guaranteeing zero metallic reaction, optimal bone integration, and life-long durability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-cyan/25 rounded-2xl border border-brand-cyan/40 text-brand-accent">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold tracking-wide">Digital low-radiation 3D OPG imaging</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Our advanced digital OPG scanners produce complete 3D panoramic views of your dentition matching full clinical accuracy while utilizing ultra-low diagnostic radiation doses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-cyan/25 rounded-2xl border border-brand-cyan/40 text-brand-accent">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold tracking-wide">Class-B computerized vacuum autoclaves</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  100% sterile confidence. Tools go through extensive deep pressurized vacuum sterilization, strictly exceeding national sanitization protocols for premium care.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
