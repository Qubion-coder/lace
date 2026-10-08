import { motion } from 'motion/react';
import { Music, VolumeX, Heart } from 'lucide-react';
import { Hero } from './Hero';
import { CoupleDetails } from './CoupleDetails';
import { CeremonyDetails } from './CeremonyDetails';
import { Location } from './Location';
import { Timeline } from './Timeline';
import { MessageAndCountdown } from './MessageAndCountdown';
import { RSVPForm } from './RSVPForm';
import { ThankYouSection } from './ThankYouSection';

import { InviteeBanner } from './InviteeBanner';
import { DeferredMount } from './DeferredMount';

interface InvitationContentProps {
  active: boolean;
  eventParam: string;
  fullInviteeName: string;
  eventLabel: string;
  weddingDate: Date;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export function InvitationContent({
  active,
  eventParam,
  fullInviteeName,
  eventLabel,
  weddingDate,
  isMusicPlaying,
  onToggleMusic,
}: InvitationContentProps) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="font-sans text-stone-800 bg-brand-blush selection:bg-brand-plum/20"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={onToggleMusic}
        className="fixed top-6 right-6 z-50 w-12 sm:w-14 h-12 sm:h-14 bg-white/70 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgba(176,137,104,0.15)] flex items-center justify-center border border-brand-lavender/50 text-brand-plum hover:scale-105 transition-all duration-300"
      >
        {isMusicPlaying ? (
          <Music className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </motion.button>

      <Hero event={eventParam} inviteeName={fullInviteeName} />

      {fullInviteeName && (
        <DeferredMount active={active} delay={80}>
          <InviteeBanner inviteeName={fullInviteeName} eventLabel={eventLabel} />
        </DeferredMount>
      )}

      <DeferredMount active={active} delay={100} minHeight="40vh">
        <MessageAndCountdown targetDate={weddingDate} />
      </DeferredMount>

      <DeferredMount active={active} delay={120} minHeight="40vh">
        <div className="py-24 sm:py-32 bg-gradient-to-b from-brand-blush via-white to-brand-blush relative overflow-hidden">

          <CoupleDetails />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={180} minHeight="40vh">
        <CeremonyDetails event={eventParam} />
      </DeferredMount>

      <DeferredMount active={active} delay={240} minHeight="40vh">
        <div className="pt-24 pb-12 sm:py-32 bg-gradient-to-b from-white via-brand-rose/30 to-brand-blush relative overflow-hidden">
          <Location event={eventParam} />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={300} minHeight="40vh">
        <Timeline />
      </DeferredMount>



      <DeferredMount active={active} delay={420} minHeight="30vh">
        <div className="py-24 sm:py-32 bg-brand-blush relative overflow-hidden">
          <RSVPForm inviteeName={fullInviteeName} eventName={eventLabel} eventParam={eventParam} />
        </div>
      </DeferredMount>

      <DeferredMount active={active} delay={480} minHeight="30vh">
        <ThankYouSection />
      </DeferredMount>

      <DeferredMount active={active} delay={520}>
        <footer className="py-12 bg-white border-t border-brand-lavender/20 text-center relative overflow-hidden mt-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-lavender/10 blur-[80px] rounded-full pointer-events-none" />
          <Heart className="w-6 h-6 mx-auto mb-6 text-brand-plum fill-brand-lavender/20" />
          <p className="font-names text-4xl sm:text-5xl text-stone-800 mb-2">Bagya & Avishka</p>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] font-sans text-stone-400 font-semibold block mb-4">
            October 22, 2026
          </span>
          
          <div className="w-12 h-[1px] bg-brand-lavender/30 mx-auto my-6" />

          <p className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] text-stone-400 uppercase">
            Want a beautiful wedding website like this? <br className="sm:hidden" />Create yours with{' '}
            <a 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#D4AF37] hover:text-brand-plum font-bold underline decoration-[#D4AF37]/40 hover:decoration-brand-plum/40 underline-offset-4 transition-colors" 
              href="https://wa.me/94707819074"
            >
              Invitemint
            </a>
          </p>
        </footer>
      </DeferredMount>
    </motion.div>
  );
}
