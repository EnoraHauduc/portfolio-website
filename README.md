# Enora Hauduc — Portfolio

A minimalist, notebook-styled personal portfolio built with Next.js (App
Router), TypeScript, and Tailwind CSS.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Formspree for the contact form (no backend)
- Deploys to Vercel from `main`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your portrait

Drop a photo at `public/portrait.jpg`. The header displays it inside the
hand-drawn browser frame; if the file is missing, a placeholder is shown
instead so the layout never breaks.

## Formspree setup

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form ID from your endpoint, e.g. `https://formspree.io/f/abcd1234`
   → the ID is `abcd1234`.
3. Copy `.env.local.example` to `.env.local` and set the ID:

   ```bash
   cp .env.local.example .env.local
   ```

   ```
   NEXT_PUBLIC_FORMSPREE_ID=abcd1234
   ```

4. Restart `npm run dev`. The contact form now posts directly to Formspree
   and shows a success/error message inline.

When deploying to Vercel, add `NEXT_PUBLIC_FORMSPREE_ID` under
**Project Settings → Environment Variables**.

## The "Enora" hover animation

Hovering the name in the hero section steps through the digits of Euler's
number (`e = 2 nora` → `e = 2.71828... nora`), holds briefly, then reverses
back to `Enora`. It lives in `components/EulerHeader.tsx`.

## Deploying

1. Push this repo to GitHub (`main` branch).
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable.
4. Deploy — every push to `main` redeploys automatically.

## Project structure

```
app/                # Routes, layout, global styles
components/          # All UI building blocks (see file for details)
public/              # Static assets (add portrait.jpg here)
```
