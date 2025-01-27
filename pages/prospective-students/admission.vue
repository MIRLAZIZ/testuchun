<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'

const datas = [
    { id: 1, button:'yuklab olish', name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    { id: 2, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
]

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
</script>
<template>
    <div class="w-full">
        <div class=" w-full bg-white  rounded-xl p-8 ">
            <UiCarousel :data="data" />
            <UiDescriptions :data="datas" />

            <!-- <div class="mt-8  pr-16">
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
            </div> -->



            <!-- <div class="mt-10  pr-16">
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
            </div> -->
            <div class="2xl:w-[1076px] w-full xl:w-[900px] lg:w-[655px] md:w-[650px] sm:w-[600px] box_wrapper">
                <div>
                          <!-- <button
                                class="bg-[#F7483B] w-[194px]  h-[48px] flex justify-center  items-center font-medium rounded-lg text-white  mt-8">
                            Yuklab olish
                            <img src="/assets/imgs/kampus/Download.png" alt="" class="w-5 h-5 ml-4">
                        </button> -->
                </div>
                   
            </div>
        
        </div>


        <AbuturentSteps />
        <AbuturentRequirements />

    </div>
</template>


<style lang="scss" scoped></style>