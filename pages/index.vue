<script setup>
import gov from "~/assets/imgs/home/gov.png";
import gov1 from "~/assets/imgs/home/gov1.png";
import creditExpress from "~/assets/imgs/home/creditExpress.png";
import link1 from "~/assets/imgs/home/link1.png";
import { useHomeStore } from "~/store/home";
import herg from "~/assets/imgs/home/image 149.png";
import econom from "~/assets/imgs/home/moliya.png";

const store = useHomeStore();
const links = ref(null);

const items = ref([]);

onMounted(() => {
  store.getPartners().then((res) => {
    items.value = res.data.data;
  });

  store.getuseful_links().then((res) => {
    links.value = res.data.data;
  });
});
</script>


<template>
  <div class="">
    <HomeBanner />
    <HomeSciences />
    <HomeAbautInstut />
    <HomeFacts />
    <HomeStudents />
    <HomeOurProgram />
    <HomeQuestions />
    <HomeNews />
    <HomeIntsMedia />
    <HomeMarking />
    <HomeUsefulLink :items="items" :title="'home\.partners_text'" />
    <HomeOurAdresses />
    <HomeUsefulLink :items="links" :title="'home\.usefulLinks'" />
  
  </div>
</template>


