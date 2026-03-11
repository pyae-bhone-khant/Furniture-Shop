"use client"

import { products } from "@/components/product/products";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useParams } from "next/navigation";
import ProductCard from "../productcard";
import Link from "next/link";
import { Icons } from "@/components/icon";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import RatingStar from "../ratinngstar";
import Fav from "../fav";
import AddtoCard from "../AddtoCard";


export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        <div className="lg:px-30  px-4 mt-5 lg:mt-10">
            {product ? (
                <div>
                    <Button variant={'outline'} asChild className="mb-8">
                        <Link href={'/product'}><Icons.arrowback />All Products</Link>
                    </Button>
                    <section className="gap-8 flex flex-col md:flex-row md:gap-16" >
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full  mb-2 md:mb-8 md:w-1/2"
                        >
                            <CarouselContent>
                                {product?.image?.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1 bg-gray-200">

                                            <Image src={image} alt={product.name} className="w-full h-auto rounded-lg object-cover" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                        <Separator className="mt-4 mb-4 md:hidden" />
                        <div className="flex w-full flex-col gap-4  md:w-1/2">
                            <div className="gap-3">
                                <h2 className="text-2xl  line-clamp-1 font-bold">{product?.name}</h2>
                                <p className="text-base text-muted-foreground">${Number(product?.price)}</p>
                            </div>
                            <Separator className="my-1.5 " />
                            <p className="text-base text-muted-foreground">{product?.inventory}  in Stock</p>
                            <div className="flex items-center justify-between">
                                <RatingStar rating={Number(product?.rating)} />
                                <Fav id={String(product.id)} rating={Number(product.rating)} isFavourite={false} />
                            </div>
                            <AddtoCard canBuy={product?.status === "active"} />
                            <Separator className="my-1.5 " />
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="shipping"
                                className="max-w-lg"
                            >
                                <AccordionItem value="shipping" className="border-none" >
                                    <AccordionTrigger>Description</AccordionTrigger>
                                    <AccordionContent>
                                        {product?.description ?? "No description available."}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </section>
                    <section className="space-y-1.5">
                        <h2 className="text-2xl font-bold  line-clamp-1 flex-1 mb-4">More Products from Furniture Shops</h2>
                        <ScrollArea className="pb-4 overflow-hidden">
                            <div className="flex gap-4">
                                {products.slice(0, 4).map((p) => (
                                    <ProductCard key={p.id} product={p} className={"min-w-[308px]"} />
                                ))}
                            </div>

                            <ScrollBar orientation="horizontal" />


                        </ScrollArea>
                    </section>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    )
}