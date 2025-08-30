export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  categories: string[]
  demoUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pole d'enseignement",
    description:
      "Plateforme Web et Mobile pour la gestion des communications entre les etablissements scoalires les parents et les eleves.",
    image: "/pole.png?height=600&width=800",
    tags: [
      "Laravel 11",
      "PHP 8.2",
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "MariaDB",
      "Flutter",
      "Dart",
      "Firebase",
      "Hive",
    ],
    categories: ["Web"],
    demoUrl: "https://www.pole-enseignement.com/",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Pole d'enseignement",
    description:
      "Plateforme Web et Mobile pour la gestion des communications entre les etablissements scoalires les parents et les eleves.",
    image: "/gpep.png?height=600&width=800",
    tags: [
      "Laravel 11",
      "PHP 8.2",
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "MariaDB",
      "Flutter",
      "Dart",
      "Firebase",
      "Hive",
    ],
    categories: ["Mobile"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.codeTemple.gpep&hl=ln&pli=1",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "PetWalker",
    description:
      "PetWalker est une application de garde d'animaux qui met en relation les propriétaires d'animaux avec des gardiens locaux. Les propriétaires d'animaux peuvent rechercher et réserver des gardiens, communiquer avec eux, consulter leur profil et leurs évaluations, et payer pour leurs services via l'application.",
    image: "/petwalker.png?height=600&width=800",
    tags: ["Research", "Define", "Ideate", "Prototype", "Test", "Figma", "FigJam"],
    categories: ["UX/UI"],
    demoUrl:
      "https://www.behance.net/gallery/177623143/Case-Study-Pet-Walker-App",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "It For All",
    description:
      "Notre application incarne la philosophie « Apprendre par la pratique » de l'ITBS. Elle permet aux étudiants de valoriser leurs compétences à travers des projets d'excellence et facilite leur transition vers l'industrie en les mettant en relation avec des partenaires de renom.",
    image: "/itforall.png?height=600&width=800",
    tags: ["Flutter", "Dart", "State Management (GetX)", "Spring Boot", "Java", "MySQL", "REST API"],
    categories: ["Mobile"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "eLeaning",
    description:
      "Plateforme web conçue pour la gestion intégrale d'un centre de formation. Elle centralise les inscriptions, la gestion des formations, des utilisateurs, des formateurs et des clients, tout en proposant une interface vitrine intuitive pour consulter l'offre de formation et s'inscrire facilement.",
    image: "/elearning.png?height=600&width=800",
    tags: ["Laravel 11", "PHP 8", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "MariaDB"],
    categories: ["Web"],
    demoUrl: "#",
    repoUrl:
      "https://github.com/Ayoub-Gaouet/Gestion-Centre-Des-Fromations-Laravel",
  },
  {
    id: 6,
    title: "Food Delivery App",
    description:
      "Application mobile de livraison de nourriture conçue pour les utilisateurs Android, offrant une solution rapide et intuitive pour commander des repas à domicile. Grâce à une interface ergonomique, un large choix culinaire et un suivi en temps réel, elle garantit une expérience optimale et sécurisée pour chaque commande.",
    image: "/fooddeliveryapp.png?height=600&width=800",
    tags: ["Android", "Java", "XML", "Firebase", "Google Maps API"],
    categories: ["Mobile"],
    demoUrl: "https://www.figma.com/deck/bxcCr8QrabqhPDE7nNvFtF",
    repoUrl:
      "https://github.com/Ayoub-Gaouet/Delivery-App-Geolocalisation-Java",
  },
  {
    id: 7,
    title: "My Portfolio",
    description:
      "Mon portfolio personnel présentant mes projets de développement web et mobile, mes designs UI/UX, et mon expertise dans la construction d'applications modernes. Construit avec passion et créativité !",
    image: "/portfolio.png?height=600&width=800",
    tags: ["Figma", "Sketch", "Adobe Illustrator", "Adobe Photoshop"],
    categories: ["UX/UI"],
    demoUrl:
      "https://www.figma.com/proto/yaHregQPIBXiKGDitwQpT8/My-Portfolio-web-site?page-id=0%3A1&node-id=32-543&viewport=-6082%2C686%2C0.53&t=MtbWFHu6bl6uBSnX-1&scaling=scale-down&content-scaling=fixed",
    repoUrl: "#",
  },
  {
    id: 8,
    title: "Lycée The Best",
    description:
      "Site Vitrine pour un lycée, mettant en avant les formations, les actualités et les événements. Conçu avec WordPress et Elementor pour une gestion facile du contenu.",
    image: "/lycee-the-best.png?height=600&width=800",
    tags: ["WordPress", "Elementor", "WooCommerce", "Bootstrap", "PHP", "JS", "CSS", "SCSS"],
    categories: ["Web"],
    demoUrl: "https://www.lycee-the-best.com/",
    repoUrl: "#",
  },
]

export const categories = ["All", "Web", "Mobile", "UX/UI"]

