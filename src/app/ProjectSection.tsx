"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiNextdotjs } from "react-icons/si";
import { projects } from "../data/projects";

const techIcons = {
  react: <FaReact title="React" />,
  tailwind: <SiTailwindcss title="Tailwind CSS" />,
  node: <FaNodeJs title="Node.js" />,
  python: <FaPython title="Python" />,
  django: <SiDjango title="Django" />,
  next: <SiNextdotjs title="Next.js" />,
};

type TechKey = keyof typeof techIcons;

export function ProjectSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-4">🧪 Проекты</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} layout className="p-4 border rounded-2xl shadow">
            <div className="flex justify-between items-center">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {project.name}
              </a>
              <button
                onClick={() => handleToggle(index)}
                className="text-sm text-gray-500 hover:text-black"
              >
                {expanded === index ? "Скрыть" : "Подробнее"}
              </button>
            </div>
            <p className="text-gray-700 mt-2">{project.shortDesc}</p>
            <div className="flex gap-2 mt-2 text-xl">
              {project.tech.map((tech, i) => (
                <span key={i}>{techIcons[tech as TechKey]}</span>
              ))}
            </div>
            <AnimatePresence>
              {expanded === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-600"
                >
                  {project.longDesc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
