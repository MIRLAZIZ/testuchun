<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();

import img1 from "/assets/imgs/talim/instetut.svg";

onMounted(() => {
  store.getNews();
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  if (store.menus) {
    localStorage.setItem("news", JSON.stringify(store.menuShow));
  }
  
});
</script>
<template>
  <div class="mb-[144px]">
    <ScienceCertificat :data="store.news?.data" />
  </div>
</template>

<style scoped></style>