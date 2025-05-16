import { FaDiscord, FaGithub, FaTwitter, FaTelegram } from "react-icons/fa"
import { SiGitbook } from "react-icons/si"
import { FaFish } from "react-icons/fa6"

export const gameResources = [
  {
    href: "https://aqua-stark.gitbook.io/aqua-stark",
    icon: <SiGitbook className="w-6 h-6" />,
    title: "Documentation",
    description: "Read our GitBook documentation",
    className: "",
  },
  {
    href: "https://aqua-stark-jqu6utu04-josue19-08s-projects.vercel.app/",
    icon: <FaFish className="w-6 h-6" />,
    title: "Game Frontend",
    description: "Access our game frontend on Vercel",
    className: "",
  },
  {
    href: "https://github.com/AquaStark",
    icon: <FaGithub className="w-6 h-6" />,
    title: "GitHub Repository",
    description: "Check out our open source code",
    className: "",
  },
  {
    href: "https://discord.gg/9bCqGgjSEU",
    icon: <FaDiscord className="w-6 h-6" />,
    title: "Discord Community",
    description: "Join our Discord server",
    className: "",
  },
  {
    href: "https://x.com/aqua_stark",
    icon: <FaTwitter className="w-6 h-6" />,
    title: "Twitter",
    description: "Follow us on X (Twitter)",
    className: "",
  },
  {
    href: "https://t.me/aquastarkec",
    icon: <FaTelegram className="w-6 h-6" />,
    title: "Telegram Channel",
    description: "Subscribe to our Telegram channel",
    className: "col-span-1 sm:col-span-2",
  },
]
