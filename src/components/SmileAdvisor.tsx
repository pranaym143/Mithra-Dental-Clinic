import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, User, HelpCircle, Loader2 } from "lucide-react";

interface ChatTurn {
  role: "user" | "model";
  text: string;
}

export default function SmileAdvisor() {
  const [messages, setMessages] = useState<ChatTurn[]>([
    {
      role: "model",
      text: "Welcome to Mithra Dental Clinic! I am your **Mithra Dental AI Advisor**, trained by Dr. Mithra Prasad to assist with diagnostic education. \n\nAre you curious about Single-Sitting Root Canals, German Dental Implants, Teeth Alignment, or Smile Designing? Ask me any questions, or use one of the quick options below!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const suggestedQuestions = [
    { text: "Are single-session root canals painful?", icon: "⚡" },
    { text: "How long do German Dental Implants last?", icon: "🛡️" },
    { text: "What is Digital Smile Designing?", icon: "✨" },
    { text: "How are dental implants placed?", telugu: false, icon: "🩺" }
  ];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMsg = messageText.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with Mithra AI Advisor.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.text || "I was unable to draft a suggestion. Please contact Dr. Mithra Prasad on +91 96404 08148." }]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "My apologies. Our digital clinic assistant is currently conducting database diagnostics. Please speak directly with our clinic concierge over call **+91 96404 08148**."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 bg-brand-bg relative overflow-hidden select-none">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-text">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/25 px-4 py-1.5 rounded-full uppercase inline-block mb-3 animate-pulse">
            State-of-the-Art AI Diagnostic Assessor
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-navy tracking-tight leading-none">
            Mithra AI Smile Advisor
          </h2>
          <p className="text-sm text-slate-500 mt-3 font-display italic">
            Get instant educational insights regarding your dental health with our advanced assistant
          </p>
          <div className="h-[2px] w-24 bg-brand-cyan/25 mx-auto mt-6" />
        </div>

        {/* Master AI Chat interface container */}
        <div className="bg-white border border-slate-100 rounded-[2rem] shadow-xl overflow-hidden flex flex-col min-h-[640px]">
          
          {/* Diagnostic Top Title Bar with animated wave */}
          <div className="bg-brand-navy p-5 py-6 px-6 md:px-8 flex items-center justify-between border-b border-brand-cyan/30">
            <div className="flex items-center space-x-3.5">
              <div className="bg-brand-cyan p-2.5 rounded-2xl flex items-center justify-center text-white relative">
                <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
                <span className="absolute bottom-[-1px] right-[-1px] w-3 h-3 bg-emerald-400 border-2 border-brand-navy rounded-full" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm md:text-base tracking-tight select-text">
                  Mithra AI Smart Advisor (Dental Assistant)
                </h4>
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#14B8A6] font-semibold">
                  Secure medical concierge feedback
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono font-bold text-slate-400">
              <HelpCircle className="w-4 h-4 text-brand-cyan" />
              <span>Diagnostic Sandbox</span>
            </div>
          </div>

          {/* Chat dialog messages body */}
          <div className="flex-grow p-6 md:p-8 overflow-y-auto space-y-6 max-h-[460px] bg-slate-50/50">
            {messages.map((msg, mIdx) => {
              const oModel = msg.role === "model";
              return (
                <div
                  key={mIdx}
                  className={`flex items-start space-x-3 max-w-[85%] select-text leading-relaxed ${
                    oModel ? "" : "ml-auto flex-row-reverse space-x-reverse"
                  }`}
                >
                  {/* Avatar Icon */}
                  <div
                    className={`p-2 rounded-xl flex items-center justify-center shrink-0 shadow-sm border ${
                      oModel
                        ? "bg-brand-cyan border-brand-cyan/20 text-white"
                        : "bg-brand-navy/10 border-brand-navy/5 text-brand-navy"
                    }`}
                  >
                    {oModel ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Body Speech Bubble */}
                  <div
                    className={`rounded-2xl px-5 py-4 pb-4 shadow-sm border text-[13px] md:text-sm font-sans ${
                      oModel
                        ? "bg-white text-slate-700 border-slate-100"
                        : "bg-brand-cyan text-white border-brand-cyan/30"
                    }`}
                  >
                    {/* Render basic markdown syntax like bolding and line endings simply */}
                    <div className="whitespace-pre-wrap">
                      {msg.text.split("\n\n").map((para, pIdx) => {
                        // Match basic markdown bullet lists
                        if (para.startsWith("-") || para.startsWith("*")) {
                          return (
                            <ul key={pIdx} className="list-disc pl-5 mt-2 mb-2 space-y-1.5 leading-relaxed">
                              {para.split("\n").map((li, lIdx) => (
                                <li key={lIdx}>
                                  {li.replace(/^[\s-*]+/, "").replace(/\*\*([^*]+)\*\*/g, "$1")}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        // Simple Bold support
                        const formattedText = para.split("**").map((textBlock, tIdx) => {
                          if (tIdx % 2 === 1) {
                            return <strong key={tIdx} className={oModel ? "text-brand-navy font-bold" : "text-white font-bold"}>{textBlock}</strong>;
                          }
                          return textBlock;
                        });

                        return (
                          <p key={pIdx} className="mb-2 leading-relaxed font-sans font-medium">
                            {formattedText}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Concierge Active Typing state indicator */}
            {isLoading && (
              <div className="flex items-center space-x-3 max-w-[80%] animate-pulse">
                <div className="p-2.5 bg-brand-cyan rounded-xl text-white">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl px-5 py-3 shadow-xs">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5">
                    <span>Mithra advisor is translating details</span>
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </span>
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>

          {/* Quick preset clicking tags */}
          <div className="p-4 px-6 md:px-8 border-t border-slate-100 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 select-none">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-extrabold shrink-0">
              Suggested Inquiries
            </span>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q, qIdx) => (
                <button
                  id={`suggested-q-${qIdx}`}
                  key={qIdx}
                  onClick={() => handleSend(q.text)}
                  disabled={isLoading}
                  className="bg-slate-50 hover:bg-brand-cyan/5 hover:text-brand-cyan border border-slate-200/60 hover:border-brand-cyan/25 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 cursor-pointer flex items-center space-x-1.5 transition-all"
                >
                  <span>{q.icon}</span>
                  <span className={q.telugu ? "font-sans font-medium text-xs text-brand-cyan" : ""}>{q.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Core message Input Field panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex items-center space-x-3"
          >
            <input
              id="smile-advisor-input"
              type="text"
              placeholder="Ask anything about dental implants, root canals, smile makeovers, or teeth alignment..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-grow bg-white border border-slate-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan rounded-xl px-5 py-3.5 text-sm font-medium placeholder-slate-400 select-text outline-none"
            />
            <button
              id="smile-advisor-submit"
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-cyan hover:bg-brand-navy p-3.5 px-5 rounded-xl text-white shadow-md hover:shadow-lg disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Ask AI</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
