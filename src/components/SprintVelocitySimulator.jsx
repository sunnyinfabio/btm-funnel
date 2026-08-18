import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  GitCommit,
  Layers
} from 'lucide-react';

export const SprintVelocitySimulator = ({ onOpenBooking }) => {
  const [selectedSprint, setSelectedSprint] = useState(4); // Sprint 1 to 6
  const [modelMode, setModelMode] = useState('btm'); // 'btm' vs 'inhouse'

  const sprintBreakdowns = [
    {
      sprint: 1,
      name: 'Sprint 1 (Days 1 - 14)',
      inhouse: {
        status: 'Recruiter Outreach & Sourcing',
        progress: 5,
        shipped: '0 features (Reviewing resumes & agency contracts)',
        risk: 'Critical: Sprint backlog growth unaddressed',
      },
      btm: {
        status: 'Capacity Scoping & Day 1 PR Commit',
        progress: 25,
        shipped: '4 Core Epics (CI/CD connected & first commits merged)',
        risk: 'Zero: Active in daily standups with clean-code SLA',
      },
    },
    {
      sprint: 2,
      name: 'Sprint 2 (Days 15 - 28)',
      inhouse: {
        status: 'Round 1 & 2 Technical Interviews',
        progress: 10,
        shipped: '0 features (Senior engineers spending 20hrs on interviews)',
        risk: 'Engineering lead context switching & interview burnout',
      },
      btm: {
        status: 'Full-Velocity Sprint Execution',
        progress: 50,
        shipped: '12 User Stories & automated Playwright test suites',
        risk: 'Zero: 100% test pass rate with Tech Lead governance',
      },
    },
    {
      sprint: 3,
      name: 'Sprint 3 (Days 29 - 42)',
      inhouse: {
        status: 'Offer Negotiations & 60-Day Notice Periods',
        progress: 18,
        shipped: '0 features (Candidate accepted, waiting for 60-day notice)',
        risk: 'Product launch timeline pushed back by 1 quarter',
      },
      btm: {
        status: 'Milestone 1 Production Staging',
        progress: 75,
        shipped: 'Complete Core Module & API Microservices live on staging',
        risk: 'Zero: Zero-downtime Canary deploys enabled',
      },
    },
    {
      sprint: 4,
      name: 'Sprint 4 (Days 43 - 56)',
      inhouse: {
        status: 'In-House Onboarding & Laptop Provisioning',
        progress: 28,
        shipped: 'First basic PR (Engineer learning codebase architecture)',
        risk: 'Slow ramp-up curve and architectural friction',
      },
      btm: {
        status: 'Production Release & Elastic Scale',
        progress: 100,
        shipped: 'Turnkey Feature Release shipped to production with 100% IP ownership',
        risk: 'Zero: Full SOC2 documentation and automated regression suites',
      },
    },
  ];

  const current = sprintBreakdowns[selectedSprint - 1];

  return (
    <section id="velocity-simulator" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">INTERACTIVE SPRINT VELOCITY SIMULATOR</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Simulate Your <span className="text-gradient-cyan">Next 60 Days</span> of Execution
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Compare the sprint-by-sprint velocity of traditional in-house recruiting vs deploying a BTM dedicated engineering squad.
          </p>
        </div>

        {/* Sprint Timeline Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {sprintBreakdowns.map((s) => (
            <button
              key={s.sprint}
              onClick={() => setSelectedSprint(s.sprint)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedSprint === s.sprint
                  ? 'bg-[#002B49] border-[#002B49] text-white shadow-lg ring-2 ring-btm-cyan/40 scale-[1.02]'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-mono font-bold text-btm-cyan mb-1">
                SPRINT 0{s.sprint}
              </div>
              <div className="text-xs font-semibold">
                {s.name}
              </div>
            </button>
          ))}
        </div>

        {/* Live Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* In-House Recruiting Track */}
          <div className="p-7 sm:p-8 rounded-3xl border border-red-200 bg-red-50/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 font-bold">
                  Traditional In-House Hiring Track
                </span>
                <span className="text-xs font-mono text-red-600 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> High Sunk Overhead
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                {current.inhouse.status}
              </h3>

              {/* Progress Bar */}
              <div className="my-4">
                <div className="flex justify-between text-xs font-mono text-slate-600 mb-1">
                  <span>Backlog Resolution</span>
                  <span>{current.inhouse.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-red-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${current.inhouse.progress}%` }} 
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-red-200 space-y-2 text-xs mb-6">
                <div>
                  <span className="text-slate-500 font-mono block">Shipped Value:</span>
                  <span className="text-slate-800 font-semibold">{current.inhouse.shipped}</span>
                </div>
                <div>
                  <span className="text-red-600 font-mono font-bold block">Sprint Friction:</span>
                  <span className="text-red-700">{current.inhouse.risk}</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              Avg time to first production PR: <strong className="text-red-600">90–120 Days</strong>
            </div>
          </div>

          {/* BTM Dedicated Squad Track */}
          <div className="p-7 sm:p-8 rounded-3xl border border-btm-cyan bg-[#002B49] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-btm-cyan/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-btm-cyan/20 border border-btm-cyan/40 text-btm-cyan font-bold">
                  BTM Dedicated Squad Track
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Sprint Velocity
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {current.btm.status}
              </h3>

              {/* Progress Bar */}
              <div className="my-4">
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>Backlog Resolution</span>
                  <span className="text-emerald-400 font-bold">{current.btm.progress}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-btm-cyan to-emerald-400 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${current.btm.progress}%` }} 
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700 space-y-2 text-xs mb-6 font-mono">
                <div>
                  <span className="text-slate-400 block">Shipped Value:</span>
                  <span className="text-emerald-300 font-semibold">{current.btm.shipped}</span>
                </div>
                <div>
                  <span className="text-btm-cyan font-bold block">Execution Assurance:</span>
                  <span className="text-slate-200">{current.btm.risk}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('velocity-simulator')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-white font-bold text-xs shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
            >
              <span>Deploy BTM Squad for Sprint 1</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
