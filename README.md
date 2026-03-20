# houssembalti.dev

Personal portfolio site for [Houssem Balti](https://houssembalti.dev) — Full Stack Developer.

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 6](https://astro.build) |
| UI | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Deployment | [Netlify](https://netlify.com) (SSR via `@astrojs/netlify`) |
| SEO | [astro-seo](https://github.com/jonasmerlin/astro-seo) |
| OG Image | [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com) |
| Fonts | [Inter](https://fontsource.org/fonts/inter) via `@fontsource/inter` |
| Package Manager | [pnpm](https://pnpm.io) |

## Project Structure

```
/
├── public/
│   ├── fonts/                    # Inter woff files for OG image generation
│   ├── cs-color-logotype.png     # CamelStudio logo
│   ├── houssem-balti.png         # Profile photo
│   ├── icon-background.svg       # Fork It Community logo
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── bento/
│   │   │   ├── ArticlesCard.astro
│   │   │   ├── BentoCard.astro   # Shared card wrapper
│   │   │   ├── ExperienceCard.astro
│   │   │   ├── IdentityCard.astro
│   │   │   ├── SocialsCard.astro
│   │   │   └── TalkCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── Layout.astro          # Root layout (SEO slot + Footer)
│   ├── lib/
│   │   ├── constants.ts          # All site data (SITE, SOCIALS, EXPERIENCES, TALKS)
│   │   └── utils.ts              # cn() utility (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── index.astro           # Home — bento grid
│   │   ├── about.astro           # About page
│   │   └── og-image.png.ts       # Dynamic OG image (Satori + Sharp)
│   └── styles/
│       └── global.css            # Tailwind import + CSS tokens + glass-nav
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Architecture

- **Bento grid** — 12-column grid on desktop (`md:+`), vertical stack on mobile
- **BentoCard** — shared wrapper component applying card styles and hover/active states
- **constants.ts** — single source of truth for all personal data (name, socials, experience, talks)
- **OG image** — server-rendered at `/og-image.png` using Satori + Sharp with Inter font
- **Dark mode** — hardcoded via `class="dark"` on `<html>`
- **Path alias** — `@/*` maps to `src/*`

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Production build to ./dist/
pnpm preview    # Preview production build locally
```
