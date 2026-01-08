// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set your production site URL here for proper SEO
  site: process.env.SITE_URL || 'https://parthsinha.com',

  // Remove trailing slashes from URLs
  trailingSlash: 'never',

  integrations: [sitemap()],

  // Build optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Image optimization
  image: {
    formats: ['webp', 'avif'],
    quality: 60,
  },

  // Compression and minification
  compressHTML: true,

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: [
        'node:path',
        'node:fs/promises',
        'node:url',
        'node:crypto'
      ],
    },
    build: {
      // Minify for production
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
        },
      },
      // Split chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
          },
        },
      },
    },
  },
});