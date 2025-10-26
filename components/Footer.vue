<template>
  <footer class="bottom-0 w-full bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit py-10">
    <div class="max-w-7xl mx-auto px-5 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <div>
          <h3 class="text-xl font-bold text-or-japonais mb-4">
            Mon Portfolio
          </h3>
          <p class="text-slate-300">
            Étudiant passionné par les nouvelles technologies
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold text-or-japonais mb-4">
            Navigation
          </h3>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="relative text-slate-300 hover:text-or-japonais transition-all duration-300 hover:pl-3 group inline-block"
              >
                <span class="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:-left-2 transition-all duration-300 text-or-japonais">-></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold text-or-japonais mb-4">
            Me suivre
          </h3>
          <div class="flex flex-row gap-4 items-center">
            <a
              href="https://github.com/Yougooooo"
              target="_blank"
              rel="noopener"
              class="px-4 py-4 bg-gradient-to-br from-indigo-japonais/50 to-bleu-nuit/50 rounded-lg transition-all duration-300 border border-bleu-clair/30 hover:border-or-japonais hover:-translate-y-1 hover:scale-110"
            >
              <img src="/images/icons/github.png" class="w-12 h-12" alt="icon-Github">
            </a>
            <a
              href="https://www.linkedin.com/in/ugo-gumbinger/"
              target="_blank"
              rel="noopener"
              class="px-4 py-4 bg-gradient-to-br from-indigo-japonais/50 to-bleu-nuit/50 rounded-lg transition-all duration-300 border border-bleu-clair/30 hover:border-or-japonais hover:-translate-y-1 hover:scale-110"
            >
              <img src="/images/icons/linkedin.png" class="w-12 h-12" alt="icon-linkedin">
            </a>
            <a
              href="https://www.instagram.com/ugo.gumbinger/"
              target="_blank"
              rel="noopener"
              class="px-4 py-4 bg-gradient-to-br from-indigo-japonais/50 to-bleu-nuit/50 rounded-lg transition-all duration-300 border border-bleu-clair/30 hover:border-or-japonais hover:-translate-y-1 hover:scale-110"
            >
              <img src="/images/icons/instagram.png" class="w-12 h-12" alt="icon-instagram">
            </a>
          </div>
        </div>
      </div>

      <div class="text-center pt-6 border-t border-or-japonais/40 text-slate-400 text-sm">
        <p>&copy; {{ currentYear }} Ugo Gumbinger | 作 </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/#projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' }
]
</script>
