import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative vertical pearls */}
      <img 
        src="/ChatGPT Image Oct 9, 2026, 03_22_01 AM.png" 
        alt="" 
        className="absolute top-20 -left-4 sm:left-0 lg:-left-12 w-16 sm:w-24 opacity-80 pointer-events-none mix-blend-multiply z-0" 
      />
      <img 
        src="/ChatGPT Image Oct 9, 2026, 03_22_01 AM.png" 
        alt="" 
        className="absolute bottom-20 -right-4 sm:right-0 lg:-right-12 w-16 sm:w-24 opacity-80 pointer-events-none mix-blend-multiply z-0 transform scale-y-[-1]" 
      />

      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-lavender/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-plum/60" />
            <span className="text-brand-plum uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Protagonists</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-plum/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-names text-stone-800 tracking-tight drop-shadow-sm">
            Bagya <span className="text-brand-plum font-light mx-2">&</span> Avishka
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details (Left on Desktop, Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10 order-4 lg:order-1 relative w-full"
        >
          {/* Groom details layout container without mobile background */}

          <div className="mb-4 flex flex-col items-center lg:items-end relative z-10">
            <span className="text-[#8B6508] uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Groom</span>
            <h3 className="text-4xl sm:text-5xl font-['Cormorant_Garamond',_serif] text-stone-800 mb-2 drop-shadow-sm">Avishka</h3>
            <p className="text-stone-700 font-century text-xs mb-2"></p>
            <p className="text-stone-500/90 font-serif italic text-base sm:text-lg">Son of Mr & Mrs Perera</p>
          </div>
          <div className="hidden lg:flex justify-end mt-8 relative z-10">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Center Couple Image Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-sm sm:max-w-md lg:w-[35%] aspect-[4/5] mx-auto order-1 lg:order-2 flex-shrink-0 z-20 mb-12 lg:mb-0"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-brand-lavender/30 to-transparent blur-3xl -z-10" />
          
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 p-2 sm:p-4">
            {/* Top Left - Arch top */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
              className="relative w-full h-full rounded-t-full rounded-bl-3xl rounded-br-lg overflow-hidden shadow-[0_15px_30px_rgba(176,137,104,0.2)] border-[3px] border-white transform transition-all duration-500"
            >
              <img src="https://images.pexels.com/photos/34193850/pexels-photo-34193850.jpeg" alt="Couple" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-plum/10 mix-blend-overlay"></div>
            </motion.div>

            {/* Top Right - Offset down slightly */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
              className="relative w-full h-full rounded-t-full rounded-br-3xl rounded-bl-lg overflow-hidden shadow-[0_15px_30px_rgba(176,137,104,0.2)] border-[3px] border-white transform translate-y-6 sm:translate-y-8 transition-all duration-500"
            >
              <img src="https://images.pexels.com/photos/39902530/pexels-photo-39902530.jpeg" alt="Couple" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-plum/10 mix-blend-overlay"></div>
            </motion.div>

            {/* Bottom Left - Arch bottom */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -1, zIndex: 10 }}
              className="relative w-full h-full rounded-b-full rounded-tl-3xl rounded-tr-lg overflow-hidden shadow-[0_15px_30px_rgba(176,137,104,0.2)] border-[3px] border-white transform -translate-y-4 sm:-translate-y-6 transition-all duration-500"
            >
              <img src="https://images.pexels.com/photos/39838826/pexels-photo-39838826.jpeg" alt="Couple" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-plum/10 mix-blend-overlay"></div>
            </motion.div>

            {/* Bottom Right - Arch bottom */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 3, zIndex: 10 }}
              className="relative w-full h-full rounded-b-full rounded-tr-3xl rounded-tl-lg overflow-hidden shadow-[0_15px_30px_rgba(176,137,104,0.2)] border-[3px] border-white transform transition-all duration-500"
            >
              <img src="https://images.pexels.com/photos/39919265/pexels-photo-39919265.jpeg" alt="Couple" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-plum/10 mix-blend-overlay"></div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <Sparkles className="absolute top-1/2 -left-6 w-6 h-6 text-brand-plum/40 animate-pulse" />
          <Sparkles className="absolute top-1/4 -right-4 w-5 h-5 text-brand-rose/60 animate-pulse delay-75" />
          <Heart className="absolute bottom-1/4 -left-2 w-4 h-4 text-brand-lavender/80 animate-bounce" />
        </motion.div>
        {/* Bride Details (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10 order-2 lg:order-3"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-[#8B6508] uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block mt-8 sm:mt-12 lg:mt-0">The Bride</span>
            <h3 className="text-4xl sm:text-5xl font-['Cormorant_Garamond',_serif] text-stone-800 mb-2 drop-shadow-sm">Bagya</h3>
            <p className="text-stone-700 font-century text-xs mb-2"></p>
            <p className="text-stone-500/90 font-serif italic text-base sm:text-lg">Daughter of Mr & Mrs Fernando</p>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
