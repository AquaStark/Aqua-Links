"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

interface LinkCardProps {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function LinkCard({ href, icon, title, description, className = "" }: LinkCardProps) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <motion.div variants={item} whileHover="hover" className={className}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20 h-full"
      >
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 bg-white/20 rounded-full flex-shrink-0">
          {icon}
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-white">{title}</h2>
          <p className="text-xs sm:text-sm text-white/80">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
