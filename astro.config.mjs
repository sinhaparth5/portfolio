// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set your production site URL here for proper SEO
  site: process.env.SITE_URL || 'https://parthsinha.com',

  integrations: [sitemap()],

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});