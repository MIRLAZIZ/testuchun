<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
</script>
<template>
    <div class="">
        <main>
            <div class="w-full flex gap-6  box_wrapper ">

                <div class="w-[324px] box_wrapper_width">
                    <p class="sm:text-lg text-sm text-[#2E4259]">{{ store.dataTranslate['footer.contactUs'] }}</p>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/phone.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'tel:' + store.siteInfo?.phone_number?.split('|')[1]?.replace(/\s+/g, '')"
                            class="text-[#06203D] font-medium sm:text-[22px] text-sm" target="_blank">
                            {{ store.siteInfo?.phone_number
                                ?.split('|')[1] }}
                        </a>
                    </div>
                </div>


                <div class="w-[324px] box_wrapper_width">
                    <p class="text-lg text-[#2E4259]">{{ store.dataTranslate['footer.contactUs'] }}</p>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/envelope.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'mailto:' + store.siteInfo?.email" target="_blank" class="text-[#06203D] sm:text-lg  text-[12px]">{{ store.siteInfo?.email }}</a>

                    </div>
                </div>


                <div class="w-[700px] box_wrapper_width">
                    <p class="text-lg text-[#2E4259]  ">{{ store.dataTranslate['footer.address'] }}</p>
                    <div class="flex  mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/locationdot.png" alt="" class="w-[26px] h-[26px] mr-2">
                        <a href=""> {{ store.siteInfo?.address }}</a>
                    </div>
                </div>


            </div>
        </main>
        <div class="flex justify-between mt-8  text-lg  text-[#06203D] box_wrapper_li">
            <p>{{ store.dataTranslate['footer.copyright'] }}</p>
            <p>{{ store.dataTranslate['footer.developed'] }} <span class="text-[#F7483B]">NDC</span></p>
        </div>
    </div>
</template>
<style scoped>
@media(max-width:1024px) {
    .box_wrapper {
        display: flex;
        flex-direction: column;
    }

    .box_wrapper_li {
        display: flex;
        flex-direction: column;
    }

    .box_wrapper_width {
        width: 100%
    }
}
@media (max-width:600px){
    a {
        font-size: 14px !important;
    }
    p{
        font-size: 14px !important;
    }
}
    a {
        font-weight: 500;
        font-size: 22px;
        color: #06203D;
    }
    p{
        font-weight:400;
        font-size: 18px;
    }
</style>