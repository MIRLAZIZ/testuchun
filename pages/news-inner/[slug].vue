<template>
  <div class="flex justify-center items-centermainContainer mb-[104px] ">
  
    <LoadingPage v-if="loading" />

    <div v-else  class="lg:max-w-[calc(100%-348px)] w-full  mainContainer">
      <div class="  "  v-if="newsData">
        <div class="w-full bg-white rounded-xl p-8 mt-10">
          <div class="mb-8">
            <div class="flex justify-between">
              <div>
                <p class="font-normal text-lg text-[#5D5D5F]">
                  <button @click="$router.push('/')">
                    {{ store.dataTranslate["home.home"] }}
                  </button>

                  <button
                    @click="$router.push(`${store.menuShow?.path}`)"
                    v-if="store.menuShow"
                  > / {{ store.menuShow?.title }}</button>
                  <button v-else> / {{ newsData?.categories[0]?.title }}</button>
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
                  <img
                    class="w-5 h-5"
                    src="/assets/imgs/talim/Eye.png"
                    alt=""
                  />
                  <p class="text-[#5D5D5F]">{{ newsData?.views_count }}</p>
                </div>
              </div>
            </div>
          </div>

          <UiCarousel :data="newsData?.images" />
          <div
            class="2xl:pr-16 containerText mt-8"
            v-html="newsData?.desc"
          ></div>

          <div class="mt-4" v-if="newsData?.file">
            <button
              @click="store.downloadFile(newsData?.file, newsData?.title)"
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
        </div>

      
      </div>

      <!-- else  -->
      <div v-else>
        <h1 class="text-center font-Halvar text-3xl mt-10">
          {{ store.dataTranslate["header.do_not"] }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const newsData = ref(null);
const loading = ref(true);

const route = useRoute();
onMounted(() => {
  store
    .getNewsOne(route.params.slug)
    .then((res) => {
      newsData.value = res.data;
      loading.value = false;
      if (!store.news) {
        store.getNews();
      }
    })
    .catch(() => {
      loading.value = false;
    });

  store.menuShow = JSON.parse(localStorage.getItem("news"));
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