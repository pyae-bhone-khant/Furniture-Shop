"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MainNavItem } from "@/type"
import Link from "next/link"
import { Icons } from "../icon"
import { SiteConfig } from "@/configs/site"

interface MainNavProps {
    items? :MainNavItem[]
}

export default function MainNav ({items} : MainNavProps ) {
    return (
        <div className="hidden gap-6 lg:flex">
  <Link  href={'/'} className=" items-center space-x-2 flex " >
  <Icons.logo className="size-7"  aria-hidden="true" />
  <span className="font-bold inline-block">Furniture Shop</span>
  <span className="sr-only">Home</span>
  </Link>
             <NavigationMenu>
      <NavigationMenuList>
        {items?.[0]?.card ? (
        <NavigationMenuItem>
          <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <li className="flex gap-3"> 
                <NavigationMenuLink className="mt-15 bg-gray-100"  asChild>
                <Link href={'/'} className="flex size-full  select-none flex-col justify-end rounded-md ">
                 <Icons.logo className="size-6" aria-hidden="true" />
                 <div className="mb-2 mt-4 text-lg font-medium ">Furniture Shop</div>
                 <p className="text-sm   leading-tight text-muted-foreground">{SiteConfig.description}</p>
                </Link>
                </NavigationMenuLink>
                <div>

              {items[0].card.map((item) => (
                
                <ListItem  href={String(item.href)} title={item.title}  key={item.title}>{item.description}</ListItem>
              )
            )}
                </div>
            </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        ) : null} 
        {items?.[0]?.menu &&  items[0].menu.map((item) => (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={`/${item.href}`}>{item.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={String(href)} >
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li> 
  ) 
}