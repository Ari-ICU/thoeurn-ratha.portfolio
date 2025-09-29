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

Create a .env.local file in the root of your project:

TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

Important: Do not commit .env.local to GitHub. It is ignored by default via .gitignore.

---

Fonts

This project uses next/font to automatically optimize and load Geist, a font family from Vercel.

---

Learn More

To learn more about Next.js, check out the following resources:

- Next.js Documentation - https://nextjs.org/docs
- Learn Next.js - https://nextjs.org/learn
- Next.js GitHub Repository - https://github.com/vercel/next.js

---

Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform - https://vercel.com/new

Steps:

1. Push your project to GitHub.
2. Go to Vercel Dashboard and import your GitHub repository.
3. Add your Environment Variables in Vercel:
   - TELEGRAM_BOT_TOKEN
   - TELEGRAM_CHAT_ID
4. Deploy your project. Vercel will handle building and hosting automatically.

---

Contact Form

- The contact form submits messages to your Telegram account using the bot token and chat ID.
- Make sure your environment variables are correctly set in both .env.local for local dev and Vercel for production.
- Any errors in sending messages (like a 500 error) are usually caused by missing or incorrect environment variables.

---

License

This project is MIT licensed.
