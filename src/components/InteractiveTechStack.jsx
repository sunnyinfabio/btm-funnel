import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Check, 
  Plus, 
  RotateCw, 
  Lock, 
  Cpu, 
  Terminal, 
  Database, 
  Server, 
  Bot, 
  ShieldCheck, 
  Smartphone,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveTechStack = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedSquadStack, setSelectedSquadStack] = useState(['.NET Core & C#', 'React & Next.js', 'AWS & Cloud Architecture']);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & Core Systems' },
    { id: 'frontend', label: 'Frontend & Web' },
    { id: 'cloud', label: 'Cloud & Kubernetes' },
    { id: 'data', label: 'Data & Event Streams' },
    { id: 'ai', label: 'Applied AI & LLMs' },
    { id: 'qa', label: 'Automated QA & CI/CD' },
  ];

  const technologies = [
    { 
      id: 'dotnet',
      name: '.NET Core & C#', 
      version: '.NET 8 / 9 LTS',
      category: 'backend', 
      seniority: '12+ Yrs FinTech', 
      desc: 'High-throughput trading platforms, ASP.NET Core microservices, low-latency gRPC, and Azure hybrid clouds.',
      blueprint: 'ASP.NET WebAPI → MediatR CQRS → Entity Framework Core → SQL Server / Redis Cache',
      frameworks: ['ASP.NET Core', 'Entity Framework', 'gRPC', 'MediatR'],
      squadSpec: '1x Lead Architect + 3x Senior .NET Engineers',
      score: 99.8,
      icon: Terminal,
      accentColor: 'border-blue-200 bg-blue-50/60 text-blue-700',
    },
    { 
      id: 'java',
      name: 'Java & Spring Boot', 
      version: 'Java 21 LTS',
      category: 'backend', 
      seniority: '10+ Yrs Enterprise', 
      desc: 'Resilient multi-threaded banking systems, Spring Cloud microservices, and distributed Kafka stream processing.',
      blueprint: 'Spring Cloud Gateway → Spring Boot 3 Microservices → Kafka Cluster → PostgreSQL Shards',
      frameworks: ['Spring Boot 3', 'Hibernate', 'Kafka Streams', 'Micrometer'],
      squadSpec: '1x Principal Java Lead + 2x Senior Java Engineers + 1x Kafka Specialist',
      score: 99.5,
      icon: Server,
      accentColor: 'border-orange-200 bg-orange-50/60 text-orange-700',
    },
    { 
      id: 'python',
      name: 'Python & FastAPI', 
      version: 'Python 3.12',
      category: 'backend', 
      seniority: '8+ Yrs Cloud AI', 
      desc: 'High-concurrency async APIs, LangChain / LlamaIndex AI agents, and automated data processing pipelines.',
      blueprint: 'FastAPI Async Router → Celery Task Workers → Redis Ingestion → Vector Pinecone DB',
      frameworks: ['FastAPI', 'Celery', 'Pydantic', 'NumPy / Pandas'],
      squadSpec: '1x AI/FastAPI Lead + 2x Python Data Engineers',
      score: 99.2,
      icon: Cpu,
      accentColor: 'border-emerald-200 bg-emerald-50/60 text-emerald-700',
    },
    { 
      id: 'node',
      name: 'Node.js & TypeScript', 
      version: 'Node 20 / TS 5',
      category: 'backend', 
      seniority: '8+ Yrs SaaS', 
      desc: 'Event-driven serverless architectures, NestJS enterprise microservices, and real-time WebSocket engines.',
      blueprint: 'NestJS Microservices → Prisma ORM → Redis PubSub → AWS Lambda Serverless',
      frameworks: ['NestJS', 'Express', 'TypeScript', 'Prisma ORM'],
      squadSpec: '1x Full-Stack Lead + 2x Senior Node/TS Developers',
      score: 99.0,
      icon: Code2,
      accentColor: 'border-green-200 bg-green-50/60 text-green-700',
    },
    { 
      id: 'react',
      name: 'React & Next.js', 
      version: 'React 19 / Next 15',
      category: 'frontend', 
      seniority: '9+ Yrs Web Apps', 
      desc: 'High-performance SSR/SSG enterprise portals, App Router edge caching, and rich interactive data visualizations.',
      blueprint: 'Next.js 15 App Router → Tailwind CSS Design System → Zustand Global State → Vercel/AWS Edge',
      frameworks: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Zustand / Redux'],
      squadSpec: '1x Senior Frontend Architect + 2x React UI/UX Technologists',
      score: 99.7,
      icon: Globe,
      accentColor: 'border-cyan-200 bg-cyan-50/60 text-btm-cyan',
    },
    { 
      id: 'mobile',
      name: 'React Native & Flutter', 
      version: 'Cross-Platform',
      category: 'frontend', 
      seniority: '7+ Yrs Mobile', 
      desc: 'High-fidelity iOS & Android applications with native biometrics, offline sync, and push notification pipelines.',
      blueprint: 'React Native / Flutter Core → Native Bridge APIs → SQLite Offline Sync → Firebase Telemetry',
      frameworks: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
      squadSpec: '1x Mobile Tech Lead + 2x Senior iOS/Android Specialists',
      score: 98.9,
      icon: Smartphone,
      accentColor: 'border-purple-200 bg-purple-50/60 text-purple-700',
    },
    { 
      id: 'aws',
      name: 'AWS & Cloud Architecture', 
      version: 'AWS Certified',
      category: 'cloud', 
      seniority: '10+ Yrs Cloud', 
      desc: 'Multi-region active-active architectures, EKS Kubernetes, Lambda serverless, and IAM security governance.',
      blueprint: 'Route 53 Global Routing → CloudFront CDN → AWS EKS Kubernetes → RDS Aurora Multi-AZ',
      frameworks: ['AWS EKS', 'Lambda', 'Terraform', 'CloudFormation'],
      squadSpec: '1x AWS Certified Solutions Architect + 1x DevOps Engineer',
      score: 99.9,
      icon: Layers,
      accentColor: 'border-amber-200 bg-amber-50/60 text-amber-700',
    },
    { 
      id: 'azure',
      name: 'Microsoft Azure', 
      version: 'Azure Solutions',
      category: 'cloud', 
      seniority: '9+ Yrs Enterprise', 
      desc: 'Azure Kubernetes Service (AKS), App Service, Cosmos DB, and enterprise Entra ID single sign-on federation.',
      blueprint: 'Azure Front Door → Azure AKS Cluster → Cosmos DB Multi-Region → Entra ID OAuth',
      frameworks: ['Azure AKS', 'Azure DevOps', 'Cosmos DB', 'API Management'],
      squadSpec: '1x Azure Enterprise Architect + 1x Cloud Security Specialist',
      score: 99.6,
      icon: Server,
      accentColor: 'border-blue-200 bg-blue-50/60 text-blue-700',
    },
    { 
      id: 'k8s',
      name: 'Kubernetes & Docker', 
      version: 'K8s 1.30+',
      category: 'cloud', 
      seniority: '8+ Yrs DevOps', 
      desc: 'Zero-downtime GitOps pipelines, Helm charts, automated horizontal pod autoscaling, and Istio service mesh.',
      blueprint: 'GitHub Actions → ArgoCD GitOps → Kubernetes Cluster Autoscaler → Prometheus/Grafana',
      frameworks: ['Kubernetes', 'ArgoCD', 'Docker', 'Helm / Istio'],
      squadSpec: '1x Senior Site Reliability Engineer (SRE) + 1x CI/CD Specialist',
      score: 99.4,
      icon: Layers,
      accentColor: 'border-cyan-200 bg-cyan-50/60 text-btm-cyan',
    },
    { 
      id: 'kafka',
      name: 'Apache Kafka & Flink', 
      version: 'Kafka 3.7',
      category: 'data', 
      seniority: '8+ Yrs Streaming', 
      desc: 'Distributed pub/sub messaging clusters handling millions of events/sec with strict zero data loss guarantees.',
      blueprint: 'Event Producers → Kafka Broker Cluster (KRaft) → Flink Real-Time Aggregator → Data Lake',
      frameworks: ['Kafka', 'Flink', 'Schema Registry', 'Debezium CDC'],
      squadSpec: '1x Distributed Systems Architect + 1x Data Pipeline Engineer',
      score: 99.3,
      icon: Database,
      accentColor: 'border-purple-200 bg-purple-50/60 text-purple-700',
    },
    { 
      id: 'postgres',
      name: 'PostgreSQL & MongoDB', 
      version: 'Postgres 16 / Mongo 7',
      category: 'data', 
      seniority: '12+ Yrs DB Design', 
      desc: 'High-concurrency ACID transactions, sharded clusters, query optimization, and read-replica failovers.',
      blueprint: 'Primary Write Node → Read-Replica Pool → Citus Sharded Tables → PgBouncer Connection Pool',
      frameworks: ['PostgreSQL', 'MongoDB', 'Redis Cluster', 'Snowflake'],
      squadSpec: '1x Principal Database Architect + 1x Data Optimization Lead',
      score: 99.8,
      icon: Database,
      accentColor: 'border-indigo-200 bg-indigo-50/60 text-indigo-700',
    },
    { 
      id: 'ai',
      name: 'Applied AI & LLM Systems', 
      version: 'OpenAI / Anthropic',
      category: 'ai', 
      seniority: 'Modern Frontier', 
      desc: 'Enterprise RAG pipelines, vector embedding indexing (Pinecone / Milvus), and automated multi-agent workflows.',
      blueprint: 'User Query → Hybrid RAG Embedding (Pinecone) → Claude 3.5 / GPT-4o Agent → Output Guardrails',
      frameworks: ['LangChain', 'LlamaIndex', 'Pinecone', 'vLLM / HuggingFace'],
      squadSpec: '1x Applied AI Lead + 2x Machine Learning Engineers',
      score: 99.1,
      icon: Bot,
      accentColor: 'border-emerald-200 bg-emerald-50/60 text-emerald-700',
    },
    { 
      id: 'qa',
      name: 'Playwright & Cypress', 
      version: 'Automated CI/CD',
      category: 'qa', 
      seniority: '8+ Yrs Test Auto', 
      desc: 'End-to-end regression suites, cross-browser parallel execution, and automated security vulnerability scans.',
      blueprint: 'PR Commit Trigger → Playwright Parallel Matrix (128 Workers) → SonarQube Code Quality Gate',
      frameworks: ['Playwright', 'Cypress', 'JMeter', 'SonarQube / OWASP'],
      squadSpec: '1x Automated QA Lead + 1x Security/Performance Engineer',
      score: 99.6,
      icon: ShieldCheck,
      accentColor: 'border-rose-200 bg-rose-50/60 text-rose-700',
    },
  ];

  const toggleFlip = (id, e) => {
    e?.stopPropagation();
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleSquadStack = (name, e) => {
    e.stopPropagation();
    if (selectedSquadStack.includes(name)) {
      setSelectedSquadStack(selectedSquadStack.filter(s => s !== name));
    } else {
      setSelectedSquadStack([...selectedSquadStack, name]);
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#00A3E0', '#00D2FF', '#F5A623']
      });
    }
  };

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#002B49] text-xs font-mono mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">ENTERPRISE TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Cross-Functional <span className="text-gradient-cyan">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our pre-vetted engineers possess deep institutional expertise across modern cloud-native architectures, enterprise backends, and AI pipelines.
          </p>
        </div>

        {/* Live Custom Squad Configurator Bar */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-[#002B49] text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-btm-cyan mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-bold">LIVE STACK SQUAD BUILDER</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Selected Stack Pod ({selectedSquadStack.length} Technologies Active)
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {selectedSquadStack.map((stk) => (
                <span 
                  key={stk} 
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-btm-cyan/40 text-xs font-mono text-btm-cyan flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>{stk}</span>
                  <button 
                    type="button"
                    aria-label={`Remove ${stk} from squad`}
                    onClick={(e) => handleToggleSquadStack(stk, e)}
                    className="hover:text-red-400 ml-1 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))}

              <button
                onClick={() => onOpenBooking(`custom-squad-${selectedSquadStack.join('-').toLowerCase()}`)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 transition-all flex items-center gap-1.5 shimmer-btm cursor-pointer"
              >
                <span>Deploy This Pod ({selectedSquadStack.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-btm-cyan text-white font-bold shadow-md scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Flip Notes Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const isFlipped = !!flippedCards[tech.id];
              const isInSquad = selectedSquadStack.includes(tech.name);

              return (
                <div
                  key={tech.id}
                  className="h-[280px] sm:h-[300px] [perspective:1200px]"
                >
                  <div
                    className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    
                    {/* ================= FRONT SIDE (Clean Note Card: Heading, Badge, Version, Flip Trigger) ================= */}
                    <div 
                      onClick={(e) => toggleFlip(tech.id, e)}
                      className="absolute inset-0 [backface-visibility:hidden] rounded-3xl p-6 bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-btm-cyan transition-all flex flex-col justify-between cursor-pointer group"
                    >
                      {/* Top Bar: Version & Seniority */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                          {tech.version}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-btm-cyan">
                          {tech.seniority}
                        </span>
                      </div>

                      {/* Middle: Icon & Bold Heading */}
                      <div className="space-y-3">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${tech.accentColor}`}>
                          <tech.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display font-black text-2xl text-[#002B49] group-hover:text-btm-cyan transition-colors">
                            {tech.name}
                          </h3>
                          <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> SLA Match: {tech.score}%
                          </span>
                        </div>
                      </div>

                      {/* Bottom: Flip Indicator */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-btm-cyan">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <RotateCw className="w-3.5 h-3.5 text-btm-cyan group-hover:rotate-180 transition-transform duration-500" />
                          Click to Flip for Tech Spec
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* ================= BACK SIDE (Detailed Specs, Blueprint, Squad Roster, CTAs) ================= */}
                    <div 
                      className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-5 bg-slate-900 text-white border border-slate-700 shadow-2xl flex flex-col justify-between overflow-y-auto"
                    >
                      {/* Top Header on Back */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <div>
                          <span className="text-xs font-bold text-white font-display block">
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400">
                            SLA Match: {tech.score}%
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {/* Toggle Squad Button */}
                          <button
                            type="button"
                            onClick={(e) => handleToggleSquadStack(tech.name, e)}
                            className={`p-1.5 rounded-lg border text-[11px] font-mono transition-all cursor-pointer ${
                              isInSquad
                                ? 'bg-btm-cyan text-slate-950 border-btm-cyan font-bold'
                                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                            }`}
                            title={isInSquad ? 'Remove from Squad' : 'Add to Squad'}
                          >
                            {isInSquad ? '✓ In Squad' : '+ Add'}
                          </button>

                          {/* Flip Back Button */}
                          <button
                            type="button"
                            onClick={(e) => toggleFlip(tech.id, e)}
                            className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white cursor-pointer"
                            title="Flip back"
                          >
                            <RotateCw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Content: Description & Blueprint */}
                      <div className="space-y-2 py-2">
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {tech.desc}
                        </p>

                        <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-[10px] font-mono text-emerald-300">
                          <span className="text-slate-500 block text-[9px]">// Architecture Flow</span>
                          {tech.blueprint}
                        </div>

                        {/* Framework Pills */}
                        <div className="flex flex-wrap gap-1">
                          {tech.frameworks.map((fw) => (
                            <span key={fw} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                              {fw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Actions on Back */}
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                        <span className="text-[10px] text-amber-400 flex items-center gap-1 font-semibold">
                          <Zap className="w-3 h-3" /> &lt; 14 Days SLA
                        </span>

                        <button
                          type="button"
                          onClick={() => onOpenBooking(`tech-${tech.name.toLowerCase()}`)}
                          className="text-xs font-bold text-btm-cyan hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>Deploy Squad</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Custom Tech Stack Scoping Banner */}
        <div className="glass-card-btm rounded-3xl p-7 sm:p-9 border border-slate-200 bg-gradient-to-r from-slate-950 via-[#002B49] to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-btm-cyan font-bold">Custom Tech Stack Scoping</span>
            <h4 className="font-display font-bold text-2xl text-white">
              Have a specialized or proprietary framework?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We source and vet specialized engineering pods for niche enterprise protocols, legacy platforms, and modern AI pipelines.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('niche-stack')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Request Custom Stack Pod</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
