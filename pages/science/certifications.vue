<template>
  <div class="w-full">
    <LoadingPage v-if="loading" />

    
    <div class="w-full" v-else>
      <div class="grid grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full" v-if="store.certificate">
        <div
          class="rounded-xl p-3 bg-white cursor-pointer w-full"
          v-for="item in store.certificate"
          :key="item.id"
          @click="$router.push(`/science/certificate-inner/${item.id}`)"
        >
          <div class="sm:h-[459px] h-[200px]">
            <img
              :src="item.photo[homeStore.currentImage]"
              alt=""
              class="w-full h-full rounded-lg"
            />
          </div>

          <div>
            <div class="flex gap-2 mt-4 mb-3">
              <img
                v-if="item.date"
                class="object-contain"
                src="/assets/imgs/talim/Calender.png"
                alt=""
              />
              <p class="text-[#5D5D5F]">
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

      <div class="flex justify-center mt-6" v-else>
        <p class="font-medium text-xl">{{ store.dataTranslate["header.do_not"] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContactStore } from "/store/contact";
import { useHomeStore } from "~/store/home";
const store = useContactStore();
const route = useRoute();
const homeStore = useHomeStore();
const loading = ref(true);

onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  homeStore.getMenuStatick(prentPageOne, route.fullPath);
  store
    .getCertificate()
    .then(() => {
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>

