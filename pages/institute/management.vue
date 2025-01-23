<script setup>
import management from '/assets/imgs/kampus/menagement.png'
import img2 from '/assets/imgs/kampus/image2.png'
import img3 from '/assets/imgs/kampus/image3.png'
import img4 from '/assets/imgs/kampus/image4.png'
import img5 from '/assets/imgs/kampus/image5.png'
import img6 from '/assets/imgs/kampus/image6.png'
// const data =[
//     { id: 1,img:management, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
//     { id: 2,img:img2, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
//     { id: 3,img:img3, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
//     { id: 4,img:img4, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
//     { id: 5,img:img5, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
//     { id: 6,img:img6, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' }

// ]

const data = [{
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
}
]

</script>
<template>
    <div class="main_branch">
        <!-- <div class=" 2xl:w-[1076px] h-[481px] bg-[#06203D] rounded-xl p-6 flex xl:w-[800px]"> -->
            <div class="flex 2xl:w-[1076px] gap-8 h-[632] bg-[#06203D]   p-8 rounded-xl border-[#E6EDFA]-1  xl:w-[850px]  lg:w-[650px] md:w-[750px] sm:w-[620px] main_box">
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








<!-- 
        <div class="grid grid-cols-2 gap-4 mt-10">
            
            <div class=" w-[530px] h-[240px]  rounded-xl p-5 flex border" v-for="item in items" :key="item.id" >
               
                <img :src="item.img" alt="" class="h-[200px] w-[157px] object-cover ">
             

                <div class="flex  flex-col justify-center pl-6">
                    <h1 class="text-xl font-medium ">
                        {{ item.name.length > 40 ? item.name.substring(0, 40) + '...' : item.name.substring(0,
                            40) }}
                    </h1>
                    <p class=" mt-2 text-[#88929D]">
                        {{ item.description.length > 70 ? item.description.substring(0, 70) + '...' : item.description.substring(0, 70) }}
                    </p>
                    <hr class="border border-[#DCE5F5] my-6">
                    <UButton class="bg-[#F7483B] w-[164px]  h-[48px] flex justify-center hover:bg-[#F7483B] text-base">
                        Batafsil
                        <UIcon name="i-heroicons-arrow-long-right" class=" ml-6 w-6 h-6" />
                    </UButton>
                </div>

            </div>
        </div> -->
        <LibraryStudents  :data="data" />


    </div>
</template>
<style lang="css" scoped>
    @media (max-width:1024px){
    .box_wrapper{
        display: flex;
        flex-direction: column;
        height: auto;

    }
     .main_branch{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}
@media (max-width:640px){
    .main_box{
        display:flex;
        flex-direction: column;
        width:350px !important;
        height: auto !important;
    }
    .img1{
        width:100%;
    }
    .main_box_width{
        width:300px;
    }
}
</style>
