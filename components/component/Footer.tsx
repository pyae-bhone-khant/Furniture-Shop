"use client"
import Link from "next/link"
import { Icons } from '../icon';
import { SiteConfig } from "@/configs/site"
import EmailForm from "./new-letter";

export default function Footer() {
  return (
    <footer className="w-full mt-10 border-t border-border bg-background">
      <div className="px-4 py-12 lg:px-40">
      
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          <div className="  flex-none">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Icons.logo className="size-6 text-primary" aria-hidden="true" />
              <span className="font-bold text-xl tracking-tight">{SiteConfig.name}</span>
              <span className="sr-only">home</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-[200px]">
              Building the future of the web, one component at a time.
            </p>
          </div>      
          <nav className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-8">
            {SiteConfig.footerNav.map((foot) => (
              <div key={foot.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {foot.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {foot.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>     
          <div className=" flex flex-col gap-3">
  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
    Subscribe to our newsletter
  </h4>
   <EmailForm />
  <p className="text-[11px] text-muted-foreground italic">
    * Get weekly updates on new features.
  </p>
</div>
        </div>   
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs mt-4 text-muted-foreground">
            © {new Date().getFullYear()} {SiteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
              <Icons.twitter className="size-5 text-muted-foreground hover:text-primary transition-colors" />
              <Icons.discord className="size-5 text-muted-foreground hover:text-primary transition-colors" />
              <Icons.gitHub className="size-5 text-muted-foreground hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  )
}