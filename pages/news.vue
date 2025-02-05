<script setup>
</script>
<template>
  <div class="mb-[144px]">
    <UiBreadcrumb />
    <div class="w-full flex justify-center">
      <div
        class="flex justify-between gap-4 box 2xl:w-[1440px] mainContainer sm:justify-evenly mt-10"
      >
        <NuxtPage />
        <UiSidebar />
      </div>
    </div>
  </div>
</template>


<style  scoped>
@media (max-width: 1024px) {
  .box {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>