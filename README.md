# vite-ember-ssr-experiment

An Ember application for experimenting with
[`vite-ember-ssr`](https://github.com/evoactivity/vite-ember-ssr) in a hybrid
SSG + SSR setup, using data from
[publicatie.gelinkt-notuleren.vlaanderen.be](https://publicatie.gelinkt-notuleren.vlaanderen.be/).

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/) (if it is not on your PATH, prefix the commands
  below with `corepack`, e.g. `corepack pnpm install`; or run `corepack enable`
  which should install `pnpm` and add it to your path)

## Installation

- `git clone <repository-url>` this repository
- `cd vite-ember-ssr-experiment`
- `pnpm install`

## Running / Development

- `pnpm build` — build the app (SSG + SSR)
- `pnpm start:server` — start an SSR Fastify server on [http://localhost:4200](http://localhost:4200)

### Rendering

The app combines static generation and server-side rendering:

- `/` — prerendered at build time
- `/about` — prerendered at build time
- `/publicaties/:bestuurseenheid_id` — rendered on the server per request

Prerendered pages are written to `dist/client/`; the SSR bundle is written to
`dist/server/`. The server serves prerendered HTML first and falls back to
dynamic SSR when no static file exists.

### Building

- `pnpm build` — build both the client (including prerendered pages) and the
  SSR bundle
- `pnpm build:client` — build only the client
- `pnpm build:server` — build only the SSR bundle

### Linting

- `pnpm lint` — run all linters
- `pnpm lint:fix` — auto-fix everything
- `pnpm lint:js` — ESLint (includes type-checked rules for `.ts`/`.gts`)
- `pnpm lint:types` — Glint type check
- `pnpm lint:format` — check formatting
- `pnpm lint:format:fix` — apply Prettier formatting

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [Vite](https://vite.dev)
- [vite-ember-ssr](https://github.com/evoactivity/vite-ember-ssr)
- [vite-ember-ssr example apps](https://github.com/evoactivity/vite-ember-ssr/tree/main/test-apps)
- [current FastBoot setup](https://github.com/lblod/frontend-gelinkt-notuleren-publicatie)
