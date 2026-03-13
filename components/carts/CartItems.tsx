import { ProductCart } from '@/type'
import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import Editable from '../cart/Edittable'
import { string } from 'zod'
interface CartProp {
   cart: ProductCart
}
function CartItemscom({ cart }: CartProp) {
   return (
      <div className="ml-2">
         <div className="flex gap-2  space-y-2">

            <Image
               src={cart.image?.url}
               alt={cart.name}
               width={64}
               height={64}
               className="object-cover rounded-md"
            />
            <div className='flex flex-col space-y-1.5'>
               <div className="line-clamp-1 text-sm font-medium">{cart.name}</div>
               <div className="text-sm font-medium text-muted-foreground">
                  ${cart.price} x {cart.quantity} =
                  <span className="ml-1">
                     ${(Number(cart.price) * cart.quantity).toLocaleString()}
                  </span>
               </div>
               <div className="ext-sm font-medium text-muted-foreground">{cart.category}/{cart.subcategory}</div>
            </div>
         </div>
         <div className="">
            <Editable />
         </div>
         <Separator className='mb-4' />
      </div>
   )
}

export default CartItemscom