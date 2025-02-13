<template>
  <div class="h-8 bg-[#06203D] relative flex items-center overflow-hidden">
    <div class="ticker">
      <span class="text-white">{{ store.dataTranslate["header.test"] }}</span>
    </div>
  </div>
</template>
  
  <script setup>
  import { useHomeStore } from "~/store/home";
  const store = useHomeStore();

</script>
  
  <style scoped>
.ticker {
  position: absolute;
  white-space: nowrap;
  animation: moveText 18s linear infinite;
}

@keyframes moveText {
  0% {
    left: 100%;
  }
  100% {
    left: -30%;
  }
}
</style>