"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projets", 0.5);

    return (
        <section ref={ref} id="projets" className="scroll-mt-28 mb-28">
            <SectionHeading>Mes projets</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectsData.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
