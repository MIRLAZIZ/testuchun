<template>
  <div class="w-full">
    

    <div
      class="flex gap-6  flex-col sm:flex-row w-full "
      v-if="props.data?.entrance_requirement"
    >
      <div class="lg:w-2/4 h-[272px]  md:h-[416px] w-full">
        <NuxtImg
          :src="props.data?.entrance_requirement?.photo[store.currentImage]"
          alt=""
          class="w-full h-full rounded-xl object-cover"
        />
      </div>

      <div
        class="rounded-xl  lg:w-2/4 w-full flex  flex-col border p-4"
      >
        <div>
          <p class="font-medium text-2xl xl:mt-16 mb-6">
            {{ props.data?.entrance_requirement?.name }}
          </p>
        </div>

        <div class="flex gap-2 mb-6 w-full">
          <div class="tabs-container">
            <div class="tab">
              <button
                v-for="tab in props.data?.entrance_requirement?.skills"
                :key="tab.id"
                :class="{ active: tab?.id === activeTab }"
                @click="changeTab(tab)"
                class="tab-buttons font-semibold text-sm text-black cursor-pointer"
              >
                {{ tab }}
              </button>
            </div>

            <div class="tab-content">
              <div class="flex flex-col gap-6 rounded-xl">
                <div class="rounded-xl">
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

<style  scoped>
@media (max-width: 600px) {
  .box_title {
    font-size: 14px;
    font-weight: 500;
  }
  .tab-content_title {
    font-weight: 400px;
    font-size: 14px;
  }
  .tab-content_text {
    font-weight: 400px;
    font-size: 12px;
  }
  .tab-buttons {
    font-weight: 600;
    font-size: 12px;
  }
  .tab {
    flex-direction: column;
  }
}
@media (max-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
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