<template>
    <div>
        <div class="">

            <div class="w-[348px] bg-white rounded-lg p-4 border ">

                <div class="bg-[#06203D] h-[57px] text-white flex items-center justify-between rounded-md pl-4 ">
                    <h2 class="text-lg ">Ta'lim dasturlari</h2>

                    <div class="flex items-end h-full">
                        <img src="/assets/imgs/talim/Group 3.png" alt="" class="w-[33px] h-[32px]">
                    </div>
                </div>


                <div class="mt-3 mb-4">
                    <!-- {{ getMenuLink }} -->

                    <div v-for="menu in getMenuLink.items" :key="menu.id"
                        class="flex items-center justify-between  text-slate-900  rounded-lg cursor-pointer  px-4 h-[57px] hover:border hover:border-[#F4F6FA] "
                        :class="{ 'bg-[#F4F6FA]': $route.fullPath === menu.routerlink }"
                        @click="$router.push(menu.routerlink)">
                        <span class="text-lg font-medium">{{ menu.name }}</span>


                        <UIcon name="i-heroicons-check" class="w-6 h-6 text-[#F7483B] "
                            v-show="$route.fullPath === menu.routerlink" />

                    </div>
                </div>
            </div>



            <div class="w-[348px] p-2 mt-6 bg-white rounded-xl">



                <!-- coronavirus -->
                <div class="rounded-xl  caronaVirus ">

                    <div class="flex flex-col justify-between  h-full ">

                        <div class=" pr-[58px] flex justify-end">
                            <img src="/assets/imgs/talim/coronavirus.png" alt="coronavirus img"
                                class="w-[126px] h-[99px]">
                        </div>

                        <p class="font-Halvar text-xl font-medium text-white">Karantin qoidalariga rioya qiling</p>

                    </div>

                </div>


                <!-- REKTOR bilan bog'lanish  -->
                <div class="rounded-xl p-6 my-2 rektorContaner flex flex-col justify-between">

                    <div class="flex gap-x-4  ">

                        <div class="flex items-center  w-[100px]  ">
                            <img src="/assets/imgs/talim/image.png" alt="" class=" w-[64px] h-[64px] rounded-full">
                        </div>
                        <p class="text-xl font-medium font-Halvar text text-white">REKTOR Bilan Bog'laning</p>

                    </div>

                    <UButton class="w-full h-12 bg-white hover:bg-white flex items-center justify-center  
                        text-[#231101] text-base">
                        Yozish</UButton>
                </div>



                <!-- telgram  -->
                <div
                    class="rounded-xl p-6 mt-4 h-[184px] w-full bg-[#00A3FF] flex flex-col justify-between">


                    <div class="text-white  flex  justify-between w-full ">

                        <div class="w-[100%] ">
                            <p class="text-xl font-medium font-Halvar">TELEGRAM</p>

                            <div>
                                <p class="text-sm">yangiliklarni muntazam kuzatib boring</p>

                            </div>
                        </div>


                        <div class=" w-[40%] flex justify-end items-start">
                            <img src="/assets/imgs/talim/Vector.svg" alt="" class="w-[63px] h-[50px]">
                        </div>

                    </div>


                    <!-- <div class="px-10 bg-white flex items-center justify-center rounded-xl p-4"
                        style="cursor: pointer;">
                        <p class="text-slate-900 text-lg font-semibold"> Obuna bo'lish</p>
                    </div> -->

                    <UButton class="w-full h-12 bg-white hover:bg-white flex items-center justify-center  
                    text-[#231101] text-base font-medium">
                        Obuna bo'lish
                    </UButton>
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

// Tanlangan elementni saqlash uchun reactive o'zgaruvchi
const selected = ref(null);

// Tanlangan elementni yangilash funksiyasi
function selectProgram(programId) {
    selected.value = programId;
}
</script>
<style scoped>
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