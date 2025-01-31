<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const items = ref([]);
const route = useRoute();

onMounted(() => {
  store.getKafedra().then((res) => {
    items.value = res.data
  })
  const prentPageOne = `/${route.fullPath.split('/')[1]}`
  store.getMenuStatick(prentPageOne, route.fullPath)
  if(store.menus){
    localStorage.setItem('kafedra', JSON.stringify(store.menuShow));
  }
});
</script>

<template>
  <div>
    <InstituteKafedra  :data="items"/>
  </div>
</template>



