<template>
  <div>
    <div v-if="!project" class="max-w-7xl mx-auto px-4 py-24 text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Projet non trouvé</h1>
      <p class="text-gray-600 mb-8">Le projet que vous recherchez n'existe pas.</p>
      <NuxtLink 
        to="/" 
        class="inline-block px-8 py-3 bg-or-japonais text-bleu-nuit rounded-lg font-semibold hover:text-or-japonais transition-all"
      >
        Retour à l'accueil
      </NuxtLink>
    </div>

    <div v-else>
      
      <section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit text-white py-16 border-b-2 border-or-japonais">
        <div class="max-w-7xl mx-auto px-4">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center text-white opacity-90 hover:text-or-japonais transition-all mb-5"
          >
            ← Retour à l'accueil
          </NuxtLink>
          <h1 class="text-3xl md:text-5xl font-bold text-or-japonais mb-3">{{ project.title }}</h1>
          <p class="text-lg text-indigo-100">
            {{ project.date }} • Durée: {{ project.duration }}
          </p>
        </div>
      </section>

      <div class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit border-b-2 border-or-japonais">
      <section class="py-10 border-b-2 border-or-japonais">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-or-japonais">
            Aperçu du projet
          </h2>
        <div class="max-w-7xl mx-auto px-4">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full max-h-[650px] object-cover rounded-xl shadow-2xl"
          />
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div class="lg:col-span-2 space-y-8">
              
              <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-3xl font-bold text-or-japonais mb-6">Description</h2>
                <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                  {{ project.detailedDescription }}
                </p>
              </div>
              <!--
              <div class="flex gap-4 flex-wrap">
                <a 
                  v-if="project.github" 
                  :href="project.github" 
                  target="_blank"
                  class="inline-block px-8 py-3 bg-or-japonais text-bleu-nuit rounded-lg font-semibold hover:bg-amber-500 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Voir sur GitHub
                </a>
              </div>
              -->
            </div>
            

            <aside class="space-y-8">
              
              <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Technologies utilisées</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-or-japonais text-black rounded-full text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Informations</h3>
                <div class="space-y-4">
                  <div class="flex justify-between items-center pb-4 border-b border-gray-200">
                    <strong class="text-gray-700">Durée:</strong>
                    <span class="text-gray-600">{{ project.duration }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <strong class="text-gray-700">Année:</strong>
                    <span class="text-gray-600">{{ project.date }}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      </div>

      <section v-if="otherProjects.length > 0" class="py-16 bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit border-b-2 border-or-japonais">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-or-japonais">
            Autres Projets
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="otherProject in otherProjects" 
              :key="otherProject.id"
              class="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
            <NuxtLink :to="`/projects/${otherProject.id}`">
              <div class="h-64 overflow-hidden bg-gray-200">
                <img 
                  :src="otherProject.image" 
                  :alt="otherProject.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">{{ otherProject.title }}</h3>
                <p class="text-gray-600 mb-4">{{ otherProject.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in otherProject.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-or-japonais text-black rounded-full text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { projects, getProjectById } from '~/data/projects'

const route = useRoute()
const projectId = parseInt(route.params.id)

const project = computed(() => getProjectById(projectId))

const otherProjects = computed(() => {
  return projects.filter(p => p.id !== projectId).slice(0, 3)
})
</script>