// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
  // compatibilityDate: '2024-11-01',

  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  //main css
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],

  // tailwind install  

  compatibilityDate: '2025-01-04',

  modules: ['@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  plugins: [
    '~/plugins/axios.ts'
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
  alias: {
    'image': fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
  
  

  
})