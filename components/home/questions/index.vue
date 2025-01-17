<script setup>
const question = ref({
    name: null,
    telNumber: null,
    message: null

})
watch(question, (newValue) => {

   let telNumberString = String(newValue.telNumber)
    if (telNumberString.length >= 9) {
        question.value.telNumber = Number(telNumberString.slice(0, 9))

    }
}, { deep: true })


</script>
<template>
    <div class="h-[496px] bg-[#06203D] w-full flex justify-center py-12">
        <div class=" mainContainer flex ">

            <div class="w-[712px] h-full flex flex-col justify-between  mr-[137px]">

                <div class="flex items-center ">
                    <img src="/assets/imgs/home/program.png" alt="">
                    <h1 class=" ml-2 text-white">Остались вопросы?</h1>
                </div>


                <div>
                    <h1 class="questionsTitle">
                        Оставьте заявку и мы <br> ответим в течение <span class="text-[#F7483B] font-medium">
                            24 часов
                        </span>
                    </h1>
                    <p class="questonsData">
                        Отправьте заявку на бесплатную консультацию, специалист центра свяжется с вами, ответит на все
                        вопросы и поможет подобрать программу обучения на основе ваших предпочтений
                    </p>
                </div>

            </div>

            <div class="w-[591px] flex flex-col justify-between  ">

                <input type="text" class="questionInput" placeholder="Имя" v-model="question.name">


                <!-- tel input  -->
                <div class="flex items-center border border-gray-500 rounded-lg h-[64px] py-[10px]">
                    <span
                        class="text-gray-400 font-medium border-r border-r-[#354251] h-full flex items-center pl-6 pr-4 text-lg">+998</span>
                    <input type="number" class=" focus:outline-none bg-inherit h-full pl-2  w-full text-lg text-white"
                        v-model="question.telNumber" />
                </div>




                <div>
                    <textarea class="questionTextarea" placeholder="Сообщения" v-model="question.message"></textarea>

                </div>
                <div>
                    <button class="bg-[#F7483B] w-[164px]  h-[48px] flex justify-center items-center rounded-lg font-medium text-white">
                        Yuborish
                        <UIcon name="i-heroicons-arrow-long-right" class=" ml-6 w-6 h-6 text-white" />
                    </button>




                </div>


            </div>



        </div>

    </div>
</template>


<style scoped>
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
    color: #88929D;
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