<script setup>
import { useContactStore } from "/store/contact";
import { useHomeStore } from "~/store/home";
import { onMounted } from "vue";
import img1 from "../../assets/imgs/talim/Download.png";
const store = useContactStore();
const route = useRoute();
const homeStore = useHomeStore();

onMounted(() => {
  store.getDocument();
  
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  homeStore.getMenuStatick(prentPageOne, route.fullPath);
 
});


</script>

<template>
  <div class="w-full">
    <Science :data="store.documents" />
  </div>
</template>


