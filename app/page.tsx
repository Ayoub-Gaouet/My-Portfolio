import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import LearnAboutMe from "@/components/learn-about-me";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero/>
            <LearnAboutMe/>
            <Projects/>
            <Testimonials/>
            <Contact/>
        </main>
    )
}

