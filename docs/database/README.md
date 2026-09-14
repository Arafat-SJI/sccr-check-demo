# Database

## Status

No database is connected in the current release. The storefront is frontend-only.

## Planned domains (when backend is added)

| Domain | Purpose | Example entities |
|--------|---------|------------------|
| Identity | Client atelier accounts | `users`, `sessions`, `passkeys` |
| Catalog | Timepieces & variants | `products`, `variants`, `media` |
| Commerce | Reservations & orders | `carts`, `orders`, `allocations` |
| Provenance | Certificates & service | `certificates`, `service_records` |

## Conventions (to follow later)

- Prefer clear singular table names and UTC timestamps
- Store Stitch/project external IDs as opaque strings when syncing design sources
- Never commit connection strings or credentials; use environment variables

## Related

- API contracts: `docs/api/`
- Feature briefs: `docs/features/`
