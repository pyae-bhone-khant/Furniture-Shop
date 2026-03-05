import { DiscordLogoIcon, HomeIcon } from "@radix-ui/react-icons"
import { Github, GithubIcon, LucideProps, Menu, MoveLeft, SendHorizontal, Store, Twitter } from "lucide-react"

export type IconProp = React.SVGProps<SVGSVGElement>

export const Icons = {
  logo: (props: IconProp) => <Store {...props} />,
  home: HomeIcon,
  menu: Menu,
  arrow : SendHorizontal,
  twitter : Twitter,
  gitHub : GithubIcon,
  discord : DiscordLogoIcon,
  arrowback : MoveLeft


}