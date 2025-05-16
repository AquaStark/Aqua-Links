import { FaDiscord, FaGithub, FaTwitter, FaTelegram, FaGlobe } from "react-icons/fa"
import { SiVercel, SiGitbook } from "react-icons/si"

export const gameResources = [
  {
    href: "https://game-website.com",
    icon: <FaGlobe className="w-6 h-6" />,
    title: "Official Website",
    description: "Visit our main game website",
    className: "",
  },
  {
    href: "https://docs.gitbook.com/game",
    icon: <SiGitbook className="w-6 h-6" />,
    title: "Documentation",
    description: "Read our GitBook documentation",
    className: "",
  },
  {
    href: "https://game-frontend.vercel.app",
    icon: <SiVercel className="w-6 h-6" />,
    title: "Game Frontend",
    description: "Access our game frontend on Vercel",
    className: "",
  },
  {
    href: "https://github.com/username/game-repo",
    icon: <FaGithub className="w-6 h-6" />,
    title: "GitHub Repository",
    description: "Check out our open source code",
    className: "",
  },
  {
    href: "https://discord.gg/gamecommunity",
    icon: <FaDiscord className="w-6 h-6" />,
    title: "Discord Community",
    description: "Join our Discord server",
    className: "",
  },
  {
    href: "https://twitter.com/gamename",
    icon: <FaTwitter className="w-6 h-6" />,
    title: "Twitter",
    description: "Follow us on X (Twitter)",
    className: "",
  },
  {
    href: "https://t.me/gamechannel",
    icon: <FaTelegram className="w-6 h-6" />,
    title: "Telegram Channel",
    description: "Subscribe to our Telegram channel",
    className: "md:col-span-2",
  },
]
