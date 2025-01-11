<script setup>
import img1 from '~/assets/imgs/home/image2.png'
import img2 from '~/assets/imgs/home/image (1).png'
import img3 from '~/assets/imgs/home/Rectangle 34.png'
const items = [
    { id: 1, img: img1, description: "O'zbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokaama qilindi" },
    { id: 2, img: img2, description: "TMI dunyo reytingida" },
    { id: 3, img: img3, description: "Toshkent Menejment va Iqtisodiyot Instituti" }

]
</script>



<template>
    <div class="px-[240px] my-[104px]">
        <!-- Section Title -->
        <h2 class="text-2xl font-Halvar  font-medium  mb-8">INSTITUTIMIZ HAQIDA VIDEOLAR</h2>

        <!-- Video Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

            <div class="" v-for="item in items" :key="item.id">
                <!-- img  -->
                <div class=" ">
                    <img :src="item.img" alt="O'zbekiston 2030"
                        class="w-full h-[275px] object-cover rounded-xl" />
                </div>


                <div class="py-4">
                    <h3 class="text-xl font-medium  leading-7">
                        {{ item.description }}
                    </h3>


                    <button class="text-[#F7483B] hover:text-[#F7483B] mt-4 flex items-center font-medium">

                        <img src="/assets/imgs/home/play-circle.png" alt="" class="mr-2"> Videoni ko'rish

                    </button>
                </div>


            </div>

        </div>
    </div>
</template>