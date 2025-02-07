<script setup>
import { useHomeStore } from "~/store/home";
import { computed } from 'vue';

const store = useHomeStore();

// Xavfsiz background URL olish uchun computed property
const backgroundImage = computed(() => {
  return store.menuShow?.dinamikMenus?.length 
    ? store.menuShow.dinamikMenus[0]?.background 
    : store.bgImg
});

// Background mavjudligini tekshirish uchun computed property
const hasBackground = computed(() => {
  return !!backgroundImage.value;
});
</script>

<template>
  <div
    class="bg-white flex flex-col items-center justify-center py-[48px] bgImg"
    :style="{
      'background-image': hasBackground ? `url(${backgroundImage})` : undefined
    }"
    :class="{
      'h-[400px] text-white': hasBackground
    }"
  >
    <h1
      class="sm:text-[40px] text-2xl font-medium text-[#06203D]"
      :class="{
        'text-white': hasBackground
      }"
    >
      {{ store.menuShow?.title }}
    </h1>

    <div
      class="text-[#5D5D5F] text-lg mt-4"
      :class="{
        'text-white': hasBackground
      }"
    >
      <button @click="$router.push('/')">Asosiy</button> /
      <button @click="$router.push(`${store.menuShow?.path}`)">{{ store.menuShow?.title || store?.slugData?.title }} </button>
      <button v-if="store.slugData?.slugText">
        / {{ store.slugData.slugText }}
      </button>
    </div>
  </div>
</template>

<style>
.bgImg {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>