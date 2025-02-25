<template>
  <div class="w-full">
    <LoadingPage v-if="loading" />
    <div>
      <div class="w-full" v-if="data">
        <div class="bg-white rounded-xl cursor-pointer p-8">
          <div class="text-[18px] text-[#5D5D5F] mb-8 cursor-pointer">
            <span @click="$router.push('/')"
              >{{ store.dataTranslate["home.home"] }} /
            </span>
            <span @click="$router.push('/institute/faculties')"
              >{{ store?.menuShow?.title }} /</span
            >
            <span>
              {{ data?.first_name[store.language] }}
              {{ data?.last_name[store.language] }}
              {{ data?.surname[store.language] }}
            </span>
          </div>
          <!-- data  -->
          <div class="flex w-full flex-col md:flex-row gap-8 rounded-xl">
            <div
              class="md:w-[283px] h-[361px] flex justify-center w-full flex-shrink-0"
            >
              <img
                :src="data.employ_meta.employ[store?.currentImage2]"
                alt=""
                class="w-full h-full sm:w-[283px] rounded-lg object-cover"
              />
            </div>

            <div class="flex flex-col w-full">
              <div>
                <p class="mb-2 font-medium text-2xl">
                  {{ data.first_name[store.language] }}
                  {{ data?.last_name[store.language] }}
                  {{ data?.surname[store.language] }}
                </p>
                <p class="font-normal text-xl text-[#9A999B]">
                  {{ data?.employ_meta?.position?.name[store.language] }}
                </p>
              </div>

              <div class="flex gap-1 lg:mt-6 mt-4 flex-col">
                <div class="flex gap-1 flex-col 2xl:flex-row">
                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                    v-if="data?.phone"
                  >
                    <img src="/assets/imgs/vacansiec/phone.png" alt="" />
                    <div>
                      <p class="text-[#5D5D5F]">
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
                    class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                    v-if="data?.email"
                  >
                    <img src="/assets/imgs/vacansiec/email.png" alt="" />

                    <div>
                      <p class="text-[#5D5D5F]">
                        {{ store.dataTranslate["contract.email"] }}
                      </p>
                      <p>
                        <a :href="'mailto:' + data?.email" target="_blank">
                          {{ data?.email }}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                  v-if="
                    data.employ_meta?.employ?.work_time &&
                    data.employ_meta?.employ?.work_time[store.language]
                  "
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

              <div class="mt-6">
                <div>
                  <p
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
    </div>
  </div>
</template>
    
    <script setup>
import { useHomeStore } from "~/store/home";
import time from "@/assets/imgs/vacansiec/hour.png";

const store = useHomeStore();

const expanded = ref(600);
const data = ref(null);
const route = useRoute();
const router = useRouter();
const loading = ref(true);

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("facultet"));
  }

  store
    .getFacultetaEmploy(route.params.slug)
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>
    
   