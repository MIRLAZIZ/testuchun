<template>
  <div>
    <div class="main_box">
      <div
        class="lg:w-[348px] border border-[#E6EDFA] lg:p-4 bg-white rounded-lg lg:block karusel-container sm:flex sm:items-center"
      >
        <div
          class="bg-[#06203D] h-[57px] text-white flex items-center justify-between rounded-md pl-4 main_box_hidden"
        >
          <h2 class="text-lg">{{ getMenuLink.title }}</h2>

          <div class="flex items-end h-full">
            <img
              src="/assets/imgs/talim/Group 3.png"
              alt=""
              class="w-[33px] h-[32px object-cover]"
            />
          </div>
        </div>

        <div class="pb-3 ml-2 flat">
          <div
            v-for="menu in getMenuLink.children"
            :key="menu.id"
            class="flex items-center justify-between mt-3 text-black rounded-lg cursor-pointer lg:h-[57px] px-4 h-[44px] hover:border hover:border-[#F4F6FA] active_link"
            :class="{ 'bg-[#F4F6FA]': $route.fullPath === menu.path }"
            @click="$router.push(menu.path)"
          >
            <span class="sm:text-lg text-sm sm:font-medium font-normal">{{
              menu.title
            }}</span>

            <UIcon
              name="i-heroicons-check"
              class="w-6 h-6 text-red-600"
              v-show="$route.fullPath === menu.path"
            />
          </div>
        </div>
      </div>

      <div
        class="karusel-container lg:w-[348px] p-2 lg:mt-6 bg-white rounded-xl lg:block sm:flex sm:gap-5 sm:justify-center sm:mb-2"
      >
        <!-- Karusel elementlari -->
        <div class="karusel-content flex lg:flex-col sm:flex-row gap-4">
          <!-- Slayd 1 -->
          <div
            class="rounded-xl caronaVirus rektor lg:w-full sm:w-[348px] bg-blue-500 text-white img_width"
            :style="{
              backgroundImage: `url(${store.reklammaData?.data[0]?.logo})`,
              'background-size': 'cover',
              'background-repeat': 'no-repeat',
              backgroundPosition: 'center',
            }"
          >
            <div class="flex items-end h-full w-full">
          
              <p class="font-Halvar text-xl font-medium px-6 pb-6">
                {{ store.reklammaData?.data[0]?.title }}
              </p>
            </div>
          </div>

          <!-- Slayd 2 -->
          <div
            class="rounded-xl p-6 lg:my-2 rektorContaner flex flex-col justify-between lg:w-full rektor sm:w-[348px] text-white"
          >
            <div class="flex gap-x-4">
              <div class="flex items-center w-[100px]">
                <img 
                  :src="store.leaderShipsdata ?  store?.leaderShipsdata[0]?.professor_employ[0]?.photo : ''"
                  alt=""
                  class="w-[64px] h-[64px] rounded-full object-cover"
                />
              </div>
              <p class="text-xl font-medium font-Halvar">
                {{ store.dataTranslate["home.roctor"] }}
              </p>
            </div>
            <a
              :href="store.dataTranslate['3.telegram']"
              target="_blank"
              class="w-full h-12 rounded-[8px] bg-white hover:bg-gray-100 flex items-center cursor-pointer justify-center text-[#231101] font-medium text-base"
            >
              {{ store.dataTranslate["home.writing"] }}
            </a>
          </div>
          <!-- Slayd 3 -->
          <div
            class="rounded-xl rektor p-6 lg:mt-4 h-[184px] w-full bg-[#00A3FF] flex flex-col justify-between lg:w-full sm:w-[348px]"
          >
            <div class="text-white flex justify-between w-full">
              <div class="w-[100%]">
                <p class="text-xl font-medium font-Halvar">
                  {{ store.dataTranslate["home.telegram"] }}
                </p>
                <div>
                  <p class="text-sm">
                    {{ store.dataTranslate["home.telegram_watch"] }}
                  </p>
                </div>
              </div>
              <div class="w-[40%] flex justify-end items-start">
                <img
                  src="/assets/imgs/talim/Vector.svg"
                  alt=""
                  class="w-[63px] h-[50px] object-cover"
                />
              </div>
            </div>
            <a
              :href="store.dataTranslate['3.telegram']"
              target="_blank"
              class="w-full h-12 rounded-[8px] bg-white cursor-pointer hover:bg-gray-100 flex items-center justify-center text-[#231101] text-base font-medium"
            >
              {{ store.dataTranslate["home.subscribe"] }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHomeStore } from "~/store/home";

const route = useRoute();
const routePath = route.matched[0].path;
const store = useHomeStore();
const getMenuLink = computed(() => {
  let menu = store.menus.find((menu) => menu.path === routePath);

  return menu ? menu : {};
});

onMounted(() => {
  if (!store.reklammaData) {
    store.getReklama();
  }

if (!store.leaderShipsdata) {
  store.getLeaderShips().then((res) => {
    store.leaderShipsdata = res.data
  })

}
});
</script>
<style scoped>
@media (max-width: 640px) {
  .rektor {
    width: 330px !important;
  }
}

@media (max-width: 730px) {
  /* .karusel-container {
    width: 350px !important;
  } */

  .img_width {
    width: 320px;
  }
}

@media (max-width: 1024px) {
  .karusel-container {
    overflow: auto;
    display: block;
    /* width:730px; */
    /* background-color: white; */
    border-radius: 12px;
    margin-bottom: 1em;
    width: 100%;
  }
  .main_box_hidden {
    display: none;
  }
  .active_link {
    width: 250px;
  }

  .karusel-content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;
    flex-direction: row !important;
  }

  .karusel-content > div {
    flex: 0 0 auto;
    min-width: 300px;
  }

  .flat {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 1em;
  }
  .main_box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
}

.sm\:overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.sm\:overflow-x-auto {
  -ms-overflow-style: none; /* IE10+ */
  scrollbar-width: none; /* Firefox */
}

.main_box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.sm\:overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.sm\:overflow-x-auto {
  -ms-overflow-style: none;
  /* IE10+ */
  scrollbar-width: none;
  /* Firefox */
}

.wrapper {
  background-color: #06203d;
}

.box {
  background-color: #0156ba;
  width: 332px;
  height: 184px;
  border-radius: 12px;
}

.hidden {
  display: none;
}

.caronaVirus {
  background: linear-gradient(210.04deg, #0156ba 0%, #011454 100.11%);
  height: 184px;
}

.rektorContaner {
  height: 184px;
  background: linear-gradient(89.04deg, #0156ba 24.82%, #012bb7 156.07%);
}
</style>
