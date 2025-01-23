<template>
    <div class="flex justify-center">
        <div class="mainContainer h-[249px] my-[104px] ">

            <h1 class="font-Halvar font-medium text-[28px]">FOYDALI LINKLAR</h1>

            <div class="relative mt-8">
                <UCarousel v-slot="{ item }" :items="props.items"  ref="carousel" class="h-[370px]">

                    <div class="w-[348px]  h-[370px] rounded-xl p-3  flex flex-col justify-between bg-white mr-4" >
                        <img :src="item.img" width="320" height="200" class="w-[324px] h-[200px] mb-4">
                        <!-- <hr> -->   
                            <div class="flex gap-2">
                                <img class="w-5 h-5" src="/assets/imgs/talim/Calender.png" alt="">
                                <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">11 11 2024</p>
                            </div>
                        <p class="font-medium text-xl text-black">{{ item.link }}</p>

                    </div>
                </UCarousel>


                <!-- arrow right  -->
                <div class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer translate-x-16">
                    <!-- <img src=" /assets/imgs/home/angle-right.png" alt="" @click="$emit('right')"> -->
                    <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-[#72705F]" @click="goToNext" />
                </div>

                <!-- arrow left  -->
                <div class="absolute left-0 top-1/2  -translate-y-1/2 cursor-pointer -translate-x-16">
                    <!-- <img                src="/assets//imgs/home/angle-left.png" alt="" @click="$emit('left')"> -->
                    <UIcon name="i-heroicons-chevron-left" class="w-9 h-16 text-[#72705F]" @click="goToPrev" />

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        require: true,
        default: []
    }
})



const carousel = ref(null)
// Function to go to the previous slide
const goToPrev = () => {

    if (carousel.value) {
        carousel.value.prev(); // UCarouselning prev() funksiyasi
    }
};

// Function to go to the next slide
const goToNext = () => {
    if (carousel.value) {
        carousel.value.next(); // UCarouselning next() funksiyasi
    }
};


</script>

<style scoped></style>