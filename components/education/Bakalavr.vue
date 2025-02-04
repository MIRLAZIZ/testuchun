<script setup>
import { useHomeStore } from "~/store/home";
import img1 from "/assets/imgs/talim/watch.svg";

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
    description: data.value?.third_description,
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
    let slugName = {
      slugText: res.data?.slug,
    };
    store.slugData = slugName;
  });

  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("education"));
  }
});
</script>
<template>
  <div class="w-full flex justify-center border border-red-500">
    <div class="mainContainer">
      <EducationTopCard :data="data" />

      <!-- <div class="w-full flex flex-col items-center">
        <div class="w-[1016px] bg-white flex flex-col items-center rounded-xl">
          <EducationTabsview :data="taps" :item="data" />
          <EducationIframe :data="data" />
          <EducationAboutright :data="data" />
          <EducationAboutleft :data="data" />
        </div>
        <div class="w-[1016px]">
          <EducationComments :data="data?.employs" />
        </div>
      </div> -->
    </div>
  </div>
</template>
