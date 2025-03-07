import axios from 'axios';






// Axios instansiyasini yaratish
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL+'/nt8xn7op68wtu3aqpy48gw9ve81affvvn01o8d8kcamsmm6meqr5fwmyxqph', 
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
