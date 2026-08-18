import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, GitPullRequest, Layers, CheckCircle2, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';

export const AuthoritySection = ({ onOpenBooking }) => {
  const executionFormula = [
    { title: 'Talent', desc: 'Pre-vetted senior domain engineers', color: 'text-btm-cyan border-cyan-200 bg-cyan-50' },
    { title: 'Architecture', desc: 'Scalable, clean-room system design', color: 'text-amber-700 border-amber-200 bg-amber-50' },
    { title: 'Process', desc: 'Frictionless CI/CD & sprint integration', color: 'text-emerald-700 border-emerald-200 bg-emerald-50' },
    { title: 'Accountability', desc: 'SLA-backed velocity & zero regressions', color: 'text-purple-700 border-purple-200 bg-purple-50' },
  ];

  return (
    <section id="authority" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-gold text-xs font-mono mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">STAGE 03 — AUTHORITY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            A Technology <span className="text-gradient-gold">Execution Partner</span>, Not a Manpower Vendor
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Why simply throwing more heads at a codebase never speeds up delivery—and how true engineering capacity works.
          </p>
        </div>

        {/* Content 01: The Delivery Formula (Talent + Architecture + Process + Accountability) */}
        <div className="glass-card-btm rounded-3xl p-7 sm:p-10 border border-slate-200 mb-10 shadow-lg relative overflow-hidden bg-white">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase text-btm-cyan font-bold tracking-wider block mb-2">
              Principle 01 • True Velocity Heuristic
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#002B49] leading-tight mb-4">
              "More developers do not automatically create faster delivery."
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Adding manpower to a struggling project often slows it down unless supported by technical leadership, modular architecture, and autonomous accountability.
            </p>
          </div>

          {/* 4 Pillars Formula */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {executionFormula.map((item, idx) => (
              <div key={item.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative">
                <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">Component 0{idx + 1}</span>
                <div className={`text-xl font-display font-black mb-1 ${item.color.split(' ')[0]}`}>
                  {item.title}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid for Content 02 & Content 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Content 02: The Outsourcing Question */}
          <div className="glass-card-btm rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-btm-cyan hover:shadow-xl transition-all bg-white">
            <div>
              <span className="text-xs font-mono uppercase text-btm-cyan font-bold tracking-wider block mb-3">
                Principle 02 • Value vs Cost
              </span>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs font-mono text-slate-700 mb-4">
                <span className="text-red-600 font-bold block mb-1">❌ The Wrong Question:</span>
                "What is your hourly rate?"
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs font-mono text-slate-800 mb-6 shadow-sm">
                <span className="text-btm-cyan font-bold block mb-1">✓ The Strategic Execution Question:</span>
                "How much execution capacity can you add without adding management complexity?"
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                BTM squads operate with their own Tech Leads, clear sprint backlogs, and automated reporting so your internal VP of Engineering stays focused on strategy, not micromanagement.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking('capacity-review')}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-btm-navy hover:text-white text-slate-800 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <span>Calculate Zero-Overhead Capacity</span>
              <ArrowRight className="w-3.5 h-3.5 text-btm-cyan" />
            </button>
          </div>

          {/* Content 03: Technical Debt & Permanent Urgency */}
          <div className="glass-card-btm rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-btm-gold hover:shadow-xl transition-all bg-white">
            <div>
              <span className="text-xs font-mono uppercase text-amber-700 font-bold tracking-wider block mb-3">
                Principle 03 • The Debt Paradox
              </span>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002B49] mb-3 leading-snug">
                "Technical debt is often the result of permanent urgency."
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                When internal teams spend every sprint fighting immediate roadmap fires, strategic technology improvement continually gets delayed. BTM creates the parallel execution capacity required to pay down architectural debt without pausing new feature launches.
              </p>

              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Parallel refactoring tracks running alongside active sprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero slowdown on customer-facing product launches</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('audit-optimization')}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-btm-navy hover:text-white text-slate-800 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <span>Assess Technical Debt Modernisation</span>
              <ArrowRight className="w-3.5 h-3.5 text-btm-gold" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
