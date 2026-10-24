# Sequoia Insilico web workspace

This repository contains two separate web applications. Build, run, and deploy them from their own folders.

| Folder | Application | Stack | Deployment |
| --- | --- | --- | --- |
| [`frontend/`](frontend/README.md) | SIPL corporate website | Next.js 15, TypeScript, Tailwind CSS | SIPL website deployment |
| [`lifeback/`](lifeback/README.md) | LifeBack application | Next.js 16, TypeScript, Tailwind CSS | Separate LifeBack deployment |

## SIPL website

```powershell
cd frontend
npm install
npm run dev
```

See [`frontend/ARCHITECTURE.md`](frontend/ARCHITECTURE.md) for the route map and the source of each page.

## LifeBack application

```powershell
cd lifeback
npm install
npm run dev
```

The two applications have separate dependencies, environment files, and release processes. Changes under `frontend/` affect the SIPL website; changes under `lifeback/` affect the LifeBack application.
