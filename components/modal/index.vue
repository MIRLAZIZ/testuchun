<template>
  <div>
    <div
      @click.self="closeModal"
      v-if="isOpen"
      class="fixed  inset-0 bg-black bg-opacity-50 flex  justify-center items-center z-50"
    >
      <div class="mainContainer relative max-h-[90vh] overflow-y-auto rounded-xl">
        <div class="cursor-pointer absolute 2xl:right-9  top-9 right-20" @click="closeModal">
          <img src="/assets/imgs/talim/exit.png" alt="" class="w-10 md:w-7 h-10 md:h-7" />
        </div>
        <HomeQuestions class="rounded-xl pt-[82px] pb-12 px-6" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close"]);

const question = ref({
  name: "",
  telNumber: "",
  message: "",
});

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    console.log('if');
    
    document.body.style.overflow = 'hidden'
  } else {
    console.log('else');
    document.body.style.overflow = 'auto'
  }
})

const closeModal = () => {
  question.value.name = "";
  question.value.telNumber = "";
  question.value.message = "";
  emit("close");
};

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>