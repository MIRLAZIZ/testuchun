import axios from 'axios';

// Axios instansiyasini yaratish
const api = axios.create({
  baseURL: 'https://web.mediaprint.uz/api', // API URL
  timeout: 200000,
});

// Interceptor qo'shish: har bir so'rovga `lang` va tokenni qo'shish
api.interceptors.request.use(
  (config) => {
    // Tilni aniqlash (masalan, localStorage yoki dasturdan)
    const langObj = JSON.parse(localStorage.getItem('lang')) || { value: 'uz' };

    // Til kodini (value) olish va xabarni qo'shish
    const langCode = langObj.value || 'uz';
    // Tilni xabarlar qismiga qo'shish
    
    config.headers['Accept-Language'] = langCode;

    // Tokenni olish (masalan, localStorage yoki Vuex / Pinia store'dan)
    const token = localStorage.getItem('authToken');

    // Agar token bo'lsa, Authorization xabarini qo'shish
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log(error.response?.data?.message || error.message);
    
    return Promise.reject(error);
  }
);

export default api;
