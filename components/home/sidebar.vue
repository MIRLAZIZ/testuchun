<template>
  <div>
    <!-- Mobil menyuni ochish tugmasi -->
    <button @click="store.menuOpen = true" class="p-3 bg-blue-500 text-white fixed top-4 left-4 z-50 rounded-md">
      ☰
    </button>

    <!-- Sidebar (ochilganda chiqadi) -->
    <div
      class="fixed top-0 left-0 h-full w-64 bg-gray-800 z-50 text-white transform transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-full': !store.menuOpen, 'translate-x-0': store.menuOpen }"
    >
      <!-- Yopish tugmasi -->
      <button @click="toggleSidebar" class="absolute top-4 right-4 text-2xl">×</button>

      <!-- Menyu elementlari -->
      <nav class="mt-16 space-y-4 px-6">
        <NuxtLink to="/" class="block p-3 hover:bg-gray-700 rounded">🏠 Bosh sahifa</NuxtLink>
        <NuxtLink to="/about" class="block p-3 hover:bg-gray-700 rounded">ℹ️ Biz haqimizda</NuxtLink>
        <NuxtLink to="/contact" class="block p-3 hover:bg-gray-700 rounded">📞 Bog‘lanish</NuxtLink>
      </nav>
    </div>

    <!-- Overlay (background bosilsa menyuni yopish uchun) -->
    <div
      v-if="store.menuOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
    ></div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();


const toggleSidebar = () => {
  store.menuOpen= false
};
</script>

<style scoped>
/* Qo'shimcha styling (agar kerak bo'lsa) */
</style>
