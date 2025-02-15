<template>
  <div>
    <LoadingPage v-if="loading" />
    <LibraryStudents :data="studets" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const studets = ref(null);
const store = useHomeStore();
const route = useRoute();
const loading = ref(true);

onMounted(() => {
  store
    .getStudents()
    .then((res) => {
      studets.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });

    const prentPageOne = `/${route.fullPath.split("/")[1]}`;
    store.getMenuStatick(prentPageOne, route.fullPath);

  if (store.menus) {
    localStorage.setItem("studentlar", JSON.stringify(store.menuShow));
  }
});
</script>

<style scoped></style>