# Documentation Technique du Portfolio - Ugo Gumbinger

## Table des Matières
1. [Architecture du Projet](#architecture-du-projet)
2. [Pages](#pages)
3. [Composants](#composants)
4. [Données](#données)
5. [Configuration](#configuration)
6. [Classes Tailwind Personnalisées](#classes-tailwind-personnalisées)

---

## Architecture du Projet

```
T-ENT-500-STG_ugo-gumbinger/
├── app.vue                 # Point d'entrée avec effet de curseur
├── nuxt.config.js          # Configuration Nuxt & EmailJS
├── tailwind.config.js      # Configuration Tailwind avec couleurs personnalisées
├── pages/
│   ├── index.vue           # Page d'accueil
│   ├── about.vue           # Page À propos
│   ├── contact.vue         # Page Contact avec formulaire
│   └── projects/[id].vue   # Page détail projet (dynamique)
├── components/
│   ├── Header.vue          # Navigation principale
│   └── Footer.vue          # Pied de page
├── layouts/
│   └── default.vue         # Layout par défaut
└── data/
    ├── projects.js         # Base de données des projets
    └── skills.js           # Base de données des compétences
```

---

## Pages

### 1. `app.vue` - Point d'Entrée

**Rôle :** Racine de l'application avec l'effet de curseur animé.

```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

**Script :**
- `onMounted()` : Importe dynamiquement la bibliothèque `cursor-effects`
- `fairyDustCursor` : Crée un effet de poussière dorée (`#FFA559`) qui suit le curseur

**Classes Tailwind :** Aucune (délégué au layout)

---

### 2. `layouts/default.vue` - Layout Principal

**Rôle :** Structure générale de toutes les pages.

```vue
<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>
```

**Classes Tailwind expliquées :**

| Classe | Signification |
|--------|---------------|
| `min-h-screen` | Hauteur minimale de 100vh (toute la hauteur de l'écran) |
| `flex flex-col` | Flexbox en colonne pour empiler Header, Main, Footer |
| `flex-grow` | Le main prend tout l'espace disponible (pousse le footer en bas) |

---

### 3. `pages/index.vue` - Page d'Accueil

#### Section Hero (En-tête principal)

```vue
<section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit
                text-white py-20 min-h-[600px] flex items-center
                border-b-2 border-or-japonais">
```

**Classes Tailwind expliquées :**

| Classe | Signification |
|--------|---------------|
| `bg-gradient-to-b` | Gradient du haut vers le bas |
| `from-bleu-nuit` | Couleur de départ du gradient (bleu foncé) |
| `via-indigo-japonais` | Couleur intermédiaire (indigo) |
| `to-bleu-nuit` | Couleur de fin (retour au bleu foncé) |
| `text-white` | Texte en blanc |
| `py-20` | Padding vertical de 5rem (80px) |
| `min-h-[600px]` | Hauteur minimale personnalisée de 600px |
| `flex items-center` | Flexbox avec centrage vertical |
| `border-b-2` | Bordure inférieure de 2px |
| `border-or-japonais` | Couleur de bordure dorée |

**Grid Layout :**

```vue
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
```

| Classe | Signification |
|--------|---------------|
| `grid` | Active le système de grille CSS |
| `grid-cols-1` | 1 colonne sur mobile |
| `md:grid-cols-2` | 2 colonnes à partir de 768px (tablette et desktop) |
| `gap-16` | Espacement de 4rem (64px) entre les éléments |
| `items-center` | Alignement vertical au centre |

**Effet de frappe (Typed.js) :**

```vue
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
  <span ref="el" class="text-or-japonais"></span>
</h1>
```

| Classe | Signification |
|--------|---------------|
| `text-4xl` | Taille 2.25rem (36px) sur mobile |
| `md:text-5xl` | Taille 3rem (48px) sur tablette |
| `lg:text-6xl` | Taille 3.75rem (60px) sur desktop |
| `font-bold` | Graisse de police en gras (700) |
| `mb-5` | Marge inférieure de 1.25rem (20px) |
| `text-or-japonais` | Couleur dorée personnalisée |

**Image de profil :**

```vue
<img class="w-full max-w-[250px] md:max-w-md rounded-full
            border-4 border-or-japonais shadow-2xl" />
```

| Classe | Signification |
|--------|---------------|
| `w-full` | Largeur 100% du conteneur |
| `max-w-[250px]` | Largeur maximale de 250px sur mobile |
| `md:max-w-md` | Largeur maximale de 448px sur tablette+ |
| `rounded-full` | Bordure complètement arrondie (cercle parfait) |
| `border-4` | Bordure de 4px |
| `shadow-2xl` | Ombre portée très prononcée |

#### Section Compétences (Swiper Carousel)

```vue
<section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit py-16">
```

**Carte de compétence :**

```vue
<div class="rounded-xl p-6 h-32 flex flex-col items-center justify-center
            text-center hover:scale-105 transition-transform gap-2">
```

| Classe | Signification |
|--------|---------------|
| `rounded-xl` | Bordures très arrondies (0.75rem = 12px) |
| `p-6` | Padding de 1.5rem (24px) sur tous les côtés |
| `h-32` | Hauteur fixe de 8rem (128px) |
| `flex flex-col` | Flexbox en colonne |
| `items-center` | Centrage horizontal |
| `justify-center` | Centrage vertical |
| `hover:scale-105` | Agrandissement de 5% au survol |
| `transition-transform` | Animation fluide de la transformation |
| `gap-2` | Espacement de 0.5rem (8px) entre icône et texte |

**Configuration Swiper (responsive) :**

```javascript
:breakpoints="{
  640: { slidesPerView: 3, spaceBetween: 20 },
  768: { slidesPerView: 4, spaceBetween: 20 },
  1024: { slidesPerView: 5, spaceBetween: 30 },
  1280: { slidesPerView: 6, spaceBetween: 30 }
}"
```

- Mobile (<640px) : 2 compétences visibles
- Tablette (640-768px) : 3 compétences
- Desktop moyen (768-1024px) : 4 compétences
- Grand écran (1024-1280px) : 5 compétences
- Très grand écran (>1280px) : 6 compétences

#### Section Projets

**Grille de projets :**

```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

| Classe | Signification |
|--------|---------------|
| `grid-cols-1` | 1 projet par ligne sur mobile |
| `md:grid-cols-2` | 2 projets par ligne sur tablette |
| `lg:grid-cols-3` | 3 projets par ligne sur desktop |
| `gap-8` | Espacement de 2rem (32px) entre les cartes |

**Carte projet :**

```vue
<NuxtLink class="block bg-white rounded-xl overflow-hidden shadow-lg
                 transition-transform hover:-translate-y-2">
```

| Classe | Signification |
|--------|---------------|
| `block` | Transforme le lien en bloc cliquable |
| `bg-white` | Fond blanc pour la carte |
| `rounded-xl` | Bordures arrondies |
| `overflow-hidden` | Cache les débordements (pour l'image) |
| `shadow-lg` | Ombre portée importante |
| `hover:-translate-y-2` | Élévation de 8px au survol (effet de levée) |

**Tags de technologie :**

```vue
<span class="px-3 py-1 bg-or-japonais text-black rounded-full text-sm font-medium">
```

| Classe | Signification |
|--------|---------------|
| `px-3` | Padding horizontal de 0.75rem (12px) |
| `py-1` | Padding vertical de 0.25rem (4px) |
| `rounded-full` | Forme de pilule |
| `text-sm` | Petite taille de police (0.875rem = 14px) |
| `font-medium` | Graisse de police moyenne (500) |

---

### 4. `pages/about.vue` - Page À Propos

#### Section En-tête

```vue
<section class="bg-gradient-to-b from-bleu-nuit via-indigo-japonais to-bleu-nuit
                text-white py-20 text-center border-b-2 border-or-japonais">
```

Mêmes classes que la page d'accueil avec `text-center` pour centrer le texte.

#### Section Parcours (Timeline)

**Conteneur de timeline :**

```vue
<div class="relative pl-8 border-l-2 border-blue-600">
```

| Classe | Signification |
|--------|---------------|
| `relative` | Positionnement relatif pour les points absolus |
| `pl-8` | Padding gauche de 2rem (32px) |
| `border-l-2` | Bordure gauche de 2px |
| `border-blue-600` | Couleur bleue pour la ligne verticale |

**Point de timeline :**

```vue
<div class="absolute -left-[41px] top-0 w-3 h-3 rounded-full
            bg-blue-600 border-4 border-white">
```

| Classe | Signification |
|--------|---------------|
| `absolute` | Positionnement absolu |
| `-left-[41px]` | Décalage négatif précis pour centrer sur la ligne |
| `top-0` | Alignement en haut de l'événement |
| `w-3 h-3` | Taille 12x12px pour le point |
| `rounded-full` | Forme circulaire |
| `border-4` | Bordure blanche de 4px autour du point |

#### Grid Layout (2 colonnes)

```vue
<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
```

| Classe | Signification |
|--------|---------------|
| `lg:grid-cols-3` | 3 colonnes sur grand écran |
| `gap-10` | Espacement de 2.5rem (40px) |
| `mb-16` | Marge inférieure de 4rem (64px) |

**Colonne principale (Parcours) :**

```vue
<div class="lg:col-span-2">
```

| Classe | Signification |
|--------|---------------|
| `lg:col-span-2` | Occupe 2 colonnes sur 3 (66%) |

#### Section Qualités & Centres d'intérêt

```vue
<ul class="space-y-3">
  <li class="py-2 border-b border-gray-200 text-gray-600">
```

| Classe | Signification |
|--------|---------------|
| `space-y-3` | Espacement vertical de 0.75rem entre chaque `<li>` |
| `py-2` | Padding vertical de 0.5rem |
| `border-b` | Bordure inférieure |
| `border-gray-200` | Couleur grise claire pour les séparateurs |

#### Call-to-Action (CTA)

```vue
<NuxtLink class="inline-block px-8 py-3 bg-or-japonais text-bleu-nuit
                 rounded-lg font-semibold hover:bg-amber-500
                 transition-all hover:-translate-y-0.5 hover:shadow-lg">
```

| Classe | Signification |
|--------|---------------|
| `inline-block` | Permet d'appliquer padding/margin comme un bloc |
| `px-8` | Padding horizontal important (2rem = 32px) |
| `py-3` | Padding vertical (0.75rem = 12px) |
| `bg-or-japonais` | Fond doré |
| `text-bleu-nuit` | Texte bleu foncé pour le contraste |
| `rounded-lg` | Bordures arrondies moyennes (0.5rem) |
| `font-semibold` | Graisse de police semi-gras (600) |
| `hover:bg-amber-500` | Change de couleur au survol |
| `hover:-translate-y-0.5` | Légère élévation au survol |
| `hover:shadow-lg` | Ajoute une ombre au survol |

---

### 5. `pages/contact.vue` - Page Contact

#### Grid Layout (Formulaire + Informations)

```vue
<div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
```

| Classe | Signification |
|--------|---------------|
| `lg:grid-cols-5` | 5 colonnes sur grand écran pour contrôle précis |

**Colonne Informations (droite) :**

```vue
<div class="lg:col-span-2 space-y-8 lg:order-2 order-2">
```

| Classe | Signification |
|--------|---------------|
| `lg:col-span-2` | Occupe 2 colonnes sur 5 (40%) |
| `space-y-8` | Espacement vertical de 2rem entre sections |
| `lg:order-2` | Apparaît en 2ème position sur desktop |
| `order-2` | Apparaît en 2ème sur mobile aussi |

**Colonne Formulaire (gauche) :**

```vue
<div class="lg:col-span-3 lg:order-1 order-1">
```

| Classe | Signification |
|--------|---------------|
| `lg:col-span-3` | Occupe 3 colonnes sur 5 (60%) |
| `lg:order-1` | Apparaît en 1ère position sur desktop |

#### Icônes d'information

```vue
<div class="flex gap-5 items-start">
  <div class="text-3xl flex-shrink-0">📧</div>
```

| Classe | Signification |
|--------|---------------|
| `flex` | Active flexbox |
| `gap-5` | Espacement de 1.25rem entre icône et texte |
| `items-start` | Alignement en haut (important si texte multi-lignes) |
| `text-3xl` | Taille 1.875rem (30px) pour l'emoji |
| `flex-shrink-0` | Empêche l'icône de rétrécir |

#### Champs de formulaire

**Label :**

```vue
<label class="font-medium text-gray-700">Nom complet *</label>
```

| Classe | Signification |
|--------|---------------|
| `font-medium` | Graisse moyenne pour le label |
| `text-gray-700` | Gris foncé pour bonne lisibilité |

**Input :**

```vue
<input class="px-4 py-3 border-2 border-gray-200 rounded-lg
              text-base font-inherit transition-colors
              focus:outline-none focus:border-indigo-japonais" />
```

| Classe | Signification |
|--------|---------------|
| `px-4 py-3` | Padding confortable pour la saisie |
| `border-2` | Bordure visible de 2px |
| `border-gray-200` | Bordure grise claire par défaut |
| `text-base` | Taille de police normale (1rem = 16px) |
| `font-inherit` | Hérite de la police du parent |
| `transition-colors` | Animation fluide du changement de couleur |
| `focus:outline-none` | Retire le contour bleu par défaut |
| `focus:border-indigo-japonais` | Bordure indigo au focus |

**Textarea :**

```vue
<textarea class="px-4 py-3 border-2 border-gray-200 rounded-lg
                 text-base font-inherit resize-y transition-colors
                 focus:outline-none focus:border-indigo-japonais">
```

Mêmes classes que l'input + :

| Classe | Signification |
|--------|---------------|
| `resize-y` | Permet redimensionnement vertical uniquement |

#### Bouton de soumission

```vue
<button :disabled="isSubmitting"
        class="w-full px-8 py-3 bg-or-japonais text-bleu-nuit
               rounded-lg font-semibold transition-all
               hover:bg-amber-500 hover:-translate-y-0.5">
```

| Classe | Signification |
|--------|---------------|
| `w-full` | Largeur 100% du conteneur |
| `transition-all` | Anime toutes les propriétés modifiées |

#### Messages de succès/erreur

```vue
<div :class="[
  'p-4 rounded-lg text-center font-medium',
  submitStatus === 'success'
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800'
]">
```

| Classe | Signification |
|--------|---------------|
| `p-4` | Padding uniforme de 1rem |
| `text-center` | Texte centré |
| `bg-green-100` | Fond vert clair (succès) |
| `text-green-800` | Texte vert foncé (succès) |
| `bg-red-100` | Fond rouge clair (erreur) |
| `text-red-800` | Texte rouge foncé (erreur) |

**Script EmailJS :**

```javascript
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
```

- Envoie un email via EmailJS avec les données du formulaire
- Les clés API sont stockées dans les variables d'environnement
- Reset du formulaire après succès
- Message de confirmation affiché pendant 5 secondes

---

### 6. `pages/projects/[id].vue` - Page Détail Projet

#### En-tête avec breadcrumb

```vue
<NuxtLink class="inline-flex items-center text-white opacity-90
                 hover:text-or-japonais transition-all mb-5">
  ← Retour à l'accueil
</NuxtLink>
```

| Classe | Signification |
|--------|---------------|
| `inline-flex` | Flexbox inline pour aligner icône + texte |
| `items-center` | Centrage vertical de la flèche et du texte |
| `opacity-90` | Légère transparence (90%) |
| `hover:text-or-japonais` | Change en doré au survol |

#### Image du projet

```vue
<img class="w-full max-h-[650px] object-cover rounded-xl shadow-2xl" />
```

| Classe | Signification |
|--------|---------------|
| `w-full` | Largeur 100% du conteneur |
| `max-h-[650px]` | Hauteur maximale personnalisée |
| `object-cover` | Remplit le cadre en conservant les proportions |
| `rounded-xl` | Bordures très arrondies |
| `shadow-2xl` | Ombre portée très prononcée |

#### Grid Layout (Description + Sidebar)

```vue
<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
```

**Colonne principale (Description) :**

```vue
<div class="lg:col-span-2 space-y-8">
```

| Classe | Signification |
|--------|---------------|
| `lg:col-span-2` | Occupe 2 colonnes sur 3 (66%) |
| `space-y-8` | Espacement vertical de 2rem entre sections |

**Description avec espacement préservé :**

```vue
<p class="text-gray-700 leading-relaxed whitespace-pre-line">
```

| Classe | Signification |
|--------|---------------|
| `leading-relaxed` | Hauteur de ligne confortable (1.625) |
| `whitespace-pre-line` | Préserve les retours à la ligne du texte |

#### Sidebar Technologies & Informations

**Tags de technologie :**

```vue
<div class="flex flex-wrap gap-2">
  <span class="px-3 py-1 bg-or-japonais text-black rounded-full
               text-sm font-medium">
```

| Classe | Signification |
|--------|---------------|
| `flex-wrap` | Permet le retour à la ligne des tags |

**Informations du projet :**

```vue
<div class="flex justify-between items-center pb-4 border-b border-gray-200">
  <strong class="text-gray-700">Durée:</strong>
  <span class="text-gray-600">{{ project.duration }}</span>
</div>
```

| Classe | Signification |
|--------|---------------|
| `justify-between` | Espacement maximal entre label et valeur |
| `pb-4` | Padding inférieur de 1rem |
| `border-b` | Bordure inférieure pour séparateur |

#### Section "Autres Projets"

```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

Même grille responsive que sur la page d'accueil.

**Carte avec hover :**

```vue
<div class="bg-white rounded-xl overflow-hidden shadow-lg
            transition-transform hover:-translate-y-2 hover:shadow-2xl">
```

| Classe | Signification |
|--------|---------------|
| `hover:shadow-2xl` | Ombre encore plus prononcée au survol |

**Script (récupération dynamique) :**

```javascript
const route = useRoute()
const projectId = parseInt(route.params.id)
const project = computed(() => getProjectById(projectId))
const otherProjects = computed(() => {
  return projects.filter(p => p.id !== projectId).slice(0, 3)
})
```

- Récupère l'ID depuis l'URL
- Charge le projet correspondant
- Affiche 3 autres projets aléatoires

---

## Composants

### 1. `components/Header.vue` - Navigation

#### Header sticky

```vue
<header class="sticky top-0 z-50 bg-bleu-nuit border-b-2 border-or-japonais">
```

| Classe | Signification |
|--------|---------------|
| `sticky` | Reste collé en haut lors du scroll |
| `top-0` | Position à 0 du haut de la page |
| `z-50` | Index Z élevé pour passer au-dessus du contenu |
| `bg-bleu-nuit` | Fond bleu foncé |
| `border-b-2` | Bordure inférieure dorée de 2px |

#### Logo

```vue
<NuxtLink class="md:text-xl lg:text-2xl font-bold text-or-japonais
                 transition tracking-widest hover:scale-105">
  Gumbinger Ugo | 開発者
</NuxtLink>
```

| Classe | Signification |
|--------|---------------|
| `tracking-widest` | Espacement maximum entre les lettres (0.1em) |
| `hover:scale-105` | Agrandissement de 5% au survol |

#### Bouton menu mobile

```vue
<button :class="['md:hidden text-or-japonais text-3xl
                  transition-all duration-300',
                  { 'rotate-90': isMenuOpen }]">
  ☰
</button>
```

| Classe | Signification |
|--------|---------------|
| `md:hidden` | Caché sur tablette et desktop |
| `text-3xl` | Grande taille pour l'icône hamburger |
| `duration-300` | Animation de 300ms |
| `rotate-90` | Rotation de 90° quand le menu est ouvert |

#### Navigation desktop

```vue
<ul class="hidden md:flex gap-5 list-none lg:flex gap-9 list-none">
```

| Classe | Signification |
|--------|---------------|
| `hidden` | Caché sur mobile |
| `md:flex` | Affiché en flexbox sur tablette+ |
| `gap-5` | Espacement de 1.25rem entre liens (tablette) |
| `lg:gap-9` | Espacement de 2.25rem sur desktop |
| `list-none` | Retire les puces de liste |

**Lien avec effet de soulignement :**

```vue
<NuxtLink class="relative text-slate-300 font-semibold uppercase
                 tracking-wider transition-all hover:text-or-japonais
                 group" active-class="text-or-japonais">
  {{ link.label }}
  <span class="absolute bottom-0 left-0 w-0 h-0.5
               bg-gradient-to-r from-transparent via-or-japonais
               to-transparent group-hover:w-full transition-all">
  </span>
</NuxtLink>
```

| Classe | Signification |
|--------|---------------|
| `relative` | Pour positionner le soulignement absolu |
| `uppercase` | Texte en majuscules |
| `tracking-wider` | Espacement des lettres augmenté |
| `group` | Permet de contrôler l'enfant au survol du parent |
| `absolute bottom-0 left-0` | Ligne sous le texte |
| `w-0` | Largeur 0 par défaut |
| `h-0.5` | Hauteur de 2px pour la ligne |
| `group-hover:w-full` | Largeur 100% au survol du parent |
| `bg-gradient-to-r` | Gradient horizontal |
| `from-transparent via-or-japonais to-transparent` | Effet de fondu |

#### Menu mobile (dropdown)

```vue
<ul v-show="isMenuOpen"
    class="md:hidden absolute top-full left-0 w-full
           bg-gradient-to-b from-bleu-nuit via-indigo-japonais
           to-bleu-nuit flex flex-col p-5 border-t-2
           border-or-japonais border-b-2 border-or-japonais/30">
```

| Classe | Signification |
|--------|---------------|
| `absolute` | Positionnement absolu |
| `top-full` | Juste en-dessous du header |
| `left-0 w-full` | Largeur 100% de l'écran |
| `flex-col` | Flexbox en colonne |
| `border-or-japonais/30` | Bordure dorée à 30% d'opacité |

---

### 2. `components/Footer.vue` - Pied de page

#### Structure générale

```vue
<footer class="bottom-0 w-full bg-gradient-to-b from-bleu-nuit
               via-indigo-japonais to-bleu-nuit py-10">
```

#### Grid 3 colonnes

```vue
<div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
```

| Classe | Signification |
|--------|---------------|
| `grid-cols-1` | 1 colonne sur mobile (empilé) |
| `md:grid-cols-3` | 3 colonnes sur tablette et desktop |
| `mb-8` | Marge inférieure de 2rem |

#### Liens de navigation avec effet

```vue
<NuxtLink class="relative text-slate-300 hover:text-or-japonais
                 transition-all duration-300 hover:pl-3 group
                 inline-block">
  <span class="absolute -left-3 opacity-0 group-hover:opacity-100
               group-hover:-left-2 transition-all duration-300
               text-or-japonais">
    ->
  </span>
  {{ link.label }}
</NuxtLink>
```

| Classe | Signification |
|--------|---------------|
| `hover:pl-3` | Ajoute padding gauche au survol (déplace le texte) |
| `group` | Pour contrôler la flèche au survol du lien |
| `inline-block` | Nécessaire pour appliquer padding/transform |
| `opacity-0` | Flèche invisible par défaut |
| `group-hover:opacity-100` | Flèche visible au survol |
| `group-hover:-left-2` | Animation de la flèche |

#### Icônes sociales

```vue
<a class="px-4 py-4 bg-gradient-to-br from-indigo-japonais/50
          to-bleu-nuit/50 rounded-lg transition-all duration-300
          border border-bleu-clair/30 hover:border-or-japonais
          hover:-translate-y-1 hover:scale-110">
  <img src="/images/icons/github.png" class="w-12 h-12" />
</a>
```

| Classe | Signification |
|--------|---------------|
| `bg-gradient-to-br` | Gradient du haut-gauche vers bas-droit |
| `from-indigo-japonais/50` | Couleur de départ à 50% d'opacité |
| `to-bleu-nuit/50` | Couleur de fin à 50% d'opacité |
| `border-bleu-clair/30` | Bordure bleue claire à 30% d'opacité |
| `hover:border-or-japonais` | Bordure dorée au survol |
| `hover:-translate-y-1` | Élévation de 4px |
| `hover:scale-110` | Agrandissement de 10% |
| `w-12 h-12` | Icônes de 48x48px |

#### Copyright

```vue
<div class="text-center pt-6 border-t border-or-japonais/40
            text-slate-400 text-sm">
  <p>&copy; {{ currentYear }} Ugo Gumbinger | 作 </p>
</div>
```

| Classe | Signification |
|--------|---------------|
| `pt-6` | Padding supérieur de 1.5rem |
| `border-t` | Bordure supérieure |
| `border-or-japonais/40` | Bordure dorée à 40% d'opacité |
| `text-slate-400` | Texte gris clair |

**Script :**

```javascript
const currentYear = new Date().getFullYear()
```

Calcule automatiquement l'année en cours.

---

## Données

### 1. `data/projects.js`

**Structure d'un projet :**

```javascript
{
  id: 1,
  title: "RAP NEWS",
  description: "Un site sur le rap français.",
  image: "/images/Musique.png",
  technologies: ["HTML", "CSS", "JS", "PHP", "SQLITE"],
  detailedDescription: `...`,
  challenges: "...",
  duration: "2 mois",
  date: "2022"
}
```

**Fonction utilitaire :**

```javascript
export function getProjectById(id) {
  return projects.find(project => project.id === parseInt(id))
}
```

Utilisée dans `pages/projects/[id].vue` pour récupérer un projet spécifique.

---

### 2. `data/skills.js`

**Structure d'une catégorie :**

```javascript
{
  id: 1,
  title: 'Langages',
  skills: [
    { name: 'HTML', icon: '/images/icons/Langages/HTML5.png' },
    { name: 'CSS', icon: '/images/icons/Langages/CSS3.png' },
    // ...
  ]
}
```

**Catégories :**
1. Langages
2. Frameworks & Bibliothèques
3. Bases de données & Design
4. Outils & IDE

Chaque catégorie a un `id` unique utilisé pour décaler le `autoplay` du carousel Swiper.

---

## Configuration

### 1. `nuxt.config.js`

**Configuration EmailJS :**

```javascript
runtimeConfig: {
  public: {
    emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  }
}
```

**Variables d'environnement requises (`.env`) :**

```
NUXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

**Modules Nuxt :**

```javascript
modules: ['@nuxtjs/tailwindcss']
```

Active l'intégration Tailwind CSS.

**Meta tags :**

```javascript
app: {
  head: {
    title: 'Ugo Gumbinger - Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Portfolio de Ugo Gumbinger - Étudiant en Pré Master of Science à Epitech Strasbourg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/nuage.png' }
    ]
  }
}
```

---

### 2. `tailwind.config.js`

**Couleurs personnalisées :**

```javascript
theme: {
  extend: {
    colors: {
      'bleu-nuit': '#1E3A5F',
      'indigo-japonais': '#2C4E80',
      'bleu-clair': '#4A90E2',
      'or-japonais': '#FFA559',
    }
  }
}
```

| Couleur | Valeur Hex | Utilisation |
|---------|-----------|-------------|
| `bleu-nuit` | #1E3A5F | Fond principal, texte CTA |
| `indigo-japonais` | #2C4E80 | Couleur intermédiaire gradients |
| `bleu-clair` | #4A90E2 | Bordures d'icônes sociales |
| `or-japonais` | #FFA559 | Accent principal (titres, boutons, bordures) |

**Utilisation :**

```vue
<!-- Fond -->
<div class="bg-bleu-nuit">

<!-- Texte -->
<h1 class="text-or-japonais">

<!-- Bordure -->
<div class="border-or-japonais">

<!-- Hover -->
<button class="hover:bg-indigo-japonais">
```

---

## Classes Tailwind Personnalisées

### Breakpoints Tailwind

| Préfixe | Largeur minimale | Appareils |
|---------|------------------|-----------|
| (défaut) | 0px | Mobile |
| `sm:` | 640px | Mobile large |
| `md:` | 768px | Tablette |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Grand écran |
| `2xl:` | 1536px | Très grand écran |

### Animations et Transitions

**Effets au survol utilisés :**

```css
hover:scale-105         /* Agrandissement de 5% */
hover:scale-110         /* Agrandissement de 10% */
hover:-translate-y-0.5  /* Élévation de 2px */
hover:-translate-y-1    /* Élévation de 4px */
hover:-translate-y-2    /* Élévation de 8px */
transition-all          /* Anime toutes les propriétés */
transition-transform    /* Anime uniquement les transformations */
transition-colors       /* Anime uniquement les couleurs */
duration-300            /* Durée d'animation de 300ms */
```

**Exemple complet :**

```vue
<div class="transition-all duration-300 hover:scale-105 hover:shadow-xl">
```

### Gradients

**Directions :**

```css
bg-gradient-to-b   /* Du haut vers le bas */
bg-gradient-to-r   /* De gauche à droite */
bg-gradient-to-br  /* Du haut-gauche vers bas-droit */
```

**Couleurs avec opacité :**

```css
from-bleu-nuit        /* Couleur de départ 100% */
from-bleu-nuit/50     /* Couleur de départ 50% d'opacité */
border-or-japonais/30 /* Bordure à 30% d'opacité */
```

### Spacing (espacement)

| Classe | Valeur | Pixels |
|--------|--------|--------|
| `p-4` | 1rem | 16px |
| `py-20` | 5rem | 80px |
| `gap-8` | 2rem | 32px |
| `space-y-3` | 0.75rem | 12px (entre enfants) |
| `mb-16` | 4rem | 64px |

### Sizing (tailles)

**Largeurs :**

```css
w-full          /* 100% */
w-12            /* 3rem = 48px */
max-w-[250px]   /* Largeur max personnalisée */
max-w-md        /* 28rem = 448px */
max-w-7xl       /* 80rem = 1280px (conteneur principal) */
```

**Hauteurs :**

```css
h-32            /* 8rem = 128px */
min-h-screen    /* 100vh */
min-h-[600px]   /* Hauteur min personnalisée */
max-h-[650px]   /* Hauteur max personnalisée */
```

### Typography (typographie)

**Tailles de police :**

| Classe | Taille | Pixels |
|--------|--------|--------|
| `text-sm` | 0.875rem | 14px |
| `text-base` | 1rem | 16px |
| `text-xl` | 1.25rem | 20px |
| `text-2xl` | 1.5rem | 24px |
| `text-3xl` | 1.875rem | 30px |
| `text-4xl` | 2.25rem | 36px |
| `text-5xl` | 3rem | 48px |
| `text-6xl` | 3.75rem | 60px |

**Graisses de police :**

| Classe | Valeur | Usage |
|--------|--------|-------|
| `font-medium` | 500 | Labels |
| `font-semibold` | 600 | CTA |
| `font-bold` | 700 | Titres |

**Espacement de lettres :**

```css
tracking-wider   /* 0.05em */
tracking-widest  /* 0.1em (logo) */
```

### Flexbox & Grid

**Flexbox :**

```css
flex              /* Active flexbox */
flex-col          /* Direction colonne */
items-center      /* Centre vertical */
justify-center    /* Centre horizontal */
justify-between   /* Espacement max entre éléments */
gap-4             /* Espacement entre enfants */
flex-grow         /* Prend l'espace disponible */
flex-shrink-0     /* N'accepte pas de rétrécir */
flex-wrap         /* Retour à la ligne */
```

**Grid :**

```css
grid                  /* Active grid */
grid-cols-1           /* 1 colonne */
md:grid-cols-2        /* 2 colonnes sur tablette */
lg:grid-cols-3        /* 3 colonnes sur desktop */
lg:col-span-2         /* Occupe 2 colonnes */
gap-8                 /* Espacement entre cellules */
```

### Borders & Shadows

**Bordures :**

```css
border            /* Bordure 1px */
border-2          /* Bordure 2px */
border-4          /* Bordure 4px */
border-b          /* Bordure inférieure uniquement */
border-l-2        /* Bordure gauche 2px */
rounded-lg        /* Bordures arrondies moyennes (8px) */
rounded-xl        /* Bordures très arrondies (12px) */
rounded-full      /* Bordures complètement arrondies (cercle/pilule) */
```

**Ombres :**

```css
shadow-lg         /* Ombre portée importante */
shadow-2xl        /* Ombre portée très prononcée */
hover:shadow-lg   /* Ajoute ombre au survol */
```

### Positioning

```css
relative          /* Positionnement relatif */
absolute          /* Positionnement absolu */
sticky            /* Reste collé lors du scroll */
top-0             /* Position 0 du haut */
bottom-0          /* Position 0 du bas */
left-0            /* Position 0 de la gauche */
-left-[41px]      /* Décalage négatif personnalisé */
z-50              /* Index Z de 50 */
```

### States & Pseudo-classes

```css
hover:            /* Au survol */
focus:            /* Au focus (input) */
active:           /* Au clic */
disabled:         /* Quand désactivé */
group-hover:      /* Quand le parent .group est survolé */
```

### Utilities diverses

```css
overflow-hidden      /* Cache les débordements */
whitespace-pre-line  /* Préserve les retours à la ligne */
leading-relaxed      /* Hauteur de ligne confortable (1.625) */
list-none            /* Retire les puces de liste */
uppercase            /* Texte en majuscules */
cursor-pointer       /* Curseur main au survol */
resize-y             /* Redimensionnement vertical */
object-cover         /* Remplit cadre en gardant proportions */
opacity-90           /* Opacité à 90% */
```

---

## Bibliothèques JavaScript Utilisées

### 1. Typed.js

**Installation :**

```bash
npm install typed.js
```

**Usage ([index.vue](pages/index.vue#L130-L137)) :**

```javascript
import Typed from 'typed.js'

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
```

### 2. Swiper.js

**Installation :**

```bash
npm install swiper
```

**Usage ([index.vue](pages/index.vue#L117-L118)) :**

```javascript
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
```

### 3. EmailJS

**Installation :**

```bash
npm install @emailjs/browser
```

**Usage ([contact.vue](pages/contact.vue#L138)) :**

```javascript
import emailjs from '@emailjs/browser'
```

### 4. Cursor Effects

**Installation :**

```bash
npm install cursor-effects
```

**Usage ([app.vue](pages/app.vue#L12-L15)) :**

```javascript
import('cursor-effects').then((module) => {
  new module.fairyDustCursor({
    colors: ['#FFA559']
  })
})
```

---

## Bonnes Pratiques Appliquées

### 1. Responsive Design

- **Mobile First** : Classes de base pour mobile, puis ajout de préfixes `md:` et `lg:`
- **Breakpoints cohérents** : Utilisation systématique des breakpoints Tailwind
- **Images adaptatives** : `max-w-[250px] md:max-w-md` pour contrôle précis

### 2. Performance

- **Import dynamique** : `import('cursor-effects')` chargé uniquement côté client
- **Lazy loading** : Images chargées à la demande
- **Transitions optimisées** : `transition-transform` plus performant que `transition-all` pour animations

### 3. Accessibilité

- **Labels associés** : `for="name"` lié à `id="name"`
- **Attributs ARIA** : `aria-label="Menu"` pour bouton hamburger
- **Contraste suffisant** : Texte gris foncé sur fond blanc
- **Focus visible** : `focus:border-indigo-japonais` sur les inputs

### 4. UX

- **Feedback visuel** : Hover states sur tous les éléments interactifs
- **Messages de confirmation** : Succès/erreur après envoi formulaire
- **Breadcrumbs** : "← Retour à l'accueil" sur pages détail
- **Loading states** : `isSubmitting` pour désactiver le bouton pendant l'envoi

### 5. Code

- **Composables Nuxt** : `useRoute()`, `useRuntimeConfig()`
- **Computed properties** : Calculs réactifs pour `project` et `otherProjects`
- **Separation of concerns** : Données séparées dans `data/`
- **Conventions de nommage** : PascalCase pour composants, kebab-case pour classes

---

## Améliorations Possibles

### 1. SEO

- Ajouter balises Open Graph pour partage social
- Créer un sitemap.xml
- Ajouter structured data (JSON-LD)

### 2. Performance

- Optimiser les images (WebP, lazy loading)
- Mettre en place un CDN
- Activer la compression Gzip/Brotli

### 3. Fonctionnalités

- Mode sombre (dark mode)
- Internationalisation (FR/EN)
- Filtres par technologie sur les projets
- Animations au scroll (AOS, Framer Motion)

### 4. Accessibilité

- Ajouter skip links
- Navigation au clavier améliorée
- Mode high contrast

---

## Conclusion

Ce portfolio utilise une stack moderne et performante :

- **Nuxt 3** pour le framework
- **Vue 3** avec Composition API
- **Tailwind CSS** pour le styling
- **EmailJS** pour le formulaire de contact

Le design suit une **identité visuelle cohérente** avec le thème japonais (couleurs bleu nuit + or) et offre une **expérience utilisateur fluide** avec des animations subtiles et un responsive design soigné.

---

**Auteur :** Ugo Gumbinger
**Date :** Octobre 2025
**Technologies :** Nuxt.js, Vue.js, Tailwind CSS
**Contact :** ugo.gumbinger@epitech.eu
