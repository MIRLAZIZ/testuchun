<script setup>
</script>

<template>
  <div class="mb-[144px]">
    <UiBreadcrumb />
    <div class="w-full flex justify-center">
      <div
        class="flex justify-between gap-4 box mainContainer sm:justify-evenly mt-10"
      >
        <NuxtPage class="lg:max-w-[calc(100%-364px)] w-full" />
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
