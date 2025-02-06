<template>
    <div>
        <!-- img left  -->
        <div class="flex  gap-4 flex-col justify-between  " :class="{
            'sm:flex-row-reverse': props.data?.position === 0, 'mt-10': props.data?.order !== Math.min(props.data?.order)
        }">
            <!-- card Img  -->
            <div class="sm:w-[47%] w-[100%] h-[416px]  ">
                <NuxtImg :src="props.data?.photo[0][store.currentImage]" alt="" class="w-full h-full rounded-xl" />
            </div>
            <!-- description -->
            <div class="rounded-xl h-[416px] sm:w-[51.5%] w-full p-4 border bg-white flex flex-col justify-center ">
                <div>
                    <p class="font-medium sm:text-2xl text-sm mb-4 ">{{ props.data?.title }}</p>
                    <p class="sm:text-base text-sm " v-html="props.data?.text"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home';

const store = useHomeStore()
const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({}),

    }
})


</script>
