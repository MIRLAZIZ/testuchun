<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();
const loading = ref(true);

const data = ref(null);
onMounted(() => {
  store
    .getCategoryFilter(route.params.slug)
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });

  //   store.getNews();
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);

  if (store.menus) {
    localStorage.setItem("news", JSON.stringify(store.menuShow));
  }
});
</script>
<template>
  <div>
    <LoadingPage v-if="loading"  class="w-full"/>
    <div v-else>
      {{ store.menuShow }}
      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div
          class="rounded-xl p-3 bg-white w-full cursor-pointer"
          v-for="item in data?.posts?.data"
          :key="item.id"
          @click="$router.push(`/news-inner/${item.slug}`)"
        >
          <div class="h-[200px] w-full">
            <img
              :src="item.images[0][store.currentImage]"
              alt="Yangliklar rasmi"
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
                {{
                  item.title.length > 50
                    ? item.title.substring(0, 50) + "..."
                    : item.title
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

