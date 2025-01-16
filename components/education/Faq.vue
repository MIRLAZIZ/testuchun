<script setup>
import { useHomeStore } from '~/store/home'
const sum = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

let onchange = ref(false)
let onchange1 = ref(false)
const store = useHomeStore()
const filter = ref([])


filter.value = store.menus[1]




const items = ref([
  {
    title: "TMII litsensiyasiga egami",
    description:
      "O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun: - Kundzgi : 19 500 000 so'm - Sirtqi 13 500 000 so'm",
  },
  {
    title: "Ikkinchi savol",
    description: "Bu savolning javobi ikkinchi blokda.",
  },
  {
    title: "Uchinchi savol",
    description: "Bu savolning javobi uchinchi blokda.",
  },
  {
    title: "Ikkinchi savol",
    description: "Bu savolning javobi ikkinchi blokda.",
  },
  {
    title: "Uchinchi savol",
    description: "Bu savolning javobi uchinchi blokda.",
  },
  {
    title: "Ikkinchi savol",
    description: "Bu savolning javobi ikkinchi blokda.",
  },
  {
    title: "Uchinchi savol",
    description: "Bu savolning javobi uchinchi blokda.",
  },
]);

const activeIndex = ref(null);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};



</script>
<template>
    <div>
        <div class="mb-10">
            <p class="text-2xl font-medium mt-36 mb-10">KO'P BERILADIGAN SAVOLLAR</p>
            <div class="bg-white w-[1052px] rounded-xl mb-4" v-for="(item, index) in items" :key="index">
                <div class="p-4">
                    <div class="flex flex-col gap-3">
                        <div class="bg-white pl-2 flex justify-between cursor-pointer" @click="toggleItem(index)">
                            <p class="text-slate-800 font-medium text-base">{{ item.title }}</p>
                            <div>
                                <img v-if="activeIndex === index" src="../../assets/imgs/talim/Minus.svg" alt="Minus" />
                                <img v-else src="../../assets/imgs/talim/Add.svg" alt="Add" />
                            </div>
                        </div>
                        <div :style="{ display: activeIndex === index ? 'block' : 'none' }" class="pl-2">
                            <p class="text-slate-800 font-normal text-sm">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>


<style scoped></style>