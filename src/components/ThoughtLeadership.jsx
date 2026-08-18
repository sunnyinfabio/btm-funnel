import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Sparkles, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  ThumbsUp, 
  Share2, 
  Lightbulb,
  ShieldCheck,
  UserCheck,
  Pause,
  Play
} from 'lucide-react';

export const ThoughtLeadership = ({ onOpenBooking }) => {
  const [isPaused, setIsPaused] = useState(false);

  const comments = [
    {
      id: 1,
      theme: 'Execution Bottleneck',
      quote: "Most companies don't have a shortage of technology ideas. They have a shortage of execution capacity.",
      author: 'Anupam Oberai',
      role: 'Founder & CEO, BTM Outsourcing',
      avatar: 'AO',
      timestamp: 'Engineering Economics • 1d ago',
      reactions: '348 CTOs & VPs of Engineering agreed',
      color: 'border-cyan-200 bg-white shadow-md',
    },
    {
      id: 2,
      theme: 'Value vs Cost',
      quote: "The purpose of outsourcing should not be cheaper development. It should be stronger execution.",
      author: 'Anupam Oberai',
      role: 'Founder & CEO, BTM Outsourcing',
      avatar: 'AO',
      timestamp: 'Executive Briefing • 3d ago',
      reactions: '512 Tech Leaders reacted',
      color: 'border-amber-200 bg-white shadow-md',
    },
    {
      id: 3,
      theme: 'Team Integration',
      quote: "The best outsourced teams eventually stop feeling outsourced.",
      author: 'Anupam Oberai',
      role: 'Founder & CEO, BTM Outsourcing',
      avatar: 'AO',
      timestamp: 'Agile Squad Scaling • 5d ago',
      reactions: '420 Engineering Directors shared',
      color: 'border-emerald-200 bg-white shadow-md',
    },
    {
      id: 4,
      theme: 'The Leadership Dilemma',
      quote: "A CTO should not have to choose between permanent hiring and delaying the roadmap.",
      author: 'Anupam Oberai',
      role: 'Founder & CEO, BTM Outsourcing',
      avatar: 'AO',
      timestamp: 'Strategic Capacity • 1w ago',
      reactions: '630 Tech Executives bookmarked',
      color: 'border-purple-200 bg-white shadow-md',
    },
    {
      id: 5,
      theme: 'Codebase Longevity',
      quote: "Velocity without architectural discipline is just accelerated technical debt. Seniority is what protects the product.",
      author: 'Anupam Oberai',
      role: 'Founder & CEO, BTM Outsourcing',
      avatar: 'AO',
      timestamp: 'Architecture Standards • 2w ago',
      reactions: '290 Principal Architects verified',
      color: 'border-blue-200 bg-white shadow-md',
    },
  ];

  // Double the array for seamless infinite marquee loop
  const marqueeItems = [...comments, ...comments];

  return (
    <section id="thought-leadership" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#002B49] text-xs font-mono mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-btm-cyan" />
            <span className="font-semibold text-slate-800">EXECUTIVE COMMENTARY & THOUGHT STREAM</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            The Philosophy of <span className="text-gradient-cyan">Technology Execution</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Perspectives from BTM Leadership on global engineering talent, architectural discipline, and modern software scaling.
          </p>
        </div>

      </div>

      {/* Continuous Sliding Marquee Container */}
      <div 
        className="relative w-full overflow-hidden py-4 mb-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Fade Masks for smooth edge entrance */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

        {/* Animated Marquee Strip */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[360px] sm:w-[420px] rounded-3xl p-6 border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:border-btm-cyan transition-all duration-300 flex flex-col justify-between relative select-none shrink-0 group"
            >
              {/* Comment Header with Avatar, Verified Badge, and Timestamp */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#002B49] to-btm-cyan text-white font-bold flex items-center justify-center text-sm shadow-sm ring-2 ring-cyan-100">
                      {item.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 font-display font-bold text-sm text-slate-900">
                        <span>{item.author}</span>
                        <UserCheck className="w-3.5 h-3.5 text-btm-cyan" />
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {item.role}
                      </div>
                    </div>
                  </div>

                  <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-btm-cyan font-bold shrink-0">
                    {item.theme}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-slate-400 mb-3 flex items-center gap-1">
                  <span>{item.timestamp}</span>
                </div>

                {/* Comment Speech Bubble Body */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-serif text-sm sm:text-[15px] leading-relaxed relative group-hover:bg-cyan-50/30 group-hover:border-cyan-200 transition-colors">
                  {/* Subtle speech bubble arrow */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-slate-50 border-t border-l border-slate-200 rotate-45 group-hover:bg-cyan-50/30 group-hover:border-cyan-200 transition-colors" />
                  
                  <p className="italic relative z-10 text-slate-800 font-medium">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Comment Footer: Engagement / Reaction Pill */}
              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>{item.reactions}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 group-hover:text-btm-cyan transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                  <Share2 className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Executive Bio & Consultation Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card-btm rounded-3xl p-6 sm:p-8 border border-slate-200 bg-[#002B49] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-btm-gold font-bold">
              Engineering Leadership Briefing
            </span>
            <h4 className="font-display font-bold text-2xl text-white">
              Align Your Engineering Roadmap With Proven Execution Capacity
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Schedule a 1-on-1 technical scoping discussion directly with our senior architecture team to review sprint velocity, team structuring, and capacity allocation.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('executive-briefing')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-slate-950 font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all shrink-0 flex items-center gap-2 shimmer-btm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Schedule Executive Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
