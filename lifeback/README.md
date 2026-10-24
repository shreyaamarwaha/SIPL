# LifeBack application

This folder is a separate Next.js application with its own dependencies, environment variables, and deployment. It is independent of the SIPL corporate website in `../frontend/`.

## Run locally

```powershell
npm install
npm run dev
```

Configure local services using `.env.example` as a key list. Keep `.env.local` credentials private.

## Structure

- `src/app/(public)/`: public product pages and account entry points
- `src/app/(user)/`: authenticated user pages
- `src/app/(assessment)/`: assessment journeys
- `src/app/(clinician)/`: clinician-facing routes
- `src/app/(reference)/`: static reference-design routes
- `src/app/api/`: API and webhook handlers
- `src/components/`: shared application UI
- `src/features/`: domain-specific features
- `prisma/`: data model and database seed
- `public/`: static assets and reference HTML

## Commands

```powershell
npm run dev
npm run build
npm run start
npm run lint
```

See the root [`README.md`](../README.md) for how this application relates to the SIPL website.
