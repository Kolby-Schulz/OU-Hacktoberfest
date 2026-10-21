# Hacktober — Hacklahoma Landing Page

The landing page for **Hacktober**, Hacklahoma's fall hackathon at the University of Oklahoma. A single-scroll, animated autumn/night scene (parallax trees, drifting leaves, lantern details) built with React + Vite.

- **Event:** Oct 26, 2026 · 5–10 PM — Rawl Engineering Practice Facility (REPF), University of Oklahoma
- **Host:** [Hacklahoma](https://hacklahoma.org)
- **Registration:** [MLH event listing](https://events.mlh.com/events/15581-hacktoberfest-hack-day-norman-x-hacklahoma)
- **Discord:** https://discord.gg/6hQ2uva9n

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

- [src/App.tsx](src/App.tsx) — the entire page: hero scene, parallax scenery, lantern details section, schedule, and footer/CTA
- [src/main.tsx](src/main.tsx) — React entry point
- [index.html](index.html) — page shell, meta tags, and font imports
- [public/](public) — static assets (e.g. the Hacklahoma logo)

Event details (date, venue, contact email, highlights, schedule, Discord/registration/event-page links) are defined as constants near the top of [src/App.tsx](src/App.tsx) — update those to change copy across the whole page. They're kept in sync with the event's published [MLH listing](https://events.mlh.com/events/15581-hacktoberfest-hack-day-norman-x-hacklahoma).

The MLH trust badge in the top-right corner (`MlhBadge` in [src/App.tsx](src/App.tsx)) is provided by MLH via their [brand guidelines](https://www.mlh.com/brand-guidelines) page, not designed in-house — swap the asset URL/color variant there each season.

## Tech stack

- React 19 + TypeScript
- Vite
- ESLint (flat config)
