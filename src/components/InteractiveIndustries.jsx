import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Cpu, 
  Plane, 
  Truck, 
  Landmark, 
  Activity, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Layers,
  Award,
  AlertCircle,
  Users,
  X,
  Clock,
  TrendingUp,
  FileText
} from 'lucide-react';
import { HolographicTiltCard } from './HolographicTiltCard';

export const InteractiveIndustries = ({ onOpenBooking }) => {
  const [selectedCaseModal, setSelectedCaseModal] = useState(null);

  const cases = [
    {
      id: 'fintech',
      name: 'Financial Services & FinTech',
      icon: Landmark,
      image: '/services/BTM_Service_SO_Img.jpg',
      headlineMetric: '< 1.8ms Latency • 25,000 tx/sec',
      highlightBadge: 'HIGH-FREQUENCY TRADING',
      clientTier: 'Tier-1 Algorithmic Trading Firm',
      tagline: 'High-Throughput Order Routing & Real-Time AML Infrastructure',
      challenge: 'Client faced severe latency bottlenecks (> 45ms) and scaling limits during market volatility peaks with strict PCI-DSS & SOC2 audit deadlines.',
      btmRole: 'Deployed an autonomous pod of 1x Principal FinTech Architect + 4x Senior .NET Core & Kafka Engineers within 11 days.',
      whatBTM_Owned: 'Full architecture refactor from legacy monolithic engine to distributed event-driven microservices with Redis clusters and PostgreSQL partitioning.',
      outcome: 'Reduced order routing latency from 45ms to < 1.8ms; scaled transaction throughput 6x to 25,000 tx/sec with 100% green compliance pass.',
      stack: 'Java 21 / .NET Core 8 / Apache Kafka / AWS EKS / Postgres',
      turnaround: '< 11 Days Deployment',
    },
    {
      id: 'saas',
      name: 'Technology & Enterprise SaaS',
      icon: Cpu,
      image: '/services/BTM_Service_WD_Img.jpg',
      headlineMetric: '14 Delayed Epics Shipped in 6 Wks',
      highlightBadge: 'SERIES-B ENTERPRISE CLOUD',
      clientTier: 'Enterprise AI & Workflow SaaS',
      tagline: 'Multi-Tenant Cloud Platform & Microservices Migration',
      challenge: 'Fast-growing Series B SaaS had 4 months of backlogged enterprise customer requests with 6 open senior full-stack roles stalling the roadmap.',
      btmRole: 'Injected a dedicated pod of 3x Senior React/Next.js engineers + 2x Python/FastAPI backend specialists directly into active sprints.',
      whatBTM_Owned: 'End-to-end multi-tenant permissioning engine, sub-second analytics dashboard, and automated Playwright regression pipeline.',
      outcome: 'Shipped 14 delayed enterprise feature epics in 6 weeks; unlocked $1.8M in enterprise ACV renewals with zero regression defects.',
      stack: 'React 19 / Next.js 15 / FastAPI / Docker / Snowflake',
      turnaround: '< 9 Days Deployment',
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: Activity,
      image: '/services/BTM_Service_QA_Img.jpg',
      headlineMetric: '0% Downtime across 350k Sessions',
      highlightBadge: 'HIPAA / HITECH COMPLIANT',
      clientTier: 'Nationwide Telehealth Network',
      tagline: 'HIPAA/HITECH Certified Telehealth & EHR Integration Engine',
      challenge: 'Legacy patient intake system caused clinical dispatch delays and failed mobile responsiveness for 200,000+ telehealth consultations.',
      btmRole: 'Provided 1x Healthcare Solutions Architect + 3x .NET & Azure Cloud Engineers operating under clean-room HIPAA BAA protocols.',
      whatBTM_Owned: 'Engineered WebRTC high-availability video consultation microservice and automated HL7/FHIR EHR biometric synchronization pipeline.',
      outcome: 'Zero consultation downtime across 350,000+ sessions; cut patient wait times by 68% while maintaining 100% HIPAA audit compliance.',
      stack: '.NET 8 / Azure Healthcare Cloud / WebRTC / Angular',
      turnaround: '< 12 Days Deployment',
    },
    {
      id: 'retail',
      name: 'Retail & Omnichannel E-Commerce',
      icon: ShoppingBag,
      image: '/services/BTM_Service_SA_Img.jpg',
      headlineMetric: '180,000 Concurrent Checkouts',
      highlightBadge: 'FLASH-SCALE RESILIENCE',
      clientTier: 'Global Apparel & Retail Brand',
      tagline: 'High-Concurrency Flash Checkout & Real-Time ERP Bridge',
      challenge: 'Flash-sale traffic spikes caused 14% cart drop-offs and inventory discrepancies between physical retail stores and digital storefronts.',
      btmRole: 'Deployed an elastic engineering squad of 4x Full-Stack Engineers + 1x SRE specialized in high-concurrency cloud caching.',
      whatBTM_Owned: 'Architected distributed Redis lock inventory reservation system and serverless checkout microservices with Stripe & ERP connectors.',
      outcome: 'Supported 180,000 concurrent checkout sessions during Black Friday with 0% downtime and real-time sub-second inventory sync.',
      stack: 'React / Python / Redis Cluster / AWS Lambda Serverless',
      turnaround: '< 10 Days Deployment',
    },
    {
      id: 'logistics',
      name: 'Transportation & Logistics',
      icon: Truck,
      image: '/services/BTM_Service_DT_Img.jpg',
      headlineMetric: '22% Idle Reduction • $840k Saved',
      highlightBadge: 'REAL-TIME IOT TELEMETRY',
      clientTier: 'Intermodal Freight & Logistics Leader',
      tagline: 'Real-Time GPS Fleet Telemetry & WMS Optimization',
      challenge: 'Fleet dispatch was relying on batch data updates causing 25-minute route estimation delays and warehouse queue congestion.',
      btmRole: 'Embedded 1x Distributed Systems Lead + 3x Go & Python engineers into internal logistics platform sprints.',
      whatBTM_Owned: 'Engineered real-time GPS IoT stream ingestion pipeline handling 50,000+ vehicle sensors and automated driver routing algorithms.',
      outcome: 'Reduced fleet idle time by 22%; cut fuel consumption costs by $840k annually with live sub-second GPS tracking.',
      stack: 'Go / Python / Kafka / GCP / React Native',
      turnaround: '< 14 Days Deployment',
    },
    {
      id: 'aviation',
      name: 'Airlines & Aviation',
      icon: Plane,
      image: '/services/BTM_Service_MD_Img.jpg',
      headlineMetric: '+31% Ancillary Revenue Growth',
      highlightBadge: 'MISSION-CRITICAL DISPATCH',
      clientTier: 'International Commercial Carrier',
      tagline: 'GDS Booking Engine & Flight Dispatch Optimization',
      challenge: 'Legacy mainframe ticketing system couldn’t support dynamic seat pricing or mobile self-service check-in integrations.',
      btmRole: 'Deployed 1x Aviation Domain Architect + 4x Senior Java Spring & Cloud Engineers.',
      whatBTM_Owned: 'Modernized GDS API middleware layer, dynamic seat yield algorithm, and crew roster dispatch microservices.',
      outcome: 'Increased digital ancillary booking revenue by 31%; reduced check-in desk airport queue times by 45%.',
      stack: 'Java 21 / Spring Boot / AWS / Redis / Angular',
      turnaround: '< 14 Days Deployment',
    },
  ];

  return (
    <section id="industries" className="py-20 relative overflow-hidden bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#002B49] text-xs font-mono mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">FEATURED PROOF & CASE STUDIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-3">
            Proven <span className="text-gradient-cyan">Execution Case Studies</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Verified quantitative results across mission-critical enterprise environments. Click any card to read the complete technical case dossier.
          </p>
        </div>

        {/* Minimalist 6 Case Study Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cases.map((cs) => (
            <HolographicTiltCard
              key={cs.id}
              maxRotation={10}
              glareOpacity={0.25}
              onClick={() => setSelectedCaseModal(cs)}
              className="p-6 bg-white border border-slate-200 hover:border-btm-cyan transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Top: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-btm-cyan flex items-center justify-center">
                    <cs.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                    {cs.highlightBadge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  {cs.clientTier}
                </div>

                <h3 className="font-display font-bold text-xl text-[#002B49] group-hover:text-btm-cyan transition-colors mb-3">
                  {cs.name}
                </h3>

                {/* Outcome Pill */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold mb-4 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cs.headlineMetric}</span>
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-btm-cyan font-bold">
                <span className="flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> Read Case Dossier
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </HolographicTiltCard>
          ))}
        </div>

        {/* Bottom CTA - Pill Shaped */}
        <div className="text-center">
          <button
            onClick={() => onOpenBooking('all-cases')}
            className="px-8 py-3.5 rounded-full bg-[#002B49] hover:bg-[#00182A] text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Full Institutional Case Archive</span>
            <ArrowRight className="w-4 h-4 text-btm-cyan" />
          </button>
        </div>

      </div>

      {/* On-Demand Full Case Study Dossier Modal */}
      <AnimatePresence>
        {selectedCaseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image Banner */}
              <div className="relative h-36 bg-slate-950 overflow-hidden shrink-0">
                <img
                  src={selectedCaseModal.image}
                  alt={selectedCaseModal.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B49] via-[#002B49]/70 to-transparent" />
                
                <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 text-btm-cyan">
                    {selectedCaseModal.clientTier}
                  </span>
                  <button
                    onClick={() => setSelectedCaseModal(null)}
                    className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-5 right-5 z-10">
                  <h3 className="font-display font-bold text-xl text-white">
                    {selectedCaseModal.name}
                  </h3>
                  <div className="text-xs text-btm-cyan font-mono">{selectedCaseModal.tagline}</div>
                </div>
              </div>

              {/* Modal Body - 4-Step Structural Matrix */}
              <div className="p-6 overflow-y-auto space-y-3 text-xs flex-1">
                
                {/* 1. Challenge */}
                <div className="p-3.5 rounded-2xl bg-red-50/80 border border-red-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-red-700 block mb-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> 1. Challenge & Technical Bottleneck
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {selectedCaseModal.challenge}
                  </p>
                </div>

                {/* 2. BTM Role */}
                <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-btm-cyan block mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> 2. BTM Role & Squad Formation
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {selectedCaseModal.btmRole}
                  </p>
                </div>

                {/* 3. What BTM Owned */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-700 block mb-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-amber-600" /> 3. What BTM Owned
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {selectedCaseModal.whatBTM_Owned}
                  </p>
                </div>

                {/* 4. Outcome */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 block mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 4. Quantifiable Outcome
                  </span>
                  <p className="text-emerald-950 font-bold leading-relaxed">
                    {selectedCaseModal.outcome}
                  </p>
                </div>

                {/* Production Stack */}
                <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-[11px] flex items-center justify-between">
                  <span className="text-slate-400">Stack: <span className="text-btm-cyan font-bold">{selectedCaseModal.stack}</span></span>
                  <span className="text-emerald-400 flex items-center gap-1 shrink-0"><Lock className="w-3 h-3" /> Clean-Room IP</span>
                </div>
              </div>

              {/* Modal Footer - Pill Buttons */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedCaseModal(null)}
                  className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 font-mono text-xs hover:bg-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const cs = selectedCaseModal;
                    setSelectedCaseModal(null);
                    onOpenBooking(`case-${cs.id}`);
                  }}
                  className="px-7 py-2.5 rounded-full bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Squad for {selectedCaseModal.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
