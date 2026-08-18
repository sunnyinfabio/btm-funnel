import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  AlertTriangle, 
  Users, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Zap,
  TrendingUp
} from 'lucide-react';

export const ExecutionPipelineDiagram = ({ onOpenBooking }) => {
  const [activeStage, setActiveStage] = useState(2); // Default to BTM Integration

  const stages = [
    {
      step: '01',
      title: 'Your Roadmap',
      subtitle: 'Ambitious Business Priorities',
      icon: GitBranch,
      color: 'border-blue-300 text-blue-700 bg-blue-50',
      badge: 'Product Strategy',
      summary: 'Q1-Q4 product roadmap, high-priority features, and customer enterprise commitments waiting to be built.',
      metric: '100% Ambition',
    },
    {
      step: '02',
      title: 'Capacity Gap',
      subtitle: 'The 90-Day Hiring Bottleneck',
      icon: AlertTriangle,
      color: 'border-red-300 text-red-700 bg-red-50',
      badge: 'Execution Risk',
      summary: 'Hiring cannot keep pace. 4 rounds of interviews, notice periods, and open roles delay shipping milestones.',
      metric: '-180 Days Lag',
    },
    {
      step: '03',
      title: 'BTM Integration',
      subtitle: 'Pre-Vetted Squad Injection',
      icon: Users,
      color: 'border-cyan-300 text-btm-cyan bg-cyan-50 ring-2 ring-btm-cyan/30',
      badge: 'Instant Capacity',
      summary: 'Senior engineers matched to your exact stack integrate into your daily Jira/Slack/GitHub standups in < 14 days.',
      metric: '< 14 Days Deploy',
      highlighted: true,
    },
    {
      step: '04',
      title: 'Execution',
      subtitle: 'Continuous Green Velocity',
      icon: Rocket,
      color: 'border-emerald-300 text-emerald-700 bg-emerald-50',
      badge: 'Outcome Ownership',
      summary: 'Backlog cleared, PRs merged daily, automated QA passed at 99.4%, and scalable products delivered to production.',
      metric: '100% Delivery',
    },
  ];

  return (
    <section id="pipeline" className="py-20 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">THE BTM EXECUTION FORMULA</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#002B49] tracking-tight mb-3">
            How Execution Capacity <span className="text-gradient-cyan">Solves The Roadmap Gap</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click through each phase to inspect how BTM closes the distance between ambition and production.
          </p>
        </div>

        {/* Visual Pipeline Stepper Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mb-10">
          {stages.map((stg, idx) => {
            const isSelected = activeStage === idx;

            return (
              <div
                key={stg.step}
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative bg-white ${
                  isSelected
                    ? 'border-btm-cyan shadow-xl ring-2 ring-btm-cyan/30 scale-[1.02]'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Connecting Arrow between nodes */}
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-400 shadow-sm">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      PHASE {stg.step}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${stg.color}`}>
                      {stg.badge}
                    </span>
                  </div>

                  <div className={`p-3 rounded-2xl w-fit border mb-4 ${stg.color}`}>
                    <stg.icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#002B49] mb-1">
                    {stg.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 mb-3">
                    {stg.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stg.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Velocity Impact:</span>
                  <span className={`font-bold ${idx === 1 ? 'text-red-600' : 'text-emerald-600'}`}>
                    {stg.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-btm-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHASE 0{activeStage + 1} DEEP DIVE: {stages[activeStage].title.toUpperCase()}</span>
            </div>
            <h4 className="font-display font-bold text-xl text-white">
              {stages[activeStage].headline || stages[activeStage].subtitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {stages[activeStage].summary}
            </p>
          </div>

          <button
            onClick={() => onOpenBooking(`pipeline-step-${activeStage + 1}`)}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
          >
            <span>Close The Capacity Gap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
