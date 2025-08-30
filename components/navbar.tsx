"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {Github, Linkedin} from "lucide-react"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {ThemeToggle} from "@/components/theme-toggle"
import {useEffect, useState} from "react"
import Image from "next/image"

const NAV_ITEMS = [
    {name: "Bonjour", href: "/"},
    { name: "Apprenez à me connaître", href: "#learnAboutMe" },
    {name: "Travaux sélectionnés", href: "#projects"},
    {name: "Testimonials", href: "#testimonials"},
    {name: "Contact", href: "#contact"},
]

export default function Navbar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeItem, setActiveItem] = useState("/")

    // Use stable NAV_ITEMS constant to avoid recreating array on each render
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
    }, [pathname])

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
    }, [navItems])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-200",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <div
                            className="h-8 w-8 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                            {/* Two Image components toggled by Tailwind's dark class to match footer behavior */}
                            <Image src="/Logo.svg" alt="Logo" width={32} height={32} className="block dark:hidden" />
                            <Image src="/Logo-white.svg" alt="Logo" width={32} height={32} className="hidden dark:block" />
                        </div>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveItem(item.href)}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    activeItem === item.href ? "text-black dark:text-white font-semibold" : "text-muted-foreground",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <Link href="https://linkedin.com/in/ayoubgaouet" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                            <Linkedin className="h-5 w-5"/>
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </Link>
                    <Link href="https://github.com/Ayoub-Gaouet" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                            <Github className="h-5 w-5"/>
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}
