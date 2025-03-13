import Image from "next/image"
import Link from "next/link"
import {Card} from "@/components/ui/card"

type Note = {
    title: string
    date: string
    readTime: string
    image: string
    category: "Dev" | "Design"
    link: string
}

const notes: Note[] = [
    {
        title: "Unleashing Innovation with Design Sprints: A Beginner’s Guide",
        date: "5 octobre 2024",
        readTime: "5 min read",
        image: "/unleashing.png",
        category: "Design",
        link: "https://www.linkedin.com/pulse/unleashing-innovation-design-sprints-beginners-guide-ayoub-gaouet-1n9qe/?trackingId=6AAJ72vMTWWqGckpR8HHsg%3D%3D",
    },
    {
        title: "MVVM (Model-View-ViewModel)",
        date: "4 octobre 2024",
        readTime: "5 min read",
        image: "/MVVM.png",
        category: "Dev",
        link: "https://www.linkedin.com/pulse/mvvm-model-view-viewmodel-ayoub-gaouet-w6kne/?trackingId=M%2FJ0kcadTzu%2FE3bJmWADqQ%3D%3D",
    },

]

export default function NotesPage() {
    const devNotes = notes.filter((note) => note.category === "Dev")
    const designNotes = notes.filter((note) => note.category === "Design")

    return (
        <main className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/80 to-background/60">
            <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Carnet de notes</h1>
                <p className="text-xl text-muted-foreground mb-16">Mes pensées, mes idées et mes réflexions</p>

                <div className="space-y-16">
                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Dev</h2>
                            <span className="text-muted-foreground">
                {devNotes.length} note{devNotes.length !== 1 ? "s" : ""}
              </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {devNotes.map((note, index) => (
                                <Link href={note.link} key={index}>
                                    <Card
                                        className="group overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="relative aspect-square">
                                            <Image
                                                src={note.image || "/placeholder.svg"}
                                                alt={note.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"/>
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                                <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                                                <p className="text-sm text-white/80">
                                                    {note.date} — {note.readTime}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Design</h2>
                            <span className="text-muted-foreground">
                {designNotes.length} note{designNotes.length !== 1 ? "s" : ""}
              </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {designNotes.map((note, index) => (
                                <Link href="#" key={index}>
                                    <Card
                                        className="group overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="relative aspect-square">
                                            <Image
                                                src={note.image || "/placeholder.svg"}
                                                alt={note.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"/>
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                                <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
                                                <p className="text-sm text-white/80">
                                                    {note.date} — {note.readTime}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

