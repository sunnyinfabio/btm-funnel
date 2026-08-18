import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Quote,
  X,
  FileText,
  Check
} from 'lucide-react';
import { HolographicTiltCard } from './HolographicTiltCard';

export const TrustSection = ({ onOpenBooking }) => {
  const [selectedCertModal, setSelectedCertModal] = useState(null);

  const certifications = [
    { 
      id: 'soc2',
      title: 'SOC 2 Type II', 
      subtitle: 'Security & Availability Certified', 
      org: 'AICPA Standard', 
      icon: ShieldCheck,
      scope: 'Annual independent third-party audit covering Trust Services Criteria for Security, Availability, and Confidentiality across all engineering hubs.',
      controls: ['Clean-Room Workstations', 'Encrypted Code Repositories', 'Role-Based Access Control (RBAC)', 'Continuous Automated Audit Logging'],
    },
    { 
      id: 'iso',
      title: 'ISO 27001', 
      subtitle: 'Information Security Management', 
      org: 'Global Standard', 
      icon: Lock,
      scope: 'Institutional Information Security Management System (ISMS) governing data protection, asset management, and business continuity.',
      controls: ['Strict Device Encryption (BitLocker/FileVault)', 'Multi-Factor Biometric Auth', 'Quarterly Penetration Tests', 'Disaster Recovery RPO < 1hr'],
    },
    { 
      id: 'hipaa',
      title: 'HIPAA & HITECH', 
      subtitle: 'Healthcare Data Privacy BAA', 
      org: 'US Federal Standard', 
      icon: FileCheck2,
      scope: 'Comprehensive healthcare privacy safeguards and Business Associate Agreements (BAA) for protected health information (PHI).',
      controls: ['Signed BAA Contracts', 'Zero Local PHI Storage Protocols', 'End-to-End TLS 1.3 Encryption', 'Strict HIPAA Workforce Training'],
    },
    { 
      id: 'pci',
      title: 'PCI-DSS Level 1', 
      subtitle: 'Payment Gateway Compliance', 
      org: 'Financial Security', 
      icon: Award,
      scope: 'Highest tier payment card industry data security standard for processing, tokenization, and high-concurrency fintech transactions.',
      controls: ['Cardholder Data Environment Isolation', 'Automated Vulnerability Scans', 'Strict Network Segmentation', 'Dual-Control Key Management'],
    },
  ];

  const evidenceMetrics = [
    { value: '140+', label: 'Active Sprints Delivered', sub: 'Across US & Global Clients' },
    { value: '< 4%', label: 'Engineer Attrition Rate', sub: 'Industry Low (Avg is 22%)' },
    { value: '< 14 Days', label: 'Squad Deployment SLA', sub: 'From Diagnostic to Day 1 PR' },
    { value: '99.4%', label: 'Automated QA Pass Rate', sub: 'Zero Critical Regressions' },
  ];

  const deliveryLocations = [
    {
      country: '🇺🇸 United States Hub',
      hub: 'New Jersey / New York Delivery Center',
      role: 'Client Architecture & Leadership Alignment',
      overlap: 'Direct EST / PST Timezone Sync',
      phone: '+1 (862) 437-1138',
      image: '/services/BTM_Service_SO_Img.jpg',
    },
    {
      country: '🇮🇳 India Delivery Hub',
      hub: 'Gurugram, Cyber City Tech Center',
      role: 'Core Engineering Pods & 24/7 Delivery',
      overlap: '4-7 Hours Real-Time Standup Overlap',
      phone: '+91 124 410 4312',
      image: '/services/BTM_Service_DT_Img.jpg',
    },
  ];

  return (
    <section id="trust" className="py-20 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold text-slate-800">EVIDENCE-HEAVY GOVERNANCE & CREDENTIALS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-3">
            Reasons to <span className="text-gradient-cyan">Trust BTM Execution</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Institutional credentials, verified security compliance, low attrition, and Wall Street engineering leadership.
          </p>
        </div>

        {/* 4 Quantitative Evidence Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {evidenceMetrics.map((item) => (
            <div key={item.label} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-3xl sm:text-4xl font-display font-black text-[#002B49] mb-1">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-900 mb-0.5">
                {item.label}
              </div>
              <div className="text-[10.5px] font-mono text-slate-500">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Compliance Certifications Grid with Progressive Disclosure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {certifications.map((cert) => (
            <HolographicTiltCard
              key={cert.title}
              maxRotation={8}
              glareOpacity={0.2}
              onClick={() => setSelectedCertModal(cert)}
              className="p-5 bg-white border border-slate-200 hover:border-emerald-400 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9.5px] font-mono text-emerald-600 font-bold px-2 py-0.5 rounded bg-emerald-50">
                    {cert.org}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {cert.title}
                </div>
                <div className="text-xs text-slate-500 leading-tight mt-1">
                  {cert.subtitle}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-700 font-bold">
                <span>Inspect Audit Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </HolographicTiltCard>
          ))}
        </div>

        {/* Delivery Locations & Real-Time Sync Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {deliveryLocations.map((loc) => (
            <div key={loc.country} className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-800 bg-[#002B49] text-white p-6 flex flex-col justify-between group min-h-[190px]">
              <img
                src={loc.image}
                alt={loc.hub}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B49] via-[#002B49]/80 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-lg text-white">
                    {loc.country}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-700 text-btm-cyan">
                    {loc.overlap}
                  </span>
                </div>
                <div className="text-sm font-bold text-btm-cyan mb-1">{loc.hub}</div>
                <p className="text-xs text-slate-300">{loc.role}</p>
              </div>

              <div className="relative z-10 pt-2 border-t border-slate-700 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Direct Hotline:</span>
                <span className="text-white font-bold">{loc.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The 2-Week Risk-Free Trial Sprint Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-btm-cyan/40 bg-[#002B49] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="/btm-why-bg.jpg"
            alt="BTM Risk Free Trial"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B49]/95 via-[#002B49]/85 to-[#0A192F]/95" />

          <div className="relative z-10 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-btm-gold font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ULTIMATE RISK REVERSAL GUARANTEE</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              The BTM 2-Week Risk-Free Trial Sprint
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Experience your dedicated squad inside your active Jira sprint backlog for 14 calendar days. If velocity, communication cadence, and code quality do not meet expectations, you owe nothing.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('risk-free-trial')}
            className="relative z-10 px-8 py-3.5 rounded-full bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
          >
            <span>Claim 14-Day Trial Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* On-Demand Security & Audit Specification Modal */}
      <AnimatePresence>
        {selectedCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-slate-200 shadow-2xl space-y-5 relative"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                    <selectedCertModal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {selectedCertModal.org}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#002B49] mt-0.5">
                      {selectedCertModal.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scope */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[10.5px] font-mono uppercase text-slate-400 font-bold block mb-1">
                    Audit Verification Scope
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {selectedCertModal.scope}
                  </p>
                </div>

                <div>
                  <span className="text-[10.5px] font-mono uppercase text-slate-400 font-bold block mb-2">
                    Enforced Security Controls
                  </span>
                  <div className="space-y-2">
                    {selectedCertModal.controls.map((ctrl) => (
                      <div key={ctrl} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ctrl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer - Pill Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCertModal(null)}
                  className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 font-mono text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const cert = selectedCertModal;
                    setSelectedCertModal(null);
                    onOpenBooking(`security-report-${cert.id}`);
                  }}
                  className="px-7 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Full {selectedCertModal.title} Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
