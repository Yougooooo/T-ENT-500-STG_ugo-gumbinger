<template>
  <header class="sticky top-0 z-50 bg-bleu-nuit border-b-2 border-or-japonais">
    <nav class="max-w-7xl mx-auto px-5">
      <div class="flex justify-between items-center py-5">
        <NuxtLink
          to="/"
          class="md:text-xl lg:text-2xl font-bold text-or-japonais transition tracking-widest hover:scale-105"
        >
          Gumbinger Ugo | 開発者
        </NuxtLink>

        <button
          :class="['md:hidden text-or-japonais text-3xl transition-all duration-300',{ 'rotate-90': isMenuOpen }]"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Menu"
        >
          ☰
        </button>
        
        <ul class="hidden md:flex gap-5 list-none lg:flex gap-9 list-none ">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="relative text-slate-300 font-semibold uppercase tracking-wider transition-all hover:text-or-japonais group"
              active-class="text-or-japonais"
            >
              {{ link.label }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-or-japonais to-transparent group-hover:w-full transition-all"></span>
            </NuxtLink>
          </li>
        </ul>

        <ul
          v-show="isMenuOpen"
          class="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit flex flex-col p-5 border-t-2 border-or-japonais border-b-2 border-or-japonais/30"
        >
          <li v-for="link in navLinks" :key="link.to" class="mb-2">
            <NuxtLink
              :to="link.to"
              @click="isMenuOpen = false"
              class="block text-or-japonais font-semibold uppercase text-sm transition-all py-2"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/#projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' }
]
</script>
