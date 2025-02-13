<script setup>
import { useHomeStore } from "~/store/home";
import { computed } from "vue";

const store = useHomeStore();

// Xavfsiz background URL olish uchun computed property
const backgroundImage = computed(() => {
  return store.menuShow?.dinamikMenus?.length
    ? store.menuShow.dinamikMenus[0]?.background
    : store.bgImg;
});

// Background mavjudligini tekshirish uchun computed property
const hasBackground = computed(() => {
  return !!backgroundImage.value;
});
</script>

<template>
  <div
    class="bg-white flex flex-col items-center justify-center px-4 py-[48px] bgImg"
    :style="{
      'background-image': hasBackground ? `url(${backgroundImage})` : undefined,
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      backgroundPosition: 'center',
    }"
    :class="{
      'h-[400px] text-white': hasBackground,
    }"
  >
    <h1
      class="sm:text-[40px] text-2xl font-medium text-[#06203D]"
      :class="{
        'text-white': hasBackground,
      }"
    >
      {{ store?.slugData?.slugText || store.menuShow?.title }}
    </h1>

    <div
      class="text-[#5D5D5F] text-lg mt-4 text-center"
      :class="{
        'text-white': hasBackground,
      }"
    >
      <span @click="$router.push('/')">
        {{ store.dataTranslate["home.home"] }}
      </span>

      <span
        @click="$router.push(store.menuShow?.path || store?.slugData?.path)"
        v-if="store.menuShow || store?.slugData"
      >
        / {{ store.menuShow?.title || store?.slugData?.title }}
      </span>

      <span v-if="store.slugData?.slugText">
        / {{ store.slugData.slugText }}
      </span>
    </div>
  </div>
</template>

<style>
.bgImg {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>