<template>
  <div class="w-full">
    <LoadingPage v-if="loading" />
    <div v-else>
      <div v-if="data && data.department_boss">
        <div class="w-full">
          <div class="bg-white rounded-xl p-8">
            <div class="text-[18px] text-[#5D5D5F] cursor-pointer">
              <span @click="$router.push('/')">{{
                store.dataTranslate["home.home"]
              }}</span
              >/
              <span @click="$router.push('/institute/faculties')"
                >{{ store?.menuShow?.title }} /</span
              >
              <span>
                {{ data?.department_boss?.first_name[store.language] }}
                {{ data?.department_boss?.last_name[store.language] }}
                {{ data?.department_boss?.surname[store.language] }}
              </span>
            </div>

            <!-- data  -->
            <div class="flex w-full flex-col md:flex-row gap-8 rounded-xl p-8">
              <!-- data img  -->
              <div
                class="md:w-[283px] h-[361px] flex justify-center w-full flex-shrink-0"
              >
                <img
                  :src="data.department_boss[store.currentImage2]"
                  alt=""
                  class="w-full h-full sm:w-[283px] rounded-lg object-cover"
                />
              </div>

              <div class="flex flex-col w-full">
                <div>
                  <p class="flex flex-col w-full">
                    {{ data.department_boss?.first_name[store.language] }}
                    {{ data?.department_boss.last_name[store.language] }}
                    {{ data?.department_boss.surname[store.language] }}
                  </p>
                  <p class="font-normal text-xl text-[#9A999B]">
                    {{
                      data?.department_boss?.employ_meta?.position.name[
                       store.language
                      ]
                    }}
                  </p>
                </div>

                <div class="flex gap-1 lg:mt-6 mt-4 flex-col">
                  <div class="flex gap-1 flex-col 2xl:flex-row">
                    <div
                      class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                      v-if="data?.department_boss?.phone"
                    >
                      <img src="/assets/imgs/vacansiec/phone.png" alt="" />
                      <div>
                        <p class="text-[#5D5D5F]">
                          {{ store.dataTranslate["contract.phone_number"] }}
                        </p>
                        <p>
                          <a
                            :href="'tel:' + data?.department_boss?.phone"
                            target="_blank"
                          >
                            {{ data?.department_boss?.phone }}</a
                          >
                        </p>
                      </div>
                    </div>

                    <div
                      v-if="data?.department_boss?.email"
                      class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                    >
                      <img src="/assets/imgs/vacansiec/email.png" alt="" />

                      <div>
                        <p class="text-[#5D5D5F]">
                          {{ store.dataTranslate["contract.email"] }}
                        </p>
                        <p>
                          <a
                            :href="'mailto:' + data?.department_boss?.email"
                            target="_blank"
                          >
                            {{ data?.department_boss?.email }}</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                    v-if="
                      data?.department_boss?.work_time &&
                      data?.department_boss?.work_time[[store.language]]
                    "
                  >
                    <img class="w-4 h-4" :src="time" alt="" />
                    <div>
                      <p class="text-[#5D5D5F] text-base font-normal">
                        {{ store.dataTranslate["contract.working_days"] }}
                      </p>
                      <p class="text-black font-normal text-base">
                        {{ data.department_boss.work_time[[store.language]] }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <div class="text_padding">
                    <p
                      ref="text"
                      class="text"
                      v-html="data?.dec?.substring(0, expanded)"
                    ></p>
                    <button
                      v-if="data?.dec?.length > expanded"
                      @click="expanded = data?.dec?.length"
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

        <!-- xodimlar  -->

        <div
          v-if="data && data.simple_employee && data.simple_employee.length > 0"
        >
          <h1 class="font-Halvar font-medium text-[28px] my-6 mt-20">
            {{ store.dataTranslate["contract.employees"] }}
          </h1>

          <div class="grid grid-cols-2 gap-4 2xl:gap-6">
            <div
              class="w-full rounded-xl p-5 flex xl:flex-row flex-col gap-4 bg-white"
              v-for="item in data?.simple_employee"
              :key="item"
              @click="
                $router.push(
                  `/institute/details/fakultet-inner/${item?.employ_meta.slug}`
                )
              "
            >
              <div
                class="h-[200px] xl:w-[157px] flex justify-center w-full flex-shrink-0"
              >
                <img
                  :src="item[store?.currentImage2]"
                  alt=""
                  class="object-cover w-full h-full rounded-lg sm:w-[157px]"
                />
              </div>

              <div class="flex flex-col justify-between">
                <div>
                  <h1 class="text-xl font-medium">
                    {{ item?.first_name[store.language] }}
                    {{ item?.last_name[store.language] }}
                    {{ item?.surname[store.language] }}
                  </h1>
                  <p class="mt-2 text-[#88929D]">
                    {{ item?.employ_meta?.position.name[store.language] }}
                  </p>
                </div>
                <hr class="border border-[#DCE5F5] my-6" />
                <button
                  class="border border-[#F7483B] 2xl:w-[164px] w-full h-[48px] flex justify-center items-center text-[#F7483B] rounded-lg"
                >
                  {{ store.dataTranslate["home.more_details"] }}
                  <UIcon
                    name="i-heroicons-arrow-long-right"
                    class="ml-6 w-6 h-6"
                  />
                </button>
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
const data = ref(null);
const expanded = ref(50);
const route = useRoute();
const loading = ref(true);

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("facultet"));
  }

  store
    .getFacultetOne(route.params.slug)
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>
  
 