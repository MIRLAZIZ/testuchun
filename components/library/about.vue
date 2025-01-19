<template>
<div>
    <div class="flex w-[1076px] gap-8 h-[632] bg-white  p-8 rounded-xl border-[#E6EDFA]-1 " v-for="item in props.data" :key="item.id">
        <div>
            <!-- <img class="w-[199px] h-[254px]"  src="../../assets/imgs/talim/person.svg" alt=""> -->
            <img class="w-[199px] h-[254px]"  :src="item.img" alt="">
            
        </div>
        <div class="w-[741px]" style="width:741px;" >
            <!-- <p class="mb-2 font-medium text-xl">Abduqayumov Abdumannon Abdulboriy o'g'li Abduqayumov Abdumannon Abdulboriy o'g'li</p> -->
            <p class="mb-2 font-medium text-xl">{{item.name}}</p>
           
            <!-- <p class="font-normal text-xl ">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz.
Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida talabalarga sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal o'sib borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va takomillashishda davom etmoqdamiz.</p> -->
            <p class="font-normal text-xl " >{{item.description}}</p>
            <div class="flex gap-4 mt-10  items-center">
                <div class="flex gap-4">
                    <p class="font-medium text-base" >0</p>
                    <div>
                        <img src="../../assets/imgs/talim/Eye.png" alt="">

                    </div>
                </div>
                <div class="flex rounded-lg gap-4" style="border:1px solid #DCE5F5;padding:13px 32px">
                    <p class="font-medium text-base">link</p>
                    <div>
                         <img src="../../assets/imgs/talim/copy.png" alt="">

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script setup>
const props = defineProps({
    data: {
        type:Array,
        requered:true,
      default: ()=>[]

    }
}) 

console.log('props', props.data)
</script>

<style lang="scss" scoped>

</style>