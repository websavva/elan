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
});
