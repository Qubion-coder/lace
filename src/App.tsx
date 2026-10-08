import { useState, useRef, useEffect, useCallback } from 'react';
import { Toaster } from 'sonner';

import { InvitationContent } from './components/InvitationContent';
import { Admin } from './components/Admin';
import { INVITATION_IMAGE_URLS, preloadImages } from './utils/preloadImages';

const isAdminRoute = () => window.location.pathname === '/admin';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const params = new URLSearchParams(window.location.search);
  const titleParam = params.get('title') || '';
  const nameParam = params.get('name') || '';
  const eventParam = params.get('event') || 'both';

  const fullInviteeName = `${titleParam} ${nameParam}`.trim();

  let eventLabel = 'Our Wedding Celebration';

  const weddingDate = new Date('2026-10-22T09:15:00');

  useEffect(() => {
    if (isAdminRoute()) return;

    preloadImages([...INVITATION_IMAGE_URLS]);
    
    // Preload video
    const videoLink = document.createElement('link');
    videoLink.rel = 'preload';
    videoLink.as = 'video';
    videoLink.href = '/intro.mp4';
    document.head.appendChild(videoLink);
  }, []);

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Dreams Come True - Dylan Carwyn Romantic Wedding Song 2025 (Lyrics) - Dazzling Tunes (128k).mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.preload = 'none';
    }
    return audioRef.current;
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = ensureAudio();
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsMusicPlaying((playing) => !playing);
  }, [ensureAudio, isMusicPlaying]);

  if (isAdminRoute()) {
    return (
      <>
        <Toaster position="top-center" />
        <Admin />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />

      <InvitationContent
        active={true}
        eventParam={eventParam}
        fullInviteeName={fullInviteeName}
        eventLabel={eventLabel}
        weddingDate={weddingDate}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={toggleMusic}
      />
      
      {/* Hidden video to force preload across all devices */}
      <video src="/intro.mp4" preload="auto" muted playsInline style={{ display: 'none' }} />
    </>
  );
}
