import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Layers, 
  Target, 
  Cpu, 
  RefreshCw, 
  Clock, 
  CheckCircle2,
  FileCheck2,
  Sliders,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ConversionHub = ({ onOpenBookingWithData }) => {
  const [activeCard, setActiveCard] = useState(1);

  // Form State for Entry Point 01: Capacity Review
  const [reviewData, setReviewData] = useState({
    constraint: 'Backlog Pressure / Launch Deadlines',
    openRoles: '3-5 Open Engineering Roles',
    timeframe: 'Immediate (< 14 Days)',
    email: '',
  });

  // Form State for Entry Point 02: Dedicated Team Blueprint
  const [blueprintData, setBlueprintData] = useState({
    structure: 'Autonomous Squad (Tech Lead + Eng + QA)',
    seniority: 'Senior & Staff Tier (7+ Years)',
    ownership: 'End-to-End Feature Ownership',
    email: '',
  });

  // Form State for Entry Point 03: Modernisation Assessment
  const [modernData, setModernData] = useState({
    system: 'Legacy Monolith / On-Prem Database',
    priority: 'Cloud Containerization (AWS/Azure)',
    complexity: 'High Interdependency / Critical Uptime',
    email: '',
  });

  const handleTrigger = (pathway, data) => {
    if (!data.email) {
      alert('Please provide your work email to receive the report & session.');
      return;
    }
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#00A3E0', '#00D2FF', '#F5A623', '#10B981']
    });

    setTimeout(() => {
      onOpenBookingWithData(pathway, data);
    }, 700);
  };

  return (
    <section id="conversion-hub" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <Target className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">STAGE 06 — PROBLEM-LED CONVERSION HUBS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Start With a <span className="text-gradient-cyan">Specific Problem</span>, Not a Generic Form
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose the technical review matching your current roadmap priority to receive an actionable blueprint from our Senior Architects.
          </p>
        </div>

        {/* 3 Problem-Led Entry Points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Entry Point 01: Engineering Capacity Review */}
          <div
            onClick={() => setActiveCard(0)}
            className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border cursor-pointer bg-white ${
              activeCard === 0
                ? 'border-btm-cyan shadow-xl ring-2 ring-btm-cyan/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-btm-cyan font-bold">
                  Entry Point 01
                </span>
                <span className="text-xs font-mono text-slate-500">48-Hr Turnaround</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002B49] mb-2">
                Engineering Capacity Review
              </h3>
              <p className="text-xs font-mono text-btm-cyan font-semibold mb-4">
                Where is engineering capacity limiting your roadmap?
              </p>

              {/* What We Review Checklist */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700 mb-5">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">What We Audit:</span>
                <div className="flex items-center gap-2">✓ Skill gaps & unfulfilled tech stacks</div>
                <div className="flex items-center gap-2">✓ Open roles causing sprint delays</div>
                <div className="flex items-center gap-2">✓ Backlog pressure & launch bottlenecks</div>
              </div>

              {/* Embedded Scope Selector */}
              <div className="space-y-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs mb-6">
                <div>
                  <label className="block text-slate-600 font-mono mb-1">Primary Constraint</label>
                  <select
                    value={reviewData.constraint}
                    onChange={(e) => setReviewData({ ...reviewData, constraint: e.target.value })}
                    className="w-full p-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:border-btm-cyan focus:outline-none"
                  >
                    <option>Backlog Pressure / Launch Deadlines</option>
                    <option>Hard-to-Hire Niche Tech Stack</option>
                    <option>Slow Sprint Velocity & Regressions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-mono mb-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="cto@company.com"
                    value={reviewData.email}
                    onChange={(e) => setReviewData({ ...reviewData, email: e.target.value })}
                    className="w-full p-2 rounded-lg bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:border-btm-cyan focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTrigger('capacity-review', reviewData);
              }}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-btm-navy text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Request a Capacity Review</span>
              <ArrowRight className="w-4 h-4 text-btm-cyan group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Entry Point 02: Dedicated Team Blueprint (Featured) */}
          <div
            onClick={() => setActiveCard(1)}
            className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border relative cursor-pointer bg-white ${
              activeCard === 1
                ? 'border-btm-cyan shadow-xl ring-2 ring-btm-cyan/30'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-btm-cyan to-btm-gold text-white text-[10px] font-mono font-black uppercase tracking-wider shadow-md">
              Most Requested
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold">
                  Entry Point 02
                </span>
                <span className="text-xs font-mono text-emerald-600 font-bold">&lt; 14 Days Deploy</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002B49] mb-2">
                Dedicated Team Blueprint
              </h3>
              <p className="text-xs font-mono text-amber-700 font-semibold mb-4">
                What should the right engineering team look like for your next initiative?
              </p>

              {/* What We Define Checklist */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700 mb-5">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">What We Define:</span>
                <div className="flex items-center gap-2">✓ Exact squad roles & skills matrix</div>
                <div className="flex items-center gap-2">✓ Seniority mix & Tech Lead allocation</div>
                <div className="flex items-center gap-2">✓ Delivery ownership & sprint cadence</div>
              </div>

              {/* Embedded Selector */}
              <div className="space-y-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs mb-6">
                <div>
                  <label className="block text-slate-600 font-mono mb-1">Desired Squad Structure</label>
                  <select
                    value={blueprintData.structure}
                    onChange={(e) => setBlueprintData({ ...blueprintData, structure: e.target.value })}
                    className="w-full p-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:border-btm-cyan focus:outline-none"
                  >
                    <option>Autonomous Squad (Tech Lead + Eng + QA)</option>
                    <option>Specialist Pod (2-3 Senior Backend / Cloud)</option>
                    <option>Multi-Pod Scale (8-12+ Engineers)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-mono mb-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="vp-eng@company.com"
                    value={blueprintData.email}
                    onChange={(e) => setBlueprintData({ ...blueprintData, email: e.target.value })}
                    className="w-full p-2 rounded-lg bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:border-btm-cyan focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTrigger('blueprint-architecture', blueprintData);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-xs shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 shimmer-btm"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Build Your Team Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Entry Point 03: Technology Modernisation Assessment */}
          <div
            onClick={() => setActiveCard(2)}
            className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border cursor-pointer bg-white ${
              activeCard === 2
                ? 'border-btm-cyan shadow-xl ring-2 ring-btm-cyan/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-bold">
                  Entry Point 03
                </span>
                <span className="text-xs font-mono text-slate-500">SOC2 & ISO Ready</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002B49] mb-2">
                Modernisation Assessment
              </h3>
              <p className="text-xs font-mono text-purple-700 font-semibold mb-4">
                Before rebuilding a legacy system, identify what actually needs to change.
              </p>

              {/* What We Assess Checklist */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-700 mb-5">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block mb-1">What We Assess:</span>
                <div className="flex items-center gap-2">✓ Architecture & cloud readiness</div>
                <div className="flex items-center gap-2">✓ Technical debt & migration complexity</div>
                <div className="flex items-center gap-2">✓ Integrations, performance & security</div>
              </div>

              {/* Embedded Selector */}
              <div className="space-y-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs mb-6">
                <div>
                  <label className="block text-slate-600 font-mono mb-1">Target Modernisation</label>
                  <select
                    value={modernData.priority}
                    onChange={(e) => setModernData({ ...modernData, priority: e.target.value })}
                    className="w-full p-2 rounded-lg bg-white border border-slate-300 text-slate-800 focus:border-btm-cyan focus:outline-none"
                  >
                    <option>Cloud Containerization (AWS/Azure)</option>
                    <option>Monolith to Microservices Refactoring</option>
                    <option>Legacy Framework (.NET/Java) Upgrade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-mono mb-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="architect@enterprise.com"
                    value={modernData.email}
                    onChange={(e) => setModernData({ ...modernData, email: e.target.value })}
                    className="w-full p-2 rounded-lg bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:border-btm-cyan focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleTrigger('audit-optimization', modernData);
              }}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-btm-navy text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Request an Assessment</span>
              <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
