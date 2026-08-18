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
  TrendingDown,
  Activity,
  BarChart3,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const ExecutionPipelineDiagram = ({ onOpenBooking }) => {
  const [activeStage, setActiveStage] = useState(2); // Default to BTM Integration

  const stages = [
    {
      step: '01',
      title: 'Your Roadmap',
      subtitle: 'Ambitious Business Priorities',
      icon: GitBranch,
      badge: 'Product Strategy',
      summary: 'Q1-Q4 product roadmap, high-priority features, and customer enterprise commitments waiting to be built.',
      velocityScore: 100,
      chartX: '15%',
      chartY: '35%',
      chartPointColor: '#00A3E0',
      status: 'PLANNING COMPLETE',
      metricLabel: 'Initial Ambition',
      metricValue: '100% Target',
      sprintThroughput: '85 Story Pts Planned',
      leadTime: 'Day 0',
      colorTheme: 'from-blue-500/20 to-cyan-500/10 border-blue-300 text-blue-800',
    },
    {
      step: '02',
      title: 'Capacity Gap',
      subtitle: 'The 90-Day Hiring Bottleneck',
      icon: AlertTriangle,
      badge: 'Execution Risk',
      summary: 'Hiring cannot keep pace. 4 rounds of interviews, notice periods, and open headcount cause roadmap slippage.',
      velocityScore: 20,
      chartX: '40%',
      chartY: '82%',
      chartPointColor: '#EF4444',
      status: 'BOTTLENECK ACTIVE',
      metricLabel: 'Hiring Lag Delay',
      metricValue: '-180 Days Delay',
      sprintThroughput: '12 Story Pts (Stalled)',
      leadTime: '90 - 120 Days Recruiting',
      colorTheme: 'from-red-500/20 to-rose-500/10 border-red-300 text-red-800',
    },
    {
      step: '03',
      title: 'BTM Integration',
      subtitle: 'Pre-Vetted Squad Injection',
      icon: Users,
      badge: 'Instant Capacity',
      summary: 'Senior engineers matched to your exact stack integrate into your daily Jira/Slack/GitHub standups in < 14 days.',
      velocityScore: 88,
      chartX: '65%',
      chartY: '30%',
      chartPointColor: '#F5A623',
      status: 'SQUAD ALLOCATED',
      metricLabel: 'Deployment SLA',
      metricValue: '< 14 Days Ramp',
      sprintThroughput: '95 Story Pts Restored',
      leadTime: 'Day 1 Environment Setup',
      colorTheme: 'from-amber-500/20 to-yellow-500/10 border-amber-300 text-amber-800',
      highlighted: true,
    },
    {
      step: '04',
      title: 'Execution',
      subtitle: 'Continuous Green Velocity',
      icon: Rocket,
      badge: 'Outcome Ownership',
      summary: 'Backlog cleared, PRs merged daily, automated QA passed at 99.4%, and scalable products delivered to production.',
      velocityScore: 100,
      chartX: '90%',
      chartY: '12%',
      chartPointColor: '#10B981',
      status: 'CANARY SHIPPING',
      metricLabel: 'Production Delivery',
      metricValue: '100% On-Schedule',
      sprintThroughput: '120 Story Pts (High Velocity)',
      leadTime: 'Continuous Daily PR Merges',
      colorTheme: 'from-emerald-500/20 to-teal-500/10 border-emerald-300 text-emerald-800',
    },
  ];

  const current = stages[activeStage];

  return (
    <section id="pipeline" className="py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#002B49] text-xs font-mono mb-3 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">INTERACTIVE CAPACITY & VELOCITY TRAJECTORY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            How Execution Capacity <span className="text-gradient-cyan">Solves The Roadmap Gap</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg">
            Interactive engineering velocity curve comparing hiring lag deficits against BTM squad injection.
          </p>
        </div>

        {/* Master Chart Container */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl p-6 sm:p-10 mb-10 relative overflow-hidden">
          
          {/* Chart Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-btm-cyan font-bold mb-1">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>SPRINT RESOLUTION & VELOCITY TRAJECTORY CHART</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#002B49]">
                Sprint Story-Point Throughput Across 120 Days
              </h3>
            </div>

            {/* Chart Legend */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-700 font-semibold">BTM Dedicated Pod Velocity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-slate-500">In-House Recruiting Drag</span>
              </div>
            </div>
          </div>

          {/* Interactive SVG Execution Curve Chart */}
          <div className="relative h-64 sm:h-80 w-full mb-8 bg-slate-50/70 rounded-2xl border border-slate-100 p-4 overflow-hidden">
            
            {/* Grid Lines */}
            <div className="absolute inset-x-4 top-1/4 border-b border-dashed border-slate-200" />
            <div className="absolute inset-x-4 top-2/4 border-b border-dashed border-slate-200" />
            <div className="absolute inset-x-4 top-3/4 border-b border-dashed border-slate-200" />
            
            {/* Y-Axis Labels */}
            <div className="absolute left-3 top-3 text-[10px] font-mono text-slate-400">120 Pts (Max Velocity)</div>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400">60 Pts</div>
            <div className="absolute left-3 bottom-3 text-[10px] font-mono text-slate-400">0 Pts (Capacity Bottleneck)</div>

            {/* SVG Area & Trend Lines */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <defs>
                {/* Green Gradient Area for BTM */}
                <linearGradient id="btmGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
                </linearGradient>
                {/* Red Gradient Area for Hiring Lag */}
                <linearGradient id="lagGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* In-House Recruiting Lag Curve (Drops into bottleneck) */}
              <path
                d="M 120 110 Q 350 140 450 250 T 800 240 T 950 180"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeDasharray="6 4"
              />

              {/* BTM Acceleration Curve Area */}
              <path
                d="M 120 110 Q 300 130 450 240 Q 620 90 750 60 T 950 30 L 950 300 L 120 300 Z"
                fill="url(#btmGlow)"
              />

              {/* BTM Acceleration Master Line */}
              <path
                d="M 120 110 Q 300 130 450 240 Q 620 90 750 60 T 950 30"
                fill="none"
                stroke="#00A3E0"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Interactive Data Point Markers on the Chart */}
            {stages.map((stg, idx) => {
              const isSelected = activeStage === idx;

              return (
                <div
                  key={stg.step}
                  onClick={() => setActiveStage(idx)}
                  style={{ left: stg.chartX, top: stg.chartY }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group"
                >
                  {/* Outer Pulsing Glow */}
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'bg-btm-cyan/20 ring-4 ring-btm-cyan/30 scale-125' 
                        : 'bg-white/80 hover:scale-110 shadow-md border border-slate-300'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full shadow-md"
                      style={{ backgroundColor: stg.chartPointColor }}
                    />
                  </div>

                  {/* Floating Chart Tag */}
                  <div 
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold whitespace-nowrap shadow-md transition-all pointer-events-none ${
                      isSelected
                        ? 'bg-[#002B49] text-white scale-105'
                        : 'bg-white text-slate-700 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white'
                    }`}
                  >
                    Phase {stg.step}: {stg.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Phase Selector Tabs Below Chart */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stages.map((stg, idx) => {
              const isSelected = activeStage === idx;

              return (
                <button
                  key={stg.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-btm-cyan shadow-lg ring-2 ring-btm-cyan/20 scale-[1.02]'
                      : 'bg-slate-50/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-btm-cyan">Phase {stg.step}</span>
                    <span className={`text-[9.5px] font-bold px-1.5 py-0.2 rounded border ${
                      idx === 1 ? 'bg-red-50 text-red-700 border-red-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {stg.badge}
                    </span>
                  </div>
                  <div className="font-display font-bold text-sm text-slate-900 line-clamp-1">
                    {stg.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1 font-semibold">
                    {stg.metricValue}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Telemetry Panel */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#002B49] text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Description & Metric */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-btm-cyan/40 text-btm-cyan font-mono text-xs font-bold">
                    PHASE {current.step} DEEP DIVE: {current.title.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {current.status}
                  </span>
                </div>

                <h4 className="font-display font-bold text-2xl text-white">
                  {current.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {current.summary}
                </p>

                {/* Quantitative Telemetry Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-400 block text-[10px] mb-0.5">Sprint Throughput:</span>
                    <span className="text-white font-bold">{current.sprintThroughput}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-400 block text-[10px] mb-0.5">Timeframe / Turnaround:</span>
                    <span className="text-btm-gold font-bold">{current.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Trigger */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                  {current.metricLabel}
                </div>
                <div className={`text-3xl font-display font-black ${
                  activeStage === 1 ? 'text-red-400' : 'text-emerald-400'
                }`}>
                  {current.metricValue}
                </div>

                <button
                  onClick={() => onOpenBooking(`chart-phase-${current.step}`)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 shimmer-btm cursor-pointer"
                >
                  <span>Close The Capacity Gap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
