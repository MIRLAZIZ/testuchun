<template>
  <div class="flex justify-center" v-if="videosData">
    <div class="mainContainer mb-[104px] overflow-hidden">
      <h2 class="sm:text-2xl text-[22px] font-Halvar font-medium ul_title mb-8">
        {{ store.dataTranslate["home.our_video"] }}
      </h2>

      <div data-aos="zoom-in" class="w-full overflow-x-auto lg:overflow-hidden">
        <div class="flex lg:grid lg:grid-cols-3 gap-4 w-max lg:w-full">
          <div
            class="lg:w-full w-[321px] flex-shrink-0 lg:flex-shrink"
            v-for="item in videosData.data"
            :key="item.id"
          >
            <!-- Video Preview -->
            <div class="relative w-full aspect-video h-[275px]">
              <iframe
                class="w-full h-[275px] rounded-lg shadow-lg"
                v-if="getVideoUrl(item)"
                :src="getVideoUrl(item)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                height="275px"
                allowfullscreen
              >
              </iframe>

              <!-- Play Button Overlay -->
              <div
                class="absolute inset-0 flex items-center rounded-xl justify-center bg-black/30 hover:bg-black/40 transition-all cursor-pointer"
                @click="openVideo(item)"
              ></div>
            </div>

            <div class="py-4">
              <h3 class="sm:text-xl text-sm font-medium leading-7">
                {{item?.title?.length > 50 ? item?.title?.substring(0, 50)+ ' ...' : item?.title }} 
              </h3>
              <button
                @click="openVideo(item)"
                class="text-[#F7483B] hover:text-[#F7483B] mt-4 flex sm:text-xl text-sm items-center font-medium"
              >
                <img
                  src="/assets/imgs/home/play-circle.png"
                  alt=""
                  class="mr-2"
                />
                {{ store.dataTranslate["home.video_watch"] }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Video Player -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999] flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.75)"
    >
      <div class="relative w-[95%] xl:w-[50%]">
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute -top-10 right-0 z-[10000] p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Video Container -->
        <div class="relative pt-[56.25%]">
          <iframe
            v-if="getVideoUrl(selectedVideo, true)"
            :src="getVideoUrl(selectedVideo, true)"
            class="absolute top-0 left-0 w-full h-full rounded-lg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";
const store = useHomeStore();

const videosData = ref(null);
const iframeContainer = ref(null);
const activeVideo = ref(null);
const isOpen = ref(false);
const selectedVideo = ref(null);

const openVideo = (item) => {
  selectedVideo.value = item;
  isOpen.value = true;
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  isOpen.value = false;
  // Re-enable overflow on body when modal is closed
  document.body.style.overflow = "";
};
onMounted(() => {
  store
    .getYoutuveVideo()
    .then((res) => {
      videosData.value = res.data;
    })
    .then(() => {
      if (iframeContainer.value) {
        iframeContainer.value.forEach((item) => {
          const iframe = item.querySelector("iframe");
          if (iframe) {
            iframe.style.width = "100%";
            iframe.style.height = "275px";
            iframe.style.borderRadius = "12px";
          }
        });
      }
    });
});

const getVideoUrl = (item, isModal = false) => {
  if (!item?.video_link) return "";

  const match = item.video_link.match(
    /src="(https:\/\/www\.youtube\.com\/embed\/[^"]+)"/
  );
  if (!match || !match[1]) return "";

  try {
    const url = new URL(match[1]);

    if (isModal) {
      url.searchParams.set("autoplay", "1");
      url.searchParams.set("mute", "0");
      url.searchParams.set("controls", "1");
    } else {
      url.searchParams.set("autoplay", "0");
      url.searchParams.set("mute", "1");
      url.searchParams.set("controls", "1");
    }

    url.searchParams.set("rel", "0");
    url.searchParams.set("showinfo", "0");
    url.searchParams.set("modestbranding", "1");

    return url.toString();
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
};
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>