import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Props {
  targetDate: Date;
}

export const MessageAndCountdown: React.FC<Props> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60));
      const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative w-full flex flex-col">
      {/* Top Message Section */}
      <div className="w-full bg-[#FDFBF7] pt-16 pb-56 sm:pt-24 sm:pb-48 flex flex-col items-center justify-center px-4 relative z-10 overflow-hidden">
        
        {/* Decorative vertical pearls */}
        <img 
          src="/ChatGPT Image Oct 9, 2026, 03_22_01 AM.png" 
          alt="" 
          className="absolute top-8 left-2 sm:left-12 w-12 sm:w-20 opacity-70 pointer-events-none mix-blend-multiply z-0" 
        />
        <img 
          src="/ChatGPT Image Oct 9, 2026, 03_22_01 AM.png" 
          alt="" 
          className="absolute top-1/2 right-2 sm:right-12 w-12 sm:w-20 opacity-70 pointer-events-none mix-blend-multiply z-0 transform scale-y-[-1]" 
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl text-[#8B4513] font-serif mb-2">Together with their</h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#8B4513] font-['Pinyon_Script',_cursive] mb-6">Families</h2>
          
          <div className="flex items-center justify-center gap-2 mb-8 w-full max-w-xs mx-auto">
             <div className="h-[1px] flex-1 bg-[#8B4513]/30"></div>
             <div className="w-2 h-2 rounded-full bg-[#8B4513]/30"></div>
             <div className="h-[1px] flex-1 bg-[#8B4513]/30"></div>
          </div>

          <p className="text-[#8B4513] font-serif text-lg sm:text-xl leading-relaxed max-w-lg mx-auto px-4 font-medium">
            Bagya & Avishka request the pleasure of your company as they celebrate their marriage and begin this new chapter surrounded by the people they love most.
          </p>
        </motion.div>
      </div>

      {/* Countdown Section */}
      <section id="countdown" className="relative -mt-14 py-24 md:py-32 px-1 z-30 bg-[#A8320B]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[1627/1513] w-[92%] max-w-[560px] mx-auto text-center"
        >
          <img 
            loading="lazy" 
            decoding="async" 
            src="/golden-frame.jpg" 
            alt="Frame" 
            className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-4 px-[14%]">
            <h2 className="font-['Pinyon_Script',_cursive] text-4xl md:text-6xl text-white leading-tight mt-4">
              Countdown
            </h2>
            <div className="grid grid-cols-4 w-full items-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="flex min-w-0 flex-col items-center">
                  <span className="font-['Cormorant_Garamond',_serif] text-3xl md:text-5xl text-white leading-none tabular-nums">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="mt-2 md:mt-3 text-[9px] md:text-xs uppercase text-white font-['Cormorant_Garamond',_serif]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lace Borders */}
        <img 
          loading="lazy" 
          decoding="async" 
          src="/lace-border.jpg" 
          alt="Lace Border" 
          className="absolute top-0 left-0 w-full -translate-y-1/2 rotate-180 z-40 pointer-events-none select-none" 
          draggable="false" 
        />
        <img 
          loading="lazy" 
          decoding="async" 
          src="/lace-border.jpg" 
          alt="Lace Border" 
          className="absolute bottom-0 left-0 w-full translate-y-1/2 z-40 pointer-events-none select-none" 
          draggable="false" 
        />
      </section>
      
    </div>
  );
};
