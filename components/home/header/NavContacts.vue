<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()
const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  console.log('isMenuOpen', isMenuOpen)
}


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

</script>
<template>
  <div>
    <div class="flex justify-between w-full  ">
      <!-- location  -->
      <div class="flex items-center">
        <img src="assets/imgs/home/location-dot.png" class="w-[20px] h-[20px]" />
        <p class="text-[#5D5D5F] text-[14px] ml-1  font-normal">{{ store?.dataTranslate['header.city'] }} :
          <span class="text-[#020105] leading-tight ml-2 underline	">{{ store.siteInfo?.address  }}</span>
        </p>
      </div>

      <!-- contacts -->
      <div class="flex justify-between items-center xl:w-[40%] lg:w-[45%] md:w-[50%]">
        <div class="flex justify-between contactImgs w-[30%]">
          <a :href="store.siteInfo?.telegram" target="_blank"> <img src="/assets/imgs/home/telegram.png" alt="" class="object-cover" ></a>
          <a :href="store.siteInfo?.instagram" target="_blank"> <img src="/assets/imgs/home/instagram.png" alt="" class="object-cover"></a>
          <a :href="store.siteInfo?.facebook" target="_blank"><img src="/assets/imgs/home/facebook.png" alt="" class="object-cover"></a>
          <a :href="store.siteInfo?.youtube" target="_blank"  class="w-7 h-7 rounded-full bg-[#EBEBEB] flex justify-center items-center"> <img src="/assets/imgs/home/youtube-svgrepo-com.svg" alt="" class="w-4 h-4 object-cover"></a>
        </div>
        <!-- tel number -->
        <div>
          <a :href="'tel:' + store.siteInfo?.phone_number?.split('|')[0]?.replace(/\s+/g, '')" class="text-[#1E1A22]" target="_blank">
            {{ store.siteInfo?.phone_number
              ?.split('|')[0] }}
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