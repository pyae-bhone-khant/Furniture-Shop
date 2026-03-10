import { SiteConfig } from "@/configs/site"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"
import { ModeToggle } from "../modetoggle"
import AuthDropdown from "@/app/Auth/AuthDropdown"
import { User } from "../user/user"

export default function  Navbar() {
    return (
        <header className="w-full  border-b sticky top-0 z-40   bg-background">
     <nav className=" container flex items-center  h-16 lg:px-30">
        <MainNav items = {SiteConfig.mainNav} />
        <MobileNav items={SiteConfig.mainNav} />
        <div className="flex items-center  gap-2.5 flex-1 mr-8 lg:mr-0 justify-end">

        <ModeToggle />
        <AuthDropdown user={User} />
        </div>
        
     </nav>
        </header>
    )
}