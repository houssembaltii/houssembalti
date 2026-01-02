// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://houssembalti.dev",
  output: "server",
  adapter: netlify(),
  integrations: [react(), sitemap(), robotsTxt()],

  vite: {
    plugins: [tailwindcss()],
  },
});
