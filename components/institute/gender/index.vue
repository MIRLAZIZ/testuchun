<script setup>
import { useHomeStore } from "~/store/home";
import { useContactStore } from "~/store/contact";
import { ref, onMounted } from 'vue';

// Store initialization
const store1 = useContactStore();
const store = useHomeStore();

// Years calculation
const currentYear = new Date().getFullYear();
const startYear = new Date(0).getFullYear();
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
  document.addEventListener('click', (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      isOpen.value = false;
    }
  });
  
  // Initial data fetch
  store1.getStudents(selectedYear.value);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="2xl:w-[1076px] xl:w-[900px] lg:w-[660px] bg-white rounded-xl xl:p-8 lg:p-2 the_box_gender">
      <div class="flex justify-between the_box_gender">
        <div class="w-[688px] mt-9 the_box_title">
          <h1 class="text-[28px] text-[#06203D] font-Halvar font-medium">
            {{ store.dataTranslate["about.about_gender"] }}
          </h1>
          <p class="text-[20px] text-[#06203D] font-normal mt-6">
            {{ store.dataTranslate["about.toshkent"] }}
          </p>
        </div>
        <div class="w-[260px] h-[393px] p-4 rounded-lg border border-[#F1F1F1] the_wrapper">
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between items-center">
              <h1>{{ store.dataTranslate["about.yil"] }}</h1>
              
              <!-- Custom Select -->
              <div class="relative" ref="dropdownRef">
                <button 
                  @click="toggleDropdown"
                  class="flex items-center justify-between min-w-[100px] px-3 py-2  rounded-md hover:bg-gray-50 focus:outline-none cursor-pointer"
                >
                  <span class="mr-2">{{ selectedYear }}</span>
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
                    :class="{ 'bg-blue-50 text-blue-700': selectedYear === year }"
                  >
                    {{ year }}
                  </div>
                </div>
              </div>
            </div>
            <pre>
              <!-- {{store1.student}} -->
            </pre>
            <InstituteGenderChart
              :girls="store1.student?.female_students"
              :boys="store1.student?.male_students"
            />

            <div>
              <div class="flex justify-between">
                <span class="flex items-center">
                  <div class="w-2 h-2 rounded-full dot1 mr-1"></div>
                  {{ store.dataTranslate["about.qiz_bolalar"] }}
                </span>
                <span>{{ store1.student?.female_students }}</span>
              </div>
              <div class="flex justify-between">
                <span class="flex items-center">
                  <div class="w-2 h-2 rounded-full dot2 mr-1"></div>
                  {{ store.dataTranslate["about.ogil_bolalar"] }}
                </span>
                <span>{{ store1.student?.male_students }}</span>
              </div>
            </div>

            <div class="flex justify-between items-end">
              <p>{{ store.dataTranslate["about.jami"] }}</p>
              <p class="text-[#06203D] text-[32px] h-11 the_title">
                {{ (store1.student?.male_students || 0) + (store1.student?.female_students || 0) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1024px) {
  .the_box_gender {
    padding: 10px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .the_box_gender {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .the_box_title {
    width: 500px;
  }
}

@media (max-width: 600px) {
  .the_box_title {
    width: 335px;
  }
  .the_box_title h1 {
    font-weight: 500;
    font-size: 16px;
  }
  .the_box_title p {
    font-weight: 400;
    font-size: 14px;
  }
  .the_box_gender {
    padding: 15px;
    width: 100%;
  }
  .the_title {
    font-weight: 400;
    font-size: 32px;
  }
}

/* Custom scrollbar */
.overflow-auto {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E0 #EDF2F7;
}

.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: #EDF2F7;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background-color: #CBD5E0;
  border-radius: 3px;
}

.dot1 {
  background: linear-gradient(90deg, #ec4899 0%, #a855f7 52.6%, #3b82f6 100%);
}

.dot2 {
  background: linear-gradient(134.72deg, #06203d -0.13%, #1054a3 105.34%);
}
</style>