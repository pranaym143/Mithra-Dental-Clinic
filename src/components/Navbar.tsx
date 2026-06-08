import { useState, useEffect } from "react";
import { Phone, Menu, X, Sparkles, Calendar } from "lucide-react";

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollTo, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Clinic & Tech", id: "tech" },
    { label: "Smile Advisor", id: "advisor" },
    { label: "Doctors", id: "doctors" },
    { label: "Booking", id: "booking" }
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-sm py-4 border-b border-white/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          id="nav-logo"
          onClick={() => onScrollTo("home")}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="bg-brand-navy p-2 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="font-display font-bold text-lg md:text-xl text-brand-navy tracking-tight">
                MITHRA
              </span>
              <span className="text-xs font-mono tracking-wider text-brand-cyan uppercase">
                Dental Clinic
              </span>
            </div>
            <p className="text-[10px] font-sans font-medium text-slate-500 -mt-1 tracking-wider leading-none">
              Mithra Family Practice
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div id="desktop-nav-links" className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.id}`}
              key={item.id}
              onClick={() => {
                onScrollTo(item.id);
                setIsOpen(false);
              }}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer relative py-1 ${
                activeSection === item.id
                  ? "text-brand-cyan"
                  : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-cyan rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA & Contact Details */}
        <div id="nav-cta" className="hidden lg:flex items-center space-x-4">
          <a
            id="nav-call"
            href="tel:+919640408148"
            className="flex items-center space-x-2 text-slate-700 hover:text-brand-cyan transition-colors text-sm font-semibold"
          >
            <div className="p-2 bg-slate-100 rounded-lg">
              <Phone className="w-4 h-4 text-brand-cyan" />
            </div>
            <span>+91 96404 08148</span>
          </a>

          <button
            id="nav-book-btn"
            onClick={() => onScrollTo("booking")}
            className="bg-brand-cyan hover:bg-brand-navy text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full flex items-center space-x-2 shadow-sm transition-all hover:shadow-md cursor-pointer duration-300"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-3">
          <a
            id="mobile-phone-btn"
            href="tel:+919640408148"
            className="p-2 sm:p-2.5 bg-brand-cyan/10 rounded-xl text-brand-cyan inline-flex"
            aria-label="Call clinic"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>
          <button
            id="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed top-[72px] left-0 w-full bg-white border-b border-slate-200/80 shadow-lg px-6 py-8 flex flex-col space-y-6 z-40 transition-all duration-300 animate-slide-down"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-item-${item.id}`}
                key={item.id}
                onClick={() => {
                  onScrollTo(item.id);
                  setIsOpen(false);
                }}
                className={`text-left text-base font-semibold py-1 border-l-2 pl-3 ${
                  activeSection === item.id
                    ? "text-brand-cyan border-brand-cyan"
                    : "text-slate-600 border-transparent hover:text-brand-navy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-4">
            <a
              id="mobile-nav-call"
              href="tel:+919640408148"
              className="flex items-center space-x-3 text-slate-800 font-semibold"
            >
              <div className="p-3 bg-slate-100 rounded-xl">
                <Phone className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-slate-400">Call Support</span>
                <span className="text-sm">+91 96404 08148</span>
              </div>
            </a>

            <button
              id="mobile-nav-book"
              onClick={() => {
                onScrollTo("booking");
                setIsOpen(false);
              }}
              className="w-full bg-brand-navy hover:bg-brand-cyan text-white text-center text-sm font-bold tracking-wider py-4 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
