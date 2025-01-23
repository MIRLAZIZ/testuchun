<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
const facts = ref(null)

onMounted(() => {
    store.getFacts().then(res => {
        facts.value = res.data

    })
})


</script>
<template>
    <div class="flex justify-center " v-if="facts">

        <div class="mt-[104px] mainContainer">
            <h1 class="facts">{{ store.dataTranslate['home.facts_number'] }} </h1>

            <div class="mt-6 grid grid-cols-3 gap-4">

                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber text-[#F7483B]">+</span>
                        <span class="factsNumber ">{{ facts.data.educational_programs ? facts.data.educational_programs
                            : 0 }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.educational_programs'] }}</p>
                </div>




                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber ">{{ facts.data.audience_size ? facts.data.audience_size : 0 }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.number_auditories'] }}</p>
                </div>




                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber text-[#F7483B]">+</span>
                        <span class="factsNumber ">{{ facts.data.green_zone ? facts.data.green_zone : 0 }}m<sup
                                class="text-[32px]">2</sup></span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left"></p>{{ store.dataTranslate['home.green_zone'] }}
                </div>



                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber text-[#F7483B]">+</span>
                        <span class="factsNumber ">{{ facts.data.library_collection ? facts.data.library_collection : 0
                            }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.library_fund'] }} </p>
                </div>



                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber ">{{ facts.data.number_of_students ? facts.data.number_of_students : 0
                            }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.number_students'] }} </p>
                </div>




                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl ">

                    <div class="flex h-full w-full">


                        <div class="flex flex-col justify-between h-full w-full pr-3">
                            <div class="flex items-center">
                                <img src="/assets//imgs/home/Frame (1).png" class="w-[32px] h-[32px]" alt="">
                                <span class="factsNumber ">{{ facts.data.male_students ? facts.data.male_students : 0
                                    }}</span>
                            </div>
                            <hr class="bg-[#E9EEF9]">

                            <p class="text-[#06203D] ml-1">{{ store.dataTranslate['home.male_students'] }} </p>
                        </div>




                        <div class="flex flex-col justify-between h-full  w-full pl-3">
                            <div class="flex items-center">
                                <img src="/assets//imgs/home/Frame.png" alt="" class="w-[32px] h-[32px]">
                                <span class="factsNumber ml-1 ">{{ facts.data.female_students ?
                                    facts.data.female_students : 0 }}</span>
                            </div>
                            <hr class="bg-[#E9EEF9]">


                            <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.female_students'] }} </p>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style scoped>
.facts {
    font-family: 'Halvar Breitschrift';
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;
}

.factsNumber {
    font-size: 56px;
    font-weight: 400;
    line-height: 67.2px;
    text-align: left;


}
</style>