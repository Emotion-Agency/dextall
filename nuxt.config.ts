import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  modules: ['@pinia/nuxt', '@nuxtjs/eslint-module'],

  buildModules: [
    ['@storyblok/nuxt', { accessToken: 'zhpJSXvvtqH1uucLMex7UQtt' }],
  ],

  head: {
    htmlAttrs: {
      lang: 'en',
    },
  },

  generate: { fallback: '404.html' },
})
