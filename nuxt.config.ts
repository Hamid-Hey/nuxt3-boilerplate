import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

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
  }
})
