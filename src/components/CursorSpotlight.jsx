import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorSpotlight = () => {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(-500, springConfig);
  const cursorY = useSpring(-500, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none z-20 w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-35 blur-3xl hidden md:block"
      style={{
        left: cursorX,
        top: cursorY,
        background: 'radial-gradient(circle, rgba(0, 163, 224, 0.18) 0%, rgba(245, 166, 35, 0.08) 45%, transparent 70%)',
      }}
    />
  );
};
