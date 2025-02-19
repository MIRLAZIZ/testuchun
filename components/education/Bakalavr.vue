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
    description: data.value?.third_description,
  },
]);

const store = useHomeStore();
const route = useRoute();
const data = ref({});
const router = useRouter();
const loading = ref(true);

onMounted(() => {
  store
    .getEducutionOne(route.params.slug)
    .then((res) => {
      data.value = res.data;
      store.bgImg = res.data?.photo?.md;
      loading.value = false;

      store.educationFaqId = res.data?.faq?.filter(
        (item) => !item.parent && item.action == 1
      )[0]?.id;

      let slugName = {
        slugText: res.data?.name,
      };
      store.slugData = slugName;
    })
    .catch(() => {
      loading.value = false;
    });

  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("education"));
  }
});
onUnmounted(() => {
  store.bgImg = null;
  store.slugData = null;
});
</script>
<template>
  <div class="w-full flex justify-center  mb-[104px]">
    <loading-page v-if="loading" />

    <div class="mainContainer" v-else>
      <EducationTopCard :data="data" />

      <div class="w-full flex flex-col items-center">
        <div
          class="xl:w-[1016px] w-full bg-white flex flex-col p-8 items-center rounded-xl"
        >
          <EducationTabsview :data="taps" :item="data" />
          <EducationIframe
            :data="data"
            v-if="data?.yt_link && store.activeTab !== 'plan'"
          />
          <EducationAboutright :data="data" v-if="store.activeTab !== 'plan'" />
          <EducationAboutleft
            :data="data"
            class="mt-10"
            v-if="store.activeTab !== 'plan'"
          />
        </div>
        <div class="mt-4 w-full  xl:w-[1016px]" v-if="data && data.file">
          <button
            @click="store.downloadFile(data.file, data.name)"
            class="bg-[#F7483B] sm:w-[194px] w-[160px] no-print h-[48px] flex justify-center items-center font-medium rounded-lg text-white"
          >
            {{ store.dataTranslate["header.download"] }}
            <img
              src="/assets/imgs/kampus/Download.png"
              alt=""
              class="w-5 h-5 ml-4"
            />
          </button>
        </div>
        <!-- <div class="xl:w-[1016px] w-full mb-[104px]">
          <EducationComments :data="data?.employs" />
        </div> -->
      </div>
    </div>
  </div>
</template>
