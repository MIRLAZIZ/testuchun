<script setup>

import { useHomeStore } from "~/store/home";

const route = useRoute();
const store = useHomeStore();

const data = ref(null);
const expanded = ref(50);
const router = useRouter();

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("departments"));
  }
  store.getDepartamentOne(route.params.id).then((res) => {
    data.value = res.data;
  });
});
</script>
<template>
  <div class="main_branch">
    <div>
      <div class="main_branch 2xl:w-[1076px] xl:w-[920px] lg:w-[650px]">
        <div class="bg-white rounded-xl">
          <div class="text-[18px] text-[#5D5D5F] pt-8 px-8">
            <span @click="$router.push('/')">Asosiy</span>/
            <span>{{ store?.menuShow?.title }} /</span>
            <span>
              {{ data?.department_boss?.first_name[$i18n.locale] }}
              {{ data?.department_boss?.last_name[$i18n.locale] }}
              {{ data?.department_boss?.surname[$i18n.locale] }}
            </span>
          </div>

          <div
            class="flex 2xl:w-[1076px] xl:gap-8 sm:gap-4 xl:p-8 sm:p-4 gap-8 rounded-xl border-[#E6EDFA]-1 sm:w-[100%] main_box"
            v-if="data && data.department_boss"
          >
            <div class="w-[283px] h-[361px]">
              <NuxtImg
                :src="data.department_boss[store.currentImage2]"
                alt=""
                class="h-[433px] w-[288px] rounded-xl img1 object-cover"
              />
            </div>
            <div
              class="lg:w-[741px] md:w-[70%] sm:w-[60%] w-full img1 flex flex-col flex_col"
            >
              <div>
                <p class="mb-2 font-medium text-2xl main_box_width">
                  {{ data.department_boss?.first_name[$i18n.locale] }}
                  {{ data?.department_boss.last_name[$i18n.locale] }}
                  {{ data?.department_boss.surname[$i18n.locale] }}
                </p>
                <p class="font-normal text-xl text-[#9A999B] main_box_width">
                  {{
                    data?.department_boss?.employ_meta?.position.name[
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
                          :href="'tel:' + data?.department_boss?.phone"
                          target="_blank"
                        >
                          {{ data?.department_boss?.phone }}</a
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
                  class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                >
                  <img
                    class="w-4 h-4"
                    src="/assets/imgs/vacansiec/vaqt.png"
                    alt=""
                  />
                  <div>
                    <p class="text-[#5D5D5F] text-base font-normal">
                      Ish kunlari:
                    </p>
                    <p class="text-black font-normal text-base">
                      {{ data.department_boss.work_time[[$i18n.locale]] }}
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
                    Ko‘proq...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- xodimlar  -->

    <div class="main_branch">
      <h1 class="font-Halvar font-medium text-black text-[28px] my-6 mt-20">
        Xodimlar
      </h1>

      <div
        class="grid xl:grid-cols-2 gap-4 mt-10 lg:grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-around 2xl:w-[1052px] xl:w-[900px] md:w-[650px] sm:w-[600px] main_box"
      >
        <div
          class="w-[530px]  rounded-xl p-5 flex  box_wrapper xl:w-[430px] bg-white xl:justify-center xl:items-center sm:items-center sm:w-[100%] justify-between main_box_wrapper"
          v-for="item in data?.simple_employee"
          :key="item"
          @click="$router.push(`/institute/details/${item?.id}`)"
        >
          <div class=" h-[200px] w-[157px]">
            <NuxtImg
              :src="item[store?.currentImage2]"
              alt=""
              class="imgs  object-cover w-full h-full rounded-lg"
            />
          </div>

          <div class="flex box_wrapper_pad flex-col justify-center pl-6">
            <h1 class="text-xl font-medium ">
              {{ item?.first_name[$i18n.locale] }}
              {{ item?.last_name[$i18n.locale] }}
              {{ item?.surname[$i18n.locale] }}
            </h1>
            <p class="mt-2 text-[#88929D]">{{ item?.employ_type }}</p>

            {{ item?.employ_meta?.position?.name[$i18n.locale] }}
            <hr class="border border-[#DCE5F5] my-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
@media (max-width: 1024px) {
  .box_wrapper {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
</style>
