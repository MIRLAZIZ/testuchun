<script setup >
const  isMenuOpen = ref(false)
    function toggleMenu(){
      isMenuOpen.value = !isMenuOpen.value;
      console.log('isMenuOpen',isMenuOpen)
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
            <p class="text-[#5D5D5F] text-[14px] ml-1  font-normal">Shahar: <span
                    class="text-[#020105] leading-tight ml-2	">Toshkent, Yakkasaroy tumani, Shota Rustaveli
                    ko'chasi, 114</span></p>
        </div>



        <!-- contacts -->
        <div class="flex justify-between items-center xl:w-[35%] lg:w-[45%] md:w-[50%]">

            <div class="flex justify-between contactImgs w-[30%]">
                <a href=""> <img src="/assets/imgs/home/telegram.png" alt=""></a>
                <a href=""> <img src="/assets/imgs/home/instagram.png" alt=""></a>
                <a href=""><img src="/assets/imgs/home/facebook.png" alt=""></a>
                <a href=""> <img src="/assets/imgs/home/twiter.png" alt=""></a>



            </div>

            <!-- tel number -->
            <div>
                <a href="tel:+998992000202" class="text-[#1E1A22]">
                    +998 99 200 02 02
                </a>

            </div>

            <!-- Locales  -->
            <div>
                <HomeHeaderLocales />
            </div>

        </div>
    </div>


  <!-- <nav class="lg:hidden sm:flex items-center justify-between p-4 shadow-md">
    <div class="flex items-center space-x-2">
      <img src="" alt="Logo" class="w-10 h-10" />
    </div>

    <div class="hidden lg:flex items-center space-x-4">
      <button class="w-12 h-12 bg-red-500 text-white rounded-lg flex justify-center items-center">
        <i class="fas fa-sign-out-alt"></i>
      </button>
      <button class="w-12 h-12 bg-gray-100 rounded-lg flex justify-center items-center">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <button
      class="lg:hidden w-10 h-10 bg-gray-100 rounded-lg flex justify-center items-center"
      @click="toggleMenu()"
    >
      <i class="fas fa-bars">s</i>
    </button>
  </nav>


  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center "
    @click.self="toggleMenu"
  >
    <div class="w-[100%] bg-white h-full  p-4 ">
      <ul class="space-y-4">
        <li><button class="text-red-500">Log Out</button></li>
        <li><button>Menu</button></li>
      </ul>
    </div>
  </div> -->

</div>
    
</template>


<style scoped>
/* .modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
} */
.contactImgs>img {
    width: 28px;
    height: 28px;

}
</style>