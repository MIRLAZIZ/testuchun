import axios from 'axios';






// Axios instansiyasini yaratish
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  timeout: 200000,
});



api.interceptors.request.use(
  (config) => {
    const langObj = JSON.parse(localStorage.getItem('lang')) || { value: 'uz' };

    const langCode = langObj.value || 'uz';

    config.headers['Accept-Language'] = langCode;



    return config;
  }
);

export default api;
