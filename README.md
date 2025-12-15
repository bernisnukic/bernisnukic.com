# bernisnukic.com

Personal website built with Next.js (App Router) and deployed to Cloudflare Workers via OpenNext.

## Requirements

- Node.js `>=20.9.0` (required by `next`)
- A Cloudflare account (for deploy/preview on Workers)

## Setup

```bash
npm install
```

## Development

Run the Next.js dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Routes live under `app/` (e.g. `app/page.jsx`).

## Cloudflare (OpenNext)

Preview locally using the Cloudflare Workers runtime:

```bash
npm run preview
```

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Wrangler entry points are defined in `wrangler.toml` and OpenNext output is generated into `.open-next/`.

## Type generation (optional)

Generate a `cloudflare-env.d.ts` based on your Wrangler configuration:

```bash
npm run cf-typegen
```
