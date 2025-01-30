<script setup>
import management from '/assets/imgs/kampus/menagement.png'
import img2 from '/assets/imgs/kampus/image2.png'
import img3 from '/assets/imgs/kampus/image3.png'
import img4 from '/assets/imgs/kampus/image4.png'
import img5 from '/assets/imgs/kampus/image5.png'
import img6 from '/assets/imgs/kampus/image6.png'
import { useHomeStore } from '~/store/home'

const route = useRoute()
const store = useHomeStore()

const items = [{
    id: 1,
    img: management,
    name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
    description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
},
{
    id: 2,
    img: img2,
    name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
    description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
},
{
    id: 3,
    img: img3,
    name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
    description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
},
{
    id: 4,
    img: img4,
    name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
    description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
},
{
    id: 5,
    img: img5,
    name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
    description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
},
{
    id: 6,
    img: img6,
    name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
    description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
}]

</script>
<template>
    <div>

        <div class="grid grid-cols-2 gap-4 ">
            <!-- {{ store.menuShow }} gghfhgg -->

            <div class=" w-[530px] h-[240px]  rounded-xl p-5 flex bg-white" v-for="item in items" :key="item.id">
                <!-- <div class=" border h-[200px] w-[157px]"> -->
                <img :src="item.img" alt="" class="h-[200px] w-[157px] object-cover ">
                <!-- </div> -->

                <div class="flex  flex-col justify-center pl-6">
                    <h1 class="text-xl font-medium ">
                        {{ item.name.length > 40 ? item.name.substring(0, 40) + '...' : item.name.substring(0,
                            40) }}
                    </h1>
                    <p class=" mt-2 text-[#88929D]">
                        {{ item.description.length > 70 ? item.description.substring(0, 70) + '...' :
                            item.description.substring(0, 70) }}
                    </p>
                    <hr class="border border-[#DCE5F5] my-6">
                    <UButton class="bg-[#F7483B] w-[164px]  h-[48px] flex justify-center hover:bg-[#F7483B] text-base">
                        Batafsil
                        <UIcon name="i-heroicons-arrow-long-right" class=" ml-6 w-6 h-6" />
                    </UButton>
                </div>

            </div>
        </div>

    </div>
</template>


<style scoped></style>