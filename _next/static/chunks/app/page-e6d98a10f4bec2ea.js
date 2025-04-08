(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1281:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var c=s(5155),i=s(2115);function a(){let e=(0,i.useRef)(null),[t,s]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{e.current=new Audio("music.mp3"),e.current.loop=!0;let c=()=>{e.current&&!t&&e.current.play().then(()=>s(!0)).catch(()=>{})};return document.body.addEventListener("click",c,{once:!0}),()=>document.body.removeEventListener("click",c)},[]),(0,c.jsx)("button",{onClick:()=>{e.current&&(t?(e.current.pause(),e.current.currentTime=0):e.current.play().catch(()=>{}),s(!t))},className:"fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow hover:scale-110 transition-transform",children:t?"\uD83D\uDD0A":"\uD83D\uDD07"})}var n=s(6413),l=s(760),r=s(9911),o=s(9432);let h=[{name:"Kid",url:"https://kid-front.onrender.com/",shortDesc:"Интерактивный детский портал с играми, викторинами и оплатой.",tech:["next","django","tailwind","react"],longDesc:"Образовательный проект с заданиями для детей: drag & drop, раскраски и загадки на Pixi.js, викторины. Поддержка аудио, мультиязычность, уведомления. Оплата через Stripe и ЮKassa. Авторизация — allauth + next-auth. Использованы GSAP, Redux Toolkit, Rive, Pixi, DnD."},{name:"MySite",url:"https://mysite-web-vubo.onrender.com/",shortDesc:"Сайт-платформа с блогом, курсами, магазином и галереей.",tech:["django","tailwind","react","python"],longDesc:"Проект-экосистема из 4 Django-приложений: блог статей, онлайн-курсы с drag & drop модулями и чатами, интернет-магазин со Stripe Checkout и PDF-инвойсами, галерея с social-функциями и букмарклетом. Включает продвинутую аутентификацию (включая Google), интернационализацию, асинхронную обработку через Celery, Redis и WebSocket (Channels). Продакшн-версия — на Docker с полным DevOps-циклом."},{name:"React Movies",url:"https://lemon1964.github.io/react-movies/",shortDesc:"Эмуляция поисковика фильмов и сериалов с OMDb API.",tech:["react"],longDesc:"SPA-приложение для поиска фильмов и сериалов с фильтрацией по типу (фильмы/сериалы) и переходом на подробную страницу на IMDb. Данные получаются через OMDb API. Использован Materialize CSS и React JS."},{name:"React Food",url:"https://lemon1964.github.io/react-food/",shortDesc:"Кулинарная книга с рецептами по API TheMealDB (сейчас только с vpn).",tech:["react"],longDesc:"Одностраничное приложение с поиском блюд по названию и категориям. Для каждого блюда доступен способ приготовления, рецепт и видео. Использован React Router и Materialize CSS."},{name:"React Shop",url:"https://lemon1964.github.io/react-shop/",shortDesc:"Магазин с товарами и корзиной на основе Fortnite API.",tech:["react"],longDesc:"Галерея товаров с полной информацией, добавлением в корзину и управлением позициями. Использованы React Context, useReducer и Materialize CSS."},{name:"Pokedex",url:"https://full-stack-open-pokedex-op08.onrender.com/",shortDesc:"Приложение с покемонами и CI/CD пайплайном.",tech:["react","node"],longDesc:"Проект из Full Stack Open с поиском и отображением покемонов. Реализован CI/CD пайплайн на GitHub Actions, сборка, линтинг, Playwright-тесты, хелсчеки, хуки и автоматический деплой на Render."},{name:"Blogs",url:"https://blogs-jaml.onrender.com/",shortDesc:"Фуллстек-приложение для ведения блогов и книг.",tech:["react","node"],longDesc:"Проект на Vite + Express: список блогов и книг, авторы, комментарии, лайки, пользовательская аутентификация, Redux Toolkit. Развертывание через CI/CD пайплайн с Playwright-тестами, линтером и хуками. Backend — Node.js + MongoDB, frontend — React + styled-components."}],d={react:(0,c.jsx)(r.rMV,{title:"React"}),tailwind:(0,c.jsx)(o.IR8,{title:"Tailwind CSS"}),node:(0,c.jsx)(r.lbi,{title:"Node.js"}),python:(0,c.jsx)(r.ivP,{title:"Python"}),django:(0,c.jsx)(o.weV,{title:"Django"}),next:(0,c.jsx)(o.wlC,{title:"Next.js"})};function x(){let[e,t]=(0,i.useState)(null),s=s=>{t(e===s?null:s)};return(0,c.jsxs)("section",{className:"max-w-4xl mx-auto py-6",children:[(0,c.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"\uD83E\uDDEA Проекты"}),(0,c.jsx)("div",{className:"grid gap-6",children:h.map((t,i)=>(0,c.jsxs)(n.P.div,{layout:!0,className:"p-4 border rounded-2xl shadow",children:[(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"text-xl font-semibold text-blue-600 hover:underline",children:t.name}),(0,c.jsx)("button",{onClick:()=>s(i),className:"text-sm text-gray-500 hover:text-black",children:e===i?"Скрыть":"Подробнее"})]}),(0,c.jsx)("p",{className:"text-gray-700 mt-2",children:t.shortDesc}),(0,c.jsx)("div",{className:"flex gap-2 mt-2 text-xl",children:t.tech.map((e,t)=>(0,c.jsx)("span",{children:d[e]},t))}),(0,c.jsx)(l.N,{children:e===i&&(0,c.jsx)(n.P.p,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-4 text-gray-600",children:t.longDesc})})]},i))})]})}let m="portfolio/",u={helsinki:[{src:"".concat(m,"certificates/CI:CD.png"),title:"CI/CD"},{src:"".concat(m,"certificates/Containers.png"),title:"Containers"},{src:"".concat(m,"certificates/GraphQL.png"),title:"GraphQL"},{src:"".concat(m,"certificates/React-Native.png"),title:"React Native"},{src:"".concat(m,"certificates/Relational-Databases.png"),title:"Relational Databases"},{src:"".concat(m,"certificates/TypeScript.png"),title:"TypeScript"},{src:"".concat(m,"certificates/Full-Stack-Open-Base.png"),title:"Basic course"}],stepik:[{src:"".concat(m,"certificates/React.png"),title:"React"},{src:"".concat(m,"certificates/Django.png"),title:"Django"},{src:"".concat(m,"certificates/Docker.png"),title:"Docker"},{src:"".concat(m,"certificates/Python-ООП.png"),title:"Python ООП"},{src:"".concat(m,"certificates/Git.png"),title:"Git"},{src:"".concat(m,"certificates/Pandas.png"),title:"Pandas"},{src:"".concat(m,"certificates/Практикум-математике-Python.png"),title:"Математика + Python"},{src:"".concat(m,"certificates/JavaScript.png"),title:"JavaScript"},{src:"".concat(m,"certificates/HTML-CSS-JS.png"),title:"HTML / CSS / JS"},{src:"".concat(m,'certificates/"Поколение-Python"-начинающих.png'),title:"Beegeek Python – начинающие"},{src:"".concat(m,'certificates/"Поколение-Python"-продвинутых.png'),title:"Beegeek Python – продвинутые"},{src:"".concat(m,'certificates/"Поколение-Python"-профессионалов.png'),title:"Beegeek Python – профессионалы"},{src:"".concat(m,"certificates/Инди-курс-Python.png"),title:"Инди Python"}]};function p(){let[e,t]=(0,i.useState)(null),[s,a]=(0,i.useState)(null),r=(t,s)=>(0,c.jsx)(l.N,{children:e===s&&(0,c.jsx)(n.P.div,{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:t.map((e,t)=>(0,c.jsx)(n.P.button,{onClick:()=>a(e),whileHover:{scale:1.05},className:"text-sm px-3 py-2 rounded-xl shadow-md transition-colors duration-200 \n                ".concat("helsinki"===s?"bg-green-100 hover:bg-green-200":"bg-yellow-100 hover:bg-yellow-200","\n              "),children:e.title},t))})});return(0,c.jsxs)("section",{className:"max-w-4xl mx-auto py-8",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"\uD83D\uDCDC Курсы и сертификаты"}),(0,c.jsxs)("div",{className:"mb-8 border p-4 rounded-2xl shadow",children:[(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("h3",{className:"text-lg font-semibold text-green-800",children:"University of Helsinki — Full Stack Open"}),(0,c.jsx)("button",{onClick:()=>t("helsinki"===e?null:"helsinki"),className:"text-sm text-gray-600 hover:text-black",children:"helsinki"===e?"Скрыть":"Подробнее"})]}),r(u.helsinki,"helsinki")]}),(0,c.jsxs)("div",{className:"border p-4 rounded-2xl shadow",children:[(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("h3",{className:"text-lg font-semibold text-yellow-800",children:"Stepik / РФ Платформы"}),(0,c.jsx)("button",{onClick:()=>t("stepik"===e?null:"stepik"),className:"text-sm text-gray-600 hover:text-black",children:"stepik"===e?"Скрыть":"Подробнее"})]}),r(u.stepik,"stepik")]}),(0,c.jsx)(l.N,{children:s&&(0,c.jsx)(n.P.div,{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(null),children:(0,c.jsx)(n.P.img,{src:"/".concat(s.src),alt:s.title,className:"max-h-[90vh] max-w-[90vw] rounded-xl",initial:{scale:.8},animate:{scale:1},exit:{scale:.8}})})})]})}function g(){let[e,t]=(0,i.useState)(!1);return(0,c.jsxs)("section",{className:"max-w-4xl mx-auto py-8",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"\uD83E\uDDE9 Немного о себе"}),(0,c.jsxs)("div",{className:"border p-4 rounded-2xl shadow",children:[(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("p",{className:"text-gray-700 text-base",children:"\uD83C\uDF82 60 лет, Москва"}),(0,c.jsx)("button",{onClick:()=>t(!e),className:"text-sm text-gray-600 hover:text-black",children:e?"Скрыть":"Подробнее"})]}),(0,c.jsx)(l.N,{children:e&&(0,c.jsxs)(n.P.div,{className:"mt-4 space-y-3 text-gray-800",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[(0,c.jsxs)("p",{children:["\uD83C\uDFAF ",(0,c.jsx)("strong",{children:"Интересы:"})," программирование, музыка, философия, витражи"]}),(0,c.jsxs)("p",{children:["\uD83E\uDDED ",(0,c.jsx)("strong",{children:"Цель:"})," участие в интересном проекте, полное переключение на разработку"]}),(0,c.jsxs)("p",{children:["\uD83C\uDFA8 ",(0,c.jsx)("strong",{children:"Доход сейчас:"})," ",(0,c.jsx)("a",{href:"https://instagram.com/lemondesignshop?igshid=YWJhMjlhZTc=",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"@lemondesignshop"})]})]})})]})]})}function j(){return(0,c.jsxs)("main",{className:"min-h-screen bg-white text-gray-800 p-6",children:[(0,c.jsx)(a,{}),(0,c.jsx)("section",{className:"max-w-3xl mx-auto text-center py-10",children:(0,c.jsx)("p",{className:"text-lg text-gray-600",children:"Создаю проекты на React, Django и Next.js просто потому, что мне нравится это делать."})}),(0,c.jsx)(x,{}),(0,c.jsx)(p,{}),(0,c.jsx)(g,{}),(0,c.jsxs)("section",{className:"max-w-2xl mx-auto mt-10 border-t pt-6",children:[(0,c.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Контакты"}),(0,c.jsxs)("p",{children:["Email:"," ",(0,c.jsx)("a",{href:"mailto:lemon.design@mail.ru",className:"text-blue-600",children:"lemon.design@mail.ru"})]}),(0,c.jsxs)("p",{children:["WhatsApp:"," ",(0,c.jsx)("a",{href:"https://wa.me/79991234567",className:"text-blue-600",children:"+7 (916) 250-23-46"})]})]})]})}},3964:(e,t,s)=>{Promise.resolve().then(s.bind(s,1281))}},e=>{var t=t=>e(e.s=t);e.O(0,[362,711,255,441,684,358],()=>t(3964)),_N_E=e.O()}]);