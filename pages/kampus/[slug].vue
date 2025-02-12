<script setup>
import imgcarousel from "~/assets/imgs/kampus/carousel.png";
import { useHomeStore } from "~/store/home";
import { useI18n } from "vue-i18n";

const store = useHomeStore();
const kampus = ref({
  uz: "Kampuslar",
  ru: "Kampusy",
  en: "Campuses",
});
const { locale } = useI18n();

const route = useRoute();
const data = ref(null);
onMounted(() => {
  store.getKampusOne(route.params.slug).then((res) => {
    data.value = res.data;
    store.slugData = {
      title: kampus.value[locale.value],
      slugText: res?.data?.name,
      path: "/kampus",
    };
  });
});
onUnmounted(() => {
  store.slugData.slugText = null;
});
</script>
<template>
  <div>
    <UiBreadcrumb />

    <div class="flex justify-center px-2" v-if="data">
      <div
        class="lg:w-[1024px] w-full bg-white p-8 mt-10 mb-[104px] rounded-xl"
      >
        <!-- kampus data  -->
        <div class="the_kampus">
          <h1 class="text-2xl font-medium">{{ data.first_name }}</h1>
          <p class="text-[20px] mt-2" v-html="data.first_description"></p>
        </div>

        <!-- carousel  -->

        <div class="my-10">
          <UiCarousel :data="data.images" />
        </div>

        <div class="the_kampus">
          <h1 class="text-[28px] text-[#06203D] mb-6">
            {{ data.second_name }}
          </h1>
          <p class="text-[20px]" v-html="data.second_description"></p>
        </div>

        <div
          class="mt-6 grid lg:grid-cols-3 md:grid-cols-3 md:gap-x-2 gir-cols-1 lg:gap-x-4 gap-4 my-10"
        >
          <div
            class="h-[170px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between border"
          >
            <div>
              <span class="text-[40px] text-[#F7483B]">+</span>
              <span class="text-[40px]">{{ data.educational_programs }}</span>
              <hr class="bg-[#E9EEF9]" />
            </div>

            <p class="text-[#5D5D5F] text-left text-lg">
              {{ store.dataTranslate["home.educational_programs"] }}
            </p>
          </div>
          <div
            class="h-[170px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between border"
          >
            <div>
              <span class="text-[40px]">{{ data.audience_size }}</span>
              <hr class="bg-[#E9EEF9]" />
            </div>
            <p class="text-[#5D5D5F] text-left text-lg">
              {{ store.dataTranslate["home.number_auditories"] }}
            </p>
          </div>
          <div
            class="h-[170px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between border"
          >
            <div>
              <span class="text-[40px] text-[#F7483B]">+</span>
              <span class="text-[40px]"
                >24m<sup class="text-[24px]">{{ data.green_zone }}</sup></span
              >
              <hr class="bg-[#E9EEF9]" />
            </div>
            <p class="text-[#5D5D5F] text-left text-lg">
              {{ store.dataTranslate["home.green_zone"] }}
            </p>
          </div>
        </div>

        <div class="the_kampus">
          <h1 class="text-[28px] text-[#06203D] mb-6">
            {{ data.third_name }}
          </h1>
          <p class="text-[20px]" v-html="data.third_description"></p>
        </div>
      </div>
    </div>

    <!-- <div class="w-full flex justify-center mb-[144px]" >
      <div
        class="w-[1076px] rounded-xl p-6 pb-5 bg-white flex lg:flex-row flex-col"
      >
        <img
          src="/assets/imgs/kampus/image.png"
          alt=""
          class="lg:w-[532px] w-full lg:h-[343px] object-cover rounded"
        />

        <div class="lg:pl-6 lg:mt-0 mt-3 flex flex-col justify-between">
          <div class="the_kampus">
            <h1 class="text-[24px] font-medium">Farg‘ona</h1>
            <p class="mt-2 text-xl">
              Bugungi kunga qadar institut O‘zbekiston va xorijdagi xalqaro
              universitetlar va ta’lim tashkilotlari bilan hamkorlik qilib,
              bakalavriat va magistratura yo‘nalishlari bo‘yicha ta’lim
              dasturlari bor.
            </p>
          </div>

          <div class="">
            <hr class="my-4" />
            <div class="flex justify-between cursor-pointer">
              <span class="text-[#5D5D5F]"> Batafsil</span>
              <UIcon
                name="i-heroicons-arrow-up-right"
                class="text-[#F7483B] ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>



<style scoped>
@media (max-width: 600px) {
  .the_kampus h1 {
    font-weight: 500;
    font-size: 16px;
  }
  .the_kampus p {
    font-weight: 400;
    font-size: 14px;
  }
  span {
    font-size: 24px;
    font-weight: 400;
  }
}
</style>