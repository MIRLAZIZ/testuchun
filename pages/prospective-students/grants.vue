<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();

onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  if (store.menus) {
    localStorage.setItem("grants", JSON.stringify(store.menuShow));
  }
});
</script>
<template>
  <div class="w-full">
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        class="bg-white p-6 rounded-lg h-[128px] flex flex-col justify-between mb-4 w-full"
      >
        <div class="flex items-start">
          <img src="/assets/imgs/vacansiec/sack_money.png" alt="" />

          <p class="font-medium ml-3">
            {{ store.dataTranslate["contract.kontrakt"] }}
          </p>
        </div>

        <hr class="border border-[#DCE5F5]" />

        <router-link
          to="/prospective-students/contract"
          class="text-[#5D5D5F] cursor-pointer flex items-center justify-between"
        >
          <p class="text-[#5D5D5F] cursor-pointer">
            {{ store.dataTranslate["home.more_details"] }}
          </p>
          <UIcon
            name="i-heroicons-arrow-up-right"
            class="w-4 h-4 bg-[#F7483B]"
          />
        </router-link>
      </div>

      <div
        class="bg-white p-6 rounded-lg h-[128px] flex flex-col justify-between mb-4 w-full"
      >
        <div class="flex items-start">
          <img src="/assets/imgs/vacansiec/sack_money.png" alt="" />

          <p class="font-medium ml-3 text-base text[#000000]">
            {{ store.dataTranslate["contract.grand"] }}
          </p>
        </div>
        <hr class="border border-[#DCE5F5]" />
        <router-link
          to="/prospective-students/Scholarships"
          class="text-[#5D5D5F] wrapper_bot cursor-pointer flex items-center justify-between"
        >
          <p class="text-[#5D5D5F] cursor-pointer">
            {{ store.dataTranslate["home.more_details"] }}
          </p>
          <UIcon
            name="i-heroicons-arrow-up-right"
            class="w-4 h-4 bg-[#F7483B]"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
