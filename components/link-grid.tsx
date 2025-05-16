"use client"

import { motion } from "framer-motion"
import { LinkCard } from "@/components/link-card"
import { gameResources } from "@/data/resources"

export function LinkGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="grid w-full gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {gameResources.map((resource, index) => (
        <LinkCard
          key={index}
          href={resource.href}
          icon={resource.icon}
          title={resource.title}
          description={resource.description}
          className={resource.className}
        />
      ))}
    </motion.div>
  )
}
