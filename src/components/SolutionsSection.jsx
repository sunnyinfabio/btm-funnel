import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Cpu, 
  Code2, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';

export const SolutionsSection = ({ onOpenBooking }) => {
  const solutions = [
    {
      id: 'staff-augmentation',
      slug: 'capacity-review',
      serviceName: 'Staff Augmentation',
      headline: 'Keep your engineering leadership. Add the capacity.',
      description: 'Extend your internal team with specialists who work within your existing processes and priorities.',
      icon: Users,
      badge: 'Immediate Squad Scaling',
      cta: 'Build Your Extended Team',
      highlights: [
        'Direct sprint integration within 14 days',
        'Matches your exact stack & engineering culture',
        'Retain 100% technical architecture control',
        'Zero recruiter commissions or placement drag',
      ],
      tag: 'Speed to Sprint',
      accentColor: 'border-cyan-200 text-btm-cyan bg-cyan-50',
    },
    {
      id: 'dedicated-teams',
      slug: 'blueprint-architecture',
      serviceName: 'Dedicated Teams',
      headline: 'Don’t hire role by role. Build the capability you need.',
      description: 'Create a dedicated engineering unit around a product, platform, or transformation initiative.',
      icon: Cpu,
      badge: 'Autonomous Pods',
      cta: 'Discuss a Dedicated Team',
      highlights: [
        'Complete cross-functional squad (Lead + Eng + QA)',
        'Full sprint velocity tracking & story-point accountability',
        'Self-managing execution around your epics',
        'Flexible team sizing scaling up or down',
      ],
      tag: 'Capability Pods',
      accentColor: 'border-amber-200 text-amber-700 bg-amber-50',
      featured: true,
    },
    {
      id: 'software-outsourcing',
      slug: 'blueprint-architecture',
      serviceName: 'Software Outsourcing',
      headline: 'Own the outcome. You don’t need to own every resource required to build it.',
      description: 'BTM provides the engineering execution while the client retains strategic control.',
      icon: Code2,
      badge: 'Turnkey Delivery',
      cta: 'Discuss Your Roadmap',
      highlights: [
        'Fixed-deliverable or milestone-driven sprint contracts',
        'Architected from scratch for enterprise reliability',
        'You own 100% of the IP, code, and deployments',
        'Comprehensive automated QA & performance tests',
      ],
      tag: 'Outcome Ownership',
      accentColor: 'border-emerald-200 text-emerald-700 bg-emerald-50',
    },
    {
      id: 'legacy-modernisation',
      slug: 'audit-optimization',
      serviceName: 'Legacy Modernisation',
      headline: 'Legacy systems rarely fail overnight. They become expensive to work around.',
      description: 'BTM helps modernise applications, architecture, cloud environments, and technology stacks with minimal business disruption.',
      icon: RefreshCw,
      badge: 'Zero Disruption Refactoring',
      cta: 'Assess Your Technology Environment',
      highlights: [
        'Monolith to cloud-native microservices refactoring',
        'Modernize .NET Framework, Java 8, and on-prem databases',
        'Continuous uptime and automated data migration pipelines',
        'Substantial reduction in maintenance overhead',
      ],
      tag: 'Architecture Modernisation',
      accentColor: 'border-purple-200 text-purple-700 bg-purple-50',
    },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">STAGE 02 — RELEVANCE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Solving Specific <span className="text-gradient-cyan">Execution Problems</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered models that fit your governance, whether you need specialists in active sprints or an autonomous squad owning an entire platform.
          </p>
        </div>

        {/* 4 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card-btm rounded-3xl p-7 sm:p-8 border flex flex-col justify-between hover:border-btm-cyan hover:shadow-xl transition-all duration-300 group relative bg-white ${
                item.featured ? 'border-btm-cyan/50 shadow-md ring-1 ring-btm-cyan/20' : 'border-slate-200'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-btm-cyan group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-btm-cyan tracking-wider font-bold block">
                        {item.serviceName}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${item.accentColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Main Headline & Description */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#002B49] mb-3 tracking-tight">
                  "{item.headline}"
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <button
                onClick={() => onOpenBooking(item.slug)}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-btm-cyan text-white font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
              >
                <span>{item.cta}</span>
                <ArrowRight className="w-4 h-4 text-btm-cyan group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
