"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

type Skill = string;
type SkillCategory = {
    name: string;
    skills: Skill[];
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Compétences");

    const skillCategories: SkillCategory[] = [
        { name: "Technologie Web", skills: ["PHP 8 (Laravel 8, Symfony 6)", "HTML 5", "CSS 3 (Bootstrap, Materialize CSS)", "JavaScript", "JAVA EE", "Angular", "Java Spring Boot 3"] },
        { name: "Technologie Mobile", skills: ["Flutter/Dart", "Android"] },
        { name: "UX/UI", skills: ["Figma", "Adobe XD"] },
        { name: "Bases de données", skills: ["MySQL/MariaDB", "Firebase", "SQL", "PL/SQL"] },
        { name: "Conception & Normes", skills: ["UML","MVC","MVVM"] },
        { name: "API", skills: ["REST"] },
        { name: "Outils", skills: ["Plesk", "FireBase","Wamp","Oracle Database","SQL Developer","PhpStorm", "intellig IDEA", "Vs Code", "WireframeScatcher", "Postman"] },
        { name: "Système d'exploitation", skills: ["Windows", "Linux", "Android"] },
        { name: "Versionning", skills: ["Git", "GitHub", "Bitbucket","SourceTree"] },
    ];

    const renderSkills = (skills: Skill[]) => skills.map((skill, index: number) => (
        <motion.li
            className="bg-gray-200 border-black rounded-xl px-5 py-3 m-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
        >
            {skill}
        </motion.li>
    ));

    const halfLength = Math.ceil(skillCategories.length / 2);
    const firstHalf = skillCategories.slice(0, halfLength);
    const secondHalf = skillCategories.slice(halfLength);

    return (
        <section id="compétences" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-left sm:mb-40 ">
            <SectionHeading>Compétences techniques</SectionHeading>
            <div className="flex flex-col md:flex-row  ">
                <div className="md:w-1/2">
                    {firstHalf.map(({ name, skills }) => (
                        <div key={name} className="my-4">
                            <h3 className="text-xl font-semibold">{name}</h3>
                            <ul className="flex flex-wrap justify-start">{renderSkills(skills)}</ul>
                        </div>
                    ))}
                </div>
                <div className="md:w-1/2">
                    {secondHalf.map(({ name, skills }) => (
                        <div key={name} className="my-4">
                            <h3 className="text-xl font-semibold">{name}</h3>
                            <ul className="flex flex-wrap justify-start">{renderSkills(skills)}</ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}