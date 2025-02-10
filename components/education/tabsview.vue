<template>
  <div class="w-full">
    <div class="w-full">
      <div class=" flex gap-8">
        
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="{'border-b-2 border-[#F7483B]': tab.id === activeTab }"
          @click="changeTab(tab.id)"
          class=" font-semibold text-sm text-[#010101] cursor-pointer   h-[32px] pb-3 "
        >
          {{ tab.label  }} 
        </button>

      </div>
      <hr>

      <div class=" w-full mt-10">
        <div
          v-if="activeTab === 'general'"
          class="flex flex-col w-full gap-6 rounded-xl"
        >
          <div
            class="rounded-xl w-full border border-[#E6EDFA] p-6"
            v-for="item in filteredData"
            :key="item"
          >


        
            <p class="mb-4 font-medium text-2xl">{{ item.name }}</p>
            <p v-html="item.description"></p>
          </div>
        </div>

        <div v-if="activeTab === 'plan'" class="flex flex-col gap-6 rounded-xl w-full">
          <div class="rounded-xl border border-[#E6EDFA] p-6" v-if="props.data && props.data[0] && props.data[0]?.name">
            <h1 class="mb-4 font-medium text-2xl">{{ props.data[0]?.name }}</h1>
            <p
              v-html="props.data[0]?.description"
            ></p>
          </div>

          <EducationTapContent :item="item" />

          <div class="rounded-xl border border-[#E6EDFA]   p-6" v-if="props.data && props.data[2] && props.data[2]?.name">
            <h1 class=" font-medium text-2xl">{{ props.data[2]?.name }}</h1>
            <p
              class="font-normal text-base"
              v-html="props.data[2]?.description"
            ></p>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const tabs = [
  { id: "general", label: "Umumiy ma'lumot" },
  { id: "plan", label: "O'quv rejasi" },
];

const activeTab = ref("general");

const changeTab = (tabId) => {
  activeTab.value = tabId;
};
const filteredData = computed(() => {
  return props.data.filter(item => item.name?.trim() || item.description?.trim())
})
</script>
<style scoped>
:deep(p) {
  white-space: pre-wrap;
  word-break: break-word;
}

:deep(li) {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>

