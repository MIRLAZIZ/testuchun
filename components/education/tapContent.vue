<template>
  <div class="w-full">

    <div class="rounded-xl w-full flex justify-center flex-col border p-4">
      <div>
        <p class="font-medium text-2xl mb-6" v-if="store.activeTab !== 'plan'">
          {{ props.item?.entrance_requirement?.name }}
        </p>
      </div>

      <div class="mb-6 w-full">
        <div class="">
          <div class="flex gap-3" v-if="store.activeTab == 'plan'">
            <span
              v-for="item in filterSkills"
              :key="item.id"
              class="font-medium cursor-pointer pb-2"
              @click="store.educationFaqId = item.id"
              :class="{
                ' border-b-2 border-red-500 ': store.educationFaqId === item.id,
              }"
            >
              <span v-if="!item.parent">{{ item.skills.name }}</span>
            </span>
          </div>
          <hr />

          <div class="tab mt-6">
            <span
              v-for="tab in firlterFaq"
              :key="tab.id"
              :class="{ active: tab?.id === activeTab }"
              @click="changeTab(tab.id)"
              class="tab-spans font-semibold text-[12px] cursor-pointer"
            >
              <span>
                {{ tab.skills.name }}
              </span>
            </span>
          </div>

          <div class="">
            <div class="rounded-xl">
              <div class="rounded-xl pt-10">
                <p class="font-normal text-base mb-3 text-slate-950">
                  {{ scillsData?.question }}
                </p>
                <div
                  class="w-full table-container"
                  ref="tableContainer"
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

const tableContainer = ref(null);

const activeTab = ref(null);
const scillsData = ref(null);

const filterSkills = computed(() => {
  if (props.item.faq.length > 0) {
    if (store.activeTab === "plan") {
      return props.item.faq.filter((item) => !item.parent && !item.action);
    } else {
      return props.item.faq.filter((item) => !item.parent && item.action == 1);
    }
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
  flex-wrap: wrap;
  gap: 10px;
}

.tab-spans {
  padding: 8px 12px;
  transition: all 0.3s ease;
}

.tab-spans.active {
  border-radius: 15px;
  color: white;
  background-color: #06203d;
}

.table-container {
  width: 100%;
}

:deep(table) {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 0.95rem;
  table-layout: auto;
}

:deep(td) {
  /* width: auto; */
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  vertical-align: middle;
  word-wrap: break-word;
}

/* Sarlavha qatorlari uchun */
:deep(tr:has(strong)) {
  background-color: #f3f4f6;
}

/* Semestr sarlavhalari uchun */
:deep(tr:has(td[colspan="4"])) {
  background-color: #011454 !important;
  color: white;
  width: 100% !important;
}

:deep(tr:has(td[colspan="4"]) strong) {
  font-weight: 700;
}

/* Bold textlar uchun */
:deep(strong) {
  font-weight: 600;
  /* text-align: center; */
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




:deep(tr td:nth-child(2)) {
  width: 100% !important;
}

:deep(tr td:nth-child(3)) {
  width: 100% !important;
}
:deep(tr td:nth-child(4)) {
  width: 100% !important;
}


/* Responsive dizayn */
@media (max-width: 768px) {
  

  :deep(table) {
    font-size: 0.875rem;
    table-layout: fixed;
    width: 100%;

  }

  

  
}


</style>