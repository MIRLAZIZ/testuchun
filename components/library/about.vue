<template>
<div class="main_branch">
    <div class="flex 2xl:w-[1076px] gap-8 h-[632] bg-white  p-8 rounded-xl border-[#E6EDFA]-1  xl:w-[850px]  lg:w-[650px] md:w-[750px] sm:w-[620px] main_box" v-for="item in props.data" :key="item.id">
        <div>
            <img class="w-[199px] h-[254px] img1"  :src="item.img" alt="">
        </div>
        <div class="w-[741px] img1" >
            <p class="mb-2 font-medium text-xl text-black main_box_width ">{{item.name}}</p>
            <p class="font-normal text-xl text-black main_box_width " >{{item.description}} </p>
            <div class="flex gap-4 mt-10  items-center">
                <div class="flex gap-4">
                    <p class="font-medium text-base" >0</p>
                    <div>
                        <img src="../../assets/imgs/talim/Eye.png" alt="">
                    </div>
                </div>
                <div class="flex rounded-lg gap-4" style="border:1px solid #DCE5F5;padding:13px 32px">
                    <p class="font-medium text-base">link</p>
                    <div>
                         <img src="../../assets/imgs/talim/copy.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    data: {
        type:Array,
        requered:true,
      default: ()=>[]

    }
}) 

console.log('props', props.data)
</script>

<style lang="scss" scoped>
@media (max-width:1024px){
    .main_branch{
        display: flex;
        align-items: center;
        justify-content: center;
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