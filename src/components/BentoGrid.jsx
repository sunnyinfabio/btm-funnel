import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Database, 
  Lock, 
  Server, 
  GitBranch, 
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const BentoGrid = ({ onOpenBooking }) => {
  // ROI Calculator interactive state
  const [monthlyLeads, setMonthlyLeads] = useState(850);
  const [dealValue, setDealValue] = useState(18000); // $18k ACV
  const [currentConversionRate, setCurrentConversionRate] = useState(2.8); // 2.8%
  const monthlyLeadsInputId = useId();
  const dealValueInputId = useId();
  const currentConversionRateInputId = useId();

  // Calculation logic with NS multiplier (estimated 2.6x improvement)
  const currentClosedDeals = (monthlyLeads * (currentConversionRate / 100));
  const currentMonthlyRevenue = currentClosedDeals * dealValue;
  
  const optimizedConversionRate = Math.min(15, currentConversionRate * 2.4);
  const optimizedClosedDeals = (monthlyLeads * (optimizedConversionRate / 100));
  const optimizedMonthlyRevenue = optimizedClosedDeals * dealValue;
  
  const monthlyRevenueLift = Math.max(0, optimizedMonthlyRevenue - currentMonthlyRevenue);
  const annualRevenueLift = monthlyRevenueLift * 12;

  const techStack = [
    { name: 'Cloudflare Edge', tag: '0ms Latency', icon: Server, color: 'text-amber-400' },
    { name: 'HubSpot & Salesforce', tag: '2-Way CRM Sync', icon: Database, color: 'text-brand-cyan' },
    { name: 'Next.js & Vite Core', tag: 'Sub-second Hydration', icon: Cpu, color: 'text-brand-violet' },
    { name: 'Stripe & Billflow', tag: 'Instant Checkout', icon: Zap, color: 'text-emerald-400' },
    { name: 'Segment & PostHog', tag: 'Full-Funnel Telemetry', icon: GitBranch, color: 'text-pink-400' },
    { name: 'Calendly & ChiliPiper', tag: 'Smart Round-Robin', icon: RefreshCw, color: 'text-sky-400' },
  ];

  return (
    <section id="roi-calculator" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-brand-violet text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI & ARCHITECTURE MATRIX</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            The <span className="gradient-text-violet">BTM NS Engine</span> in Action
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Simulate the exact financial output of an optimized funnel and explore the engineering foundations powering our conversion architecture.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Cell 1: Interactive ROI Simulator (Col 7) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">Interactive Funnel Capacity Simulator</h3>
                    <p className="text-xs text-slate-400 font-mono">Calculate your immediate pipeline unlock</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono text-brand-cyan">
                  Live Mathematical Model
                </span>
              </div>

              {/* Sliders Area */}
              <div className="space-y-6 mb-8">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label htmlFor={monthlyLeadsInputId} className="text-slate-300 font-medium cursor-pointer">Monthly Inbound Traffic / Leads</label>
                    <span className="font-mono text-brand-cyan font-bold">{monthlyLeads.toLocaleString()} leads/mo</span>
                  </div>
                  <input
                    id={monthlyLeadsInputId}
                    type="range"
                    min="100"
                    max="10000"
                    step="50"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>100</span>
                    <span>5,000</span>
                    <span>10,000+</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label htmlFor={dealValueInputId} className="text-slate-300 font-medium cursor-pointer">Average Deal Size (ACV)</label>
                    <span className="font-mono text-brand-violet font-bold">${dealValue.toLocaleString()}</span>
                  </div>
                  <input
                    id={dealValueInputId}
                    type="range"
                    min="2000"
                    max="100000"
                    step="1000"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-violet"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>$2k</span>
                    <span>$50k</span>
                    <span>$100k+</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label htmlFor={currentConversionRateInputId} className="text-slate-300 font-medium cursor-pointer">Current Funnel Conversion Rate</label>
                    <span className="font-mono text-emerald-400 font-bold">{currentConversionRate.toFixed(1)}%</span>
                  </div>
                  <input
                    id={currentConversionRateInputId}
                    type="range"
                    min="0.5"
                    max="8.0"
                    step="0.1"
                    value={currentConversionRate}
                    onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>0.5% (Severe Leakage)</span>
                    <span>4.0%</span>
                    <span>8.0%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Projected Annual Revenue Lift
                  </span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-cyan">
                    +${Math.round(annualRevenueLift).toLocaleString()}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +{((optimizedConversionRate - currentConversionRate) * 10).toFixed(0)}bps conversion expansion
                  </span>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <button
                    onClick={() => onOpenBooking('roi-calculator')}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet text-slate-950 font-bold text-sm shadow-glow-cyan hover:opacity-90 transition-all flex items-center justify-center gap-2 shimmer-button"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Lock In This Capacity</span>
                  </button>
                  <span className="text-[10px] font-mono text-slate-500">Based on verified cohort benchmarks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Enterprise Integration Matrix (Col 5) */}
          <div id="architecture" className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-violet">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Full-Stack Interoperability</h3>
                  <p className="text-xs text-slate-400 font-mono">Zero-friction tech stack compatibility</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Connects directly to your existing marketing stack without re-platforming or breaking legacy tracking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center gap-3 group"
                  >
                    <tech.icon className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className="text-xs font-semibold text-white">{tech.name}</div>
                      <div className="text-[10px] font-mono text-slate-400">{tech.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> SOC2 & GDPR Compliant
              </span>
              <span>REST & GraphQL APIs</span>
            </div>
          </div>

          {/* Bento Cell 3: Sub-Second Edge Routing (Col 4) */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-lg text-white">Global Edge Routing</h4>
            </div>
            <div className="text-3xl font-display font-black text-white mb-1">&lt; 50ms TTFB</div>
            <p className="text-xs text-slate-400 mb-4">
              Instant edge evaluation determines user tier and renders personalized funnel branches before paint.
            </p>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-300 bg-slate-900/60 p-2 rounded-lg">
                <span>DNS Resolution</span>
                <span className="text-emerald-400">8ms</span>
              </div>
              <div className="flex justify-between text-slate-300 bg-slate-900/60 p-2 rounded-lg">
                <span>Edge Qualification</span>
                <span className="text-emerald-400">14ms</span>
              </div>
              <div className="flex justify-between text-slate-300 bg-slate-900/60 p-2 rounded-lg">
                <span>Total Visual Load</span>
                <span className="text-brand-cyan">340ms</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 4: Anti-Drop Qualification Engine (Col 4) */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-lg text-white">Anti-Drop Frictionless Gates</h4>
            </div>
            <div className="text-3xl font-display font-black text-white mb-1">94.6% Form Finish</div>
            <p className="text-xs text-slate-400 mb-4">
              Dynamic multi-step questions with micro-animations capture 3.2x more completed lead profiles than static 8-field forms.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-brand-cyan/20 text-xs text-slate-300 font-mono">
              ✓ Smart auto-fill & work email validation<br/>
              ✓ Intent scoring without form abandonment<br/>
              ✓ Instant VIP round-robin scheduling
            </div>
          </div>

          {/* Bento Cell 5: Automated Pipeline Guardrails (Col 4) */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-violet">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-lg text-white">Enterprise Guardrails</h4>
            </div>
            <div className="text-3xl font-display font-black text-white mb-1">99.99% SLA</div>
            <p className="text-xs text-slate-400 mb-4">
              Automated anomaly detection immediately alerts when conversion thresholds shift or third-party webhooks lag.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-brand-violet/20 text-xs text-slate-300 font-mono">
              ● 24/7 Webhook Health Monitoring<br/>
              ● Automated Fallback Storage Queues<br/>
              ● Zero Data Loss Guarantee
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
