import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, Sparkles } from 'lucide-react';

export const FAQSection = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs = [
    {
      category: 'Capacity & Speed',
      question: 'How fast can a BTM dedicated engineering squad be deployed into our active sprints?',
      answer: 'Our pre-vetted squads are fully onboarded and actively committing code within 14 calendar days. We conduct immediate capacity scoping, review tech stack requirements, and handle all SOC2-compliant credential setup so Day 1 is spent in your backlog, not in training.',
    },
    {
      category: 'Governance & IP',
      question: 'Who owns the intellectual property and code created by BTM engineers?',
      answer: 'You own 100% of all intellectual property, source code, repositories, architectures, and deployment pipelines from commit #1. All contracts include clean-room IP assignment clauses under US / international legal jurisdiction.',
    },
    {
      category: 'Integration',
      question: 'How do BTM engineers integrate with our in-house engineering team and toolchain?',
      answer: 'BTM engineers operate as a direct extension of your team. They attend your daily standups, communicate in your Slack/Teams channels, manage story points on your Jira/Linear boards, and submit PRs directly into your GitHub/GitLab repositories.',
    },
    {
      category: 'Flexibility & Trial',
      question: 'What is the BTM 2-Week Risk-Free Trial Sprint guarantee?',
      answer: 'Every engagement starts with a 14-day trial sprint. If our squad’s velocity, communication, and code quality do not meet your exact engineering benchmarks, you can terminate the engagement with zero cost or obligation.',
    },
    {
      category: 'Modernisation',
      question: 'Can BTM handle legacy architecture refactoring (.NET / Java) while we ship new features?',
      answer: 'Yes. We frequently deploy dedicated modernisation pods that work in parallel to refactor monoliths, migrate databases, and containerize cloud environments without slowing down your core team’s customer-facing roadmap.',
    },
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const categories = ['All', 'Capacity & Speed', 'Governance & IP', 'Integration', 'Flexibility & Trial', 'Modernisation'];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-btm-cyan text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">CLARITY & GOVERNANCE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#002B49] tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about squad onboarding, IP ownership, sprint integration, and trial terms.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-btm-cyan text-white font-bold shadow-sm'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen ? 'border-btm-cyan shadow-md ring-1 ring-btm-cyan/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#002B49]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border shrink-0 transition-colors ${
                    isOpen ? 'bg-cyan-50 border-cyan-200 text-btm-cyan' : 'bg-slate-100 border-slate-200 text-slate-500'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 text-center p-8 rounded-3xl border border-slate-200 bg-[#F1F5F9] shadow-sm">
          <h4 className="font-display font-bold text-xl text-[#002B49] mb-2">Have a specific architectural inquiry?</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Our Principal Architects are available for a direct technical alignment session.
          </p>
          <button
            onClick={() => onOpenBooking('faq-cta')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-btm-cyan to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Schedule Technical Review</span>
          </button>
        </div>

      </div>
    </section>
  );
};
