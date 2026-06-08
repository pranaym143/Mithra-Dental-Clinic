import { CLINIC_DOCTORS } from "../types";
import { Award, GraduationCap, Languages, Sparkles } from "lucide-react";

export default function DoctorShowcase() {
  return (
    <section id="doctors" className="py-24 bg-white relative overflow-hidden select-none">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-20 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E75A24] bg-orange-50 px-4 py-1.5 rounded-full uppercase inline-block mb-3">
            Our Dental Command
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-none">
            Meet Our Exceptional Surgeons
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-display italic">
            Mithra clinical specialist group — decades of experience and academic excellence
          </p>
          <div className="h-[2px] w-24 bg-brand-cyan/20 mx-auto mt-6" />
        </div>

        {/* Doctors Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CLINIC_DOCTORS.map((doc, idx) => {
            const isMithra = doc.name.includes("Mithra");
            return (
              <div
                id={`doc-card-${idx}`}
                key={idx}
                className="bg-slate-50/70 border border-slate-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-500"
              >
                {/* Doctor Portrait Placeholder mimicking high-end medical photosets as seen in Screenshot 4 */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-[2rem] overflow-hidden shadow-md bg-gradient-to-tr from-brand-navy to-brand-cyan p-1">
                    <div className="w-full h-full bg-slate-100 rounded-[1.8rem] overflow-hidden relative">
                      <img
                        src={
                          isMithra
                            ? "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" // Male professional dentist
                            : "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400" // Female professional practitioner
                        }
                        alt={doc.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent flex items-end justify-center p-3">
                        <span className="text-[10px] text-brand-accent uppercase font-mono tracking-widest font-bold">
                          {doc.name.includes("Mithra") ? "Chief Surgeon" : "Co-Founder"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Digital Signature tag under portrait */}
                  <div className="mt-4 text-center">
                    <p className="text-xs font-serif italic text-slate-400">Verified Practitioner</p>
                    <p className="text-[10px] font-mono font-medium text-slate-500 mt-1">TSMC REG #{8500 + idx * 420}</p>
                  </div>
                </div>

                {/* Doctor Credentials Details column */}
                <div className="flex-grow flex flex-col justify-between space-y-6 select-text">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-display font-extrabold text-brand-navy tracking-tight">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-mono font-bold text-brand-cyan tracking-wider mt-1 uppercase">
                        {doc.role}
                      </p>
                      <p className="text-xs font-medium text-slate-500 mt-1 italic">
                        {doc.credentials}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {doc.bio}
                    </p>
                  </div>

                  {/* Bullet specifics: Education, specialties, languages */}
                  <div className="space-y-4 pt-4 border-t border-slate-200/60 text-xs">
                    
                    {/* Specialty */}
                    <div className="flex items-start space-x-2.5">
                      <Award className="w-4.5 h-4.5 text-brand-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900">Key Specialty</h4>
                        <p className="text-slate-500 font-medium mt-0.5 leading-normal">{doc.specialty}</p>
                      </div>
                    </div>

                    {/* Academic Certifications */}
                    <div className="flex items-start space-x-2.5">
                      <GraduationCap className="w-4.5 h-4.5 text-brand-cyan shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-900">Academic Education</h4>
                        <ul className="list-disc pl-4 text-slate-500 font-medium space-y-0.5 mt-1 leading-normal">
                          {doc.education.map((edu, eIdx) => (
                            <li key={eIdx}>{edu}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Languages Spoken */}
                    <div className="flex items-center space-x-2.5 bg-slate-100 rounded-xl px-3 py-2 w-fit">
                      <Languages className="w-4 h-4 text-slate-600 shrink-0" />
                      <span className="font-semibold text-slate-700 text-[10px] uppercase tracking-wider">
                        Spoken: {doc.languages.join(" • ")}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
