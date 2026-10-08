import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin } from 'lucide-react';

interface CeremonyDetailsProps {
  event?: string | null;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ event = 'both' }) => {
  return (
    <section className="relative w-full bg-[#ea6a29] py-32 md:py-48 flex flex-col items-center justify-center px-4 overflow-visible z-20">
      {/* Top Lace Border */}
      <img 
        loading="lazy" 
        src="/lace-border.jpg" 
        alt="Lace Border Top" 
        className="absolute top-0 left-0 w-full -translate-y-1/2 rotate-180 z-40 pointer-events-none select-none block" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center text-[#FDFBF7]"
      >
        <div className="inline-flex items-center justify-center gap-4 mb-8 w-full">
          <div className="w-12 sm:w-20 h-[1px] bg-[#FDFBF7]/60" />
          <span className="uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[11px] sm:text-xs font-bold drop-shadow-sm">
            The Sacred Union
          </span>
          <div className="w-12 sm:w-20 h-[1px] bg-[#FDFBF7]/60" />
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-['Cormorant_Garamond',_serif] mb-10 leading-tight drop-shadow-md text-[#FDFBF7]">
          A Celebration of <br />
          <span className="italic font-light font-['Pinyon_Script',_cursive] text-6xl sm:text-7xl lg:text-8xl">Tradition & Love</span>
        </h2>

        <p className="font-sans text-sm sm:text-base leading-relaxed mb-20 max-w-2xl mx-auto text-[#FDFBF7]/90 tracking-wide">
          We are honored to invite you to witness the beginning of our forever as we exchange vows, surrounded by the warmth and love of our cherished family and friends.
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-4xl mx-auto items-start relative before:absolute before:inset-0 before:bg-[#FDFBF7]/5 before:rounded-3xl before:backdrop-blur-md before:border before:border-[#FDFBF7]/20 p-8 sm:p-12 shadow-2xl">
          {/* Date */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-14 h-14 bg-[#ea6a29] rounded-full border border-[#FDFBF7]/40 flex items-center justify-center mb-6 shadow-lg">
              <Calendar className="w-6 h-6 text-[#FDFBF7]" />
            </div>
            <h4 className="font-['Cormorant_Garamond',_serif] text-3xl mb-3 text-[#FDFBF7]">The Date</h4>
            <p className="font-sans text-[13px] uppercase tracking-widest text-[#FDFBF7]/90 font-medium">
              October 22, 2026
            </p>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center relative z-10 md:border-x md:border-[#FDFBF7]/20 px-4">
            <div className="w-14 h-14 bg-[#ea6a29] rounded-full border border-[#FDFBF7]/40 flex items-center justify-center mb-6 shadow-lg">
              <Clock className="w-6 h-6 text-[#FDFBF7]" />
            </div>
            <h4 className="font-['Cormorant_Garamond',_serif] text-3xl mb-3 text-[#FDFBF7]">Poruwa</h4>
            <p className="font-sans text-[13px] uppercase tracking-widest text-[#FDFBF7]/90 font-medium">
              09:15 AM
            </p>
          </div>

          {/* Venue */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-14 h-14 bg-[#ea6a29] rounded-full border border-[#FDFBF7]/40 flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="w-6 h-6 text-[#FDFBF7]" />
            </div>
            <h4 className="font-['Cormorant_Garamond',_serif] text-3xl mb-3 text-[#FDFBF7]">The Venue</h4>
            <p className="font-sans text-[13px] uppercase tracking-widest text-[#FDFBF7]/90 text-center font-medium leading-relaxed">
              Mahogany Ballroom, <br/>Cinnamon Grand
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Lace Border */}
      <img 
        loading="lazy" 
        src="/lace-border.jpg" 
        alt="Lace Border Bottom" 
        className="absolute bottom-0 left-0 w-full translate-y-1/2 z-40 pointer-events-none select-none block" 
      />
    </section>
  );
};
