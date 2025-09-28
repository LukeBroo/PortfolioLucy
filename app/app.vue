<script setup>
  // Dynamic SEO meta based on current route
  const {locale} = useI18n();

  useHead({
    title: () => {
      return locale.value === "pl"
        ? "Lucy Portfolio - Copywriter & Grafik"
        : "Lucy Portfolio - Copywriter & Graphic Designer";
    },
    meta: [
      {
        name: "description",
        content: () => {
          return locale.value === "pl"
            ? "Profesjonalny copywriter i grafik specjalizujący się w kreatywnych treściach, brandingu i rozwiązaniach marketingowych. Stwórzmy coś niesamowitego razem!"
            : "Professional copywriter and graphic designer specializing in creative content, branding, and digital marketing solutions. Let's create something amazing together!";
        },
      },
    ],
  });
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
