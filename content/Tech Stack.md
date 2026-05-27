# Tech Stack

- **Frontend:** SvelteKit (Svelte 5, Vite), shadcn-svelte + Bits-UI, TailwindCSS, nanostores, Svelte 5 runes.
- **Backend & Data:** SQLite or Postgres, Drizzle ORM. REST by default, GraphQL when the data graph benefits.
- **Infrastructure:** Cloudflare (Workers, R2, D1), Wrangler for dev/deploy.
- **Tooling:** pnpm always. Turborepo, tsup, TypeScript strict mode (`noUncheckedIndexedAccess: true`). Vitest.
