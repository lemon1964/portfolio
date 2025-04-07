export const projects = [
    {
      name: "Kid",
      url: "https://kid-front.onrender.com/",
      shortDesc: "Интерактивный детский портал с играми, викторинами и оплатой.",
      tech: ["next", "django", "tailwind", "react"],
      longDesc:
        "Образовательный проект с заданиями для детей: drag & drop, раскраски и загадки на Pixi.js, викторины. Поддержка аудио, мультиязычность, уведомления. Оплата через Stripe и ЮKassa. Авторизация — allauth + next-auth. Использованы GSAP, Redux Toolkit, Rive, Pixi, DnD.",
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
        "Проект из Full Stack Open с поиском и отображением покемонов. Реализован CI/CD пайплайн на GitHub Actions, сборка, линтинг, Playwright-тесты, хелсчеки, хуки и автоматический деплой на Render.",
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