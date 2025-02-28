<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

</script>

<template>
    <div class="flex justify-between items-center" v-if="store.dataTranslate">
        <div @click="$router.push('/')" class="cursor-pointer">
            <img :src="store.siteInfo?.logo" alt=""  class=" object-center"/>
        </div>
        <div class="flex items-center xl:gap-[57px]">
            <HomeHeaderMenu />
            <div>
                <div
                    class="bg-[#F7483B]   h-[48px] px-3  navbar_height rounded-lg font-medium text-white flex justify-center items-center">
                    <a href="https://register.timeedu.uz/" target="_blank">{{ store?.dataTranslate['header.register']
                        }}</a> </div>
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

    }   
}

</style>