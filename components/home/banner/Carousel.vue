<script setup>
import { useHomeStore } from "~/store/home";
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";

const store = useHomeStore();
const carousel = ref(null);
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

const extractVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

onMounted(() => {
  store.getBanner().then((res) => {
    caruselData.value = res.data;
  });
});
</script>

<template>
  <div class="relative h-[620px] md:h-[789px]">
    <UCarousel
      ref="carousel"
      v-slot="{ item }"
      :items="caruselData?.data"
      :ui="{ item: 'basis-full' }"
      class="w-full overflow-hidden"
    >
    <div class="w-full h-[620px] md:h-[789px] overflow-hidden">
        <div class="absolute left-1/2  transform -translate-x-1/2 w-[450%] sm:[300%] md:w-[230%] lg:w-[200%] xl:w-[130%] 2xl:w-[100%]">
          <iframe
            v-if="item?.desc"
            class=""
            :src="
              extractLinkFromP(item?.desc) +
              '&controls=1&autoplay=1&mute=1&rel=0&loop=1&playlist=' +
              extractVideoId(extractLinkFromP(item?.desc)) +
              '&iv_load_policy=3&modestbranding=1&enablejsapi=1&showinfo=0&fs=0'
            "
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            scrolling="no"
          ></iframe>
          
          <img
            v-else
            :src="item?.images[store.currentImage]"
            class="w-full h-full object-cover"
            draggable="false"
          />
        </div>
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
  transform: translateY(-100px);
}
</style>


