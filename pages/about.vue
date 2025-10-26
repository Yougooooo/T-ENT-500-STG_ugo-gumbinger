<template>
  <div>
    <section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit text-white py-20 text-center border-b-2 border-or-japonais">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-or-japonais">À Propos de Moi</h1>
        <p class="text-xl md:text-2xl text-indigo-100">
          A la recherche d'une alternance en Développement Full Stack ou en Data Engineering
        </p>
      </div>
    </section>

    
    <section class="py-16 bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit border-b-2 border-or-japonais">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-10">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-or-japonais mb-6">Qui suis-je ?</h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
          Bonjour, je m'appelle <strong class="text-gray-900">Gumbinger Ugo</strong> et je suis actuellement
          étudiant en Pré-Master of Science à <strong class="text-gray-900">Epitech Strasbourg</strong>. 
          Je suis activement à la recherche d'une <strong class="text-gray-900">alternance en Développement Full Stack ou en Data Engineering</strong> 
          pour mettre en pratique mes compétences et contribuer à des projets innovants.
        </p>
        <p class="text-gray-700 mb-4 leading-relaxed">
          Passionné par le développement web moderne et l'analyse de données, j'apprécie autant concevoir des 
          interfaces utilisateur intuitives que manipuler et visualiser des données complexes. Cette double 
          compétence me permet d'avoir une vision complète du cycle de développement, de la collecte des données 
          jusqu'à leur présentation aux utilisateurs finaux.
        </p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-3xl font-bold text-or-japonais mb-6">Mon Parcours</h2>

              <div class="relative pl-8 border-l-2 border-blue-600">

                <div class="relative mb-8 pb-2">
                  <div class="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-blue-600 border-4 border-white"></div>
                  <div class="timeline-date text-indigo-japonais font-bold mb-2">09/2025 - 09/2028</div>
                  <div class="timeline-content">
                    <h3 class="text-xl font-semibold text-gray-800 mb-1">Master of Science Epitech</h3>
                    <p class="text-gray-600 mb-1">Epitech - École de l'expertise informatique</p>
                    <p class="text-gray-600">Strasbourg</p>
                  </div>
                </div>

                <div class="relative mb-8 pb-2">
                  <div class="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-blue-600 border-4 border-white"></div>
                  <div class="timeline-date text-indigo-japonais font-bold mb-2">09/2020 - 06/2025</div>
                  <div class="timeline-content">
                    <h3 class="text-xl font-semibold text-gray-800 mb-1">Licence informatique</h3>
                    <p class="text-gray-600">UFR de mathématique et informatique</p>
                    <p class="text-gray-600">Strasbourg</p>
                  </div>
                </div>

                <div class="relative mb-8 pb-2">
                  <div class="absolute -left-[41px] top-0 w-3 h-3 rounded-full bg-blue-600 border-4 border-white"></div>
                  <div class="timeline-date text-indigo-japonais font-bold mb-2">09/2017 - 06/2020</div>
                  <div class="timeline-content">
                    <h3 class="text-xl font-semibold text-gray-800 mb-1">Baccalauréat : Filière Scientifique</h3>
                    <p class="text-gray-600">Lycée André Maurois</p>
                    <p class="text-gray-600">Bischwiller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="h-full">
            <div class="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 class="text-xl font-bold text-or-japonais mb-4">QUALITES</h3>
              <ul class="space-y-3">
                <li class="py-2 border-b border-gray-200 text-gray-600">Travail d'équipe</li>
                <li class="py-2 border-b border-gray-200 text-gray-600">Curiosité</li>
                <li class="py-2 border-b border-gray-200 text-gray-600">Adaptabilité</li>
                <li class="py-2 text-gray-600">Rigueur</li>
              </ul>
              <h3 class="text-xl font-bold text-or-japonais mb-4 mt-8">Centres d'Intérêt</h3>
              <ul class="space-y-3">
                <li class="py-2 border-b border-gray-200 text-gray-600">Sports</li>
                <li class="py-2 border-b border-gray-200 text-gray-600">Jeux vidéo</li>
                <li class="py-2 border-b border-gray-200 text-gray-600">Voyage</li>
                <li class="py-2 text-gray-600">Musique</li>
              </ul>
            </div>
          </aside>
        </div>

        <div class="text-center py-16 px-8 bg-white rounded-2xl text-white">
          <h2 class="text-3xl font-bold mb-4 text-or-japonais">Intéressé par mon profil ?</h2>
          <p class="text-lg text-bleu-nuit mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter d'opportunités
          </p>
          <NuxtLink 
            to="/contact" 
            class="inline-block px-8 py-3 bg-or-japonais text-bleu-nuit rounded-lg font-semibold hover:bg-amber-500 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Me Contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>