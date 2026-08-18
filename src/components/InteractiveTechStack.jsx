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
  Terminal, 
  Database, 
  Server, 
  Bot, 
  ShieldCheck, 
  Smartphone,
  Globe,
  Cpu,
  Eye,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveTechStack = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTechModal, setSelectedTechModal] = useState(null);
  const [selectedSquadStack, setSelectedSquadStack] = useState(['.NET Core & C#', 'React & Next.js', 'AWS & Cloud Architecture']);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'data', label: 'Data & Kafka' },
    { id: 'ai', label: 'AI & LLMs' },
    { id: 'qa', label: 'Automated QA' },
  ];

  const technologies = [
    { 
      id: 'dotnet',
      name: '.NET Core & C#', 
      version: '.NET 8 / 9',
      category: 'backend', 
      domain: 'FinTech Trading', 
      desc: 'High-throughput trading platforms, ASP.NET Core microservices, low-latency gRPC, and Azure hybrid clouds.',
      blueprint: 'ASP.NET WebAPI → MediatR CQRS → Entity Framework Core → SQL Server / Redis Cache',
      frameworks: ['ASP.NET Core', 'gRPC', 'MediatR', 'Entity Framework'],
      squadSpec: '1x Lead Architect + 3x Senior .NET Engineers',
      score: 99.8,
      icon: Terminal,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    { 
      id: 'java',
      name: 'Java & Spring Boot', 
      version: 'Java 21 LTS',
      category: 'backend', 
      domain: 'Enterprise Banking', 
      desc: 'Resilient multi-threaded banking systems, Spring Cloud microservices, and distributed Kafka stream processing.',
      blueprint: 'Spring Cloud Gateway → Spring Boot 3 Microservices → Kafka Cluster → PostgreSQL Shards',
      frameworks: ['Spring Boot 3', 'Hibernate', 'Kafka Streams', 'Micrometer'],
      squadSpec: '1x Principal Java Lead + 2x Senior Java Engineers',
      score: 99.5,
      icon: Server,
      color: 'text-orange-700 bg-orange-50 border-orange-200',
    },
    { 
      id: 'python',
      name: 'Python & FastAPI', 
      version: 'Python 3.12',
      category: 'backend', 
      domain: 'Cloud AI & Data', 
      desc: 'High-concurrency async APIs, LangChain / LlamaIndex AI agents, and automated data processing pipelines.',
      blueprint: 'FastAPI Async Router → Celery Task Workers → Redis Ingestion → Vector Pinecone DB',
      frameworks: ['FastAPI', 'Celery', 'Pydantic', 'NumPy / Pandas'],
      squadSpec: '1x AI/FastAPI Lead + 2x Python Data Engineers',
      score: 99.2,
      icon: Cpu,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    { 
      id: 'node',
      name: 'Node.js & TypeScript', 
      version: 'Node 20 / TS 5',
      category: 'backend', 
      domain: 'SaaS Platforms', 
      desc: 'Event-driven serverless architectures, NestJS enterprise microservices, and real-time WebSocket engines.',
      blueprint: 'NestJS Microservices → Prisma ORM → Redis PubSub → AWS Lambda Serverless',
      frameworks: ['NestJS', 'Express', 'TypeScript', 'Prisma ORM'],
      squadSpec: '1x Full-Stack Lead + 2x Senior Node/TS Developers',
      score: 99.0,
      icon: Code2,
      color: 'text-green-700 bg-green-50 border-green-200',
    },
    { 
      id: 'react',
      name: 'React & Next.js', 
      version: 'React 19 / Next 15',
      category: 'frontend', 
      domain: 'Modern Portals', 
      desc: 'High-performance SSR/SSG enterprise portals, App Router edge caching, and rich interactive data visualizations.',
      blueprint: 'Next.js 15 App Router → Tailwind CSS Design System → Zustand Global State → Vercel/AWS Edge',
      frameworks: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
      squadSpec: '1x Senior Frontend Architect + 2x React UI Technologists',
      score: 99.7,
      icon: Globe,
      color: 'text-btm-cyan bg-cyan-50 border-cyan-200',
    },
    { 
      id: 'mobile',
      name: 'React Native & Flutter', 
      version: 'Cross-Platform',
      category: 'frontend', 
      domain: 'Mobile Apps', 
      desc: 'High-fidelity iOS & Android applications with native biometrics, offline sync, and push notification pipelines.',
      blueprint: 'React Native / Flutter Core → Native Bridge APIs → SQLite Offline Sync → Firebase Telemetry',
      frameworks: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      squadSpec: '1x Mobile Tech Lead + 2x Senior iOS/Android Specialists',
      score: 98.9,
      icon: Smartphone,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    { 
      id: 'aws',
      name: 'AWS & Cloud Architecture', 
      version: 'AWS Certified',
      category: 'cloud', 
      domain: 'Multi-Region Cloud', 
      desc: 'Multi-region active-active architectures, EKS Kubernetes, Lambda serverless, and IAM security governance.',
      blueprint: 'Route 53 Global Routing → CloudFront CDN → AWS EKS Kubernetes → RDS Aurora Multi-AZ',
      frameworks: ['AWS EKS', 'Lambda', 'Terraform', 'CloudFormation'],
      squadSpec: '1x AWS Solutions Architect + 1x DevOps Engineer',
      score: 99.9,
      icon: Layers,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    { 
      id: 'azure',
      name: 'Microsoft Azure', 
      version: 'Azure Enterprise',
      category: 'cloud', 
      domain: 'Enterprise Hybrid', 
      desc: 'Azure Kubernetes Service (AKS), App Service, Cosmos DB, and enterprise Entra ID single sign-on federation.',
      blueprint: 'Azure Front Door → Azure AKS Cluster → Cosmos DB Multi-Region → Entra ID OAuth',
      frameworks: ['Azure AKS', 'Azure DevOps', 'Cosmos DB', 'Entra ID'],
      squadSpec: '1x Azure Enterprise Architect + 1x Cloud Specialist',
      score: 99.6,
      icon: Server,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    { 
      id: 'k8s',
      name: 'Kubernetes & Docker', 
      version: 'K8s 1.30+',
      category: 'cloud', 
      domain: 'GitOps & SRE', 
      desc: 'Zero-downtime GitOps pipelines, Helm charts, automated horizontal pod autoscaling, and Istio service mesh.',
      blueprint: 'GitHub Actions → ArgoCD GitOps → Kubernetes Cluster Autoscaler → Prometheus/Grafana',
      frameworks: ['Kubernetes', 'ArgoCD', 'Docker', 'Istio Mesh'],
      squadSpec: '1x Senior SRE + 1x CI/CD Specialist',
      score: 99.4,
      icon: Layers,
      color: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    },
    { 
      id: 'kafka',
      name: 'Apache Kafka & Flink', 
      version: 'Kafka 3.7',
      category: 'data', 
      domain: 'Event Streams', 
      desc: 'Distributed pub/sub messaging clusters handling millions of events/sec with strict zero data loss guarantees.',
      blueprint: 'Event Producers → Kafka Broker Cluster (KRaft) → Flink Real-Time Aggregator → Data Lake',
      frameworks: ['Kafka', 'Flink', 'Schema Registry', 'Debezium'],
      squadSpec: '1x Distributed Systems Architect + 1x Data Engineer',
      score: 99.3,
      icon: Database,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
    },
    { 
      id: 'postgres',
      name: 'PostgreSQL & MongoDB', 
      version: 'Postgres 16',
      category: 'data', 
      domain: 'ACID Databases', 
      desc: 'High-concurrency ACID transactions, sharded clusters, query optimization, and read-replica failovers.',
      blueprint: 'Primary Write Node → Read-Replica Pool → Citus Sharded Tables → PgBouncer Connection Pool',
      frameworks: ['PostgreSQL', 'MongoDB', 'Redis Cluster', 'Snowflake'],
      squadSpec: '1x Principal Database Architect + 1x DBA',
      score: 99.8,
      icon: Database,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    },
    { 
      id: 'ai',
      name: 'Applied AI & LLM Systems', 
      version: 'OpenAI / Claude',
      category: 'ai', 
      domain: 'Frontier AI Agents', 
      desc: 'Enterprise RAG pipelines, vector embedding indexing (Pinecone / Milvus), and automated multi-agent workflows.',
      blueprint: 'User Query → Hybrid RAG Embedding (Pinecone) → Claude 3.5 / GPT-4o Agent → Output Guardrails',
      frameworks: ['LangChain', 'LlamaIndex', 'Pinecone', 'vLLM'],
      squadSpec: '1x Applied AI Lead + 2x ML Engineers',
      score: 99.1,
      icon: Bot,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    { 
      id: 'qa',
      name: 'Playwright & Cypress', 
      version: 'Automated CI/CD',
      category: 'qa', 
      domain: 'End-to-End QA', 
      desc: 'End-to-end regression suites, cross-browser parallel execution, and automated security vulnerability scans.',
      blueprint: 'PR Commit Trigger → Playwright Parallel Matrix (128 Workers) → SonarQube Code Quality Gate',
      frameworks: ['Playwright', 'Cypress', 'JMeter', 'SonarQube'],
      squadSpec: '1x Automated QA Lead + 1x Security Engineer',
      score: 99.6,
      icon: ShieldCheck,
      color: 'text-rose-700 bg-rose-50 border-rose-200',
    },
  ];

  const handleToggleSquadStack = (name, e) => {
    e.stopPropagation();
    if (selectedSquadStack.includes(name)) {
      setSelectedSquadStack(selectedSquadStack.filter(s => s !== name));
    } else {
      setSelectedSquadStack([...selectedSquadStack, name]);
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#00A3E0', '#00D2FF', '#F5A623']
      });
    }
  };

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-3 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">ENTERPRISE TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-3">
            Cross-Functional <span className="text-gradient-cyan">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pre-vetted engineering squads across modern cloud-native architectures, backends, and AI pipelines.
          </p>
        </div>

        {/* Minimal Live Squad Builder Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#002B49] text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-btm-cyan/20 border border-btm-cyan/40 text-btm-cyan flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-btm-cyan font-bold uppercase">Squad Builder</div>
              <div className="text-xs font-bold text-slate-200">{selectedSquadStack.length} Technologies Active</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {selectedSquadStack.map((stk) => (
              <span 
                key={stk} 
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-btm-cyan/30 text-xs font-mono text-btm-cyan flex items-center gap-1.5"
              >
                <Check className="w-3 h-3 text-emerald-400" />
                <span>{stk}</span>
                <button 
                  type="button"
                  aria-label={`Remove ${stk}`}
                  onClick={(e) => handleToggleSquadStack(stk, e)}
                  className="hover:text-red-400 ml-0.5 cursor-pointer"
                >
                  ×
                </button>
              </span>
            ))}

            <button
              onClick={() => onOpenBooking(`pod-${selectedSquadStack.join('-').toLowerCase()}`)}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-sm hover:opacity-95 flex items-center gap-1.5 cursor-pointer ml-1"
            >
              <span>Deploy ({selectedSquadStack.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-btm-cyan text-white font-bold shadow-md'
                  : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimal Compact Technology Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const isInSquad = selectedSquadStack.includes(tech.name);

              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-btm-cyan/80 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  {/* Top: Version & Domain */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                        {tech.version}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-medium">
                        {tech.domain}
                      </span>
                    </div>

                    {/* Middle: Icon & Tech Name */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl border shrink-0 ${tech.color}`}>
                        <tech.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-[#002B49] group-hover:text-btm-cyan transition-colors leading-tight">
                          {tech.name}
                        </h3>
                        <span className="text-[10.5px] font-mono text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" /> SLA Match: {tech.score}%
                        </span>
                      </div>
                    </div>

                    {/* Framework Pills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tech.frameworks.map((fw) => (
                        <span key={fw} className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Quick Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <button
                      type="button"
                      onClick={(e) => handleToggleSquadStack(tech.name, e)}
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-all cursor-pointer flex items-center gap-1 ${
                        isInSquad
                          ? 'bg-btm-cyan text-white border-btm-cyan font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {isInSquad ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      <span>{isInSquad ? 'In Squad' : 'Add'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTechModal(tech)}
                      className="text-slate-500 hover:text-btm-cyan flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Custom Scoping Banner */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[10.5px] font-mono text-btm-cyan uppercase font-bold">Custom Tech Stack Scoping</span>
            <h4 className="font-display font-bold text-lg text-white">
              Have a specialized or proprietary framework?
            </h4>
            <p className="text-xs text-slate-400">
              We source and vet specialized engineering pods for niche enterprise protocols and modern AI pipelines.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('niche-stack')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-slate-950 font-bold text-xs shadow-btm-glow hover:opacity-95 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Request Custom Stack Pod</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Tech Inspection Modal (Deep Dive Drawer) */}
      <AnimatePresence>
        {selectedTechModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-7 max-w-xl w-full border border-slate-200 shadow-2xl space-y-5 relative"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl border ${selectedTechModal.color}`}>
                    <selectedTechModal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#002B49]">
                      {selectedTechModal.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mt-0.5">
                      <span>{selectedTechModal.version}</span>
                      <span>•</span>
                      <span className="text-emerald-600 font-bold">Match: {selectedTechModal.score}%</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTechModal(null)}
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10.5px] font-mono uppercase text-slate-400 font-bold block mb-1">Architecture Overview</span>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {selectedTechModal.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 text-emerald-300 font-mono text-xs border border-slate-800">
                  <span className="text-slate-500 block text-[9.5px] mb-1">// Reference Architecture Flow</span>
                  {selectedTechModal.blueprint}
                </div>

                <div className="p-3.5 rounded-2xl bg-cyan-50 text-slate-800 font-mono text-xs border border-cyan-200 flex items-center justify-between">
                  <div>
                    <span className="text-btm-cyan font-bold block text-[9.5px] mb-0.5">// Standard Pod Composition</span>
                    <span className="text-slate-900 font-semibold">{selectedTechModal.squadSpec}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold shrink-0">
                    &lt; 14 Days SLA
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTechModal(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-mono text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const tech = selectedTechModal;
                    setSelectedTechModal(null);
                    onOpenBooking(`tech-${tech.name.toLowerCase()}`);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Deploy {selectedTechModal.name} Squad</span>
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
