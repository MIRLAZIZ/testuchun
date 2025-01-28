<template>
    <div class="main_branch">
        <div
            class="flex 2xl:w-[1076px] gap-8 h-[632] bg-white  p-8 rounded-xl border-[#E6EDFA]-1  xl:w-[850px]  lg:w-[650px] md:w-[750px] sm:w-[620px] main_box">
            <div>
                <img class="w-[199px] h-[254px] img1 rounded-lg" :src="props.data?.photo[store.currentImage]" alt="">
            </div>


            <div class="w-[741px] img1 flex flex-col justify-between">

                <div>
                    <p class="mb-2 font-medium text-xl main_box_width ">{{ props.data?.name }}</p>
                    <p class="font-normal text-xl main_box_width ">{{ props.data?.position }} </p>
                </div>

                <div class="flex gap-4 mt-10  items-center">
                    <div class="flex gap-4">
                        <p class="font-medium text-base">0</p>
                        <div>
                            <img src="/assets/imgs/talim/Eye.png" alt="">
                        </div>
                    </div>



                    <div class="relative ">
                        <span v-if="isCopied" class="copied-text absolute" @animationend="hideCopiedText">
                            Ko'chirildi
                        </span>
                        <div class="flex rounded-lg gap-4 cursor-pointer"
                            style="border:1px solid #DCE5F5;padding:13px 32px" @click="copyLink">
                            <p class="font-medium text-base">link</p>
                            <div>
                                <img src="/assets/imgs/talim/copy.png" alt="">
                            </div>
                        </div>

                    </div>






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
        requered: true,
        default: () => []

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
        width: 350px !important;
        height: auto !important;
    }

    .img1 {
        width: 100%;
    }

    .main_box_width {
        width: 300px;
    }
}


/* Ko'chirildi matni uslubi */
.copied-text {
    position: absolute;
    top: -30px;
    /* Matnning boshlang'ich pozitsiyasi */
    left: 50%;
    transform: translateX(-50%);
    background-color: #4caf50;
    /* Yashil fon */
    color: white;
    /* Oq matn */
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeInOut 2.5s ease-in-out;
    z-index: 1000;
    /* Matn yuqorida ko'rinishi uchun */
}

/* Yangi va yumshoq animatsiya */
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