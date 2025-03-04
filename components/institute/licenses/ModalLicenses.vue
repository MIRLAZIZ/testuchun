<script setup>
import { useHomeStore } from "~/store/home";


const store = useHomeStore();
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: () => false,
  },
  items: {
    type: Array,
    require: true,
    default: () => [],
  },
  data_id: {
    type: Number,
    require: true,
  }
 
});
const emit = defineEmits(["update:isOpen"]);

const itemIndex = ref(null);

watch(
  () => props.data_id,
  (newValue) => {
    itemIndex.value = newValue;
  },
  { deep: true }
);

// watch window height

const nextOn = () => {
  if (itemIndex.value < props.items.length - 1) {
    itemIndex.value++;
  }
};

const previousOne = () => {
  if (itemIndex.value > 0) {
    itemIndex.value--;
  }
};
const printPage = () => {
  const printContent = document.querySelector(".custom-modal").innerHTML;
  const printWindow = window.open("", "_blank");

  printWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            padding: 20px;
          }
          img { 
            max-width: 100%; 
            height: auto; 
          }
          .no-print {
            display: none !important;
          }
          .box_flex {
            display: flex;
            gap: 1rem;
          }
          .box_block {
            width: 40%;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
  setTimeout(() => printWindow.close(), 300);
};
</script>

<template>
  <div>
    <UModal class="" v-model="props.isOpen" prevent-close>
      <UCard>
        <div
          class="flex  justify-between lg:gap-3 box_flex 2xl:w-[1036px] lg:w-[1000px] h-[539px] md:w-[750px] custom-modal box_height bg-white md:p-10 p-5"
        >
        <div class="flex">
           <div class="md:w-[300px] box_block h-full">
            <img
              class="w-full h-full rounded-r-lg"
              :src="props.items[itemIndex]?.photo[store.currentImage]"
              alt="certifacate img"
            />
              
          </div>

          <div
                  class="flex ml-4 items-center justify-center w-12 h-12 border rounded-full cursor-pointer md:hidden"
                  @click="emit('update:isOpen', false,  store.windowInnerHeight ? store.isFixed = true : '')"
                >
                  <UIcon
                    name="i-heroicons-x-mark"
                    class="w-7 h-7 text-[#2D264B]"
                  />
                </div>
        </div>
         

          <div
            class="lg:w-[592px] sm:w-[400px] flex flex-col justify-between h-full"
          >
            <div>
              <div class="flex md:justify-between md:mt-0 mt-6 md:gap-0 gap-1 items-center w-full">
                <img src="/assets/imgs/kampus/image 154.png" alt="" />

                <div
                  class="flex items-center justify-center w-12 h-12 border rounded-full cursor-pointer box_hidden"
                  @click="emit('update:isOpen', false, store.windowInnerHeight ? store.isFixed = true : '')"
                >
                  <UIcon
                    name="i-heroicons-x-mark"
                    class="w-7 h-7 text-[#2D264B]"
                  />
                </div>
                 <h1 class="md:hidden block text-2xl font-medium ">
                {{ props.items[itemIndex]?.title }}
              </h1>
              </div>

              <h1 class="md:block hidden text-2xl font-medium mt-6">
                {{ props.items[itemIndex]?.title }}
              </h1>
              <p
                class="text-[#868587] mt-4"
                v-html="props.items[itemIndex]?.desc"
              ></p>

              <hr class="border-[#ECF1FB] my-6" />

              <p>
                <span class="text-[#9A999B] downloadButton"
                  >Berilgan sana: </span
                >{{ props.items[itemIndex]?.date?.substring(0, 10) }} 
              </p>
            </div>

            <div class="md:mt-0 mt-6 flex justify-between sm:flex-row flex-row-reverse printVisable no-print">
              <div class="flex items-center gap-4">
                <button
                  class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center"
                  @click="previousOne"
                >
                  <UIcon
                    name="i-heroicons-arrow-long-left"
                    class="w-5 h-5 text-[#06203D]"
                  />
                </button>

                <button
                  class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center"
                  @click="nextOn"
                >
                  <UIcon
                    name="i-heroicons-arrow-long-right"
                    class="w-5 h-5 text-[#06203D]"
                  />
                </button>

                <span class="text-[#9A999B]"
                  >{{ itemIndex + 1 }}/{{ props.items?.length }}</span
                >
              </div>

              <div>
                <button
                  class="bg-[#F7483B] sm:w-[194px] w-[160px] no-print  h-[48px] flex justify-center items-center font-medium rounded-lg text-white"
                  @click="printPage"
                >
                  {{ store.dataTranslate['header.download'] }}   
                  <img
                    src="/assets/imgs/kampus/Download.png"
                    alt=""
                    class="w-5 h-5 ml-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<style>
.custom-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

@media print {
  .no-print {
    display: none !important;
  }
}
@media (max-width: 600px) {
  .box_height {
    width: 371px !important;
  }
}
@media (max-width: 768px) {
  .box_flex {
    display: flex;
    flex-direction: column;
  }
  .box_height {
    width: 600px;
    height: 600px;
    overflow-x: auto;
  }
  .box_hidden {
    display: none;
  }
  .box_block {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
</style>
