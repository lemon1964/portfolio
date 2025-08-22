"use client";

import { useEffect, useRef, useState } from "react";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Инициализация аудио и автозапуск по первому клику
  useEffect(() => {
    audioRef.current = new Audio("way-home.mp3");
    audioRef.current.loop = true;

    const tryPlay = () => {
      if (audioRef.current && !playing) {
        audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      }
    };

    document.body.addEventListener("click", tryPlay, { once: true });
    return () => document.body.removeEventListener("click", tryPlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Единая функция остановки
  const stopAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
  };

  // Глобально ловим внешние переходы + смену видимости/уход со страницы
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href") || "";
      if (!href) return;

      // спец-схемы: mailto:, tel:, sms:, etc.
      const isSpecialScheme =
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("sms:");

      let isExternal = false;
      try {
        const url = new URL(href, window.location.href);
        isExternal = url.origin !== window.location.origin;
      } catch {
        // относительные или якоря — игнор
      }

      if (isSpecialScheme || isExternal) {
        // Остановим музыку мгновенно, ещё до навигации/открытия новой вкладки
        stopAudio();
      }
    };

    const onPageHide = () => stopAudio();
    const onBeforeUnload = () => stopAudio();
    const onVisibilityChange = () => {
      if (document.hidden) stopAudio();
    };

    // capture=true — чтобы сработать до перехода
    document.addEventListener("click", onDocClick, true);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("beforeunload", onBeforeUnload);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("click", onDocClick, true);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("beforeunload", onBeforeUnload);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      stopAudio();
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow hover:scale-110 transition-transform"
      aria-label={playing ? "Выключить музыку" : "Включить музыку"}
      title={playing ? "Выключить музыку" : "Включить музыку"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// export function AudioToggle() {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [playing, setPlaying] = useState(false);

//   useEffect(() => {
//     audioRef.current = new Audio("way-home.mp3");
//     audioRef.current.loop = true;
//     const tryPlay = () => {
//       if (audioRef.current && !playing) {
//         audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
//       }
//     };

//     document.body.addEventListener('click', tryPlay, { once: true });
//     return () => document.body.removeEventListener('click', tryPlay);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const toggleAudio = () => {
//     if (!audioRef.current) return;

//     if (playing) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     } else {
//       audioRef.current.play().catch(() => {});
//     }

//     setPlaying(!playing);
//   };

//   return (
//     <button
//       onClick={toggleAudio}
//       className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow hover:scale-110 transition-transform"
//     >
//       {playing ? "🔊" : "🔇"}
//     </button>
//   );
// }
