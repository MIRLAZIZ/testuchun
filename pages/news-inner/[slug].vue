<template>
    <div class="flex justify-center items-center">
        <div class="2xl:w-[1076px] w-full">
            <div class=" w-full bg-white  rounded-xl p-8 mt-10">
                <div class="mb-8">
                    <div class="flex justify-between">
                        <div>
                            <p class="font-normal text-lg">Asosiy / Yangiliklar</p>
                        </div>
                        <div class="flex gap-6">
                            <div class="flex gap-2">
                                <img class="w-5 h-5" src="/assets/imgs/talim/Calender.png" alt="">
                                <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">11 11 2024</p>
                            </div>
                            <div class="flex gap-2">
                                <img class="w-5 h-5" src="/assets/imgs/talim/Eye.png" alt="">
                                <p class="text-[#5D5D5F]">899</p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="mt-8">
                        <p class="font-medium text-2xl  text[#06203D] mb-[6px]">Toshkent menejment va iqtisodiyot universiteti</p>
                        <p class="font-normal text-xl mb-[22px]">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot,</p>
                    </div> -->
                    <UiDescriptions :data="datas" />

                </div>
                <UiCarousel :data="data" />
                    <UiDescriptions :data="datas" />

                <!-- <HomeUsefulLink  /> -->

            </div>
                      <HomeUsefulLinkCarusel :items="items" />

        </div>
    </div>
  
</template>

<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'
import gov from '~/assets/imgs/talim/Yangiliklar.png'
import gov1 from '~/assets/imgs/talim/Yangiliklar.png'
import creditExpress from '~/assets/imgs/home/creditExpress.png'
import link1 from '~/assets/imgs/talim/Yangiliklar.png'

const datas = [
    { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 2, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },

]

const items = [
  { id: 1, img: link1, link: 'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi' },
  { id: 2, img: gov1, link: "Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi" },
  { id: 2, img: gov, link: "Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi" },



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

<style lang="scss" scoped>

</style>