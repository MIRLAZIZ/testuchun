<template>
  <div>
    <LoadingPage v-if="loading" />
    <InstituteKafedraInner :data="data" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const data = ref(null);
const route = useRoute();
const loading = ref(true);
onMounted(() => {
  // if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("kafedra"));
    
  // }
  store
    .getKafedraOne(route.params.slug)
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>

<style  scoped>
</style>