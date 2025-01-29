<script setup>
import img1 from '~/assets/imgs/home/image2.png'
import img2 from '~/assets/imgs/home/image (1).png'
import img3 from '~/assets/imgs/home/Rectangle 34.png'
import { useHomeStore } from '~/store/home';

const store = useHomeStore()
const items = [
    { id: 1, img: img1, description: "O'zbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokaama qilindi" },
    { id: 2, img: img2, description: "TMI dunyo reytingida" },
    { id: 3, img: img3, description: "Toshkent Menejment va Iqtisodiyot Instituti" }
]
const videosData = ref(null)
const iframeContainer = ref(null)
const actieveVideo = ref(null)

const openVideo = (item) => {
    if (item.id) {
        actieveVideo.value = item.id

    }

}
onMounted(() => {


    store.getYoutuveVideo().then(res => {
        videosData.value = res.data

    })
        .then(() => {
            if (iframeContainer.value) {
                iframeContainer.value.forEach(item => {

                    const iframe = item.querySelector('iframe');
                    if (iframe) {
                        iframe.style.width = '100%';
                        iframe.style.height = '275px';
                        iframe.style.borderRadius = '12px';
                    }
                });
            }
        })

})
</script>



<template>
    <div class="flex justify-center" v-if="videosData">

        <div class="mainContainer my-[104px]">
            <!-- Section Title -->
            <h2 class="text-2xl font-Halvar  font-medium ul_title mb-8">{{ store.dataTranslate['home.our_video'] }}</h2>

            <!-- Video Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                <div class="" v-for="item in videosData.data" :key="item.id" @click="openVideo(item)">
                    <!-- img  -->
                    <div class=" " v-show="item.id !== actieveVideo">
                        <img :src="item.images[0][store.currentImage]" alt="O'zbekiston 2030"
                            class="w-full h-[275px] object-cover rounded-xl" />
                    </div>


                    <div v-html="item?.video_link" ref="iframeContainer" v-show="item.id === actieveVideo">

                    </div>






                    <div class="py-4">
                        <h3 class="text-xl font-medium  leading-7">
                            {{ item.description }}
                        </h3>


                        <button class="text-[#F7483B] hover:text-[#F7483B] mt-4 flex items-center font-medium">

                            <img src="/assets/imgs/home/play-circle.png" alt="" class="mr-2"> {{
                                store.dataTranslate['home.video_watch'] }}

                        </button>
                    </div>


                </div>

            </div>
        </div>

    </div>
</template>
<style lang="" scoped>
/* .ul_title{
    font-weight: 500;
    font-size:22px;
} */
</style>
