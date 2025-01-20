<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()



</script>
<template>

    <div class="flex justify-between w-full  ">


        <!-- location  -->
        <div class="flex items-center">
            <img src="assets/imgs/home/location-dot.png" class="w-[20px] h-[20px]" />
            <p class="text-[#5D5D5F] text-[14px] ml-1  font-normal">{{ store?.dataTranslate['header.city'] }} :
                <span class="text-[#020105] leading-tight ml-2 underline	">{{ store?.dataTranslate['header.address'] }}</span>
            </p>
        </div>

        <div class="flex justify-between items-center w-[35%]">

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
</template>


<style scoped>
.contactImgs>img {
    width: 28px;
    height: 28px;

}

</style>