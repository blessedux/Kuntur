// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';


export default defineConfig({
  integrations: [tailwind(), react()],
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