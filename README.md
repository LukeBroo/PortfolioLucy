Masz rację! **Nie wszystko powinno być w `nuxt.config`**. Lepiej podzielić SEO na warstwy:

## ✅ Prawidłowe podejście do SEO w Nuxt 3

### 1️⃣ **nuxt.config.ts** - tylko globalne bazowe meta

```typescript
export default defineNuxtConfig({
  // ... reszta konfiguracji
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "pl",
      },
      link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    },
  },
});
```

### 2️⃣ **app.vue** - SEO dla całej aplikacji

```vue
<script setup>
  useHead({
    titleTemplate: (title) =>
      title ? `${title} | Łucja Kowalska` : "Łucja Kowalska Portfolio",
  });
</script>
```

### 3️⃣ **pages/index.vue** - SEO specyficzne dla strony głównej

```vue
<script setup>
  const {t, locale} = useI18n();

  // SEO Meta tags dynamiczne z i18n
  useSeoMeta({
    title: () => t("seo.title"),
    description: () => t("seo.description"),
    keywords: () => t("seo.keywords"),
    ogTitle: () => t("seo.title"),
    ogDescription: () => t("seo.description"),
    ogType: "website",
    ogLocale: () => (locale.value === "pl" ? "pl_PL" : "en_US"),
    twitterCard: "summary_large_image",
  });

  // Canonical link
  useHead({
    link: [
      {
        rel: "canonical",
        href: "https://twoja-domena.pl", // Zmień na swoją domenę
      },
    ],
  });
</script>
```

### 4️⃣ **i18n/locales/pl.json** - treści SEO

```json
{
  "seo": {
    "title": "Łucja Kowalska - Copywriter & Graphic Designer",
    "description": "Profesjonalna copywriterka i graficzka z 3-letnim doświadczeniem. SEO, content marketing, Canva, Photoshop, Illustrator.",
    "keywords": "copywriter, copywriterka, graphic designer, grafik, SEO, content marketing, Łucja Kowalska"
  }
}
```

### 5️⃣ **i18n/locales/en.json**

```json
{
  "seo": {
    "title": "Łucja Kowalska - Copywriter & Graphic Designer",
    "description": "Professional copywriter and graphic designer with 3 years of experience. SEO, content marketing, Canva, Photoshop, Illustrator.",
    "keywords": "copywriter, graphic designer, SEO, content marketing, Łucja Kowalska"
  }
}
```

## 🎯 Dlaczego to lepsze?

✅ **Rozdzielenie odpowiedzialności** - config tylko dla globalnych rzeczy  
✅ **Wielojęzyczność** - SEO automatycznie zmienia się z językiem  
✅ **Łatwiejsze zarządzanie** - treści SEO w plikach językowych  
✅ **Dynamiczne meta** - można je łatwo zmieniać  
✅ **Czytelność** - każda strona ma swoje SEO

## 📦 Dodatkowe narzędzia SEO (opcjonalne)

```bash
# Sitemap i robots.txt
npm install @nuxtjs/sitemap

# Schema.org structured data
npm install nuxt-schema-org
```

**Czy mam przerobić Twój kod na ten lepszy sposób?** 🚀
