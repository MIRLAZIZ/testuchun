<script setup>
import { useHomeStore } from "~/store/home";
const store = useHomeStore();
const route = useRoute();

onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
});
</script>
<template>
  <div>
    <InstituteGender />
  </div>
</template>


<style scoped></style>