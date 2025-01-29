<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  items: {
    type: Array,
    require: true,
    default: () => [],
  },
  data_id: {
    type: Number,
    require: true,
  },
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
  const printContent = document.querySelector(".custom-modal").innerHTML; // Modalni tanlash
  const printWindow = window.open("", "_blank", "width=800,height=600");

  printWindow.document.open();
  printWindow.document.write(`
    <html>
    <head>
      <title>Chop etish</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        img { max-width: 100%; height: auto; }
      </style>
    </head>
    <body>
      ${printContent}
    </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
  printWindow.close();
};
</script>

<template>
  <div>
    <UModal class="box_hidden" v-model="props.isOpen" prevent-close>
      <UCard>
        <div
          class="flex justify-between lg:gap-3 box_flex 2xl:w-[1036px] lg:w-[1000px] h-[539px] md:w-[750px] custom-modal box_height bg-white p-10"
        >
          <div class="md:w-[324px] box_block h-full">
            <img
              class="w-full h-full rounded-r-lg"
              :src="props.items[itemIndex]?.photo[store.currentImage]"
              alt="certifacate img"
            />
          </div>

          <div
            class="lg:w-[592px] sm:w-[400px] flex flex-col justify-between h-full"
          >
            <div>
              <div class="flex justify-between w-full">
                <img src="/assets/imgs/kampus/image 154.png" alt="" />

                <div
                  class="flex items-center justify-center w-12 h-12 border rounded-full cursor-pointer box_hidden"
                  @click="emit('update:isOpen', false)"
                >
                  <UIcon
                    name="i-heroicons-x-mark"
                    class="w-7 h-7 text-[#2D264B]"
                  />
                </div>
              </div>

              <h1 class="text-2xl font-medium mt-6">
                {{ props.items[itemIndex]?.title }}
              </h1>
              <p
                class="text-[#868587] mt-4"
                v-html="props.items[itemIndex]?.desc"
              ></p>

              <hr class="border-[#ECF1FB] my-6" />

              <p>
                <span class="text-[#9A999B]">Berilgan sana: </span
                >{{ props.items[itemIndex]?.date?.substring(0, 10) }}
              </p>
            </div>

            <div class="flex justify-between printVisable">
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
                  class="bg-[#F7483B] w-[194px] h-[48px] flex justify-center items-center font-medium rounded-lg text-white"
                  @click="printPage"
                >
                  Yuklab olish
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

@media print {
  body * {
    visibility: hidden; /* Hamma narsani yashirish */
  }
  .custom-modal,
  .custom-modal * {
    visibility: visible; /* Faqat modal va uning ichidagi elementlarni ko'rsatish */
    display: block; /* Modal va uning ichidagi barcha elementlar blok sifatida ko'rinishga kelsin */
  }

  /* Print uchun visibility: hidden ishlatish */
  .custom-modal .printVisable {
    display: none !important; /* Yashirish */
  }

  .custom-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: white; /* Modalni oq fon bilan chop qilish */
  }

  /* Modalning o'lchamini va joylashuvini saqlash */
  .custom-modal .box_height {
    width: 100% !important; /* O'lchamni 100% qilib saqlash */
    height: auto !important;
    overflow: hidden;
  }
}
</style>
