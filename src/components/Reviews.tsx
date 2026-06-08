import { useState } from "react";
import { CLINIC_REVIEWS } from "../types";
import { Star, MessageSquare, Heart, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevReview = () => {
    setActiveIdx((prev) => (prev === 0 ? CLINIC_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIdx((prev) => (prev === CLINIC_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = CLINIC_REVIEWS[activeIdx];

  return (
    <section id="reviews" className="py-24 bg-brand-bg relative overflow-hidden select-none">
      
      {/* Background soft glowing blur sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 animate-fade-in">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E75A24] bg-orange-50 px-4 py-1.5 rounded-full uppercase inline-block mb-3">
            Patient Satisfaction Score
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-none">
            Verified Glowing Testimonials
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-display italic">
            Candid reviews from our beloved patients — 4.9★ Google rating with verified dental feedback
          </p>
          <div className="h-[2px] w-24 bg-brand-cyan/25 mx-auto mt-6" />
        </div>

        {/* Global Google Rating Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center text-center max-w-4xl mx-auto bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm mb-12 select-text">
          <div className="space-y-1">
            <h4 className="text-4xl font-display font-black text-brand-navy">4.9 ★</h4>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Google Rating</p>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-200/60 py-4.5 md:py-0">
            <h4 className="text-4xl font-display font-black text-brand-cyan">44+</h4>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Positive Reviews</p>
          </div>
          <div className="space-y-1 flex flex-col items-center justify-center">
            <div className="flex space-x-0.5 text-amber-500 fill-amber-500 mb-1.5">
              {[...Array(5)].map((_, rIdx) => (
                <Star key={rIdx} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-xs font-bold text-brand-navy uppercase tracking-wider">100% Verified Patients</p>
          </div>
        </div>

        {/* Interactive Reviews Slider */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm animate-fade-in relative min-h-[320px] flex flex-col justify-between max-w-4xl mx-auto select-text">
          
          <div className="absolute top-8 right-10 text-[140px] font-display font-black text-slate-100/40 select-none pointer-events-none leading-none z-0">
            &ldquo;
          </div>

          <div className="relative z-10 space-y-6">
            {/* Stars & Treatment indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex space-x-1 text-amber-500 fill-amber-500">
                {[...Array(activeReview.rating)].map((_, sIdx) => (
                  <Star key={sIdx} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="bg-slate-100 text-brand-cyan font-mono text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-slate-200/60 w-fit">
                Treatment: {activeReview.treatmentReceived}
              </span>
            </div>

            {/* Testimonial Core Text */}
            <p className="text-base sm:text-lg text-slate-700 tracking-wide leading-relaxed font-sans font-medium">
              &ldquo;{activeReview.text}&rdquo;
            </p>

            {/* Author info */}
            <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 w-fit">
              <div className="bg-brand-cyan/10 p-2.5 rounded-xl text-brand-cyan">
                <Heart className="w-5 h-5 fill-brand-cyan" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm leading-tight">{activeReview.author}</h4>
                <p className="text-[10px] text-slate-400 mt-0.5 font-mono uppercase tracking-widest font-semibold flex items-center space-x-1">
                  <span>Verified Patient from {activeReview.location}</span>
                  <span>&bull;</span>
                  <span>{activeReview.date}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Slider trigger arrows */}
          <div className="flex items-center space-x-2.5 mt-8 border-t border-slate-100 pt-6 justify-end relative z-10 select-none">
            <button
              id="slider-prev-btn"
              onClick={prevReview}
              className="p-3 border border-slate-200 text-slate-600 hover:text-brand-cyan hover:border-brand-cyan/30 rounded-full transition-all bg-white hover:bg-slate-50 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="slider-next-btn"
              onClick={nextReview}
              className="p-3 border border-slate-200 text-slate-600 hover:text-brand-cyan hover:border-brand-cyan/30 rounded-full transition-all bg-white hover:bg-slate-50 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
