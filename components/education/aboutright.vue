<template>
  <div class="w-full">
    

    <div
      class="flex gap-6  flex-col lg:flex-row w-full "
      v-if="props.data?.entrance_requirement"
    >
      <div class="lg:w-2/4 h-[272px]  md:h-[416px] w-full flex-shrink-0">
        <img
          :src="props.data?.entrance_requirement?.photo[store.currentImage]"
          alt=""
          class="w-full h-full rounded-xl object-cover"
        />
      </div>

      <div
        class="rounded-xl  lg:w-2/4 w-full flex  flex-col "
      >

      <EducationTapContent :item="props.data" />
       

       
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const activeTab = ref(null);
const scillsData = ref(null);

const changeTab = (tab) => {
  activeTab.value = tab.id;
  scillsData.value = props.data.faq.find(
    (item) => item.skills.name === tab.name
  );
};
watch(
  () => props.data?.entrance_requirement?.skills,
  (newValue) => {
    if (props.data?.entrance_requirement?.skills) {
      activeTab.value = props.data?.entrance_requirement?.skills[0]?.id;
    }
  },
  { deep: true }
);

watch(
  () => props.data?.faq,
  (newValue) => {
    if (props.data?.faq) {
      scillsData.value = props.data?.faq[0];
    }
  },
  { deep: true }
);
</script>

