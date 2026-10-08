import React from 'react';
import { motion } from 'motion/react';

interface LocationProps {
  event?: string | null;
}

export const Location: React.FC<LocationProps> = ({ event = 'both' }) => {
  const venues = [
    {
      id: 'ceremony',
      name: "Shangri-La",
      city: "Colombo",
      quote: "Experience the elegance of Shangri-La Colombo, where our beautiful celebration will take place overlooking the Indian Ocean.",
      description: "We recommend arriving a little early to enjoy the stunning views and settle in before the ceremony begins.",
      liveLocationUrl: "https://maps.app.goo.gl/7wcd6uLHpY8HevN66?g_st=ic",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1sXqWVed-sWC3IIOgfiWPsV-CMQVnzVr0_vPA1Zz5elOJbFSt7H87MG2&s=10",
      label: "Location"
    }
  ];

  return (
    <>
      {venues.map((venue) => (
        <section key={venue.id} className="pt-32 md:pt-44 pb-20 md:pb-28 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto text-center mix-blend-multiply"
          >
            <h2 className="font-['Cormorant_Garamond',_serif] text-5xl md:text-7xl text-[#ea6a29] leading-none mb-6">
              {venue.label}
            </h2>
            <p className="font-['Pinyon_Script',_cursive] text-[38px] md:text-[50px] text-[#ea6a29] mt-6 leading-none">
              {venue.name}
            </p>
            <p className="font-['Cormorant_Garamond',_serif] text-[#ea6a29]/70 text-base md:text-lg mt-4 uppercase tracking-[0.15em]">
              {venue.city}
            </p>
            
            <p className="text-[#ea6a29]/80 text-[12px] md:text-[13px] font-sans leading-relaxed mt-8">
              {venue.quote}
            </p>
            <p className="text-[#ea6a29]/80 text-[12px] md:text-[13px] font-sans leading-relaxed mt-4">
              {venue.description}
            </p>
            
            <div className="relative left-1/2 -translate-x-1/2 w-[70%] md:w-[60%] max-w-none mt-8">
              <img 
                loading="lazy" 
                decoding="async" 
                src={venue.imageUrl} 
                alt={`Illustration of the ${venue.name}`} 
                className="w-full h-auto object-cover select-none pointer-events-none rounded-t-[50%] rounded-b-[50%] aspect-[3/4] border border-[#ea6a29]/30 p-1" 
                draggable="false" 
              />
            </div>
            
            <a 
              href={venue.liveLocationUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-8 rounded-full border border-[#ea6a29]/35 px-14 py-4 text-[#ea6a29]/80 hover:text-[#ea6a29] hover:bg-[#ea6a29]/10 transition-colors"
            >
              <span className="block font-sans text-xs tracking-[0.18em] uppercase">Get Directions</span>
            </a>
          </motion.div>
        </section>
      ))}
    </>
  );
};
