<script setup>
import { useHomeStore } from '~/store/home';
import {useContactStore} from '~/store/contact'
const stored = useContactStore();
import { toast } from 'vue3-toastify'

const store = useHomeStore()
const question = ref({
    name: null,
    telNumber: null,
    message: null

})
function send(){
    if (!question.value.name || !question.value.telNumber || !question.value.message) {
          toast.info('Iltimos, barcha maydonlarni to‘ldiring')

        return;
    }
    else{
          toast.success('Xabar muvaffaqqiyatli yuborildi')
            stored.postContact(question.value.name,question.value.telNumber,question.value.message)
            question.name.value = null,
            question.telNumber.value = null,
            question.message.value = null
             console.log(question.value.name,question.value.telNumber,question.value.message)
    }
}

watch(question, (newValue) => {

   let telNumberString = String(newValue.telNumber)
    if (telNumberString.length >= 9) {
        question.value.telNumber = Number(telNumberString.slice(0, 9))

    }
}, { deep: true })


</script>
<template>
    <div class="lg:h-[496px] bg-[#06203D] w-full flex justify-center height_full py-12">
        <div class=" mainContainer flex box_wrapper_top">

            <div class="w-full h-full flex flex-col justify-between  mr-[37px] ">

                <div class="flex items-center ">
                    <img src="/assets/imgs/home/program.png" alt="">
                    <h1 class=" ml-2 text-white">{{ store.dataTranslate['home.questions'] }}</h1>
                </div>

                <div>
                    <h1 class="questionsTitle" v-html="store.dataTranslate['home.submit_questions']">
                    </h1>
                    <p class="questonsData">
                        {{ store.dataTranslate['home.questions_description'] }}
                    </p>
                </div>

            </div>

            <div class="sm:w-[591px] w-full flex flex-col justify-between box_ul ">
                <input required type="text" class="questionInput" :placeholder="store.dataTranslate['home.name']" v-model="question.name">
                <div class="flex items-center border border-gray-500 rounded-lg h-[64px] py-[10px]">
                    <span
                        class="text-white font-medium border-r border-r-[#354251] h-full flex items-center pl-6 pr-4 text-lg">+998</span>
                    <input required type="number" class=" focus:outline-none bg-inherit h-full pl-2  w-full text-lg text-white"
                        v-model="question.telNumber" />
                </div>
                <div>
                    <textarea required class="questionTextarea" :placeholder="store.dataTranslate['home.message']" v-model="question.message"></textarea>

                </div>
                <div>
                    <button @click="send()" class="bg-[#F7483B] w-[164px]  h-[48px] flex justify-center items-center rounded-lg font-medium text-white">
                        {{ store.dataTranslate['home.send'] }}
                        <UIcon name="i-heroicons-arrow-long-right" class=" ml-6 w-6 h-6 text-white" />
                    </button>
                </div>
            </div>



        </div>

    </div>
</template>


<style scoped>
@media (max-width:640px){
       .box_ul{
        /* width:350px; */
        
    }
    .questionTextarea{
        /* width:350px !important; */
        width:100% !important;
    }
    .questionsTitle{
        font-weight: 500 !important;
        font-size: 20px !important;
    }
    .questonsData{
        font-weight: 400 !important;
        font-size: 14px !important;
    }
}
@media (max-width:1024px){
    .box_wrapper_top{
        display:flex;
        flex-direction:column;
        gap:2em;

    }
    .height_full{
        height: 100%;
    }
    .box_ul{
        display:flex;
        gap:2em;
        
    }
}
.questionsTitle {
    font-family: 'Halvar Breitschrift';
    font-size: 28px;
    font-weight: 500;
    line-height: 36.4px;
    color: white;

}

.questonsData {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #88929D;
    margin-top: 24px;
}


.questionInput {
    width: 100%;
    height: 64px;
    padding: 18px 24px 18px 24px;
    border-radius: 12px;
    border: 1px solid #88929D;
    background: inherit;
    color: white;
    outline: none;
}

.questionInput::placeholder,
.questionTextarea::placeholder {
    color: #2E4259;
    font-size: 18px;
}

.questionTextarea {
    width: 591px;
    height: 172px;
    padding: 18px 24px 18px 24px;
    border-radius: 12px;
    border: 1px solid #88929D;
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