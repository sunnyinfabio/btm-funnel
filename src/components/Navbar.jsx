import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, Menu, X, ArrowRight, Sparkles, Shield, Cpu, Users, RefreshCw, Code2, Layers, Briefcase } from 'lucide-react';

export const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseDropdown, setExpertiseDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertiseItems = [
    { title: 'Staff Augmentation', desc: 'Plug senior specialists directly into active sprints in < 14 days', icon: Users, href: '#solutions' },
    { title: 'Dedicated Teams', desc: 'Autonomous cross-functional pods with tech lead & QA', icon: Cpu, href: '#solutions' },
    { title: 'Software Outsourcing', desc: 'Turnkey product engineering from architecture to production', icon: Code2, href: '#solutions' },
    { title: 'Legacy Modernisation', desc: 'Cloud migrations, microservices & technical debt refactoring', icon: RefreshCw, href: '#solutions' },
    { title: 'Technology Stack', desc: 'Cross-functional .NET, Java, Python, React, Cloud & AI ecosystem', icon: Layers, href: '#tech-stack' },
    { title: 'Focus Industries', desc: 'FinTech, SaaS, Healthcare, Retail, Airlines, Logistics & more', icon: Briefcase, href: '#industries' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-sm border-b border-slate-200' : 'bg-white py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official BTM Outsourcing Logo from live website */}
          <a href="#" className="flex items-center group">
            <img 
              src="/logo-dark.png" 
              alt="BTM Outsourcing — Experience The New Game" 
              className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Expertise Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setExpertiseDropdown(true)}
              onMouseLeave={() => setExpertiseDropdown(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-btm-cyan py-2 transition-colors cursor-pointer">
                <span>Expertise</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expertiseDropdown ? 'rotate-180 text-btm-cyan' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {expertiseDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-88 p-3 rounded-2xl bg-white border border-slate-200 shadow-xl"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {expertiseItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setExpertiseDropdown(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-btm-cyan group-hover/item:border-btm-cyan group-hover/item:scale-105 transition-all">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover/item:text-btm-cyan transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#why-btm" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              Why Us
            </a>
            <a href="#industries" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              Industries
            </a>
            <a href="#tech-stack" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              Tech Stack
            </a>
            <a href="#process" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              Process
            </a>
            <a href="#capacity-calculator" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              ROI Calculator
            </a>
            <a href="#conversion-hub" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              Blueprints
            </a>
            <a href="#consultation" className="text-sm font-semibold text-slate-700 hover:text-btm-cyan transition-colors">
              Request Quote
            </a>
          </nav>

          {/* Right Hub: Direct Phones & Get In Touch Red CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Direct Phone Numbers */}
            <div className="flex flex-col items-end text-[11px] font-mono text-slate-600 border-r border-slate-200 pr-5">
              <a href="tel:+18624371138" className="hover:text-btm-cyan flex items-center gap-1.5 transition-colors">
                <span className="text-[9px] px-1 py-0.2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-bold">USA</span>
                <span className="font-semibold text-slate-800">+1 (862) 437-1138</span>
              </a>
              <a href="tel:+911244104312" className="hover:text-btm-cyan flex items-center gap-1.5 transition-colors mt-0.5">
                <span className="text-[9px] px-1 py-0.2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-bold">IND</span>
                <span className="font-semibold text-slate-800">+91 124 410 4312</span>
              </a>
            </div>

            {/* "Get In Touch" Red CTA matching live site */}
            <button
              onClick={() => onOpenBooking('navbar-get-in-touch')}
              className="px-6 py-2.5 rounded-lg bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-sm shadow-md hover:shadow-red-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 mt-3 space-y-4 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2 font-mono text-xs text-slate-700">
              <a href="tel:+18624371138" className="flex items-center justify-between text-btm-cyan font-semibold">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> USA Direct</span>
                <span>+1 (862) 437-1138</span>
              </a>
              <a href="tel:+911244104312" className="flex items-center justify-between text-btm-cyan font-semibold">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> India Direct</span>
                <span>+91 124 410 4312</span>
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Expertise & Solutions</a>
              <a href="#why-btm" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Why BTM Outsourcing (3D Cards)</a>
              <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Key Focus Industries</a>
              <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Technology Stack</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Our Development Process</a>
              <a href="#capacity-calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">ROI & Capacity Calculator</a>
              <a href="#conversion-hub" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Squad Blueprint Hub</a>
              <a href="#consultation" onClick={() => setMobileMenuOpen(false)} className="py-2">Request A Quote & Consultation</a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('capacity-review');
              }}
              className="w-full py-3.5 rounded-xl bg-[#E62E2E] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get In Touch / Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
