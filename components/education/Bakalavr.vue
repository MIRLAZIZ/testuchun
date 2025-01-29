<script setup>
import { useHomeStore } from "~/store/home";
import img1 from "/assets/imgs/talim/watch.svg";
const datatype = [
  {
    id: 1,
    img: img1,
    type: "Turi",
    name: "Kunduzgi 5-yil",
    description: "Sirtqi 4-yil",
  },
  {
    id: 2,
    img: img1,
    type: "Til",
    name: "O'zbek Rus Ingliz ",
    description: "",
  },
  {
    id: 3,
    img: img1,
    type: "Manzil",
    name: "Toshkent Shahri",
    description: "",
  },
  {
    id: 4,
    img: img1,
    type: "Boshlanish sanasi",
    name: "01 aprel , 2024",
    description: "",
  },
];

const taps = computed(() => [
  {
    id: 1,
    name: data.value?.first_name,
    description: data.value?.first_descriptionv,
  },
  {
    id: 2,
    name: data.value?.second_name,
    description: data.value?.second_description,
  },
  {
    id: 3,
    name: data.value?.third_name,
    description: data.value?.third_description,
  },
]);

const aboutright = [
  {
    id: 1,
    name: "Kirish talablari",
    description: "Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",
    descriptionall:
      "TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.",
  },
  // {id:2, name:"Kirish talablari",description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",descriptionall:"TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz."},
  // {id:3, name:"Kirish talablari",description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",descriptionall:"TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz."}
];

const aboutleft = [];
const generet = [
  { id: 1, name: "general" },
  { id: 2, name: "English language" },
  { id: 3, name: "Math" },
  { id: 4, name: "Age" },
];

const store = useHomeStore();
const route = useRoute();
const data = ref({});

onMounted(() => {
  store.getEducutionOne(route.params.slug).then((res) => {
    data.value = res.data;
  });
});
</script>
<template>
  <div>
    <EducationTopCard :data="data" />
    <!-- <pre> {{ data }}</pre>   -->

    <div
      class="mt-[187px] mb-[104px] flex items-center justify-center flex-col"
    >
      <div class="2xl:w-[1440px] flex items-center justify-center xl:[1000px]">
        <div
          class="w-[1016px] bg-white pt-[72px] px-[32px] pb-[24px] flex flex-col gap-6 rounded-xl"
        >
          <!-- {{ data }} -->
          <EducationTabsview :data="taps" />
          <EducationIframe :data="data" />
          <EducationAboutright :data="data" />
          <EducationAboutleft :data="data" />
        </div>
      </div>
    </div>
    <pre>
  {{ data?.employs }}

</pre
    >
    <!-- <EducationAboutperson /> -->
    <EducationComments :data="data?.employs" />
  </div>
</template>
