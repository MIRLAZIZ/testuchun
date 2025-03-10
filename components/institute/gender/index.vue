<script setup>
import { useHomeStore } from "~/store/home";
import { useContactStore } from "~/store/contact";
import { ref, onMounted } from "vue";

// Store initialization
const store1 = useContactStore();
const store = useHomeStore();

// Years calculation
const currentYear = new Date().getFullYear();
// const startYear = new Date(0).getFullYear();
const startYear = 2000;
const years = ref([]);
for (let i = startYear; i <= currentYear; i++) {
  years.value.push(i);
}

// Dropdown state
const isOpen = ref(false);
const selectedYear = ref(currentYear);
const dropdownRef = ref(null);

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Select year and update data
const selectYear = (year) => {
  selectedYear.value = year;
  store1.getStudents(year);
  isOpen.value = false;
};

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener("click", (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      isOpen.value = false;
    }
  });

  // Initial data fetch
  store1.getStudents(selectedYear.value);
});
</script>

<template>
  <div>
    <LoadingPage v-if="store.loading" />
    <div v-else>
      <div class="w-full p-8 bg-white rounded-xl">
        <div class="flex flex-col md:flex-row justify-between  md:items-start gap-16 ">
          <div class="xl:w-[688px] w-full mt-9">
            <h1 class="text-[28px] text-[#06203D] font-Halvar font-medium">
              {{ store.dataTranslate["about.about_gender"] }}
            </h1>
            <p class="text-[20px] text-[#06203D] font-normal mt-6">
              {{ store.dataTranslate["about.toshkent"] }}
            </p>
          </div>

          <div class=" flex justify-center h-fit">
            <div
              class="w-[260px] p-4 rounded-lg border border-[#F1F1F1]   "
            >
              <div class="flex flex-col h-full">
                <div class="flex justify-between items-center">
                  <h1>{{ store.dataTranslate["about.yil"] }}</h1>

                  <!-- Custom Select -->
                  <div class="relative" ref="dropdownRef">
                    <button
                      @click="toggleDropdown"
                      class="flex items-center justify-end min-w-[100px] focus:outline-none cursor-pointer"
                    >
                      <p class="mr-2">{{ selectedYear }}</p>
                      <UIcon
                        name="i-heroicons-chevron-down"
                        class="transition-transform duration-200"
                        :class="{ 'rotate-180': isOpen }"
                      />
                    </button>

                    <!-- Dropdown menu -->
                    <div
                      v-if="isOpen"
                      class="absolute right-0 z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div
                        v-for="year in years"
                        :key="year"
                        @click="selectYear(year)"
                        class="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        :class="{
                          'bg-blue-50 text-blue-700': selectedYear === year,
                        }"
                      >
                        {{ year }}
                      </div>
                    </div>
                  </div>
                </div>

                <InstituteGenderChart
                  :girls="Number(store1.student?.female_students[0]?.female)"
                  :boys="Number(store1.student?.female_students[0]?.male)"
                  class="my-6"
                />

                <div>
                  <div class="flex justify-between">
                    <span class="flex items-center">
                      <div class="w-2 h-2 rounded-full dot1 mr-1"></div>
                      {{ store.dataTranslate["about.qiz_bolalar"] }}
                    </span>
                    <span>{{
                      store1.student?.female_students[0]?.female
                    }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="flex items-center">
                      <div class="w-2 h-2 rounded-full dot2 mr-1"></div>
                      {{ store.dataTranslate["about.ogil_bolalar"] }}
                    </span>
                    <span>{{ store1.student?.female_students[0]?.male }}</span>
                  </div>
                </div>

                <div class="flex justify-between items-baseline">
                  <p>{{ store.dataTranslate["about.jami"] }}</p>
                  <p class="text-[#06203D] text-[32px]">
                    {{
                      (Number(store1.student?.female_students[0]?.male) || 0) +
                      (Number(store1.student?.female_students[0]?.female) || 0)
                    }}

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

<style scoped>
.dot1 {
  background: linear-gradient(90deg, #ec4899 0%, #a855f7 52.6%, #3b82f6 100%);
}

.dot2 {
  background: linear-gradient(134.72deg, #06203d -0.13%, #1054a3 105.34%);
}
</style>