<script setup>
import { useHomeStore } from "~/store/home";
import gsap from "gsap";

const store = useHomeStore();
const isClient = ref(false);
const hasAnimated = ref(false);
const statsRef = ref(null);

// Reaktiv obyektni yaratish
const stats = reactive({
  educationalPrograms: 0,
  audienceSize: 0,
  greenZone: 0,
  libraryCollection: 0,
  numberOfStudents: 0,
  maleStudents: 0,
  femaleStudents: 0,
});

// Animatsiya funksiyasi
const animateNumbers = () => {
  if (hasAnimated.value) return;
  
  const tl = gsap.timeline();
  
  tl.to(stats, {
    duration: 8,
    educationalPrograms: parseInt(store.siteInfo?.educational_programs || 0),
    audienceSize: parseInt(store.siteInfo?.audience_size || 0),
    greenZone: parseInt(store.siteInfo?.green_zone || 0),
    libraryCollection: parseInt(store.siteInfo?.library_collection || 0),
    numberOfStudents: parseInt(store.siteInfo?.number_of_students || 0),
    maleStudents: parseInt(store.siteInfo?.male_students || 0),
    femaleStudents: parseInt(store.siteInfo?.female_students || 0),
    ease: "power2.out",
    onUpdate: () => {
      Object.keys(stats).forEach(key => {
        stats[key] = Math.round(stats[key]);
      });
    },
    onComplete: () => {
      hasAnimated.value = true;
    }
  });
};

// Intersection Observer yaratish
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && store.siteInfo && !hasAnimated.value) {
          requestAnimationFrame(() => {
            animateNumbers();
          });
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '50px'
    }
  );

  if (statsRef.value) {
    observer.observe(statsRef.value);
  }

  // Cleanup function
  onBeforeUnmount(() => {
    if (statsRef.value) {
      observer.unobserve(statsRef.value);
    }
  });
};

// Animatsiyani qayta ishga tushirish uchun
const resetAnimation = () => {
  hasAnimated.value = false;
  Object.keys(stats).forEach(key => {
    stats[key] = 0;
  });
};

// Component mount bo'lganda
onMounted(() => {
  isClient.value = true;
  nextTick(() => {
    setupIntersectionObserver();
  });
});

// Store o'zgarishini kuzatish
watch(
  () => store.siteInfo,
  (newValue) => {
    if (newValue && isClient.value && !hasAnimated.value) {
      setupIntersectionObserver();
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="flex justify-center" v-if="isClient">
    <div class="my-[52px] mainContainer" ref="statsRef">
      <h1 class="facts">{{ store.dataTranslate["home.facts_number"] }}</h1>
      <div class="mt-6 grid 2xl:grid-cols-3 lg:gap-4 lg:grid md:grid-cols-2 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 flex_box">
        
        <!-- Educational Programs -->
        <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between" 
             data-aos="fade-up">
          <div>
            <span class="factsNumber text-[#F7483B]">+</span>
            <span class="factsNumber text-[#06203D]">{{ Math.round(stats.educationalPrograms) }}</span>
          </div>
          <hr class="bg-[#E9EEF9]" />
          <p class="text-[#5D5D5F] text-left">{{ store.dataTranslate["home.educational_programs"] }}</p>
        </div>

        <!-- Audience Size -->
        <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between"
             data-aos="fade-down">
          <div>
            <span class="factsNumber text-[#06203D]">{{ Math.round(stats.audienceSize) }}</span>
          </div>
          <hr class="bg-[#E9EEF9]" />
          <p class="text-[#5D5D5F] text-left">{{ store.dataTranslate["home.number_auditories"] }}</p>
        </div>

        <!-- Green Zone -->
        <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between"
             data-aos="fade-up">
          <div>
            <span class="factsNumber text-[#F7483B]">+</span>
            <span class="factsNumber text-[#06203D]">
              {{ Math.round(stats.greenZone) }}
              m<sup class="lg:text-[32px] text-base">2</sup>
            </span>
          </div>
          <hr class="bg-[#E9EEF9]" />
          <p class="text-[#5D5D5F] text-left">{{ store.dataTranslate["home.green_zone"] }}</p>
        </div>

        <!-- Library Collection -->
        <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between"
             data-aos="fade-down">
          <div>
            <span class="factsNumber text-[#F7483B]">+</span>
            <span class="factsNumber text-[#06203D]">{{ Math.round(stats.libraryCollection) }}</span>
          </div>
          <hr class="bg-[#E9EEF9]" />
          <p class="text-[#5D5D5F] text-left">{{ store.dataTranslate["home.library_fund"] }}</p>
        </div>

        <!-- Number of Students -->
        <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between"
             data-aos="fade-up">
          <div>
            <span class="factsNumber text-[#06203D]">{{ Math.round(stats.numberOfStudents) }}</span>
          </div>
          <hr class="bg-[#E9EEF9]" />
          <p class="text-[#5D5D5F] text-left">{{ store.dataTranslate["home.number_students"] }}</p>
        </div>

        <!-- Male and Female Students -->
        <div class="h-[164px] 2xl:px-8 xl:py-6 lg:px-6 lg:py-4 sm:px-4 sm:py-3 bg-white w-full rounded-xl"
             data-aos="fade-down">
          <div class="flex h-full w-full">
            <!-- Male Students -->
            <div class="flex flex-col justify-between h-full w-full py-3 pr-3">
              <div class="flex items-center">
                <img src="/assets/imgs/talim/male.png" class="w-[32px] h-[32px]" alt="" />
                <span class="factsNumber">{{ Math.round(stats.maleStudents) }}</span>
              </div>
              <hr class="bg-[#E9EEF9]" />
              <p class="text-[#5D5D5F] text_left ml-1">{{ store.dataTranslate["home.male_students"] }}</p>
            </div>
            
            <!-- Female Students -->
            <div class="flex flex-col justify-between h-full w-full py-3 pl-3">
              <div class="flex items-center">
                <img src="/assets/imgs/talim/female.png" alt="" class="w-[32px] h-[32px]" />
                <span class="factsNumber ml-1">{{ Math.round(stats.femaleStudents) }}</span>
              </div>
              <hr class="bg-[#E9EEF9]" />
              <p class="text-[#5D5D5F] text-left">{{ store.dataTranslate["home.female_students"] }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.facts {
  font-family: "Halvar Breitschrift";
  font-size: 28px;
  font-weight: 500;
  line-height: 33.6px;
  color: #06203d;
}

.factsNumber {
  font-size: 56px;
  font-weight: 400;
  line-height: 67.2px;
  text-align: left;
}

@media (max-width: 1024px) {
  .factsNumber {
    font-size: 46px !important;
    font-weight: 400 !important;
    font-family: Golos Text;
  }
}

@media (max-width: 900px) {
  .factsNumber {
    font-size: 30px !important;
    font-weight: 400 !important;
    font-family: Golos Text;
  }
}

@media (max-width: 640px) {
  .flex_box {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
  }
  
  .facts {
    font-family: "Halvar Breitschrift";
    font-size: 24px !important;
    font-weight: 400 !important;
  }
  
  .text_left {
    font-size: 14px;
    font-weight: 400;
  }
  
  .factsNumber {
    font-size: 24px !important;
    font-weight: 500 !important;
  }
}
</style>