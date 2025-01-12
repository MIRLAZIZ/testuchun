<template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Header Section -->
      <div class="relative">
        <img
          src="/assets/imgs/home/Group 1.png"
          alt="Header Image"
          class="w-full h-[400px] object-cover"
        />
      </div>
  
      <div class="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Main Content -->
        <div class="lg:col-span-8 bg-white p-6 rounded-lg shadow">
          <h1 class="text-2xl font-bold mb-4">
            Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yo'lingiz!
          </h1>
          <p class="text-gray-700 mb-4">
            Toshkent menejment va iqtisodiyot instituti yuqori sifatli TMJ, iqtisodiyot,
            marketing, boshqaruv va boshqa muhim yo'nalishlarda ta'lim olishni
            ta'minlaydi.
          </p>
          <!-- Gallery -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
            <img
              src="/assets/imgs/home/Group 1.png"
              alt="Gallery Image"
              class="w-full h-auto rounded-lg"
            />
            <img
              src="/assets/imgs/home/Group 1.png"
              alt="Gallery Image"
              class="w-full h-auto rounded-lg"
            />
            <img
              src="/assets/imgs/home/Group 1.png"
              alt="Gallery Image"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <h2 class="text-xl font-semibold mt-6 mb-2">
            Institut haqida qisqacha ma'lumot
          </h2>
          <p class="text-gray-700">
            Toshkent menejment va iqtisodiyot instituti xalqaro miqyosda tan olingan ta'lim
            dasturlarini taklif qiladi...
          </p>
        </div>
  
        <!-- Sidebar -->
        <div class="lg:col-span-4 space-y-6">
          <!-- Menu -->
          <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">Institut</h2>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="block text-blue-600 hover:text-blue-800"
                >Bosh sahifa</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-blue-600 hover:text-blue-800"
                >Biz haqimizda</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-blue-600 hover:text-blue-800"
                >Faoliyat yo'nalishlari</a>
              </li>
            </ul>
          </div>
  
          <!-- Rektor bilan bog'lanish -->
          <div class="bg-blue-100 p-6 rounded-lg shadow text-center">
            <p class="font-semibold">Rektor bilan bog'laning</p>
            <button
              class="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Bog'lanish
            </button>
          </div>
  
          <!-- Telegram Section -->
          <div class="bg-blue-50 p-6 rounded-lg shadow text-center">
            <p class="font-semibold">Telegram Kanal</p>
            <button
              class="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Obuna bo'lish
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Hozircha hech qanday script yo'q, faqat statik HTML va TailwindCSS ishlatilmoqda.
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  