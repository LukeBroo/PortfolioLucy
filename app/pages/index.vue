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
        href: "https://portfolio-lucy-pi.vercel.app",
      },
    ],
  });
</script>

<template>
  <div>
    <LucyNavbar />
    <About />
    <Experience />
    <Portfolio />
    <Footer />
  </div>
</template>

<style lang="scss"></style>
