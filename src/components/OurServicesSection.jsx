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
  CheckCircle2,
  X,
  Clock,
  Lock,
  Check
} from 'lucide-react';
import { HolographicTiltCard } from './HolographicTiltCard';

export const OurServicesSection = ({ onOpenBooking }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const services = [
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      badge: 'TOP 1% TALENT',
      shortDesc: 'The extra talent needed to boost your projects. Top 1% Engineers fully integrated with your team.',
      detailedDesc: 'Our IT staffing services provide the speed, professional acumen, and flexibility your team needs to scale quickly and complete development on time. Your Extended Team works as part of your local team, attending your regular daily meetings, and reporting directly to your managers, proving to be a real competitive advantage for your business.',
      image: '/services/BTM_Service_SA_Img.jpg',
      icon: Users,
      turnaround: '< 14 Days Onboarding',
      teamSetup: 'Individual Senior Engineers or Specialized Squads',
      deliverables: [
        'Direct Sprint Integration (Slack / Jira / GitHub)',
        '100% Timezone Alignment with US & Global Hours',
        'Zero Recruiter Placement Fees',
        '24/7 Replacement SLA Guarantee'
      ],
      sla: '99.8% Match Accuracy',
    },
    {
      id: 'dedicated-teams',
      title: 'Dedicated Teams',
      badge: 'AUTONOMOUS PODS',
      shortDesc: 'Autonomous engineering squads complete with Tech Leads, QA automation, and domain specialists.',
      detailedDesc: 'BTM Outsourcing provides all the roles needed to complete the team you require. This team is typically composed of a Project Manager, Software engineers, Quality Assurance engineers, Data Engineers, AI & ML Experts, and other roles that are defined for each specific project. We have streamlined the way our developers operate, and you get all the benefits from our success.',
      image: '/services/BTM_Service_DT_Img.jpg',
      icon: Cpu,
      turnaround: '< 14 Days Deployment',
      teamSetup: '1x Tech Lead + 3x Senior Devs + 1x QA Engineer',
      deliverables: [
        'Autonomous Sprint Ownership & Burndown Tracking',
        'Playwright Automated CI/CD Regression QA',
        'Weekly Milestone Architecture Demos',
        'Direct Escalation Matrix & Lead SRE Oversight'
      ],
      sla: '100% IP Clean-Room',
    },
    {
      id: 'software-outsourcing',
      title: 'Software Outsourcing',
      badge: 'END-TO-END DELIVERY',
      shortDesc: 'Turnkey end-to-end custom software development from blueprinting through production scaling.',
      detailedDesc: 'BTM Outsourcing is highly specialized in providing professional cost-effective custom web, desktop, and mobile software development services to various companies around the world. Over time we helped various companies to achieve their business goals through our technological expertise.',
      image: '/services/BTM_Service_SO_Img.jpg',
      icon: Code2,
      turnaround: 'Milestone-Based Fixed / Retainer SLA',
      teamSetup: 'Full Cross-Functional Product Team',
      deliverables: [
        'Architecture Discovery & Technical Blueprinting',
        'Microservice Modernization & Cloud Migration',
        'Production Deployment with Zero-Defect SLA',
        'Post-Launch SRE Maintenance & Monitoring'
      ],
      sla: '99.9% Uptime Reliability',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      badge: 'MODERN CLOUD & WEB',
      shortDesc: 'High-performance SSR/SSG portals, scalable SaaS platforms, and enterprise cloud applications.',
      detailedDesc: 'Whether your company needs a new website to engage with customers, an enterprise-class web app to automate business processes, or a web portal to align with your employees’ workflows, BTM Outsourcing has the solution. Since not all off-the-shelf applications have all the bells and whistles that you need, we customize and integrate your existing applications to get the job done.',
      image: '/services/BTM_Service_WD_Img.jpg',
      icon: Globe,
      turnaround: 'Rapid Sprint Sprints',
      teamSetup: 'Principal Frontend Architects + Backend Cloud Engineers',
      deliverables: [
        'React 19, Next.js 15 App Router Architecture',
        'Sub-Second Edge Rendering & Global CDN Caching',
        'REST & gRPC Microservice API Gateways',
        'WCAG 2.1 AAA Accessibility & SEO Best Practices'
      ],
      sla: 'Sub-Second Page Loads',
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      badge: 'CROSS-PLATFORM & NATIVE',
      shortDesc: 'Scalable iOS & Android applications with native biometrics, offline sync, and push notifications.',
      detailedDesc: 'Develop scalable and secure mobile solutions for iOS & Android. BTM engineers craft high-fidelity cross-platform and native mobile apps with biometric security, offline synchronization, and seamless backend API integrations.',
      image: '/services/BTM_Service_MD_Img.jpg',
      icon: Smartphone,
      turnaround: '4-8 Week Initial MVP',
      teamSetup: 'Mobile Tech Leads + iOS/Android Specialists',
      deliverables: [
        'Flutter & React Native Cross-Platform Engineering',
        'Native Swift / Kotlin Bridge Modules',
        'Offline-First SQLite / WatermelonDB Sync',
        'Apple App Store & Google Play Store Submission'
      ],
      sla: '99.9% Crash-Free Sessions',
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      badge: 'AUTOMATED CI/CD QA',
      shortDesc: 'Automated CI/CD end-to-end regression suites, performance stress testing, and security scanning.',
      detailedDesc: 'Ensuring zero defects through end-to-end automated testing pipelines, performance stress testing, and continuous security scanning. We integrate continuous QA testing directly into your deployment cycle for institutional stability.',
      image: '/services/BTM_Service_QA_Img.jpg',
      icon: ShieldCheck,
      turnaround: 'Continuous CI/CD Pipeline',
      teamSetup: 'Automated QA Engineers + Penetration Testers',
      deliverables: [
        'Playwright, Cypress & Selenium Parallel Suites',
        'OWASP Top 10 Security & Vulnerability Scanning',
        'JMeter 50,000+ Concurrent Virtual User Stress Tests',
        'Zero-Defect Code Quality Gates (SonarQube)'
      ],
      sla: '99.4% Green Pass SLA',
    },
  ];

  // Double the array for continuous loop
  const marqueeServices = [...services, ...services];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002B49] text-xs font-mono mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">CORE SERVICE CAPABILITIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-3">
            Our <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            End-to-end engineering pods bringing innovative, scalable, and competitive results. Click any service to inspect full specifications.
          </p>
        </div>

      </div>

      {/* Continuous Horizontal Flow Marquee with 3D Holographic Cards */}
      <div
        className="relative w-full overflow-hidden py-4 mb-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

        {/* Animated Marquee Strip */}
        <motion.div
          className="flex gap-6 w-max px-4"
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
              maxRotation={10}
              glareOpacity={0.3}
              onClick={() => setSelectedServiceModal(srv)}
              className="w-[320px] sm:w-[360px] h-[360px] overflow-hidden border border-slate-200 group cursor-pointer shrink-0"
            >
              {/* Background Service Image */}
              <img
                src={srv.image}
                alt={srv.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Minimal Clean Centered State */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00182A]/90 via-[#002B49]/60 to-[#00182A]/70 flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
                <div className="w-13 h-13 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-btm-cyan flex items-center justify-center mb-3 shadow-md">
                  <srv.icon className="w-6 h-6 text-btm-cyan" />
                </div>
                
                <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[9.5px] font-mono text-btm-cyan font-bold border border-cyan-400/30 mb-2">
                  {srv.badge}
                </span>

                <h3 className="font-display font-black text-2xl text-white tracking-tight drop-shadow-md mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 px-2 opacity-90 mb-4">
                  {srv.shortDesc}
                </p>

                <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-mono font-bold flex items-center gap-1.5 group-hover:bg-btm-cyan group-hover:text-slate-950 group-hover:border-btm-cyan transition-all">
                  <span>Inspect Service Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </HolographicTiltCard>
          ))}
        </motion.div>
      </div>

      {/* Minimal Bottom Trigger */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <button
          onClick={() => onOpenBooking('services-quote')}
          className="px-8 py-3.5 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md hover:shadow-red-500/25 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Request A Custom Service Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* On-Demand Service Specification Drawer / Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-slate-200 shadow-2xl space-y-5 relative max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-btm-cyan flex items-center justify-center">
                    <selectedServiceModal.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {selectedServiceModal.badge}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {selectedServiceModal.sla}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#002B49] mt-0.5">
                      {selectedServiceModal.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Service Description */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[10.5px] font-mono uppercase text-slate-400 font-bold block mb-1">
                    Service Scope & Methodology
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {selectedServiceModal.detailedDesc}
                  </p>
                </div>

                {/* Team & Turnaround Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 block mb-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-btm-cyan" /> Deployment Timeline
                    </span>
                    <span className="text-slate-900 font-bold text-xs">{selectedServiceModal.turnaround}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-400 block mb-0.5 flex items-center gap-1">
                      <Users className="w-3 h-3 text-btm-cyan" /> Typical Pod Formation
                    </span>
                    <span className="text-slate-900 font-bold text-xs">{selectedServiceModal.teamSetup}</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <span className="text-[10.5px] font-mono uppercase text-slate-400 font-bold block mb-2">
                    Key Deliverables & Governance
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedServiceModal.deliverables.map((item) => (
                      <div key={item} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% IP Clean-Room Protected</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedServiceModal(null)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-mono text-xs hover:bg-slate-50 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const srv = selectedServiceModal;
                      setSelectedServiceModal(null);
                      onOpenBooking(`service-${srv.id}`);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request {selectedServiceModal.title} Squad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
