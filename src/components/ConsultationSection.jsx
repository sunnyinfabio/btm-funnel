import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Building, 
  User, 
  FileText,
  Lock,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Staff Augmentation',
    industry: 'Enterprise SaaS & Cloud',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization) {
      alert('Please provide your name, organization, and work email.');
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A3E0', '#00D2FF', '#F5A623', '#10B981']
      });
    }, 1000);
  };

  return (
    <section id="consultation" className="relative py-28 overflow-hidden">
      {/* Background Image Layer with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/btm-office-bg.jpg"
          alt="BTM Architecture Office Collaboration"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.1] scale-105"
        />
        {/* Soft Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A11] via-transparent to-[#070A11] opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A11] via-[#0A192F]/80 to-[#070A11]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-btm-navy/90 border border-btm-cyan/40 text-btm-cyan text-xs font-mono mb-4 shadow-btm-glow">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT EXECUTIVE CONSULTATION</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                Write To Us For More Information Or <span className="text-gradient-cyan">No-Obligation Consultation</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Discuss your engineering bottlenecks, roadmap deadlines, and squad architecture directly with our senior technology leadership.
              </p>
            </div>

            {/* Direct Telephone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+18624371138"
                className="glass-card-btm rounded-2xl p-5 border border-white/10 hover:border-btm-cyan/50 hover:bg-slate-900/90 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-btm-navy border border-btm-cyan/30 text-btm-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">USA Direct Hotline</div>
                  <div className="text-sm font-bold text-white group-hover:text-btm-cyan transition-colors">
                    +1 (862) 437-1138
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">● EST Business Hours Active</div>
                </div>
              </a>

              <a
                href="tel:+911244104312"
                className="glass-card-btm rounded-2xl p-5 border border-white/10 hover:border-btm-cyan/50 hover:bg-slate-900/90 transition-all flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-btm-navy border border-btm-cyan/30 text-btm-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">India Direct Hotline</div>
                  <div className="text-sm font-bold text-white group-hover:text-btm-cyan transition-colors">
                    +91 124 410 4312
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">● Global Operations Center</div>
                </div>
              </a>
            </div>

            {/* SLA & Governance Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-btm-cyan" /> 24-Hour Executive Response
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Mutual NDA Enforced
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Lock className="w-4 h-4 text-btm-gold" /> 100% IP Security
              </span>
            </div>
          </div>

          {/* Right Column: "Request A Quote" Form Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-btm rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl bg-[#0A192F]/90 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-btm-cyan via-btm-electric to-btm-gold" />

              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      Request A Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                      Fast-track engineering deployment • Turnaround within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Full Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Organization's Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            placeholder="Enterprise Inc."
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            required
                            placeholder="john@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Select Service <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none"
                        >
                          <option>Staff Augmentation</option>
                          <option>Dedicated Engineering Squads</option>
                          <option>Full Software Outsourcing</option>
                          <option>Technology Modernisation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                          Select Industry <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none"
                        >
                          <option>FinTech & Financial Services</option>
                          <option>Enterprise SaaS & Cloud</option>
                          <option>Retail & E-Commerce</option>
                          <option>Healthcare & Life Sciences</option>
                          <option>Logistics & Supply Chain</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        How Can We Help! <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows="3"
                        required
                        placeholder="Briefly describe your required tech stack, seniority, or sprint targets..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-200 text-xs focus:border-btm-cyan focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan via-btm-electric to-btm-gold text-slate-950 font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 shimmer-btm"
                    >
                      {isSubmitting ? (
                        <span>Processing Quote Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Quote Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">Quote Request Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. A dedicated Technical Account Director has been assigned to <strong className="text-btm-cyan">{formData.organization}</strong> and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
