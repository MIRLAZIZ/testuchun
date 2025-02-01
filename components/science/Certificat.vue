<template>
    <div>
        <div class="main_branch">
            <div
                class="2xl:w-[1076px] grid 2xl:grid-cols-3  2xl:gap-6 xl:w-[900px] xl:gap-2 xl:justify-center xl:grid xl:grid-cols-3  lg:w-[650px]  md:w-[600px] lg:grid-cols-2  lg:gap-2 sm:w-[600px]  sm:grid-cols-2 sm:gap-4 main_box">
                <div class="2xl:w-[348px] rounded-xl p-3 border-[#E6EDFA] border bg-[#FFFFFF] xl:w-[300px] main_box_wrapper cursor-pointer "
                    v-for="item in props.data" :key="item.id" @click="$router.push(`/news-inner/${item.slug}`)">


                    <div class="2xl:w-[324px] h-[200px] mb-4 xl:w-[100%] lg:w-[100%]">
                        <!-- <img src="../../assets/imgs/talim/instetut.svg" alt=""> -->
                        <img :src="item.images[0][store.currentImage]" alt="" class="w-full h-full rounded-lg">

                    </div>


                    <div>
                        <div class="flex gap-2">
                            <img v-if="item.date" class="w-5 h-5" src="/assets/imgs/talim/Calender.png" alt="">
                            <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">{{ item.date ? item.date.substring(0, 10) : '' }}
                            </p>
                        </div>
                        <div>
                           
                            <p class="font-medium text-xl">{{ item.title ? item.title : '' }}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useHomeStore } from "~/store/home";

const store = useHomeStore();

// Routerni chaqirish
const router = useRouter();

const props = defineProps({
    data: {
        type: Array,
        required: true,
        default: () => [],
    },
});




</script>

<style scoped>
@media (max-width:1024px) {
    .main_branch {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width:640px) {
    .main_box {
        width: 300px;
        gap: 2em;
        display: grid;
        justify-content: center
    }

    .main_box_wrapper {
        width: 300px;
        padding: 2em
    }
}
</style>