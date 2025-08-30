import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ArrowRight, DownloadCloud, Mail, Phone} from "lucide-react"

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <p className="text-xl text-muted-foreground">Bonjour ! Je suis</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#6B7CFF] dark:text-[#8A98FF]">
                            un développeur web et mobile
                        </h1>
                        <p className="text-xl text-muted-foreground">avec une passion pour le design UX/UI.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-5 w-5"/>
                                <span>gaouetayoub1@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-5 w-5"/>
                                <span>+216 51 479 343</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="rounded-full px-8  bg-[#6B7CFF] dark:bg-[#8A98FF]
                            ">Contact me<ArrowRight className="h-4 w-4"/>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-black dark:border-white border-2 px-8">
                                <a href="/cv.pdf" download>
                                    My resume <DownloadCloud className="h-4 w-4"/>
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-background bg-muted">
                            <Image src="/ayoub.jpg" alt="Profile" fill className="object-cover" priority/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
