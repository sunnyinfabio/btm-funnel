import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Layers, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Database,
  Cloud,
  Terminal,
  Zap,
  Briefcase,
  GitBranch,
  Bot,
  TestTube,
  Clock
} from 'lucide-react';

export const DifferentiationBento = ({ onOpenBooking }) => {
  const [selectedModel, setSelectedModel] = useState(1);

  const capabilities = [
    { name: 'Full-Stack & Backend Engineering', icon: Terminal, desc: '.NET, Java, Python, Node, React, Next.js' },
    { name: 'Automated QA & Reliability', icon: TestTube, desc: 'Playwright, Cypress, CI/CD regression suites' },
    { name: 'Cloud Infrastructure & DevOps', icon: Cloud, desc: 'AWS, Azure, GCP, Kubernetes, Terraform' },
    { name: 'Data Engineering & Analytics', icon: Database, desc: 'Kafka, Snowflake, BigQuery, ETL Pipelines' },
    { name: 'Applied AI / ML Systems', icon: Bot, desc: 'LLM fine-tuning, RAG, automated workflows' },
    { name: 'Enterprise Architecture & PM', icon: Layers, desc: 'High-throughput system design, Agile delivery' },
  ];

  const deliveryModels = [
    {
      title: 'Individual Specialists',
      desc: 'Plug senior individual contributors directly into active sprints to backfill specific technical skills.',
    },
    {
      title: 'Dedicated Engineering Pods',
      desc: 'Autonomous cross-functional squad with dedicated Tech Lead, QA, and Engineers owning feature epics.',
    },
    {
      title: 'Complete Outsourced Delivery',
      desc: 'Turnkey product engineering from architecture and system design to continuous production deployment.',
    },
  ];

  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-btm-cyan text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">STAGE 04 — DIFFERENTIATION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            The <span className="text-gradient-cyan">4 Pillars</span> of BTM Differentiation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            BTM doesn’t just add developers. <strong className="text-slate-900 font-semibold">We add execution capacity.</strong>
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Pillar 1: Business Understanding (Col 6) */}
          <div className="lg:col-span-6 glass-card-btm rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-btm-cyan hover:shadow-xl transition-all bg-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-200 text-btm-cyan">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-btm-cyan tracking-wider font-bold block">Pillar 01</span>
                  <h3 className="font-display font-bold text-2xl text-[#002B49]">Business Understanding</h3>
                </div>
              </div>

              <blockquote className="text-base text-slate-700 italic border-l-2 border-btm-cyan pl-4 my-4 font-display">
                "Technology should solve a business requirement, not exist independently from it."
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Founded and directed by Wall Street and enterprise veterans (Goldman Sachs & Deutsche Bank tech leadership). Our engineers analyze unit economics, compliance regulations, and commercial objectives before writing a line of code.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono text-slate-700">
              <span className="text-btm-cyan font-bold">Outcome-Driven Sprints</span>
              <span className="text-slate-500">Zero Technical Fluff</span>
            </div>
          </div>

          {/* Pillar 2: Flexible Capacity (Col 6) */}
          <div className="lg:col-span-6 glass-card-btm rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-btm-gold hover:shadow-xl transition-all bg-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-amber-600 tracking-wider font-bold block">Pillar 02</span>
                  <h3 className="font-display font-bold text-2xl text-[#002B49]">Flexible Capacity</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Scale engineering capacity up or down dynamically as quarterly priorities and funding milestones change.
              </p>

              {/* 3 Model Selector */}
              <div className="space-y-2.5 mb-6">
                {deliveryModels.map((m, i) => (
                  <div
                    key={m.title}
                    onClick={() => setSelectedModel(i)}
                    className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      selectedModel === i
                        ? 'bg-amber-50 border-amber-300 text-slate-900 font-medium shadow-sm ring-1 ring-amber-300'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-[#002B49] mb-0.5">{m.title}</div>
                    <div className="text-[11px] text-slate-500">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onOpenBooking('flexible-capacity')}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-btm-navy hover:text-white text-slate-800 font-bold text-xs border border-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Scope Your Flexible Capacity</span>
              <ArrowRight className="w-3.5 h-3.5 text-btm-cyan" />
            </button>
          </div>

          {/* Pillar 3: Cross-Functional Capability (Col 7) */}
          <div className="lg:col-span-7 glass-card-btm rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-600 tracking-wider font-bold block">Pillar 03</span>
                  <h3 className="font-display font-bold text-2xl text-[#002B49]">Cross-Functional Capability</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Complete engineering pods covering every layer of the modern technical stack:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {capabilities.map((cap) => (
                  <div key={cap.name} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <cap.icon className="w-4 h-4 text-btm-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{cap.name}</div>
                      <div className="text-[10px] font-mono text-slate-500">{cap.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Zero Sourcing Latency
              </span>
              <span>100% Pre-Vetted Engineers</span>
            </div>
          </div>

          {/* Pillar 4: Global Delivery (Col 5) */}
          <div className="lg:col-span-5 glass-card-btm rounded-3xl p-7 sm:p-8 border border-slate-200 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-purple-600 tracking-wider font-bold block">Pillar 04</span>
                  <h3 className="font-display font-bold text-2xl text-[#002B49]">Global Delivery</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Access scalable engineering capacity across global markets with seamless real-time sprint overlap across US, UK, and APAC time zones.
              </p>

              <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono mb-6">
                <div className="flex justify-between text-slate-700">
                  <span className="font-semibold text-slate-900">🇺🇸 US EST / PST</span>
                  <span className="text-emerald-600 font-bold">4-5 hrs live sync</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="font-semibold text-slate-900">🇬🇧 UK / Europe</span>
                  <span className="text-emerald-600 font-bold">6-7 hrs live sync</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span className="font-semibold text-slate-900">🇮🇳 India Center</span>
                  <span className="text-emerald-600 font-bold">24/7 delivery</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-center">
              <span className="text-xs font-display font-bold text-slate-900 block mb-0.5">Core Brand Principle:</span>
              <span className="text-xs font-mono text-btm-cyan font-bold">
                "BTM doesn’t just add developers. We add execution capacity."
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
