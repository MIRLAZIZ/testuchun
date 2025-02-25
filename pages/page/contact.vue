<template>
  <div class="flex justify-center w-full mt-10">
    <div class="w-full lg:w-[1052px]   ">
      <div class="px-10">
        <!-- Sarlavha -->
        <h1 class="text-[24px] font-Halvar mb-6">
          {{ store.dataTranslate["home.contacts"] }}
        </h1>

        <!-- Kontaktlar grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Telefon raqam -->
          <div
            class="bg-white p-4 rounded-lg border-[#E6EDFA]-1 flex flex-col gap-4"
          >
            <div>
              <h2 class="text-lg font-medium mb-2 flex items-center gap-1">
                <img src="/assets/imgs/vacansiec/Call.png" alt="" />
                {{ store.dataTranslate["contract.phone_number"] }}
              </h2>
              <hr />
            </div>
            <div>
              <a
                :href="
                  'tel:' +
                  store.siteInfo?.phone_number
                    ?.split('\r\n')[0]
                "
                class="text-xl font-medium"
              >
                {{ store.siteInfo?.phone_number?.split('\r\n')[0] }}</a
              >
              <br />
              <a
                :href="
                  'tel:' +
                  store.siteInfo?.phone_number
                   ?.split('\r\n')[1]
                "
                class="text-xl font-medium"
              >
                {{ store.siteInfo?.phone_number?.split('\r\n')[1] }}</a
              >
            </div>
          </div>

          <!-- Manzil -->
          <div class="bg-white p-4 rounded-lg flex flex-col gap-4">
            <div>
              <h2 class="text-base font-medium mb-2 flex items-center gap-1">
                <img src="/assets/imgs/vacansiec/Location.png" alt="" /> {{ store.dataTranslate['home.address']}}
              </h2>
              <hr />
            </div>

            <p class="font-medium text-xl">
              {{ store.siteInfo?.address }}
            </p>
            
            <p class="font-medium text-xl"> {{ store.dataTranslate['footer.fergana']}} </p>
            
          </div>

          <!-- Pochta manzili -->
          <div class="bg-white p-4 rounded-lg flex flex-col gap-4">
            <div>
              <h2 class="text-base font-medium mb-2 flex items-center gap-1">
                <img src="/assets/imgs/vacansiec/Work.png" alt="" /> {{ store.dataTranslate['contract.email']}}
              </h2>
              <hr />
            </div>

            <a
              :href="'mailto:' + store.siteInfo?.email"
              class="font-medium text-xl"
              >{{ store.siteInfo?.email }}</a
            >
          </div>

          <!-- Ijtimoiy tarmoqlar -->
          <div class="bg-white p-4 rounded-lg flex flex-col gap-4">
            <div>
              <h2 class="text-base font-medium mb-2 flex items-center gap-1">
                <img src="/assets/imgs/vacansiec/Add.png" alt="" />{{ store.dataTranslate['footer.tarmoq']}}
              </h2>
              <hr />
            </div>

            <div class="flex space-x-4 text-red-500">
              <a :href="store.siteInfo?.instagram"
                ><img src="/assets/imgs/vacansiec/Social.png" alt=""
              /></a>
              <a :href="store.siteInfo?.youtube"
                ><img src="/assets/imgs/vacansiec/youtube.png" alt=""
              /></a>
              <a :href="store.siteInfo?.telegram"
                ><img src="/assets/imgs/vacansiec/instagram.png" alt="" />
              </a>
              <a :href="store.siteInfo?.facebook"
                ><img src="/assets/imgs/vacansiec/facebook5.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeOurAdresses  class="my-[104px]" style="padding-left: 0;" />

      
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();

onMounted(() => {
 
  store.getMenuStatick('/page', route.fullPath);
  
});

</script>

