import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import GradientTitle from "@/components/gradient-title";

export default function LearnAboutMe() {
    const cards = [
        {
            title: "A propos de moi",
            subtitle: "Qui je suis et ce que je fais",
            href: "/about",
            image: "/avatar.png",
            imageAlt: "Avatar illustration",
        },
        {
            title: "Compétences",
            subtitle: "Langages et Frameworks, Outils de développement",
            href: "/skills",
            image: "/skills.png",
            imageAlt: "Tech stack icons",
        },
        {
            title: "Carnet de notes",
            subtitle: "Mes pensées, mes idées et mes réflexions",
            href: "/notes",
            image: "/deskNotes.png",
            imageAlt: "Notebook illustration",
        },
    ]

    return (
        <section id="learnAboutMe" className="py-20 bg-[#F3F4FF] dark:bg-slate-900">
            <div className="container">
                {/*<h2 className="text-4xl md:text-5xl font-bold text-center text-[#6B7CFF] dark:text-[#8A98FF] mb-16">*/}
                {/*    Apprenez à me connaître*/}
                {/*</h2>*/}
                <GradientTitle text="Apprenez à me connaître"/>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <Link key={card.title} href={card.href} className="block aspect-square">
                            <Card
                                className={cn(
                                    "group h-full w-full rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden",
                                    "bg-white dark:bg-slate-800",
                                )}
                            >
                                <CardContent className="p-8 flex flex-col h-full">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-center">{card.title}</h3>
                                        <p className="text-muted-foreground text-center mt-2">{card.subtitle}</p>
                                    </div>
                                    <div className="flex-grow flex items-center justify-center">
                                        <div className="relative w-3/4 h-3/4">
                                            <Image
                                                src={card.image || "/placeholder.svg"}
                                                alt={card.imageAlt}
                                                fill
                                                className={cn(
                                                    "object-contain group-hover:scale-105 transition-transform duration-300",
                                                    "dark:filter dark:brightness-90",
                                                )}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

