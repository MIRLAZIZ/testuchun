<template>
  <div>
    <div
      class="main_branch 2xl:w-[1076px] xl:w-[920px] lg:w-[650px]"
      v-if="data"
    >
      <div class="bg-white rounded-xl">
        <div class="text-[18px] text-[#5D5D5F] pt-8 px-8 cursor-pointer">
          <span @click="$router.push('/')">Asosiy</span>/
          <span @click="$router.push('/institute/faculties')"
            >{{ store?.menuShow?.title }} /</span
          >
          <span>
            {{ data?.first_name[$i18n.locale] }}gdfgsdf
            {{ data?.last_name[$i18n.locale] }}
            {{ data?.surname[$i18n.locale] }}
          </span>
        </div>

        <div
          class="flex 2xl:w-[1076px] xl:gap-8 sm:gap-4 xl:p-8 sm:p-4 gap-8 rounded-xl border-[#E6EDFA]-1 sm:w-[100%] main_box"
          v-if="data"
        >
          <div class="w-[283px] h-[361px]">
            <NuxtImg
              :src="data.photo"
              alt=""
              class="h-full w-full rounded-xl img1 object-cover"
            />
          </div>
          <div
            class="lg:w-[741px] md:w-[70%] sm:w-[60%] w-full img1 flex flex-col flex_col"
          >
            <div>
              <p class="mb-2 font-medium text-2xl main_box_width">
                {{ data.first_name[$i18n.locale] }}
                {{ data?.last_name[$i18n.locale] }}
                {{ data?.surname[$i18n.locale] }}
              </p>
              <p class="font-normal text-xl text-[#9A999B] main_box_width">
                {{ data?.employ_meta?.position?.name[$i18n.locale] }}
              </p>
            </div>

            <div class="flex gap-4 lg:mt-6 mt-4 flex-col">
              <div class="flex gap-4 flex_col">
                <div
                  v-if="data?.phone"
                  class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                >
                  <img src="/assets/imgs/vacansiec/phone.png" alt="" />
                  <div>
                    <p class="text-[#5D5D5F] text-base font-normal">
                      Telefon raqam:
                    </p>
                    <p class="text-black font-normal text-base">
                      <a :href="'tel:' + data?.phone" target="_blank">
                        {{ data?.phone }}
                      </a>
                    </p>
                  </div>
                </div>
                <div
                  class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                >
                  <img src="/assets/imgs/vacansiec/email.png" alt="" />

                  <div>
                    <p class="text-[#5D5D5F] text-base font-normal">
                      Elektron pochta:
                    </p>
                    <p class="text-black font-normal text-base">
                      <a :href="'mailto:' + data?.email" target="_blank">
                        {{ data?.email }}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
              >
                <img
                  class="w-4 h-4"
                  :src="time"
                  alt=""
                />
                <div>
                  <p class="text-[#5D5D5F] text-base font-normal">
                    Ish kunlari:
                  </p>
                  <p class="text-black font-normal text-base">
                    {{ data.employ_meta?.employ?.work_time[[$i18n.locale]] }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="text_padding">
                <p
                  ref="text"
                  class="text"
                  v-html="
                    data?.employ_meta?.employ?.dec[$i18n.locale]?.substring(
                      0,
                      expanded
                    )
                  "
                ></p>
                <button
                  v-if="
                    data?.employ_meta?.employ?.dec[$i18n.locale]?.length >
                    expanded
                  "
                  @click="
                    expanded =
                      data?.employ_meta?.employ?.dec[$i18n.locale]?.length
                  "
                  class="text-red-500 font-bold"
                >
                  Ko‘proq...
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
import time from "@/assets/imgs/vacansiec/vaqt.png"


const store = useHomeStore();

const expanded = ref(50);
const data = ref(null);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("facultet"));
  }

  store.getFacultetaEmploy(route.params.slug).then((res) => {
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

@media (max-width: 1280px) {
  .flex_col {
    flex-direction: column;
  }
}
@media (max-width: 1024px) {
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .text_padding {
    padding: 2em;
  }
  .main_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flex_col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main_box_width {
    width: 100%;

    text-align: center;
  }
}
</style>
    