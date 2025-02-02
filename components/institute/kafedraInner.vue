<template>
  <div class="main_branch">

    <div class="main_branch 2xl:w-[1076px] xl:w-[920px] lg:w-[650px]" v-if="props.data && props.data.department_boss">
      <div class="bg-white rounded-xl">
        <div class="text-[18px] text-[#5D5D5F] pt-8 px-8 cursor-pointer">
          <span @click="$router.push('/')">Asosiy</span>/
          <span @click="$router.push('/institute/kafedralar')"
            >{{ store?.menuShow?.title }} /</span
          >
          <span>
            {{ props.data?.department_boss?.first_name[$i18n.locale] }}
            {{ props.data?.department_boss?.last_name[$i18n.locale] }}
            {{ props.data?.department_boss?.surname[$i18n.locale] }}
          </span>
        </div>

        <div
          class="flex 2xl:w-[1076px] xl:gap-8 sm:gap-4 xl:p-8 sm:p-4 gap-8 rounded-xl border-[#E6EDFA]-1 sm:w-[100%] main_box"
          v-if="props.data && props.data.department_boss"
        >
          <div class="w-[283px] h-[361px]">
            <NuxtImg
              :src="props.data.department_boss[store.currentImage2]"
              alt=""
              class="h-full w-full rounded-xl img1 object-cover"
            />
          </div>
          <div
            class="lg:w-[741px] md:w-[70%] sm:w-[60%] w-full img1 flex flex-col flex_col"
          >
            <div>
              <p class="mb-2 font-medium text-2xl main_box_width">
                {{ props.data.department_boss?.first_name[$i18n.locale] }}
                {{ props.data?.department_boss.last_name[$i18n.locale] }}
                {{ props.data?.department_boss.surname[$i18n.locale] }}
              </p>
              <p class="font-normal text-xl text-[#9A999B] main_box_width">
                {{
                  props.data?.department_boss?.employ_meta?.position.name[
                    $i18n.locale
                  ]
                }}
              </p>
            </div>

            <div class="flex gap-4 lg:mt-6 mt-4 flex-col">
              <div class="flex gap-4 flex_col">
                <div
                  class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                >
                  <img src="/assets/imgs/vacansiec/phone.png" alt="" />
                  <div>
                    <p class="text-[#5D5D5F] text-base font-normal">
                      Telefon raqam:
                    </p>
                    <p class="text-black font-normal text-base">
                      <a
                        :href="'tel:' + props.data?.department_boss?.phone"
                        target="_blank"
                      >
                        {{ props.data?.department_boss?.phone }}</a
                      >
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
                      <a
                        :href="'mailto:' + props.data?.department_boss?.email"
                        target="_blank"
                      >
                        {{ props.data?.department_boss?.email }}</a
                      >
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
                    {{ props.data.department_boss.work_time[[$i18n.locale]] }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="text_padding">
                <p
                  ref="text"
                  class="text"
                  v-html="props.data?.dec?.substring(0, expanded)"
                ></p>
                <button
                  v-if="props.data?.dec?.length > expanded"
                  @click="expanded = props.data?.dec?.length"
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

    <!-- xodimlar  -->

    <div class="main_branch" v-if="props.data && props.data.simple_employee && props.data.simple_employee.length > 0">
      <h1 class="font-Halvar font-medium text-black text-[28px] my-6 mt-20">
        Xodimlar
      </h1>

      <div
        class="grid xl:grid-cols-2 gap-4 mt-10 lg:grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-around 2xl:w-[1052px] xl:w-[900px] md:w-[650px] sm:w-[600px] main_box"
      >
        <div
          class="w-[530px] bg-white rounded-xl p-5 flex box_wrapper xl:w-[430px] xl:h-[300px] xl:justify-center xl:items-center sm:items-center sm:w-[100%] justify-between main_box_wrapper"
          v-for="item in props.data?.simple_employee"
          :key="item"
          @click="
            $router.push(`/institute/details/kafedra/${item.employ_meta.id}`)
          "
        >
          <div class="h-[200px] w-[157px]">
            <NuxtImg
              :src="item?.store?.currentImage2"
              alt=""
              class="imgs h-full w-full object-cover rounded-lg"
            />
          </div>

          <div class="flex box_wrapper_pad flex-col justify-center pl-6">
            <h1 class="text-xl font-medium text-black">
              {{ item?.first_name[$i18n.locale] }}
              {{ item?.last_name[$i18n.locale] }}
              {{ item?.surname[$i18n.locale] }}
            </h1>
            <p class="mt-2 text-[#88929D]">
              {{ item?.employ_meta?.position.name[$i18n.locale] }}
            </p>
            <hr class="border border-[#DCE5F5] my-6" />
            <UButton
              class="bg-[#F7483B] w-[164px] h-[48px] flex justify-center hover:bg-[#F7483B] text-base"
            >
              {{ store.dataTranslate["home.more_details"] }}
              <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
            </UButton>
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
const props = defineProps({
  data: {
    type: Object,
    requered: true,
    default: () => ([]),
  },
});
const isCopied = ref(false);
const copyLink = () => {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      isCopied.value = true;
    })
    .catch(() => {
      alert("Link kopyalanmadi");
    });
};

const hideCopiedText = () => {
  isCopied.value = false;
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .main_box {
    display: flex;
    flex-direction: column;
    width: 350px !important;
    height: auto !important;
  }

  .img1 {
    width: 100%;
  }

  .main_box_width {
    width: 300px;
  }
}

/* Ko'chirildi matni uslubi */
.copied-text {
  position: absolute;
  top: -30px;
  /* Matnning boshlang'ich pozitsiyasi */
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  /* Yashil fon */
  color: white;
  /* Oq matn */
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeInOut 2.5s ease-in-out;
  z-index: 1000;
  /* Matn yuqorida ko'rinishi uchun */
}

/* Yangi va yumshoq animatsiya */
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -10px) scale(0.95);
  }

  20% {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }

  80% {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -10px) scale(0.95);
  }
}
</style>