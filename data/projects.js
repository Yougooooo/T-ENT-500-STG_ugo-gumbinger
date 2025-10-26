export const projects = [
  {
    id: 1,
    title: "RAP NEWS",
    description: "Un site sur le rap français.",
    image: "/images/Musique.png",
    technologies: ["HTML", "CSS", "JS", "PHP", "SQLITE"],
    //github: "https://github.com/votre-username/rap-news",
    detailedDescription: 
    `Site web dédié à l'actualité du rap français.

      Fonctionnalités principales :
      - Base de données d'users
      - Système de commentaires
      - Interface responsive

    Projet réalisé seul.`,

    challenges: "L'intégration de l'API de streaming musical et la gestion des métadonnées des artistes.",
    duration: "2 mois",
    date: "2022"
  },
  {
    id: 2,
    title: "Unistrabble",
    description: "Réalisation du jeu de plateau Scrabble",
    image: "/images/unistrabble.png",
    technologies: ["Godot(GDscript)", "PostgreSQL", "WebSocket"],
    //github: "https://github.com/votre-username/unistrabble",
    detailedDescription: 
    `Reproduction du célèbre jeu Scrabble en version numérique multijoueur.

      Fonctionnalités :
      - Mode multijoueur en temps réel
      - Dictionnaire français intégré
      - Système de score automatique
      - Chat en jeu
      - Sauvegarde de partie

      Projet réalisé en équipe de dix.`,

    challenges: "La validation des mots en temps réel et la gestion de la synchronisation entre joueurs.",
    duration: "4 mois",
    date: "2024"
  },
  {
    id: 3,
    title: "GO JOB",
    description: "Réalisation d'un Jobboard",
    image: "/images/GoJob.png",
    technologies: ["Vue.js", "TailwindCSS", "Flask", "MySQL"],
    //github: "https://github.com/votre-username/go-job",
    detailedDescription: 
    `Plateforme de recherche d'emploi moderne et intuitive.

      Fonctionnalités :
        - Recherche avancée d'offres
        - Système de candidature en ligne
        - Espace recruteur et candidat
        - Matching intelligent candidat/offre
        - Tableau de bord personnalisé

        Projet réalisé en équipe de deux.`,

    duration: "2 semaines",
    date: "2025"
  }
]

export function getProjectById(id) {
  return projects.find(project => project.id === parseInt(id))
}