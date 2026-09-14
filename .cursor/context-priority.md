# Context priority

When working in this repository, load context in this order:

## 1. Always first

1. `AGENTS.md` / `CLAUDE.md` — Next.js version-specific agent rules
2. `architecture/README.md` — system layout and route map
3. `.cursor/rules/` — repo-specific agent constraints

## 2. Feature work

1. `docs/features/` — feature briefs for the screen or flow
2. Relevant page under `app/` (`page.js`, `login/`, `register/`, `product/`)
3. Shared UI: `components/Header.js`, `components/Footer.js`
4. Design tokens: `app/globals.css`

## 3. API / data work

1. `docs/api/`
2. `docs/database/`
3. Any future route handlers under `app/api/`

## 4. Process & quality

1. `docs/standards/`
2. `docs/SOPs/`
3. `docs/issues/`
4. `docs/changelog.md`

## 5. Design / visual fidelity

1. Stitch screen HTML references under `public/stitch/*.html` (if present)
2. Assets in `public/stitch/`
3. Existing page implementations that already match Stitch

## Deprioritize

- Default Next.js boilerplate leftovers
- Generated build output (`.next/`)
- Lockfile noise unless debugging installs
