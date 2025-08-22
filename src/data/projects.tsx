// portfolio/src/data/projects.tsx
export const projects = [
  // --- ЗАМЕНА прежнего AI-Chat на два проекта ---

  {
    name: "🌿 Neira Story",
    url: "https://lemon1964.github.io/ai-chat-ghpages/",
    shortDesc:
      "Интерактивная история ИИ Нейры: сцены, музыка, таймер «Rubicon» и переход на рабочий прод. Сценирование на Next.js + оригинальные AI-изображения.",
    tech: [
      "next",
      "tailwind",
      "django",
    ],
    longDesc:
      "Режиссура и синхронизация: тайминг музыки/звуков, переключение сцен (Layout/FedChat), «Rubicon» (переход на прод), фотокартины (оригинальные AI-иллюстрации). " +
      "Проект — точка входа к развёрнутому фронту/бэку на Render и художественный слой всей экосистемы. " +
      "Служит прологом к проекту «AI-Chat» на Stepik и демо-витриной агрегатора.",
  },

  {
    name: "AI-Chat",
    url: "https://stepik.org/a/250212",
    shortDesc:
      "Курс «AI на Django и Next.js» в двух частях на Stepik: AI-агрегатор (фронт на Next, бэк на Django), авторизация (бэкенд + Google), 11 моделей (текст/код/изображения), голос, деплой на Render/Pages.",
    tech: ["next", "react", "typescript", "django", "python", "tailwind"],
    longDesc:
      "Часть I (бесплатно): архитектура фронта (UI/Features/Services/State/Types), Markdown/Prism, локализация, база под Django. " +
      "Часть II: Django/DRF (viewsets/mixins), JWT/сессии, Google OAuth, RTK Query, динамический список моделей (текст/код/изобр.), голосовой ввод/озвучка, лимиты, деплой на Render + Pages. " +
      "Используются внешние сервисы (OpenRouter/Together/Cloudinary и др.), пошаговый краш-траффик с рабочими снапшотами и финальными архивами.",
  },

  // {
  //   name: "AI-Chat",
  //   url: "https://lemon1964.github.io/ai-chat-ghpages/",
  //   shortDesc: "Многофункциональный чат с генерацией текста, кода и изображений на нейросетях.",
  //   tech: [
  //     "next", // Next.js (фронтенд)
  //     "django", // Django REST Framework (бэкенд)
  //     "tailwind", // Tailwind CSS
  //     "react", // React
  //     "python", // Python
  //     "typescript", // TypeScript
  //     "cloudinary", // внешнее хранилище медиа
  //     "together.ai", // генерация изображений
  //     "openrouter", // генерация текста и кода
  //     "speech", // Web Speech API (STT/TTS)
  //   ],
  //   longDesc:
  //     "Full-stack проект: Next.js + Django REST для мульти-модельного чата (генерация текста, кода и изображений с Cloudinary), поддержка голосового ввода/вывода (Web Speech API + Howler), локализация EN/RU, JWT/Google-аутентификация, демо-режим без входа, лимиты запросов в localStorage, деплой на Render.",
  // },
  {
    name: "Patientor",
    url: "https://patientor-4905.onrender.com/",
    shortDesc: "Мини-EHR система на React и TypeScript для диагностики пациентов.",
    tech: ["react", "typescript", "node"],
    longDesc:
      "Упрощённая версия системы ведения пациентов, вдохновлённая архитектурой финской клиники Terveystalo — крупнейшего частного медпровайдера. Проект включает список пациентов, медкарты, типы диагнозов и добавление записей с формами. Интерфейс построен на MUI, валидация — через Zod, сервер на Express. Поддерживается детализация пациента, типизация записей и интерактивный UI.",
  },
  {
    name: "MySite",
    url: "https://mysite-web-vubo.onrender.com/",
    shortDesc: "Сайт-платформа с блогом, курсами, магазином и галереей.",
    tech: ["django", "tailwind", "react", "python"],
    longDesc:
      "Проект-экосистема из 4 Django-приложений: блог статей, онлайн-курсы с drag & drop модулями и чатами, интернет-магазин со Stripe Checkout и PDF-инвойсами, галерея с social-функциями и букмарклетом. Включает продвинутую аутентификацию (включая Google), интернационализацию, асинхронную обработку через Celery, Redis и WebSocket (Channels). Продакшн-версия — на Docker с полным DevOps-циклом.",
  },
  {
    name: "Kid",
    url: "https://kid-front.onrender.com/",
    shortDesc: "Интерактивный детский портал с играми, викторинами, мультфильмами и оплатой.",
    tech: ["next", "django", "tailwind", "react"],
    longDesc:
      "Образовательный проект с заданиями для детей: drag & drop, раскраски и загадки на Pixi.js, викторины, а также секция мультфильмов с голосовым вводом и автоматическим показом. Есть поддержка аудио, мультиязычность, озвучка, интеграция с YouTube, а также оплата через Stripe и ЮKassa. Авторизация — allauth + next-auth. Использованы GSAP, Redux Toolkit, Rive, Pixi, DnD и framer-motion. Интуитивный интерфейс адаптирован под детей и работает на мобильных.",
  },
  {
    name: "React Movies",
    url: "https://lemon1964.github.io/react-movies/",
    shortDesc: "Эмуляция поисковика фильмов и сериалов с OMDb API.",
    tech: ["react"],
    longDesc:
      "SPA-приложение для поиска фильмов и сериалов с фильтрацией по типу (фильмы/сериалы) и переходом на подробную страницу на IMDb. Данные получаются через OMDb API. Использован Materialize CSS и React JS.",
  },
  {
    name: "React Food",
    url: "https://lemon1964.github.io/react-food/",
    shortDesc: "Кулинарная книга с рецептами по API TheMealDB (сейчас только с vpn).",
    tech: ["react"],
    longDesc:
      "Одностраничное приложение с поиском блюд по названию и категориям. Для каждого блюда доступен способ приготовления, рецепт и видео. Использован React Router и Materialize CSS.",
  },
  {
    name: "React Shop",
    url: "https://lemon1964.github.io/react-shop/",
    shortDesc: "Магазин с товарами и корзиной на основе Fortnite API.",
    tech: ["react"],
    longDesc:
      "Галерея товаров с полной информацией, добавлением в корзину и управлением позициями. Использованы React Context, useReducer и Materialize CSS.",
  },
  {
    name: "Pokedex",
    url: "https://full-stack-open-pokedex-op08.onrender.com/",
    shortDesc: "Приложение с покемонами и CI/CD пайплайном.",
    tech: ["react", "node"],
    longDesc:
      "Поиск и отображение покемонов. Реализован CI/CD пайплайн на GitHub Actions, сборка, линтинг, Playwright-тесты, хелсчеки, хуки и автоматический деплой на Render.",
  },
  {
    name: "Blogs",
    url: "https://blogs-jaml.onrender.com/",
    shortDesc: "Фуллстек-приложение для ведения блогов и книг.",
    tech: ["react", "node"],
    longDesc:
      "Проект на Vite + Express: список блогов и книг, авторы, комментарии, лайки, пользовательская аутентификация, Redux Toolkit. Развертывание через CI/CD пайплайн с Playwright-тестами, линтером и хуками. Backend — Node.js + MongoDB, frontend — React + styled-components.",
  },
];
