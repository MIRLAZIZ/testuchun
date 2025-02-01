<template>
  <div>
    <div
      class="rounded-xl h-[416px] w-full flex justify-center flex-col border p-4"
    >
      <div v-if="'plan'">
        <p class="font-medium text-2xl mb-6">
          {{ props.item?.entrance_requirement?.name }}
        </p>
      </div>

      <div class="flex gap-2 mb-6 w-full">
        <div class="tabs-container">
          <div class="tab">
            <button
              v-for="tab in props.item?.entrance_requirement?.skills"
              :key="tab.id"
              :class="{ active: tab?.id === activeTab }"
              @click="changeTab(tab)"
              class="tab-buttons font-semibold text-sm text-black cursor-pointer"
            >
              {{ tab.name }}
            </button>
          </div>

          <div class="tab-content">
            <div class="flex flex-col gap-6 rounded-xl">
              <div class="rounded-xl pt-10 px-6 pb-5">
                <p class="font-normal text-base mb-2 text-slate-950">
                  {{ scillsData?.question }} {{ scillsData?.id }}
                </p>
                <p
                  class="font-normal text-sm text-[#868587]"
                  v-html="scillsData?.answer"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, watch, onMounted } from "vue";
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const activeTab = ref(null);
const scillsData = ref(null);

const changeTab = (tab) => {
  activeTab.value = tab.id;
  scillsData.value = props.item.faq?.find(
    (item) => item.skills.name === tab.name
  );
};

// Initialize default values when component mounts
onMounted(() => {
  if (props.item?.entrance_requirement?.skills?.length > 0) {
    activeTab.value = props.item.entrance_requirement.skills[1].id;
  }
  if (props.item?.faq?.length > 0) {
    scillsData.value = props.item.faq[0];
  }
});

// Watch for changes in the entire item prop
watch(
  () => props.item,
  (newValue) => {
    if (newValue?.entrance_requirement?.skills?.length > 0) {
      activeTab.value = newValue.entrance_requirement.skills[0].id;
    }
    if (newValue?.faq?.length > 0) {
      scillsData.value = newValue.faq[0];
    }
  },
  { deep: true, immediate: true }
);
</script>
  
  <style scoped>
.tab {
  display: flex;
}

.tab-buttons {
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.tab-buttons.active {
  border-radius: 12px;
  color: white;
  background-color: #06203d;
}
</style>