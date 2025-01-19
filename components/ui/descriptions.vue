<template>
<div>
        <div v-for="item  in props.data" :key="item.id">
            <div class="mt-8  pr-16"  >
                <h1 class="text-[28px] text-[#06203D]  mb-6">{{item.name}}</h1>
                <p class="text-[20px] ">
                    <!-- Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot,
                    marketing,
                    boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va
                    psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va
                    amaliyotga
                    ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini
                    rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga
                    erishishlari uchun intellektual va dinamik muhit yaratamiz.
                    Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim
                    xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar
                    vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida
                    talabalarga
                    sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal
                    o'sib
                    borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va
                    takomillashishda
                    davom etmoqdamiz. -->
                    {{item.description}}
                </p>
            </div>
        </div>

         



        

</div>
            
   
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        require: true,
      default: () => []
    }
})
// console.log('datas',props.data)
</script>

<style lang="scss" scoped>

</style>