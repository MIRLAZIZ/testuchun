<template>
  <div class="lg:max-w-[calc(100%-348px)] w-full">
    <LibraryStudents :data="studets" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const studets = ref(null);
const store = useHomeStore();
const route = useRoute();

onMounted(() => {
  store.getStudents().then((res) => {
    studets.value = res.data;
  });

  const parentPage = `/${route.fullPath.split("/")[1]}`;
  store.menuFind(parentPage, route.fullPath);

  if (store.menus) {
    localStorage.setItem("studentlar", JSON.stringify(store.menuShow));
  }
});
</script>

<style scoped></style>