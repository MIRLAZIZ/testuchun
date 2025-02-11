<template>
  <div  class="w-full">
   
    <div class="rounded-xl w-full flex justify-center flex-col border p-4 ">
      <div v-if="'plan'">
        <p class="font-medium text-2xl mb-6">
          {{ props.item?.entrance_requirement?.name }}
        </p>
      </div>

      <div class=" mb-6 w-full">
        <div class="">
          <div class="flex gap-3">
            <button
              v-for="item in filterSkills"
              :key="item.id"
              class="font-medium  cursor-pointer  pb-2"
              @click="store.educationFaqId = item.id"
               :class="{ ' border-b-2 border-red-500 ': store.educationFaqId === item.id }"
            >
              <span
                v-if="!item.parent"
               
                >{{ item.skills.name }}</span
              >
            </button>
          
          </div>
          <hr>

          <div class="tab mt-6">
            <button
              v-for="tab in firlterFaq"
              :key="tab.id"
              :class="{ active: tab?.id === activeTab }"
              @click="changeTab(tab.id)"
              class="tab-buttons font-semibold text-sm cursor-pointer"
            >
              <span>
                {{ tab.skills.name }}
              </span>
            </button>
          </div>

          <div class="">
            <div class=" rounded-xl">
              <div class="rounded-xl pt-10  ">
                <p class="font-normal text-base mb-3  text-slate-950">
                  {{ scillsData?.question }}
                </p>
                <div
                  class=" w-full table-container "
                  v-html="scillsData?.answer"
                ></div>
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

const filterSkills = computed(() => {
  if (props.item.faq.length > 0) {
    return props.item.faq.filter((item) => item.parent === null);
  }
});

const firlterFaq = computed(() => {
  if (props.item.faq.length > 0) {
    return props.item.faq.filter((item) => item.parent == store.educationFaqId);
  }
});

watch(
  () => firlterFaq.value,
  (newValue) => {
    if (newValue.length > 0) {
      // skillsId.value = newValue[0].id;
      scillsData.value = newValue[0];
      activeTab.value = newValue[0].id;
    }
  },
  { deep: true, immediate: true }
);

const changeTab = (id) => {
  activeTab.value = id;
  scillsData.value = firlterFaq.value?.find((item) => item.id === id);
};


</script>
  
  <style scoped>
.tab {
  display: flex;
}

.tab-buttons {
  padding: 8px 12px;
  transition: all 0.3s ease;
}

.tab-buttons.active {
  border-radius: 15px;
  color: white;
  background-color: #06203d;
}

.table-container {
  width: 100%;
  border-radius: 12px;
  display: block;
  overflow: hidden;

}

:deep(table) {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 0.95rem;
  box-sizing: border-box; 
}

:deep(td) {
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  vertical-align: middle;
}

/* Sarlavha qatorlari uchun */
:deep(tr:has(strong)) {
  background-color: #f3f4f6;
}

/* Semestr sarlavhalari uchun */
:deep(tr:has(td[colspan="4"])) {
  background-color: #011454;
  color: white;
}

:deep(tr:has(td[colspan="4"]) strong) {
  font-weight: 700;
}

/* Bold textlar uchun */
:deep(strong) {
  font-weight: 600;
  text-align: center;
}

/* Juft qatorlar uchun */
:deep(tr:nth-child(even):not(:has(td[colspan="4"])):not(:has(strong))) {
  background-color: #f9fafb;
}

/* Hover effekt */
:deep(tr:hover:not(:has(td[colspan="4"]))) {
  background-color: #f3f4f6;
  transition: background-color 0.2s;
}

/* Responsive dizayn */
@media (max-width: 768px) {
  :deep(table) {
    font-size: 0.875rem;
  }

  :deep(td) {
    padding: 0.5rem;
  }
}


</style>