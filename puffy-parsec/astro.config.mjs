// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';


export default defineConfig({
  site: 'https://transferkuntur.cl',
  integrations: [tailwind(), react(), sitemap({
    filter: (page) => !page.includes('/private'), // Exclude private pages
    changefreq: 'weekly', // Set update frequency
    priority: 0.8, // Set priority (higher = more important)
  }),],
  vite: {
    server: {
      fs: {
        allow: [
          '/Users/JoaquinNam/Desktop/MENTE_MAESTRA/1CLIENTS/KUNTUR/kuntur_webdev/Kuntur/puffy-parsec',
          '/Users/JoaquinNam/node_modules',
        ],
      },
    },
  },
});