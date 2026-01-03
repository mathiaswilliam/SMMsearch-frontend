// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // site: 'http://localhost:4321',
  // site: 'https://smm-reviews-panel.vercel.app',
  // site: 'https://smmsearch.io',
  site: 'https://smmsearch.io/',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss(), sitemap({
    filter: (page) =>
      page !== `https://smmsearch.io/admin/` &&
      page !== `https://smmsearch.io/search/` &&
      page !== `https://smmsearch.io/services/search/`
  })],
  },
});
