<script setup>
import loadingVue from "./layouts/loading.vue";
useSeoMeta({
  title: "TMII",
  ogTitle: "TimeEdu",
  description:
    "Toshkent Menejment va Iqtisodiyot Institut - Sizning Kelajagingizni Quramiz.",
  ogDescription:
    "Toshkent Menejment va Iqtisodiyot Institut - Sizning Kelajagingizni Quramiz.",
  ogImage: "https://i.ytimg.com/vi/BN73wVowi-o/mqdefault.jpg",
  twitterCard: "summary_large_image",
});

onMounted(() => {

})

</script>


<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
scrollNone {
  overflow: hidden;
}

</style>


