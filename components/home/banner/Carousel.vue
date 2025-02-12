<script setup>
import { useHomeStore } from '~/store/home';
import Logo from '../footer/Logo.vue';
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';

const store = useHomeStore();
const carousel = ref(null);
const activeIndex = ref(0);
const caruselData = ref(null);

const activeItem = computed(() => {
  if (caruselData.value?.data) {
    return caruselData.value.data[carousel.value.page - 1];
  }
  return null;
});

const goToPrev = () => {
  if (carousel.value) {
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
  return match && match.length > 0 ? match[0] : null;
}

const getVideoId = (url) => {
  if (!url) return '';
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : '';
};

const extractVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};


const resizeVideo = () => {
  nextTick(() => {
    const videos = document.querySelectorAll('iframe');
    if (!videos.length) return;
    videos.forEach((video) => {
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.aspectRatio = "16/9";
    });
  });
};

onMounted(() => {
  store.getBanner().then((res) => {
    caruselData.value = res.data;
    resizeVideo(); 
  });

  window.addEventListener('resize', resizeVideo);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeVideo);
});

// `caruselData` yoki `activeIndex` o‘zgarganda `resizeVideo` ni qayta ishga tushirish
watch([caruselData, activeIndex], () => {
  resizeVideo();
});
</script>

<template>
  <div class="relative w-full xl:h-full ">
    <UCarousel 
      ref="carousel" 
      v-slot="{ item }" 
      :items="caruselData?.data" 
      :ui="{ item: 'basis-full' }"
      class="w-full overflow-hidden  " 
      v-model="activeIndex"
      @slide="resizeVideo"
    >     
    <div class=" inset-0 w-full h-full  ">
      
      <iframe
        v-if="item?.desc"
        class="w-full  "
        :src="extractLinkFromP(item?.desc) + '&autoplay=1&mute=1&rel=0&loop=1&playlist=' + extractVideoId(extractLinkFromP(item?.desc))"
        frameborder="0"
       
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe> 

      <img 
        v-else
        :src="item?.images[store.currentImage]" 
        class="w-full h-full" 
        draggable="false"
      >
    </div>


    </UCarousel>

    <div class="absolute w-full h-full flex justify-center top-0 faceCarousel">
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
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
iframe {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
}
.video-frame {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
}
</style>
