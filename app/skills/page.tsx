import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Category =
    | "Technologie Web"
    | "Technologie Mobile"
    | "Framework"
    | "UX/UI"
    | "SGBD"
    | "API"
    | "Gestion de projet"
    | "Outils"
    | "Système d'exploitation"
    | "Versioning"

const skills: { category: Category; items: { name: string }[] }[] = [
    {
        category: "Technologie Web",
        items: [
            { name: "PHP 8.2 (Laravel 11, Symfony 6)" },
            { name: "HTML 5" },
            { name: "CSS 3 (Bootstrap, Materialize CSS)" },
            { name: "Javascript" },
            { name: "Angular" },
            { name: "JAVA EE" },
            { name: "Spring Boot 3" },
        ],
    },
    {
        category: "Technologie Mobile",
        items: [{ name: "Flutter/Dart" }, { name: "Android (Java)" }],
    },
    {
        category: "Framework",
        items: [
            { name: "Agile SCRUM (Daily, Sprint, User Story, Sprint review...)" },
            {
                name: "SAFe (WSJF, Customer Centricity, Design Thinking, Continuous Delivery Pipeline, Lean UX)",
            },
        ],
    },
    {
        category: "UX/UI",
        items: [{ name: "Figma" }, { name: "Adobe XD" }, { name: "WireframeSeacret" }],
    },
    {
        category: "SGBD",
        items: [{ name: "MySQL/MariaDB" }, { name: "FireBase" }, { name: "SQL" }],
    },
    {
        category: "API",
        items: [{ name: "REST" }],
    },
    {
        category: "Gestion de projet",
        items: [{ name: "Jira Software" }],
    },
    {
        category: "Outils",
        items: [
            { name: "Plesk" },
            { name: "Android Studio" },
            { name: "PhpStorm" },
            { name: "IntelliJ IDEA" },
            { name: "Vs Code" },
            { name: "Wamp" },
            { name: "Oracle Database" },
            { name: "Postman" },
        ],
    },
    {
        category: "Système d'exploitation",
        items: [{ name: "Windows" }, { name: "Linux" }, { name: "Android" }],
    },
    {
        category: "Versioning",
        items: [{ name: "Git" }, { name: "GitHub" }, { name: "GitLab" }, { name: "Bitbucket" }, { name: "SourceTree" }],
    },
]

const categoryDescriptions: Record<Category, string> = {
    "Technologie Web": "Développement d'applications web et API RESTful.",
    "Technologie Mobile": "Développement d'applications mobiles pour Android et iOS.",
    Framework: "Utilisation de méthodes agiles et de frameworks pour la gestion de projet.",
    "UX/UI": "Conception d'interfaces utilisateur et d'expériences utilisateur.",
    SGBD: "Conception et gestion de bases de données relationnelles.",
    API: "Création et consommation d'API RESTful.",
    "Gestion de projet": "Utilisation d'outils de gestion de projet pour la planification et le suivi des tâches.",
    Outils: "Utilisation d'outils de développement et de productivité.",
    "Système d'exploitation": "Utilisation de systèmes d'exploitation pour le développement et le test.",
    Versioning: "Utilisation de systèmes de contrôle de version pour la collaboration et le suivi des modifications.",
}

export default function SkillsPage() {
    return (
        <main className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/80 to-background/60">
            <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Compétences</h1>
                <p className="text-xl text-muted-foreground mb-16">Langages et Frameworks, Outils de développement</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skillGroup) => (
                        <Card key={skillGroup.category} className="border shadow-md">
                            <CardHeader>
                                <CardTitle>{skillGroup.category}</CardTitle>
                                <CardDescription>{categoryDescriptions[skillGroup.category]}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <Badge
                                            key={skill.name}
                                            variant="secondary"
                                            className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 transition-colors"
                                        >
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}

