<template>
  <div>
    <!-- <pre>
    {{ props.data }}
  </pre -->

    <div class="flex gap-6 w-[952px]">
      <div class="w-[464px] h-[416]">
        <NuxtImg
          :src="props.data?.entrance_requirement?.photo[store.currentImage]"
          alt=""
          class="w-full h-full rounded-xl"
        />
      </div>
      <div
        class="rounded-xl h-[416px] w-[464px] flex justify-center flex-col"
        style="border: 1px solid #e6edfa; padding: 15px"
      >
        <div>
          <p class="font-medium text-2xl mb-6">
            {{ props.data?.entrance_requirement?.name }}
          </p>
        </div>
        <div class="flex gap-2 mb-6 w-[416px]">
          <div class="tabs-container">
            <div class="tab">
              <button
                v-for="tab in props.data?.entrance_requirement?.skills"
                :key="tab.id"
                :class="{ active: tab?.id === activeTab }"
                @click="changeTab(tab?.id)"
                class="tab-buttons font-semibold text-sm text-black cursor-pointer"
              >
                {{ tab.name }}
              </button>
            </div>



            <div class="tab-content">
              <div             
                class="flex flex-col gap-6 rounded-xl"
              >
                <div
                  class="rounded-xl"
                
                >
                  <p class="font-normal text-base mb-2 text-slate-950">
                  test
                  </p>
                  <p class="font-normal text-sm text-[#868587]">
                   test
                  </p>
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

const changeTab = (tabId) => {
  activeTab.value = tabId;
};
watch(
  () => props.data?.entrance_requirement?.skills,
  (newValue) => {
    activeTab.value = newValue[0]?.id;
  },
  { deep: true }
);

</script>

<style  scoped>
.tab {
  display: flex;
}
.tab-buttons {
  padding: 10px 20px;
  /* //   border-bottom: 2px solid transparent; */
  transition: all 0.3s ease;
}

.tab-buttons.active {
  /* //   border-bottom: 2px solid #007bff; */
  border-radius: 12px;
  color: white;
  background-color: #06203d;
}
</style>