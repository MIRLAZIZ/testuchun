<script setup>
import { useHomeStore } from '~/store/home';
import Logo from '../footer/Logo.vue';

const store = useHomeStore()
const carousel = ref(null)
const activeIndex = ref(0);
const caruselData = ref(null)
const activeItem = computed(() => {
  if (caruselData.value?.data ) {
    return caruselData.value.data[carousel.value.page-1]
  }
  return null
})

const goToPrev = () => {
  if (carousel.value) {
    // console.log('carousel.value', carousel.value.page)
    carousel.value.prev();
  }
};

const goToNext = () => {
  if (carousel.value) {
    carousel.value.next();
  }
};

function extractLinkFromP(pTagContent) {
  const linkPattern = /https?:\/\/[^\s<>]+/g;
  const match = pTagContent.match(linkPattern);
  if (match && match.length > 0) {
    return match[0];
  }
  return null;
}
watch(activeIndex, (newValue) => {
  if(newValue === null)  {
    console.log('null');
    
  } else{
    console.log('not null');
    
  }
  console.log('Active index changed to:', newValue)
}, { deep: true })
onMounted(() => {
  store.getBanner()
    .then(res => {
      caruselData.value = res.data
    })
})

 const getVideoId=(url)=> {
    if (!url) return '';
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  }
 


const extractVideoId = (url) =>{
    // URL dan video ID ni ajratib olish
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
</script>

<template>
  <div class="relative w-full xl:h-[789px] h-[689px]">

    <UCarousel 
      ref="carousel" 
      v-slot="{ item }" 
      :items="caruselData?.data" 
      :ui="{ item: 'basis-full' }"
      class="w-full overflow-hidden" 
      v-model="activeIndex"
      @slide="handleSlide($event)"
    >
      <iframe
        v-if="item?.desc"
        class="w-full sm:h-[789px] h-[620px]"
        :src="extractLinkFromP(item?.desc) + '&autoplay=1&mute=1&rel=0&loop=1&playlist=' + extractVideoId(extractLinkFromP(item?.desc))"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <img 
        v-else
        :src="item?.images[store.currentImage]" 
        class="w-full h-[789px]" 
        draggable="false"
      >
    </UCarousel>
    <div class="absolute w-full xl:h-[789px] h-[689px] flex justify-center top-0 faceCarousel">
      <div>
      
        <HomeBannerFaceCarousel 
          @left="goToPrev" 
          @right="goToNext" 
          :activeItem="activeItem || {}"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.faceCarousel {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>