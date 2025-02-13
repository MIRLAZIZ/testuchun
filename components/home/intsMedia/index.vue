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
                class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all cursor-pointer"
                @click="openVideo(item)"
              >
                <div
                  class="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="py-4">
              <h3 class="sm:text-xl text-sm font-medium leading-7">
                {{ item.title }}
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

    <!-- Video Modal -->
    <UModal v-model="isOpen" size="xl">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100',
          base: 'p-0 bg-black',
        }"
        class="w-full  min-h-[300px]"
      >
        <div class="absolute top-4 right-4 z-50">
          <button
            @click="isOpen = false"
            class="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
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
        </div>

        <div v-if="selectedVideo" class="relative w-full h-full min-h-[300px]">
          <iframe
            class="absolute inset-0 w-full h-full rounded-md"
            v-if="getVideoUrl(selectedVideo, true)"
            :src="getVideoUrl(selectedVideo, true)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<style scoped>
/* Optional: Add smooth transition for hover effects */
.transition-all {
  transition: all 0.3s ease;
}
</style>