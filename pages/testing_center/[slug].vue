<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const kampus = ref({
  uz: "Test markazi",
  ru: "Центр диагностики",
  en: "Testing center",
});


const is_map = ref(true)

const route = useRoute();
const data = ref(null);


onMounted(() => {
  store.menuShow = null;
  store.testingSlug(route.params.slug).then((res) => {
    data.value = res.data;
    store.slugData = {
      title: kampus.value[store.language],
      slugText: res?.data?.name,
      path: "/testing_center",
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