import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`relative block ${className}`}>
      <Image src="/logo.png" alt="Aqua Stark Logo" width={150} height={75} className="w-full h-auto" priority />
    </Link>
  )
}
