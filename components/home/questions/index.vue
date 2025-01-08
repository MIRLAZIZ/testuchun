<script setup>

</script>
<template>
    <div>
        <div class="h-[496px] bg-[#06203D] w-full px-[240px] py-12 flex ">

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

            <div class="w-[591px] border ">
                <input type="text" class="questionInput" placeholder="Имя">
                <!-- <input type="text" class="questionInput" placeholder="Имя"> -->
                <UInput placeholder="Search..."  class="questionInput"
                   color="none">
                    <template #leading>
                        salom
                    </template>
                </UInput>


            </div>



        </div>

    </div>
</template>


<style scoped>
.questionsTitle {
    /* font-family: Halvar Breitschrift; */
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
}

.questionInput::placeholder {
    color: #88929D;
    font-size: 18px;
}
</style>