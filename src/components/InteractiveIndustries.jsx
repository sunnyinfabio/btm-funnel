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
  Layers
} from 'lucide-react';

export const InteractiveIndustries = ({ onOpenBooking }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: 0,
      name: 'Financial Services & FinTech',
      icon: Landmark,
      color: 'text-emerald-700 border-emerald-200 bg-emerald-50',
      tagline: 'High-Throughput Trading Platforms & Banking Infrastructure',
      architectureTopology: ['Low-Latency Order Router', 'Apache Kafka Event Stream', 'Ledger Microservice', 'PostgreSQL Partitioned DB'],
      systems: ['Low-latency order routing engines (< 2ms)', 'Real-time AML & fraud detection pipelines', 'PCI-DSS & SOC2 compliant payment gateways', 'Automated ledger reconciliation microservices'],
      stack: 'Java 21 / .NET Core / Kafka / AWS / Postgres',
      turnaround: '< 14 Days Squad Kickoff',
    },
    {
      id: 1,
      name: 'Technology & Enterprise SaaS',
      icon: Cpu,
      color: 'text-btm-cyan border-cyan-200 bg-cyan-50',
      tagline: 'Multi-Tenant Cloud Platforms & API Microservices',
      architectureTopology: ['Next.js 15 Edge Router', 'FastAPI / NestJS Microservices', 'AWS EKS Kubernetes Cluster', 'Snowflake Analytics'],
      systems: ['Scalable multi-tenant SaaS backends', 'React / Next.js high-performance web applications', 'Automated CI/CD deployment pipelines & Kubernetes', 'Real-time telemetry and user event streaming'],
      stack: 'React / Node.js / TypeScript / Python / Docker',
      turnaround: '< 10 Days Squad Kickoff',
    },
    {
      id: 2,
      name: 'Retail & E-Commerce',
      icon: ShoppingBag,
      color: 'text-amber-700 border-amber-200 bg-amber-50',
      tagline: 'Omnichannel Commerce, Inventory & Checkout Systems',
      architectureTopology: ['High-Concurrency Edge CDN', 'Cart & Pricing Microservice', 'Redis Cluster Cache', 'ERP Inventory Bridge'],
      systems: ['High-concurrency checkout engines handling flash traffic', 'Real-time inventory synchronization across ERPs', 'Personalized recommendation pipelines & search indexing', 'Headless commerce integrations (Shopify Plus, Custom API)'],
      stack: 'React / Python / Redis / AWS Lambda / Elastic',
      turnaround: '< 12 Days Squad Kickoff',
    },
    {
      id: 3,
      name: 'Healthcare & Life Sciences',
      icon: Activity,
      color: 'text-rose-700 border-rose-200 bg-rose-50',
      tagline: 'HIPAA-Compliant Patient Portals & Clinical Telehealth',
      architectureTopology: ['HIPAA Protected Gateway', 'FHIR / HL7 Data Pipeline', 'WebRTC Video Engine', 'Encrypted Clinical DB'],
      systems: ['HIPAA & HITECH certified EHR/EMR data integration', 'Telemedicine video streaming and appointment dispatch', 'Encrypted clinical trial data pipelines', 'IoT biometric sensor telemetry aggregation'],
      stack: '.NET / C# / Azure Healthcare Cloud / Angular',
      turnaround: '< 14 Days Squad Kickoff',
    },
    {
      id: 4,
      name: 'Transportation & Logistics',
      icon: Truck,
      color: 'text-blue-700 border-blue-200 bg-blue-50',
      tagline: 'Fleet Telemetry, Route Optimization & WMS Systems',
      architectureTopology: ['GPS IoT Ingestion Queue', 'Route Optimization Engine', 'Warehouse Dispatch API', 'Cross-Platform Driver App'],
      systems: ['Real-time GPS fleet tracking and ETA prediction engines', 'Warehouse Management System (WMS) modernization', 'Automated dispatch and driver routing algorithms', 'Supply chain IoT gateway sensor integrations'],
      stack: 'Go / Python / Kafka / GCP / React Native',
      turnaround: '< 14 Days Squad Kickoff',
    },
    {
      id: 5,
      name: 'Airlines & Aviation',
      icon: Plane,
      color: 'text-sky-700 border-sky-200 bg-sky-50',
      tagline: 'Booking Engines, Crew Scheduling & Flight Telemetry',
      architectureTopology: ['GDS Global API Gateway', 'Dynamic Seat Yield Engine', 'Crew Scheduling Microservice', 'Real-Time Flight Telemetry'],
      systems: ['Global Distribution System (GDS) API connectors', 'Dynamic seat pricing & loyalty point reward microservices', 'Crew roster and flight dispatch scheduling systems', 'High-availability mobile passenger portals'],
      stack: 'Java Spring / Angular / AWS / Oracle / Redis',
      turnaround: '< 14 Days Squad Kickoff',
    },
    {
      id: 6,
      name: 'Insurance & InsurTech',
      icon: ShieldCheck,
      color: 'text-amber-700 border-amber-200 bg-amber-50',
      tagline: 'Automated Underwriting & Claims Processing Engines',
      architectureTopology: ['OCR Document Pipeline', 'Underwriting Rules Engine', 'Policyholder Self-Service Portal', 'Secure Claims Repository'],
      systems: ['Rules-based algorithmic underwriting engines', 'Document OCR and automated claims adjudication', 'Policyholder self-service portals and quote calculators', 'Legacy core insurance database migration to cloud'],
      stack: '.NET Core / Azure / Python AI / SQL Server',
      turnaround: '< 14 Days Squad Kickoff',
    },
    {
      id: 7,
      name: 'Automotive & Connected Mobility',
      icon: Car,
      color: 'text-cyan-700 border-cyan-200 bg-cyan-50',
      tagline: 'Telematics, EV Charging Networks & Dealer Portals',
      architectureTopology: ['MQTT Vehicle Telematics', 'EV Station Billing API', 'Dealer Showroom Mobile App', 'OTA Firmware Deployer'],
      systems: ['Vehicle telematics and OTA firmware update backends', 'EV charging station network routing & billing APIs', 'Dealer inventory management & digital showroom apps', 'Supply chain tier-1 supplier EDI integrations'],
      stack: 'C++ / Python / AWS IoT / React / MQTT',
      turnaround: '< 14 Days Squad Kickoff',
    },
  ];

  const current = industries[selectedIndustry];

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-gold text-xs font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">DOMAIN VERTICALS & INDUSTRY TOPOLOGY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Key Focus <span className="text-gradient-gold">Industries</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our squads combine deep vertical domain knowledge with modern engineering architectures. Select an industry to inspect delivered system topologies.
          </p>
        </div>

        {/* Interactive Industry Selector Grid & Active Details Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Industry Selector Pills (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {industries.map((ind, idx) => {
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
                    <span className="font-display font-bold text-sm">
                      {ind.name}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-btm-cyan translate-x-1' : 'opacity-30'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Industry Architecture Preview (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-card-btm rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl bg-white relative overflow-hidden space-y-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border ${current.color}`}>
                      <current.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-[#002B49]">
                        {current.name}
                      </h3>
                      <p className="text-xs text-btm-cyan font-mono font-semibold mt-0.5">
                        {current.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0">
                    {current.turnaround}
                  </span>
                </div>

                {/* Simulated Modern Architecture Topology Flow */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-btm-cyan" />
                    <span>Microservice Topology Flow:</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {current.architectureTopology.map((node, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-900 text-white border border-slate-800 text-[10.5px] font-mono flex flex-col justify-between">
                        <span className="text-btm-cyan text-[9px]">Node 0{i + 1}</span>
                        <span className="font-semibold text-slate-100 mt-1">{node}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Systems Built */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Architected & Deployed Systems:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.systems.map((sys, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack & Governance */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block mb-0.5">Proven Stack:</span>
                    <span className="text-slate-900 font-bold">{current.stack}</span>
                  </div>
                  <div className="text-emerald-700 font-semibold flex items-center gap-1.5 shrink-0">
                    <Lock className="w-3.5 h-3.5" /> 100% IP Clean-Room
                  </div>
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => onOpenBooking(`industry-${current.name.toLowerCase()}`)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 shimmer-btm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Build Squad for {current.name}</span>
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
