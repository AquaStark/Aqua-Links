"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/logo"
import { LinkGrid } from "@/components/link-grid"
import { BubblesBackground } from "@/components/bubbles-background"
import { useBubbles } from "@/hooks/use-bubbles"
import { Footer } from "@/components/footer"

export function LinksHub() {
  const [mounted, setMounted] = useState(false)
  const bubbles = useBubbles({
    initialCount: 30,
    maxBubbles: 50,
    minSize: 15,
    maxSize: 60,
    minDuration: 8,
    maxDuration: 25,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-700">
      {/* Bubbles Background */}
      <BubblesBackground bubbles={bubbles} />

      <div className="container relative z-10 px-4 py-6 mx-auto max-w-3xl">
        {/* Centered logo at the top */}
        <div className="flex justify-center mb-6">
          <Logo className="w-28 sm:w-32 md:w-36" />
        </div>

        {/* Main content */}
        <div>
          {/* Header */}
          <header className="flex flex-col items-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-2 sm:mb-4">
              Dive into our Game Ecosystem
            </h1>
            <p className="text-base sm:text-lg text-white/90 text-center mb-6 sm:mb-10 max-w-xl">
              Explore all the official resources and communities for our game project
            </p>
          </header>

          {/* Main Content */}
          <main className="flex flex-col items-center">
            <LinkGrid />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}
