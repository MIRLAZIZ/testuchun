<template>
  <div class=" bg-white  " :class="{ 'fixed_side': isSidebarOpen }">
    <div class="flex h-[60px] justify-between items-center   z-50 bg-white" >
        <router-link to="/" class="bg-white  ml-2  p-2 rounded-lg z-50" >
          <img src="/assets/imgs/vacansiec/menegment.png" class="h-[32px]"  alt="">
        </router-link>
        <div class="flex gap-2 items-center  mr-2 h-[48px] ">
          <a href="https://register.timeedu.uz/" >
            <img src="/assets/imgs/vacansiec/logout.png"   class="z-50 w-[50px] h-[48px]" alt="">
          </a>
            <button @click="isSidebarOpen = !isSidebarOpen" class="  p-2 rounded-lg z-50" >
              <div v-if="!isSidebarOpen" class="bg-[#F4F6FA]   rounded-lg z-50 w-[50px] flex items-center justify-center h-[48px]">
                <UIcon  name="i-heroicons-bars-3" class="w-6 h-6" /> 
              </div>       
                  <div v-else class="bg-[#F4F6FA]   rounded-lg z-50 w-[50px] flex items-center justify-center h-[48px]">
                    <UIcon  name="i-heroicons-x-mark" class="w-6 h-6" />
                  </div>
            </button>
        </div>
    </div>

    <div v-if="isSidebarOpen" class="  inset-0 bg-black bg-opacity-50 z-40" @click.self="isSidebarOpen = false">
      <div class="w-full  h-full bg-white p-6 overflow-y-auto">
        <hr>
        <ul class="">
          <li v-for="item in store.menus" :key="item.id" class="mb-2">
            <div @click.stop="toggleMenu(item)"  v-if="item.path !== '/page' && item.slug !== 'section-menu'" class="flex justify-between items-center cursor-pointer py-2">
              <span class="text-md font-normal">{{ item.title }}</span>
              <UIcon v-if="item.title !== 'SDG'" :name="item.isOpen ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="w-5 h-5" />
            </div>

            <ul v-if="item.isOpen" class=" ">
              <li v-for="option in item.children" :key="option.id" class="py-1">
                <div class="flex items-center gap-2">
                  <p @click="isSidebarOpen = false; $router.push(option.path)" class="text-[#06203D] font-normal text-sm">{{ option.title }}  </p>
                  <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 text-red-700" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      
      <div class="">
        <hr>
        <div class="px-5 py-6">
              <div class="flex items-center gap-2 text-gray-600">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-gray-500" />
              <span class="font-medium">Город:</span>
            </div>
            <p class="mt-1 text-lg text-gray-800">
              <a href="https://goo.gl/maps/xyz" target="_blank" class="underline text-black">
                Toshkent, Yakkasaroy tumani, Shota Rustaveli ko‘chasi, 114
              </a>
            </p>
        </div>
      
        <hr>
        <div class="flex gap-4  px-5 py-6">
              <a :href="store.siteInfo?.telegram" target="_blank"> <img src="/assets/imgs/home/telegram.png" alt=""></a>
              <a :href="store.siteInfo?.instagram" target="_blank"> <img src="/assets/imgs/home/instagram.png" alt=""></a>
              <a :href="store.siteInfo?.facebook" target="_blank"><img src="/assets/imgs/home/facebook.png" alt=""></a>
              <a href="" target="_blank"> <img src="/assets/imgs/home/twiter.png" alt=""></a>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()


const handleClickOutside = () => {
    store.is_open = false;
    store.optionsData = [];
};

watch(
    () => store.is_open, 
    (newValue) => {
        if (newValue===true) {
            document.addEventListener('click', handleClickOutside);
        }
         else {
            document.removeEventListener('click', handleClickOutside);
        }
    }
);



const isSidebarOpen = ref(false)

const menuItems = ref([
  { title: 'Institut', isOpen: false, subMenu: [
      { title: 'Biz haqimizda', link: '#' },
      { title: 'Bizning maqsadimiz', link: '#' },
      { title: 'Tashkiliy tuzilma', link: '#' },
      { title: 'Biz bilan bog‘laning', link: '#' },
      { title: 'Me’yoriy hujjatlar', link: '#' },
      { title: 'Litsenziya va sertifikatlar', link: '#' },
      { title: 'Rahbariyat', link: '#' },
      { title: 'Departament va bo‘limlar', link: '#' },
      { title: 'Fakultetlar', link: '#' },
      { title: 'Kafedralar', link: '#' }
    ] 
  },
  { title: 'Ta’lim dasturlari', isOpen: false, subMenu: [] },
  { title: 'Ilm fan', isOpen: false, subMenu: [] },
  { title: 'Abituriyentlar uchun', isOpen: false, subMenu: [] },
  { title: 'Yangiliklar', isOpen: false, subMenu: [] },
  { title: 'Talabalar hayoti', isOpen: false, subMenu: [] },
  { title: 'SDG', isOpen: false, subMenu: [] }
])

const toggleMenu = (menu) => {
  store.menus.forEach((item) => {
    if (item.id !== menu.id) {
      item.isOpen = false; // Boshqa menyularni yopish
    }
  })
  menu.isOpen = !menu.isOpen; // Faqat bosilgan menyuni o'zgartirish
}
</script>

<style scoped>
.fixed_side{
  position: fixed;
  z-index: 99;
  width:100%;
  height: 100%;
  overflow: auto;
 /* relative z-10 w-full h-full overflow-auto  */
}
.sidebar_top{
  margin-top:16px
}
/* Mobil uslub */
</style>
