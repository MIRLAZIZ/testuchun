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

// const data = [{
//     id: 1,
//     img: management,
//     name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
//     description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
// },
// {
//     id: 2,
//     img: img2,
//     name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
//     description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
// },
// {
//     id: 3,
//     img: img3,
//     name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
//     description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
// },
// {
//     id: 4,
//     img: img4,
//     name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
//     description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
// },
// {
//     id: 5,
//     img: img5,
//     name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
//     description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
// },
// {
//     id: 6,
//     img: img6,
//     name: "Abduqayumov Abdumannon Abdulboriy o'g'li",
//     description: "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament boshlig'i"
// }
// ]

const data = ref([])

onMounted(() => {
    const prentPageOne = `/${route.fullPath.split('/')[1]}`
    store.getMenuStatick(prentPageOne, route.fullPath)
    store.getLeaderShips()
    .then(res => {
        data.value = res.data
    })
})

</script>
<template>
    <div class="main_branch">
        {{ data }}

        <div
            class="flex 2xl:w-[1076px] gap-8 h-[632] bg-[#06203D]   p-8 rounded-xl border-[#E6EDFA]-1  xl:w-[850px]  lg:w-[650px] md:w-[750px] sm:w-[620px] main_box">
            <img src="/assets/imgs/kampus/menagement.png" alt="" class="h-[433px] w-[288px] rounded-xl img1">


            <div class="flex  flex-col justify-center pl-6">
                <h1 class="text-[32px] font-medium text-white">
                    Abduqayumov Abdumannon Abdulboriy o'g'li
                </h1>
                <p class="text-lg mt-2 text-[#88929D]">Yoshlar masalalari va ma'naviy-ma'rifiy ishlar departament
                    boshlig'i</p>

                <hr class="border border-[#19314C] my-6">
                <UButton class="bg-[#F7483B] w-[164px]  h-[48px] flex justify-center hover:bg-[#F7483B] text-base">
                    Batafsil
                    <UIcon name="i-heroicons-arrow-long-right" class=" ml-6 w-6 h-6" />
                </UButton>
            </div>
        </div>

        <LibraryStudents :data="data" />


    </div>
</template>
<style lang="css" scoped>
@media (max-width:1024px) {
    .box_wrapper {
        display: flex;
        flex-direction: column;
        height: auto;

    }

    .main_branch {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}

@media (max-width:640px) {
    .main_box {
        display: flex;
        flex-direction: column;
        width: 350px !important;
        height: auto !important;
    }

    .img1 {
        width: 100%;
    }

    .main_box_width {
        width: 300px;
    }
}
</style>
