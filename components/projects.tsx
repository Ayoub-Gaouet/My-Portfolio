"use client"

import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {ArrowUpRight} from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Pole d'enseignement",
        description: "Plateforme Web et Mobile pour la gestion des communications entre les etablissements scoalires les parents et les eleves.",
        image: "/pole.png?height=600&width=800",
        tags: ["Laravel 11", "PHP 8.2", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "MariaDB", "Flutter", "Dart", "Firebase", "Hive"],
        categories: ["Web"],
        demoUrl: "https://www.pole-enseignement.com/",
        repoUrl: "#",
    },
    {
        id: 2,
        title: "Pole d'enseignement",
        description: "Plateforme Web et Mobile pour la gestion des communications entre les etablissements scoalires les parents et les eleves.",
        image: "/gpep.png?height=600&width=800",
        tags: ["Laravel 11", "PHP 8.2", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "MariaDB", "Flutter", "Dart", "Firebase", "Hive"],
        categories: ["Mobile"],
        demoUrl: "https://play.google.com/store/apps/details?id=com.codeTemple.gpep&hl=ln&pli=1",
        repoUrl: "#",
    },
    {
        id: 3,
        title: "PetWalker",
        description: "PetWalker est une application de garde d'animaux qui met en relation les propriétaires d'animaux avec des gardiens locaux. Les propriétaires d'animaux peuvent rechercher et réserver des gardiens, communiquer avec eux, consulter leur profil et leurs évaluations, et payer pour leurs services via l'application.",
        image: "/petwalker.png?height=600&width=800",
        tags: ["Research", "Define", "Ideate", "Prototype", "Test", "Figma", "FigJam"],
        categories: ["UX/UI"],
        demoUrl: "https://www.behance.net/gallery/177623143/Case-Study-Pet-Walker-App",
        repoUrl: "#",
    },
    {
        id: 4,
        title: "It For All",
        description: "Notre application incarne la philosophie « Apprendre par la pratique » de l'ITBS. Elle permet aux étudiants de valoriser leurs compétences à travers des projets d'excellence et facilite leur transition vers l'industrie en les mettant en relation avec des partenaires de renom.",
        image: "/itforall.png?height=600&width=800",
        tags: ["Flutter", "Dart", "State Management (GetX)", "Spring Boot", "Java", "MySQL", "REST API"],
        categories: ["Mobile"],
        demoUrl: "#",
        repoUrl: "#",
    },
    {
        id: 5,
        title: "eLeaning",
        description: "Plateforme web conçue pour la gestion intégrale d'un centre de formation. Elle centralise les inscriptions, la gestion des formations, des utilisateurs, des formateurs et des clients, tout en proposant une interface vitrine intuitive pour consulter l'offre de formation et s'inscrire facilement.",
        image: "/elearning.png?height=600&width=800",
        tags: ["Laravel 11", "PHP 8", "HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "MariaDB"],
        categories: ["Web"],
        demoUrl: "#",
        repoUrl: "https://github.com/Ayoub-Gaouet/Gestion-Centre-Des-Fromations-Laravel",
    },
    {
        id: 6,
        title: "Food Delivery App",
        description: "Application mobile de livraison de nourriture conçue pour les utilisateurs Android, offrant une solution rapide et intuitive pour commander des repas à domicile. Grâce à une interface ergonomique, un large choix culinaire et un suivi en temps réel, elle garantit une expérience optimale et sécurisée pour chaque commande.",
        image: "/fooddeliveryapp.png?height=600&width=800",
        tags: ["Android", "Java", "XML", "Firebase", "Google Maps API"],
        categories: ["Mobile"],
        demoUrl: "https://www.figma.com/deck/bxcCr8QrabqhPDE7nNvFtF",
        repoUrl: "https://github.com/Ayoub-Gaouet/Delivery-App-Geolocalisation-Java",
    },
    {
        id: 7,
        title: "My Portfolio",
        description: "Mon portfolio personnel présentant mes projets de développement web et mobile, mes designs UI/UX, et mon expertise dans la construction d'applications modernes. Construit avec passion et créativité !",
        image: "/portfolio.png?height=600&width=800",
        tags: ["Figma","Sketch","Adobe Illustrator","Adobe Photoshop"],
        categories: ["UX/UI"],
        demoUrl: "https://www.figma.com/proto/yaHregQPIBXiKGDitwQpT8/My-Portfolio-web-site?page-id=0%3A1&node-id=32-543&viewport=-6082%2C686%2C0.53&t=MtbWFHu6bl6uBSnX-1&scaling=scale-down&content-scaling=fixed",
        repoUrl: "#",
    },

]
const categories = ["All", "Web", "Mobile", "UX/UI"]

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [showAll, setShowAll] = useState(false)
    const filteredProjects =
        selectedCategory === "All" ? projects : projects.filter((project) => project.categories.includes(selectedCategory))
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

    return (
        <section id="projects" className="py-16 md:py-24 bg-muted/30">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Travaux sélectionnés</h2>
                    <p className="text-muted-foreground max-w-2xl mb-8">
                        Découvrez une sélection de mes projets récents, mettant en valeur mes compétences en
                        développement web et
                        mobile.
                    </p>

                    {/* Category filter buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                className="rounded-full px-6"
                                onClick={() => {
                                    setSelectedCategory(category)
                                    setShowAll(false) // Reset showAll when changing category
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {displayedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedProjects.map((project) => (
                            <Card key={project.id} className="overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    {project.demoUrl !== "#" && (
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href={project.demoUrl}>
                                                Live Demo
                                                <ArrowUpRight className="ml-2 h-4 w-4"/>
                                            </Link>
                                        </Button>
                                    )}
                                    {project.repoUrl !== "#" && (
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href={project.repoUrl}>
                                                GitHub
                                                <ArrowUpRight className="ml-2 h-4 w-4"/>
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">Aucun projet trouvé dans cette catégorie.</p>
                    </div>
                )}

                {/* Show "View All Projects" button only if there are more projects to show */}
                {filteredProjects.length > 3 && !showAll && (
                    <div className="flex justify-center mt-12">
                        <Button variant="outline" className="rounded-full px-8" onClick={() => setShowAll(true)}>
                            View All Projects
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}