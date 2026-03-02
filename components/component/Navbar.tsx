import { SiteConfig } from "@/configs/site"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"
import { ModeToggle } from "../modetoggle"

export default function  Navbar() {
    return (
        <header className="w-full  sticky top-0 overflow-hidden border-b">
     <nav className=" container flex items-center   h-16 lg:px-40">
        <MainNav items = {SiteConfig.mainNav} />
        <MobileNav items={SiteConfig.mainNav} />
        
        <div className="flex items-center flex-1 mr-8 lg:mr-0 justify-end">
        <ModeToggle />
        </div>
        
     </nav>
        </header>
    )
}