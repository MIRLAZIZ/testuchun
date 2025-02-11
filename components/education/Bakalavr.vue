<script setup>
import { useHomeStore } from "~/store/home";

const taps = computed(() => [
  {
    id: 1,
    name: data.value?.first_name,
    description: data.value?.first_descriptionv,
  },
  {
    id: 2,
    name: data.value?.second_name,
    description: data.value?.second_description,
  },
  {
    id: 3,
    name: data.value?.third_name,
    description: data.value?.third_description ,
  },
]);

const store = useHomeStore();
const route = useRoute();
const data = ref({});
const router = useRouter();

onMounted(() => {
  store.getEducutionOne(route.params.slug).then((res) => {
    data.value = res.data;
    store.bgImg = res.data?.photo?.md;
   store.educationFaqId = res.data?.faq?.filter(item => item.parent === null)[0]?.id;
    
    let slugName = {
      slugText: res.data?.name,
    };
    store.slugData = slugName;
  });

  if(!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("education"));
  }

  
    



});
onUnmounted(() => {
  store.bgImg = null;
  store.slugData = null;
})
</script>
<template>
  <div class="w-full flex justify-center">
    <div class="mainContainer">
      <EducationTopCard :data="data" />

      <div class="w-full flex flex-col items-center">
        <div class="xl:w-[1016px] w-full bg-white flex flex-col p-8 items-center rounded-xl">
          <EducationTabsview :data="taps" :item="data" />
          <EducationIframe :data="data" v-if="data?.yt_link" />
          <EducationAboutright :data="data" />
          <EducationAboutleft :data="data"  class="mt-10"/>
        </div>
        <div class=" xl:w-[1016px] w-full">
          <EducationComments :data="data?.employs" />
        </div>
      </div>
    </div>
  </div>
</template>
