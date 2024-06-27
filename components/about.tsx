// "use client";
// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
//
// export default function About() {
//   const { ref } = useSectionInView("À propos");
//
//   return (
//       <motion.section
//           ref={ref}
//           className="flex flex-wrap justify-center items-center gap-8 mb-28 sm:mb-40 scroll-mt-28"
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.175 }}
//           id="apropos"
//       >
//         <div className="w-full md:w-1/3 p-4">
//           <img src="/about-photo.jpg" alt="About Me" className="rounded-lg shadow-lg max-w-full h-auto" />
//         </div>
//         <div className="w-full md:w-2/3 max-w-[45rem] text-center md:text-left leading-8 p-4">
//           <SectionHeading>A propos de moi</SectionHeading>
//           <p className="mb-3">
//             je suis un <span className="font-medium">développeur Web et mobile </span>passionné par le <span className="font-medium">design UI/UX</span>. Mon expertise couvre PHP, JavaScript, Angular, Flutter/Dart et Java Spring Boot, complétée par des outils UI/UX comme Figma et Adobe XD.
//             Je suis titulaire d'un diplôme en <span className="font-medium">développement de systèmes d'information</span> et j'apporte un riche mélange de compétences techniques et de sens du design.
//             Je m'épanouit dans les environnements collaboratifs et je suis toujours désireux de relever de nouveaux défis dans un monde technologique en constante évolution.
//           </p>
//         </div>
//       </motion.section>
//   );
// }
