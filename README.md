# Hacktober — Hacklahoma Landing Page

The landing page for **Hacktober**, Hacklahoma's fall hackathon at the University of Oklahoma. A single-scroll, animated autumn/night scene (parallax trees, drifting leaves, lantern details) built with React + Vite.

- **Event:** Oct 26, 2026 · 4–10 PM — REPF 200, University of Oklahoma
- **Host:** [Hacklahoma](https://hacklahoma.org)

## Getting started

```sh
npm install
npm run dev
```

Other scripts:

```sh
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

- [src/App.tsx](src/App.tsx) — the entire page: hero scene, parallax scenery, lantern details section, and footer/CTA
- [src/main.tsx](src/main.tsx) — React entry point
- [index.html](index.html) — page shell, meta tags, and font imports
- [public/](public) — static assets (e.g. the Hacklahoma logo)

Event details (date, venue, contact email) are defined as constants near the top of [src/App.tsx](src/App.tsx) — update those to change copy across the whole page.

## Tech stack

- React 19 + TypeScript
- Vite
- ESLint (flat config)
