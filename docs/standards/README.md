# Standards

## Language & stack

- **JavaScript only** for application code (no TypeScript) unless explicitly requested
- Next.js App Router (`app/`)
- Tailwind CSS v4 with project design tokens in `app/globals.css`
- React Client Components only when interactivity requires `"use client"`

## Code style

- Match existing file patterns and naming (`page.js`, PascalCase components)
- Prefer shared components over duplicating Header/Footer markup
- Keep Stitch visual fidelity for branded pages (typography, spacing, color tokens)
- Avoid drive-by refactors unrelated to the task

## Assets

- Store Stitch-derived media under `public/stitch/`
- Prefer local `/stitch/...` paths over hotlinking ephemeral CDN URLs in production UI

## Documentation

- Architecture changes → update `architecture/README.md`
- User-facing releases → append `docs/changelog.md`
- New features → brief in `docs/features/`
- Recurring processes → `docs/SOPs/`

## Security

- Never commit API keys or MCP credentials
- Treat auth UI as non-authoritative until a real backend exists
