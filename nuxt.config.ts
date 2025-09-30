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

  // SEO Meta tags
  app: {
    head: {
      title: "Lucy Portfolio - Copywriter & Graphic Designer",
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {
          name: "description",
          content:
            "Professional copywriter and graphic designer specializing in creative content, branding, and digital marketing solutions. Let's create something amazing together!",
        },
        {
          name: "keywords",
          content:
            "copywriter, graphic designer, branding, content creation, digital marketing, creative writing",
        },
        {name: "author", content: "Lucy Kowalska"},
        {
          property: "og:title",
          content: "Lucy Portfolio - Copywriter & Graphic Designer",
        },
        {
          property: "og:description",
          content:
            "Professional copywriter and graphic designer specializing in creative content, branding, and digital marketing solutions.",
        },
        {property: "og:type", content: "website"},
        {name: "twitter:card", content: "summary_large_image"},
        {
          name: "twitter:title",
          content: "Lucy Portfolio - Copywriter & Graphic Designer",
        },
        {
          name: "twitter:description",
          content:
            "Professional copywriter and graphic designer specializing in creative content, branding, and digital marketing solutions.",
        },
      ],
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
      {code: "en", name: "English", file: "en.json"},
      {code: "pl", name: "Polish", file: "pl.json"},
    ],
  },
});
