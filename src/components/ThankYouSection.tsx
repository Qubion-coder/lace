import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const ThankYouSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const initCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0) {
        setTimeout(initCanvas, 100);
        return;
      }
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      // Fill with theme color
      ctx.fillStyle = '#ea6a29';
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Add subtle noise/texture to make it look like a physical scratch card
      ctx.fillStyle = 'rgba(253, 251, 247, 0.1)';
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const w = Math.random() * 2 + 1;
        ctx.fillRect(x, y, w, w);
      }
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const start = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      setIsRevealed(true); // Fade out the instructional text immediately
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;
      scratch(e);
    };

    const end = () => {
      isDrawing = false;
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      if (e.cancelable) e.preventDefault();
      
      const { x, y } = getPos(e);
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 45; // Scratch brush size
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      lastX = x;
      lastY = y;
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('mouseleave', end);
    
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', scratch, { passive: false });
    canvas.addEventListener('touchend', end);
    canvas.addEventListener('touchcancel', end);

    return () => {
      window.removeEventListener('resize', initCanvas);
      canvas.removeEventListener('mousedown', start);
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('mouseup', end);
      canvas.removeEventListener('mouseleave', end);
      canvas.removeEventListener('touchstart', start);
      canvas.removeEventListener('touchmove', scratch);
      canvas.removeEventListener('touchend', end);
      canvas.removeEventListener('touchcancel', end);
    };
  }, []);

  return (
    <section className="relative pt-6 md:pt-10 pb-10 md:pb-16 px-4 overflow-hidden z-20 bg-brand-blush">
      {/* Outer elegant container - Full Pill Shape */}
      <div className="relative w-full max-w-[600px] mx-auto bg-[#ea6a29] rounded-[10rem] sm:rounded-[15rem] overflow-hidden shadow-[0_30px_60px_rgba(234,106,41,0.25)] pb-16 border-[8px] border-[#ea6a29]/50 bg-clip-padding">
        
        {/* Subtle background ambient flowers (replacing cherubs) */}
        <img 
          src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM - Copy.png" 
          alt="" 
          className="absolute -top-20 -left-20 w-80 opacity-10 pointer-events-none mix-blend-overlay rotate-45" 
        />
        <img 
          src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM - Copy.png" 
          alt="" 
          className="absolute top-40 -right-20 w-80 opacity-10 pointer-events-none mix-blend-overlay -rotate-45" 
        />

        <section className="relative pt-12 md:pt-20 pb-8 px-6 text-center z-10">
          <div className="max-w-md mx-auto flex flex-col items-center">
            
            {/* Top Floral Ornament */}
            <div className="w-24 sm:w-32 mb-6">
              <img 
                src="/ChatGPT Image Sep 3, 2026, 03_34_18 AM.png" 
                alt="Floral Ornament" 
                className="w-full h-auto opacity-90 drop-shadow-sm mix-blend-screen"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            
            {/* Script Text matching the image */}
            <h2 className="font-['Pinyon_Script',_cursive] text-5xl md:text-6xl text-[#FDFBF7] leading-[1.2] mt-2 mb-8 px-2 drop-shadow-md">
              We're so happy to <br />
              celebrate this day <br />
              with you.
            </h2>

            <p className="font-['Cormorant_Garamond',_serif] text-sm md:text-base text-[#FDFBF7]/90 leading-relaxed tracking-wider font-semibold">
              Having you with us means the world.<br/>We can't wait to welcome you.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden pt-6 pb-12 z-10">
          <div className="w-full max-w-[420px] md:max-w-[480px] mx-auto px-4">
            
            <div 
              className="relative w-full aspect-[1288/1920] flex items-center justify-center group"
            >
              
              {/* The underlying secret image - Oval Masked to fit inside the custom frame */}
              <img 
                src="/pexels-vinicius-quaresma-511530024-32439850 (2).jpg" 
                alt="Couple" 
                className="absolute inset-0 z-0 w-full h-full object-cover select-none transition-transform duration-[1.5s] group-hover:scale-105" 
                style={{ clipPath: 'ellipse(31.7% 32% at 50.1% 49.6%)' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop';
                }}
              />

              {/* The User's custom PNG frame overlaid perfectly on top */}
              <img 
                src="/ChatGPT_Image_Oct_9__2026__02_46_17_AM-removebg-preview.png" 
                alt="Intricate Frame" 
                aria-hidden="true"
                className="absolute inset-0 z-10 w-full h-full object-contain pointer-events-none select-none drop-shadow-2xl" 
              />
              
              {/* The elegant frosted glass cover that reveals the image via Scratch Canvas */}
              <div 
                className="absolute inset-0 z-20"
                style={{ clipPath: 'ellipse(31.7% 32% at 50.1% 49.6%)' }}
              >
                <canvas 
                  ref={canvasRef}
                  className="touch-none cursor-pointer absolute inset-0 w-full h-full block" 
                />
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isRevealed ? 0 : 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-['Pinyon_Script',_cursive] text-4xl md:text-5xl text-[#FDFBF7] mt-2 text-center leading-[1.1] select-none">
                    Scratch to <br /> reveal
                  </span>
                </motion.div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </section>
  );
};
