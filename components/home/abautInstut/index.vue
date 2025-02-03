<script setup>
import kampus from '~/assets/imgs/home/building-3.png'
import auditoriya from '~/assets/imgs/home/sitemap.png'
import active from '~/assets/imgs/home/multi-user.png'
import book from '~/assets/imgs/home/book-open.png'

import { useHomeStore } from '~/store/home'
const store = useHomeStore()

const items = [
    { id: 1, name: 'home.campus', img: kampus, link: '/kampus' },
    { id: 2, name: 'home.auditorium', img: auditoriya, link: '/page/auditorium' },
    { id: 3, name: 'home.lkecture_hall', img: active, link: '/page/activisthall' },
    { id: 4, name: 'home.library', img: book, link: '/students/library' },
]


</script>

<template>
    <div class="w-full flex justify-center">

        <!-- <div class="mainContainer"> -->
        <div class="mainContainer">



            <div class="box_wrapper grid grid-cols-2 gap-8 bg-white rounded-lg shadow-md  xl:h-[630px] lg:h-full p-8" style="grid-template-columns: 50% 50%;">
                <!-- Chap bo'lim -->
                <div class="flex banner_left flex-col justify-between">
                    <div>
                        <h1 class="abautTitle ">
                            {{ store.dataTranslate['home.time'] }}
                        </h1>
                        <p class="abautBody my-6 ">
                            {{ store.dataTranslate['home.time_data'] }}
                        </p>
                    </div>


                    <button
                        class=" text-white text-base bg-[#F7483B] w-[216px] h-[48px] font-medium rounded-lg flex justify-center  items-center ">
                      {{ store.dataTranslate['home.submit_application'] }}
                        <UIcon name="i-heroicons-arrow-long-right" class="w-5 h-5 text-white ml-2  " />
                    </button>


                    <div class="mt-6 grid grid-cols-2 gap-4   xl:w-[556px] lg:w-[450px] box_ul">

                        <button v-for="item in items" :key="item.id"
                            class="buttons border flex flex-col justify-between hover:bg-[#FEF0EF] hover:border-[#F7483B]"
                            @click="$router.push(item.link)">
                            <img :src="item.img" alt="" class="w-[24px] h-[24px]">
                            <p class="text-[#06203D] text-left">{{store.dataTranslate[item.name] }}</p>
                        </button>

                    </div>

                </div>

                <!-- O'ng bo'lim -->
                <div class="flex flex-col items-center   relative xl:h-full ">
                    <img src="/assets/imgs/home/Rectangle 15.png" alt="Institut binosi"
                        class="rounded-lg shadow-md abautImg" />

                    <div
                        class="absolute bg-white w-[80px] h-[80px]  flex justify-center items-center rounded-full xl:right-6 bottom-6 sm:right-15 ">
                        <img src="/assets/imgs/home/playVideo.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style>

@media (max-width:600px){   
    .abautTitle{
        font-weight: 500 !important;
        font-size: 16px !important;
    }
    .abautBody{
        font-weight: 400 !important;
        font-size: 14px !important;
    }
    .mainContainer{
        padding-left: 10px !important;
        padding-right: 10px !important;

    }
    .box_ul{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .buttons{
        max-width:100% !important;
    }
}

@media (min-width: 1400px){
    .banner_left{
        margin-left:5em;
    }
}

@media (max-width:1024px){
.box_wrapper{
    display:flex;
    flex-direction: column-reverse;
}
}

.abautTitle {
    font-family: 'Halvar Breitschrift';
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;


}

.abautBody {
    /* font-family: Golos Text; */
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
}

.buttons {
    max-width: 270px;
    height: 107px;
    padding: 15px 16px 15px 16px;
    border-radius: 8px;
}

.abautImg {
    width: 680px;
    height: 100%;
    border-radius: 8px;

}
</style>
