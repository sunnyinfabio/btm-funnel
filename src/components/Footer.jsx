import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Check, Award, Lock } from 'lucide-react';

export const Footer = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#05080E] pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-btm-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Official BTM Brand & Pedigree */}
          <div className="md:col-span-5">
            {/* Official Logo Light */}
            <div className="mb-4">
              <img 
                src="/logo-light.png" 
                alt="BTM Outsourcing — Experience The New Game" 
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Embedding senior, pre-vetted engineering squads directly into active sprints. Founded and led by Wall Street & Enterprise systems veterans.
            </p>

            {/* Direct Telephone Points */}
            <div className="space-y-2 mb-6 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-btm-cyan shrink-0" />
                <span className="text-slate-400">USA:</span>
                <a href="tel:+18624371138" className="hover:text-btm-cyan transition-colors font-bold">+1 (862) 437-1138</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-btm-cyan shrink-0" />
                <span className="text-slate-400">IND:</span>
                <a href="tel:+911244104312" className="hover:text-btm-cyan transition-colors font-bold">+91 124 410 4312</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-btm-cyan shrink-0" />
                <span className="text-slate-400">Email:</span>
                <a href="mailto:info@btmoutsourcing.com" className="hover:text-btm-cyan transition-colors font-bold">info@btmoutsourcing.com</a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>SOC2 Type II & ISO 27001 Certified Facilities</span>
            </div>
          </div>

          {/* Col 2: Solutions Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#solutions" className="hover:text-btm-cyan transition-colors">Staff Augmentation</a></li>
              <li><a href="#solutions" className="hover:text-btm-cyan transition-colors">Dedicated Pods</a></li>
              <li><a href="#solutions" className="hover:text-btm-cyan transition-colors">Software Outsourcing</a></li>
              <li><a href="#solutions" className="hover:text-btm-cyan transition-colors">Legacy Modernisation</a></li>
              <li><a href="#tech-stack" className="hover:text-btm-cyan transition-colors">Technology Stack</a></li>
              <li><a href="#process" className="hover:text-btm-cyan transition-colors">Agile Process</a></li>
            </ul>
          </div>

          {/* Col 3: Focus Verticals */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold mb-4">
              Focus Industries
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#industries" className="hover:text-btm-cyan transition-colors">FinTech & Trading</a></li>
              <li><a href="#industries" className="hover:text-btm-cyan transition-colors">Enterprise SaaS</a></li>
              <li><a href="#industries" className="hover:text-btm-cyan transition-colors">Retail & E-Commerce</a></li>
              <li><a href="#industries" className="hover:text-btm-cyan transition-colors">Healthcare Systems</a></li>
              <li><a href="#industries" className="hover:text-btm-cyan transition-colors">Logistics & Fleet</a></li>
              <li><a href="#industries" className="hover:text-btm-cyan transition-colors">Airlines & Aviation</a></li>
            </ul>
          </div>

          {/* Col 4: Rapid Diagnostic */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-bold mb-4">
              Sprint Audit
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Schedule a 45-minute capacity review with our Principal Architects to unblock your sprint backlog.
            </p>
            <button
              onClick={() => onOpenBooking('footer-review')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Book Capacity Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} BTM Outsourcing. All Rights Reserved. Clean-Room IP Assignment.
          </div>
          <div className="flex gap-6 font-mono text-[11px]">
            <a href="https://btmoutsourcing.com/privacy-policy.php" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Privacy Policy</a>
            <a href="https://btmoutsourcing.com/see-open-positions.php" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Careers</a>
            <a href="https://btmoutsourcing.com/contact-us.php" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
