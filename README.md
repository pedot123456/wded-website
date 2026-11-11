# WDED: official website

Landing page for **WDED (We Do Everything Digital)**. *Go digital. Grow faster.*

Built with Vite, React, TypeScript, Tailwind CSS v4 and Framer Motion. The page is prerendered to static HTML at build time, so it loads fast and is fully readable by search engines.

## Editing content

**All text, prices, team members and contact details are in [`src/content.ts`](src/content.ts).** You don't need to touch any component.

Before going live, fill in:

| Field | Where | Notes |
| --- | --- | --- |
| `contact.whatsappNumber` | `src/content.ts` | Digits only with country code, e.g. `60123456789` |
| `contact.socials` | `src/content.ts` | Check each link opens the right profile |
| `seo.siteUrl` | `src/content.ts` | Your real domain once deployed (used for Open Graph previews) |

**Team photos:** put a square photo in `public/team/` (e.g. `public/team/firdaus.jpg`) and set `photo: '/team/firdaus.jpg'` for that member. Without a photo, initials are shown.

**Logos:** the original files are in `public/`. If the logo changes, regenerate the favicons, navbar logo and social preview image with:

```bash
npm run assets -- "path/to/brand-kit-folder"
```

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build and preview:

```bash
npm run build      # type-check, build and prerender into dist/
npm run preview    # http://localhost:4173
```

## Deploy to Vercel

**Option A: GitHub (recommended, auto-deploys on every push)**

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com) choose **Add New → Project** and import the repo.
3. Vercel detects the settings from `vercel.json` (build `npm run build`, output `dist`). Click **Deploy**.
4. Add your domain under **Project → Settings → Domains**, then update `seo.siteUrl` in `src/content.ts` and push.

**Option B: Vercel CLI**

```bash
npm i -g vercel
vercel            # first time: links the project and makes a preview deploy
vercel --prod     # deploy to production
```

## Project structure

```
src/
  content.ts           ← all editable content
  App.tsx              section order
  components/          one file per section, plus DotWave, Plexus, Reveal, etc.
  lib/whatsapp.ts      builds wa.me links with pre-filled messages
  lib/motion.ts        reduced-motion / mobile detection for parallax
  entry-server.tsx     used by the prerender step
scripts/
  build-assets.mjs     generates favicons, OG image and optimized logos
  prerender.mjs        injects prerendered HTML into dist/index.html
public/                logos, favicons, og-image.png, robots.txt
```

## Accessibility and motion

- Parallax and animations are turned off when the visitor's device has "reduce motion" enabled.
- Scroll-reveal content stays visible if JavaScript is slow or disabled.
- Parallax is lighter on phones and uses transforms only.
