<script setup>
import { useHomeStore } from "~/store/home";
import time from "@/assets/imgs/vacansiec/hour.png";

const route = useRoute();
const store = useHomeStore();

const data = ref(null);
const expanded = ref(500);
const router = useRouter();
const loading = ref(true);

onMounted(() => {

 
  store
    .getDepartamentOne(route.params.slug)
    
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
      if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("departments"));
  }
});
</script>
<template>
  <div class="w-full">
    <LoadingPage v-if="loading" />
    <div v-else>
      <div v-if="data">
        <div class="w-full">
          <div class="bg-white rounded-xl cursor-pointer p-8">
            <div class="text-[18px] text-[#5D5D5F] mb-8">
              <span @click="$router.push('/')">{{
                store.dataTranslate["home.home"]
              }}</span
              >/

              <span @click="$router.push('/institute/departments')"
                >{{ store?.menuShow?.title }} /</span
              >

              <span>
                {{ data?.department_boss?.last_name[store.language] }}
                {{ data?.department_boss?.first_name[store.language] }}
                {{ data?.department_boss?.surname[store.language] }}
              </span>
            </div>

            <!-- data  -->
            <div class="flex w-full flex-col md:flex-row gap-8 rounded-xl">
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
                  <p class="mb-2 font-medium text-[28px]">
                    {{ data?.department_boss.last_name[store.language] }}
                    {{ data.department_boss?.first_name[store.language] }}
                    {{ data?.department_boss.surname[store.language] }}
                  </p>
                  <p class="font-normal text-xl text-[#9A999B]">
                    {{
                      data?.department_boss?.employ_meta?.employ_type.name[
                        store.language
                      ]
                    }}
                  </p>
                </div>

                <div class="flex gap-1 lg:mt-6 mt-6 flex-col">
                  <div class="flex gap-1 flex-col">
                    <div
                      v-if="data?.department_boss?.phone"
                      class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                    >
                      <img
                        src="/assets/imgs/vacansiec/phone.png"
                        alt="Phone number"
                      />
                      <div>
                        <p class="text-[#5D5D5F]">
                          {{ store.dataTranslate["contract.phone_number"] }}
                        </p>
                        <p>
                          <a
                            :href="'tel:' + data?.department_boss?.phone"
                            target="_blank"
                          >
                            {{ data?.department_boss?.phone }}
                          </a>
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

                    <div
                      class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                    >
                      <img class="w-4 h-4" :src="time" alt="" />
                      <div>
                        <p class="text-[#5D5D5F]">
                          {{ store.dataTranslate["contract.working_days"] }}
                        </p>
                        <p>
                          {{ data.department_boss.work_time[[store.language]] }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <div class="text_padding">
                    <!-- {{ data?.department_boss.dec[store.language] }} -->
                    <p v-if="data && data?.department_boss?.dec"
                      ref="text"
                      class="text"
                      v-html="data?.department_boss.dec[store.language]?.substring(0, expanded)"
                    ></p>
                    <button
                      v-if="data?.department_boss?.dec[store.language] && data?.department_boss?.dec[store.language]?.length > expanded"
                      @click="expanded = data?.department_boss?.dec?.length"
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
        <div v-if="data && data.simple_employee && data.simple_employee.length">
          <h1 class="font-Halvar font-medium text-[28px] my-6 mt-20">
            {{ store.dataTranslate["contract.employees"] }}
          </h1>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              class="w-full rounded-xl p-5 flex lg:flex-col xl:flex-row bg-white"
              v-for="item in data?.simple_employee"
              :key="item"
            >
              <div class="h-[200px] w-[157px] flex-shrink-0">
                <img
                  :src="item[store?.currentImage2]"
                  alt=""
                  class="imgs object-cover w-full h-full rounded-lg"
                />
              </div>

              <div class="flex flex-col justify-center pl-6">
                <h1 class="text-xl font-medium">
                  {{ item?.last_name[store.language] }}
                  {{ item?.first_name[store.language] }}
                  {{ item?.surname[store.language] }}
                </h1>
                <p class="mt-2 text-[#88929D]">{{ item?.employ_type }}</p>

                {{ item?.employ_meta?.position?.name[store.language] }}
                <hr class="border border-[#DCE5F5] my-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="text-center font-Halvar text-3xl">
          {{ store.dataTranslate["header.do_not"] }}
        </h1>
      </div>
    </div>
  </div>
</template>

