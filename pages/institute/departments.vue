<template>
  <div>
  
     <InstituteDepartaments :data="data" />
  </div>
   
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();


const route = useRoute();

const data = ref(null);
onMounted(() => {
  store.getDepartament().then((res) => {
    data.value = res.data;
  });
  const prentPageOne = `/${route.fullPath.split('/')[1]}`
  store.getMenuStatick(prentPageOne, route.fullPath)
  if(store.menus){
    localStorage.setItem('departments', JSON.stringify(store.menuShow));
  }

});
</script>

<style scoped>
</style>