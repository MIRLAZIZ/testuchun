<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const kampus = ref({
  uz: "Kampuslar",
  ru: "Kampusy",
  en: "Campuses",
});


const is_map = ref(true)


const route = useRoute();
const data = ref(null);

onMounted(() => {
  store.menuShow = null
  store.getKampusOne(route.params.slug).then((res) => {
    data.value = res.data;
    store.slugData = {
      title: kampus.value[store.language],
      slugText: res?.data?.name,
      path: "/kampus",
    };
  });
});

function convertYandexMapLink(mapurl) {
  if (typeof mapurl === 'string' && mapurl.startsWith("https://yandex.uz/maps/"))  {
    return mapurl.replace("https://yandex.uz/maps/", "https://yandex.uz/map-widget/v1/");
  }
  else{
    is_map.value = false
  }


}

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


        <!-- facts and number  -->

        <!-- <div
      
          class="mt-6  grid lg:grid-cols-3 md:grid-cols-3 md:gap-x-2 gir-cols-1 lg:gap-x-4 gap-4 my-10"
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
                >{{ data.green_zone }}m<sup class="text-[24px]">2</sup></span
              >
              <hr class="bg-[#E9EEF9]" />
            </div>
            <p class="text-[#5D5D5F] text-left text-lg">
              {{ store.dataTranslate["home.green_zone"] }}
            </p>
          </div>
        </div> -->





        <div class="the_kampus">
          <h1 class="text-[28px] text-[#06203D] mt-10 mb-6">
            {{ data.third_name }}
          </h1>
          <p class="text-[20px]" v-html="data.third_description"></p>
        </div>


      </div>
    </div>

    

    <div class="flex justify-center px-2" v-if="data && data.map && is_map ">
      <div class="lg:w-[1024px] w-full mt-10 mb-[104px] rounded-xl">
        <div class=" ">
          <h2 class="font-Halvar font-medium sm:text-[28px] text-xl">
            {{ store.dataTranslate["home.location"] }}
          </h2>
          <div class="mt-8 box_flex">
            <iframe
              :src="convertYandexMapLink(data?.map)"
              class="w-full h-[502px]"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

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

@media (max-width: 1324px) {
  .box_our {
    width: 440px;
    left: 10px;
  }
}
@media (max-width: 1024px) {
  .box_our {
    width: 540px;
    left: 20px;
  }
}
@media (max-width: 650px) {
  .box_our {
    width: 440px;
    left: 10px;
  }
  .mainContainer h2 {
    font-weight: 500;
    font-size: 20px;
  }
  .mainContainer h3 {
    font-weight: 400;
    font-size: 12px;
  }
  .mainContainer p {
    font-weight: 500;
    font-size: 12px;
  }
}
@media (max-width: 530px) {
  .box_our {
    width: 340px;
    left: 3px;
    padding: 10px;
    height: 90px;
  }
}
</style>