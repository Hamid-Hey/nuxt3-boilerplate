import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Global CSS
  css: ['~/assets/styles/main.scss'],

  // Globally Register Components
  components: [
    { path: "~/components/kit/VCol" },
    { path: "~/components/kit/VRow" },
  ],

  // Define Source Directory
  srcDir: './client',

  // Extend Default Routing
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'home',
        path: '/',
        file: resolve(__dirname, 'client/pages/home/index.vue')
      })
    }
  },

  vite: {
    // Import SASS Variables, Functions, and Mixins
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/vars/_breakpoints.scss";
          @import "@/assets/styles/mixins/_clearfix.scss";
          @import "@/assets/styles/mixins/_grid.scss";
          @import "@/assets/styles/mixins/_responsive.scss";
          `,
        },
      },
    },
  },
})
