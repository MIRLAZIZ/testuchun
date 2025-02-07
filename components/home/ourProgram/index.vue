<script setup>
import economy from '/assets/imgs/home/econom.png'
import { useHomeStore } from '~/store/home'
import {useContactStore} from '~/store/contact'
const stored = useContactStore();
import { toast } from 'vue3-toastify'
const modalVisible = ref(false) 

const question = ref({
    name: null,
    telNumber: null,
    message: null

})
function send(){
    modalVisible.value = false
    if (!question.value.name || !question.value.telNumber || !question.value.message) {
          toast.info('Iltimos, barcha maydonlarni to‘ldiring')
        return;
    }
    else{
          toast.success('Xabar muvaffaqqiyatli yuborildi')
            stored.postContact(question.value.name,question.value.telNumber,question.value.message)
            //  console.log(question.value.name,question.value.telNumber,question.value.message)
             question.name.value = null,
            question.telNumber.value = null,
            question.message.value = null
    }
}

watch(question, (newValue) => {

   let telNumberString = String(newValue.telNumber)
    if (telNumberString.length >= 9) {
        question.value.telNumber = Number(telNumberString.slice(0, 9))

    }
}, { deep: true })



const store = useHomeStore()


    const selectedProgram = ref(0)
    const seletTypeEducution = (index) => {
        selectedProgram.value = index
        programitem.value = store.educationData[index].children[0]
        progamItemId.value = store.educationData[index].children[0].id
    }


    onMounted(() => {
        if (!store.educationData) {
            store.getEducation()
                .then(() => {

                    programitem.value = store.educationData[0].children[0]
                    progamItemId.value = store.educationData[0].children[0].id
                })
        }
        else {
            programitem.value = store.educationData[0].children[0]
            progamItemId.value = store.educationData[0].children[0].id
        }
    })

    const programitem = ref(null)
    const progamItemId = ref(null)
    const upparCase = (text) => {
        return text.toLocaleUpperCase()
    }

    const selectItem = (data) => {
        progamItemId.value = data.id
        programitem.value = data

    }

</script>
<template>
    <div class="flex justify-center" v-if="store.educationData">
        <div class="h-full mainContainer  my-[104px]  ">
            <div class="flex items-center ">
                <img src="/assets/imgs/home/program.png" alt="">
                <h1 class="font-normal text-[#2E4259] sm:text-base text-sm ml-2">{{ store.dataTranslate['home.ourPrograms'] }}</h1>
            </div>
            <div class="mt-10">
                <button class="selectProgram" :class="{ 'activeClass': selectedProgram === 0 }"
                    @click="seletTypeEducution(0)">
                    {{ store.educationData[0].name }}
                </button>

                <button class="ml-8 selectProgram" :class="{ 'activeClass': selectedProgram === 1 }"
                    @click="seletTypeEducution(1)">
                    {{ store.educationData[1].name }}
                </button>
            </div>



            <div class="flex wrapper_flex">
                <!-- program items  -->

                <div class="programItems">
                    <div class="programItem flex items-center  cursor-pointer"
                        :class="{ 'bg-white rounded-l-xl': item.id === progamItemId }"
                        v-for="item in store.educationData[selectedProgram].children" :key="item.id"
                        @click="selectItem(item)">
                        <img :src="item.img" alt="">
                        <p class="ml-4 wrapper_title">{{ item.name }}</p>


                    </div>
                </div>
                <!-- programma data  -->
                <div class="programmaData  bg-white flex flex-col justify-between" v-if="programitem"
                    :class="{ 'rounded-tl-xl': progamItemId !== store.educationData[selectedProgram].children[0].id }">
                    <h2 class="programmaTitle">{{ programitem.name }}</h2>
                    <hr>

                    <div class="grid grid-cols-2 sm:gap-y-10 gap-5 flex_grid">

                        <!-- davomiyligi  -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/school.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.duration'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument sm:mt-3 mt-1">
                                    {{ programitem.daytime }}
                                </p>
                            </div>
                        </div>



                        <!-- qabul qilishi -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/calendar-notes.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.acceptance'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument sm:mt-3 mt-1">
                                    {{ programitem?.date }}
                                </p>
                            </div>
                        </div>



                        <!-- manzil -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/location.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.address'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument sm:mt-3 mt-1">
                                    {{ programitem.map }}

                                </p>
                            </div>
                        </div>


                        <!-- Til  -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/globe.png" alt="">
                                <span class="text-[#5D5D5F] ml-2  font-normal sm:text-base text-sm">{{ store.dataTranslate['home.language'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument sm:mt-3 mt-1">
                                    {{ programitem.lang }}

                                </p>
                            </div>
                        </div>


                    </div>
                    <hr>


                    <div>
                        <p class="programDescription text-[#06203D]" v-html="programitem?.second_description?.substring(0, 400)">
                        </p>
                    </div>
                    <div>
                        <div class="flex mt-4">
                            <button
                                class="bg-[#F7483B] w-[156px] h-[48px] flex justify-center items-center text-white font-medium rounded-lg">
                                {{ store.dataTranslate['home.more_details'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-5 h-5 text-white " />
                            </button>
                            <button   @click="modalVisible = true"
                                class="bg-white w-[216px] h-[48px] border border-[#DCE5F5]  text-[#06203D] flex justify-center items-center font-medium rounded-lg ml-6 ">
                                {{ store.dataTranslate['home.submit_application'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 mr-1 w-5 h-5 text-[#06203D]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div  @click.self="modalVisible = false" v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div class="w-[591px] flex flex-col justify-between box_ul gap-3 bg-[#06203D] p-6 rounded-lg">
                <input required type="text" class="questionInput" :placeholder="store.dataTranslate['home.name']" v-model="question.name">
                <div class="flex items-center border border-gray-500 rounded-lg h-[64px] py-[10px]">
                    <span class="text-gray-400 font-medium border-r border-r-[#354251] h-full flex items-center pl-6 pr-4 text-lg">+998</span>
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


<style scoped>
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
    color: #88929D;
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
        gap: 2em;
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
    height: 730px;


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