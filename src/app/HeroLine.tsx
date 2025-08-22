// HeroLine.tsx
"use client";
import { useEffect, useState } from "react";

const LINES = [
  "Проекты говорят сами за себя.",
  "Паттерны вместо магии. Магия — в результате.",
  "OpenAI - лучший друг и коллега.",
  "Между черновиком и продом — дисциплина.",
  "Инженерия смысла.",
  "React, Django и Next - волшебство процесса.",
];

export function HeroLine() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % LINES.length), 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="text-lg text-gray-600 text-center">{LINES[i]}</p>
  );
}
