import React, { useState } from 'react';
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
  Globe
} from 'lucide-react';

export const HeroSection = ({ onOpenBooking }) => {
  const [activeAttentionTab, setActiveAttentionTab] = useState(0);

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

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden text-white">
      
      {/* Official BTM Hero Chess Background Image & Layered Contrast Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/btm-hero-chess.jpg"
          alt="BTM Outsourcing Strategy Chess"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark Enterprise Gradient Overlay for Sharp Maximum Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00101E]/98 via-[#001B2E]/95 to-[#0A192F]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001424] via-transparent to-black/70" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-btm-cyan/50 text-xs font-mono text-slate-200 shadow-2xl hover:border-btm-cyan transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[#00F0FF] font-black tracking-wider uppercase">EXPERIENCE THE NEW GAME</span>
            <span className="text-slate-500">|</span>
            <span className="font-bold text-white">Your Roadmap. Our Execution Capacity.</span>
          </div>
        </motion.div>

        {/* Master Bold Headline with Ultra-Bright High-Visibility Colors */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-white leading-[1.08] mb-6 drop-shadow-2xl"
          >
            Experience The <span className="text-[#00F0FF] font-black drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]">New Game</span> in <br className="hidden sm:inline" />
            <span className="text-white font-black drop-shadow-lg">Software Execution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md"
          >
            BTM Outsourcing is your strategic technology partner. We close the gap between ambition and execution, providing companies with <strong className="text-white font-bold">dedicated engineering capacity, pre-vetted senior squads, and scalable product delivery</strong>.
          </motion.p>
        </div>

        {/* Action Hub - Pill Shaped Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Live Website Red CTA Button (Pill) */}
          <button
            onClick={() => onOpenBooking('how-can-we-help')}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-base shadow-2xl hover:shadow-red-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>How Can We Help You?</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#capacity-calculator"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-semibold text-base border border-slate-700 hover:border-btm-cyan hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl hover:scale-[1.02]"
          >
            <span>Calculate Capacity & ROI</span>
            <TrendingUp className="w-4 h-4 text-btm-cyan group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Problem Recognition Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-btm-cyan text-xs font-mono">
                  {React.createElement(attentionHooks[activeAttentionTab].icon, { className: "w-3.5 h-3.5" })}
                  <span>{attentionHooks[activeAttentionTab].badge}</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  "{attentionHooks[activeAttentionTab].headline}"
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {attentionHooks[activeAttentionTab].subtext}
                  </p>

                  <div className="shrink-0 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-center font-mono">
                    <span className="text-[10px] text-slate-400 block uppercase">Capacity Gain</span>
                    <span className="text-base font-bold text-emerald-400">{attentionHooks[activeAttentionTab].metric}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 4 Quantitative Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto"
        >
          <div className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-display font-black text-btm-cyan mb-0.5">&lt; 14 Days</div>
            <div className="text-xs text-slate-300 font-semibold">Squad Deployment SLA</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-display font-black text-btm-gold mb-0.5">100% Senior</div>
            <div className="text-xs text-slate-300 font-semibold">Pre-Vetted Engineers</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400 mb-0.5">Elastic Pods</div>
            <div className="text-xs text-slate-300 font-semibold">Scale Up or Down</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-display font-black text-white mb-0.5">99.4% Green</div>
            <div className="text-xs text-slate-300 font-semibold">Automated QA Pass</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
