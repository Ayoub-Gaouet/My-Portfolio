import Image from "next/image"
import Link from "next/link"
import GetInTouchButton from "@/components/get-in-touch-button"
import { aboutPage } from "@/data/about"

export default function AboutPage() {
    return (
        <main className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/80 to-background/60">
            <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{aboutPage.title}</h1>
                <p className="text-xl text-muted-foreground mb-16">{aboutPage.subtitle}</p>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold uppercase mb-4">{aboutPage.whoAmI.heading}</h2>
                            <p className="text-muted-foreground">{aboutPage.whoAmI.content}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold uppercase mb-4">{aboutPage.whatIDo.heading}</h2>
                            <p className="text-muted-foreground">{aboutPage.whatIDo.content}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold uppercase mb-4">{aboutPage.whatIDid.heading}</h2>
                            <p className="text-muted-foreground">{aboutPage.whatIDid.content}</p>
                        </div>

                        <div className="pt-4">
                            <p className="text-muted-foreground mb-2">
                                N&apos;hésitez pas à me contacter par {" "}
                                <Link href={`mailto:${aboutPage.contact.email}`} className="text-primary hover:underline">
                                    e-mail
                                </Link>
                                .
                            </p>
                            <p className="text-muted-foreground mb-8">
                                Vous voulez savoir où j&apos;ai travaillé ? Consultez mon {" "}
                                <Link href={aboutPage.contact.cvUrl} className="text-primary hover:underline">
                                    CV
                                </Link>{" "}
                                ou connectez-vous avec moi sur {" "}
                                <Link href={aboutPage.contact.linkedin} className="text-primary hover:underline">
                                    LinkedIn
                                </Link>
                                .
                            </p>

                            <div className="mb-12">
                                <Image
                                    src={aboutPage.images.signature.src}
                                    alt={aboutPage.images.signature.alt}
                                    width={aboutPage.images.signature.width}
                                    height={aboutPage.images.signature.height}
                                    className="dark:invert"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="bg-black rounded-lg overflow-hidden max-w-md">
                                <Image
                                    src={aboutPage.images.portrait.src}
                                    alt={aboutPage.images.portrait.alt}
                                    width={aboutPage.images.portrait.width}
                                    height={aboutPage.images.portrait.height}
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex justify-center mt-10">
                                <GetInTouchButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
