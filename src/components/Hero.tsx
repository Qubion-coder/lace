import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';

interface HeroProps {
  event?: string | null;
  inviteeName?: string;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  return touch;
}

export const Hero: React.FC<HeroProps> = ({ event = 'both', inviteeName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();
  const useParallax = !reducedMotion && !isTouch;

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [hasStartedPlay, setHasStartedPlay] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoEnded) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setHasStartedPlay(true);
        setVideoEnded(false);
      } else {
        videoRef.current.pause();
        setHasStartedPlay(false);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-blush/30 group">
      <motion.div
        className="absolute inset-0 z-0 origin-center cursor-pointer"
        style={useParallax ? { y: y1, scale } : undefined}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src="/intro.mp4"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
          muted
          playsInline
          onEnded={(e) => {
             // Pauses exactly at the last frame
             e.currentTarget.pause();
             setVideoEnded(true);
             setHasStartedPlay(false);
          }}
        />
      </motion.div>



      <AnimatePresence>
        {videoEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center"
          >
            
            {/* Staggered Text Animations */}
            <div className="flex flex-col items-center text-[#A8320B] drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)] -mt-10">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="uppercase tracking-[0.3em] text-xs sm:text-sm font-sans mb-8 text-[#A8320B]"
              >
                Wedding Invitation
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="font-['Pinyon_Script',_cursive] text-6xl sm:text-8xl md:text-[10rem] leading-none text-[#A8320B]"
              >
                Bagya
              </motion.h1>
              
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                className="font-serif italic text-3xl sm:text-4xl md:text-5xl my-4 text-[#A8320B]/90"
              >
                &
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
                className="font-['Pinyon_Script',_cursive] text-6xl sm:text-8xl md:text-[10rem] leading-none text-[#A8320B]"
              >
                Avishka
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoEnded && (
          <motion.div
            className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-2 bg-black/20 hover:bg-black/40 transition-colors backdrop-blur-md px-6 py-4 rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-white font-medium pl-1">
                Scroll Down
              </span>
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
