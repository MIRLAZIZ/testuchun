<template>
  <div>
    <LoadingPage v-if="loading" />
    <LibraryAbout :data="student" v-else />
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
    .getStudentShow(route.params.slug)
    .then((res) => {
      student.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
  
    store.menuShow = JSON.parse(localStorage.getItem("studentlar"));
});
</script>

<style scoped>
</style>