<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
</script>
<template>
    <div class="">
        <main>
            <div class="w-full flex gap-6  box_wrapper ">

                <div class="w-[324px] box_wrapper_width">
                    <p class="text-lg text-[#2E4259]">{{store.dataTranslate['footer.contactUs']}}</p>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/phone.png" alt="" class="mr-2 w-[26px] h-[26px]"> <a
                            href="tel:+998712009006">+998 71 200 90 06</a>
                    </div>
                </div>


                <div class="w-[324px] box_wrapper_width">
                    <p class="text-lg text-[#2E4259]">{{store.dataTranslate['footer.contactUs']}}</p>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/envelope.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a href="mailto:info@itimeedu.uz" class="">INFO@ITIMEEDU.UZ</a>

                    </div>
                </div>


                <div class="w-[712px] box_wrapper_width">
                    <p class="text-lg text-[#2E4259]  ">{{store.dataTranslate['footer.address']}}</p>
                    <div class="flex  mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/locationdot.png" alt="" class="w-[26px] h-[26px] mr-2">
                        <p>{{store.dataTranslate["header.address"]}}</p>
                    </div>
                </div>


            </div>
        </main>
        <div class="flex justify-between mt-8  text-lg  text-[#06203D] box_wrapper_li">
            <p>{{store.dataTranslate['footer.copyright']}}</p>
            <p>{{store.dataTranslate['footer.developed']}} <span class="text-[#F7483B]">NDC</span></p>
        </div>
    </div>
</template>
<style lang="css" scoped>
@media(max-width:1024px){
    .box_wrapper{
        display:flex;
        flex-direction: column;
    }
    .box_wrapper_li{
        display:flex;
        flex-direction: column;
    }
    .box_wrapper_width{
        width:100%
    }
}
</style>