import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, CheckCircle2, Building2, ShieldCheck, Sparkles } from 'lucide-react';

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "BTM restructured our entire inbound demo pipeline in less than two weeks. Our lead-to-opportunity rate jumped from 14% to 38.6%, unlocking an extra $1.9M in ARR during Q3 alone.",
      author: "Marcus Vance",
      role: "VP of Demand Generation",
      company: "CloudScale Systems",
      metric: "+175% Qualified SQLs",
      avatar: "MV",
      avatarBg: "from-cyan-500 to-blue-600",
    },
    {
      quote: "Most agencies give you cookie-cutter landers that look pretty but don't convert. BTM built a complete engineering-grade funnel system that runs at sub-second speed and syncs flawlessly with HubSpot.",
      author: "Elena Rostova",
      role: "Chief Revenue Officer",
      company: "Novaflow AI",
      metric: "4.1x Demo Bookings",
      avatar: "ER",
      avatarBg: "from-purple-500 to-indigo-600",
    },
    {
      quote: "The NS Capacity Review paid for itself within 48 hours. They pinpointed three critical dropoff points in our qualification sequence that we had been blind to for six months.",
      author: "David Thorne",
      role: "Founder & CEO",
      company: "AeroStack Cloud",
      metric: "62% Latency Reduction",
      avatar: "DT",
      avatarBg: "from-emerald-500 to-teal-600",
    },
  ];

  const clientLogos = [
    'AEROSTACK', 'NOVAFLOW', 'CLOUDSCALE', 'HYPERION.IO', 'VORTEX DATA', 'QUANTUM LEAP'
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Logos Marquee Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            TRUSTED BY HIGH-VELOCITY REVENUE & GROWTH TEAMS WORLDWIDE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {clientLogos.map((logo) => (
              <div key={logo} className="font-display font-black tracking-widest text-lg sm:text-xl text-slate-400 hover:text-brand-cyan transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-brand-cyan/40 transition-all group"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {t.metric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center font-display font-bold text-xs text-white shadow-md`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">{t.author}</div>
                  <div className="text-xs text-slate-400">{t.role}, <span className="text-slate-300 font-medium">{t.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guaranteed Benchmark Callout */}
        <div className="mt-16 glass-card rounded-2xl p-6 sm:p-8 border border-brand-cyan/20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                The BTM Next-Level Conversion SLA
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                We contractually guarantee at least 40% measurable pipeline velocity lift or we work without retainer until target metrics are achieved.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30">
              100% Performance Assured
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
