import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const HolographicTiltCard = ({ 
  children, 
  className = '', 
  maxRotation = 10, 
  glareOpacity = 0.25,
  onClick
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxRotation, -maxRotation]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxRotation, maxRotation]), springConfig);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative rounded-3xl transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl' : 'shadow-md'
      } ${className}`}
    >
      {/* Card Content Container */}
      <div style={{ transform: 'translateZ(25px)' }} className="w-full h-full">
        {children}
      </div>

      {/* Dynamic Holographic Specular Glare Layer */}
      <motion.div
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255, 255, 255, 0.5) 0%, rgba(0, 163, 224, 0.15) 35%, transparent 70%)`,
        }}
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-30 mix-blend-overlay"
      />
    </motion.div>
  );
};
