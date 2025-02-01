<template>
  <div>
  <InstituteKafedraInner :data="data" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const data = ref(null);
const route = useRoute();
onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("kafedra"));
  }
  store.getKafedraOne(route.params.id).then((res) => {
    data.value = res.data;
  });
});
</script>

<style  scoped>
</style>