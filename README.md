# Простий блог на Node.js, Express та React

Лабораторна робота №2 з дисципліни «Високорівневі мови програмування та фреймворки».

## Опис

Проєкт демонструє базову взаємодію серверної частини на Node.js/Express та клієнтської частини на React.

Сервер надає API-маршрути:

- `/api/health` — перевірка роботи сервера;
- `/api/articles` — отримання списку статей у форматі JSON.

React-сторінка завантажує статті через `fetch()` та відображає їх у вигляді карток.

## Структура проєкту

```text
lb2-express-react-blog/
├── data/
│   └── articles.json
├── public/
│   ├── index.html
│   └── styles.css
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Запуск проєкту

Встановити залежності:

```bash
npm install
```

Запустити сервер:

```bash
npm start
```

Після запуску відкрити у браузері:

```text
http://localhost:3000
```

API зі статтями:

```text
http://localhost:3000/api/articles
```

## Використані технології

- Node.js
- Express
- React
- HTML
- CSS
- JSON
