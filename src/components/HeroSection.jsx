import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  AlertCircle, 
  Cpu, 
  Zap, 
  Target,
  ChevronRight,
  ShieldCheck,
  Code2,
  Lock,
  Globe,
  Terminal,
  Activity,
  Server
} from 'lucide-react';

export const HeroSection = ({ onOpenBooking }) => {
  const [activeAttentionTab, setActiveAttentionTab] = useState(0);
  const [activeTelemetryIndex, setActiveTelemetryIndex] = useState(0);

  const attentionHooks = [
    {
      id: 0,
      badge: 'Execution Bottleneck',
      headline: 'Your product roadmap isn’t behind. Your engineering capacity is.',
      subtext: 'When hiring cannot keep pace with business priorities, execution becomes the bottleneck.',
      metric: '3-6 Months Saved',
      icon: Clock,
    },
    {
      id: 1,
      badge: 'Opportunity Cost',
      headline: 'Every quarter spent building the team is a quarter you’re not building the product.',
      subtext: 'Access specialist engineering capability without waiting for long hiring cycles.',
      metric: '< 14 Days to Deploy',
      icon: Zap,
    },
    {
      id: 2,
      badge: 'The Real Challenge',
      headline: 'Your hardest engineering problem may not be technical. It may be hiring.',
      subtext: 'Open roles eventually become delayed launches, growing backlogs, and missed market opportunities.',
      metric: 'Zero Backlog Delay',
      icon: AlertCircle,
    },
  ];

  const telemetryLogs = [
    { time: '10:42:01', event: 'Squad Provisioning', detail: '4x Senior .NET Core + React Pod Allocated', status: 'GREEN' },
    { time: '10:42:15', event: 'CI/CD Connected', detail: 'GitHub Actions & SOC2 Gateway Handshake', status: 'ACTIVE' },
    { time: '10:42:29', event: 'First PR Merged', detail: 'Auth Microservice & Kafka Stream Live', status: 'DEPLOYED' },
    { time: '10:42:44', event: 'Test Automation', detail: '99.4% Pass Rate on Playwright Regression', status: 'VERIFIED' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTelemetryIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden text-white">
      
      {/* Official BTM Hero Chess Background Image & Layered Contrast Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/btm-hero-chess.jpg"
          alt="BTM Outsourcing Strategy Chess"
          className="w-full h-full object-cover object-center scale-105 animate-float-slow"
        />
        {/* Dark Enterprise Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00182A]/95 via-[#002B49]/90 to-[#0A192F]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-black/40" />
      </div>

      {/* Floating 3D Engineering Telemetry Badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-7xl mx-auto px-4 z-10">
        {/* Badge 1: Top Left */}
        <div className="absolute top-24 left-4 lg:left-8 animate-float hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-400/40 shadow-2xl text-xs font-mono text-white">
          <span className="w-2 h-2 rounded-full bg-btm-cyan animate-ping" />
          <Zap className="w-3.5 h-3.5 text-btm-cyan" />
          <span className="font-bold">&lt; 14 Days Squad Kickoff</span>
        </div>

        {/* Badge 2: Top Right */}
        <div className="absolute top-28 right-4 lg:right-8 animate-float-slow hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-amber-400/40 shadow-2xl text-xs font-mono text-white">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold">100% IP Clean-Room SLA</span>
        </div>

        {/* Badge 3: Bottom Left */}
        <div className="absolute bottom-36 left-6 animate-float-slow hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-emerald-400/40 shadow-2xl text-xs font-mono text-white">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold">Zero Technical Debt Refactor</span>
        </div>

        {/* Badge 4: Bottom Right */}
        <div className="absolute bottom-32 right-6 animate-float hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-purple-400/40 shadow-2xl text-xs font-mono text-white">
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-bold">4-7 Hrs US/UK Standup Overlap</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stage 01 Strategic Positioning Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-btm-cyan/40 text-xs font-mono text-slate-200 shadow-xl hover:border-btm-cyan transition-colors">
            <span className="w-2 h-2 rounded-full bg-btm-cyan animate-pulse" />
            <span className="text-btm-cyan font-bold tracking-wider uppercase">EXPERIENCE THE NEW GAME</span>
            <span className="text-slate-500">|</span>
            <span className="font-semibold text-white">Your Roadmap. Our Execution Capacity.</span>
          </div>
        </motion.div>

        {/* Master Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md"
          >
            Experience The <span className="text-gradient-cyan">New Game</span> in <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Software Execution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-sm"
          >
            BTM Outsourcing is your strategic technology partner. We close the gap between ambition and execution, providing companies with <strong className="text-white font-bold">dedicated engineering capacity, pre-vetted senior squads, and scalable product delivery</strong>.
          </motion.p>
        </div>

        {/* Action Hub with Live Red Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Live Website Red CTA Button */}
          <button
            onClick={() => onOpenBooking('how-can-we-help')}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-base shadow-2xl hover:shadow-red-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>How Can We Help You?</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onOpenBooking('capacity-review')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-slate-950 font-bold text-base shadow-btm-glow hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shimmer-btm cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Request Capacity Review</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#capacity-calculator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 backdrop-blur-md text-white font-semibold text-base border border-slate-700 hover:border-btm-cyan hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl hover:scale-[1.02]"
          >
            <span>Capacity Calculator</span>
            <TrendingUp className="w-4 h-4 text-btm-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Modern Live Telemetry & Problem Recognition Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto space-y-6"
        >
          {/* Main Problem Recognition Hub */}
          <div className="rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden bg-slate-900/90 backdrop-blur-xl hover:border-btm-cyan/60 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-btm-cyan font-bold">STAGE 01</span>
                <span className="font-semibold text-slate-200">EXECUTIVE PROBLEM RECOGNITION</span>
              </div>

              {/* Attention Tab Selector */}
              <div className="flex gap-2">
                {attentionHooks.map((hook, idx) => (
                  <button
                    key={hook.id}
                    onClick={() => setActiveAttentionTab(idx)}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                      activeAttentionTab === idx
                        ? 'bg-btm-cyan text-slate-950 font-bold shadow-md scale-105'
                        : 'text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700'
                    }`}
                  >
                    Point 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Attention Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAttentionTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-8 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-btm-gold font-bold">
                    {attentionHooks[activeAttentionTab].badge}
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
                    "{attentionHooks[activeAttentionTab].headline}"
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {attentionHooks[activeAttentionTab].subtext}
                  </p>
                </div>

                <div className="md:col-span-4 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-center space-y-2 shadow-inner">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">BTM Capacity Impact</span>
                  <div className="text-2xl font-display font-black text-white">
                    {attentionHooks[activeAttentionTab].metric}
                  </div>
                  <button
                    onClick={() => onOpenBooking('attention-card')}
                    className="w-full py-2 rounded-lg bg-btm-cyan/10 border border-btm-cyan/40 text-xs font-mono text-btm-cyan hover:bg-btm-cyan hover:text-slate-950 transition-colors font-bold mt-2 shadow-sm cursor-pointer"
                  >
                    Solve This Constraint ↗
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Live Sprint Telemetry Terminal */}
          <div className="rounded-3xl p-5 sm:p-6 bg-slate-950/95 text-white border border-slate-800 shadow-2xl overflow-hidden relative backdrop-blur-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Terminal className="w-4 h-4 text-btm-cyan" />
                <span className="text-slate-300 font-bold">BTM SPRINT TELEMETRY HUD</span>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> LIVE STREAM
                </span>
              </div>

              <div className="flex gap-2 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-btm-cyan">
                  SOC2 Certified
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">
                  99.4% Green SLA
                </span>
              </div>
            </div>

            {/* Simulated Live Stream Event */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-slate-500 text-[10px]">CURRENT SPRINT EVENT:</div>
                <div className="flex items-center gap-2">
                  <span className="text-btm-gold font-bold">[{telemetryLogs[activeTelemetryIndex].time}]</span>
                  <span className="text-btm-cyan font-bold">{telemetryLogs[activeTelemetryIndex].event}</span>
                  <span className="text-slate-400">→</span>
                  <span className="text-slate-200">{telemetryLogs[activeTelemetryIndex].detail}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3 font-mono text-xs">
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">DEPLOYMENT STATUS</span>
                  <span className="text-emerald-400 font-bold">{telemetryLogs[activeTelemetryIndex].status}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-btm-cyan/40 flex items-center justify-center text-btm-cyan shrink-0">
                  <Server className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Quantitative Pillars Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          {[
            { label: 'Speed', value: '< 14 Days', desc: 'Active in Sprints', color: 'text-btm-cyan' },
            { label: 'Capability', value: '100% Senior', desc: 'Pre-Vetted Specialists', color: 'text-amber-400' },
            { label: 'Scalability', value: 'Elastic Pods', desc: 'Scale with Priorities', color: 'text-emerald-400' },
            { label: 'Execution', value: '99.4% Green', desc: 'Zero Regressions', color: 'text-purple-400' },
          ].map((pillar, idx) => (
            <motion.div 
              key={pillar.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl p-4 border border-white/10 text-center bg-slate-950/80 backdrop-blur-md shadow-xl hover:scale-105 transition-transform"
            >
              <div className="text-xs font-mono uppercase text-btm-cyan font-bold">{pillar.label}</div>
              <div className={`text-2xl font-display font-black mt-0.5 ${pillar.color}`}>{pillar.value}</div>
              <div className="text-[11px] text-slate-300 font-mono mt-0.5">{pillar.desc}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
