import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Cpu, 
  Users, 
  RefreshCw, 
  Code2, 
  Layers, 
  Briefcase,
  Smartphone,
  CheckCircle2,
  Rocket,
  Award,
  Globe,
  HelpCircle,
  GitBranch
} from 'lucide-react';

export const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertiseDropdown = [
    { title: 'Execution Formula', desc: 'Roadmap → Capacity Gap → BTM Integration → Execution', href: '#pipeline', icon: Layers },
    { title: 'Technology Stack', desc: 'Cross-functional .NET, Java, Python, React, Cloud & AI ecosystem', href: '#tech-stack', icon: Code2 },
    { title: 'Case Studies', desc: 'Challenge → Role → Owned → Outcome vertical deep dives', href: '#industries', icon: Briefcase },
    { title: 'Evidence & Trust', desc: 'SOC2, ISO 27001, global locations & 2-week risk-free trial', href: '#trust', icon: Shield },
    { title: 'Development Process', desc: '6-Phase Agile Sprint delivery lifecycle with Git commit tracking', href: '#process', icon: GitBranch },
    { title: 'Capacity & ROI Calculator', desc: 'Interactive financial modeling & recruiter fee elimination', href: '#capacity-calculator', icon: Sparkles },
  ];

  const industriesList = [
    'Financial Services & FinTech',
    'Technology & Enterprise SaaS',
    'Healthcare & Life Sciences',
    'Retail & Omnichannel E-Commerce',
    'Transportation & Logistics',
    'Airlines & Aviation',
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-md border-b border-slate-200' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official BTM Outsourcing Vector Logo matching live site */}
          <a href="#" className="flex items-center group shrink-0">
            <img 
              src="/logo-dark.png" 
              alt="BTM Outsourcing — Experience The New Game" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            />
          </a>

          {/* Desktop Navigation Links matching exact rhythm */}
          <nav className="hidden lg:flex items-center gap-7 font-display">
            
            {/* 1. Execution Formula Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('expertise')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors cursor-pointer group">
                <span>Expertise</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'expertise' ? 'rotate-180 text-[#E62E2E]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'expertise' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-[500px] p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl z-50 grid grid-cols-2 gap-2"
                  >
                    {expertiseDropdown.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-btm-cyan group-hover/item:border-[#E62E2E] group-hover/item:text-[#E62E2E] transition-colors shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#E62E2E] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#tech-stack" className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors">
              Ecosystem
            </a>

            <a href="#thought-leadership" className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors">
              Leadership
            </a>

            <a href="#industries" className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors">
              Cases
            </a>

            <a href="#trust" className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors">
              Evidence & Trust
            </a>

            <a href="#process" className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors">
              Timeline
            </a>

            <a href="#capacity-calculator" className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors">
              ROI Calculator
            </a>
          </nav>

          {/* Right Hub: Clean Red "Get In Touch" Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onOpenBooking('navbar-get-in-touch')}
              className="px-8 py-3 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-sm shadow-md hover:shadow-red-500/25 transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
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
            className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 mt-3 space-y-4 shadow-xl"
          >
            <div className="flex flex-col gap-2 text-sm font-bold text-slate-800">
              <a href="#pipeline" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Execution Formula</a>
              <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Technology Ecosystem</a>
              <a href="#thought-leadership" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Leadership Perspective</a>
              <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Featured Case Studies</a>
              <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Evidence & Trust</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Development Process</a>
              <a href="#capacity-calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">ROI Calculator</a>
              <a href="#consultation" onClick={() => setMobileMenuOpen(false)} className="py-2">Request A Quote</a>
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
