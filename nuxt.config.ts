import Lara from "@primevue/themes/lara";
import Material from "@primevue/themes/material";
import PrimeVue from "primevue/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: ["@primevue/nuxt-module"],
  css: [
    "@/assets/styles/tailwind.css",
    "@/assets/styles/base.css",
    "primeicons/primeicons.css",
  ],
  primevue: {
    options: {
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: "system",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
