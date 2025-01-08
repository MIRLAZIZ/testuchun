// utils/axios.js
import axios from 'axios';


// Axios instansiyasini yaratish
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API URL
  timeout: 200000,
});

// // Interceptor qo'shish: har bir so'rovga tokenni qo'shish
// api.interceptors.request.use(
//   (config) => {
//     // Tokenni olish (masalan, localStorage yoki Vuex / Pinia store'dan)
//     const token = localStorage.getItem('authToken') ;
    
//     // yoki: store.getters.token

//     // Agar token bo'lsa, Authorization xabarini qo'shish
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
