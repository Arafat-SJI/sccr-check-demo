# Architecture

## Overview

Horologe Genève is a marketing and commerce storefront built with **Next.js 16 App Router**, **React 19**, and **Tailwind CSS v4**. UI was authored from Google Stitch designs and converted to React/JS pages.

```text
Browser
  └─ Next.js App Router (static pages today)
       ├─ app/page.js          Home
       ├─ app/login/page.js    Client portal login
       ├─ app/register/page.js Registration
       ├─ app/product/page.js  Product detail (client interactivity)
       ├─ components/          Shared Header / Footer
       └─ public/stitch/       Design assets from Stitch
```

## Layers

| Layer | Location | Notes |
|-------|----------|-------|
| Presentation | `app/`, `components/` | React pages + shared chrome |
| Styling | `app/globals.css`, Tailwind v4 | Design tokens from Stitch theme |
| Static assets | `public/stitch/` | Images, logo SVG, reference HTML |
| Agent / SCCR docs | `.cursor/`, `architecture/`, `docs/` | Spec Engine + team docs |

## Routing

| Path | Type | Description |
|------|------|-------------|
| `/` | Server component | Home — hero, collection, craftsmanship, footer |
| `/login` | Client component | Atelier client portal sign-in |
| `/register` | Client component | Maison membership signup |
| `/product` | Client component | Chronographe Monopoussoir N° 04 PDP |

## Current constraints

- No backend API or database wired yet (frontend-first).
- Auth forms are UI-only (no real authentication).
- Commerce actions (bag, reserve, acquire) are presentational.

## Future extension points

- `app/api/` for route handlers (see `docs/api/`)
- Persistence for accounts, wishlist, orders (see `docs/database/`)
- Feature specs under `docs/features/` before large UI additions
