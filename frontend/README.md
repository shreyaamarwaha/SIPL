# SIPL corporate website

This folder is the SIPL public website and its API routes. It is a standalone Next.js application; run its commands from this folder.

## Run locally

```powershell
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when configuring local settings. Keep credentials out of source control.

## Where to edit

- Route pages and API handlers: `src/app/`
- Shared header, footer, and static-page frame: `src/components/layout/`
- Public page features and forms: `src/features/public/`
- Shared UI, SEO, and utilities: `src/shared/`
- Main landing and team-page content: `public/sipl-site/`
- Publications page: `public/publications/`
- LifeBack static fallback pages: `public/lifeback-site/`
- Team photos: `public/team/`

The main SIPL landing page is maintained as static HTML with its CSS and browser scripts in separate files. The Next.js `/` and `/team` routes load that site through `StaticHtmlFrame`; `/team` starts at the full team view. See [`ARCHITECTURE.md`](ARCHITECTURE.md) for route details.

## Checks

```powershell
npm run build
npm run lint
```

Deployment is managed by the SIPL website’s Vercel project. The sibling `lifeback/` application has a separate release process.
