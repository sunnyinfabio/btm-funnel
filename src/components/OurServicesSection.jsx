import React, { useState } from 'react';
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
  Layers,
  CheckCircle2
} from 'lucide-react';
import { HolographicTiltCard } from './HolographicTiltCard';

export const OurServicesSection = ({ onOpenBooking }) => {
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      badge: 'TOP 1% TALENT',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Our IT staffing services provide the speed, professional acumen, and flexibility your team needs to scale quickly and complete development on time.',
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
      detailedDesc: 'BTM Outsourcing provides all the roles needed to complete the team you require, complete with Tech Leads, QA automation, and Data/AI specialists.',
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
      detailedDesc: 'BTM Outsourcing is highly specialized in providing professional cost-effective custom web, desktop, and mobile software development services.',
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
      detailedDesc: 'Whether your company needs a customer-facing portal or an enterprise-class web application to automate business processes, BTM has the solution.',
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
      detailedDesc: 'Develop scalable and secure mobile solutions for iOS & Android with native biometrics, offline synchronization, and seamless backend APIs.',
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
      detailedDesc: 'Ensuring zero defects through end-to-end automated testing pipelines, performance stress testing, and continuous security scanning.',
      image: '/services/BTM_Service_QA_Img.jpg',
      icon: ShieldCheck,
      deliverables: ['Playwright & Cypress', 'Security Scanning (OWASP)', '99.4% Green Pass SLA'],
      ctaText: 'Explore Quality Assurance',
    },
  ];

  // Double the array for seamless infinite marquee loop
  const marqueeServices = [...services, ...services];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Live Website Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-14">
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

      </div>

      {/* Continuous Horizontal Flow Marquee: Right to Left */}
      <div
        className="relative w-full overflow-hidden py-6 mb-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Edge Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

        {/* Animated Marquee Strip */}
        <motion.div
          className="flex gap-7 w-max px-4"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 38,
              ease: 'linear',
            },
          }}
        >
          {marqueeServices.map((srv, idx) => (
            <HolographicTiltCard
              key={`${srv.id}-${idx}`}
              maxRotation={12}
              glareOpacity={0.35}
              className="w-[340px] sm:w-[380px] h-[370px] sm:h-[400px] overflow-hidden border border-slate-200 group cursor-pointer shrink-0"
            >
              {/* Background Service Image */}
              <img
                src={srv.image}
                alt={srv.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Normal State: Dark Contrast Overlay + Centered Heading */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00182A]/90 via-[#002B49]/60 to-[#00182A]/70 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-btm-cyan flex items-center justify-center mb-4 shadow-md">
                  <srv.icon className="w-7 h-7 text-btm-cyan" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[10px] font-mono text-btm-cyan font-bold border border-cyan-400/30 mb-2">
                  {srv.badge}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md">
                  {srv.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-300 mt-3 flex items-center gap-1 opacity-80">
                  <span>Hover to View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-btm-cyan" />
                </span>
              </div>

              {/* Hover State: Frosted Glass Panel with Full Details Revealed */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00182A]/95 via-[#002B49]/95 to-[#0A192F]/98 backdrop-blur-md p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out translate-y-3 group-hover:translate-y-0 text-white z-20">
                
                {/* Header on Hover */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-btm-cyan/20 border border-btm-cyan/40 text-btm-cyan flex items-center justify-center">
                        <srv.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono uppercase text-btm-cyan font-bold">
                        {srv.badge}
                      </span>
                    </div>
                    <span className="text-[9.5px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3 h-3" /> SLA Verified
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-xl text-white mb-2">
                    {srv.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {srv.shortDesc}
                  </p>

                  {/* Bullet Deliverables */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {srv.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-btm-cyan shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Footer CTA */}
                <button
                  type="button"
                  onClick={() => onOpenBooking(`service-${srv.id}`)}
                  className="w-full py-3 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>{srv.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </HolographicTiltCard>
          ))}
        </motion.div>
      </div>

      {/* View All Services / Request A Quote Button matching live website */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <button
          onClick={() => onOpenBooking('services-quote')}
          className="px-9 py-4 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-sm shadow-md hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Request A Service Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
