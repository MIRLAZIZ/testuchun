<template>
  <div class="w-full">
    <loading-page v-if="loading" />
    <div>
      <div class="w-full" v-if="data">
        <div class="bg-white rounded-xl p-8 w-full">
          <div class="text-[18px] mb-8 text-[#5D5D5F] cursor-pointer">
            <span @click="$router.push('/')">{{
              store.dataTranslate["home.home"]
            }}</span
            >/
            <span @click="$router.push('/institute/kafedralar')"
              >{{ store?.menuShow?.title }} /</span
            >
            <span>
              {{ data?.last_name[store.language] }}
              {{ data?.first_name[store.language] }}
              {{ data?.surname[store.language] }}
            </span>
          </div>

          <!-- data  -->
          <div
            class="flex w-full flex-col md:flex-row gap-8 rounded-xl"
            v-if="data"
          >
            <div
              class="md:w-[283px] h-[361px] flex justify-center w-full flex-shrink-0"
            >
              <img
                :src="data.photo"
                alt=""
                class="w-full h-full sm:w-[283px] rounded-lg object-cover"
              />
            </div>
            <div class="flex flex-col w-full">
              <div>
                <p class="mb-2 font-medium text-2xl">
                  {{ data?.last_name[store.language] }}
                  {{ data.first_name[store.language] }}
                  {{ data?.surname[store.language] }}
                </p>
                <p class="font-normal text-xl text-[#9A999B]">
                  {{ data?.employ_meta?.position?.name[store.language] }}
                </p>
              </div>




              <div class="flex gap-1 lg:mt-6 mt-4 flex-col">


                <div class="flex gap-1 flex-col bg-[#F4F6FA] rounded-lg">


                  <div
                    v-if="data?.phone"
                    class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                  >
                    <img src="/assets/imgs/vacansiec/phone.png" alt="" />
                    <div>
                      <p class="text-[#5D5D5F] text-base font-normal">
                        {{ store.dataTranslate["contract.phone_number"] }}
                      </p>
                      <p>
                        <a :href="'tel:' + data?.phone" target="_blank">
                          {{ data?.phone }}
                        </a>
                      </p>
                    </div>
                  </div>


                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-1 rounded-xl w-full"
                    v-if="data?.email"
                  >
                    <img src="/assets/imgs/vacansiec/email.png" alt="" />

                    <div>
                      <p class="text-[#5D5D5F]">
                        {{ store.dataTranslate["contract.email"] }}
                      </p>
                      <p class="text-black font-normal text-base">
                        <a :href="'mailto:' + data?.email" target="_blank">
                          {{ data?.email }}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"

                    v-if="data?.employ_meta?.employ?.work_time && data.employ_meta?.employ?.work_time[store.language]"
                  >
                    <img class="w-4 h-4" :src="time" alt="" />
                    <div>
                      <p class="text-[#5D5D5F]">
                        {{ store.dataTranslate["contract.working_days"] }}
                      </p>
                      <p>
                        {{ data.employ_meta?.employ?.work_time[store.language] }}
                      </p>
                    </div>
                  </div>

                </div>

              </div>




              <div class="mt-6">
                <div>
                  <p
                    ref="text"
                    class="text"
                    v-html="
                      data?.employ_meta?.employ?.dec[store.language]?.substring(
                        0,
                        expanded
                      )
                    "
                  ></p>
                  <button
                    v-if="
                      data?.employ_meta?.employ?.dec[store.language]?.length >
                      expanded
                    "
                    @click="
                      expanded =
                        data?.employ_meta?.employ?.dec[store.language]?.length
                    "
                    class="text-red-500 font-bold"
                  >
                    {{ store.dataTranslate["contract.more"] }}...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center font-Halvar" v-else>
        <p>{{ store.dataTranslate["header.do_not"] }}</p>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useHomeStore } from "~/store/home";
import time from "@/assets/imgs/vacansiec/hour.png";

const store = useHomeStore();

const expanded = ref(50);
const data = ref(null);
const route = useRoute();
const router = useRouter();
const loading = ref(true);

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("kafedra"));
  }
  store
    .getKafedraEmploy(route.params.slug)
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>
  
 