# CryptoTrade Hub (MPM) - Платформа для трейдинга криптовалютой

[![Vercel Deployment](https://img.shields.io/badge/deployed_on-vercel-black?logo=vercel)](https://cryptotrade-hub.vercel.app)
![React](https://img.shields.io/badge/react-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue?logo=typescript)

Полнофункциональная платформа для мониторинга и торговли криптовалютами с реальными данными, графиками и безопасной аутентификацией.

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

| Категория        | Технологии                                                                 |
|------------------|----------------------------------------------------------------------------|
| **Frontend**     | ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-7.0.0-B73BFE?logo=vite) |
| **State**        | ![Zustand](https://img.shields.io/badge/Zustand-5.0.6-764ABC) ![React Query](https://img.shields.io/badge/React_Query-5.81.5-FF4154?logo=reactquery) |
| **Стилизация**   | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-06B6D4?logo=tailwindcss) ![Tailwind Merge](https://img.shields.io/badge/Tailwind_Merge-3.3.1-38BDF8) ![clsx](https://img.shields.io/badge/clsx-2.1.1-4D4D4D) |
| **Роутинг**      | ![React Router](https://img.shields.io/badge/React_Router-7.6.3-CA4245?logo=reactrouter) |
| **Формы**        | ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.59.0-EC5990) ![React Select](https://img.shields.io/badge/React_Select-5.10.1-FF4785) |
| **Визуализация** | ![Chart.js](https://img.shields.io/badge/Chart.js-4.5.0-FF6384?logo=chartdotjs) ![Swiper](https://img.shields.io/badge/Swiper-11.2.10-6332F6?logo=swiper) |
| **Анимация**     | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.19.2-0055FF?logo=framer) |
| **API клиент**   | ![Axios](https://img.shields.io/badge/Axios-1.10.0-5A29E4?logo=axios) |
| **Уведомления**  | ![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-2.5.2-333333?logo=react) |
| **Иконки**       | ![Lucide](https://img.shields.io/badge/Lucide-0.525.0-333333?logo=lucide) |

**Дополнительные инструменты:**
- ![ESLint](https://img.shields.io/badge/ESLint-9.30.0-4B32C3?logo=eslint)
- ![Prettier](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?logo=prettier)
- ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)

## 📂 Структура проекта

| Директория/Файл       | Назначение                                                                 | Примеры содержимого |
|-----------------------|---------------------------------------------------------------------------|---------------------|
| **api/**              | Внешние API запросы                                                       | `interceptors.ts` |
| **assets/**           | Статические ресурсы                                                       | Иконки, изображения, шрифты |
| **components/**       | Общие UI компоненты                                                       | `Button.tsx`, `FormInput.tsx` |
| **constants/**        | Константы приложения                                                      | `api.constants.ts`, `enums.constants.ts` |
| **features/**         | Бизнес-фичи (организованы по feature-sliced)                              | |
| ┣━ **auth/**          | Модуль аутентификации                                                     | |
| ┃ ┣━ components/      | Компоненты фичи                                                           | `LoginForm.tsx` |
| ┃ ┣━ hooks/           | Локальные хуки                                                            | `useAuth.ts` |
| ┃ ┣━ services/        | Логика и API                                                              | `login.service.ts`, `types.ts` |
| ┃ ┣━ types.ts         | Типы данных этой  (DTO, модели, интерфейсы)                               | |  
| ┃ ┗━ index.ts         | Сервисы, API-запросы фичи                                                 | |
| **hooks/**            | Глобальные хуки                                                           | `useTheme.ts`, `useMediaQuery.ts` |
| **pages/**            | Страницы приложения                                                       | `DashboardPage.tsx` |
| **providers/**        | Провайдеры контекстов                                                     | `AuthProvider.tsx` |
| **routes/**           | Конфигурация маршрутизации                                                | `router.config.ts` |
| **shared/**           | Общие ресурсы                                                             | |
| ┣━ **data/**          | Моки                                                                      | `market.data.ts` |
| ┗━ **types/**         | Глобальные типы                                                           | `index.types.ts` |
| **store/**            | Состояние (Zustand)                                                       | `сompareStore.ts`, `themeStore.ts` |
| **utils/**            | Вспомогательные утилиты                                                   | `dateFormatter.ts` |
| **main.tsx**          | Точка входа приложения                                                    | Инициализация React |
