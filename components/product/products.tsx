"use client"

import photo1 from "../../public/imges/photo1.png";
import photo2 from "../../public/imges/photo4.webp";
import photo3 from "../../public/imges/photo6.webp";
import photo4 from "../../public/imges/photo7.webp";
import photo5 from "../../public/imges/photo8.webp";
import photo6 from "../../public/imges/photo9.webp";
import photo7 from "../../public/imges/shopping.webp";
import photo8 from "../../public/imges/photo4.webp";



export const products = [ 
    {
        id: 1,
        name: "Modern Sofa",
        description: "Comfortable 3-seater sofa with premium fabric",
        image: [photo1 , photo2 , photo3] ,
        categoryId: 1,
        price: 599.99,
        discount: 10,
        rating: 4.5,
        inventory: 15,
        status: "active"
      },
      {
        id: 2,
        name: "Wooden Dining Table",
        description: "Solid oak dining table for 6 people",
        image: [photo1 , photo2 , photo3] ,
      
        categoryId: 2,
        price: 399.99,
        discount: 5,
        rating: 4.8,
        inventory: 8,
        status: "active"
      },
      {
        id: 3,
        name: "Executive Office Chair",
        description: "Ergonomic office chair with lumbar support",
        image: [photo1 , photo2 , photo3] ,
      
        categoryId: 3,
        price: 299.99,
        discount: 15,
        rating: 4.3,
        inventory: 20,
        status: "active"
      },
      {
        id: 4,
        name: "King Size Bed Frame",
        description: "Sturdy bed frame with integrated storage",
       image : [photo4 , photo5 , photo6],
        categoryId: 1,
        price: 799.99,
        discount: 8,
        rating: 4.6,
        inventory: 10,
        status: "active"
      },
      {
        id: 5,
        name: "Glass Coffee Table",
        description: "Minimalist glass coffee table with metal legs",
        image: [photo1 , photo2 , photo3] ,

        categoryId: 2,
        price: 199.99,
        discount: 0,
        rating: 4.2,
        inventory: 25,
        status: "active"
      },
      {
        id: 6,
        name: "Bookshelf Unit",
        description: "5-tier bookshelf with adjustable shelves",
        image: [photo1 , photo2 , photo3] ,
          
        categoryId: 4,
        price: 249.99,
        discount: 12,
        rating: 4.4,
        inventory: 12,
        status: "active"
      },
      {
        id: 7,
        name: "Reclining Armchair",
        description: "Leather reclining chair with footrest",
        image: [photo1 , photo2 , photo3] ,
    
        categoryId: 1,
        price: 459.99,
        discount: 20,
        rating: 4.7,
        inventory: 7,
        status: "sale"
      },
      {
        id: 8,
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness",
        image: [photo1 , photo2 , photo3] ,
     
        categoryId: 5,
        price: 79.99,
        discount: 0,
        rating: 4.1,
        inventory: 50,
        status: "active"
      },
      {
        id: 9,
        name: "Corner Shelving Unit",
        description: "Space-saving corner shelf with 4 tiers",
        image: [photo1 , photo2 , photo3] ,       
        categoryId: 4,
        price: 159.99,
        discount: 25,
        rating: 4.9,
        inventory: 18,
        status: "active"
      }
]