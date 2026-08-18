import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Calculator, 
  Sparkles, 
  X, 
  MessageSquare, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Activity
} from 'lucide-react';

export const FloatingActionHUD = ({ onOpenBooking }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Speed-Dial Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 p-5 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-3 relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-slate-800">140+ SPRINTS ACTIVE</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Trigger 1: Capacity Review */}
            <button
              onClick={() => {
                setIsExpanded(false);
                onOpenBooking('floating-capacity-review');
              }}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-btm-cyan to-btm-gold text-white font-bold text-xs shadow-sm flex items-center justify-between hover:opacity-95 transition-opacity"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Book 45-Min Capacity Audit</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Quick Trigger 2: Direct Phone Links */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-2">
              <a
                href="tel:+18624371138"
                className="flex items-center justify-between text-slate-700 hover:text-btm-cyan transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-btm-cyan" />
                  <span>USA Direct</span>
                </span>
                <span className="font-bold">+1 (862) 437-1138</span>
              </a>
              <a
                href="tel:+911244104312"
                className="flex items-center justify-between text-slate-700 hover:text-btm-cyan transition-colors pt-1.5 border-t border-slate-200"
              >
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-btm-cyan" />
                  <span>India Direct</span>
                </span>
                <span className="font-bold">+91 124 410 4312</span>
              </a>
            </div>

            {/* Quick Trigger 3: 2-Week Trial Badge */}
            <div className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded-xl flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
              <span>2-Week Risk-Free Trial Sprint SLA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Pill */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-5 py-3.5 rounded-full bg-[#002B49] hover:bg-slate-900 text-white font-bold text-xs shadow-2xl border border-btm-cyan/40 hover:border-btm-cyan flex items-center gap-2.5 transition-all group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Quick Execution Hub</span>
        <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

    </aside>
  );
};
