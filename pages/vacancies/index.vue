<template>
  <div class="vacancy-container">
    <h1 class="text-2xl font-bold mb-6">BO'SH ISH O'RINLARI</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="vacancy in vacancies"
        :key="vacancy.id"
        class="vacancy-card"
      >
        <h2 class="font-semibold text-lg mb-2">{{ vacancy.title }}</h2>
        <div class="flex items-center text-sm text-gray-500 mb-2">
          <div class="flex items-center gap-2">
            <Icon name="calendar" />
            <span>{{ vacancy.schedule }}</span>
          </div>
          <div class="ml-auto">
            <Icon name="clock" />
            <span>{{ vacancy.date }}</span>
          </div>
        </div>
        <div class="salary-section">
          <p>{{ vacancy.salary }}</p>
          <Icon name="arrow-right" />
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
];
</script>

<script>
export default {
  components: {
    Icon: {
      props: ['name'],
      template: `
        <svg
          v-if="name === 'calendar'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-5 h-5 text-gray-500"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10m-9 4h4m-6 4h6m2 0h6M3 8h18" />
        </svg>
        <svg
          v-if="name === 'clock'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-5 h-5 text-gray-500"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2m-4-8a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
        <svg
          v-if="name === 'arrow-right'"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-5 h-5 text-red-500"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      `,
    },
  },
};
</script>

<style>
.vacancy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
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
