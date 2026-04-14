import { Label } from '@/components/ui/label';

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



export type category = { 

      id: string;

      label : string;

} 



export interface UserType {

  id: string | number;

  firstName: string;

  lastName: string;

  username: string;

  email: string;

  imageUrl: string;

} 





export type ProductCart = {

  id: string;

  name: string;

  price: string; 

  inventory: number;

  quantity: number;

  storeId: string;

  image:  {

    id: string;

  name: string;

  url: string;

  };

  category: string;

  subcategory: string;

  storeName: string;

  storeStripeAccountId: string;

}



