import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Users, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  GitCommit, 
  Layers,
  Image as ImageIcon,
  Check
} from 'lucide-react';

export const DevelopmentProcess = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: '01',
      title: 'Roadmap & Capacity Scoping',
      duration: 'Day 1 - 3',
      commitHash: 'commit #a19f0e',
      headline: 'Aligning business priorities with engineering requirements',
      desc: 'Our Principal Architects conduct an in-depth audit of your sprint bottlenecks, open hiring deficits, and upcoming release deadlines to map the exact seniority and skill matrix required.',
      icon: GitBranch,
      deliverable: 'Custom Engineering Capacity Blueprint',
      status: 'AUDIT COMPLETE'
    },
    {
      step: '02',
      title: 'Squad Formation & Seniority Match',
      duration: '< 14 Days',
      commitHash: 'commit #b47c21',
      headline: 'Pre-vetted senior engineers matched to your exact stack',
      desc: 'We assemble your dedicated pod or staff engineers from our top 1% talent pool. You review profiles, conduct technical alignment chats, and approve each team member.',
      icon: Users,
      deliverable: 'Pre-Vetted Squad Roster & Seniority SLA',
      status: 'SQUAD ALLOCATED'
    },
    {
      step: '03',
      title: 'Toolchain & CI/CD Integration',
      duration: 'Day 14 - 15',
      commitHash: 'commit #c82d33',
      headline: 'Frictionless onboarding into your daily workflows',
      desc: 'Engineers receive secure SOC2-compliant credentials and integrate directly into your Jira/Linear boards, Slack channels, GitHub repositories, and automated CI/CD deployment pipelines.',
      icon: Terminal,
      deliverable: 'Day 1 Environment Setup & First PR Commit',
      status: 'PIPELINE CONNECTED'
    },
    {
      step: '04',
      title: 'Agile Sprint Execution & Standups',
      duration: 'Active Sprints',
      commitHash: 'commit #d99e44',
      headline: 'Synchronized daily velocity with clear story-point tracking',
      desc: 'Squads participate in your daily standups and sprint planning. Tech Leads ensure continuous PR merges, blocker elimination, and weekly burndown transparency.',
      icon: Activity,
      deliverable: 'Weekly Sprint Burndown & Velocity Telemetry',
      status: 'BURNDOWN ACTIVE'
    },
    {
      step: '05',
      title: 'Continuous Automated QA & Code Review',
      duration: 'Per Sprint',
      commitHash: 'commit #e33f55',
      headline: 'Institutional clean-code standards with zero regressions',
      desc: 'Every commit passes through automated Playwright/Cypress end-to-end test suites, peer code reviews, and vulnerability scanning before merging to staging.',
      icon: ShieldCheck,
      deliverable: '99.4% Green Test Pass Rate Guarantee',
      status: 'TESTS VERIFIED'
    },
    {
      step: '06',
      title: 'Production Deploy & Elastic Scaling',
      duration: 'Continuous',
      commitHash: 'commit #f11a66',
      headline: 'Zero-downtime releases with 100% IP ownership',
      desc: 'Scale team capacity up or down dynamically as quarterly initiatives evolve. You retain complete ownership of all code, documentation, and infrastructure from Day 1.',
      icon: Rocket,
      deliverable: '100% Clean-Room Intellectual Property Handover',
      status: 'CANARY DEPLOYED'
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">RIGOROUS SPRINT EXECUTION LIFECYCLE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Our <span className="text-gradient-cyan">Development Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial capacity diagnostic to high-velocity sprint execution in less than 14 days.
          </p>
        </div>

        {/* Step Selector Pills with Git Commit Hashes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-btm-cyan text-slate-900 shadow-md ring-2 ring-btm-cyan/20 scale-[1.02]'
                  : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-btm-cyan font-bold">Step {s.step}</span>
                <span className="text-[9px] text-slate-400">{s.commitHash}</span>
              </div>
              <div className="text-xs font-bold text-slate-900 line-clamp-1">
                {s.title}
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">
                {s.duration}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card with Official BTM Process Image */}
        <div className="glass-card-btm rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Active Step Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-btm-cyan font-bold">
                  PHASE {steps[activeStep].step} • {steps[activeStep].duration}
                </span>
                <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> SLA Guaranteed
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  [{steps[activeStep].commitHash}]
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#002B49]">
                {steps[activeStep].headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-amber-700 font-bold mr-2">Core Deliverable:</span>
                  <span className="text-slate-900 font-semibold">{steps[activeStep].deliverable}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold shrink-0 hidden md:inline">
                  {steps[activeStep].status}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking('process-timeline')}
                  className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-xs shadow-btm-glow hover:opacity-95 transition-all flex items-center gap-2 shimmer-btm cursor-pointer"
                >
                  <span>Initiate Phase {steps[activeStep].step} Scoping</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Official BTM Development Process Diagram Card */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 p-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white">
                  <img
                    src="/BTM_development-process_img_2.jpg"
                    alt="BTM Outsourcing Development Process"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B49]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-mono font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-btm-cyan" />
                      Official BTM Development Lifecycle
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 mt-2 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Agile Delivery Framework
                  </span>
                  <span className="text-btm-cyan font-bold">100% IP Clean-Room</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
