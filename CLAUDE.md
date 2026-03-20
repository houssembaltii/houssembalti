# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Houssem Balti (houssembalti.dev). Built with Astro 5, React 19, Tailwind CSS 4, and deployed on Netlify with SSR (`output: "server"`).

## Commands

- `pnpm dev` — Start dev server (localhost:4321)
- `pnpm build` — Production build to `./dist/`
- `pnpm preview` — Preview production build locally

## Architecture

- **Astro pages** (`src/pages/`) — File-based routing. Pages are `.astro` files except `og-image.png.ts` which generates an OG image at build time using Satori + Sharp.
- **Layout** (`src/layouts/Layout.astro`) — Single layout wrapping all pages. Imports Inter font and global CSS. Uses a named `seo` slot for per-page SEO metadata.
- **Components** — Mix of `.astro` (Header, SEO) and `.tsx` (Hero) files. React components use `client:load` directive for client-side hydration.
- **SEO** (`src/components/SEO.astro`) — Wraps `astro-seo` with defaults for OpenGraph and Twitter cards. Accepts `title`, `description`, `image` props.
- **Styling** — Tailwind CSS 4 via Vite plugin (`@tailwindcss/vite`). Uses shadcn/ui-style CSS custom properties (HSL tokens) defined in `src/styles/global.css`. Dark mode is hardcoded (`class="dark"` on `<html>`).
- **Path alias** — `@/*` maps to `src/*` (configured in `tsconfig.json`).
- **Utilities** — `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).
- **Animations** — Framer Motion for entrance animations in React components.
