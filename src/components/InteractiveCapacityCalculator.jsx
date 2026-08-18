import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Users, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  Sliders,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveCapacityCalculator = ({ onOpenBooking }) => {
  const [squadSize, setSquadSize] = useState(4);
  const [seniorityLevel, setSeniorityLevel] = useState('senior'); // 'mid', 'senior', 'staff'
  const [timeHorizon, setTimeHorizon] = useState(6); // months
  const [primaryStack, setPrimaryStack] = useState('.NET / Cloud');

  // Calculation parameters
  const hourlyRateMap = {
    mid: { internalUS: 95, btm: 38 },
    senior: { internalUS: 135, btm: 48 },
    staff: { internalUS: 175, btm: 62 },
  };

  const recruiterCommissionPerHead = 32000;
  const hiringDelayMonths = 3.5; // Average in-house hiring lag

  const monthlyHoursPerDev = 160;
  const currentRate = hourlyRateMap[seniorityLevel];

  // Calculations
  const inHouseRecruitmentSunk = squadSize * recruiterCommissionPerHead;
  const inHouseMonthlyCost = squadSize * monthlyHoursPerDev * currentRate.internalUS;
  const btmMonthlyCost = squadSize * monthlyHoursPerDev * currentRate.btm;

  const totalInHouseCost = inHouseRecruitmentSunk + (inHouseMonthlyCost * timeHorizon);
  const totalBtmCost = btmMonthlyCost * timeHorizon;
  const netCapitalSaved = Math.max(0, totalInHouseCost - totalBtmCost);
  const velocityGainWeeks = Math.round(squadSize * 3.5 * 1.5);
  const storyPointsDelivered = squadSize * 32 * timeHorizon;

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00A3E0', '#00D2FF', '#F5A623', '#10B981']
    });
    onOpenBooking(`calculator-${squadSize}-devs-${seniorityLevel}`);
  };

  return (
    <section id="capacity-calculator" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">INTERACTIVE CAPACITY & ROI ESTIMATOR</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Calculate Your <span className="text-gradient-cyan">Execution Velocity</span> & Capital Savings
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Adjust squad parameters below to instantly model deployment speed, recruiter fee elimination, and sprint throughput.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Hub (Col 7) */}
          <div className="lg:col-span-7 glass-card-btm rounded-3xl p-7 sm:p-9 border border-slate-200 bg-white shadow-xl space-y-8">
            
            {/* Control 1: Squad Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-display font-bold text-base text-[#002B49] flex items-center gap-2">
                  <Users className="w-4 h-4 text-btm-cyan" />
                  <span>Target Engineering Capacity (Developers)</span>
                </label>
                <span className="font-mono text-lg font-black text-btm-cyan px-3 py-0.5 rounded-lg bg-cyan-50 border border-cyan-200">
                  {squadSize} Engineers
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="16"
                step="1"
                value={squadSize}
                onChange={(e) => setSquadSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-btm-cyan"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                <span>1 Specialist</span>
                <span>4 (Pod)</span>
                <span>8 (Squad)</span>
                <span>16+ (Multi-Pod)</span>
              </div>
            </div>

            {/* Control 2: Seniority Mix */}
            <div>
              <label className="block font-display font-bold text-base text-[#002B49] mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-700" />
                <span>Seniority & Domain Experience Tier</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mid', label: 'Mid-Level', exp: '4-6 Yrs Exp', badge: 'Sprint Backlog' },
                  { id: 'senior', label: 'Senior Tier', exp: '7-10 Yrs Exp', badge: 'High-Velocity' },
                  { id: 'staff', label: 'Staff / Architect', exp: '10+ Yrs Exp', badge: 'Ex-Goldman/Wall St' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSeniorityLevel(tier.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      seniorityLevel === tier.id
                        ? 'bg-cyan-50 border-btm-cyan text-slate-900 shadow-sm ring-2 ring-btm-cyan/30 scale-[1.02]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#002B49]">{tier.label}</div>
                    <div className="text-[10px] text-btm-cyan font-mono font-semibold">{tier.exp}</div>
                    <div className="text-[9px] text-slate-500 font-mono mt-1">{tier.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Time Horizon */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-display font-bold text-base text-[#002B49] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Roadmap Duration (Months)</span>
                </label>
                <span className="font-mono text-base font-bold text-emerald-700 px-3 py-0.5 rounded-lg bg-emerald-50 border border-emerald-200">
                  {timeHorizon} Months
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="24"
                step="3"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                <span>3 Mo (Pilot)</span>
                <span>6 Mo (H1/H2)</span>
                <span>12 Mo (Annual)</span>
                <span>24 Mo (Multi-Year)</span>
              </div>
            </div>

            {/* Control 4: Primary Technology Stack */}
            <div>
              <label className="block font-display font-bold text-sm text-[#002B49] mb-2">
                Target Architecture Stack
              </label>
              <div className="flex flex-wrap gap-2">
                {['.NET / Cloud', 'Java / Spring Boot', 'React / Next.js / Node', 'Python / AI / Kafka', 'Mobile iOS/Android'].map((stk) => (
                  <button
                    key={stk}
                    type="button"
                    onClick={() => setPrimaryStack(stk)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      primaryStack === stk
                        ? 'bg-slate-900 text-white font-bold shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {stk}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-Time Live Telemetry Output Card (Col 5) */}
          <div className="lg:col-span-5 bg-[#002B49] text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#002B49] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-btm-cyan/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700">
                <span className="text-xs font-mono uppercase text-btm-cyan font-bold tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Live Estimated Impact
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                  SLA Guaranteed
                </span>
              </div>

              {/* Metric 1: Net Capital Savings */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-700">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Estimated Net Capital Saved
                </span>
                <div className="text-3xl sm:text-4xl font-display font-black text-emerald-400 tracking-tight">
                  ${netCapitalSaved.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-300 font-mono mt-1">
                  Eliminates ${inHouseRecruitmentSunk.toLocaleString()} in recruiter commissions
                </div>
              </div>

              {/* 3 Metric Mini-Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Deploy Speed</span>
                  <span className="text-xl font-display font-bold text-white">&lt; 14 Days</span>
                  <span className="text-[10px] text-btm-cyan font-mono block">vs 120 days in-house</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Story Points</span>
                  <span className="text-xl font-display font-bold text-amber-400">~{storyPointsDelivered.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-300 font-mono block">Sprint Capacity</span>
                </div>
              </div>

              {/* Summary Bullet Points */}
              <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Pre-Vetted {seniorityLevel.toUpperCase()} Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>4-7 hrs Daily Real-Time Standup Overlap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Backed by 2-Week Risk-Free Trial Sprint</span>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={handleCelebrate}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 shimmer-btm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Lock In This Squad Allocation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
