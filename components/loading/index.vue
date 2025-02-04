<script setup>
// Bu yerda loading state ni boshqarish uchun kerakli kodlar
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div class="flex flex-col items-center">
      <!-- Logo container -->
      <div class="w-[200px] relative animate-pulse">
        <!-- Left red squares -->
        <div class="absolute left-0 top-0 space-y-1">
          <div class="w-8 h-8 bg-red-500"></div>
          <div class="w-8 h-8 bg-red-500"></div>
          <div class="w-8 h-8 bg-red-500"></div>
        </div>

        <!-- Middle red square -->
        <div class="absolute left-9 top-4">
          <div class="w-8 h-8 bg-red-500"></div>
        </div>

        <!-- Right side text -->
        <div class="absolute left-20 top-0">
          <div class="text-[#06203D] font-bold">
            <p class="text-sm">TOSHKENT</p>
            <p class="text-sm">MENEJMENT VA</p>
            <p class="text-sm">IQTISODIYOT</p>
            <p class="text-sm">INSTITUTI</p>
          </div>
        </div>
      </div>

      <!-- Loading spinner -->
      <div class="mt-8">
        <div
          class="w-10 h-10 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animation for logo pulse */
@keyframes custom-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>