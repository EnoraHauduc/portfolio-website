# Enora Hauduc — Portfolio

Next.js portfolio, statically exported and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a
static export and publishes it via GitHub Pages. One-time setup:

1. Repo **Settings → Pages → Source** → set to **GitHub Actions**.
2. Repo **Settings → Secrets and variables → Actions → Variables** → add
   `NEXT_PUBLIC_FORMSPREE_ID` with your [Formspree](https://formspree.io)
   form ID (the part after `/f/` in your endpoint).

The site is served at `https://<owner>.github.io/portfolio-website/`. Locally
it still runs at the root (`next.config.js` only applies the `/portfolio-website`
base path when `GITHUB_ACTIONS=true`), so `npm run dev` needs no extra config.

