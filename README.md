# HolaTandem — holatandem.com (Next.js + TypeScript, for Vercel)

One-page marketing site. **App Router**, TypeScript, no Tailwind, plain CSS. Bilingual ES/EN (client-side toggle, defaults to browser language). All brand styling lives in `app/globals.css`.

> ⚠️ **Goal first:** this needs to be **live at holatandem.com** so Meta's website check passes and the restricted WhatsApp account can be reviewed. Ship this content as v1 — polish later. Don't expand scope.

## What's in this folder (complete, ready-to-push repo)
```
package.json       Next 14, React 18, TS — no extra deps
tsconfig.json
next.config.mjs
next-env.d.ts
.eslintrc.json
.gitignore
app/layout.tsx     fonts (next/font: Playfair Display + Manrope) + metadata/OG
app/page.tsx       the page (client component, ES/EN toggle)
app/globals.css    all styles + brand palette tokens
public/            logo.png, logo-reversed.png, favicon.png, og-image.png
```

## Run locally
```bash
cd nextjs
npm install
npm run dev   # http://localhost:3000
```
(Node 18.18+ / 20+.) No env vars.

## Push to GitHub
This folder is already a complete project — just init and push:

```bash
cd nextjs
git init
git add .
git commit -m "HolaTandem landing page v1"
git branch -M main
# create an empty repo on github.com first (e.g. holatandem-site), then:
git remote add origin https://github.com/<your-user>/holatandem-site.git
git push -u origin main
```
(Or `gh repo create holatandem-site --private --source=. --push` if the GitHub CLI is installed.)

## Deploy to Vercel
1. Push the project to a GitHub repo.
2. **vercel.com → Add New → Project → import the repo** → framework auto-detects Next.js → **Deploy**. Live on `*.vercel.app` in ~1 min.
3. **Project → Settings → Domains → add `holatandem.com`** (and `www.holatandem.com`). Vercel shows the exact DNS records to set.

## DNS at Namecheap
Namecheap → **Domain List → Manage (holatandem.com) → Advanced DNS**.
**Delete** the default parking records first (the `CNAME @ → parkingpage.namecheap.com` and any URL-redirect/A parking record), then add what Vercel's Domains screen tells you — typically:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Use the **exact** values Vercel displays (they're authoritative and can change). SSL is automatic once DNS resolves. Propagation: ~30 min–2 h.

## After the site loads (clears the WhatsApp restriction)
⚠️ **Do this only once `https://holatandem.com` actually loads — not before.**
1. **business.facebook.com → Business settings → Business info** → set **Website** = `https://holatandem.com` → Save
2. Open the restricted WhatsApp account → **Request review**

## Notes
- WhatsApp CTA buttons point to `+34 638 054 941`; they activate once the account restriction lifts and the number is registered.
- Privacy policy link in the footer points to the published Google Doc (swap to `holatandem.com/privacy` later if desired).
- Plain `<img>` is used for logos (with eslint-disable). Switch to `next/image` if preferred — not required.
