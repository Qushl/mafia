# Полночь

Сайт агентства игровых вечеров на Next.js + Payload CMS.

## Что в проекте

- Next.js 15 + App Router
- Payload CMS для контента и админки
- PostgreSQL через `@payloadcms/db-postgres`
- Заявки сохраняются в коллекцию Payload `leads`
- Telegram-уведомления для новых заявок
- Сайт-страница с блоками: герой, форматы, ведущие, отзывы, галерея, цены

## Быстрый старт

1. Установите зависимости:

```bash
npm install
```

2. Создайте `.env.local` на основе переменных окружения проекта:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/polnoch
PAYLOAD_SECRET=change-me
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
```

3. Запустите dev-сервер:

```bash
npm run dev
```

4. Откройте:

```text
http://localhost:3000
```

## Полезные команды

```bash
npm run build
npm run lint
npm run dev
```

## CMS

Payload-админка доступна по URL:

```text
http://localhost:3000/admin
```

Контент хранится в коллекциях: `media`, `hosts`, `tariffs`, `event-types`, `reviews`, `gallery`, `leads`.

## Важные замечания

- `.env*` уже добавлен в `.gitignore`.
- Не храните секреты в репозитории и не коммитьте `.env.local`.
- В проекте используется Payload как единственный источник записей по заявкам.
