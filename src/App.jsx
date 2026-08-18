import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HiringLagSection } from './components/HiringLagSection';
import { InteractiveCapacityCalculator } from './components/InteractiveCapacityCalculator';
import { SolutionsSection } from './components/SolutionsSection';
import { InteractiveWhyBTM } from './components/InteractiveWhyBTM';
import { DifferentiationBento } from './components/DifferentiationBento';
import { InteractiveIndustries } from './components/InteractiveIndustries';
import { InteractiveTechStack } from './components/InteractiveTechStack';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { TrustSection } from './components/TrustSection';
import { ABMSegmentRouting } from './components/ABMSegmentRouting';
import { ThoughtLeadership } from './components/ThoughtLeadership';
import { ConsultationSection } from './components/ConsultationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActionHUD } from './components/FloatingActionHUD';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialPathway, setInitialPathway] = useState('blueprint-architecture');
  const [prefilledData, setPrefilledData] = useState(null);

  const handleOpenBooking = (pathway = 'capacity-review') => {
    setInitialPathway(pathway);
    setPrefilledData(null);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithData = (pathway, data) => {
    setInitialPathway(pathway);
    setPrefilledData(data);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 overflow-x-hidden selection:bg-btm-cyan/20 selection:text-btm-cyan">
      {/* Interactive Ambient Physics Background Canvas */}
      <BackgroundCanvas />

      {/* Cursor Follower Spotlight Glow */}
      <CursorSpotlight />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <main className="flex-1">
          {/* Stage 01 — Attention Hero */}
          <HeroSection onOpenBooking={handleOpenBooking} />

          {/* Hiring Lag & Opportunity Cost Problem Stacking */}
          <HiringLagSection onOpenBooking={handleOpenBooking} />

          {/* Interactive Live Capacity & ROI Calculator */}
          <InteractiveCapacityCalculator onOpenBooking={handleOpenBooking} />

          {/* Stage 02 — Relevance: 4 Core Execution Models */}
          <SolutionsSection onOpenBooking={handleOpenBooking} />

          {/* Interactive 3D Packet Dossiers ("Why BTM Outsourcing?") */}
          <InteractiveWhyBTM onOpenBooking={handleOpenBooking} />

          {/* Stage 04 — Differentiation: 4 Core Pillars */}
          <DifferentiationBento onOpenBooking={handleOpenBooking} />

          {/* Key Focus Industries Explorer (Topologies & Blueprints) */}
          <InteractiveIndustries onOpenBooking={handleOpenBooking} />

          {/* Cross-Functional Technology Stack with Modern Frames & Live Squad Builder */}
          <InteractiveTechStack onOpenBooking={handleOpenBooking} />

          {/* Step-by-Step Agile Development Process with Official BTM Diagram */}
          <DevelopmentProcess onOpenBooking={handleOpenBooking} />

          {/* Stage 05 — Trust & 2-Week Risk-Free Trial Sprint */}
          <TrustSection onOpenBooking={handleOpenBooking} />

          {/* Stage 07 — ABM & Audience Growth-Stage Routing */}
          <ABMSegmentRouting onOpenBooking={handleOpenBooking} />

          {/* Thought Leadership Layer (Philosophy by Anupam Oberai) */}
          <ThoughtLeadership onOpenBooking={handleOpenBooking} />

          {/* Authentic Consultation & Quote Request with Corporate Background */}
          <ConsultationSection />

          {/* FAQ Section */}
          <FAQSection onOpenBooking={handleOpenBooking} />
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Multi-Step Capacity & Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
          initialPathway={initialPathway}
          prefilledData={prefilledData}
        />

        {/* Floating Live Telemetry HUD */}
        <FloatingActionHUD onOpenBooking={handleOpenBooking} />
      </div>
    </div>
  );
}

export default App;
