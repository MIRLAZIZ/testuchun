<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

</script>

<template>

    <div class="flex justify-between items-center" v-if="store.dataTranslate">
        <div @click="$router.push('/')" class="cursor-pointer">
            <NuxtImg :src="store.siteInfo?.logo" alt=""  class="w-[121px] h-[42px]"/>
        </div>
        <div class="flex items-center">
            <HomeHeaderMenu />
            <div class="ml-6">
                <button
                    class="bg-[#F7483B] w-[196px] navbar_height h-[48px] rounded-lg font-medium text-white flex justify-center items-center">
                    <a href="https://register.timeedu.uz/" target="_blank">{{ store?.dataTranslate['header.register']
                        }}</a> </button>
            </div>
        </div>


    </div>
</template>
<style  scoped>
@media (max-width:1350px){
    .navbar_height{
        height:38px;
    }
}

</style>