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
    <aside aria-label="Dynamic Island Quick Action" className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.92 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-5 px-3.5 sm:px-5 py-2.5 rounded-full bg-[#00182A]/95 backdrop-blur-xl border border-btm-cyan/40 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(0,240,255,0.2)] text-white max-w-full w-auto"
          >
            {/* Live Telemetry Pill Left */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
              </span>
              
              <div className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs font-mono whitespace-nowrap">
                <span className="font-bold text-white tracking-tight">140+ Sprints Active</span>
                <span className="text-slate-500 font-bold">•</span>
                <span className="text-[#00F0FF] font-bold tracking-tight drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                  &lt; 14 Days Squad SLA
                </span>
              </div>
            </div>

            {/* Right Action Button & Close Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => onOpenBooking('dynamic-island-trial')}
                className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#E62E2E] to-[#FF3B30] hover:from-[#D32F2F] hover:to-[#E62E2E] text-white font-bold text-xs shadow-md shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Claim 14-Day Trial Sprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 rounded-full hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
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
