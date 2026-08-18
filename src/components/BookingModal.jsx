import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Mail, 
  Building, 
  Phone,
  Globe, 
  ChevronLeft,
  Zap,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal = ({ isOpen, onClose, initialPathway, prefilledData }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pathway: initialPathway || 'blueprint-architecture',
    squadSize: 'Pod of 4-6 Engineers',
    techStack: '.NET / React / AWS',
    fullName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    selectedDate: '2026-08-20',
    selectedTime: '10:30 AM EST',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        workEmail: prefilledData.email || prev.workEmail,
        squadSize: prefilledData.structure || prefilledData.squadSize || prefilledData.teamSize || prev.squadSize,
        techStack: prefilledData.priority || prefilledData.constraint || prefilledData.stack || prev.techStack,
      }));
      if (prefilledData.email) {
        setStep(2);
      }
    }
  }, [prefilledData]);

  const availableDates = [
    { day: 'Wed', date: 'Aug 19', value: '2026-08-19' },
    { day: 'Thu', date: 'Aug 20', value: '2026-08-20' },
    { day: 'Fri', date: 'Aug 21', value: '2026-08-21' },
    { day: 'Mon', date: 'Aug 24', value: '2026-08-24' },
    { day: 'Tue', date: 'Aug 25', value: '2026-08-25' },
  ];

  const availableTimes = [
    '09:30 AM EST',
    '11:00 AM EST',
    '01:30 PM EST',
    '03:00 PM EST',
    '04:30 PM EST',
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 2) {
      if (!formData.fullName || !formData.workEmail || !formData.companyName) {
        alert('Please fill in your full name, work email, and company.');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A3E0', '#00D2FF', '#F5A623', '#10B981']
      });
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Top BTM Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold" />

          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-btm-cyan text-xs font-mono mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold text-slate-800">STEP {step} OF 3 • BTM OUTSOURCING CAPACITY ALLOCATION</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#002B49] tracking-tight">
                  {step === 1 && 'Confirm Engineering Squad Scope'}
                  {step === 2 && 'Technical Leadership Contact'}
                  {step === 3 && 'Schedule Capacity Briefing'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Connect directly with our Principal Architects (Ex-Goldman Sachs / Enterprise tech leads).
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-btm-cyan to-btm-gold transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Track Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                      Engagement Track
                    </label>
                    <select
                      value={formData.pathway}
                      onChange={(e) => handleInputChange('pathway', e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-btm-cyan focus:outline-none"
                    >
                      <option value="capacity-review">Track 01: Engineering Capacity Review (48-Hr Diagnostic)</option>
                      <option value="blueprint-architecture">Track 02: Dedicated Squad Blueprint (&lt; 14 Days Deployment)</option>
                      <option value="audit-optimization">Track 03: Technology Modernisation & Cloud Assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                      Required Engineering Capacity
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        '1-2 Senior Staff Engineers',
                        'Dedicated Pod (4-6 Engineers + Lead)',
                        'Multi-Squad (8-12+ Engineers)',
                        'Full-Cycle Outsourcing Team',
                      ].map((size) => (
                        <button
                          type="button"
                          key={size}
                          onClick={() => handleInputChange('squadSize', size)}
                          className={`p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                            formData.squadSize === size
                              ? 'bg-cyan-50 border-btm-cyan text-btm-cyan font-bold shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                      Primary Technology Stack
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['.NET Core & C#', 'Java & Spring', 'React & TypeScript', 'Python & AI'].map((stk) => (
                        <button
                          type="button"
                          key={stk}
                          onClick={() => handleInputChange('techStack', stk)}
                          className={`p-2.5 rounded-xl border text-xs font-mono text-center transition-all ${
                            formData.techStack === stk
                              ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {stk}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Contact Verification</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Contact Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Henderson"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-btm-cyan focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="alex@enterprise.com"
                          value={formData.workEmail}
                          onChange={(e) => handleInputChange('workEmail', e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-btm-cyan focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Acme Financial"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-btm-cyan focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-semibold">
                        Direct Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-btm-cyan focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mutual Non-Disclosure Agreement (NDA) automatically in effect. Clean-room IP protection.</span>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Choose Capacity Review Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Calendar Slot Picker */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                      Select Available Date
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {availableDates.map((item) => (
                        <button
                          type="button"
                          key={item.value}
                          onClick={() => handleInputChange('selectedDate', item.value)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            formData.selectedDate === item.value
                              ? 'bg-cyan-50 border-btm-cyan text-btm-cyan font-bold shadow-sm ring-1 ring-btm-cyan'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <div className="text-[10px] uppercase font-mono text-slate-500">{item.day}</div>
                          <div className="text-xs font-bold text-slate-900 mt-1">{item.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-semibold">
                      Select Available Time Slot (45 min Technical Session)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableTimes.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => handleInputChange('selectedTime', t)}
                          className={`p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                            formData.selectedTime === t
                              ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>{t}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Briefing Summary:</span> Squad Architecture Alignment for <span className="text-btm-cyan font-mono font-bold">{formData.companyName || 'Your Organization'}</span> on <span className="text-amber-800 font-mono font-bold">{formData.selectedDate} at {formData.selectedTime}</span>.
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-btm-cyan via-[#00B4D8] to-btm-gold text-white font-bold text-sm shadow-btm-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Locking Briefing Slot...</span>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 text-white" />
                          <span>Confirm Capacity Review</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            /* Success View */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#002B49] mb-2">
                Capacity Review Reserved!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your briefing session has been scheduled with our Principal Architecture team. An invite and squad preparation document have been sent to <strong className="text-btm-cyan font-mono">{formData.workEmail}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 max-w-md mx-auto mb-8 space-y-1 text-left">
                <div>📅 <strong>Session:</strong> {formData.selectedDate} ({formData.selectedTime})</div>
                <div>🏢 <strong>Company:</strong> {formData.companyName}</div>
                <div>⚡ <strong>Target Track:</strong> {formData.pathway}</div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-btm-navy text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Return to Overview
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
