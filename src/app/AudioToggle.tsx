'use client';

import { useEffect, useRef, useState } from 'react';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(`${base}/music.mp3`);
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true;

    const tryPlay = () => {
      if (audioRef.current && !playing) {
        audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      }
    };

    document.body.addEventListener('click', tryPlay, { once: true });
    return () => document.body.removeEventListener('click', tryPlay);
  }, [playing]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-4 right-4 z-50 text-2xl hover:scale-110 transition-transform"
      title={playing ? 'Выключить музыку' : 'Включить музыку'}
    >
      {playing ? '🔊' : '🔇'}
    </button>
  );
}
