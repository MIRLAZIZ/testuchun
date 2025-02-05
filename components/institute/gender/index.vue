<script setup>
import { useHomeStore } from "~/store/home";
import { useContactStore } from "~/store/contact";

// Hozirgi yilni olish
const currentYear = new Date().getFullYear();

// Boshlanish yili (JavaScript vaqt hisobi boshlagan yili - 1970)
const startYear = new Date(0).getFullYear(); // 1970

// Yillar ro‘yxatini yaratish
const years = ref([]);
for (let i = startYear; i <= currentYear; i++) {
  years.value.push(i);
}

// Tanlangan yil (default - hozirgi yil)
const selectedYear = ref(currentYear);

const store1 = useContactStore();
const store = useHomeStore();
onMounted(() => {
  store1.getStudents(selectedYear.value);
});
</script>
<template>
  <div class="flex items-center justify-center">
    <div
      class="2xl:w-[1076px] xl:w-[900px] lg:w-[660px] bg-white rounded-xl xl:p-8 lg:p-2 the_box_gender"
    >
      <div class="flex justify-between gap-16 the_box_gender">
        <div class="w-[688px] mt-9 the_box_title">
          <h1 class="text-[28px] text-[#06203D] font-Halvar font-medium">
            {{ store.dataTranslate["about.about_gender"] }}
          </h1>
          <p class="text-[20px] text-[#06203D] font-normal mt-6">
            {{ store.dataTranslate["about.toshkent"] }}
          </p>
        </div>
        <div
          class="w-[260px]  p-4 rounded-lg border border-[#F1F1F1] the_wrapper"
        >
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between items-center">
              <h1>{{ store.dataTranslate["about.yil"] }}</h1>
              <div class="flex items-center relative">
                <select  v-model="selectedYear" class="focus:outline-none  w-4 cursor-pointer" @change="store1.getStudents(selectedYear)">
                  <option v-for="year in store1.student" :key="year" :value="year" >
                    
                    {{ year }} 

                  </option>
                </select>
                <UIcon name="i-heroicons-chevron-down" class="ml-2 absolute" />
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
                {{
                  (store1.student?.male_students || 0) +
                  (store1.student?.female_students || 0)
                }}
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
    /* width:750px; */
    width: 100%;
  }
}
@media (max-width: 768px) {
  .the_box_gender {
    padding: 10px;
    /* width:570px; */
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
    /* width:360px; */
    width: 100%;
  }
  .the_title {
    font-weight: 400;
    font-size: 32px;
  }
}

.dot1 {
  background: linear-gradient(90deg, #ec4899 0%, #a855f7 52.6%, #3b82f6 100%);
}

.dot2 {
  background: linear-gradient(134.72deg, #06203d -0.13%, #1054a3 105.34%);
}

select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
 }
</style>