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
  TrendingUp,
  ArrowUpRight
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
      growthLevel: 'Level 1 • Baseline',
      heightClass: 'md:min-h-[260px]',
      status: 'Target Set',
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      barHeight: '35%',
    },
    {
      step: '02',
      title: 'Capacity Gap',
      subtitle: 'The 90-Day Hiring Bottleneck',
      icon: AlertTriangle,
      badge: 'Execution Risk',
      summary: 'Hiring cannot keep pace. 4 rounds of interviews, notice periods, and open roles delay shipping milestones.',
      impact: '-180 Days Lag',
      growthLevel: 'Level 2 • Bottleneck Risk',
      heightClass: 'md:min-h-[290px]',
      status: 'Recruiting Delay',
      color: 'text-red-700 bg-red-50 border-red-200',
      barHeight: '50%',
    },
    {
      step: '03',
      title: 'BTM Integration',
      subtitle: 'Pre-Vetted Squad Injection',
      icon: Users,
      badge: 'Instant Capacity',
      summary: 'Senior engineers matched to your exact stack integrate into your daily Jira/Slack/GitHub standups in < 14 days.',
      impact: '< 14 Days Deploy',
      growthLevel: 'Level 3 • Velocity Accelerated',
      heightClass: 'md:min-h-[320px]',
      status: 'Rapid Onboarding',
      color: 'text-btm-cyan bg-cyan-50 border-cyan-300 ring-2 ring-btm-cyan/30',
      barHeight: '75%',
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
      growthLevel: 'Level 4 • Peak Growth Scale',
      heightClass: 'md:min-h-[350px]',
      status: 'On-Schedule',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      barHeight: '100%',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="pipeline" className="py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-3 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">ASCENDING EXECUTION & GROWTH TRAJECTORY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-3">
            How Execution Capacity <span className="text-gradient-cyan">Solves The Roadmap Gap</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ascending growth progression showing how dedicated BTM squads elevate your engineering throughput from bottleneck to peak velocity.
          </p>
        </div>

        {/* Growth Staircase Stepper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end mb-10">
          {steps.map((stg, idx) => {
            const isSelected = activeStep === idx;

            return (
              <motion.div
                key={stg.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveStage(idx)}
                className={`${stg.heightClass} p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative bg-white ${
                  isSelected
                    ? 'border-btm-cyan shadow-2xl ring-4 ring-btm-cyan/20 scale-[1.03] z-20'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {/* Growth Trajectory Indicator Pill on Top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    STEP 0{idx + 1}
                  </span>
                  <span className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-full border ${stg.color}`}>
                    {stg.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className={`p-3 rounded-2xl w-fit border mb-3 ${stg.color}`}>
                    <stg.icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                    {stg.growthLevel}
                  </span>

                  <h3 className="font-display font-black text-xl text-[#002B49] mb-1">
                    {stg.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-slate-500 mb-2 font-semibold">
                    {stg.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {stg.summary}
                  </p>
                </div>

                {/* Growth Metric Footer with Upward Visual Bar */}
                <div className="pt-3 mt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Growth Impact:</span>
                    <span className={`font-bold flex items-center gap-1 ${
                      idx === 1 ? 'text-red-600' : 'text-emerald-600'
                    }`}>
                      {stg.impact}
                      {idx !== 1 && <ArrowUpRight className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  {/* Growth Progress Fill Bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        idx === 1 ? 'bg-red-500' : 'bg-gradient-to-r from-btm-cyan to-emerald-500'
                      }`}
                      style={{ width: stg.barHeight }}
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Selected Growth Level Deep Dive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-7 sm:p-9 rounded-3xl bg-[#002B49] text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-btm-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-bold">GROWTH STEP 0{current.step} DEEP DIVE: {current.title.toUpperCase()}</span>
                <span className="text-slate-500">|</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {current.status}
                </span>
              </div>
              
              <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {current.subtitle}
              </h4>
              
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="text-center sm:text-right font-mono">
                <span className="text-[10.5px] text-slate-400 block uppercase">Velocity Tier</span>
                <span className="text-xl font-display font-black text-btm-cyan">{current.impact}</span>
              </div>

              <button
                onClick={() => onOpenBooking(`growth-step-${current.step}`)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 flex items-center gap-2 shimmer-btm cursor-pointer"
              >
                <span>Accelerate Execution</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
