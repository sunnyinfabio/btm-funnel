import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Layers, 
  Cpu, 
  Zap, 
  ChevronRight, 
  SlidersHorizontal,
  FileCode2,
  Lock,
  Gauge
} from 'lucide-react';

export const ConversionCards = ({ onSelectPathway }) => {
  const [activeTab, setActiveTab] = useState(1); // Default to Blueprint

  const pathways = [
    {
      id: 0,
      slug: 'capacity-review',
      title: 'NS Capacity Review',
      subtitle: 'Diagnostic & Funnel Bottleneck Identification',
      badge: 'Rapid Diagnostic',
      badgeColor: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30',
      description: 'A deep-dive analytical session examining top-to-bottom pipeline friction, qualification dropoffs, and immediate revenue capacity.',
      turnaround: '48 Hours',
      deliverables: [
        'End-to-End Funnel Leakage Heatmap',
        'ICP Qualification & Dropoff Analysis',
        'Lead-to-Opportunity Latency Benchmark',
        'Immediate Revenue Capacity Projection',
      ],
      idealFor: 'Mid-market & SaaS teams losing >40% of inbound demo requests.',
      ctaText: 'Book Capacity Review',
      highlight: false,
    },
    {
      id: 1,
      slug: 'blueprint-architecture',
      title: 'Full NS Architecture Blueprint',
      subtitle: 'Complete High-Converting Funnel Overhaul',
      badge: 'Most Popular',
      badgeColor: 'text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-violet font-bold',
      description: 'The end-to-end engineered conversion engine designed for scalable enterprise capture, dynamic edge routing, and automated calendar loading.',
      turnaround: '10 Business Days',
      deliverables: [
        'Custom High-Converting Landers & Funnel UI',
        'Multi-Step Automated Qualification Engine',
        'HubSpot / Salesforce / Stripe Two-Way Sync',
        'Edge Routing with Dynamic Personalization',
        'Real-time Analytics & Conversion Telemetry',
      ],
      idealFor: 'High-growth B2B companies aiming for 2x - 4x pipeline acceleration.',
      ctaText: 'Deploy NS Blueprint',
      highlight: true,
    },
    {
      id: 2,
      slug: 'audit-optimization',
      title: 'Continuous Velocity Optimization',
      subtitle: 'Retained Performance & Algorithmic A/B Testing',
      badge: 'Enterprise Growth',
      badgeColor: 'text-brand-violet bg-brand-violet/10 border-brand-violet/30',
      description: 'Ongoing algorithmic split testing, offer engineering, and frictionless lead qualification to maintain peak enterprise conversion margins.',
      turnaround: 'Ongoing Partnership',
      deliverables: [
        'Bi-weekly Multivariate Experiment Sprints',
        'Automated Edge Re-routing & Lead Enrichment',
        'Dedicated Conversion Engineer & Architect',
        'SLA-Backed 99.99% Funnel Uptime & Speed',
      ],
      idealFor: 'Enterprise teams spending $50k+/mo on acquisition with multi-stage sales.',
      ctaText: 'Apply For Retained Audit',
      highlight: false,
    },
  ];

  return (
    <section id="pathways" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-brand-cyan text-xs font-mono mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>MODULAR ENGAGEMENT PATHWAYS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Choose Your <span className="gradient-text-cyan">Conversion Engine</span> Path
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineered to meet your team precisely where you are: from rapid diagnostic stress-tests to complete architecture deployment.
          </p>
        </div>

        {/* 3 Pathway Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pathways.map((pathway) => {
            const isSelected = activeTab === pathway.id;
            return (
              <motion.div
                key={pathway.id}
                onClick={() => setActiveTab(pathway.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  pathway.highlight
                    ? 'glass-card border-brand-cyan/50 shadow-glow-cyan bg-slate-900/80 ring-1 ring-brand-cyan/40'
                    : isSelected
                    ? 'glass-card border-slate-500 bg-slate-900/60 shadow-xl'
                    : 'glass-card border-slate-800/80 bg-surface/70 hover:border-slate-700'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full border ${pathway.badgeColor} font-mono`}>
                    {pathway.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Gauge className="w-3 h-3 text-slate-500" />
                    {pathway.turnaround}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
                    {pathway.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-cyan mb-4">
                    {pathway.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pathway.description}
                  </p>

                  {/* Target Fit Indicator */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 mb-6">
                    <strong className="text-slate-200 block mb-1">Target Fit:</strong>
                    {pathway.idealFor}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Core Deliverables:
                    </span>
                    {pathway.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <div className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action - Pill Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPathway(pathway.slug);
                  }}
                  className={`w-full py-4 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                    pathway.highlight
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-emerald text-slate-950 shadow-glow-cyan hover:opacity-95 shimmer-button'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-brand-cyan/50'
                  }`}
                >
                  <span>{pathway.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
