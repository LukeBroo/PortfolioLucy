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
  i18n: {
    defaultLocale: "pl",
    locales: [
      {code: "en", name: "English", file: "en.json"},
      {code: "pl", name: "Polish", file: "pl.json"},
    ],
  },
});
