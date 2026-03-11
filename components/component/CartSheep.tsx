import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Sheet,
    SheetClose,
    SheetContent, SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Icons } from "../icon"
import { Separator } from "../ui/separator"
import { CartItems } from "../cart/Cartitems"
import Link from "next/link"
import CartItemscom from "../carts/CartItems"
import { ScrollArea } from "../ui/scroll-area"
// import { Separator } from "radix-ui"

export default function CartSheet() {
    const CartItemscount = 4;
    const AmountTotal = 190;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size={'icon'} className="relative" aria-label="open cart" >
                    <Badge className="absolute  -right-2 -top-2 size-6 justify-center rounded-full p-2.5" variant={'destructive'}>
                        {CartItemscount}
                    </Badge>
                    <Icons.Shopping aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full md-max-w-lg">
                <SheetHeader>
                    <SheetTitle>Cart - {CartItemscount}</SheetTitle>
                </SheetHeader>
                <Separator />
                {CartItems.length > 0 ? (
                    <>
                        <ScrollArea className="my-4 ml-2 h-[calc(80vh)] pb-8" >
                            {CartItems.map((cart) => (
                                <CartItemscom cart={cart} key={cart.id} />
                            ))}
                        </ScrollArea>

                        <SheetFooter>
                            <div className="space-y-4 text-sm flex flex-col">
                                <Separator />
                                <div className="flex space-y-3 flex-col">
                                    <div className="flex justify-between">
                                        <span className="">Shipping</span>
                                        <span className="">Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="">Taxs</span>
                                        <span className="">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="">Total</span>
                                        <span className="">${AmountTotal}</span>
                                    </div>
                                </div>
                            </div>
                            <SheetClose asChild>
                                <Button asChild type="submit">
                                    <Link href={'/checkout'} aria-label="Check Out" className="mt-4" >Continue to Checkout</Link>
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </>
                ) : (
                    <div className=" flex flex-col h-full place-items-center space-y-1">
                        <Icons.Shopping className="size-16 mb-4 text-muted-foreground" />
                        <div className="text-xl font-medium text-muted-foreground">Your cart is empty</div>
                    </div>
                )}


            </SheetContent>
        </Sheet>
    )
}