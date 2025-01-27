// nuxt3-dagi loyiha
<template>
  <div class="bg-gray-50 min-h-screen py-10">
    <div class="container mx-auto">
      <!-- Sarlavha -->
      <h1 class="text-2xl font-bold text-center mb-8">SOTUV MENEJERI</h1>

      <!-- Ma'lumotlar -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2 text-gray-500">
            <CalendarIcon />
            <span>Dushanba - Juma</span>
          </div>
          <div class="flex items-center gap-2 text-gray-500">
            <ClockIcon />
            <span>11 11 2024</span>
          </div>
        </div>

        <!-- Tajriba haqida -->
        <section>
          <h2 class="text-lg font-semibold mb-2">Tajribalari:</h2>
          <p class="text-gray-700 mb-4">
            Toshkent menejment va iqtisodiyot instituti xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injineringi, dasturiy injiniring...
          </p>
        </section>

        <!-- Ishlash sharoiti -->
        <section>
          <h2 class="text-lg font-semibold mb-2">Ishlash sharoiti:</h2>
          <ul class="list-disc list-inside text-gray-700 mb-4">
            <li>The work schedule is 5/2 09:00 to 18:00</li>
            <li>Corporate education and trainings</li>
            <li>Working with a professional team to develop interesting projects</li>
            <li>Friendly and supportive atmosphere...</li>
          </ul>
        </section>

        <!-- Tugma -->
        <button
          class="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Resume jo'natish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.container {
  max-width: 800px;
}
</style>
