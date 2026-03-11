"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icon";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShowBuyNow {
    canBuy: boolean;
}

const InputSchema = z.object({
    quantity: z.number().min(0).max(100)
})


export default function EmailForm({ canBuy }: ShowBuyNow) {

    const form = useForm<z.infer<typeof InputSchema>>({
        resolver: zodResolver(InputSchema),
        defaultValues: {
            quantity: 1,
        },
    });

    function onSubmit(values: z.infer<typeof InputSchema>) {
        console.log(values);
        toast.success(`Added ${values.quantity} items to cart!`);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex max-w-[260px] gap-4 flex-col " autoComplete="off"
            >
                <div className="flex items-center">
                    <Button type="button" variant={'outline'} size={'icon'} className="size-8 font-bold  shrink-0  rounded-r-none">
                        <Icons.Minus className="size-3" aria-hidden="true" />
                        <span className="sr-only">Decrease quantity</span>
                    </Button>

                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem className="relative space-y-0">
                                <div className="">
                                    <FormControl>
                                        <Input
                                         type="number"
                                         inputMode="numeric"
                                            {...field}
                                            min={0}
                                            className="h-8 w-16 rounded-none border-x-0"
                                        />
                                    </FormControl> 
                                    <FormMessage />

                                    
                                </div>
                                <FormMessage className="text-[10px] px-1" />
                            </FormItem>
                        )}
                    />
                    <Button type="button" variant={'outline'} size={'icon'} className=" font-bold size-8 shrink-0 rounded-l-none" >
                        <Icons.Plus className="size-3" aria-hidden="true" />
                        <span className="sr-only">Increase quantity</span>
                    </Button>
                </div>
                <div className="flex items-center space-x-2.5 ">
                    <Button type="button" 
                     aria-label="Buy Now" 
                     size={"sm"}
                      className={
                        cn("w-40 font-bold bg-blue-900 hover:bg-blue-950 cursor-pointer "
                         , !canBuy && "bg-slate-400 font-bold hover:bg-slate-400")}
                        // disabled={canBuy}
                          >
                        Buy Now
                    </Button>
                    <Button variant={ !canBuy ? "outline" : "default"} type="submit" className="px-6 py-4 font-bold cursor-pointer font-semibold ">
                        Add to Cart 
                    </Button>
                </div>
            </form>
        </Form>
    );
}