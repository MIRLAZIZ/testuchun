// import { defineNuxtPlugin, useNuxtApp, useState } from '#imports';

// export default defineNuxtPlugin(() => {
//   const app = useNuxtApp();
//   const loading = useState('loading', () => false);

//   app.hook('page:start', () => {
//     loading.value = true; // Sahifa yuklanishida loading true bo‘ladi
//     console.log('Page is loading...');
//   });

//   app.hook('page:finish', () => {
//     loading.value = false; // Sahifa yuklanishi tugagach, loading false bo‘ladi
//     console.log('Page finished!');
//   });

//   // Provide qilish (agar boshqa komponentlardan foydalanmoqchi bo‘lsangiz)
//   app.provide('loading', loading);
// });
