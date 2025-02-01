<template>
  <div>
    <LibraryStudents :data="studets" />
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";
import img1 from "/assets/imgs/talim/person.svg";

const studets = ref(null);
const store = useHomeStore();
const route = useRoute();

onMounted(() => {
  store.getStudents().then((res) => {
    studets.value = res.data;

  });
  console.log(store.menuShow);
  localStorage.setItem("studentlar", JSON.stringify(store.menuShow));
  

  const parentPage = `/${route.fullPath.split("/")[1]}`;
  store.menuFind(parentPage, route.fullPath);

//   if (store.menus) {
//     localStorage.setItem("studentlar", JSON.stringify(store.menuShow));
//   }
});
</script>

<style scoped></style>