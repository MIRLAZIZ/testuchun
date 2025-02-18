<template>
  <div class="vacancy-container ">
    <h1 class="text-2xl font-medium mb-6">BO'SH ISH O'RINLARI</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-6 sm:gap-2 gap-4  ">
      <div
        v-for="vacancy in vacansiec1"
        :key="vacancy"
        class="vacancy-card 2xl:w-[518px] lg:w-[500px] md:w-[350px] w-full"
      >
      <!-- {{vacancy}} -->
        <h2 class="font-medium text-xl mb-2" v-html="vacancy.title">
        </h2> 
        <hr>
        <div class="flex items-center font-normal text-base  text-gray-500 mb-2 pt-3">
          <div class="flex items-center gap-2">
            <img src="/assets/imgs/vacansiec/Calender.png" alt="">
            <span>{{ vacancy.week }}</span>
          </div>
          <div class="ml-auto flex items-center gap-2">
            <img src="/assets/imgs/vacansiec/Time.png" alt="">
            <span>{{ vacancy.date }}</span>
          </div>
        </div>
        <div class="salary-section border p-3 rounded-lg font-medium text-base" @click="$router.push(`vacancies/${vacancy.id}`)">
          <p>{{ vacancy.price }} gacha </p>
          <img src="/assets/imgs/vacansiec/Vector.png" alt="">
        </div>
      </div>

      
    </div>


      <!-- <div class="flex justify-center mt-6">
        <button class="btn-load-more">Ko'proq ko'rish +</button>
      </div> -->
  </div>
</template>

<script setup>
import {useContactStore} from '~/store/contact'

const store = useContactStore()
const vacansiec1 = ref(null)

onMounted(() => {
    store.getVacansiec()
        .then(() => {
            vacansiec1.value = store.vacansiec
            // console.log('vacansiec', vacansiec1.value)
        })
})


</script>


<style>
.vacancy-container {
  max-width: 1052px;
  margin: 0 auto;
  padding: 16px;
}
@media (max-width:600px){
  .vacancy-container h1{
    font-size: 16px;
    font-weight: 500;
  }
   .vacancy-container h2{
    font-size: 14px;
    font-weight: 500;
  }
  .vacancy-container p{
    font-size: 14px;
    font-weight: 500;
  }
   .vacancy-container span{
    font-size: 12px;
    font-weight: 400;
  }
}

.vacancy-card {
  border: 1px solid #e6edfa;
  padding: 16px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width:518px; */
}
.salary-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #868587;
  margin-top: 12px;
  display:flex;
  align-items: center;
  cursor: pointer;
}
.salary-section :hover{
  color:red
}
.salary-section p {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
.btn-load-more {
  padding: 12px 24px;
  background-color: #f0f4ff;
  border: 1px solid #d1e3ff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #3b82f6;
  cursor: pointer;
}
.btn-load-more:hover {
  background-color: #e2ebff;
}
</style>
