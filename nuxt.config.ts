// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {enabled: true},
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/i18n",
  ],
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "pl",
      },
      link: [
        {rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2"},
        {rel: "shortcut icon", href: "/favicon.ico?v=2"},
        {rel: "apple-touch-icon", href: "/favicon.ico?v=2"},
      ],
    },
  },
  i18n: {
    defaultLocale: "pl",
    locales: [
      {code: "pl", name: "Polish", file: "pl.json"},
      {code: "en", name: "English", file: "en.json"},
    ],
  },
});
