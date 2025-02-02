<template>
<div class=" sm:flex sm:flex-col sm:items-center sm:justify-center  div_wrapper_flex">

        <div v-for="item  in props.data" :key="item.id" class=" w-full  box_wrapper">
            <div class="mt-8  div_wrapper_flex"  >
                <h1 class="text-[28px] box_text text-[#06203D] font-medium  mb-6">{{item.name}}</h1>
                <p class="box_title text-[20px] ">
                    {{item.description}}
                </p>
            </div>
        </div>
        <!-- <div v-for="item  in props.data" :key="item.id" class="w-full" >
            <div v-if="item.button"  class="w-full box_wrapper">
                <button
                    class="bg-[#F7483B] w-[194px]  h-[48px] flex justify-center  items-center font-medium rounded-lg text-white  mt-8">
                       Yuklab olish
                        <img src="/assets/imgs/kampus/Download.png" alt="" class="w-5 h-5 ml-4">
                </button>
            </div>
        </div> -->
    
          

         



        

</div>
            
   
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        require: true,
      default: () => ([])
    }
})
</script>

<style scoped>
@media (max-width:640px){
   .box_wrapper{
        /* width:350px; */
    }

.box_text{
    font-size:16px;
    font-weight: 500;
}
.box_title{
    font-weight: 400px;
    font-size:14px
}
  .div_wrapper_flex{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
    }
}
</style>