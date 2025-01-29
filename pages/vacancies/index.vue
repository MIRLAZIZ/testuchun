<template>
  <div class="vacancy-container ">
    <h1 class="text-2xl font-medium mb-6">BO'SH ISH O'RINLARI</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-6 sm:gap-2 gap-4  ">
      <div
        v-for="vacancy in vacancies"
        :key="vacancy.id"
        class="vacancy-card"
      >
        <h2 class="font-medium text-xl mb-2">{{ vacancy.title }}</h2>
        <hr>
        <div class="flex items-center font-normal text-base  text-gray-500 mb-2 pt-3">
          <div class="flex items-center gap-2">
            <img src="/assets/imgs/vacansiec/Calender.png" alt="">
            <span>{{ vacancy.schedule }}</span>
          </div>
          <div class="ml-auto flex items-center gap-2">
            <img src="/assets/imgs/vacansiec/Time.png" alt="">
            <span>{{ vacancy.date }}</span>
          </div>
        </div>
        <div class="salary-section border p-3 rounded-lg font-medium text-base">
          <p>{{ vacancy.salary }}</p>
          <img src="/assets/imgs/vacansiec/Vector.png" alt="">
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-6">
      <button class="btn-load-more">Ko'proq ko'rish +</button>
    </div>
  </div>
</template>

<script setup>
const vacancies = [
  {
    id: 1,
    title: 'Sotuv Menejeri vakansiyasiga tanlov. Faqat Qaynoq mijozlarga telefon qilasiz!',
    date: '11 11 2024',
    schedule: 'Dushanba - Juma',
    salary: '5 500 000 dan - 14 200 000 gacha',
  },
  {
    id: 2,
    title: 'Sotuv Menejeri vakansiyasiga tanlov. Faqat Qaynoq mijozlarga telefon qilasiz!',
    date: '11 11 2024',
    schedule: 'Dushanba - Juma',
    salary: '5 500 000 dan - 14 200 000 gacha',
  },
    {
    id: 3,
    title: 'Sotuv Menejeri vakansiyasiga tanlov. Faqat Qaynoq mijozlarga telefon qilasiz!',
    date: '11 11 2024',
    schedule: 'Dushanba - Juma',
    salary: '5 500 000 dan - 14 200 000 gacha',
  },
    {
    id: 4,
    title: 'Sotuv Menejeri vakansiyasiga tanlov. Faqat Qaynoq mijozlarga telefon qilasiz!',
    date: '11 11 2024',
    schedule: 'Dushanba - Juma',
    salary: '5 500 000 dan - 14 200 000 gacha',
  },
     {
    id: 5,
    title: 'Sotuv Menejeri vakansiyasiga tanlov. Faqat Qaynoq mijozlarga telefon qilasiz!',
    date: '11 11 2024',
    schedule: 'Dushanba - Juma',
    salary: '5 500 000 dan - 14 200 000 gacha',
  },
     {
    id: 6,
    title: 'Sotuv Menejeri vakansiyasiga tanlov. Faqat Qaynoq mijozlarga telefon qilasiz!',
    date: '11 11 2024',
    schedule: 'Dushanba - Juma',
    salary: '5 500 000 dan - 14 200 000 gacha',
  },
];
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
