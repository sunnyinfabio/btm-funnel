import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Cpu, 
  Code2, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';

export const OurServicesSection = ({ onOpenBooking }) => {
  const services = [
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      badge: 'TOP 1% TALENT',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Our IT staffing services provide the speed, professional acumen, and flexibility your team needs to scale quickly and complete development on time. Your Extended Team works as part of your local team, attending your regular daily meetings, and reporting directly to your managers, proving to be a real competitive advantage for your business.',
      image: '/services/BTM_Service_SA_Img.jpg',
      icon: Users,
      deliverables: ['Direct Sprint Integration', 'Timezone Alignment', 'Zero Recruiter Fees'],
      ctaText: 'Explore Staff Augmentation',
    },
    {
      id: 'dedicated-teams',
      title: 'Dedicated Teams',
      badge: 'AUTONOMOUS PODS',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'BTM Outsourcing provides all the roles needed to complete the team you require. This team is typically composed of a Project Manager, Software engineers, Quality Assurance engineers, Data Engineers, AI & ML Experts, and other roles defined for each project.',
      image: '/services/BTM_Service_DT_Img.jpg',
      icon: Cpu,
      deliverables: ['Tech Lead & SRE', 'Playwright Automated QA', 'Weekly Burndown Reports'],
      ctaText: 'Explore Dedicated Teams',
    },
    {
      id: 'software-outsourcing',
      title: 'Software Outsourcing',
      badge: 'END-TO-END DELIVERY',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'BTM Outsourcing is highly specialized in providing professional cost-effective custom web, desktop, and mobile software development services to companies around the world, helping them achieve strategic business goals.',
      image: '/services/BTM_Service_SO_Img.jpg',
      icon: Code2,
      deliverables: ['100% IP Clean-Room', 'Microservice Architectures', 'Production SLA'],
      ctaText: 'Explore Software Outsourcing',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      badge: 'MODERN CLOUD & WEB',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Whether your company needs a customer-facing portal, an enterprise-class web application to automate business processes, or modern cloud architecture, BTM Outsourcing customizes and integrates your existing systems to get the job done.',
      image: '/services/BTM_Service_WD_Img.jpg',
      icon: Globe,
      deliverables: ['React 19 & Next.js 15', 'Sub-Second Edge Rendering', 'REST & gRPC APIs'],
      ctaText: 'Explore Web Development',
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      badge: 'CROSS-PLATFORM & NATIVE',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Develop scalable and secure mobile solutions for iOS & Android. BTM engineers craft high-fidelity cross-platform and native mobile apps with biometric security, offline synchronization, and seamless backend API integrations.',
      image: '/services/BTM_Service_MD_Img.jpg',
      icon: Smartphone,
      deliverables: ['Flutter & React Native', 'Offline-First Sync', 'Store Deployments'],
      ctaText: 'Explore Mobile Development',
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      badge: 'AUTOMATED CI/CD QA',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Ensuring zero defects through end-to-end automated testing pipelines, performance stress testing, and security vulnerability scanning. We integrate continuous QA testing directly into your deployment cycle.',
      image: '/services/BTM_Service_QA_Img.jpg',
      icon: ShieldCheck,
      deliverables: ['Playwright & Cypress', 'Security Scanning (OWASP)', '99.4% Green Pass SLA'],
      ctaText: 'Explore Quality Assurance',
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
                
                {/* Top Badge & Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md text-[10px] font-mono text-btm-cyan font-bold border border-cyan-400/30 shadow-sm">
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
                  <span className="group-hover/btn:underline">{srv.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services / Request A Quote Button matching live website */}
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
