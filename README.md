# Kaivo Website

Marketing site and brand workspace for Kaivo.

## Layout

| Path | Contents |
|------|----------|
| **`web/`** | Next.js app — run `npm install` and `npm run dev` here. |
| **`docs/`** | Planning and stack notes (`stack-guide`, `design`, `website-flow`, `tech-stack`). |
| **`brand/`** | `branding-guide.pdf`, `images/` (layout comps), `fonts/lufga/`, `fonts/google-sans-flex/`. |

Use **`brand/`** as the source of truth for PDFs, comps, and font files. Point the app at files under **`web/public/`** (or `next/font/local`) when you wire them into the build.

## Quick start

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
