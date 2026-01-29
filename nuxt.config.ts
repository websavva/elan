import { staticHead } from './configs/head';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: staticHead,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  css: ['~/assets/styles/tailwind.css'],

  icon: {
    serverBundle: {
      collections: ['mdi', 'logos'],
    },
    clientBundle: {
      icons: ['mdi:location-on', 'mdi:mail', 'mdi:phone'],
    },
  },

  vite: {
    build: {
      target: [
        'es2020',
        'chrome90',
        'firefox88',
        'safari14',
        'edge90',
      ],
    },
    define: {
      'process.env.BASE_URL': JSON.stringify(
        process.env.BASE_URL ?? 'http://localhost:3000',
      ),
    },
  },

  i18n: {
    defaultLocale: 'fr',
    locales: [
      {
        code: 'fr',
        name: 'Français',
        file: 'configs/locales/fr.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'configs/locales/en.json',
      },
    ],
  },
});
