// plugins/axios.ts
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Test API
    timeout: 5000,
  });

  nuxtApp.provide('api', api); // api'ni nuxtApp.provide orqali taqdim etish
});

