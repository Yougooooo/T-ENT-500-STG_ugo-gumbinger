<template>
  <div>
    <section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit text-white py-20 min-h-[600px] flex items-center border-b-2 border-or-japonais">
      <div class="max-w-7xl mx-auto px-4 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              <span ref="el" class="text-or-japonais"></span>
            </h1>
            <p class="text-xl md:text-2xl mb-5 text-indigo-100">
              Étudiant en Pré Master of science à Epitech Strasbourg
            </p>
          </div>
          
          <div class="flex justify-center order-first md:order-last">
            <img 
              src="/images/Ugo G.png" 
              alt="Photo de profil Ugo Gumbinger" 
              class="w-full max-w-[250px] md:max-w-md rounded-full border-4 border-or-japonais shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-or-japonais">
          Mes Compétences
        </h2>
        
        <div class="space-y-12">
          <div v-for="category in skillCategories" :key="category.id" class="w-full">
            <div class="flex items-center gap-3 mb-6">
              <h3 class="text-2xl font-bold text-or-japonais">{{ category.title }}</h3>
            </div>
            
            <Swiper
              :modules="modules"
              :slides-per-view="2"
              :space-between="20"
              :loop="true"
              :autoplay="{ delay: 2500 + category.id * 500, disableOnInteraction: false }"
              :breakpoints="{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
                1280: { slidesPerView: 6, spaceBetween: 30 }
              }"
              class="skills-carousel"
            >
              <SwiperSlide v-for="(skill, index) in category.skills" :key="index">
                <div class="rounded-xl p-6 h-32 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform gap-2">
                  <img 
                    :src="skill.icon" 
                    :alt="skill.name"
                    class="w-12 h-12 object-contain"
                  />
                  <p class="text-white font-semibold text-sm">{{ skill.name }}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    <section id="projets" class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit py-16 border-t-2 border-or-japonais border-b-2 border-or-japonais">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-or-japonais">
          Mes Projets
        </h2>
        
        <div v-if="allProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in allProjects" :key="project.id">
            <NuxtLink 
              :to="`/projects/${project.id}`"
              class="block bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <div class="h-64 overflow-hidden bg-gray-200">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in project.technologies" 
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

        <div v-else class="text-center py-12">
          <p class="text-or-japonais text-xl">Aucun projet disponible pour le moment.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { projects } from '~/data/projects'
import { skillCategories } from '~/data/skills'

const el = ref(null)
const modules = [Autoplay]

const allProjects = projects

onMounted(() => {
  new Typed(el.value, {
    strings: ['Gumbinger Ugo'],
    typeSpeed: 120,
    backSpeed: 100,
    startDelay: 500, 
    backDelay: 2000,
    loop: true,
  })
})
</script>
