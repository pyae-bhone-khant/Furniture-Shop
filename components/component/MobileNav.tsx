"use client"

import { MainNavItem } from "@/type"
import Link from "next/link"
import { Icons } from "../icon"
import { SiteConfig } from "@/configs/site"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent, SheetTrigger
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "../ui/scroll-area"


interface MainNavProps {
    items? :MainNavItem[]
}


export default function MobileNav({items} : MainNavProps) {
    return (
        <div className="block  lg:hidden"> 
             <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu  aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 px-3 pr-2 pt-15" >
        <SheetClose asChild>

        <Link href={'/'} className="flex items-center ">
        <Icons.logo className="size-6 mr-2" />
        <span className="font-bold ">{SiteConfig.name}</span>
        <span className="sr-only">Home</span>
        </Link> 
        </SheetClose>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8" >
        <Accordion
      type="multiple"
      className="w-full border-b"
    >
      <AccordionItem value={items?.[0].title}>
        <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
        <AccordionContent>
            <div className="flex flex-col  items-start  space-y-2 pl-3">
          {items?.[0].card?.map((item) => (
            <SheetClose key={item.title}>

                <Link href={String(item.href)} className="text-foreground" >{item.title}</Link>
            </SheetClose>
          ))}
            </div>
                
        </AccordionContent>
      </AccordionItem>
    </Accordion>
       <div className="flex flex-col  items-start mt-2 space-y-2">
        {items?.[0].menu?.map((item) => (
             <SheetClose key={item.title} className="border-b">

                <Link href={String(item.href)} className="text-foreground" >{item.title}</Link>
            </SheetClose>
        ))}
       </div>

        </ScrollArea>
      </SheetContent>
    </Sheet>
             </div>
    )
}