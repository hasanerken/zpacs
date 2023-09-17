// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@huntersofbook/naive-ui-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-phosphor-icons',
    'dayjs-nuxt',
    '@vueuse/nuxt',
    'nuxt-radash',
    '@hebilicious/vue-query-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL
    }
  },
  routeRules: {
    '/': { prerender: true },
    "/auth": { ssr: false }
  },
  phosphor: {
    prefix: 'ph'
  },
  css: [
    '@/assets/css/main.css'
  ],
  naiveUI: {
    themeOverrides: {
      common: {
      }
    }
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },
})
