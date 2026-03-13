import photo1 from "../../public/imges/photo1.png";
import photo2 from "../../public/imges/photo4.webp";
import photo3 from "../../public/imges/photo6.webp";




export const CartItems = [
  {
    id: "uuid-prod-001",
    name: "Mid-Century Modern Sofa",
    price: "850",
    inventory: 12,
    quantity: 1,
    storeId: "store-uuid-99",
    image: [
      {
        id: "img-001",
        name: "sofa-front-view",
        url : photo2
      },
      {
        id: "img-002",
        name: "sofa-side-view",
        url: photo1
      }
    ],
    category: "Furniture",
    subcategory: "Living Room",
    storeName: "G&G Home Decor",
    storeStripeAccountId: "acct_1234567890ABC"
  },
  {
    id: "uuid-prod-002",
    name: "Ergonomic Office Chair",
    price: "299",
    inventory: 45,
    quantity: 1,
    storeId: "store-uuid-99",
    image: [
      {
        id: "img-003",
        name: "chair-black",
        url: photo3
      }
    ],
    category: "Wooden",
    subcategory: "Chair",
    storeName: "G&G Home Decor",
    storeStripeAccountId: "acct_1234567890ABC"
  }
]

