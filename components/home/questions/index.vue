<script setup>
import { useHomeStore } from "~/store/home";
import { useContactStore } from "~/store/contact";
const stored = useContactStore();
import { toast } from "vue3-toastify";
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});
const store = useHomeStore();
const question = ref({
  name: null,
  telNumber: null,
  message: null,
});
function send() {
  if (
    !question.value.name ||
    !question.value.telNumber ||
    !question.value.message
  ) {
    toast.info("Iltimos, barcha maydonlarni to‘ldiring");

    return;
  } else {
    stored
      .postContact(
        question.value.name,
        question.value.telNumber,
        question.value.message
      )
      .then((res) => {

        toast.success("Xabar muvaffaqqiyatli yuborildi");
        (question.value.name = null),
          (question.value.telNumber = null),
          (question.value.message = null);
      }).catch((err) => {
        toast.error("Xatolik yuz berdi");
      });
  }
}

watch(
  question,
  (newValue) => {
    let telNumberString = String(newValue.telNumber);
    if (telNumberString.length >= 9) {
      question.value.telNumber = Number(telNumberString.slice(0, 9));
    }
  },
  { deep: true }
);
</script>
<template>
  <div class="bg-[#06203D] w-full flex justify-center" v-if="isClient">
    <div
      class="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-0 mainContainer"
    >
      <!-- description  -->
      <div
        v-if="isClient"
        data-aos="fade-up"
        class="w-full h-full flex flex-col justify-between"
      >
        <div class="flex items-center mb-4">
          <img src="/assets/imgs/home/program.png" alt="" />
          <h1 class="ml-2 text-white">
            {{ store.dataTranslate["home.questions"] }}
          </h1>
        </div>

        <div class="pr-0 md:pr-12 xl:pr-[100px]">
          <h1
            class="questionsTitle"
            v-html="store.dataTranslate['home.submit_questions']"
          ></h1>
          <p class="questonsData">
            {{ store.dataTranslate["home.questions_description"] }}
          </p>
        </div>
      </div>

      <!-- input  -->
      <div
        v-if="isClient"
        data-aos="fade-down"
        class="w-full flex flex-col justify-between"
      >
        <input
          required
          type="text"
          class="questionInput placeholder-[#354251]"
          :placeholder="store.dataTranslate['home.name']"
          v-model="question.name"
        />

        <div
          class="flex items-center border border-[#354251] rounded-lg h-[64px] py-[10px] my-4"
        >
          <span
            class="text-[#FFFFFF] font-medium border-r border-r-[#354251] h-full flex items-center pl-6 pr-4 text-lg"
            >+998</span
          >
          <input
            required
            type="number"
            class="focus:outline-none bg-inherit h-full pl-2 w-full text-lg text-white"
            v-model="question.telNumber"
          />
        </div>
        <div class="">
          <textarea
            required
            class="questionTextarea"
            :placeholder="store.dataTranslate['home.message']"
            v-model="question.message"
          ></textarea>
        </div>
        <div>
          <button
            @click="send()"
            class="bg-[#F7483B] w-[164px] h-[48px] mt-4 flex justify-center items-center rounded-lg font-medium text-white"
          >
            {{ store.dataTranslate["home.send"] }}
            <UIcon
              name="i-heroicons-arrow-long-right"
              class="ml-6 w-6 h-6 text-white"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.questionsTitle {
  font-family: "Halvar Breitschrift";
  font-size: 28px;
  font-weight: 500;
  line-height: 36.4px;
  color: white;
}

.questonsData {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #88929d;
  margin-top: 24px;
}

.questionInput {
  width: 100%;
  height: 64px;
  padding: 18px 24px 18px 24px;
  border-radius: 12px;
  border: 1px solid #354251;
  background: inherit;
  color: white;
  outline: none;
}

.questionInput::placeholder,
.questionTextarea::placeholder {
  color: #2e4259;
  font-size: 18px;
}

.questionTextarea {
  width: 100%;
  height: 172px;
  padding: 18px 24px 18px 24px;
  border-radius: 12px;
  border: 1px solid #354251;
  background: inherit;
  resize: none;
  outline: none;
  color: #fff;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>