"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Github, Linkedin} from "lucide-react"
import Image from "next/image"
import {useState, useEffect} from "react"
import {usePathname} from "next/navigation"
import {cn} from "@/lib/utils"

const NAV_ITEMS = [
    {name: "Bonjour", href: "/"},
    {name: "Apprenez à me connaître", href: "#learnAboutMe"},
    {name: "Travaux sélectionnés", href: "#projects"},
    {name: "Testimonials", href: "#testimonials"},
    {name: "Contact", href: "#contact"},
]

export default function Footer() {
    const pathname = usePathname()
    const [activeItem, setActiveItem] = useState("/")
    const currentYear = new Date().getFullYear();

    // Use stable NAV_ITEMS constant
    const navItems = NAV_ITEMS

    useEffect(() => {
        // Initialize activeItem with current pathname
        if (pathname === "/") {
            setActiveItem("/")
        } else {
            // Check if any anchor in navItems matches the current URL hash
            const hash = window.location.hash
            if (hash) {
                const matchingItem = navItems.find(item => item.href === hash)
                if (matchingItem) {
                    setActiveItem(matchingItem.href)
                    return
                }
            }
            setActiveItem(pathname)
        }
    }, [pathname]);
    
    // Listen for hash changes to update active item
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash
            if (hash) {
                const matchingItem = navItems.find(item => item.href === hash)
                if (matchingItem) {
                    setActiveItem(matchingItem.href)
                }
            } else {
                setActiveItem("/")
            }
        }
        
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [navItems]);

    return (
        <footer className="border-t py-8 md:py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div
                            className="h-8 w-8 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                            {/* Two Image components toggled by Tailwind's dark class to match navbar behavior */}
                            <Image src="/Logo.svg" alt="Logo" width={32} height={32} className="block dark:hidden" />
                            <Image src="/Logo-white.svg" alt="Logo" width={32} height={32} className="hidden dark:block" />
                        </div>
                    </div>
                    <nav className="flex flex-wrap justify-center md:flex-nowrap md:justify-start gap-4 md:gap-6 max-w-full overflow-hidden">
                        <Link 
                            href="/" 
                            onClick={() => setActiveItem("/")}
                            className={cn(
                                "text-sm hover:text-foreground whitespace-nowrap",
                                activeItem === "/" ? "text-black dark:text-white font-semibold" : "text-muted-foreground"
                            )}
                        >
                            Bonjour
                        </Link>
                        <Link 
                            href="#learnAboutMe" 
                            onClick={() => setActiveItem("#learnAboutMe")}
                            className={cn(
                                "text-sm hover:text-foreground whitespace-nowrap",
                                activeItem === "#learnAboutMe" ? "text-black dark:text-white font-semibold" : "text-muted-foreground"
                            )}
                        >
                            Apprenez à me connaître
                        </Link>
                        <Link 
                            href="#projects" 
                            onClick={() => setActiveItem("#projects")}
                            className={cn(
                                "text-sm hover:text-foreground whitespace-nowrap",
                                activeItem === "#projects" ? "text-black dark:text-white font-semibold" : "text-muted-foreground"
                            )}
                        >
                            Travaux sélectionnés
                        </Link>
                        <Link 
                            href="#testimonials" 
                            onClick={() => setActiveItem("#testimonials")}
                            className={cn(
                                "text-sm hover:text-foreground whitespace-nowrap",
                                activeItem === "#testimonials" ? "text-black dark:text-white font-semibold" : "text-muted-foreground"
                            )}
                        >
                            Testimonials
                        </Link>
                        <Link 
                            href="#contact" 
                            onClick={() => setActiveItem("#contact")}
                            className={cn(
                                "text-sm hover:text-foreground whitespace-nowrap",
                                activeItem === "#contact" ? "text-black dark:text-white font-semibold" : "text-muted-foreground"
                            )}
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex gap-2 mt-4 md:mt-0">
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
            <p className="text-sm text-muted-foreground text-center mt-8">© {currentYear} Ayoub GAOUET. All rights
                reserved.</p>
        </footer>
    )
}