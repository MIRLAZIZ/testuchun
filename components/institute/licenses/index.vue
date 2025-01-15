<script setup>
import certificat from '~/assets/imgs/kampus/certifacat.png'
import certificat2 from '~/assets/imgs/kampus/certifacat2.png'


const items = [
    { id: 1, title: 'Toshkent menejment va iqtisodiyot instituti', date: '11.11.2024', img: certificat2 },
    { id: 2, title: 'Toshkent menejment va iqtisodiyot instituti', date: '11.11.2024', img: certificat2 },
    { id: 3, title: 'Toshkent menejment va iqtisodiyot instituti', date: '11.11.2024', img: certificat2 },
    { id: 4, title: 'Toshkent menejment va iqtisodiyot instituti', date: '11.11.2024', img: certificat2 },
    { id: 5, title: 'Toshkent menejment va iqtisodiyot instituti', date: '11.11.2024', img: certificat },
    { id: 6, title: 'Toshkent menejment va iqtisodiyot instituti', date: '11.11.2024', img: certificat },

] 
const isOpen = ref(false)

</script>
<template>
    <div class="w-[1076px]">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="item in items" :key="item.id" @click="isOpen = true"
                class=" w-[348px]  h-[600px] p-3 bg-white rounded-xl flex flex-col justify-between certificate">

                <div class="h-[459px]  relative">
                    <img :src="item.img" alt="" class="w-full h-full">

                    <div
                        class="absolute bottom-0 left-0  certificateEye  rounded-xl w-full h-[459px] bg-[#06203D66] opacity-80 flex justify-center items-center">
                        <button class="w-14 h-14 bg-[#BEC4CB] rounded-xl flex justify-center items-center ">
                            <UIcon name="i-heroicons-eye" class="w-8 h-8 text-white" />

                        </button>
                    </div>
                </div>

                <div class="flex items-center gap-2 ">
                    <div class="w-[5px] h-[5px] bg-[#F7483B] rounded-full"></div> <span class="text-[#9A999B]">{{
                        item.date }}</span>
                </div>

                <h1 class="text-xl  font-medium">
                    {{ item.title }}
                </h1>

            </div>
        </div>

        <div class="flex justify-center mt-6">
            <button
                class="text-base w-[217px] h-[48px] px-8 bg-white rounded-lg flex justify-between items-center">Ko'proq
                ko'rish
                <UIcon name="i-heroicons-plus" class="  w-6 h-6 text-[#F7483B]" />
            </button>
        </div>



        <div class="mt-16  p-8  bg-white rounded-xl pr-16">
            <h1 class="text-[28px] text-[#06203D]   mb-6">Toshkent menejment va iqtisodiyot instituti:
                Sizning
                muvaffaqiyat
                yo'lingiz!</h1>
            <p class="text-[20px] ">
                Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot,
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
                davom etmoqdamiz.
            </p>
        </div>




        <InstituteLicensesEyeLicenses  v-model:isOpen="isOpen" />

    </div>
</template>


<style scoped>
.certificateEye {
    opacity: 0;
    transition: opacity 0.5s ease;
}

.certificate :hover .certificateEye {
    opacity: 1;
}
</style>