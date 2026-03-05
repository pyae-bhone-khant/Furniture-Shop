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

export type post  ={
id: number;
author: string;
title: string;
content: string;
image: string;
body: string;
updated_at: string;
tags: string[];

} ;

export type product = {
id: number;
name: string;
description: string;
image: string[];
categoryId: number;
price: number;
discount: number;
rating: number;
inventory: number;
status: "active" | "inactive";
};