<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();
const data = ref({});

onMounted(() => {
  const parentPage = `/${route.fullPath.split("/")[2]}`;
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  console.log(prentPageOne, route.fullPath);
  

  if (!store.educationData) {
    store.getEducation().then(() => {
      if (parentPage === "/bachelor") {
        data.value = store.educationData.find(
          (item) => item.slug === "bakalavr"
        );
      } else {
        data.value = store.educationData.find(
          (item) => item.slug === "magistatura"
        );
      }
    });
  } else {
    if (parentPage === "/bachelor") {
      data.value = store.educationData.find((item) => item.slug === "bakalavr");
    } else {
      data.value = store.educationData.find(
        (item) => item.slug === "magistatura"
      );
    }
  }
});
</script>
<template>
  <div>
    <Education :data="data" />
  </div>
</template>


<style scoped></style>