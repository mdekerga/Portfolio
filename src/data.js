export const projects = [
  {
    title: "AlhaIZ Breizh",
    technologie: ["JS", "HTML/CSS", "POSTGRESQL", "PHP", "DOCKER", "Agile"],
    description:
      "Conception et développement d'une plateforme de location saisonnier pour une association.",
    image: "/images/projet1/project-1.png",
    images: [
      "/images/projet1/project-1.png",
      "/images/projet1/projet1_1.png",
      "/images/projet1/projet1_2.png",
      "/images/projet1/projet1_3.png",
    ],
    link: "https://github.com/mdekerga/Alhaiz-Breizh",
    universitaire: true,
    competences: ["Réaliser", "Administrer", "Gérer", "Conduire", "Collaborer"],
  },
  {
    title: "Système de recommandation de musique",
    technologie: ["POSTGRESQL", "PYTHON", "IA"],
    description:
      "Projet en cours d'un système pour recommander des musiques selon les goûts d'un utilisateur ou sa proximité avec d'autre utilisateur",
    image: "/images/projet7/muse.png",
    images: ["/images/projet7/muse.png"],
    link: "https://github.com/mdekerga/",
    universitaire: true,
    competences: ["Gérer", "Conduire", "Collaborer"],
  },
  {
    title: "Pokedex",
    technologie: ["HTML", "CSS", "JAVASCRIPT"],
    description: "Pokédex utilisant du Javascript, HTML et CSS",
    image: "/images/projet6/pokedex.png",
    images: ["/images/projet6/pokedex.png"],
    link: "https://github.com/mdekerga/Pokedex-JS",
    universitaire: true,
    competences: ["Réaliser"],
  },

  {
    title: "Actu Finances",
    technologie: ["PYTHON", "TKINTER", "YFINANCE"],
    description:
      "Développement d'un logiciel d'exploitation d'une base de données d'une API pour donner les actualités d'une entreprise.  ",
    image: "/images/projet2/project-2.png",
    images: ["/images/projet2/project-2.png"],
    link: "https://github.com/mdekerga/Actu-Finances",
    universitaire: false,
  },
  {
    title: "Puissance 4",
    technologie: ["C"],
    description:
      "Conception d'un jeu de puissance 4 en langage C pour que 2 personnes puissent y jouer.",
    image: "/images/projet3/project-3.png",
    images: ["/images/projet3/project-3.png"],
    link: "https://github.com/mdekerga/Puissance4",
    universitaire: true,
    competences: ["Realiser", "Optimiser"],
  },
  {
    title: "Portfolio",
    technologie: ["REACT", "TAILWIND"],
    description: "Le site sur lequel vous êtes.",
    image: "/images/projet4/project-4.png",
    images: ["/images/projet4/project-4.png"],
    link: "https://github.com/mdekerga/Portfolio",
    demo: "https://mathieudk.netlify.app/",
    universitaire: false,
  },
  {
    title: "Timber",
    technologie: ["C++", "SFML"],
    description:
      "Recréation d'un jeu dans lequel il faut couper un arbre et esquiver les branches en C++",
    image: "/images/projet5/project-5.jpeg",
    images: ["/images/projet5/project-5.jpeg"],
    link: "https://github.com/mdekerga/Timber",
    universitaire: false,
  },
  {
    title: "JobTracker",
    technologie: ["Vue.js", "PostgreSQL", "Tailwind"],
    description:
      "Conception et déploiement d'une application pour centraliser et gérer le suivi des recherches de stage.",
    image: "/images/projet5/project-5.jpeg",
    images: ["/images/projet11/projet11_1.png"],
    link: "https://github.com/mdekerga/job-tracker",
    demo: "https://mdekerga-jobtracker.vercel.app/",
    universitaire: false,
  },
  {
    title: "Anime Predictor",
    technologie: ["PYTHON", "TKINTER", "PANDAS"],
    description:
      "Développement d'un prédicteur de note d'un anime selon différents critères",
    image: "/images/projet9/projet9_1.png",
    images: ["/images/projet9/projet9_1.png", "/images/projet9/projet9_2.png"],
    link: "https://github.com/mdekerga/Anime",
    universitaire: true,
    competences: ["Gérer"],
  },
  {
    title: "API de gestion de personnel",
    technologie: ["Spring", "HTML", "d3.js"],
    description:
      "Conception d'une API avec Spring Boot pour l'administration du personnel, couplée à D3.js pour la visualisation.",
    image: "/images/projet3/project10_1.png",
    images: [
      "/images/projet10/projet10_1.png",
      "/images/projet10/projet10_2.png",
      "/images/projet10/projet10_3.png",
    ],
    link: "https://github.com/mdekerga/collaborateurs",
    universitaire: true,
    competences: ["Gérer"],
  },
];

export const diplomes = [
  {
    date: "2022-Présent",
    ecole: "Bachelor Universitaire Technologique Informatique",
    lieu: "IUT de Lannion",
    logo: "/images/Logo_IUT.png",
    description:
      "Parcours Réalisation d'Applications. Apprentissage du cycle complet de développement : de la conception (UML, Base de données) au déploiement, en passant par le développement Fullstack et la gestion de projet Agile.",
    skills: ["C", "Java", "SQL", "Scrum", "CI/CD"],
  },
  {
    date: "2022",
    ecole: "Baccalauréat Général",
    lieu: "Lycée-Notre dame du Kreisker",
    logo: "/images/lycee.png",
    description:
      "Sciences Économiques et Sociales et Numérique & Sciences Informatiques (NSI). Obtention avec Mention Assez Bien.",
    skills: ["Python", "Algorithmique", "Logique"],
  },
];

export const experiences = [
  {
    dateDebut: "04/25",
    dateFin: "05/25",
    emploi: "Stage Développeur Front",
    entreprise: "Brittany Ferries",
    description:
      "Conception et développement d’un outil d’analyse de l’accessibilité des applications internes de l’entreprise.",
    lieu: "Roscoff",
    technologie: ["node", "typescript", "playwright"],
    logo: "/images/bf.png",
    taches: [
      "Développement d'un outil qui reléve les erreurs d'accessibilités",
      "Intégration dans une pipeline afin d'automatiser l'outil",
      "Rédaction de documentation technique",
    ],
  },
];

export const skills = {
  FRONTEND: ["HTML", "CSS", "JAVASCRIPT"],
  BACKEND: ["PHP", "POSTGRESQL", "MONGODB"],
  PROGRAMMATION: ["C++", "JAVA", "PYTHON"],
  FRAMEWORK: ["DJANGO", "REACT", "LARAVEL", "SPRING"],
  OUTILS: ["VSC", "DOCKER", "GITHUB", "FIGMA"],
};

export const butSkills = [
  {
    nom: "Réaliser",
    description:
      "Concevoir, coder et tester des applications informatiques adaptées aux besoins des utilisateurs.",
  },
  {
    nom: "Optimiser",
    description:
      "Améliorer les performances des programmes en choisissant les structures de données et algorithmes appropriés.",
  },
  {
    nom: "Administrer",
    description:
      "Installer, configurer et sécuriser des systèmes, des réseaux et des environnements de déploiement.",
  },
  {
    nom: "Gérer",
    description:
      "Concevoir et exploiter des bases de données pour assurer la disponibilité et la cohérence des informations.",
  },
  {
    nom: "Conduire",
    description:
      "Gérer le cycle de vie d'un projet informatique en travaillant efficacement en équipe pour répondre aux besoins clients.",
  },
  {
    nom: "Collaborer",
    description:
      "Travailler efficacement en équipe informatique, communiquer avec les parties prenantes et s'adapter à l'environnement professionnel",
  },
];
