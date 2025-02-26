<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()
const isMenuOpen = ref(false)


function handleScroll() {
  if (isMenuOpen.value) {
    isMenuOpen.value = false; // Modalni yopish
  }
}

// Hodisalarni bog'lash va yechish
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const gotoExtraLink = (path) => {
    if (path) {
    const fullUrl = path.startsWith("http") ? path : `https://${path}`;
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  }

}

</script>
<template>
  <div>
    <div class="flex justify-between w-full  ">
      <!-- location  -->
      <div class="flex items-center cursor-pointer" @click="gotoExtraLink(store.kampus?.data[0].map)">
        <img src="assets/imgs/home/location-dot.png" class="w-[20px] h-[20px]" />
        <p class="text-[#5D5D5F] text-[14px] ml-1  font-normal">{{ store?.dataTranslate['header.city'] }} :
          <span class="text-[#020105] leading-tight ml-2 underline	">{{ store.siteInfo?.address  }}</span>
        </p>
      </div>

      <!-- contacts -->
      <div class="flex justify-between items-center xl:w-[40%] lg:w-[45%] md:w-[50%]">
        <div class="flex justify-between contactImgs w-[30%]">
          <a :href="store.siteInfo?.telegram" target="_blank"> <img src="/assets/imgs/home/telegram2.png" alt="" class="object-cover" ></a>
          <a :href="store.siteInfo?.instagram" target="_blank"> <img src="/assets/imgs/home/instagram2.png" alt="" class="object-cover"></a>
          <a :href="store.siteInfo?.facebook" target="_blank"><img src="/assets/imgs/home/facebook2.png" alt="" class="object-cover"></a>
          <a :href="store.siteInfo?.youtube" target="_blank"  class="w-7 h-7 rounded-full bg-[#EBEBEB] flex justify-center items-center"> <img src="/assets/imgs/home/youtube2.png" alt="" class=" object-cover"></a>
        </div>
        <!-- tel number -->
        <div>
          <a :href="'tel:' + store.siteInfo?.phone_number?.split('\r\n')[0]" class="text-[#1E1A22]" target="_blank">
            {{ store.siteInfo?.phone_number
              ?.split('\r\n')[0] }}
          </a>
        </div>
        <!-- Locales  -->
        <div>
          <HomeHeaderLocales />
        </div>
      </div>
    </div>


 

</div>
    
</template>


<style scoped>
.contactImgs>img {
  width: 28px;
  height: 28px;

}
</style>