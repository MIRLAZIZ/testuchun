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


// **Iframe ichidagi src ni olish va autoplay qo‘shish**
const getVideoUrl = (item) => {
    const match = item.video_link?.match(/src="([^"]+)"/);
    if (!match || !match[1]) return ""; // Agar src topilmasa bo'sh qoldiramiz

    try {
        const url = new URL(match[1]); // src ni URL qilib olamiz
        url.searchParams.set("autoplay", item.isPlaying ? "1" : "0"); 
        url.searchParams.set("mute", "1"); 
        url.searchParams.set("rel", "0"); // O'xshash videolarni o‘chiramiz
        return url.toString();
    } catch (error) {
        console.error("Invalid URL:", match[1]);
        return "";
    }
};

// **Tugma bosilganda autoplay ni yoqish**
const playVideo = (item) => {
    item.isPlaying = true; // Video boshlansin
//  item.style = { transform: 'scale(1.1)' };
item.style = { transform : 'translate:10px 10px'}
};

</script>

<template> 
<div class="flex justify-center" v-if="videosData">
    <div class="mainContainer mb-[104px] overflow-hidden">
        <h2 class="sm:text-2xl text-[22px] font-Halvar font-medium ul_title mb-8">
            {{ store.dataTranslate['home.our_video'] }}
        </h2>

    <div data-aos="zoom-in" class="w-full overflow-x-auto lg:overflow-hidden">
        <div class="flex lg:grid lg:grid-cols-3 gap-4 w-max lg:w-full">
            <div class="lg:w-full w-[321px] flex-shrink-0 lg:flex-shrink" 
                 v-for="item in videosData.data" 
                 :key="item.id"  :style="item.isPlaying ? item.style : {}" >
                 
                <div class="relative w-full aspect-video h-[275px] "   >
                    <iframe 
                        class="w-full h-[275px] rounded-lg shadow-lg"
                        v-if="getVideoUrl(item)" 
                        :src="getVideoUrl(item)" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" 
                        height="275px"
                        allowfullscreen>
                    </iframe>
                </div>

                <!-- Video Title & Button -->
                <div class="py-4">
                    <h3 class="sm:text-xl text-sm font-medium leading-7">
                        {{ item.title }}
                    </h3>
                    <button @click="playVideo(item)" 
                            class="text-[#F7483B] hover:text-[#F7483B] mt-4 flex sm:text-xl text-sm items-center font-medium">
                        <img src="/assets/imgs/home/play-circle.png" alt="" class="mr-2"> 
                        {{ store.dataTranslate['home.video_watch'] }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>

</template>
<style scoped>

</style>
