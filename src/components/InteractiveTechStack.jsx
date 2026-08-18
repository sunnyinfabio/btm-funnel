import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Terminal, 
  Cloud, 
  Database, 
  Bot, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Code2,
  GitBranch,
  Layers,
  Server,
  Zap,
  Check,
  Eye,
  Plus,
  Trash2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveTechStack = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCardTab, setSelectedCardTab] = useState({});
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
      accentColor: 'from-blue-500/20 to-cyan-500/10 border-blue-500/40 text-blue-600',
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
      accentColor: 'from-orange-500/20 to-amber-500/10 border-orange-500/40 text-orange-600',
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
      accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600',
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
      accentColor: 'from-green-500/20 to-emerald-500/10 border-green-500/40 text-green-600',
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
      accentColor: 'from-cyan-500/20 to-sky-500/10 border-cyan-500/40 text-cyan-600',
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
      accentColor: 'from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-600',
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
      accentColor: 'from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-600',
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
      accentColor: 'from-blue-500/20 to-sky-500/10 border-blue-500/40 text-blue-600',
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
      accentColor: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-600',
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
      accentColor: 'from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-600',
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
      accentColor: 'from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-600',
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
      accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600',
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
      accentColor: 'from-rose-500/20 to-red-500/10 border-rose-500/40 text-rose-600',
    },
  ];

  const handleToggleSquadStack = (name, e) => {
    e.stopPropagation();
    if (selectedSquadStack.includes(name)) {
      setSelectedSquadStack(selectedSquadStack.filter(s => s !== name));
    } else {
      setSelectedSquadStack([...selectedSquadStack, name]);
      confetti({
        particleCount: 40,
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5" />
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

        {/* Technologies Grid Encased in Modern Tech Frames */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const currentTab = selectedCardTab[tech.id] || 'overview';
              const isInSquad = selectedSquadStack.includes(tech.name);

              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl border border-slate-200 hover:border-btm-cyan/80 bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Modern Terminal Window Frame Header (Mac/Linux Traffic Lights) */}
                  <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-slate-400 ml-1.5">
                        {tech.version}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-btm-cyan">
                      {tech.seniority}
                    </span>
                  </div>

                  {/* Frame Content Body */}
                  <div className="p-6">
                    {/* Title & Match Score Badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-black text-xl text-[#002B49] group-hover:text-btm-cyan transition-colors">
                          {tech.name}
                        </h3>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" /> SLA Match: {tech.score}%
                        </span>
                      </div>

                      {/* Add to Squad Toggle Button */}
                      <button
                        type="button"
                        onClick={(e) => handleToggleSquadStack(tech.name, e)}
                        className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
                          isInSquad 
                            ? 'bg-btm-cyan text-white border-btm-cyan shadow-sm' 
                            : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                        }`}
                        title={isInSquad ? 'Remove from squad' : 'Add to squad'}
                      >
                        {isInSquad ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Frame Tab Switcher: Overview vs Blueprint vs Squad */}
                    <div className="flex rounded-xl bg-slate-100 p-1 mb-4 text-[10px] font-mono">
                      <button
                        type="button"
                        onClick={() => setSelectedCardTab({ ...selectedCardTab, [tech.id]: 'overview' })}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          currentTab === 'overview' ? 'bg-white text-slate-900 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedCardTab({ ...selectedCardTab, [tech.id]: 'blueprint' })}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          currentTab === 'blueprint' ? 'bg-white text-slate-900 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Blueprint
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedCardTab({ ...selectedCardTab, [tech.id]: 'squad' })}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          currentTab === 'squad' ? 'bg-white text-slate-900 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Squad Spec
                      </button>
                    </div>

                    {/* Dynamic Tab Content */}
                    <div className="min-h-[75px] mb-4">
                      {currentTab === 'overview' && (
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {tech.desc}
                        </p>
                      )}

                      {currentTab === 'blueprint' && (
                        <div className="p-3 rounded-xl bg-slate-900 text-emerald-300 font-mono text-[10.5px] leading-relaxed border border-slate-800">
                          <span className="text-slate-400 block text-[9px] mb-1">// Reference Architecture Flow</span>
                          {tech.blueprint}
                        </div>
                      )}

                      {currentTab === 'squad' && (
                        <div className="p-3 rounded-xl bg-cyan-50 text-slate-800 font-mono text-[11px] leading-relaxed border border-cyan-200">
                          <span className="text-btm-cyan font-bold block text-[9px] mb-1">// Standard Pod Composition</span>
                          {tech.squadSpec}
                        </div>
                      )}
                    </div>

                    {/* Framework Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {tech.frameworks.map((fw) => (
                        <span key={fw} className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frame Footer Action */}
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-semibold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" /> &lt; 14 Days SLA
                    </span>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(`tech-${tech.name.toLowerCase()}`)}
                      className="text-btm-cyan font-bold hover:text-[#002B49] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Deploy Squad</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Modern Architecture Scoping Card */}
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
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Request Custom Stack Pod</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
