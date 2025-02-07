<script setup>
import { useHomeStore } from "~/store/home";
import certificat from "~/assets/imgs/kampus/certifacat.png";
import certificat2 from "~/assets/imgs/kampus/certifacat2.png";

const store = useHomeStore();

const items = ref([]);
const isOpen = ref(false);
const data = ref(null);
const page = ref(1);
const pageData = ref(null);
const route = useRoute();

onMounted(() => {
  store.getCertificat(page.value).then((res) => {
    pageData.value = res.data.last_page;
    items.value.push(...res.data.data);
  });
  const prentPageOne = `/${route.fullPath.split('/')[1]}`
  store.getMenuStatick(prentPageOne, route.fullPath)


});
const addCertificat = () => {
  store.getCertificat(page.value).then((res) => {
    items.value.push(...res.data.data);
    pageData.value = res.data.last_page;
  });
};
</script>
<template>
  <div class="">
    <div
      class=""
    >
      <div
        class="grid grid-cols-2 gap-4 2xl:grid-cols-3"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="(isOpen = true), (data = index)"
          class=" sm:h-[600px] h-[323px] items-center p-3 bg-white rounded-xl certificate"
        >
          <div class="sm:h-[459px] h-[211px] relative">
            <NuxtImg
              :src="item?.photo[store.currentImage]"
              alt=""
              class="w-full h-full rounded-lg object-contain"
            />

            <div
              class="absolute bottom-0 left-0 certificateEye rounded-xl w-full sm:h-[459px]  bg-[#06203D66] opacity-80 flex justify-center items-center"
            >
              <button
                class="w-14 h-14 bg-[#BEC4CB] rounded-xl flex justify-center items-center"
              >
                <UIcon name="i-heroicons-eye" class="w-8 h-8 text-white" />
              </button>
            </div>
          </div>

          <div class="flex items-center gap-2 mt-4 mb-3">
            <div class="w-[5px] h-[5px] bg-[#F7483B] rounded-full"></div>
            <span class="text-[#9A999B]">{{ item?.date?.substring(0, 10) }}</span>
          </div>

          <h1 class="text-xl font-medium">
            {{ item?.title }}
          </h1>
        </div>
      </div>

      <div class="flex justify-center mt-6">
        <button
          class="text-base w-[217px] h-[48px] px-8 bg-white rounded-lg flex justify-between items-center"
          @click="addCertificat"
          :disabled="pageData == page"
        >
          Ko'proq ko'rish
          <UIcon name="i-heroicons-plus" class="w-6 h-6 text-[#F7483B]" />
        </button>
      </div>

      <div class="mt-16 p-8 bg-white rounded-xl pr-16 box_wrapper_li">
        <h1 class="text-[28px] text-[#06203D] mb-6 box_text">
          Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat
          yo'lingiz!
        </h1>
        <p class="text-[20px] box_wrapper_text">
          Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu,
          iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy
          injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida,
          hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va
          amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz,
          talabalarning imkoniyatlarini rivojlantirish, shakllantirish va
          zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun
          intellektual va dinamik muhit yaratamiz. Toshkent menejment va
          iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim
          xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim,
          fan va innovatsiyalar vazirligi tomonidan berilgan 2024-yil
          24-iyuldagi 327608-sonli litsenziyasi asosida talabalarga sifatli
          ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman
          jamiyatning jadal o'sib borayotgan ehtiyojlarini qondirish uchun zamon
          bilan hamnafas rivojlanishda va takomillashishda davom etmoqdamiz.
        </p>
      </div>
      <InstituteLicensesModalLicenses
        v-model:is-open="isOpen"
        :items="items"
        :data_id="data"
      />
       <!-- <InstituteLicensesModalLicenses
        :items="items"
        :data_id="data"
      /> -->
    </div>
  </div>
</template>


<style scoped>
.certificateEye {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.certificate :hover .certificateEye {
  opacity: 1;
}
@media (max-width:1024px){
    .main_branch{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
@media (max-width: 640px) {
  .box_text {
    width: 243px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 20px;
    font-weight: 500;
  }
  .box_wrapper_li {
    padding: 20px;
  }
  .box_wrapper_gap {
    gap: 20px;
  }
  .box_wrapper {
    width: 300px;
  }
  .box_wrapper_text {
    font-size: 14px;
    font-weight: 400px;
  }
  .main_branch {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box_wrapper_img1 {
    width: 320px;
  }
}
</style>