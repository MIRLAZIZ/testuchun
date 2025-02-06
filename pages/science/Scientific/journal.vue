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

const data_ab = ref(true);
const data = [
  { id: 1, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 2, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 3, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 4, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 5, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 6, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 7, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 9, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 10, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 11, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
  { id: 12, name: "Iqtisodiyot", date: "11 22 2020 ", img1: img1 },
];
</script>

<template>
  <div>
    <Science :data="store.documents" />
  </div>
</template>


<style  scoped></style>
