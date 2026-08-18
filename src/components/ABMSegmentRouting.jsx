import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Building2, ArrowRight, CheckCircle2, Sparkles, Target } from 'lucide-react';

export const ABMSegmentRouting = ({ onOpenBooking }) => {
  const audiences = [
    {
      id: 0,
      title: 'Startups & Scale-Ups',
      targets: 'Founders, CTOs, VPs of Engineering',
      headline: 'Your funding increased the roadmap. Has your engineering capacity caught up?',
      icon: Rocket,
      context: 'Post-Series A/B teams needing to hit product milestones before the next round without burning months in recruiting drag.',
      deliverables: ['Rapid 14-day squad deployment', 'Direct sprint velocity acceleration', 'Flexible capacity adjusting with milestones'],
      badge: 'Seed to Series B',
    },
    {
      id: 1,
      title: 'Technology & SaaS Companies',
      targets: 'CTOs, Engineering Directors, Product Leaders',
      headline: 'Your product should scale faster than your hiring process.',
      icon: Cpu,
      context: 'Fast-growing SaaS products balancing feature expansion, enterprise customer requests, and automated QA debt.',
      deliverables: ['Cross-functional pods with dedicated QA', 'Frictionless Jira / GitHub / Slack sync', 'Zero management overhead for engineering leads'],
      badge: 'Growth & Enterprise SaaS',
    },
    {
      id: 2,
      title: 'Enterprises & Large Institutions',
      targets: 'CIOs, CTOs, Heads of Digital Transformation',
      headline: 'Transformation rarely fails because the roadmap is missing. Execution capacity is often the constraint.',
      icon: Building2,
      context: 'Established enterprises undergoing cloud migration, monolith refactoring, and legacy modernisation under strict governance.',
      deliverables: ['SOC2 & ISO compliant dedicated infrastructure', 'Clean-room 100% IP assignment', 'Wall Street & FinTech domain expertise'],
      badge: 'Enterprise Modernisation',
    },
  ];

  return (
    <section id="abm" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-btm-gold text-xs font-mono mb-4">
            <Target className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">STAGE 07 — TAILORED ACCOUNT EXECUTION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Engineered For Your <span className="text-gradient-gold">Growth Stage</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether scaling post-funding velocity or executing an enterprise-wide cloud migration.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-card-btm rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:border-btm-cyan hover:shadow-xl transition-all group bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-200 text-btm-cyan group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase text-btm-cyan font-bold mb-1">
                  Target: {item.targets}
                </div>
                <h3 className="font-display font-bold text-xl text-[#002B49] mb-3 leading-snug">
                  "{item.headline}"
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.context}
                </p>

                <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6">
                  {item.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('abm-track')}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-btm-navy hover:text-white text-slate-800 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Discuss {item.title} Strategy</span>
                <ArrowRight className="w-3.5 h-3.5 text-btm-cyan" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
