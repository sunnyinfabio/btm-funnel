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
  HelpCircle
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
    { title: 'Staff Augmentation', desc: 'Plug senior specialists directly into active sprints in < 14 days', href: '#solutions', icon: Users },
    { title: 'Dedicated Teams', desc: 'Autonomous cross-functional pods with tech lead & QA', href: '#solutions', icon: Cpu },
    { title: 'Software Outsourcing', desc: 'Turnkey product engineering from architecture to production', href: '#solutions', icon: Code2 },
    { title: 'Legacy Modernisation', desc: 'Cloud migrations, microservices & technical debt refactoring', href: '#solutions', icon: RefreshCw },
    { title: 'Web Development', desc: 'Modern high-performance web applications (React / Next.js / Angular)', href: '#tech-stack', icon: Globe },
    { title: 'Mobile Development', desc: 'Native iOS & Android and cross-platform Flutter/React Native', href: '#tech-stack', icon: Smartphone },
    { title: 'Quality Assurance', desc: 'Automated CI/CD end-to-end regression test suites (Playwright / Cypress)', href: '#tech-stack', icon: Shield },
    { title: 'Startups & Scale-Ups', desc: 'Accelerate post-funding execution velocity without recruiting lag', href: '#abm', icon: Rocket },
  ];

  const aboutDropdown = [
    { title: 'Why Us (3D Dossiers)', desc: 'Client focus, Wall Street pedigree, proprietary tools & 24/7 sync', href: '#why-btm', icon: Award },
    { title: 'Our Development Process', desc: '6-Phase Agile Sprint delivery lifecycle with Git commit tracking', href: '#process', icon: Layers },
    { title: 'Technology Stack', desc: 'Enterprise ecosystem across .NET, Java, Python, Cloud & AI', href: '#tech-stack', icon: Code2 },
    { title: 'ROI & Capacity Calculator', desc: 'Interactive financial modeling & recruiter fee elimination', href: '#capacity-calculator', icon: Sparkles },
    { title: 'Sprint Velocity Simulator', desc: 'Compare 60-day in-house hiring lag vs BTM dedicated pods', href: '#velocity-simulator', icon: Cpu },
  ];

  const industriesList = [
    'Financial Services & FinTech',
    'Technology & Enterprise SaaS',
    'Retail & E-Commerce',
    'Healthcare & Life Sciences',
    'Transportation & Logistics',
    'Airlines & Aviation',
    'Insurance & InsurTech',
    'Automotive & Connected Mobility',
    'Consumer Packaged Goods',
    'Government & Public Sector',
    'Media & Entertainment',
    'Restaurant & Hospitality',
    'Telecommunication',
    'Oil, Gas & Utilities',
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

          {/* Desktop Navigation Links matching live site screenshot */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-display">
            
            {/* 1. Expertise Dropdown */}
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
                    className="absolute top-full left-0 w-[520px] p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl z-50 grid grid-cols-2 gap-2"
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

            {/* 2. About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors cursor-pointer">
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#E62E2E]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xl z-50 space-y-1"
                  >
                    {aboutDropdown.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-btm-cyan group-hover/item:border-[#E62E2E] group-hover/item:text-[#E62E2E] transition-colors shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#E62E2E] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[10.5px] text-slate-500 leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors cursor-pointer">
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#E62E2E]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-[480px] p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl z-50"
                  >
                    <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                      Key Domain Verticals:
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {industriesList.map((ind) => (
                        <a
                          key={ind}
                          href="#industries"
                          onClick={() => setActiveDropdown(null)}
                          className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-[#E62E2E] font-medium text-slate-700 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-btm-cyan" />
                          <span>{ind}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Direct Links */}
            <a 
              href="https://btmoutsourcing.com/see-open-positions.php" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors"
            >
              Careers
            </a>

            <a 
              href="#tech-stack" 
              className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors"
            >
              Tech Stack
            </a>

            <a 
              href="#capacity-calculator" 
              className="text-sm font-bold text-slate-800 hover:text-[#E62E2E] py-2 transition-colors"
            >
              ROI Estimator
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
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Expertise & Solutions</a>
              <a href="#why-btm" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Why BTM (3D Dossiers)</a>
              <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Industries</a>
              <a href="#tech-stack" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Technology Stack</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Development Process</a>
              <a href="#capacity-calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">ROI Calculator</a>
              <a href="#conversion-hub" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Blueprint Hub</a>
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
