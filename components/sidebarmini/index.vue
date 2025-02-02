<template>
  <div class="h-[60px] bg-white">
    <!-- Sidebar toggle button -->
    <div class="flex justify-between items-center mt-4 z-50 bg-white">
        <router-link to="" class="bg-white  ml-2  p-2 rounded-lg z-50" >
          <img src="/assets/imgs/vacansiec/menegment.png" :class="{ 'fixed': isSidebarOpen }" alt="">
        </router-link>
        <div class="flex gap-2  mr-2 ">
          <a href="https://register.timeedu.uz/">
            <img src="/assets/imgs/vacansiec/logout.png"  class="z-50" alt="">

          </a>
            <button @click="isSidebarOpen = !isSidebarOpen" class="  p-2 rounded-lg z-50" >
              <div v-if="!isSidebarOpen" class="bg-[#F4F6FA]  p-2 rounded-lg z-50">
              <UIcon  name="i-heroicons-bars-3" class="w-6 h-6" />

              </div>
              <div v-else class="fixed bg-[#F4F6FA] ">
                 <UIcon  name="i-heroicons-x-mark" class="   fixed w-6 h-6 right-5" />

              </div>
            </button>
        </div>
       
    </div>


    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click.self="isSidebarOpen = false">
      <div class="w-full  h-full bg-white p-6 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
        </div>
        <ul class="mt-20 ">
          <li v-for="item in store.menus" :key="item.id" class="mb-2">
            <div @click.stop="toggleMenu(item)"  v-if="item.path !== '/page' && item.slug !== 'section-menu'" class="flex justify-between items-center cursor-pointer py-2">
              <span class="text-lg font-medium">{{ item.title }}</span>
              <UIcon v-if="item.title !== 'SDG'" :name="item.isOpen ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="w-5 h-5" />
            </div>

            <ul v-if="item.isOpen" class="ml-4 text-gray-700">
              <li v-for="option in item.children" :key="option.id" class="py-1">
                <div class="flex items-center gap-2">
                  <p @click="isSidebarOpen = false; $router.push(option.path)">{{ option.title }}  </p>
                  <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 text-red-500" />
                </div>
              </li>
            </ul>
          </li>
        </ul>




  <div class="p-4">
    <div class="flex items-center gap-2 text-gray-600">
      <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-gray-500" />
      <span class="font-medium">Город:</span>
    </div>
    <p class="mt-1 text-lg text-gray-800">
      <a href="https://goo.gl/maps/xyz" target="_blank" class="underline text-black">
        Toshkent, Yakkasaroy tumani, Shota Rustaveli ko‘chasi, 114
      </a>
    </p>

    <div class="flex gap-4 mt-4">
      <!-- <a href="https://t.me/" target="_blank" class="social-icon">
      <img src="/assets/imgs/vacansiec/telegram1.png" alt="">
      </a>
      <a href="https://instagram.com/" target="_blank" class="social-icon">
      <img src="/assets/imgs/vacansiec/instagram1.png" alt="">

      </a>
      <a href="https://facebook.com/" target="_blank" class="social-icon">
      <img src="/assets/imgs/vacansiec/facebook.png" alt="">

      </a>
      <a href="https://twitter.com/" target="_blank" class="social-icon">
      <img src="/assets/imgs/vacansiec/twitter.png" alt="">

      </a> -->
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
.fixed{
  display: fixed;
}
/* Mobil uslub */
</style>
