# API

## Status

No HTTP API routes are implemented yet. Pages are static/client UI only.

## Planned surface (sketch)

Base path: `/api` (Next.js route handlers under `app/api/`)

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `/api/auth/login` | Client portal credentials / passkey start |
| `POST` | `/api/auth/register` | Create atelier account |
| `GET` | `/api/products/:id` | Product detail + variants |
| `POST` | `/api/wishlist` | Wishlist mutations |
| `POST` | `/api/reservations` | Limited-series reservation requests |

## Conventions

- JSON request/response bodies
- Return structured errors: `{ "error": { "code": "...", "message": "..." } }`
- Do not expose internal Stitch IDs to anonymous clients unless required

## Related

- Data model notes: `docs/database/`
- Auth UX: `/login`, `/register`
