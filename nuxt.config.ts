import Aura from '@primevue/themes/aura';
import MegaMenu from 'primevue/megamenu';


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    // CSS file in the project
    //'@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/styles.scss'
  ],
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    }
})



