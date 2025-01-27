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

            <div class="2xl:w-[1076px] w-full xl:w-[900px] lg:w-[655px] md:w-[650px] sm:w-[600px] box_wrapper">
                <div>
                </div>
                   
            </div>
        
        </div>


        <AbuturentSteps />
        <AbuturentRequirements />

    </div>
</template>


<style lang="scss" scoped></style>