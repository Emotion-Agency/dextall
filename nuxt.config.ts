import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  modules: ['@pinia/nuxt', '@nuxtjs/eslint-module'],

  buildModules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
  ],

  publicRuntimeConfig: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    ENVIROMENT: process.env.NODE_ENV,
  },

  generate: { fallback: '404.html' },
})
