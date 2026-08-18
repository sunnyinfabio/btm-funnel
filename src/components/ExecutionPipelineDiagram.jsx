import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronRight
} from 'lucide-react';

export const ExecutionPipelineDiagram = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(2); // Default to Step 03: BTM Integration

  const steps = [
    {
      step: '01',
      title: 'Your Roadmap',
      subtitle: 'Ambitious Business Priorities',
      icon: GitBranch,
      badge: 'Product Strategy',
      summary: 'Q1-Q4 product roadmap, high-priority features, and customer enterprise commitments waiting to be built.',
      impact: '100% Ambition',
      status: 'Target Set',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      step: '02',
      title: 'Capacity Gap',
      subtitle: 'The 90-Day Hiring Bottleneck',
      icon: AlertTriangle,
      badge: 'Execution Risk',
      summary: 'Hiring cannot keep pace. 4 rounds of interviews, notice periods, and open roles delay shipping milestones.',
      impact: '-180 Days Lag',
      status: 'Recruiting Delay',
      color: 'text-red-700 bg-red-50 border-red-200',
    },
    {
      step: '03',
      title: 'BTM Integration',
      subtitle: 'Pre-Vetted Squad Injection',
      icon: Users,
      badge: 'Instant Capacity',
      summary: 'Senior engineers matched to your exact stack integrate into your daily Jira/Slack/GitHub standups in < 14 days.',
      impact: '< 14 Days Deploy',
      status: 'Rapid Onboarding',
      color: 'text-btm-cyan bg-cyan-50 border-cyan-300 ring-2 ring-btm-cyan/30',
      highlighted: true,
    },
    {
      step: '04',
      title: 'Execution',
      subtitle: 'Continuous Green Velocity',
      icon: Rocket,
      badge: 'Outcome Ownership',
      summary: 'Backlog cleared, PRs merged daily, automated QA passed at 99.4%, and scalable products delivered to production.',
      impact: '100% Delivery',
      status: 'On-Schedule',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="pipeline" className="py-20 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">THE 4-STEP CAPACITY BLUEPRINT</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-3">
            How Execution Capacity <span className="text-gradient-cyan">Solves The Roadmap Gap</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click through each step to inspect how BTM closes the distance between ambition and production.
          </p>
        </div>

        {/* 4 Clean Step Cards in Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((stg, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={stg.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative bg-white ${
                  isSelected
                    ? 'border-btm-cyan shadow-xl ring-2 ring-btm-cyan/30 scale-[1.02]'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Connecting arrow indicator for steps */}
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-400 shadow-sm">
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP {stg.step}
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
                  <div className="text-xs font-mono text-slate-500 mb-3 font-semibold">
                    {stg.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stg.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Velocity Impact:</span>
                  <span className={`font-bold ${idx === 1 ? 'text-red-600' : 'text-emerald-600'}`}>
                    {stg.impact}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep Dive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#002B49] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-btm-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-bold">STEP {current.step} DEEP DIVE: {current.title.toUpperCase()}</span>
                <span className="text-slate-500">|</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {current.status}
                </span>
              </div>
              
              <h4 className="font-display font-bold text-2xl text-white">
                {current.subtitle}
              </h4>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {current.summary}
              </p>
            </div>

            <button
              onClick={() => onOpenBooking(`step-${current.step}`)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
            >
              <span>Close The Capacity Gap</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
