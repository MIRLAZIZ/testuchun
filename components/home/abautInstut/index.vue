<script setup>
import kampus from "~/assets/imgs/home/building-32.svg";
import auditoriya from "~/assets/imgs/home/sitemap2.svg";
import active from "~/assets/imgs/home/multi-user2.svg";
import book from "~/assets/imgs/home/book-open2.svg";

import { useHomeStore } from "~/store/home";

const isOpen = ref(false);
const selectedVideo = ref('https://www.youtube.com/embed/BN73wVowi-o?si=rAV_mbdrDDQYIitY');
const player = ref('');
const openVideo = (item) => {
  isOpen.value = true;
  document.body.style.overflow = "hidden";
  player.value = '&autoplay=1&rel=0';
};
const closeModal = () => {
  isOpen.value = false;
  player.value = '';
  // Re-enable overflow on body when modal is closed
  document.body.style.overflow = "";
};

const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});
const goToExtraLink = (url) => {
  if (url) {
    // URL to‘liq ekanligini tekshiramiz
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  }
};

const store = useHomeStore();
const items = [
  { id: 1, name: "home.campus", img: kampus, link: "/kampus" },
  { id: 2, name: "home.auditorium", img: auditoriya, link: "/page/auditorium" },
  {
    id: 3,
    name: "home.lkecture_hall",
    img: active,
    link: "/page/activisthall",
  },
  { id: 4, name: "home.library", img: book, link: "/students/library" },
];
</script>

<template>
  <div class="w-full flex justify-center  mb-[52px]">
    <!-- <div class="mainContainer"> -->
    <div class="mainContainer" v-if="store.dataTranslate['home.time']">
      <div
        class="box_wrapper grid grid-cols-2 gap-4 bg-white rounded-lg shadow-md h-auto lg:h-full p-7"
        style="grid-template-columns: 50% 50%"
      >
        <!-- Chap bo'lim -->
        <div
          v-if="isClient"
          data-aos="fade-up"
          class="flex banner_left flex-col justify-between"
        >
          <div>
            <h1 class="abautTitle">
              {{ store.dataTranslate["home.time"] }}
            </h1>
            <p class="abautBody my-6">
              {{ store.dataTranslate["home.time_data"] }}
            </p>
          </div>

          <button
            @click="store.gotoRegister"
            class="text-white text-base bg-[#F7483B] w-[216px] h-[48px] font-medium rounded-lg flex justify-center items-center"
          >
            {{ store.dataTranslate["home.submit_application"] }}
            <UIcon
              name="i-heroicons-arrow-long-right"
              class="w-5 h-5 text-white ml-2"
            />
          </button>

          <div class="mt-6 grid grid-cols-2 gap-4 box_ul">
            <button
              v-for="item in items"
              :key="item.id"
              class="buttons border flex flex-col justify-between hover:bg-[#FEF0EF] hover:border-[#F7483B]"
              @click="$router.push(item.link)"
            >
              <img :src="item.img" alt="" class="w-[24px] h-[24px]" />
              <div class="flex justify-between w-full">
                <p class="text-[#06203D] text-left">
                  {{ store.dataTranslate[item.name] }}
                </p>

                <img
                  src="/assets/imgs/talim/arrow-right-long.png"
                  alt=""
                  class="sm:hidden object-cover"
                />
              </div>
            </button>
          </div>
        </div>

        <!-- O'ng bo'lim -->
        <div
          v-if="isClient"
          data-aos="fade-down"
          class="flex flex-col items-center relative xl:h-full"
        >
          <img
            src="/assets/imgs/home/Rectangle 15.png"
            alt="Institut binosi"
            class="rounded-lg shadow-md abautImg"
          />
          <div
            @click="openVideo"
            class="absolute bg-white sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] flex justify-center items-center rounded-full right-6 bottom-6 sm:right-15 cursor-pointer"
          >
            <img src="/assets/imgs/home/playVideo.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- <Modal :isOpen="modalVisible" @close="closeModal" /> -->
     <!-- {{store.siteInfo?.yt_url}} -->


       <!-- Fixed Video Player -->
       <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999] flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.75)"
      @click="closeModal"
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
          
            :src="store.siteInfo?.yt_url+player"
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
<style>
@media (max-width: 600px) {
  .abautTitle {
    font-weight: 500 !important;
    font-size: 16px !important;
  }
  .abautBody {
    font-weight: 400 !important;
    font-size: 14px !important;
  }
  .mainContainer {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .box_ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .buttons {
    max-width: 100% !important;
  }
}

@media (min-width: 1400px) {
  /* .banner_left{
        margin-left:5em;
    } */
}

@media (max-width: 1024px) {
  .box_wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
  .abautImg {
    width: 100% !important;
  }
}

.abautTitle {
  font-family: "Halvar Breitschrift";
  font-size: 28px;
  font-weight: 500;
  line-height: 33.6px;
}

.abautBody {
  /* font-family: Golos Text; */
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

.buttons {
  /* max-width: 270px; */
  height: 107px;
  padding: 15px 16px 15px 16px;
  border-radius: 8px;
}

.abautImg {
  width: 680px;
  height: 100%;
  border-radius: 8px;
}
</style>
