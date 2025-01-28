<template>
  <div>
    <div class="tabs-container">
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="{ active: tab.id === activeTab }"
          @click="changeTab(tab.id)"
          class="tab-button font-semibold text-sm text-black cursor-pointer"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content mt-5">
        <div
          v-if="activeTab === 'general'"
          class="flex flex-col gap-6 rounded-xl"
        >
          <div
            style="width: 952px; border: 1px solid #e6edfa; padding: 24px"
            class="rounded-xl"
            v-for="item in []"
            :key="item"
          >
            <p class="mb-4 font-medium text-2xl">{{ item.name }}</p>
            <p class="font-normal text-base">{{ item.description }}</p>
          </div>
        </div>
        <div v-if="activeTab === 'plan'" class="flex flex-col gap-6 rounded-xl">
          <div
            style="width: 952px; border: 1px solid #e6edfa; padding: 24px"
            class="rounded-xl"
            v-for="item in props.data"
            :key="item.id"
          >
            <p class="mb-4 font-medium text-2xl">{{ item.name }}</p>
            <p class="font-normal text-base">{{ item.description }}</p>
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
});

const tabs = [
  { id: "general", label: "Umumiy ma'lumot" },
  { id: "plan", label: "O'quv rejasi" },
];

const activeTab = ref("general");

const changeTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<style >
.tabs-container {
  width: 100%;
  margin: 0 auto;
}

.tabs {
  display: flex;
  border-bottom: 2px solid #eaeaea;
}

.tab-button {
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab-button.active {
  border-bottom: 2px solid #007bff;
  color: #000;
}
</style>