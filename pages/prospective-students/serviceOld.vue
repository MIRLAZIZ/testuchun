<template>
    <div>
        <div class="2xl:w-[1076px] w-full">



            <div class=" w-full bg-white  rounded-xl p-8 ">

                <UiCarousel :data="data" />
                <UiDescriptions :data="datas" />

            </div>


        </div>

    </div>
</template>

<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'

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
const datas = [
    { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 2, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    // { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },

]

</script>

<style  scoped></style>