<template>
  <div class="lg:max-w-[calc(100%-348px)] w-full">
    <div class=" w-full">
      <div class="w-full bg-white rounded-xl p-8 ">
        <div class="mb-8">
          <div class="flex justify-between">
            <div>
              <p class="font-normal text-lg text-[#5D5D5F]">
                <button @click="$router.push('/')">
                  {{ store.dataTranslate["home.home"] }}
                </button>
                /
                <button @click="$router.push(`${store.menuShow?.path}`)">
                  {{ store.menuShow?.title }}
                </button>
              </p>
            </div>

            <div class="flex gap-6">
              <div class="flex gap-2">
                <img
                  class="w-5 h-5"
                  src="/assets/imgs/talim/Calender.png"
                  alt=""
                />
                <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">
                  {{ newsData?.date?.substring(0, 10) }}
                </p>
              </div>

              <div class="flex gap-2">
                <img class="w-5 h-5" src="/assets/imgs/talim/Eye.png" alt="" />
                <p class="text-[#5D5D5F]">{{ newsData?.views_count }}</p>
              </div>
            </div>
          </div>
        </div>

        <UiCarousel :data="newsData?.images" />
        <div class="2xl:pr-16 containerText mt-8" v-html="newsData?.desc"></div>
      </div>

    
    </div>
  </div>
</template>
  
  <script setup>
import imgcarousel from "~/assets/imgs/kampus/carousel.png";
import gov from "~/assets/imgs/talim/Yangiliklar.png";
import gov1 from "~/assets/imgs/talim/Yangiliklar.png";
import creditExpress from "~/assets/imgs/home/creditExpress.png";
import link1 from "~/assets/imgs/talim/Yangiliklar.png";
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const newsData = ref(null);

const route = useRoute();
onMounted(() => {
  store.getNewsOne(route.params.slug).then((res) => {
    newsData.value = res.data;


  });

  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("articles"));
  }
});
</script>
  
  <style scoped>
.containerText ::v-deep(h2) {
  font-size: 28px !important;
  color: #06203d !important;
  margin-bottom: 24px !important;
}

.containerText ::v-deep(p) {
  font-size: 20px !important;
}
</style>