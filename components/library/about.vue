<template>
    <div class="">
        <div v-if="props.data"
            class="flex gap-8 h-[632] bg-white  p-8 rounded-xl border-[#E6EDFA]-1   main_box">
            <div class="  sm:w-[200px] ">
                <div class="md:w-[199px] sm:w-[210px] w-[300px] sm:h-[254px] h-[361px] rounded-lg ">
                <img class=" w-full h-full rounded-lg object-cover" :src="props.data?.photo[store.currentImage]" alt="">

                </div>
            </div>
            <div class="lg:w-[68%] md:w-[72%]  sm:w-[55%] img1 flex flex-col justify-between">
                <div>
                    <p class="mb-2 sm:font-medium sm:text-xl text-lg  main_box_width ">{{ props.data?.name }}</p>
                    <p class="sm:font-normal sm:text-xl text-sm main_box_width " v-html="props.data?.dec"> </p>
                </div>
                <div class="flex gap-4 mt-10  items-center">
                  
                    <div class="relative ">
                        <span v-if="isCopied" class="copied-text absolute" @animationend="hideCopiedText">
                            copied
                        </span>
                        <div class="flex rounded-lg gap-4 cursor-pointer"
                            style="border:1px solid #DCE5F5;padding:13px 32px" @click="copyLink">
                            <p class="font-medium text-base">link</p>
                            <div>
                                <img src="/assets/imgs/talim/copy.png" alt="" class="object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
        <h1 class="text-center font-Halvar text-3xl">
          {{ store.dataTranslate["header.do_not"] }}
        </h1>
      </div>    </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home';
const store = useHomeStore()
const props = defineProps({
    data: {
        type: Object,
        requered: true,
        default: () => ([])

    }
})
const isCopied = ref(false)
const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            isCopied.value = true
        })
        .catch(() => {
            alert('Link kopyalanmadi')
        })

}


const hideCopiedText = () => {
    isCopied.value = false;
}

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
        display: flex;
        flex-direction: column;
        /* width: 350px !important; */
        height: auto !important;
        align-items: center ;
    }

    .img1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* .main_box_width {
        width: 300px;
    } */
}


.copied-text {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeInOut 2.5s ease-in-out;
    z-index: 1000;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translate(-50%, -10px) scale(0.95);
    }

    20% {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
    }

    80% {
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -10px) scale(0.95);
    }
}
</style>