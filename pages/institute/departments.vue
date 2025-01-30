<template>
  <div>
  
     <InstituteDepartaments :data="data" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
import img1 from "../../assets/imgs/talim/person.svg";
import Institute from "../institute.vue";

const route = useRoute();

const data = ref(null);
onMounted(() => {
  store.getDepartament().then((res) => {
    data.value = res.data;
  });
  const prentPageOne = `/${route.fullPath.split('/')[1]}`
  store.getMenuStatick(prentPageOne, route.fullPath)
});
</script>

<style scoped>
</style>