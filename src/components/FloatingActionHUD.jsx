import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap,
  X
} from 'lucide-react';

export const FloatingActionHUD = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <aside aria-label="Dynamic Island Quick Action" className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-5 py-2.5 rounded-full bg-[#00182A]/95 backdrop-blur-xl border border-btm-cyan/40 shadow-2xl shadow-cyan-950/40 text-white max-w-lg w-full sm:w-auto"
          >
            {/* Live Telemetry Pill Left */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-[11px] font-mono">
                <span className="font-bold text-white tracking-tight">140+ Sprints Active</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="text-btm-cyan font-bold">&lt; 14 Days Squad SLA</span>
              </div>
            </div>

            {/* Right Action Button & Close Trigger */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onOpenBooking('dynamic-island-trial')}
                className="px-4 sm:px-5 py-2 rounded-full bg-[#E62E2E] hover:bg-[#D32F2F] text-white font-bold text-xs shadow-md hover:shadow-red-500/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Claim 14-Day Trial Sprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Dismiss"
                aria-label="Dismiss quick bar"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
