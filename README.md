# Amidip Jewellers — Fullstack (React + Vite + Firebase + OpenAI proxy)

This project is a **frontend React (Vite)** app with client-side Firebase integration (Firestore) and
a serverless function to proxy OpenAI requests (so your API key is not exposed). It's configured to deploy on **Vercel**.

## Features
- Responsive jewellery store UI (Home / Catalog / About / Contact / Admin)
- Firebase Firestore for persisting contact messages and products
- Simple admin form to add products (stored in Firestore)
- Chat widget that sends messages to a serverless OpenAI proxy (`/api/openai`)
- Vercel-ready (`vite.config.js` includes `base: './'`)

## Setup (local)
1. Copy `.env.sample` → `.env` and fill your **Firebase** credentials (VITE_* variables).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Vercel Deployment
1. Push repo to GitHub.
2. Import project in Vercel (New Project → Import Git Repo).
3. Set Environment Variables in Vercel (Project Settings → Environment Variables):
   - `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`
   - `OPENAI_API_KEY` (your OpenAI secret) — used by serverless function only.
4. Build Command: `npm run build`
   Output Directory: `dist`
5. Deploy — Vercel will run build and host the app; serverless function will be available at `/api/openai`.

## Notes
- The OpenAI proxy function uses `process.env.OPENAI_API_KEY` — do not expose this in client code.
- For security & production readiness, configure Firebase rules (Firestore) to restrict writes to authenticated/admin users, or implement Cloud Functions for admin actions.
