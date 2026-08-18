import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 200,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes configuration
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);
    let nodes = [];

    const initNodes = () => {
      nodes = [];
      const palettes = [
        { r: 0, g: 163, b: 224 }, // BTM Cyan
        { r: 0, g: 210, b: 255 }, // Electric Cyan
        { r: 245, g: 166, b: 35 }, // Tech Gold
        { r: 0, g: 43, b: 73 },   // Enterprise Navy
      ];

      for (let i = 0; i < nodeCount; i++) {
        const color = palettes[Math.floor(Math.random() * palettes.length)];
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius: Math.random() * 2.2 + 1,
          radius: Math.random() * 2.2 + 1,
          color: color,
          alpha: Math.random() * 0.35 + 0.15,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.008,
        });
      }
    };

    initNodes();

    // Fluid ambient glow orbs with organic floating paths
    const orbs = [
      { x: width * 0.15, y: height * 0.2, radius: 420, color: 'rgba(0, 163, 224, 0.06)', vx: 0.15, vy: 0.12 },
      { x: width * 0.85, y: height * 0.35, radius: 480, color: 'rgba(0, 43, 73, 0.04)', vx: -0.12, vy: 0.15 },
      { x: width * 0.5, y: height * 0.75, radius: 400, color: 'rgba(245, 166, 35, 0.035)', vx: 0.1, vy: -0.1 },
      { x: width * 0.2, y: height * 0.9, radius: 360, color: 'rgba(0, 210, 255, 0.05)', vx: -0.08, vy: -0.12 },
    ];

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Render Ambient Glow Orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Particle Network Nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.pulse += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.1;

        // Interactive Mouse Physics
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 12;
            p.x -= (dx / dist) * force * 0.12;
            p.y -= (dy / dist) * force * 0.12;
            p.radius = p.baseRadius * (1 + (1 - dist / mouse.radius) * 1.8);
          } else {
            p.radius = p.baseRadius;
          }
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle node
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(0.05, Math.min(0.65, currentAlpha))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with subtle vector links
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 135) {
            const lineAlpha = (1 - cdist / 135) * 0.16;
            ctx.strokeStyle = `rgba(0, 163, 224, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block opacity-85" />
      <div className="absolute inset-0 bg-btm-mesh opacity-90" />
      <div className="absolute inset-0 bg-btm-grid opacity-50" />
    </div>
  );
};
