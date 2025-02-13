<template>
  <div>
    <LoadingPage v-if="loading" />
    <LibraryAbout :data="student" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const student = ref(null);
const route = useRoute();
const loading = ref(true);

onMounted(() => {
  store
    .getStudentShow(route.params.id)
    .then((res) => {
      student.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("studentlar"));
  }
});
</script>

<style scoped>
</style>