import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aqua Stark - Links Hub",
  description: "A central hub for all Aqua Stark game resources and communities",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  generator: 'v0.dev',
  icons: {
    icon: "/fish.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
