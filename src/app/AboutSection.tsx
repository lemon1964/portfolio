'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">🧩 Немного о себе</h2>

      <div className="border p-4 rounded-2xl shadow">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-base">🎂 60 лет, Москва</p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-gray-600 hover:text-black"
          >
            {expanded ? 'Скрыть' : 'Подробнее'}
          </button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-4 space-y-3 text-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p>🎯 <strong>Интересы:</strong> программирование, музыка, философия, витражи</p>
              <p>🧭 <strong>Цель:</strong> участие в интересном проекте, полное переключение на разработку</p>
              <p>
                🎨 <strong>Доход сейчас:</strong>{' '}
                <a
                  href="https://instagram.com/lemondesignshop?igshid=YWJhMjlhZTc="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @lemondesignshop
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}