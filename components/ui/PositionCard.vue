<template>
    <div>
        <!-- img left  -->
        <div class="flex justify-between  " :class="{
            'flex-row-reverse': props.data?.position === 0, 'mt-10': props.data?.order !== Math.min(props.data?.order)
        }">

            <!-- card Img  -->
            <div class="w-[47%] h-[416px]  ">
                <NuxtImg :src="props.data?.photo[0][store.currentImage]" alt="" class="w-full h-full rounded-xl" />
            </div>

            <!-- description -->
            <div class="rounded-xl h-[416px] w-[51.5%] p-4 border bg-white flex flex-col justify-center ">
                <div>
                    <p class="font-medium text-2xl mb-4 ">{{ props.data?.title }}</p>
                    <p v-html="props.data?.text"></p>

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
        default: () => { },

    }
})


</script>
