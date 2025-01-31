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
  <div>
    <EducationTopCard :data="data" />

    <div class="mt-[187px] mb-[104px] flex items-center flex-col">
      <div class="2xl:w-[1440px] flex flex-col items-center xl:[1000px]">
        <div
          class="w-[1016px] bg-white pt-[72px] px-[32px] pb-[24px] flex flex-col gap-6 rounded-xl"
        >
          <!-- {{ data }} -->
          <EducationTabsview :data="taps" :item="data" />
          <EducationIframe :data="data" />
          <EducationAboutright :data="data" />
          <EducationAboutleft :data="data" />
        </div>
        <div class="w-[1016px]">
          <EducationComments :data="data?.employs" />
        </div>
      </div>
    </div>

    <!-- <EducationAboutperson /> -->
  </div>
</template>
