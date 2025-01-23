<template>
    <div>
        <div class= " main_box">

            <div class="lg:w-[348px] bg-white rounded-lg p-4 lg:block  karusel-container  sm:flex sm:items-center  ">

                <div class="bg-[#06203D] h-[57px] text-white flex items-center justify-between rounded-md pl-4  main_box_hidden ">
                    <h2 class="text-lg ">{{ getMenuLink.name }}</h2>

                    <div class="flex items-end h-full">
                        <img src="/assets/imgs/talim/Group 3.png" alt="" class="w-[33px] h-[32px]">
                    </div>
                </div>


                <div class=" mb-4 flat " >
                    <div v-for="menu in getMenuLink.items" :key="menu.id"
                        class="flex items-center justify-between mt-3 text-black  rounded-lg cursor-pointer  px-4 h-[57px] hover:border hover:border-[#F4F6FA] active_link"
                        :class="{ 'bg-[#F4F6FA]': $route.fullPath === menu.routerlink }"
                        @click="$router.push(menu.routerlink)">
                        <span class="text-lg font-medium">{{ menu.name }}</span>


                        <UIcon name="i-heroicons-check" class="w-6 h-6 text-[#F7483B] "
                            v-show="$route.fullPath === menu.routerlink" />
                    </div>
                </div>
            </div>

<div class="karusel-container lg:w-[348px] p-2 lg:mt-6 bg-white rounded-xl lg:block sm:flex sm:gap-5 sm:justify-center sm:mb-2">
  <!-- Karusel elementlari -->
  <div class="karusel-content flex lg:flex-col sm:flex-row gap-4">
    <!-- Slayd 1 -->
    <div class="rounded-xl caronaVirus rektor lg:w-full sm:w-[348px] bg-blue-500 p-4 text-white img_width">
      <div class="flex flex-col justify-between h-full w-full">
        <div class="pr-[58px] flex justify-end">
          <img src="/assets/imgs/talim/coronavirus.png" alt="coronavirus img" class="w-[126px] h-[99px]">
        </div>
        <p class="font-Halvar text-xl font-medium">Karantin qoidalariga rioya qiling</p>
      </div>
    </div>
    <!-- Slayd 2 -->
    <div class="rounded-xl p-6 lg:my-2 rektorContaner flex flex-col justify-between lg:w-full rektor sm:w-[348px]    text-white">
      <div class="flex gap-x-4">
        <div class="flex items-center w-[100px]">
          <img src="/assets/imgs/talim/image.png" alt="" class="w-[64px] h-[64px] rounded-full">
        </div>
        <p class="text-xl font-medium font-Halvar">REKTOR Bilan Bog'laning</p>
      </div>
      <button class="w-full h-12 bg-white hover:bg-gray-100 flex items-center justify-center text-[#231101] text-base">
        Yozish
      </button>
    </div>
    <!-- Slayd 3 -->
    <div class="rounded-xl rektor p-6 lg:mt-4 h-[184px] w-full bg-[#00A3FF] flex flex-col justify-between lg:w-full sm:w-[348px]">
      <div class="text-white flex justify-between w-full">
        <div class="w-[100%]">
          <p class="text-xl font-medium font-Halvar">TELEGRAM</p>
          <div>
            <p class="text-sm">yangiliklarni muntazam kuzatib boring</p>
          </div>
        </div>
        <div class="w-[40%] flex justify-end items-start">
          <img src="/assets/imgs/talim/Vector.svg" alt="" class="w-[63px] h-[50px]">
        </div>
      </div>
      <button class="w-full h-12 bg-white hover:bg-gray-100 flex items-center justify-center text-[#231101] text-base font-medium">
        Obuna bo'lish
      </button>
    </div>
  </div>
</div>



        </div>
    </div>
</template>
<script setup>
import { useHomeStore } from "~/store/home";

const route = useRoute();
const routePath = route.matched[0].path;
const store = useHomeStore();
const getMenuLink = computed(() => {
    let menu = store.menus.find(menu => menu.link === routePath);
    return menu ? menu : {};
})

const programs = ref([
    { id: 1, name: 'Bakalavr' },
    { id: 2, name: 'Magistratura' },
]);
const selected = ref(null);
function selectProgram(programId) {
    selected.value = programId;
}


</script>
<style scoped>
@media(max-width:640px){
    .rektor{
        width:348px
    }
}
@media (max-width: 730px){
      .karusel-container {
            width:350px !important;     
     }
     .img_width{
        width:320px;
     }
}
@media (max-width: 1024px) {
  .karusel-container {
    overflow-x: auto;
    display: block; 
    width:730px;
    overflow: auto;
    background-color: white;
    border-radius:12px;
    margin-bottom:1em;

  }
  .active_link{
    width:250px;
  }

  .karusel-content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap; /* Elementlarni bir qatorda joylash */
    gap: 1rem; /* Elementlar orasidagi masofa */
  }

  .karusel-content > div {
    flex: 0 0 auto; /* Elementlar o'z o'lchamida qoladi */
    min-width: 300px; /* Minimal kenglikni belgilash */
  }
  .flat{
    display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      /* grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); */
    align-items: center;
    gap:1em
  }
    .main_box{
        display:flex ;
        justify-content:center;
        flex-direction: column;
        width:full; align-items:center; 
    }
}

  .sm\:overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
  .sm\:overflow-x-auto {
    -ms-overflow-style: none; /* IE10+ */
    scrollbar-width: none; /* Firefox */
  }



.wrapper{
    background-color:#06203D;
}
.box{
        background-color:#0156BA;
        width:332px;
        height:184px;
        border-radius:12px; 
}
.hidden {
    display: none;

}

.caronaVirus {
    background: linear-gradient(210.04deg, #0156BA 0%, #011454 100.11%);
    height: 184px;
    padding: 0 24px 24px 24px;
}


.rektorContaner {
    height: 184px;
    background: linear-gradient(89.04deg, #0156BA 24.82%, #012BB7 156.07%);

}
</style>