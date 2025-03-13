import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function AboutPage() {
    return (
        <main className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-background via-background/80 to-background/60">
            <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Un peu d&apos;information sur moi</h1>
                <p className="text-xl text-muted-foreground mb-16">Qui je suis et ce que je fais.</p>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold uppercase mb-4">QUI SUIS-JE ?</h2>
                            <p className="text-muted-foreground">
                                Je suis Ayoub Gaouet (prononcé &apos;GAWAT&apos;), un développeur Full-Stack Web et
                                Mobile, et UI/UX
                                Designer basé à Nabeul, Tunisie 🇹🇳
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold uppercase mb-4">CE QUE JE FAIS</h2>
                            <p className="text-muted-foreground">
                                Fort de ma formation en Génie Logiciel et d’expériences professionnelles diversifiées,
                                je me spécialise dans le développement web et mobile ainsi que dans le design UI/UX.
                                Lors de mon stage chez Code Temple, j’ai mené le développement d’une application web et
                                mobile facilitant la communication entre établissements scolaires, parents et élèves, en
                                déployant plus de 505 user stories et en appliquant des méthodologies agiles telles que
                                SCRUM et SAFe, tout en intégrant le Design Thinking. J’ai ainsi pu exploiter des
                                technologies modernes comme Flutter, Laravel, Android Studio, Firebase et PhpStorm pour
                                concevoir des solutions robustes et innovantes. Actuellement, chez SYMATIQUE, je mets à
                                profit mes compétences en développement mobile Android en optimisant, déboguant et
                                déployant des applications sur le Google Play Store, tout en collaborant à la création
                                d’interfaces intuitives avec Figma. Cette synergie entre technique et créativité me
                                permet de fournir des solutions toujours centrées sur l’utilisateur.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold uppercase mb-4">CE QUE J&apos;AI FAIT</h2>
                            <p className="text-muted-foreground">
                                Avant de plonger dans le domaine du développement web et mobile Full-Stack, j&apos;ai
                                passé cinq ans en
                                tant que graphiste. Cette expérience m&apos;a permis d&apos;acquérir un sens aigu de
                                l&apos;esthétique
                                et une compréhension profonde des principes de conception centrée sur
                                l&apos;utilisateur, ce qui me
                                permet de combiner harmonieusement fonctionnalité et attrait visuel dans chaque projet
                                que
                                j&apos;entreprends.
                            </p>
                        </div>

                        <div className="pt-4">
                            <p className="text-muted-foreground mb-2">
                                N&apos;hésitez pas à me contacter par{" "}
                                <Link href="mailto:contact@ayoubgaouet.com" className="text-primary hover:underline">
                                    e-mail
                                </Link>.
                            </p>
                            <p className="text-muted-foreground mb-8">
                                Vous voulez savoir où j&apos;ai travaillé ? Consultez mon{" "}
                                <Link href="/cv.pdf" className="text-primary hover:underline">
                                    CV
                                </Link>{" "}
                                ou connectez-vous avec moi sur{" "}
                                <Link href="https://linkedin.com/in/ayoubgaouet"
                                      className="text-primary hover:underline">
                                    LinkedIn
                                </Link>
                                .
                            </p>

                            <div className="mb-12">
                                <Image
                                    src="/signature.svg"
                                    alt="Ayoub Gaouet signature"
                                    width={200}
                                    height={80}
                                    className="dark:invert"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="bg-black rounded-lg overflow-hidden max-w-md">
                                <Image src="/squarePortrait.svg" alt="Ayoub Gaouet" width={500} height={600}
                                       className="object-cover"/>
                            </div>

                            {/*<div className="flex justify-center mt-10">*/}
                            {/*    <Button className="px-6 gap-2 bg-black/80 hover:bg-black text-white backdrop-blur-sm" onClick={() => {*/}
                            {/*        //redirect to contact section*/}
                            {/*        window.location.href = "#contact"*/}

                            {/*    }}>*/}
                            {/*        <span>Get in touch</span>*/}
                            {/*        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"*/}
                            {/*             xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path*/}
                            {/*                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"*/}
                            {/*                fill="currentColor"*/}
                            {/*                fillRule="evenodd"*/}
                            {/*                clipRule="evenodd"*/}
                            {/*            ></path>*/}
                            {/*        </svg>*/}
                            {/*    </Button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

