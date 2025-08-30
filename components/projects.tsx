"use client"

import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {ArrowUpRight} from "lucide-react"
import {projects, categories} from "@/data/projects"

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