import { HomeIcon } from "@radix-ui/react-icons"
import { LucideProps, Menu, SendHorizontal, Store } from "lucide-react"

export type IconProp = React.SVGProps<SVGSVGElement>

export const Icons = {
  logo: (props: IconProp) => <Store {...props} />,
  home: HomeIcon,
  menu: Menu,
  arrow : SendHorizontal
}