import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"
import GradientTitle from "@/components/gradient-title";

const testimonials = [
  {
    id: 1,
    content:
      "I had the pleasure of studying and working alongside Ayoub Gaouet on multiple projects in both mobile and web development fields. Ayoub consistently demonstrated an inspiring eagerness to learn and apply new knowledge.\n" +
        "\n" +
        "Throughout our collaborations, Ayoub showcased his skills in Full-Stack JS, Figma, and Android development. His commitment to following established methodologies and prioritizing user experience and data-driven thinking truly set him apart.",
    author: "Ilyes El Ouni",
    position: "MERN Stack Developer at Cynoia",
    avatar: "/ilyes.jpg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "Je recommande vivement ayoub gaouet, développeur web et mobile, et designer UX/UI, avec qui j'ai eu le plaisir de collaborer durant nos études.\n" +
        "\n" +
        "Ayoub gaouet possède une solide expertise dans le développement de sites web et d'applications mobiles",
    author: "Nada El Kamel",
    position: "Junior backend developer",
    avatar: "/nada.jpg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F3F4FF] dark:bg-slate-900">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          {/*<h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>*/}
          <GradientTitle text="Testimonials"/>
          <p className="text-muted-foreground max-w-2xl">
            Découvrez ce que mes clients et collaborateurs disent de mon travail et de mon professionnalisme.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="italic text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

