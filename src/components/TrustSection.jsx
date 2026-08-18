import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Users, GitMerge, Award, CheckCircle2, SlidersHorizontal, ArrowRight } from 'lucide-react';

export const TrustSection = ({ onOpenBooking }) => {
  const trustPillars = [
    {
      title: 'Integrated as One Team',
      headline: 'An outsourced engineer should feel like part of your team. Not another vendor.',
      body: 'Integrated communication. Shared priorities. Clear sprint accountability. Our engineers participate in your daily standups, review PRs in your GitHub/GitLab, and communicate in your Slack channels.',
      icon: Users,
      badge: 'Zero Vendor Friction',
    },
    {
      title: 'Retain Full Strategic Control',
      headline: 'Scale the team without surrendering control.',
      body: 'You retain complete product direction, backlog prioritization, and architectural governance. BTM adds the senior engineering capability required to execute it on schedule.',
      icon: GitMerge,
      badge: 'You Own Direction',
    },
    {
      title: 'True Elastic Flexibility',
      headline: 'Flexibility isn’t simply adding people. It is changing capacity as priorities change.',
      body: 'Scale squads up before critical product launches and scale back when transitioning to maintenance, with transparent 30-day capacity adjustments and zero hiring/firing friction.',
      icon: SlidersHorizontal,
      badge: 'Elastic Scale',
    },
  ];

  return (
    <section id="trust" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">STAGE 05 — TRUST & RISK REVERSAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Removing the Friction from <span className="text-gradient-cyan">Global Engineering</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            How BTM eliminates the traditional risks, communication gaps, and control fears associated with legacy outsourcing.
          </p>
        </div>

        {/* 3 Core Trust Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {trustPillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
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

                <h3 className="font-display font-bold text-xl text-[#002B49] mb-3 leading-snug">
                  "{item.headline}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.body}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Active in 140+ Client Sprints</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Safeguards Banner */}
        <div className="glass-card-btm rounded-3xl p-6 sm:p-8 border border-slate-200 bg-[#F1F5F9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-btm-cyan shrink-0 shadow-sm">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#002B49] mb-1">
                The BTM 2-Week Risk-Free Trial Sprint
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Experience our squad in your active sprint backlog for 14 days. If code velocity and architecture standards do not exceed expectations, you owe nothing.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('risk-free-trial')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm"
          >
            <span>Claim 14-Day Trial Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
