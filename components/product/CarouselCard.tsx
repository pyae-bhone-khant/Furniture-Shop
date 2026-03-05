"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { product } from "@/type"
import Image from "next/image"
import Link from "next/link"
import { products } from './products';

interface ProductProps {
  products : product[];
}

export function CarouselCard({products} : ProductProps ) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
     className="w-full mt-8" 
     plugins={[plugin.current]}
      
     >
      <CarouselContent className="ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className=" pl-1 lg:basis-1/3">
            <div className="flex p-4 lg:px-4 gap-4">
            <Image width={300} height={200} src={product.image[2]} alt={product.name} className=" size-28 rounded-md" />
            <div className="">
              <h3 className="text-sm font-bold line-clamp-1">{product.name}</h3>
              <p className="my-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>          
                <Link  className="text-sm hover:underline font-semibold text-[#1A2A44]" href={`product/${product.id}`}>Read More</Link>
            </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
