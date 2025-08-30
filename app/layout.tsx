import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {ThemeProvider} from "next-themes";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ayoub GAOUET | Web & Mobile Developer",
  description: "Portfolio of a web and mobile developer with a passion for UX/UI design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}