export interface NavItem {
     title? : string 
     href? : string
     description?: string
}

export interface NavItemWithCh  extends NavItem {
      card? : NavItemWithCh[]
      menu? : NavItemWithCh[]
}
export type  MainNavItem = NavItemWithCh;