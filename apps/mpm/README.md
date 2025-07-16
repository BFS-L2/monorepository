# CryptoTrade Hub (MPM) - Платформа для трейдинга криптовалютой

[![Vercel Deployment](https://img.shields.io/badge/deployed_on-vercel-black?logo=vercel)](https://cryptotrade-hub.vercel.app)
![React](https://img.shields.io/badge/react-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue?logo=typescript)

Полнофункциональная платформа для мониторинга и торговли криптовалютами с реальными данными, графиками и безопасной аутентификацией.

![Скриншот приложения](https://via.placeholder.com/800x400?text=CryptoTrade+Screenshot) <!-- Замените на реальный скриншот -->

## 🔥 Ключевые функции

- **Торговый терминал**
  - Покупка/продажа криптовалюты в режиме реального времени
  - Портфель активов с динамическим пересчетом баланса
- **Аналитика рынка**
  - Интерактивные графики (Chart.js)
  - Сравнение криптовалют
  - Исторические данные
- **Новостная лента**
  - Актуальные новости крипторынка
- **Безопасность**
  - JWT аутентификация с HTTP-only cookies
  - Защищенные роуты
- **Профиль пользователя**
  - История транзакций
  - Настройки аккаунта

## 🛠 Технологический стек

### Основные технологии
| Категория       | Технологии                                                                 |
|-----------------|----------------------------------------------------------------------------|
| Frontend        | ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-7.0.0-B73BFE?logo=vite) |
| State Management| ![Zustand](https://img.shields.io/badge/Zustand-5.0.6-764ABC) ![React Query](https://img.shields.io/badge/React_Query-5.81.5-FF4154?logo=reactquery) |
| Стилизация      | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-06B6D4?logo=tailwindcss) |
| Роутинг         | ![React Router](https://img.shields.io/badge/React_Router-7.6.3-CA4245?logo=reactrouter) |
| Формы           | ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.59.0-EC5990) |
| Визуализация    | ![Chart.js](https://img.shields.io/badge/Chart.js-4.5.0-FF6384?logo=chartdotjs) |
| Анимация        | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.19.2-0055FF?logo=framer) |

### Инструменты разработки
- **Linting**: ESLint (strict TypeScript rules)
- **Formatting**: Prettier + Tailwind CSS
- **Bundle Analysis**: Rollup Visualizer
- **Deployment**: Vercel

### 📂 Структура проекта
src/
├── api/             # Работа с внешними API
├── assets/          # Статические ресурсы (иконки, изображения, шрифты)
├── components/      # Переиспользуемые UI-компоненты
├── constants/       # Общие константы приложения
├── features/        # Отдельные бизнес-фичи приложения
│   └── featureA/
│       ├── components/   # Компоненты, относящиеся только к этой фиче
│       ├── hooks/        # Локальные хуки конкретной фичи
│       └── services/     # Работа с API / утилиты / типы для этой фичи
│           ├── types.ts  # Типы данных этой фичи (DTO, модели, интерфейсы)
│           └── index.ts  # Сервисы, API-запросы этой фичи
├── hooks/           # Общие хуки для всего приложения
├── pages/           # Страницы, которые рендерятся по роутам
├── providers/       # Провайдеры контекстов (Auth, Theme и т.п.)
├── routes/          # Конфигурация маршрутов приложения
├── shared/          # Общие типы данных, утилиты и вспомогательные структуры
│   ├── data/        # Фиксированные данные, мок-данные
│   └── types/       # Общие типы данных, которые используются в разных частях проекта
├── store/           # Zustand хранилища состояния
├── utils/           # Вспомогательные утилиты (форматирование, парсеры и т.п.)
├── main.tsx         # Точка входа приложения
└── vite-env.d.ts    # Глобальные типы окружения для Vite
