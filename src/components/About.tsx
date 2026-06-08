import { Shield, Sparkles, HeartHandshake, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden select-none">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-cyan/5 rounded-full glow-spot" />
      <div className="absolute bottom-1/4 left-12 w-80 h-80 bg-brand-accent/5 rounded-full glow-spot" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading & Core Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 select-text">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold tracking-wider text-brand-cyan uppercase block mb-3">
              Established Clinical Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-tight">
              About Mithra
              <br />
              <span className="text-brand-cyan">Dental Clinic</span>
            </h2>
            <p className="text-base text-slate-500 font-display italic mt-2">
              Mithra Dental Clinic — Your Trusted Family Dental Practice
            </p>
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-2.5 text-brand-cyan font-semibold text-xs uppercase tracking-wider mb-3">
              <Eye className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Mithra Clinic, our vision is to blend advanced German medical technology with compassionate, customized care to create welcoming therapeutic spaces. We aim to inspire confident, healthy smiles across Bhuvanagiri and rural Telangana through absolute diagnostic transparency and surgical clinical safety.
            </p>
          </div>
        </div>

        {/* Bento Photo Grid layout EXACTLY duplicating Screenshot 1 visual arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-20">
          
          {/* Card 1: Large Left Panel - Dental Care Interior (Col 5) */}
          <div className="md:col-span-5 relative group rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px] shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
              alt="Mithra Premium Dental Operatory"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass label badge as seen in top left of Screenshot 1 (with title "Dental Care") */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-brand-navy text-[11px] font-bold tracking-wider px-4.5 py-2.5 rounded-full shadow-md border border-slate-100">
              Dental Care Clean Rooms
            </div>
          </div>

          {/* Card 2: Top Right Panel - Cheerful Patient Smile (Col 7) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Subcard 2A: Dental Alignment Care (With Badger badge) */}
            <div className="relative group rounded-[2rem] overflow-hidden aspect-square sm:aspect-auto shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=500"
                alt="Aesthetic teeth alignment treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-brand-cyan/95 text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full uppercase shadow-md">
                Alignments
              </div>
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md text-brand-navy text-[11px] font-bold tracking-wider px-4 py-2 rounded-full shadow-md">
                Teeth Alignment
              </div>
            </div>

            {/* Subcard 2B: Patient Consultation (With Badger badge) */}
            <div className="relative group rounded-[2rem] overflow-hidden aspect-square sm:aspect-auto shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500"
                alt="Patient smiling consultation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-brand-navy text-[11px] font-bold tracking-wider px-4.5 py-2.5 rounded-full shadow-md border border-slate-100">
                Dental Treatments
              </div>
            </div>

          </div>

        </div>

        {/* Brand Credos block - conveying Trust, Luxury, Comfort */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-text">
          
          <div className="flex flex-col space-y-4 p-8 bg-white rounded-3xl border border-slate-100/80 shadow-sm">
            <div className="bg-brand-cyan/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-cyan">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy">Elite Sterilization Protocols</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We operate strictly via Class-B autoclaves, sterile tool packing, and computerized decontamination filters. Your safety is a non-negotiable biological priority.
            </p>
          </div>

          <div className="flex flex-col space-y-4 p-8 bg-white rounded-3xl border border-slate-100/80 shadow-sm">
            <div className="bg-brand-accent/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-accent">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy">Microscopic Aesthetics</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Veneers and composite bondings are applied using high-magnification loops to preserve maximum tooth enamel, promoting healthy, permanent integration.
            </p>
          </div>

          <div className="flex flex-col space-y-4 p-8 bg-white rounded-3xl border border-slate-100/80 shadow-sm">
            <div className="bg-slate-100 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-navy">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy">Painless Dental Delivery</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We leverage quiet micro-drills, high-grade gel topicals, and cozy cinematic setups to alleviate dental anxiety for children and seniors alike.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
