<script setup>
import gov from '~/assets/imgs/home/gov.png'
import gov1 from '~/assets/imgs/home/gov1.png'
import creditExpress from '~/assets/imgs/home/creditExpress.png'
import link1 from '~/assets/imgs/home/link1.png'

const route = useRoute()

const items = [
    { id: 1, img: link1, link: 'wwwm.constitution.uz' },
    { id: 2, img: gov1, link: "www.gov.uz/oz/edu" },
    { id: 2, img: gov, link: "www.gov.uz" },
    { id: 2, img: creditExpress, link: "www.imv.uz" }


]

</script>

<template>
    <div class="mb-[144px] ">
        <UiBreadcrumb />
        <div class=" flex flex-col items-center">
            <div class="flex 2xl:justify-between  gap-2  box 2xl:w-[1440px]  sm:justify-evenly w-full p-2  mt-10  ">
                <NuxtPage  />
                <UiSidebar  />
            </div>
            <div v-if="$route.fullPath == '/institute'" class="w-full">
                <HomeUsefulLink :items="items" />
                <HomeOurAdresses />
            
            </div>
        </div>
    </div>

</template>
<style  scoped>
@media (max-width:1024px){
.box{
     display:flex;
    flex-direction: column-reverse;
}
}
</style>
