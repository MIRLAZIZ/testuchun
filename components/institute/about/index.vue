<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'
import gov from '~/assets/imgs/home/gov.png'
import gov1 from '~/assets/imgs/home/gov1.png'
import creditExpress from '~/assets/imgs/home/creditExpress.png'
import link1 from '~/assets/imgs/home/link1.png'

import herg from '~/assets/imgs/home/image 149.png'
import econom from '~/assets/imgs/home/moliya.png'


const data = [
    imgcarousel,
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
    'https://picsum.photos/600/800?random=5',
    'https://picsum.photos/600/800?random=6',
    'https://picsum.photos/600/800?random=1',
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
]

const items = [
    { id: 1, img: link1, link: 'wwwm.constitution.uz' },
    { id: 2, img: gov1, link: "www.gov.uz/oz/edu" },
    { id: 2, img: gov, link: "www.gov.uz" },
    { id: 2, img: creditExpress, link: "www.imv.uz" }


]
const items2 = [
    { id: 1, img: herg, link: 'wwwm.constitution.uz' },
    { id: 2, img: gov, link: "www.gov.uz/oz/edu" },
    { id: 2, img: herg, link: "www.gov.uz/oz/edu" },
    { id: 2, img: econom, link: "www.imv.uz" }


]
</script>
<template>
    <div>

        <div class="2xl:w-[1076px]">

            <div class=" w-full bg-white  rounded-xl p-8 ">

                <UiCarousel :data="data" />


                <div class="mt-8">
                    <h1 class="text-[28px] text-[#06203D]  mb-6">Toshkent menejment va iqtisodiyot instituti:
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



                <div class="mt-10">
                    <h1 class="text-[28px] text-[#06203D]  mb-6">Toshkent menejment va iqtisodiyot instituti:
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




            </div>



        </div>



    </div>
</template>

<style scoped></style>