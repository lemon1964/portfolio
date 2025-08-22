# Документация по проекту Portfolio

## Общее описание

Лендинг портфолио на Next.js 15 App Router + TailwindCSS, с разверткой на GitHub Pages.

**Структура сайта:**
- 📄 Краткая информация о себе
- 📄 Проекты (ProjectSection)
- 📄 Сертификаты (CertificatesSection)
- 📄 Блок обо мне (AboutSection)
- 📌 Контакты

---

## Ссылки mailto: и WhatsApp

```jsx
<a href="mailto:lemon.design@mail.ru">...</a>
<a href="https://wa.me/79991234567">...</a>
```
- `mailto:` открывает почтовый клиент
- `wa.me` ссылка для открытия WhatsApp chat

---

## framer-motion: AnimatePresence + motion.div

### Раскрытие project.longDesc:
```tsx
<AnimatePresence>
  {expanded === index && (
    <motion.p
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      {project.longDesc}
    </motion.p>
  )}
</AnimatePresence>
```
- `AnimatePresence` обеспечивает анимацию удаления
- `motion.p` при раскрытии/скрытии описания

### Общая логика `expanded`
```tsx
const [expanded, setExpanded] = useState<number | null>(null);

const handleToggle = (index: number) => {
  setExpanded(expanded === index ? null : index);
};
```
- Управляет отображением `longDesc`

---

## AudioToggle

```tsx
useEffect(() => {
  audioRef.current = new Audio("music.mp3");
  audioRef.current.loop = true;
  const tryPlay = () => {
    if (audioRef.current && !playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  document.body.addEventListener("click", tryPlay, { once: true });
  return () => document.body.removeEventListener("click", tryPlay);
}, []);
```
- Автозапуск по первому клику (обход Chrome)
- `audioRef` сохраняет HTMLAudioElement
- Клик на кнопку вкл/выкл звука

---

## Деплой GitHub Pages: особенности

- Настройка `next.config.js`:
```ts
output: 'export',
basePath: '/portfolio',
assetPrefix: '/portfolio/',
```
- Создан `.env.production`
```env
NEXT_PUBLIC_BASE_PATH=portfolio/
```
- Код из `NEXT_PUBLIC_BASE_PATH` используется в src для музыки и изображений:
```ts
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
```
- Важно: **следить чтобы пути были без двойных слэшей**. Например:
```ts
{ src: `${base}certificates/GraphQL.png` }
```
А не:
```ts
{ src: `${base}/certificates/GraphQL.png` } // Это не сработает
```

### GITHUB_TOKEN
- Добавлять не надо, GitHub автоматом его доставляет
- Путем `secrets.GITHUB_TOKEN`

---

## Классные идеи для прочих проектов

- Совмещение motion + AnimatePresence для toggle-UI
- Автозапуск музыки по клику (обход блокировок браузеров)
- Кликабельные кнопки-иконки для UI
- Простой фреймворк для deploy с поддержкой static export + basePath

---

> Сайт: https://lemon1964.github.io/portfolio/

---

📕 Проект by Lemon & ChatGPT

