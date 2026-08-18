import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Layers, 
  Globe, 
  Award, 
  DollarSign, 
  Sparkles, 
  RotateCw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  FolderLock,
  ExternalLink,
  ChevronRight,
  Eye,
  Check
} from 'lucide-react';

export const InteractiveWhyBTM = ({ onOpenBooking }) => {
  const [flippedMap, setFlippedMap] = useState({});

  const toggleFlip = (id, e) => {
    if (e) e.stopPropagation();
    setFlippedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const packets = [
    {
      id: 0,
      packetCode: 'PACKET 01 // BESPOKE',
      title: 'Client Focus',
      icon: Users,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-btm-cyan',
      accentBadge: 'bg-cyan-50 text-btm-cyan border-cyan-200',
      frontSummary: 'Consultative, bespoke architecture tailored to your unique codebase.',
      backDetails: 'We listen carefully and work in a consultative fashion with client leadership, offering customized solutions exclusive to your business. We are not limited to boxed products with rigid architectures, creating a sustainable competitive edge.',
      metric: '100% Bespoke Delivery',
      keyPoint: 'Zero boxed-product constraints',
      tag: 'Bespoke Engineering',
    },
    {
      id: 1,
      packetCode: 'PACKET 02 // DOMAIN',
      title: 'Business Acumen + Technology',
      icon: Briefcase,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-700',
      accentBadge: 'bg-amber-50 text-amber-700 border-amber-200',
      frontSummary: 'Deep quantitative domain knowledge paired with modern cloud architectures.',
      backDetails: 'Founded and led by Wall Street technologists. We blend functional financial & enterprise knowledge with the latest technology so BTM produces genuine operational efficiencies, not just lines of code.',
      metric: 'Ex-Goldman & Deutsche Pedigree',
      keyPoint: 'Quantitative domain expertise',
      tag: 'Domain Leadership',
    },
    {
      id: 2,
      packetCode: 'PACKET 03 // ACCELERATOR',
      title: 'Proprietary Solution Suite',
      icon: Layers,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-700',
      accentBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      frontSummary: 'Proven frameworks, automated testing pipelines & acceleration tooling.',
      backDetails: 'Our proprietary suite of technology tools and automated QA test suites helps clients make confident decisions, eliminate sprint bottlenecks, outpace competitors, and scale with zero technical debt.',
      metric: '10x Faster Sprint Velocity',
      keyPoint: 'Automated CI/CD & test harnesses',
      tag: 'Proprietary Tools',
    },
    {
      id: 3,
      packetCode: 'PACKET 04 // 24-7 SYNC',
      title: 'Global Timezone Presence',
      icon: Globe,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-700',
      accentBadge: 'bg-purple-50 text-purple-700 border-purple-200',
      frontSummary: 'Seamless real-time daily collaboration across US, UK, and APAC.',
      backDetails: 'Our multi-timezone presence across the US East/West Coast, UK/Europe, and India delivery centers enables true 24x7 sprint velocity with 4-7 hours of real-time daily standup overlap.',
      metric: '24/7 Delivery Pipeline',
      keyPoint: '4-7 hrs live US/UK standup overlap',
      tag: 'Multi-Timezone',
    },
    {
      id: 4,
      packetCode: 'PACKET 05 // MASTERY',
      title: 'Perpetual Quality & Expertise',
      icon: Award,
      color: 'from-sky-500/20 to-blue-500/10 border-sky-500/40 text-sky-700',
      accentBadge: 'bg-sky-50 text-sky-700 border-sky-200',
      frontSummary: 'Top 1% subject matter experts with continuous internal training.',
      backDetails: 'Our talent pool of senior engineers keeps abreast of emerging paradigms and security benchmarks. With one of the lowest attrition rates in the industry (< 4%), institutional knowledge remains protected.',
      metric: '< 4% Industry Attrition',
      keyPoint: 'Continuous quality & low attrition',
      tag: 'Top 1% Talent',
    },
    {
      id: 5,
      packetCode: 'PACKET 06 // CAPITAL',
      title: 'Strategic Pricing Advantage',
      icon: DollarSign,
      color: 'from-orange-500/20 to-red-500/10 border-orange-500/40 text-orange-700',
      accentBadge: 'bg-orange-50 text-orange-700 border-orange-200',
      frontSummary: 'Transparent monthly squad rates with zero recruiter markup.',
      backDetails: 'Our strategically distributed teams pass substantial savings directly to your P&L, enabling you to leverage onshore leadership for high-value strategic initiatives while squads handle execution.',
      metric: '60% Capital Efficiency',
      keyPoint: 'Direct P&L capital optimization',
      tag: 'Direct Economics',
    },
  ];

  return (
    <section id="why-btm" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <FolderLock className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">EXECUTION ARCHITECTURE DOSSIERS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Why <span className="text-gradient-cyan">BTM Outsourcing?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Inspect our 6 Core Execution Packets. Hover or click to flip the packet sleeve and read the complete engineering brief.
          </p>
        </div>

        {/* 6 Tactile Packet Envelopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packets.map((pkt) => {
            const isFlipped = !!flippedMap[pkt.id];

            return (
              <div
                key={pkt.id}
                className="flex flex-col group [perspective:1200px]"
              >
                {/* Physical Packet Folder Tab Header */}
                <div 
                  onClick={(e) => toggleFlip(pkt.id, e)}
                  className={`flex items-center justify-between px-5 py-2.5 rounded-t-2xl border-t border-x w-[92%] ml-4 transition-all duration-300 cursor-pointer shadow-sm ${
                    isFlipped 
                      ? 'bg-[#002B49] border-[#002B49] text-white' 
                      : 'bg-slate-100 border-slate-300 text-slate-700 group-hover:bg-[#002B49] group-hover:text-white'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-btm-cyan" />
                    {pkt.packetCode}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-btm-cyan">
                    <RotateCw className={`w-3 h-3 transition-transform duration-500 ${isFlipped ? 'rotate-180 text-amber-400' : ''}`} />
                    {isFlipped ? 'Flip Front' : 'Flip Details'}
                  </span>
                </div>

                {/* Packet Main 3D Flip Card Container */}
                <div 
                  className="relative min-h-[390px] w-full [perspective:1200px]"
                  onClick={(e) => toggleFlip(pkt.id, e)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer rounded-3xl ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    
                    {/* Front Side: Packet Sleeve */}
                    <div
                      className="absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] rounded-3xl p-7 flex flex-col justify-between border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 shadow-md group-hover:border-btm-cyan group-hover:shadow-xl transition-all"
                    >
                      {/* Top Header */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-2xl border ${pkt.color} bg-white shadow-sm group-hover:scale-105 transition-transform`}>
                            <pkt.icon className="w-6 h-6" />
                          </div>
                          <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${pkt.accentBadge}`}>
                            {pkt.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-black text-xl sm:text-2xl text-[#002B49] tracking-tight mb-3">
                          {pkt.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {pkt.frontSummary}
                        </p>
                      </div>

                      {/* Bottom Metric & Trigger */}
                      <div className="pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="text-[10px] font-mono uppercase text-slate-500">Verified SLA</div>
                            <div className="text-xs font-mono font-bold text-btm-cyan">{pkt.metric}</div>
                          </div>
                          <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                            <Check className="w-3.5 h-3.5" /> SLA Active
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => toggleFlip(pkt.id, e)}
                          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-btm-cyan hover:text-white border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all group-hover:bg-btm-cyan group-hover:text-white"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Full Dossier ↗</span>
                        </button>
                      </div>
                    </div>

                    {/* Back Side: Unfolded Engineering Dossier (Rotated 180deg) */}
                    <div
                      className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] rounded-3xl p-7 flex flex-col justify-between border border-[#002B49] bg-[#002B49] text-white shadow-2xl"
                    >
                      {/* Top Header */}
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-btm-cyan">
                              {pkt.title}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => toggleFlip(pkt.id, e)}
                            className="p-1 rounded-md bg-slate-800 text-slate-400 hover:text-white text-[10px] font-mono flex items-center gap-1"
                          >
                            <RotateCw className="w-3 h-3" />
                            <span>Flip</span>
                          </button>
                        </div>

                        {/* Complete Full Text */}
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                          {pkt.backDetails}
                        </p>

                        {/* Technical Highlight Pill */}
                        <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-emerald-400 flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                          <span>{pkt.keyPoint}</span>
                        </div>

                        <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                          <span>SLA Benchmark:</span>
                          <span className="text-btm-gold font-bold">{pkt.metric}</span>
                        </div>
                      </div>

                      {/* Action CTA */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(`packet-${pkt.packetCode.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
                        }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-xs shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2 mt-2"
                      >
                        <span>Explore This Advantage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Aggregate Summary Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-[#F1F5F9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-btm-cyan shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#002B49]">
                All 6 Packets Are Backed by Our 2-Week Risk-Free Trial Sprint
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Deploy your dedicated squad into your sprint backlog with zero upfront placement overhead or lock-in.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('why-btm-all-packets')}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-btm-navy text-white font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request Full Squad Dossier</span>
            <ArrowRight className="w-4 h-4 text-btm-cyan" />
          </button>
        </div>

      </div>
    </section>
  );
};
