<template>
  <div>
    
    <section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit text-white py-20 text-center border-b-2 border-or-japonais">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-or-japonais">Me Contacter</h1>
        <p class="text-xl md:text-2xl text-indigo-100">
          N'hésitez pas à me contacter pour discuter d'une opportunité
        </p>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit border-b-2 border-or-japonais">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          <div class="lg:col-span-2 space-y-8 lg:order-2 order-2">
            
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h2 class="text-2xl font-bold text-or-japonais mb-4">Informations de Contact</h2>
              
              <div class="space-y-6">
                <div class="flex gap-5 items-start">
                  <div class="text-3xl flex-shrink-0">📧</div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <a 
                      href="mailto:ugo.gumbinger@epitech.eu" 
                      class="text-blue-600 hover:underline"
                    >
                      ugo.gumbinger@epitech.eu
                    </a>
                  </div>
                </div>

                <div class="flex gap-5 items-start">
                  <div class="text-3xl flex-shrink-0">📍</div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-1">Localisation</h3>
                    <p class="text-gray-600">Strasbourg, France</p>
                  </div>
                </div>

                <div class="flex gap-5 items-start">
                  <div class="text-3xl flex-shrink-0">📞</div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-1">Téléphone</h3>
                    <p class="text-gray-600">06 66 84 48 57</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 lg:order-1 order-1">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-bold text-or-japonais mb-6">Envoyez-moi un Message</h2>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="flex flex-col gap-2">
                  <label for="name" class="font-medium text-gray-700">Nom complet *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name"
                    required 
                    placeholder="Votre nom"
                    class="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-indigo-japonais"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email" class="font-medium text-gray-700">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email"
                    required 
                    placeholder="votre@email.com"
                    class="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-indigo-japonais"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="subject" class="font-medium text-gray-700">Sujet *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="formData.subject"
                    required 
                    placeholder="Sujet de votre message"
                    class="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-indigo-japonais"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="message" class="font-medium text-gray-700">Message *</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message"
                    required 
                    rows="6"
                    placeholder="Votre message..."
                    class="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-inherit resize-y transition-colors focus:outline-none focus:border-indigo-japonais"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="w-full px-8 py-3 bg-or-japonais text-bleu-nuit rounded-lg font-semibold transition-all hover:bg-amber-500 hover:-translate-y-0.5"
                >
                  {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                </button>

                <div 
                  v-if="submitMessage" 
                  :class="[
                    'p-4 rounded-lg text-center font-medium',
                    submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  ]"
                >
                  {{ submitMessage }}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const config = useRuntimeConfig()

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ugo.gumbinger@epitech.eu'
      },
      config.public.emailjsPublicKey
    )

    submitMessage.value = 'Message envoyé avec succès ! Je vous répondrai bientôt.'
    submitStatus.value = 'success'

    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''

  } catch (error) {
    console.error('Erreur EmailJS:', error)
    submitMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false

    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

</script>