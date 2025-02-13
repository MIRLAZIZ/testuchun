<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

</script>

<template>
    <div class="flex justify-between items-center" v-if="store.dataTranslate">
        <div @click="$router.push('/')" class="cursor-pointer">
            <img :src="store.siteInfo?.logo" alt=""  class="w-[121px] h-[42px] object-center"/>
        </div>
        <div class="flex items-center xl:gap-[57px]">
            <HomeHeaderMenu />
            <div class="2xl:ml-6">
                <button
                    class="bg-[#F7483B] w-[196px] navbar_height h-[48px] rounded-lg font-medium text-white text-base flex justify-center items-center">
                    <a href="https://register.timeedu.uz/" target="_blank">{{ store?.dataTranslate['header.register']
                        }}</a> </button>
            </div>
        </div>
    </div>
</template>
<style  scoped>
@media (max-width:1450px){
    .navbar_height{
        height:38px;
        font-weight: 400;
        font-size: 14px;
        width: 130px;
    }   
}

</style>