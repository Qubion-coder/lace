import { useState, useRef } from 'react';
import { Play } from 'lucide-react';

export function IntroVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-white relative overflow-hidden flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-6 cursor-pointer relative group" onClick={togglePlay}>
        <video
          ref={videoRef}
          src="/intro.mp4"
          className="w-full rounded-2xl shadow-[0_8px_30px_rgba(176,137,104,0.15)] object-cover"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
}
