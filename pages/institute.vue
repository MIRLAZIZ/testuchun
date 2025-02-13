<script setup>


const route = useRoute();


</script>

<template>
  <div class="mb-[144px]">
    <UiBreadcrumb />
    <div class="flex flex-col items-center">
      <div
        class="flex justify-between gap-4 box 2xl:w-[1440px] mainContainer sm:justify-evenly mt-10"
      >
        <NuxtPage  class="lg:max-w-[calc(100%-348px)] w-full"/>
        <UiSidebar />
      </div>

      <!-- <div v-if="$route.fullPath == '/institute'" class="w-full">
                <HomeUsefulLink :items="items" />
                <HomeOurAdresses />
            
            </div> -->
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
