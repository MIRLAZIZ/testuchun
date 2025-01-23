<template>
    <div class="main_branch">
        <div class="grid xl:grid-cols-2 gap-4 mt-10 lg:grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-around 2xl:w-[1052px] xl:w-[900px] md:w-[650px] sm:w-[600px] main_box">   
            <div class=" w-[530px] h-[240px]  rounded-xl p-5 flex border box_wrapper xl:w-[430px] xl:h-[300px] xl:justify-center xl:items-center sm:items-center sm:w-[100%] justify-between main_box_wrapper" v-for="item in props.data" :key="item.id" >
                <!-- <div class=" border h-[200px] w-[157px]"> -->
                <img :src="item.img" alt="" class="imgs h-[200px] w-[157px] object-cover ">
                <!-- </div> -->

                <div class="flex box_wrapper_pad flex-col justify-center pl-6">
                    <h1 class="text-xl font-medium text-black">
                        {{ item.name.length > 40 ? item.name.substring(0, 40) + '...' : item.name.substring(0,
                            40) }}
                    </h1>
                    <p class=" mt-2 text-[#88929D]">
                        {{ item.description.length > 70 ? item.description.substring(0, 70) + '...' : item.description.substring(0, 70) }}
                    </p>
                    <hr class="border border-[#DCE5F5] my-6">
                    <UButton class="  bg-[#F7483B] w-[164px]  h-[48px] flex justify-center hover:bg-[#F7483B] text-base">
                        Batafsil
                        <UIcon name="i-heroicons-arrow-long-right" class=" ml-6 w-6 h-6" />
                    </UButton>
                </div>

            </div>
        </div>

        

    </div>
</template>

<script setup>
import management from '/assets/imgs/kampus/menagement.png'
import img2 from '/assets/imgs/kampus/image2.png'
import img3 from '/assets/imgs/kampus/image3.png'
import img4 from '/assets/imgs/kampus/image4.png'
import img5 from '/assets/imgs/kampus/image5.png'
import img6 from '/assets/imgs/kampus/image6.png'

const props = defineProps({
    data: {
        type:Array,
        requered:true,
      default: ()=>[]

    }
}) 

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
    }
    ]
</script>

<style lang="scss" scoped>
@media (max-width:440px){
    .main_box{
        gap:5px !important;
    }
    .main_box_wrapper{
        padding:5px !important;
    }
}
@media (max-width:640px){
    .box_wrapper_pad{
        padding:2px
    }
    .img{
        width:100%;
    }
    .main_box{
    width:300px;
    gap:2em;
    display: grid;
    grid-template-columns: 1fr 1fr;

    justify-content:center;
    
    }
    .main_box_wrapper{
        width:180px;
        padding:10px
    }
}
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
    }
}
</style>