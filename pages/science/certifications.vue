<template>
  <div class="w-full">
    <div class="w-full">
      <div
        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full"
      >
        <div
          class=" rounded-xl p-3 bg-white cursor-pointer w-full"
          v-for="item in store.certificate"
          :key="item.id"
          @click="$router.push(`/science/certificate-inner/${item.id}`)"
          >
          <div class="h-[200px]">
            <NuxtImg :src="item.photo[homeStore.currentImage]" alt="" class="w-full h-full rounded-lg object-cover " />
          </div>

          <div>
            <div class="flex gap-2 mt-4 mb-3">
              <img
                v-if="item.date"
                class=" object-contain"
                src="/assets/imgs/talim/Calender.png"
                alt=""
                
              />
              <p class=" text-[#5D5D5F]">
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
    </div>
  </div>
</template>

<script setup>
import { useContactStore } from "/store/contact";
import img1 from "/assets/imgs/talim/instetut.svg";
import { useHomeStore } from "~/store/home";
const store = useContactStore();
const route = useRoute();
const homeStore = useHomeStore();

onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  homeStore.getMenuStatick(prentPageOne, route.fullPath);
  store.getCertificate();
});
</script>

