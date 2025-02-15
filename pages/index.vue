<script setup>

import { useHomeStore } from "~/store/home";


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
  <div class="w-full">
    <HomeBanner />
     <HomeSciences   />
    <HomeAbautInstut  />
    <HomeFacts  />
     <HomeStudents  />
    <HomeOurProgram />
     <HomeQuestions />
   <HomeNews   />
   <HomeIntsMedia />
    <HomeMarking />
    <HomeUsefulLink  :items="items" :title="'home\.partners_text'" />
    <HomeOurAdresses  />
    <HomeUsefulLink :items="links"  :title="'home\.usefulLinks'" /> 
  
  </div>
</template>


