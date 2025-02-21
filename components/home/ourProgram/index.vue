<script setup>
import { useHomeStore } from "~/store/home";
import { useContactStore } from "~/store/contact";
const stored = useContactStore();
const modalVisible = ref(false);
const openModal = () => (modalVisible.value = true);
const closeModal = () => (modalVisible.value = false);

const store = useHomeStore();
const selectedProgram = ref(1);
const seletTypeEducution = (index) => {
  selectedProgram.value = index;
  programitem.value = store.educationData[index].children[0];
  progamItemId.value = store.educationData[index].children[0].id;
};
onMounted(() => {
  if (!store.educationData) {
    store.getEducation().then(() => {

      programitem.value = store.educationData[1].children[0];
      progamItemId.value = store.educationData[1].children[0].id;
    });
  } else {

    programitem.value = store.educationData[1].children[0];
    progamItemId.value = store.educationData[1].children[0].id;
  }
});

const programitem = ref(null);
const progamItemId = ref(null);

const selectItem = (data) => {
  progamItemId.value = data.id;
  programitem.value = data;
};
</script>
<template>
  <div class="flex justify-center" v-if="store.educationData">
    <div class="h-full mainContainer my-[52px]">
      <div class="flex items-center">
        <img src="/assets/imgs/home/program.png" alt="" />
        <h1 class="font-normal text-[#2E4259] ml-2">
          {{ store.dataTranslate["home.ourPrograms"] }}
        </h1>
      </div>

      <div class="my-10 ">
       
        <button
          class="selectProgram "
          :class="{ activeClass: selectedProgram === 1 }"
          @click="seletTypeEducution(1)"
        >
          {{ store.educationData[1].name }}
        </button>


         <button
          class=" selectProgram ml-8 "
          :class="{ activeClass: selectedProgram === 0 }"
          @click="seletTypeEducution(0)"
        >
          {{ store.educationData[0].name }}
        </button>


      </div>

      <div class="flex wrapper_flex" data-aos="zoom-in-up">
        <!-- program items  -->
        <div class="programItems">
          <div
            class="programItem flex items-center cursor-pointer"
            :class="{
              'bg-white border border-r-0 border-[#E6EDFA] rounded-l-xl':
                item.id === progamItemId,
            }"
            v-for="item in store.educationData[selectedProgram].children"
            :key="item.id"
            @click="selectItem(item)"
          >
            <img :src="item.img" alt="" />
            <p class="ml-4 wrapper_title">{{ item.name }}</p>
          </div>
        </div>
        <!-- programma data  -->
        <div
          class="programmaData bg-white flex flex-col justify-between"
          v-if="programitem"
          :class="{
            'rounded-tl-xl':
              progamItemId !==
              store.educationData[selectedProgram].children[0].id,
          }"
        >
          <h2 class="programmaTitle">{{ programitem.name }}</h2>
          <hr />

          <div class="grid grid-cols-2 sm:gap-y-10 gap-5 flex_grid">
            <!-- davomiyligi  -->
            <div>
              <div class="flex">
                <img src="/assets/imgs/home/school.png" alt="" />
                <span class="text-[#5D5D5F] ml-2">{{
                  store.dataTranslate["home.duration"]
                }}</span>
              </div>
              <div>
                <p class="text-[#06203D] programArgument sm:mt-3 mt-1">
                  {{ programitem.daytime }}
                </p>
              </div>
            </div>
            <!-- qabul qilishi -->
            <div>
              <div class="flex">
                <img src="/assets/imgs/home/calendar-notes.png" alt="" />
                <span
                  class="text-[#5D5D5F] ml-2 font-normal sm:text-base text-sm"
                  >{{ store.dataTranslate["home.acceptance"] }}</span
                >
              </div>
              <div>
                <p class="text-[#06203D] programArgument sm:mt-3 mt-1">
                  {{ programitem?.kundizgi_date }}
                </p>
              </div>
            </div>

            <!-- manzil -->
            <div>
              <div class="flex">
                <img src="/assets/imgs/home/location.png" alt="" />
                <span class="text-[#5D5D5F] ml-2">{{
                  store.dataTranslate["home.address"]
                }}</span>
              </div>
              <div>
                <p class="text-[#06203D] programArgument sm:mt-3 mt-1">
                  {{ programitem.map }}
                </p>
              </div>
            </div>

            <!-- Til  -->
            <div>
              <div class="flex">
                <img src="/assets/imgs/home/globe.png" alt="" />
                <span
                  class="text-[#5D5D5F] ml-2 font-normal sm:text-base text-sm"
                  >{{ store.dataTranslate["home.language"] }}</span
                >
              </div>
              <div>
                <p class="text-[#06203D] programArgument sm:mt-3 mt-1">
                  {{ programitem.lang }}
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div>
            <p
              class="programDescription text-[#06203D]"
              v-html="programitem?.first_description?.substring(0, 400)"
            ></p>
          </div>
          <div>
            <div class="flex mt-4">
              <button
                v-if="selectedProgram === 0"
                @click="$router.push(`/education-inner/${programitem?.slug}`)"
                class="bg-[#F7483B] w-[156px] h-[48px] flex justify-center items-center text-white font-medium sm:text-base text-[12px] rounded-lg"
              >
                {{ store.dataTranslate["home.more_details"] }}
                <UIcon
                  name="i-heroicons-arrow-long-right"
                  class="ml-2 w-5 h-5 text-white"
                />
              </button>
              <button
                v-if="selectedProgram === 1"
                @click="$router.push(`/education-inner/${programitem?.slug}`)"
                class="bg-[#F7483B] w-[156px] h-[48px] flex justify-center items-center text-white font-medium sm:text-base text-[12px] rounded-lg"
              >
                {{ store.dataTranslate["home.more_details"] }}
                <UIcon
                  name="i-heroicons-arrow-long-right"
                  class="ml-2 w-5 h-5 text-white"
                />
              </button>
              <button
                @click="openModal"
                class="w-[216px] h-[48px] border bordr-[#DCE5F5] text-[#06203D] flex justify-center items-center font-medium rounded-lg ml-6"
              >
                {{ store.dataTranslate["home.submit_application"] }}
                <UIcon
                  name="i-heroicons-arrow-long-right"
                  class="ml-2 mr-1 w-5 h-5 text-[#06203D]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal :isOpen="modalVisible" @close="closeModal" />
  </div>
</template>


<style scoped>



@media (max-width: 600px) {

  .wrapper_title {
    font-weight: 400px !important;
    font-size: 14px !important;
  }

  .selectProgram {
    font-size: 18px !important;
    color: #808d9d;
    font-weight: 400;
  }
  .programmaTitle {
    font-size: 18px !important;
    font-weight: 500 !important;
    line-height: 33.6px;
  }

  .programArgument {
    font-size: 18px !important;
    font-weight: 400 !important;
  }

  .programDescription {
    font-size: 14px !important;
    font-weight: 400 !important;
  }

  .flex_grid {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1024px) {
  .wrapper_flex {
    display: flex;
    flex-direction: column;
  }
 
  .programItems {
    width: 100% !important;
    height: 60px !important;
    display: flex;
    gap: 12px;
    overflow: auto;
    margin-bottom: 2em;
  }
  .programItem {
    padding: 10px 12px !important;
    border: 1px solid #e6edfa;
    border-radius: 8px;
    text-align: center;
    width: 100%;
  }

  .wrapper_title {
    width: 290px;
  }

  .programmaData {
    width: 100% !important;
    height: 100% !important;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.wrapper_title {
  font-size: 18px;
  color: #06203d;
}

.activeClass {
  color: #06203d !important;
  font-weight: 500 !important;
  font-size: 28px !important;
}

.selectProgram {
  font-size: 24px;
  color: #808d9d;
}

.programItems {
  width: 619px;
  /* height: 730px; */
}

.programItem {
  /* height: 73px; */
  padding: 24px 32px 24px 32px;
  font-size: 18px;
}

.programmaData {
  width: 821px;
  height: 730px;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 32px;
}

.programmaTitle {
  /* font-family: Halvar Breitschrift; */
  font-size: 28px;
  font-weight: 500;
  line-height: 33.6px;
}

.programArgument {
  font-size: 32px;
  font-weight: 400;
  line-height: 38.4px;
  color: #06203d;
}

.programDescription {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #06203d;
}
</style>