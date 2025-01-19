<script setup>
const items = [
  { id: 1, file: 'https://s3-figma-videos-production-sig.figma.com/video/875745179923965945/TEAM/ab11/695f/-d275-41ce-807a-28d05b3c63f2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qw-ajc8B0MkN3lY1GZPDQ2r-DCxHo8mh3lGOK4LC2fjr8YB5TiHNn-8XfqR55pmB8sn85y6CVqbNljyad08hRtQTFsOZSq2-T0YNFlCpGPH2JoFH~e3SaBhHXm8V5VrloAapY4-pN0r-WyJa7-IpqZhAwz4IaNwZNoJslfv9nIWRb5BsQv9iuPBry7AeGBvILQiMkfvMgFb2Bh2mA~GwbelBQTzmim~e7YstG2Et5Ko1PkHpzwEufedJkRAXUIuufEmgapsmhsK9SiH7WN-B3G1YfmwfPUtRzCKuDEL2KnSdCGdWbooLjPfumpSg8nYtawb5ATfuGayCPZsLYPthxw__', type: 'video' },
  { id: 2, file: 'https://picsum.photos/1920/1080?random=1', type: 'image' },
  { id: 3, file: 'https://picsum.photos/1920/1080?random=2', type: 'image' },
  { id: 4, file: 'https://picsum.photos/1920/1080?random=3', type: 'image' },
  { id: 5, file: 'https://picsum.photos/1920/1080?random=4', type: 'image' },
  { id: 6, file: 'https://picsum.photos/1920/1080?random=5', type: 'image' },
  { id: 7, file: 'https://picsum.photos/1920/1080?random=6', type: 'image' },
]
const carousel = ref(null)

// Function to go to the previous slide
const goToPrev = () => {
  if (carousel.value) {
    carousel.value.prev(); // UCarouselning prev() funksiyasi
  }
};

// Function to go to the next slide
const goToNext = () => {
  if (carousel.value) {
    carousel.value.next(); // UCarouselning next() funksiyasi
  }
};

</script>

<template>
  <div class="relative w-full h-[789px]">
    <UCarousel ref="carousel" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden">

      <!-- video  -->
      <video v-if="item.type === 'video'" class="w-full h-[789px] object-cover" muted draggable="false"  loop>
        <source :src="item.file" type="video/mp4" class="w-full ">
      </video>


      <!-- image  -->
      <img :src="item.file" class="w-full h-[789px]" draggable="false" v-else>
    </UCarousel>

    <div class="absolute w-full h-[789px] flex justify-center  top-0  faceCarousel ">

      <div class="mainContainer ">
        <HomeBannerFaceCarousel @left="goToPrev" @right="goToNext" />

      </div>
    </div>


  </div>

</template>

<style scoped>
.faceCarousel {
  /* background:  rgba(0, 0, 0, 0.48); */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
