<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const items = ref([]);
const route = useRoute();
const loading = ref(true);

onMounted(() => {
  store
    .getKafedra()
    .then((res) => {
      items.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  if (store.menus) {
    localStorage.setItem("kafedra", JSON.stringify(store.menuShow));
  }
});
</script>

<template>
  <div>
    <LoadingPage v-if="loading" />
    <InstituteKafedra :data="items" />
  </div>
</template>



