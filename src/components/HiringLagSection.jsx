import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, AlertTriangle, ArrowRight, CheckCircle2, XCircle, TrendingDown, Sparkles } from 'lucide-react';

export const HiringLagSection = ({ onOpenBooking }) => {
  const comparisonData = [
    {
      id: 'time',
      title: 'Time-to-Market Lost',
      icon: Clock,
      traditional: {
        value: '90 - 180 Days',
        subtitle: 'Sourcing, screening, 4 rounds of interviews, notice periods',
        impact: 'Competitors ship critical roadmap features while roles sit open.',
      },
      btm: {
        value: '< 14 Days',
        subtitle: 'Pre-vetted senior squads matched to your exact tech stack',
        impact: 'Engineers pushing production code in your very next sprint.',
      },
      tag: '88% Faster Deployment',
    },
    {
      id: 'cost',
      title: 'Sunk Recruiting & Agency Drag',
      icon: DollarSign,
      traditional: {
        value: '$35,000+ / Hire',
        subtitle: '25% recruiter commission + 120hrs of engineering interview overhead',
        impact: 'High capital drain before a single line of code is committed.',
      },
      btm: {
        value: '$0 Recruitment Fee',
        subtitle: 'Transparent, predictable monthly squad rate with zero placement markup',
        impact: '100% of capital directly funds shipping production features.',
      },
      tag: 'Zero Sunk Capital',
    },
    {
      id: 'debt',
      title: 'Technical Debt & Misalignment',
      icon: AlertTriangle,
      traditional: {
        value: '30% First-Year Churn',
        subtitle: 'Mishires, culture mismatches, and rushed compromises',
        impact: 'Costly refactoring and institutional knowledge loss.',
      },
      btm: {
        value: '98.2% Retention & Seniority',
        subtitle: 'Wall Street & Enterprise pedigree with built-in QA & Architecture Leads',
        impact: 'Robust, clean-architecture software engineered to scale.',
      },
      tag: 'Enterprise Code Quality',
    },
  ];

  return (
    <section id="hiring-lag" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-4">
            <TrendingDown className="w-3.5 h-3.5 text-btm-red" />
            <span className="font-semibold">THE REALITY OF ENGINEERING BOTTLENECKS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            The Hidden Cost of the <span className="text-gradient-gold">Hiring Lag</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Traditional recruiting is broken for high-growth tech companies. Every week a senior role stays empty is a week your product roadmap slips.
          </p>
        </div>

        {/* 3 Interactive Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {comparisonData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card-btm rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-btm-cyan/60 hover:shadow-xl transition-all group bg-white"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-btm-cyan group-hover:scale-105 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#002B49]">{item.title}</h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-btm-cyan border border-cyan-200">
                    {item.tag}
                  </span>
                </div>

                {/* Traditional Side (The Pain) */}
                <div className="p-4 rounded-2xl bg-red-50/80 border border-red-200 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-600 font-bold mb-1">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Traditional In-House Hiring</span>
                  </div>
                  <div className="text-xl font-display font-bold text-slate-900 mb-1">
                    {item.traditional.value}
                  </div>
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                    {item.traditional.subtitle}
                  </p>
                  <div className="text-[11px] text-red-700 font-medium">
                    ⚠️ {item.traditional.impact}
                  </div>
                </div>

                {/* BTM Side (The Solution) */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-btm-cyan mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-bold">BTM Dedicated Squad</span>
                  </div>
                  <div className="text-xl font-display font-bold text-white mb-1">
                    {item.btm.value}
                  </div>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                    {item.btm.subtitle}
                  </p>
                  <div className="text-[11px] text-emerald-400 font-medium">
                    ✓ {item.btm.impact}
                  </div>
                </div>
              </div>

              {/* Bottom Trigger */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenBooking('hiring-lag-solve')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-btm-navy hover:text-white text-slate-800 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Bypass Hiring Lag</span>
                  <ArrowRight className="w-3.5 h-3.5 text-btm-cyan" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Callout Banner */}
        <div className="glass-card-btm rounded-2xl p-6 sm:p-8 border border-slate-200 bg-[#F1F5F9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl text-[#002B49]">
              Need to unblock engineering capacity immediately?
            </h4>
            <p className="text-sm text-slate-600 max-w-2xl">
              Our technical leadership conducts a free 45-minute capacity review to audit your sprint blockers and specify the exact squad composition needed.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('capacity-review-banner')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Book 45-Min Capacity Audit</span>
          </button>
        </div>

      </div>
    </section>
  );
};
