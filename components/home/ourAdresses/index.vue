<script setup>
import { useHomeStore } from '~/store/home'
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});
const store = useHomeStore()
const addresses = [
    {
        city: "home.toshkentAddress",
        address: "header.address",
        mapSrc:
            "https://yandex.uz/maps/-/CHapbBnH",
    },
    {
        city: "home.ferganaAddress",
        address: "home.ferganaAddressText",
        mapSrc:
            "https://yandex.uz/maps/-/CHapbBnH",
    },
];

function convertYandexMapLink(url) {
  return url.replace("https://yandex.uz/maps/", "https://yandex.uz/map-widget/v1/");
}
</script>

<template>
    <div class="flex justify-center">
        <div  v-if="isClient" class="mainContainer" data-aos="fade-up">
            <div class=" ">
            <h2 class="font-Halvar font-medium sm:text-[28px]  text-xl">{{ store.dataTranslate['home.location'] }}</h2>       
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 box_flex">
                <div v-for="(address, index) in addresses" :key="index"
                    class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="relative sm:h-full h-[265px]">
                        <iframe :src="convertYandexMapLink(address.mapSrc)" class="w-full h-[502px]" allowfullscreen=""
                            loading="lazy"></iframe>
                       
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
@media (max-width:530px){
    .box_our{
        width:340px;   
        left: 3px; 
        padding: 10px;
        height: 90px;
    }
}
</style>
