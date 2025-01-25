<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'

const datas = [
    { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
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
    <div class="">

    <!-- <div class="sm:flex sm:flex-col sm:items-center sm:justify-center"> -->

    <!-- <div class="2xl:w-[1076px] w-full xl:w-[900px] lg:w-[655px] md:w-[650px] sm:w-[600px] box_wrapper ">
        <div class=" w-full bg-white  rounded-xl sm:p-8 box_wrapper_padding ">
            <UiCarousel :data="data" />
            <UiDescriptions :data="datas" />
        </div>
    </div> -->
    <div class="w-full ">
        <div class=" w-full bg-white  rounded-xl sm:p-8 box_wrapper_padding ">
            <UiCarousel :data="data" />
            <UiDescriptions :data="datas" />
        </div>
    </div>
    </div>

</template>

<style scoped>
@media (max-width:640px){
    .box_wrapper{
        width:350px;
    }
    .box_wrapper_padding{
        padding:10px
    }
}
</style>