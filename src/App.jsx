import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExecutionPipelineDiagram } from './components/ExecutionPipelineDiagram';
import { InteractiveTechStack } from './components/InteractiveTechStack';
import { ThoughtLeadership } from './components/ThoughtLeadership';
import { InteractiveIndustries } from './components/InteractiveIndustries';
import { TrustSection } from './components/TrustSection';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { InteractiveCapacityCalculator } from './components/InteractiveCapacityCalculator';
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
        {/* Top Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <main className="flex-1">
          {/* 1. Selector / Hero */}
          <HeroSection onOpenBooking={handleOpenBooking} />

          {/* 2. Visual Diagram: Roadmap → Capacity Gap → BTM Integration → Execution */}
          <ExecutionPipelineDiagram onOpenBooking={handleOpenBooking} />

          {/* 3. Technology Ecosystem with Frame Inspectors & Live Squad Builder */}
          <InteractiveTechStack onOpenBooking={handleOpenBooking} />

          {/* 4. Editorial Section: Executive Philosophy by Anupam Oberai */}
          <ThoughtLeadership onOpenBooking={handleOpenBooking} />

          {/* 5. Featured Cases: Challenge → BTM Role → What BTM Owned → Outcome */}
          <InteractiveIndustries onOpenBooking={handleOpenBooking} />

          {/* 6. Evidence Wall: Certifications, Locations, Numbers, & Trial Guarantee */}
          <TrustSection onOpenBooking={handleOpenBooking} />

          {/* 7. Timeline: Agile Development Process with Official BTM Diagram */}
          <DevelopmentProcess onOpenBooking={handleOpenBooking} />

          {/* 8. Interactive Capacity & ROI Estimator */}
          <InteractiveCapacityCalculator onOpenBooking={handleOpenBooking} />

          {/* 9. Authentic Quote & Consultation Hub */}
          <ConsultationSection />

          {/* 10. Frequently Asked Questions */}
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
