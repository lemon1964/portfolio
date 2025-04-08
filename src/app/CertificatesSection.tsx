'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/certificates';

export function CertificatesSection() {
  const [expanded, setExpanded] = useState<'helsinki' | 'stepik' | null>(null);
  const [selected, setSelected] = useState<null | { src: string; title: string }>(null);

  const renderButtons = (data: typeof certificates["helsinki"], category: 'helsinki' | 'stepik') => (
    <AnimatePresence>
      {expanded === category && (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {data.map((cert, index) => (
            <motion.button
              key={index}
              onClick={() => setSelected(cert)}
              whileHover={{ scale: 1.05 }}
              className={`text-sm px-3 py-2 rounded-xl shadow-md transition-colors duration-200 
                ${category === 'helsinki' ? 'bg-green-100 hover:bg-green-200' : 'bg-yellow-100 hover:bg-yellow-200'}
              `}
            >
              {cert.title}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">📜 Курсы и сертификаты</h2>

      <div className="mb-8 border p-4 rounded-2xl shadow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-green-800">University of Helsinki — Full Stack Open</h3>
          <button
            onClick={() => setExpanded(expanded === 'helsinki' ? null : 'helsinki')}
            className="text-sm text-gray-600 hover:text-black"
          >
            {expanded === 'helsinki' ? 'Скрыть' : 'Подробнее'}
          </button>
        </div>
        {renderButtons(certificates.helsinki, 'helsinki')}
      </div>

      <div className="border p-4 rounded-2xl shadow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-yellow-800">Stepik / РФ Платформы</h3>
          <button
            onClick={() => setExpanded(expanded === 'stepik' ? null : 'stepik')}
            className="text-sm text-gray-600 hover:text-black"
          >
            {expanded === 'stepik' ? 'Скрыть' : 'Подробнее'}
          </button>
        </div>
        {renderButtons(certificates.stepik, 'stepik')}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={`/${selected.src}`}
              alt={selected.title}
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


