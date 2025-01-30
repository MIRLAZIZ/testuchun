<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
</script>

<template>
  <div
    class="bg-white flex flex-col items-center justify-center py-[48px] bgImg"
    :style="{
      'background-image': `url(${
        store.menuShow?.dinamikMenus[0]?.background || store.bgImg
      })`,
    }"
    :class="{
      'h-[400px] text-white':
        store.menuShow?.dinamikMenus[0]?.background || store.bgImg,
    }"
  >
    <!-- {{  getMenuLink }} -->
    <h1
      class="text-[40px] font-medium text-[#06203D]"
      :class="{
        'text-white':
          store.menuShow?.dinamikMenus[0]?.background || store.bgImg,
      }"
    >
      {{ store.menuShow?.title }}
    </h1>
    <div
      class="text-[#5D5D5F] text-lg"
      :class="{
        'text-white':
          store.menuShow?.dinamikMenus[0]?.background || store.bgImg,
      }"
    >
      <button @click="$router.push('/')">Asosiy</button> /
      <button>{{ store.menuShow?.title }}</button>
      <button v-if="store.slug">/ {{ store.slug }}</button>
    </div>
  </div>
</template>

<style>
.bgImg {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
