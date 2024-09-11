// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-security', '@primevue/nuxt-module', '@nuxt/image'],
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
          origin: 'http://localhost:8001',
          methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
          allowedHeaders: ['content-type', 'Authorization'],
          credentials: true
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
                'https://api.rss2json.com',
                'https://images.unsplash.com',
                'https://avatars.githubusercontent.com',
                'https://cdn-cookieyes.com',
                'https://log.cookieyes.com',
                'https://cdn-cookieyes.com'
            ],
            'connect-src': [
              "'self'",
                'http://localhost:8001/articles',
                'https://api.bloggify.net',
                'https://avatars.githubusercontent.com',
                'https://cdn-cookieyes.com',
                'https://log.cookieyes.com',
                'https://cdn-cookieyes.com'
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
            },
            {
                id: 'cookieyes',
                src: 'https://cdn-cookieyes.com/client_data/09dd0aeb9d43543f5ddd3538/script.js',
                type: 'text/javascript',
                async: true,
            },
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
        '~/plugins/axios.ts'
    ],
    axios: {
        baseURL: 'http://localhost:8001'
    },
    css: [
        'animate.css/animate.min.css',
    ]
})
