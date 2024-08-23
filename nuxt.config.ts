// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-security', '@primevue/nuxt-module'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    security: {
      corsHandler: {
          origin: '*',
      },
        headers: {
          xFrameOptions: 'DENY',
          xXSSProtection: '1; mode=block',
          contentSecurityPolicy: {
            'default-src': ["'self'"],
            'img-src': [
                "'self'",
                "data:",
                'https://raw.githubusercontent.com/',
                'https://api.rss2json.com'
            ],
            'connect-src': [
              "'self'",
                'https://api.rss2json.com'
            ],
          }
        }
    },
    app: {
      head: {
        script: [
            {
                src: '/js/all.js',
                type: 'text/javascript',
                defer: true
            }
        ],
          link: [
              { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
              { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap' },
              { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v6.4.2/css/all.css' }
          ],
          htmlAttrs: {
            lang: 'en'
          }
      }
    },
    plugins: [
      '~/plugins/BodyClass.ts',
      { src: '~/plugins/gsap.client.ts', mode: 'client' }
    ],
})