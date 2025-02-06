<template>
  <div class="w-full">
    <div class="w-full" v-if="data">
      <div class="bg-white rounded-xl p-8">
        <div class="text-[18px] text-[#5D5D5F]  cursor-pointer mb-8">
          <span @click="$router.push('/')">{{
            store.dataTranslate["home.home"]
          }}</span
          >/
          <span @click="$router.push('/institute/management')"
            >{{ store?.menuShow?.title }} /</span
          >
          <span>
            {{ data?.first_name }}
            {{ data?.last_name }}
            {{ data?.surname }}
          </span>
        </div>

        <div class="flex w-full flex-col md:flex-row rounded-xl gap-8 ">
          <!-- img  -->
          <div
            class="md:w-[283px] h-[361px] flex justify-center w-full flex-shrink-0 "
          >
            <NuxtImg
              class="w-full h-full sm:w-[283px] rounded-lg object-cover"
              :src="data?.photo"
              alt=""
            />
          </div>

          <div class="flex flex-col w-full">
            <div>
              <p class="mb-2 font-medium text-[28px]">
                {{ data?.first_name }}
                {{ data?.last_name }}
                {{ data?.surname }}
              </p>
              <p class="font-normal text-xl text-[#9A999B]">
                {{ data?.position?.name }}
              </p>
            </div>

            <div class="flex gap-1 lg:mt-6 mt-4 flex-col">
              <div class="flex gap-1 flex-col 2xl:flex-row">
                <div
                  class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
                  v-if="data?.phone"
                >
                  <img
                    src="/assets/imgs/vacansiec/phone.png"
                    alt="Phone number"
                  />
                  <div>
                    <p class="text-[#5D5D5F] text-base font-normal">
                      {{ store.dataTranslate["contract.phone_number"] }}
                    </p>
                    <p class="font-normal text-base">
                      <a :href="'tel:' + data?.phone" target="_blank">
                        {{ data?.phone }}</a
                      >
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
                      <a :href="'mailto:'+ data?.email" target="_blank">
                        {{ data?.email }}</a
                      >
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-[#F4F6FA] flex items-center gap-3 p-2 rounded-xl w-full"
              >
                <img class="w-4 h-4" :src="time" alt="" />
                <div>
                  <p class="text-[#5D5D5F] text-base font-normal">
                    {{ store.dataTranslate["contract.working_days"] }}
                  </p>
                  <p class="text-black font-normal text-base">
                    Dushanba - Juma <span>09:00 - 18:00</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="">
                <p
                  v-if="data && data?.dec[$i18n.locale]"
                  ref="text"
                  class="text"
                  v-html="data?.dec[$i18n.locale]?.substring(0, expanded)"
                ></p>
                <button
                  v-if="data?.dec[$i18n.locale]?.length > expanded"
                  @click="expanded = data?.dec[$i18n.locale]?.length"
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
</template>

<script setup>
import { useHomeStore } from "~/store/home";
import time from "@/assets/imgs/vacansiec/hour.png";

const store = useHomeStore();

const expanded = ref(50);
const data = ref(null);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("management"));
  }
  store.leaderships(route.params.id).then((res) => {
    data.value = res.data;
  });
});
</script>

<style scoped>
.text {
  overflow: hidden;
  font-weight: 400;
  font-size: 16px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Faqat 3 qatorni ko‘rsatish */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
