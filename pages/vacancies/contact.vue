<template>
  <div class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto px-4">
      <!-- Sarlavha -->
      <h1 class="text-2xl font-bold text-gray-800 mb-6">KONTAKT</h1>

      <!-- Kontaktlar grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Telefon raqam -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-medium mb-2 flex items-center">
            <PhoneIcon class="w-5 h-5 mr-2 text-gray-500" /> Telefon raqam
          </h2>
          <p class="text-gray-700">+998 99 200 02 02</p>
          <p class="text-gray-700">+998 99 200 02 02</p>
        </div>

        <!-- Manzil -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-medium mb-2 flex items-center">
            <MapPinIcon class="w-5 h-5 mr-2 text-gray-500" /> Manzil
          </h2>
          <p class="text-gray-700">
            Toshkent, Yakkasaroy tumani, Shota Rustaveli ko‘chasi, 114
          </p>
        </div>

        <!-- Pochta manzili -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-medium mb-2 flex items-center">
            <MailIcon class="w-5 h-5 mr-2 text-gray-500" /> Pochta manzili
          </h2>
          <p class="text-gray-700">info@timeedu.uz</p>
        </div>

        <!-- Ijtimoiy tarmoqlar -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-medium mb-2 flex items-center">
            <Share2Icon class="w-5 h-5 mr-2 text-gray-500" /> Ijtimoiy tarmoqlar
          </h2>
          <div class="flex space-x-4 text-red-500">
            <YouTubeIcon class="w-6 h-6 cursor-pointer hover:text-red-700" />
            <TelegramIcon class="w-6 h-6 cursor-pointer hover:text-blue-700" />
            <InstagramIcon class="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhoneIcon,
  MapPinIcon,
  MailIcon,
  Share2Icon,
  YouTubeIcon,
  TelegramIcon,
  InstagramIcon,
} from "lucide-react";
</script>

<style>
/* Minimal styling uchun container */
.container {
  max-width: 800px;
}
</style>
