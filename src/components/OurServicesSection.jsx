import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Cpu, 
  Code2, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const OurServicesSection = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Plug pre-vetted senior software engineers directly into your sprint cycle in less than 14 days without long hiring cycles.',
      image: '/services/BTM_Service_SA_Img.jpg',
      icon: Users,
      badge: 'TOP 1% TALENT',
      deliverables: ['Direct Sprint Integration', 'Timezone Alignment', 'Zero Recruiter Fees'],
    },
    {
      id: 'dedicated-teams',
      title: 'Dedicated Teams',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Self-governing, cross-functional engineering pods complete with Tech Leads, QA automation, and domain specialists.',
      image: '/services/BTM_Service_DT_Img.jpg',
      icon: Cpu,
      badge: 'AUTONOMOUS PODS',
      deliverables: ['Tech Lead & SRE', 'Playwright Automated QA', 'Weekly Burndown Reports'],
    },
    {
      id: 'software-outsourcing',
      title: 'Software Outsourcing',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Turnkey end-to-end product delivery from architectural blueprinting through production deployment and scaling.',
      image: '/services/BTM_Service_SO_Img.jpg',
      icon: Code2,
      badge: 'END-TO-END DELIVERY',
      deliverables: ['100% IP Clean-Room', 'Microservice Architectures', 'Production SLA'],
    },
    {
      id: 'web-development',
      title: 'Web Development',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'High-performance SSR/SSG portals, scalable SaaS platforms, and enterprise cloud applications built on modern frameworks.',
      image: '/services/BTM_Service_WD_Img.jpg',
      icon: Globe,
      badge: 'MODERN CLOUD & WEB',
      deliverables: ['React 19 & Next.js 15', 'Sub-Second Edge Rendering', 'REST & gRPC APIs'],
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Mission-critical iOS and Android native and cross-platform mobile apps with offline synchronization and native biometric security.',
      image: '/services/BTM_Service_MD_Img.jpg',
      icon: Smartphone,
      badge: 'CROSS-PLATFORM & NATIVE',
      deliverables: ['Flutter & React Native', 'Offline-First Sync', 'Store Deployments'],
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Automated CI/CD end-to-end regression test suites, penetration testing, performance benchmarking, and zero-defect deployments.',
      image: '/services/BTM_Service_QA_Img.jpg',
      icon: ShieldCheck,
      badge: 'AUTOMATED CI/CD QA',
      deliverables: ['Playwright & Cypress', 'Security Scanning (OWASP)', '99.4% Green Pass SLA'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Live Website Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">DIGITAL ACCELERATION CAPABILITIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-5">
            Our <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We are a Digital Acceleration Expert, Specialized in solid end-to-end delivery of tailor-made technology solutions bringing Innovative, Scalable, and Competitive Results.
          </p>
        </div>

        {/* 6 Core Services Grid matching live website layout with overlay images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-btm-cyan transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Service Hero Image with Dark Gradient Overlay matching live site */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B49]/95 via-[#002B49]/60 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-btm-cyan font-bold border border-cyan-400/30 shadow-sm">
                    {srv.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                    <srv.icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title over Image */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-btm-cyan transition-colors">
                    {srv.title}
                  </h3>
                </div>
              </div>

              {/* Service Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Bullet Deliverables */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {srv.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-btm-cyan" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Link */}
                <button
                  type="button"
                  onClick={() => onOpenBooking(`service-${srv.id}`)}
                  className="w-full pt-3 border-t border-slate-100 text-xs font-bold text-[#E62E2E] hover:text-[#002B49] flex items-center justify-between transition-colors cursor-pointer group/btn"
                >
                  <span className="group-hover/btn:underline">Explore {srv.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services / Get In Touch Button matching live website */}
        <div className="text-center">
          <button
            onClick={() => onOpenBooking('services-quote')}
            className="px-9 py-4 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-sm shadow-md hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request A Service Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
