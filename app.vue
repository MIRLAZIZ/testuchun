<script setup>
import LoadingIndicator from "~/components/LoadingIndicator.vue";
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
const lading = ref(true);
const loading = ref(true);
// onMounted(() => {
//   console.log(loading);

// })
// const app = useNuxtApp();

// app.hook("page:start", () => {
//   loading.value = true; // Sahifa yuklanishida loading true bo‘ladi
//   console.log("Page is loading...");
// });

// app.hook("page:finish", () => {
//   loading.value = false; // Sahifa yuklanishi tugagach, loading false bo‘ladi
//   console.log("Page finished!");
// });
</script>


<template>
  <div>
    <!-- {{loading}} -->
    <!-- <loadingVue v-show="loading" /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


