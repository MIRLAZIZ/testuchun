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
</script>
<template>
    <div>
        <UiBreadcrumb />

        <div class="w-full flex justify-center">
            <div class="w-[1440px] flex justify-between">
                <div class="2xl:w-[1076px] w-full bg-white mt-10 rounded-xl p-8 ">

                    <UiCarousel :data="data" />

                </div>

                <div class="w-[348px] bg-white mt-10 rounded-xl p-8 h-[1379px]"></div>

            </div>

        </div>




    </div>
</template>

<style scoped></style>