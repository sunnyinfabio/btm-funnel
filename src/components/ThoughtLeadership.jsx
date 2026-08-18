import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ThoughtLeadership = ({ onOpenBooking }) => {
  const quotes = [
    {
      quote: "Most companies don't have a shortage of technology ideas. They have a shortage of execution capacity.",
      theme: "Execution Bottleneck",
    },
    {
      quote: "The purpose of outsourcing should not be cheaper development. It should be stronger execution.",
      theme: "Value vs Cost",
    },
    {
      quote: "The best outsourced teams eventually stop feeling outsourced.",
      theme: "Team Integration",
    },
    {
      quote: "A CTO should not have to choose between permanent hiring and delaying the roadmap.",
      theme: "The Leadership Dilemma",
    },
  ];

  return (
    <section id="thought-leadership" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Thought Leadership Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-btm-cyan text-xs font-mono mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">EXECUTIVE PERSPECTIVE & ENGINEERING ECONOMICS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            The Philosophy of <span className="text-gradient-cyan">Technology Execution</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Perspectives from BTM Leadership on global engineering talent, architectural discipline, and modern software scaling.
          </p>
        </div>

        {/* Featured Quote Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {quotes.map((item, idx) => (
            <motion.div
              key={item.theme}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card-btm rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:border-btm-cyan hover:shadow-xl transition-all group bg-white"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-btm-cyan font-bold">
                    {item.theme}
                  </span>
                  <Quote className="w-6 h-6 text-slate-300 group-hover:text-btm-cyan transition-colors" />
                </div>

                <blockquote className="font-display font-bold text-xl sm:text-2xl text-[#002B49] leading-snug my-4">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-bold">Anupam Oberai</span>
                <span className="text-slate-500">Founder & CEO, BTM Outsourcing</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Bio & Consultation Callout */}
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
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all shrink-0 flex items-center gap-2 shimmer-btm"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Schedule Executive Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
