# Cursor workspace guidance

This folder holds Cursor agent rules and context priorities for the **Horologe Genève** storefront (Next.js + Tailwind + Stitch designs).

## Contents

| Path | Purpose |
|------|---------|
| `rules/` | Persistent agent rules for this repo |
| `context-priority.md` | What the agent should read first when working here |
| `README.md` | This file |

## Project snapshot

- **Stack:** Next.js 16 (App Router), JavaScript (no TypeScript), Tailwind CSS v4, React 19
- **Brand:** Horologe Genève — luxury watch e-commerce
- **Design source:** Google Stitch project `projects/7101608836883533966`
- **Routes:** `/`, `/login`, `/register`, `/product`

## Working with agents

1. Prefer matching Stitch design tokens and layout already in `app/globals.css`.
2. Reuse `components/Header.js` and `components/Footer.js` for pages that need the site chrome.
3. Keep assets under `public/stitch/` when pulling from Stitch.
4. Do not introduce TypeScript unless explicitly requested.
