import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck, Globe, CheckCircle2, Award, Clock } from 'lucide-react';

export const SecurityAssurance = () => {
  const securityGuarantees = [
    {
      title: '100% Client IP Ownership',
      desc: 'All code, architecture diagrams, tests, and documentation are strictly owned by your company from commit #1 with clean-room legal assignments.',
      icon: Lock,
      badge: 'Ironclad Legal',
    },
    {
      title: 'SOC2 & ISO 27001 Certified Workstations',
      desc: 'Secure enterprise hardware, encrypted drives, VPN access, and strict zero-trust credential segregation to protect your codebase.',
      icon: ShieldCheck,
      badge: 'Zero-Trust Protocol',
    },
    {
      title: 'Comprehensive Mutual NDA & Background Checks',
      desc: 'Rigorous vetting of all engineers including identity verification, criminal background checks, and customized corporate NDAs.',
      icon: FileCheck,
      badge: 'Pre-Vetted Seniority',
    },
    {
      title: '2-Week Risk-Free Trial Sprint',
      desc: 'Experience our squad in your actual sprints for 14 days. If the velocity and code quality do not exceed expectations, you pay zero.',
      icon: Award,
      badge: '100% Risk Reversal',
    },
  ];

  const timezones = [
    { region: 'US East Coast (EST)', overlap: '4-5 Hours Daily Real-Time Overlap', status: 'Optimal' },
    { region: 'US West Coast (PST)', overlap: '3-4 Hours Daily Real-Time Overlap', status: 'Optimal' },
    { region: 'UK & Western Europe (GMT/CET)', overlap: '6-7 Hours Daily Real-Time Overlap', status: 'Maximum Overlap' },
    { region: 'APAC & India (IST)', overlap: 'Full Working Day & Night Standby', status: '24/7 Delivery' },
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENTERPRISE GOVERNANCE & RISK REVERSAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Security, Compliance & <span className="text-gradient-cyan">Global Delivery</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Institutional-grade protection trusted by Wall Street institutions, FinTech innovators, and enterprise scaleups.
          </p>
        </div>

        {/* 4 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityGuarantees.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card-btm rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-btm-cyan/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-btm-navy border border-btm-cyan/30 text-btm-cyan group-hover:scale-105 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.desc}</p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-medium pt-3 border-t border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Enterprise Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timezone Synchronized Coverage Matrix */}
        <div className="glass-card-btm rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-btm-cyan" />
              <div>
                <h4 className="font-display font-bold text-lg text-white">Global Timezone Synchronization</h4>
                <p className="text-xs text-slate-400 font-mono">Daily standups, live Slack collaboration, and asynchronous sprint velocity</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              ● Live Active Coverage
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timezones.map((tz) => (
              <div key={tz.region} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 font-mono text-xs">
                <div className="font-bold text-white mb-1">{tz.region}</div>
                <div className="text-btm-cyan text-[11px] mb-2">{tz.overlap}</div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{tz.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
