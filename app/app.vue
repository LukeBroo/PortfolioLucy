<script setup>
  useHead({
    titleTemplate: (title) =>
      title ? `${title} | Portfolio` : "Łucja Kowalska Portfolio",
  });
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
