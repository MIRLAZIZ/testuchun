import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        once: true, // Animatsiya faqat bir marta ishlashi uchun
        duration: 800, // Animatsiya davomiyligi (ms)
      });
    });
  }
});
