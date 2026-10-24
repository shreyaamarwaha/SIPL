# SIPL website architecture

## Application map

```text
frontend/
├── public/
│   ├── sipl-site/          # Production SIPL landing and team content
│   │   ├── index.html
│   │   ├── site.css
│   │   └── scripts/        # Storyline, page routing, navigation, forms
│   ├── publications/       # Publications microsite
│   ├── lifeback-site/      # LifeBack fallback HTML
│   └── team/               # Team portraits
└── src/
    ├── app/                # Next.js routes, metadata, and API endpoints
    ├── components/layout/  # Header, footer, brand, static HTML frame
    ├── features/public/    # Contact, careers, team, and public content
    ├── layouts/            # Shared Next.js page layout
    └── shared/             # Design system, SEO, hooks, animations, utilities
```

The SIPL and LifeBack applications live in separate repository folders and use independent Next.js projects. `frontend/` owns the corporate site deployment.

## Page routing

- `/` loads `public/sipl-site/index.html` through `StaticHtmlFrame`.
- `/team` loads the same site at `#team`, so the standalone team URL uses the full team page, portraits, and bios from the current design.
- `/publications` serves the static publications page.
- Other public routes are Next.js pages under `src/app/(public)/`.
- `/lifeback` can be routed to the LifeBack origin with `LIFEBACK_ORIGIN`; the local HTML under `public/lifeback-site/` is the fallback.
- API handlers are under `src/app/api/`.

## Landing page source

`public/sipl-site/index.html` owns the SIPL landing-page markup and its hash-based section/page navigation. Its supporting code is separated by responsibility:

- `site.css` contains the landing page’s ordered style rules.
- `scripts/intro-story.js` runs the hero storyline.
- `scripts/page-router.js` switches the static site’s internal views.
- `scripts/mobile-navigation.js` handles the small-screen menu.
- `scripts/contact-modal.js` handles the contact form modal.
- `scripts/investor-enquiry.js` handles investor enquiry status messages.

Keep these files together. The script tags in `index.html` intentionally load in their original order.

## Typography

Plus Jakarta Sans is the shared site typeface. The Next.js font is declared in `src/app/layout.tsx`; Tailwind font aliases are defined in `tailwind.config.ts` and `src/app/globals.css`. Static HTML pages load the same family locally through their font stylesheet declaration.

## Shared components

- `StaticHtmlFrame` embeds a static page while retaining a Next.js route and metadata.
- `BrandLockup`, `Header`, and `Footer` provide the reusable SIPL identity for React-rendered routes.
- Public forms and features belong under `src/features/public/`; reusable primitives belong under `src/shared/`.
