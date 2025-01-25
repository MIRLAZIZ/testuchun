<template>
    <div>
        <!-- img left  -->
        <div class="flex justify-between  " v-if="props.data?.position === 0">

            <!-- card Img  -->
            <div class="w-[500px] h-[416px]  ">
                <NuxtImg :src="props.data?.photo[0][store.currentImage]" alt="" class="w-full h-full rounded-xl" />
            </div>

            <div class="rounded-xl h-[416px] w-[560px] p-4 border bg-white flex flex-col justify-center ">
                <div>
                    <p class="font-medium text-2xl mb-4 ">{{ props.data?.title }}</p>
                    <p v-html="props.data?.text"></p>

                </div>                
            </div>
        </div>



        <!-- img right -->
        <div class="flex justify-between " v-else>

            <div class="rounded-xl w-[560px] flex flex-col justify-center bg-white p-6 ">
                <p class="font-medium text-2xl mb-6 ">{{ props.data.title }}</p>
                <p v-html="props.data.text"></p>
            </div>


            <div class="w-[500px] h-[416px] ">
                <NuxtImg :src="props.data?.photo[0][store.currentImage]" alt="img" class="w-full h-full rounded-xl" />
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

