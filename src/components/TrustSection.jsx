import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Globe2,
  FileCheck2,
  Clock,
  Sparkles,
  Quote
} from 'lucide-react';

export const TrustSection = ({ onOpenBooking }) => {
  const certifications = [
    { title: 'SOC 2 Type II', subtitle: 'Security & Availability Certified', org: 'AICPA Standard', icon: ShieldCheck },
    { title: 'ISO 27001', subtitle: 'Information Security Management', org: 'Global Standard', icon: Lock },
    { title: 'HIPAA & HITECH', subtitle: 'Healthcare Data Privacy BAA', org: 'US Federal Standard', icon: FileCheck2 },
    { title: 'PCI-DSS Level 1', subtitle: 'Payment Gateway Compliance', org: 'Financial Security', icon: Award },
  ];

  const evidenceMetrics = [
    { value: '140+', label: 'Active Sprints Delivered', sub: 'Across US & Global Clients' },
    { value: '< 4%', label: 'Engineer Attrition Rate', sub: 'Industry Low (Avg is 22%)' },
    { value: '< 14 Days', label: 'Squad Deployment SLA', sub: 'From Diagnostic to Day 1 PR' },
    { value: '99.4%', label: 'Automated QA Pass Rate', sub: 'Zero Critical Regressions' },
  ];

  const deliveryLocations = [
    {
      country: '🇺🇸 United States',
      hub: 'New Jersey / New York Hub',
      role: 'Client Architecture & Leadership Alignment',
      overlap: 'Direct EST / PST Timezone Sync',
      phone: '+1 (862) 437-1138',
      image: '/services/BTM_Service_SO_Img.jpg',
    },
    {
      country: '🇮🇳 India Delivery Center',
      hub: 'Gurugram, Cyber City Tech Hub',
      role: 'Core Engineering Pods & 24/7 Delivery',
      overlap: '4-7 Hours Real-Time Standup Overlap',
      phone: '+91 124 410 4312',
      image: '/services/BTM_Service_DT_Img.jpg',
    },
  ];

  return (
    <section id="trust" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-800">EVIDENCE-HEAVY GOVERNANCE & CREDENTIALS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Reasons to <span className="text-gradient-cyan">Trust BTM Execution</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Institutional credentials, verified security compliance, low attrition, and Wall Street engineering leadership.
          </p>
        </div>

        {/* 4 Quantitative Evidence Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {evidenceMetrics.map((item, idx) => (
            <div key={item.label} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-[#002B49] mb-1">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-900 mb-0.5">
                {item.label}
              </div>
              <div className="text-[10px] font-mono text-slate-500">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Compliance Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert) => (
            <div key={cert.title} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0">
                <cert.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{cert.title}</div>
                <div className="text-[11px] text-slate-600 leading-tight mt-0.5">{cert.subtitle}</div>
                <span className="text-[9.5px] font-mono text-emerald-600 font-bold block mt-1">{cert.org}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Locations & Real-Time Sync Hub with Background Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {deliveryLocations.map((loc) => (
            <div key={loc.country} className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-800 bg-[#002B49] text-white p-7 flex flex-col justify-between group min-h-[220px]">
              {/* Card Image Background */}
              <img
                src={loc.image}
                alt={loc.hub}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B49] via-[#002B49]/80 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-xl text-white">
                    {loc.country}
                  </span>
                  <span className="text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-btm-cyan">
                    {loc.overlap}
                  </span>
                </div>

                <div className="text-base font-bold text-btm-cyan mb-1">{loc.hub}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{loc.role}</p>
              </div>

              <div className="relative z-10 pt-3 border-t border-slate-700 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Direct Hotline:</span>
                <span className="text-white font-bold">{loc.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The 2-Week Risk-Free Trial Sprint SLA Reversal Banner with Backdrop Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-btm-cyan/40 bg-[#002B49] text-white p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="/btm-why-bg.jpg"
            alt="BTM Risk Free Trial"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B49]/95 via-[#002B49]/85 to-[#0A192F]/95" />

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-btm-gold">
              <Sparkles className="w-4 h-4" />
              <span>THE ULTIMATE RISK REVERSAL GUARANTEE</span>
            </div>
            <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">
              The BTM 2-Week Risk-Free Trial Sprint
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Experience your dedicated squad inside your active Jira sprint backlog for 14 calendar days. If code velocity, communication cadence, and architecture standards do not meet expectations, you owe nothing.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('risk-free-trial')}
            className="relative z-10 px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
          >
            <span>Claim 14-Day Trial Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
