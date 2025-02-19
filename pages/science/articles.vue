<script setup>
import { useContactStore } from "/store/contact";
import { useHomeStore } from "~/store/home";
import { onMounted } from "vue";
const store = useContactStore();
const route = useRoute();
const homeStore = useHomeStore();

const data = ref(null);
const loading = ref(true);
onMounted(() => {
  homeStore.getCategoryFilter("ilmi-maqolalar").then((res) => {
    data.value = res.data;
    loading.value = false;
  }).catch(() => {
    loading.value = false;
  })

  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  homeStore.getMenuStatick(prentPageOne, route.fullPath);
  if (homeStore.menus) {
    localStorage.setItem("articles", JSON.stringify(homeStore.menuShow));
  }
});
</script>

<template>
  <div class="w-full">
    <LoadingPage v-if="loading" />
    <div v-else>
      <div
        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full gap-4"
        v-if="data && data.posts"
      >
        <div
          class="rounded-xl p-3 bg-white w-full cursor-pointer"
          v-for="item in data?.posts?.data"
          :key="item.id"
          @click="$router.push(`/science/articles-inner/${item.slug}`)"
        >
          <div
            class="h-[200px] w-full"
            v-if="item && item.images && item.images[0]"
          >
            <img
              :src="item.images[0][homeStore.currentImage]"
              alt=""
              class="w-full h-full rounded-lg object-cover"
            />
          </div>

          <div>
            <div class="flex gap-2 mt-4 mb-3">
              <img
                v-if="item.date"
                class="w-5 h-5"
                src="/assets/imgs/talim/Calender.png"
                alt=""
              />
              <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">
                {{ item.date ? item.date.substring(0, 10) : "" }}
              </p>
            </div>
            <div>
              <p class="font-medium text-xl">
                {{ item.title ? item.title : "" }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="text-center font-Halvar text-3xl">
          {{ homeStore.dataTranslate["header.do_not"] }}
        </h1>
      </div>
    </div>
  </div>
</template>


