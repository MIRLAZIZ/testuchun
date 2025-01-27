<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
const addresses = [
    {
        city: "home.toshkentAddress",
        address: "header.address",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0883495155067!2d69.2509969749607!3d41.285181602330304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aed0aa2176f%3A0xf17f44ae2ac45ff6!2z0YPQu9C40YbQsCDQqNC-0YLQsCDQoNGD0YHRgtCw0LLQtdC70LggMTE0LCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1736500154179!5m2!1sru!2s",
    },
    {
        city: "home.ferganaAddress",
        address: "home.ferganaAddressText",
        mapSrc:
            "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d97257.84088781128!2d71.7080594989434!3d40.37987633010603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zRmFyZ-KAmG9uYSwgQWwtRmFyZ-KAmG9uaXkgc2hvaCBrb-KAmGNoYXNpLCBZb3NobGFyIG1haGFsbGEgZnVxYXJvbGFyIHlpZ-KAmGluaQ!5e0!3m2!1sru!2s!4v1736500380740!5m2!1sru!2s",
    },
];

</script>

<template>
    <div class="flex justify-center">

        <div class="mainContainer">
            <div class=" ">
            <h2 class="font-Halvar font-medium text-[28px]">{{ store.dataTranslate['home.location'] }}</h2>
            
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 box_flex">
                <div v-for="(address, index) in addresses" :key="index"
                    class="bg-white shadow-lg rounded-lg overflow-hidden">

                    <div class="relative">
                        <iframe :src="address.mapSrc" class="w-full h-[502px]" allowfullscreen=""
                            loading="lazy"></iframe>


                        <div class="p-4 absolute  bg-white w-[580px]  py-5 px-6 rounded-xl left-6 right-6 bottom-6 flex flex-col justify-between box_our ">
                            <h3 class="">
                                <span class="">
                                {{ store.dataTranslate[address.city] }}

                                </span>
                            </h3>

                            <div class="flex mt-4">
                                <div class="w-[39px] h-[39px]">
                                    <img src="/assets/imgs/home/locationdot.png" alt="" class="">
                                </div>
                                <p class="text-lg font-Halvar font-medium  flex items-center ml-2">
                                    {{ store.dataTranslate[address.address] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
@media (max-width:1324px){
    .box_our{
        width:440px;  
        left: 10px; 

    }
}
@media (max-width:1024px){
    .box_our{
        width:540px;   
        left: 20px; 
    }
}
@media (max-width:650px){
    .box_our{
        width:440px;   
        left: 10px; 
    }
    .mainContainer h2{
        font-weight: 500;
        font-size: 20px;
    }
    .mainContainer h3{
        font-weight: 400;
        font-size: 12px;
    }
    .mainContainer p{
        font-weight: 500;
        font-size: 12px;
    }
}
@media (max-width:470px){
    .box_our{
        width:340px;   
        left: 3px; 
    }
}
</style>
