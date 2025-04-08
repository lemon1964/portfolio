"use client";

import { useEffect, useRef, useState } from "react";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("music.mp3");
    audioRef.current.loop = true;
    const tryPlay = () => {
      if (audioRef.current && !playing) {
        audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      }
    };

    document.body.addEventListener('click', tryPlay, { once: true });
    return () => document.body.removeEventListener('click', tryPlay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow hover:scale-110 transition-transform"
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}
