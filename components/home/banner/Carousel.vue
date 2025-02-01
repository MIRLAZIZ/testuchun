<script setup>
import { useHomeStore } from '~~/store/home';

const store = useHomeStore()
const items = [
  { id: 1, file: 'https://s3-figma-videos-production-sig.figma.com/video/875745179923965945/TEAM/ab11/695f/-d275-41ce-807a-28d05b3c63f2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EipkPKqdM3u63qX0WIdLTG6Qa7SVJdDFkpQqebmnIoQNWj2mHU5HU0xdt7N3Hr2exkUmK7ZROU~Y7~6Kvu9aAGP5~6zcxBFaHCmGm7viIM8IK1HaU~d~rQMn3mecLwCjURjkIGWigoW5fD7Yp~47L-xHIV1nMT8QmGdNfiNHYYsCBk2imbdmj8i4JaujPNIFfnLEL0ASpadWtyw3LM09~LJrMFCSwOUphlQ6-~FAqUggjDILtzfuPEgB4wYcAbwHwkKfc8s4JdLAqJ0adnZ69XA74QgUVkiV0Fz9zlU7Z7rmDsj6kJc8Z0lEH0aEznu32ujnU7MjnViy6MRhKmlbwg__', type: 'video' },
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
const caruselData = ref(null)

onMounted(() => {
  store.getBanner()
    .then(res => {
      caruselData.value = res.data
      
    })

})

</script>

<template>
  <div class="relative w-full h-[789px]">
 
    <UCarousel ref="carousel" v-slot="{ item }" :items="caruselData?.data" :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden">

      <video v-if="item.type === 'video'" class="w-full h-[789px] object-cover" muted draggable="false" loop>
        <source :src="item?.file" type="video/mp4" class="w-full ">
      </video>


      <!-- image  -->
      <img :src="item?.images[store.currentImage]" class="w-full h-[789px]" draggable="false" v-else>
    </UCarousel>

    <div class="absolute w-full h-[789px] flex justify-center  top-0  faceCarousel ">

      <!-- <div class="mainContainer "> -->
      <div class=" ">
        
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