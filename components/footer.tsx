import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Github, Linkedin} from "lucide-react"
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t py-8 md:py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div
                            className="h-8 w-8 rounded-full  flex items-center justify-center text-primary-foreground font-bold">
                            <Image src="/Logo.svg" alt="Logo" width={32} height={32}/>
                        </div>
                    </div>
                    <nav className="flex gap-6">
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                            Bonjour
                        </Link>
                        <Link href="#learnAboutMe" className="text-sm text-muted-foreground hover:text-foreground">
                            A propos de moi
                        </Link>
                        <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
                            Travaux sélectionnés
                        </Link>
                        <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground">
                            Testimonials
                        </Link>
                        <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://linkedin.com/in/ayoubgaouet" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5"/>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="https://github.com/Ayoub-Gaouet" target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5"/>
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-10">© {currentYear} Ayoub GAOUET. All rights
                reserved.</p>
        </footer>
    )
}