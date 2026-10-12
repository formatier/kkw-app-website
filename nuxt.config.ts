import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/icon/module", "@nuxt/image", "@nuxt/fonts"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/index.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {},
  fonts: {
    families: [
      {
        name: "Noto Sans Thai",
        styles: ["normal", "italic"],
        weight: "100..900",
        provider: "google",
      },
    ],
  },
});
