import { isHmrRefresh } from "next/dist/server/app-render/work-unit-async-storage.external";

export const SiteConfig = {
  name: "Furniture Shop",
  description: "A Furniture Shop built for modern and stylish homes.",
  mainNav: [
    {
      title: "products",
      card: [
        {
          title: "Living Room",
          href: "/products/living-room",
          description: "Explore sofas, coffee tables, TV units, and more."
        },
        {
          title: "Bedroom",
          href: "/products/bedroom",
          description: "Discover beds, wardrobes, nightstands, and dressers."
        },
        {
          title: "Office Furniture",
          href: "/products/office",
          description: "Shop desks, chairs, and storage solutions for your workspace."
        }
      ] ,
      menu : [
        {
            title : "Services",
            href : "Service"
        } , 
        {
            title : "Blog",
            href : "Blogs"
        } ,
        {
            title : "About us ",
             href : "About"
        }
      ]
    }
  ],
  footerNav: [
  {
    title: "Furniture Types",
    items: [
      {
        title: "Seating",
        href: "/types/seating",
      },
      {
        title: "Bedroom",
        href: "/types/bedroom",
      },
      {
        title: "Entertainment",
        href: "/types/entertainment",
      },
      {
        title: "Tables",
        href: "/types/tables",
      },
    ],
  },
  {
    title: "Shop",
    items: [
      {
        title: "All Products",
        href: "/products",
      },
      {
        title: "New Arrivals",
        href: "/products/new",
      },
      {
        title: "Featured",
        href: "/products/featured",
      },
      {
        title: "Discount",
        href: "/products/sale",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Blog",
        href: "/blogs",
      },
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Help Center",
        href: "/help",
      },
      {
        title: "Privacy Policy",
        href: "/privacy",
      },
      {
        title: "Terms of Service",
        href: "/terms",
      },
    ],
  },
],
}