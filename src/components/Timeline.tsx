import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const events = [
  { time: '09:00 AM', title: 'Guest Arrival', desc: 'Welcome and seating' },
  { time: '09:15 AM', title: 'Poruwa', desc: 'Traditional ceremony' },
  { time: '10:30 AM', title: 'Bar Opens', desc: 'Liquor served' },
  { time: '12:00 PM', title: 'Lunch', desc: 'Wedding feast' },
  { time: '12:45 PM', title: 'Dancing', desc: 'Join us on the dance floor' },
  { time: '01:50 PM', title: 'Cake Cutting', desc: 'Sweet celebrations' },
  { time: '02:00 PM', title: 'Band Playing', desc: 'Live music & jam session' },
  { time: '03:30 PM', title: 'Grand Exit', desc: 'Send off the newlyweds' },
];

export const Timeline = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background decoration removed per user request */}

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <svg 
            viewBox="0 0 1774 887" 
            className="pointer-events-none select-none relative left-1/2 -translate-x-1/2 w-[116vw] max-w-none h-auto -mt-28 md:-mt-40 -mb-4 md:-mb-6 z-0" 
            aria-hidden="true" 
            focusable="false"
          >
            <image href="/pearl-garland-2-base.png" xlinkHref="/pearl-garland-2-base.png" x="0" y="0" width="1774" height="887" />
            <g transform="translate(127 239)">
              <g>
                <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.6s" begin="-0.4s" repeatCount="indefinite"></animateTransform>
                <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-114" y="0" width="228" height="630" />
              </g>
            </g>
            <g transform="translate(543 239)">
              <g>
                <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.2s" begin="-2.1s" repeatCount="indefinite"></animateTransform>
                <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-103" y="0" width="206" height="473" />
              </g>
            </g>
            <g transform="translate(887 239)">
              <g>
                <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="5s" begin="-3.6s" repeatCount="indefinite"></animateTransform>
                <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-93" y="0" width="186" height="318" />
              </g>
            </g>
            <g transform="translate(1231 239)">
              <g>
                <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.4s" begin="-1.3s" repeatCount="indefinite"></animateTransform>
                <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-103" y="0" width="206" height="472" />
              </g>
            </g>
            <g transform="translate(1647.5 239)">
              <g>
                <animateTransform attributeName="transform" type="skewX" values="0;2.6;0;-2.6;0" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1" dur="4.8s" begin="-2.9s" repeatCount="indefinite"></animateTransform>
                <image href="/pearl-garland-2-strand-0.png" xlinkHref="/pearl-garland-2-strand-0.png" x="-113.5" y="0" width="227" height="630" />
              </g>
            </g>
          </svg>

          <h2 className="relative z-10 font-['Cormorant_Garamond',_serif] text-5xl md:text-7xl text-[#ea6a29] leading-tight">
            The Day
          </h2>
          <p className="relative z-10 text-[#ea6a29]/70 text-[13px] md:text-[15px] mt-4 font-sans leading-relaxed">
            A day to celebrate,<br />from the first hello to the last dance.
          </p>
        </motion.div>

        <div className="relative max-w-lg mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-[#ea6a29]/30"></div>
          
          <div className="space-y-12 md:space-y-14">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative grid grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] items-center gap-x-4 md:gap-x-6"
              >
                {/* Time */}
                <div className="flex min-w-0 items-center justify-end">
                  <span className="shrink-0 font-['Cormorant_Garamond',_serif] text-2xl md:text-3xl text-[#ea6a29] leading-none">
                    {event.time}
                  </span>
                </div>
                
                {/* Heart Icon */}
                <Heart 
                  className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0 self-center text-[#ea6a29] fill-current" 
                  strokeWidth={0} 
                />
                
                {/* Content */}
                <span className="leading-snug pt-1">
                  <span className="block font-sans text-sm tracking-[0.2em] uppercase text-[#ea6a29] font-medium">
                    {event.title}
                  </span>
                  <span className="block mt-1.5 font-sans text-[#ea6a29]/70 text-[12px] md:text-[13px] leading-relaxed">
                    {event.desc}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
