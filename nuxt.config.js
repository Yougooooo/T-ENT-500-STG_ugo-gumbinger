// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Ugo Gumbinger - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'Portfolio de Ugo Gumbinger - Étudiant en Pré Master of Science à Epitech Strasbourg' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/nuage.png' }
      ],
      htmlAttrs: {
        class: 'text-base' // Force la taille de base à 16px via Tailwind
      },
      bodyAttrs: {
        class: 'antialiased' // Améliore le rendu des polices
      }
    }
  },

  runtimeConfig: {
    public: {
      // Variables publiques EmailJS (accessibles côté client)
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }
  },

  compatibilityDate: '2025-10-24'
})