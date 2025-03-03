<template>
  <nav class="flex justify-between box_wrapper">
    <div @click="$router.push('/')">
      <img :src="store.siteInfo?.logo" alt="" class=" cursor-pointer  w-[150px] h-[50px] object-cover" />
    </div>

    <ul
      class="flex w-[768px] flex-wrap gap-6 sm:text-lg text-[12px] box_wrapper_li text-[#06203D]"
    >
      <li v-for="item in navigationItems" :key="item">
        <NuxtLink :to="item.href" class="font-normal sm:text-lg text-[12px]">{{
          item.label
        }}</NuxtLink>
        <!-- {{ item.label }} -->
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const navigationItems = computed(() => [
  {
    id: 1,
    label: store.dataTranslate["footr.biz_haqimizda"],
    href: "/institute/about-Us",
  },
  {
    id: 2,
    label: store.dataTranslate["footr.rahbariyat"],
    href: "/institute/management",
  },
  // { id: 3, label:  store.dataTranslate["footr.missiya"], href: '/contact' },
  {
    id: 4,
    label: store.dataTranslate["footr.talim"],
    href: "/education/bachelor",
  },
  {
    id: 5,
    label: store.dataTranslate["footr.jarayon"],
    href: "/prospective-students/admission",
  },
  {
    id: 6,
    label: store.dataTranslate["footr.talabalar"],
    href: "/prospective-students/service",
  },
  {
    id: 7,
    label: store.dataTranslate["footr.facultet"],
    href: "/institute/faculties",
  },
  {
    id: 8,
    label: store.dataTranslate["footr.bog'lanish"],
    href: "/page/contact",
  },
]);
</script>
<style scoped>
@media (max-width: 1024px) {
  .box_wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  .box_wrapper_li {
    width: 100%;
  }
}
/* @media(max-width:600px){
    .box_wrapper_li li{
        font-weight: 400;
        font-size: 12px;
    }
} */
</style>