import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import EcommerceApp from "@/public/EcommerceApp.png";
import pet from "@/public/pet.png";

export const links = [
  {
    name: "Accueil",
    hash: "#accueil",
  },
  // {
  //   name: "À propos",
  //   hash: "#apropos",
  // },
  {
    name: "Projets",
    hash: "#projets",
  },
  {
    name: "Compétences",
    hash: "#compétences",
  },
  {
    name: "Expérience",
    hash: "#expérience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Licence en Développement des systèmes d information",
    location: "Institut Supérieur des Études Technologiques de Nabeul (ISET Nabeul)",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "Juin 2024 (En Cours)",
  },

  {
    title: "Developpeur Mobile",
    location: "Code Temple",
    description:
      "Application mobile E-Commerce avec Flutter/Dart et API REST Laravel 8/Mysql ",
    icon: React.createElement(CgWorkAlt),
    date: "Juin 2023 - Septembre 2023",
  },
  {
    title: "Developpeur Full Stack Web",
    location: "Code Temple",
    description: "Application web de gestion des gardes d animaux de compagnie",
    icon: React.createElement(CgWorkAlt),
    date: "Janvier 2023 Février 2023",
  },
  {
    title: "Developpeur Web",
    location: "Code Temple",
    description: "Site web E-Commerce avec WordPress (www.changeofmind.com)\n" +
        "Creation de Logo , Charte graphique et conception des produit\n" +
        "pour client de l entreprise",
    icon: React.createElement(CgWorkAlt),
    date: "Janvier 2022 Février 2022",
  },
  {
    title: "Baccalauréat en informatique",
    location: "Lycee dar chaaben el fehrie",
    description: "",

    icon: React.createElement(LuGraduationCap),
    date: "Juin 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Application mobile E-Commerce",
    description: "J'ai travaillé en tant que développeur mobile sur ce projet de startup pendant 3 mois. Les utilisateurs peuvent acheter des articles en ligne a partir cette application.",
    tags: ["PhpStorm", "Wamp", "Laravel 8", "PHP 8", "MariaDB", "Bitbucket", "Firebase", "REST", "Postman", "Flutter", "Dart", "State Management GetX", "IntelliJ IDEA", "Plesk"],
    imageUrl: EcommerceApp,
  },
  {
    "title": "Application web de gestion des gardes d’animaux de compagnie",
    "description": "Création d'une application web pour automatiser la gestion des gardes d'animaux. Elle permet aux utilisateurs de gérer efficacement les réservations et suivis.",
    "tags": ["PHP", "Laravel", "jQuery", "MySQL", "PhpStorm", "Bootstrap", "HTML5", "WAMP", "CSS"],
    imageUrl: pet,
  }
] as const;
