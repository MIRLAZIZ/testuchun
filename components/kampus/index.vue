<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'


const items = [
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
    <div>
        <div class=" bg-white  flex flex-col items-center justify-center py-[48px] h-[189px]">
            <h1 class="text-[40px] font-medium"> {{ $route.params.slug }}</h1>
            <div class="text-[#5D5D5F] text-lg">
                <button @click="$router.push('/')">Asosiy</button> / <button
                    @click="$router.push('/kampus')">Kampus</button> / <button> {{ $route.params.slug }} </button>
            </div>
        </div>



        <div class="flex justify-center ">
            <div class="lg:w-[1076px] w-full bg-white p-8 mt-10  mb-[104px] rounded-xl">

                <!-- kampus data  -->
                <div>
                    <h1 class="text-2xl font-medium">Toshkent menejment va iqtisodiyot universiteti</h1>
                    <p class="text-[20px] mt-2">
                        Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing,
                        boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va
                        psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot,
                    </p>

                </div>


                <!-- carousel  -->

                <div class="my-10">
                    <UiCarousel :data="items" />
                </div>


                <div>
                    <h1 class="text-[28px] text-[#06203D]  mb-6">Toshkent menejment va iqtisodiyot instituti: Sizning
                        muvaffaqiyat
                        yo'lingiz!</h1>
                    <p class="text-[20px] ">
                        Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing,
                        boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va
                        psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga
                        ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini
                        rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga
                        erishishlari uchun intellektual va dinamik muhit yaratamiz.
                        Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim
                        xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar
                        vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida talabalarga
                        sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal o'sib
                        borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va takomillashishda
                        davom etmoqdamiz.
                    </p>
                </div>



                <div class="mt-6 grid lg:grid-cols-3 md:grid-cols-3  md:gap-x-2  gir-cols-1 lg:gap-x-4 gap-4 my-10">

                    <div class="h-[170px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between border">
                        <div>
                            <span class="text-[40px] text-[#F7483B]">+</span>
                            <span class="text-[40px] ">16</span>
                            <hr class="bg-[#E9EEF9]">
                        </div>



                        <p class="text-[#5D5D5F] text-left text-lg">Образовательные программы</p>
                    </div>

                    <div class="h-[170px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between border">
                        <div>
                            <span class="text-[40px] ">1000</span>
                            <hr class="bg-[#E9EEF9]">
                        </div>


                        <p class="text-[#5D5D5F] text-left text-lg">количество аудитории</p>
                    </div>

                    <div class="h-[170px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between border">
                        <div>
                            <span class="text-[40px] text-[#F7483B]">+</span>
                            <span class="text-[40px] ">24m<sup class="text-[24px]">2</sup></span>
                            <hr class="bg-[#E9EEF9]">
                        </div>



                        <p class="text-[#5D5D5F] text-left text-lg">Green zone</p>
                    </div>
                </div>



                <div>
                    <h1 class="text-[28px] text-[#06203D]  mb-6">Toshkent menejment va iqtisodiyot instituti: Sizning
                        muvaffaqiyat
                        yo'lingiz!</h1>
                    <p class="text-[20px] ">
                        Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing,
                        boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va
                        psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga
                        ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini
                        rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga
                        erishishlari uchun intellektual va dinamik muhit yaratamiz.
                        Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim
                        xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar
                        vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida talabalarga
                        sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal o'sib
                        borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va takomillashishda
                        davom etmoqdamiz.
                    </p>
                </div>



            </div>

        </div>


        <div class="w-full flex justify-center mb-[144px]">
            <div class="w-[1076px]    rounded-xl p-6 pb-5 bg-white  flex lg:flex-row flex-col  ">

                <img src="/assets/imgs/kampus/image.png" alt="" class="lg:w-[532px]  w-full  lg:h-[343px] object-cover rounded ">

                <div class="lg:pl-6 lg:mt-0 mt-3 flex flex-col justify-between">
                    <div>
                        <h1 class="text-[24px] font-medium  "> Farg‘ona</h1>
                        <p class="mt-2  text-xl">Bugungi kunga qadar institut O‘zbekiston va xorijdagi xalqaro
                            universitetlar va
                            ta’lim tashkilotlari bilan hamkorlik qilib, bakalavriat va magistratura yo‘nalishlari
                            bo‘yicha
                            ta’lim dasturlari bor. </p>
                    </div>


                    <div class="">
                        <hr class="my-4 ">
                        <div class="flex justify-between cursor-pointer">
                            <span class="text-[#5D5D5F]"> Batafsil</span>
                            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />

                        </div>
                    </div>
                </div>


            </div>
        </div>




    </div>
</template>



<style scoped></style>