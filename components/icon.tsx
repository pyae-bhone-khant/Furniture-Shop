import { DashboardIcon, DiscordLogoIcon, ExitIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons"
import { GithubIcon, Heart, HeartIcon, Layers2, Menu, Minus, MoveLeft, PlusIcon, SendHorizontal, Settings, SettingsIcon, StarIcon, Store, Twitter } from "lucide-react"

export type IconProp = React.SVGProps<SVGSVGElement>

export const Icons = {
  logo: (props: IconProp) => <Store {...props} />,
  home: HomeIcon,
  menu: Menu,
  arrow : SendHorizontal,
  twitter : Twitter,
  gitHub : GithubIcon,
  discord : DiscordLogoIcon,
  arrowback : MoveLeft,
  Layers : Layers2,
  Plus : PlusIcon,
  Star :  StarIcon,
  Heart : Heart,
  Minus : Minus,
  Dashboard : DashboardIcon,
  Setting : SettingsIcon,
  GearIcon : GearIcon,
  Exit : ExitIcon,
  
}