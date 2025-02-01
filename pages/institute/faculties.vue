<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const items = ref([]);

const route = useRoute();



onMounted(() => {
    const prentPageOne = `/${route.fullPath.split("/")[1]}`;
    store.getMenuStatick(prentPageOne, route.fullPath);

    if (store.menus) {
      localStorage.setItem('facultet', JSON.stringify(store.menuShow));
      
    }
  store.getFacultet().then((res) => {
    items.value = res.data;
  });
});
</script>

<template>
  <div>
    <InstituteKafedra :data="items" />
  </div>
</template>



