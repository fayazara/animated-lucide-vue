// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/scripts",
    "motion-v/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  vite: {
    vue: {
      features: {
        propsDestructure: true,
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
});
