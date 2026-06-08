import { useEffect, useRef, useState } from "react";
import { Sparkles, Calendar, Phone, ShieldCheck, Award, Star } from "lucide-react";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Floating Interactive Cinematic Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Circular biological node elements
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glow: number;
    }

    const nodes: Node[] = [];
    const colors = ["rgba(14, 116, 144, 0.12)", "rgba(20, 184, 166, 0.1)", "rgba(10, 37, 64, 0.08)"];

    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 24 + 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() * 15 + 5
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw top gradient lighting
      const ambientGlow = ctx.createRadialGradient(
        width / 2 + (coords.x - width / 2) * 0.1,
        height / 2 + (coords.y - height / 2) * 0.1,
        10,
        width / 2,
        height / 2,
        width * 0.7
      );
      ambientGlow.addColorStop(0, "rgba(20, 184, 166, 0.06)");
      ambientGlow.addColorStop(0.5, "rgba(14, 116, 144, 0.02)");
      ambientGlow.addColorStop(1, "rgba(248, 250, 252, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Connect Nodes with digital web lines representing dental precision
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.strokeStyle = `rgba(14, 116, 144, ${0.1 - dist / 180})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and Animates each Node component
      nodes.forEach((node) => {
        ctx.shadowBlur = node.glow;
        ctx.shadowColor = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce walls
        if (node.x < -node.radius) node.x = width + node.radius;
        if (node.x > width + node.radius) node.x = -node.radius;
        if (node.y < -node.radius) node.y = height + node.radius;
        if (node.y > height + node.radius) node.y = -node.radius;
      });

      // Reset shadows
      ctx.shadowBlur = 0;

      // Draw interactive laser light under cursor
      const mouseGlow = ctx.createRadialGradient(coords.x, coords.y, 0, coords.x, coords.y, 160);
      mouseGlow.addColorStop(0, "rgba(20, 184, 166, 0.12)");
      mouseGlow.addColorStop(1, "rgba(20, 184, 166, 0)");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [coords]);

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-bg select-none"
    >
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Decorative Blur Backings */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full glow-spot" />
      <div className="absolute bottom-1/5 right-10 w-96 h-96 bg-brand-accent/15 rounded-full glow-spot" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Texts Info (Col 7) */}
        <div id="hero-headlines" className="lg:col-span-7 flex flex-col space-y-8 select-text">
          {/* Top Pill Emblem */}
          <div className="inline-flex self-start items-center space-x-2.5 bg-brand-cyan/10 border border-brand-cyan/25 px-4.5 py-2 rounded-full backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-[11px] font-sans font-bold tracking-wider text-brand-cyan uppercase">
              Bhuvanagiri&apos;s Elite Dental Destination
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-navy tracking-tight leading-[1.1]">
              Transforming Smiles
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent font-semibold">
                With Precision &amp; Care
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-display italic text-brand-cyan tracking-wide">
              Mithra Dental Clinic — Your Smile, Our Premium Responsibility.
            </p>
          </div>

          {/* Subheadline description */}
          <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            Experience state-of-the-art biological dentistry engineered to match international standards in Bhuvanagiri, Telangana. Guided 3D digital oral scanners enable perfect diagnostic results and elite discomfort-free procedures.
          </p>

          {/* CTA Button Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              id="hero-book-cta"
              onClick={() => onScrollTo("booking")}
              className="bg-brand-cyan hover:bg-brand-navy hover:scale-[1.02] text-white text-sm font-bold uppercase tracking-wider px-8 py-4.5 rounded-full flex items-center justify-center space-x-3 shadow-md hover:shadow-xl transition-all cursor-pointer duration-300 transform"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Priority Appointment</span>
            </button>

            <a
              id="hero-call-cta"
              href="tel:+919640408148"
              className="bg-white border-2 border-slate-200 hover:border-brand-accent hover:bg-slate-50 hover:scale-[1.02] text-brand-navy text-sm font-bold uppercase tracking-wider px-8 py-4.5 rounded-full flex items-center justify-center space-x-3 shadow-sm hover:shadow-md transition-all duration-300 transform"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>Call +91 96404 08148</span>
            </a>
          </div>

          {/* Core Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 max-w-lg">
            <div className="flex items-start space-x-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-none">4.9 ★ Rating</h4>
                <p className="text-xs text-slate-500 mt-1">44+ Google Reviews</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-none">100% Sterile</h4>
                <p className="text-xs text-slate-500 mt-1">Class-B Autoclaves</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Award className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-none">German Standard</h4>
                <p className="text-xs text-slate-500 mt-1">Guided 3D Implants</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Frame mimicking Google Stitch luxury overlays (Col 5) */}
        <div id="hero-graphic" className="lg:col-span-5 relative flex justify-center">
          {/* Main Floating Card Container */}
          <div className="relative w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl bg-white p-6 md:p-8 border border-slate-100 floating-element transition-all duration-700 hover:scale-[1.03]">
            {/* Visual Glassmorphic Accent Badge */}
            <div className="absolute top-4 right-4 bg-brand-cyan/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full z-20 shadow-md">
              Mithra CoreTech
            </div>

            {/* Glowing circle backing */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-cyan/20 blur-3xl rounded-full" />

            {/* Main Clinical Artwork */}
            <div className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center bg-radial from-slate-50 to-slate-200">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500"
                alt="Elite Aesthetic Smile Restorations"
                className="w-full h-full object-cover rounded-2xl opacity-90 transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent flex items-end p-4">
                <p className="text-white text-xs font-semibold tracking-wide flex items-center space-x-1.5 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-lg">
                  <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
                  <span>Interactive Treatment Room active</span>
                </p>
              </div>
            </div>

            {/* Diagnostic stats inside card as in references */}
            <div className="mt-6 flex flex-col space-y-4">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Our Clinical Mission</p>
                <h3 className="text-xl font-display font-extrabold text-brand-navy mt-1 tracking-tight">
                  &ldquo;A Confidence Boost Born of Clinical Perfection&rdquo;
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Applying advanced restorative methods to transform alignments, teeth shade, and oral structure comfortably.
              </p>

              {/* Consultation booking micro-cta */}
              <button
                onClick={() => onScrollTo("booking")}
                className="w-full bg-slate-50 hover:bg-slate-100 text-brand-cyan text-xs font-bold py-3.5 rounded-xl border border-slate-200/60 transition-colors text-center"
              >
                Estimate Smile Cost via AI Advise
              </button>
            </div>
          </div>

          {/* Background Decorative Frame Lines */}
          <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-36 h-36 border-b-2 border-l-2 border-brand-accent/30 rounded-bl-[40px] pointer-events-none" />
          <div className="absolute -z-10 top-[-20px] right-[-20px] w-36 h-36 border-t-2 border-r-2 border-brand-cyan/20 rounded-tr-[40px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
