# SOPs (Standard Operating Procedures)

## SOP-001 — Pull a Stitch screen into Next.js

1. Identify Stitch `projectId` and `screenId` (see `list_projects` / `list_screens`).
2. Download HTML + screenshot via Stitch `get_screen` download URLs.
3. Save assets into `public/stitch/` with stable filenames.
4. Convert HTML → React/JS (App Router). Map `class` → `className`.
5. Reuse design tokens already defined in `app/globals.css`.
6. Wire navbar/`Link` targets for new routes.
7. Run `npm run build` and smoke-test desktop + mobile widths.

## SOP-002 — Add a new route

1. Create `app/<route>/page.js`.
2. Import `Header` / `Footer` when the page needs site chrome (login/register may be standalone).
3. Update `components/Header.js` (and Footer if needed) with links.
4. Document the feature under `docs/features/`.
5. Add a changelog entry in `docs/changelog.md`.

## SOP-003 — Safe commit checklist

1. No secrets (API keys, `.env`) in the commit
2. JS-only unless TypeScript was requested
3. Build passes: `npm run build`
4. Changelog updated for user-facing changes
