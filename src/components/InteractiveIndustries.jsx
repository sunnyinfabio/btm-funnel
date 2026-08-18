import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Cpu, 
  Plane, 
  Car, 
  Package, 
  Landmark, 
  Building, 
  Activity, 
  Factory, 
  ShieldCheck, 
  Truck, 
  Film, 
  Utensils, 
  Radio, 
  Flame,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Server,
  GitBranch,
  Database,
  Layers,
  Award,
  AlertCircle,
  Users
} from 'lucide-react';

export const InteractiveIndustries = ({ onOpenBooking }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const cases = [
    {
      id: 0,
      name: 'Financial Services & FinTech',
      icon: Landmark,
      color: 'text-emerald-700 border-emerald-200 bg-emerald-50',
      tagline: 'High-Throughput Order Routing & Real-Time AML Infrastructure',
      challenge: 'Client faced severe latency bottlenecks (> 45ms) and scaling limits during market volatility peaks with strict PCI-DSS & SOC2 audit deadlines.',
      btmRole: 'Deployed an autonomous pod of 1x Principal FinTech Architect + 4x Senior .NET Core & Kafka Engineers within 11 days.',
      whatBTM_Owned: 'Full architecture refactor from legacy monolithic engine to distributed event-driven microservices with Redis clusters and PostgreSQL partitioning.',
      outcome: 'Reduced order routing latency from 45ms to < 1.8ms; scaled transaction throughput 6x to 25,000 tx/sec with 100% green compliance pass.',
      stack: 'Java 21 / .NET Core 8 / Apache Kafka / AWS EKS / Postgres',
      turnaround: '< 11 Days Deployment',
      clientTier: 'Tier-1 Algorithmic Trading Firm',
    },
    {
      id: 1,
      name: 'Technology & Enterprise SaaS',
      icon: Cpu,
      color: 'text-btm-cyan border-cyan-200 bg-cyan-50',
      tagline: 'Multi-Tenant Cloud Platform & Microservices Migration',
      challenge: 'Fast-growing Series B SaaS had 4 months of backlogged enterprise customer requests with 6 open senior full-stack roles stalling the roadmap.',
      btmRole: 'Injected a dedicated pod of 3x Senior React/Next.js engineers + 2x Python/FastAPI backend specialists directly into active sprints.',
      whatBTM_Owned: 'End-to-end multi-tenant permissioning engine, sub-second analytics dashboard, and automated Playwright regression pipeline.',
      outcome: 'Shipped 14 delayed enterprise feature epics in 6 weeks; unlocked $1.8M in enterprise ACV renewals with zero regression defects.',
      stack: 'React 19 / Next.js 15 / FastAPI / Docker / Snowflake',
      turnaround: '< 9 Days Deployment',
      clientTier: 'Enterprise AI & Workflow SaaS',
    },
    {
      id: 2,
      name: 'Healthcare & Life Sciences',
      icon: Activity,
      color: 'text-rose-700 border-rose-200 bg-rose-50',
      tagline: 'HIPAA/HITECH Certified Telehealth & EHR Integration Engine',
      challenge: 'Legacy patient intake system caused clinical dispatch delays and failed mobile responsiveness for 200,000+ telehealth consultations.',
      btmRole: 'Provided 1x Healthcare Solutions Architect + 3x .NET & Azure Cloud Engineers operating under clean-room HIPAA BAA protocols.',
      whatBTM_Owned: 'Engineered WebRTC high-availability video consultation microservice and automated HL7/FHIR EHR biometric synchronization pipeline.',
      outcome: 'Zero consultation downtime across 350,000+ sessions; cut patient wait times by 68% while maintaining 100% HIPAA audit compliance.',
      stack: '.NET 8 / Azure Healthcare Cloud / WebRTC / Angular',
      turnaround: '< 12 Days Deployment',
      clientTier: 'Nationwide Telehealth Network',
    },
    {
      id: 3,
      name: 'Retail & Omnichannel E-Commerce',
      icon: ShoppingBag,
      color: 'text-amber-700 border-amber-200 bg-amber-50',
      tagline: 'High-Concurrency Flash Checkout & Real-Time ERP Bridge',
      challenge: 'Flash-sale traffic spikes caused 14% cart drop-offs and inventory discrepancies between physical retail stores and digital storefronts.',
      btmRole: 'Deployed an elastic engineering squad of 4x Full-Stack Engineers + 1x SRE specialized in high-concurrency cloud caching.',
      whatBTM_Owned: 'Architected distributed Redis lock inventory reservation system and serverless checkout microservices with Stripe & ERP connectors.',
      outcome: 'Supported 180,000 concurrent checkout sessions during Black Friday with 0% downtime and real-time sub-second inventory sync.',
      stack: 'React / Python / Redis Cluster / AWS Lambda Serverless',
      turnaround: '< 10 Days Deployment',
      clientTier: 'Global Apparel & Retail Brand',
    },
    {
      id: 4,
      name: 'Transportation & Logistics',
      icon: Truck,
      color: 'text-blue-700 border-blue-200 bg-blue-50',
      tagline: 'Real-Time GPS Fleet Telemetry & WMS Optimization',
      challenge: 'Fleet dispatch was relying on batch data updates causing 25-minute route estimation delays and warehouse queue congestion.',
      btmRole: 'Embedded 1x Distributed Systems Lead + 3x Go & Python engineers into internal logistics platform sprints.',
      whatBTM_Owned: 'Engineered real-time GPS IoT stream ingestion pipeline handling 50,000+ vehicle sensors and automated driver routing algorithms.',
      outcome: 'Reduced fleet idle time by 22%; cut fuel consumption costs by $840k annually with live sub-second GPS tracking.',
      stack: 'Go / Python / Kafka / GCP / React Native',
      turnaround: '< 14 Days Deployment',
      clientTier: 'Intermodal Freight & Logistics Leader',
    },
    {
      id: 5,
      name: 'Airlines & Aviation',
      icon: Plane,
      color: 'text-sky-700 border-sky-200 bg-sky-50',
      tagline: 'GDS Booking Engine & Flight Dispatch Optimization',
      challenge: 'Legacy mainframe ticketing system couldn’t support dynamic seat pricing or mobile self-service check-in integrations.',
      btmRole: 'Deployed 1x Aviation Domain Architect + 4x Senior Java Spring & Cloud Engineers.',
      whatBTM_Owned: 'Modernized GDS API middleware layer, dynamic seat yield algorithm, and crew roster dispatch microservices.',
      outcome: 'Increased digital ancillary booking revenue by 31%; reduced check-in desk airport queue times by 45%.',
      stack: 'Java 21 / Spring Boot / AWS / Redis / Angular',
      turnaround: '< 14 Days Deployment',
      clientTier: 'International Commercial Carrier',
    },
  ];

  const current = cases[selectedIndustry];

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#002B49] text-xs font-mono mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">FEATURED PROOF & EXECUTION BLUEPRINTS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Proven <span className="text-gradient-cyan">Execution Case Studies</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Undeniable evidence of how BTM squads solve technical constraints across mission-critical enterprise environments.
          </p>
        </div>

        {/* Interactive Industry Selector Tabs & Featured Case Deep-Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Selector Pills (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {cases.map((ind, idx) => {
              const isSelected = selectedIndustry === idx;
              return (
                <div
                  key={ind.id}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-btm-cyan shadow-md text-slate-900 ring-2 ring-btm-cyan/20 scale-[1.01]'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl border ${ind.color}`}>
                      <ind.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-slate-900">
                        {ind.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        {ind.clientTier}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-btm-cyan translate-x-1' : 'opacity-30'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Featured Case Study Deep-Dive: Challenge → BTM Role → What BTM Owned → Outcome (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="glass-card-btm rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl bg-white relative overflow-hidden space-y-6"
              >
                {/* Case Header */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-[10.5px] font-mono uppercase text-slate-400 font-bold">
                      {current.clientTier} • {current.turnaround}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#002B49] mt-0.5">
                      {current.name}
                    </h3>
                    <p className="text-xs text-btm-cyan font-mono font-semibold">
                      {current.tagline}
                    </p>
                  </div>

                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0">
                    Verified Outcome
                  </span>
                </div>

                {/* 4-Step Structural Execution Matrix: Challenge -> Role -> Owned -> Outcome */}
                <div className="space-y-3.5 text-xs">
                  
                  {/* 1. Challenge */}
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200">
                    <span className="text-[10px] font-mono uppercase font-bold text-red-700 block mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> 1. The Challenge & Technical Bottleneck
                    </span>
                    <p className="text-slate-800 leading-relaxed">
                      {current.challenge}
                    </p>
                  </div>

                  {/* 2. BTM Role */}
                  <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200">
                    <span className="text-[10px] font-mono uppercase font-bold text-btm-cyan block mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> 2. BTM Role & Squad Formation
                    </span>
                    <p className="text-slate-800 leading-relaxed">
                      {current.btmRole}
                    </p>
                  </div>

                  {/* 3. What BTM Owned */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-600" /> 3. What BTM Owned
                    </span>
                    <p className="text-slate-800 leading-relaxed">
                      {current.whatBTM_Owned}
                    </p>
                  </div>

                  {/* 4. Quantifiable Outcome */}
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-300">
                    <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 block mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 4. Quantifiable Outcome & Production Impact
                    </span>
                    <p className="text-emerald-950 font-bold leading-relaxed">
                      {current.outcome}
                    </p>
                  </div>

                </div>

                {/* Proven Stack Bar */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block mb-0.5">Production Stack:</span>
                    <span className="text-slate-900 font-bold">{current.stack}</span>
                  </div>
                  <div className="text-emerald-700 font-semibold flex items-center gap-1.5 shrink-0">
                    <Lock className="w-3.5 h-3.5" /> 100% IP Clean-Room
                  </div>
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => onOpenBooking(`case-study-${current.name.toLowerCase()}`)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 shimmer-btm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Build Similar Squad for {current.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
