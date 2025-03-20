"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Updated schema to include recaptchaToken
const contactFormSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(5),
    message: z.string().min(10),
    recaptchaToken: z.string().min(1, "reCAPTCHA verification is required"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY

        if (!secretKey) {
            console.error("reCAPTCHA secret key is not defined")
            return { success: false }
        }

        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token
            }).toString()
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.error("reCAPTCHA verification error:", error)
        return { success: false }
    }
}

export async function submitContactForm(formData: ContactFormData) {
    try {
        // Validate form data
        const validatedData = contactFormSchema.parse(formData)

        // Verify reCAPTCHA token
        const recaptchaResponse = await verifyRecaptcha(validatedData.recaptchaToken)

        if (!recaptchaResponse.success) {
            return {
                success: false,
                message: "La vérification reCAPTCHA a échoué. Veuillez réessayer.",
            }
        }

        // Construire le contenu de l'email
        const mailOptions = {
            from: validatedData.email,
            to: process.env.EMAIL_USER, // Your personal email
            subject: `📩 Nouveau message de ${validatedData.name}: ${validatedData.subject}`,
            text: `
        Nom: ${validatedData.name}
        Email: ${validatedData.email}
        Sujet: ${validatedData.subject}
        Message:
        ${validatedData.message}
    `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #333; text-align: center;">📩 Nouveau message reçu</h2>
            <hr style="border: none; border-top: 2px solid #ddd;">
            <p><strong>👤 Nom:</strong> ${validatedData.name}</p>
            <p><strong>✉️ Email:</strong> <a href="mailto:${validatedData.email}" style="color: #007bff;">${validatedData.email}</a></p>
            <p><strong>📌 Sujet:</strong> ${validatedData.subject}</p>
            <hr style="border: none; border-top: 1px solid #ddd;">
            <p style="line-height: 1.6; color: #555;"><strong>💬 Message:</strong></p>
            <div style="background: #fff; padding: 15px; border-radius: 5px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);">
                <p style="margin: 0; color: #333;">${validatedData.message.replace(/\n/g, "<br>")}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd;">
            <p style="text-align: center; font-size: 14px; color: #888;">📅 ${new Date().toLocaleString()}</p>
        </div>
    `,
        }

        // Envoyer l'email
        await transporter.sendMail(mailOptions)

        return {
            success: true,
            message: "Votre message a été envoyé avec succès !",
        }
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error)
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
            return {
                success: false,
                message: `Erreur de validation: ${errorMessages}`,
            }
        }

        return {
            success: false,
            message: "Une erreur est survenue lors de l'envoi de votre message.",
        }
    }
}
