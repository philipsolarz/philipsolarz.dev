import type { Metadata } from "next"
import { Space_Mono } from 'next/font/google'
import "./globals.css"
import { ParticleBackground } from "@/components/particle-background"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Philip Solarz - Software Engineer",
  description: "Personal portfolio of Philip Solarz, Software Engineer and Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.variable}>
        {children}
        <ParticleBackground />

      </body>
    </html>
  )
}

