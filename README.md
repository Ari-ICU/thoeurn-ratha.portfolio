Next.js Project

This is a Next.js project bootstrapped with `create-next-app`.

It includes a contact form that sends messages to Telegram and is fully optimized for Vercel deployment.

---

Getting Started

1. Install dependencies

npm install
# or
yarn install
# or
pnpm install

2. Run the development server

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

---

Environment Variables

This project uses environment variables for secrets such as Telegram bot token and chat ID.  

Create a .env.local or .env file in the root of your project:

TELEGRAM_BOT_TOKEN=your_bot_token_here
# Thoeurn Ratha — Personal Portfolio

This repository is a personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It showcases projects, a resume section, services, and a contact form that can send messages directly to Telegram.

The app is optimized for deployment on Vercel but works locally with the standard Next.js development workflow.

## Features

- Modern Next.js (App Router) + TypeScript setup
- Tailwind CSS for utility-first styling
- Responsive, accessible components (Header, Footer, Hero, Projects, Resume, Contact)
- Contact form that posts messages to Telegram using a bot (serverless route)
- Optimized images in `public/` for each project

## Quickstart

1. Install dependencies

```bash
npm install
# or
pnpm install
```

2. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open http://localhost:3000 in your browser.

You can edit pages under `src/app/` and components under `src/components/`.

## Environment variables

The contact form sends messages to Telegram. Provide the following environment variables for local development in a `.env.local` file (do not commit this file):

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

Notes
- The repository contains a server route at `src/app/api/sendTelegramMessage/route.ts` used to forward contact form submissions to the Telegram API — ensure the variables above are available to that route.
- For production on Vercel, add the same variables in your Project Settings > Environment Variables.

## Development notes

- TypeScript is configured in `tsconfig.json`. Run `npx tsc --noEmit` to check types.
- ESLint can be run with `npm run lint`. If ESLint prompts for configuration the first time, choose the settings you prefer (or I can add a default config if you want).

## Deployment

This project is ready for Vercel. To deploy:

1. Push to GitHub
2. Import the repository at https://vercel.com/new
3. Add the environment variables (`NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`, `NEXT_PUBLIC_TELEGRAM_CHAT_ID`) in the Vercel dashboard
4. Deploy — Vercel will build and host the app automatically

## Contact form behavior

- The contact form validates inputs client-side and then sends the message via the Telegram bot endpoint.
- If you want to change the destination (e.g., email, other webhook), update `src/app/api/sendTelegramMessage/route.ts` and the form component in `src/components/contact/ContactForm.tsx`.

## Contributing

If you'd like to contribute or request changes, open an issue or send a pull request. Keep changes small and focused.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
