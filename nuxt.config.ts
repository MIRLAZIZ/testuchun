// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // compatibilityDate: '2024-11-01',

  devtools: { enabled: false },
  ssr: true,
  build: {
    transpile: ['module-name'],  // Xatolikni keltirayotgan modulni qo'shing
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        },

        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.svg',
        }
      ]

    },

  },

  //main css
  css: ['@/assets/css/main.css', '@/assets/css/font.css'],





  compatibilityDate: '2025-01-04',

  modules: ['@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  plugins: [
    '~/plugins/vue3-toastify.js',
    '~/plugins/client.js'
  ],



  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.VUE_APP_API_BASE_URL
    }
  },


  i18n: {
    lazy: false,
    langDir: '../locales/',
    strategy: 'no_prefix',
    locales: [

      {
        code: 'ru',
        // iso: 'ru',
        // name: 'Русский',
        file: 'ru.json',
      },
      {
        code: 'en',
        // iso: 'en',
        // name: 'English',
        file: 'en.json',
      },
      {
        code: 'uz',
        // iso: 'uz',
        // name: 'O`zbekcha',
        file: 'uz.json',
      },
    ],

  },
  vite: {
    server: {
      middlewareMode: true
    }
  }




})