import Aura from '@primevue/themes/aura';
import Material from '@primevue/themes/material';
import PrimeVue from 'primevue/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
 
  modules: [ "@primevue/nuxt-module"],
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/base.css', 'primeicons/primeicons.css'],
  primevue: {
      options: { theme: 'none', 
        darkModeSelector: '.my-app-dark'
      }
      
  },
  postcss: {
      plugins: {
          'postcss-import': {},
          tailwindcss: {},
          autoprefixer: {}
      }
  }
});