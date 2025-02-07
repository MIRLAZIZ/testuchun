<template>
    <div>
      <div  @click.self="closeModal"  v-if="isOpen"  class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div class="w-[591px] flex flex-col justify-between box_ul gap-3 bg-[#06203D] p-6 rounded-lg">
                <input required type="text" class="questionInput" :placeholder="store.dataTranslate['home.name']" v-model="question.name">
                <div class="flex items-center border border-gray-500 rounded-lg h-[64px] py-[10px]">
                    <span class="text-white font-medium border-r border-r-[#354251] h-full flex items-center pl-6 pr-4 text-lg">+998</span>
                    <input required type="number" class="focus:outline-none bg-inherit h-full pl-2 w-full text-lg text-white" v-model="question.telNumber" />
                </div>

                <div>
                    <textarea required class="questionTextarea" :placeholder="store.dataTranslate['home.message']" v-model="question.message"></textarea>
                </div>

                <div>
                    <button @click="send" class="bg-[#F7483B] w-[164px] h-[48px] flex justify-center items-center rounded-lg font-medium text-white">
                        {{ store.dataTranslate['home.send'] }}
                        <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useHomeStore } from '~/store/home'
import {useContactStore} from '~/store/contact'
import { toast } from 'vue3-toastify'

import { defineEmits } from 'vue';
const store = useHomeStore()   

defineProps(['isOpen']); // Modalni boshqarish uchun prop
const emit = defineEmits(['close']); // Modalni yopish uchun emit
const closeModal = () => {
  question.value.name = ''
  question.value.telNumber = ''
  question.value.message = ''
  emit('close') // Modalni yopish
}
const stored = useContactStore(); 

const question = ref({
    name: '',
    telNumber: '',
    message: ''

})
function send(){
    if (!question.value.name || !question.value.telNumber || !question.value.message) {
          toast.info('Iltimos, barcha maydonlarni to‘ldiring')
        return;
    }
    else{
          toast.success('Xabar muvaffaqqiyatli yuborildi')
            stored.postContact(question.value.name,question.value.telNumber,question.value.message)
             question.value.name = '',
            question.value.telNumber = '',
            question.value.message = ''
            closeModal()   
    }
}

</script>

<style  scoped>
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
    color: #2E4259;;
    font-size: 18px;
}

.questionTextarea {
    width: 100%;
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









@media (max-width:700px){
     /* .questionTextarea{
        width:350px !important;
    } */
}

@media (max-width:600px) {
          .box_ul{
        width:350px;
        
    }
     .wrapper_title {
     
        font-weight: 400px !important;
        font-size: 14px !important;
    }
  
    .selectProgram {
        font-size: 20px !important;
        color: #808D9D;
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

@media (max-width:1024px) {
    .wrapper_flex {
        display: flex;
        flex-direction: column;

    }
  .box_ul{
        display:flex;
        gap:2em;
        
    }
    .programItems {
        width: 100% !important;
        height: 60px !important;
        display: flex;
        gap: 12px;
        overflow: auto;
        margin-bottom: 2em;
    }
    .programItem{
        padding:10px 12px !important;
        border: 1px solid #E6EDFA;
        border-radius: 8px;
        text-align: center;
        width:100%
    }

 
    .wrapper_title {
        width: 290px;
     
    }

    .programmaData {
        width: 100% !important;
        height: 100% !important;
        display: flex;
        flex-direction: column;
        gap:16px
    }
}

 .wrapper_title {
    
        font-weight: 400;
        font-size: 18px;
    }

.activeClass {
    color: #06203D !important;
    /* font-size: 28px !important; */
}

.selectProgram {
    font-size: 28px;
    color: #808D9D;
    font-weight: 500;
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
    color: #06203D;
}

.programDescription {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #06203D;

}
</style>