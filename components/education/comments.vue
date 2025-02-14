<template>
  <section class="w-full mt-[104px]  ">
    <div v-if="professors.length" class="space-y-6">
      <!-- Title -->
      <h2 class="text-xl md:text-2xl font-medium">
        {{ store.dataTranslate["footer.professor"] }}
      </h2>

      <!-- Professors Grid -->
      <div class="grid grid-cols-2 gap-4 lg:gap-6">
        <!-- Professor Card -->
        <div
          v-for="professor in professors"
          :key="professor.id"
          class="flex flex-col md:flex-row gap-4 lg:gap-6 p-4 bg-white rounded-xl border"
        >
          <!-- Image Container -->
          <div class="w-full md:w-[157px] h-[206px] flex-shrink-0 ">
            <img
              :src="professor.photo[store.currentImage]"
              :alt="professor.name"
              class="w-full h-full rounded-lg object-cover"
            />
          </div>

          <!-- Content -->
          <div class="">
            <h3 class="font-medium text-lg md:text-xl my-4">
              {{ professor.name }}
              
            </h3>
            
           
           
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHomeStore } from "~/store/home";
import { computed } from 'vue';

const store = useHomeStore();

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// Computed
const professors = computed(() => {
  return Array.isArray(props.data) ? props.data : [];
});

// Methods
const isProfessorDescValid = (desc) => {
  return typeof desc === 'string' && desc.trim().length > 0;
};

const truncateText = (text, length) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};
</script>