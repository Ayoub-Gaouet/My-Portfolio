"use client"

import type React from "react"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {toast} from "sonner"
import {submitContactForm} from "@/lib/actions"

import {Github, Linkedin, Mail, MapPin, Phone} from "lucide-react"
import {z} from "zod"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

type FormValues = z.infer<typeof formSchema>

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    // Handle form submission
    async function onSubmit(values: FormValues) {
        setIsSubmitting(true)

        try {
            // Submit the form data using a server action
            const result = await submitContactForm(values)

            if (result.success) {
                // Show success toast notification
                toast.success("Message sent successfully! We'll get back to you soon.", {
                    duration: 5000,
                    position: "top-center",
                })

                // Reset the form after successful submission
                form.reset()
            } else {
                // Show error toast notification with the specific error message
                toast.error(result.message || "Something went wrong. Please try again.", {
                    duration: 5000,
                    position: "top-center",
                })
            }
        } catch (error) {
            console.error("Form submission error:", error)

            // Show error toast notification for unexpected errors
            toast.error("An unexpected error occurred. Please try again later.", {
                duration: 5000,
                position: "top-center",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour discuter de vos idées.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Envoyez-moi un message</CardTitle>
                            <CardDescription>
                                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="your.email@example.com" {...field} />
                                                </FormControl>
                                                <FormDescription>Well never share your email with anyone
                                                    else.</FormDescription>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Subject</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Subject" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="How can we help you?"
                                                              className="min-h-[120px]" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations de contact</CardTitle>
                            <CardDescription>
                                Vous pouvez également me contacter directement via les coordonnées ci-dessous.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Mail className="h-5 w-5 text-[#6B7CFF] dark:text-[#8A98FF] mt-1"/>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">contact@ayoubgaouet.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-5 w-5 text-[#6B7CFF] dark:text-[#8A98FF] mt-1"/>
                                <div>
                                    <h3 className="font-medium">Téléphone</h3>
                                    <p className="text-muted-foreground">+216 51 479 343</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-[#6B7CFF] dark:text-[#8A98FF] mt-1"/>
                                <div>
                                    <h3 className="font-medium">Localisation</h3>
                                    <p className="text-muted-foreground">El Aouina, Tunis</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <h3 className="font-medium mb-3">Réseaux sociaux</h3>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="icon" asChild>
                                        <a href="https://linkedin.com/in/ayoubgaouet" target="_blank"
                                           rel="noopener noreferrer">
                                            <Linkedin className="h-5 w-5"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild>
                                        <a href="https://github.com/Ayoub-Gaouet" target="_blank"
                                           rel="noopener noreferrer">
                                            <Github className="h-5 w-5"/>
                                            <span className="sr-only">GitHub</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}