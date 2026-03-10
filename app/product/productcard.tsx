import { Button } from '@/components/ui/button';
import { product } from '../../type/index';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { Icons } from '@/components/icon';
import { cn } from '@/lib/utils';


interface ProductCardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    product: product;
   
}

export default function ProductCard({ product , className}: ProductCardProps) {
    return (
         <div>
           <Card className = {cn("size-full  overflow-hidden rounded-lg" , className)}>
            <Link href={`/product/${product.id}`} aria-label={product.name} >
  <CardHeader className='border-b p-0'>
    <AspectRatio ratio={1 / 1} className='bg-muted'>
  <Image src={product.image[2]} alt={product.name} loading='lazy' className=" size-full rounded-md object-cover" />
</AspectRatio>
  </CardHeader>
            </Link>
  <CardContent className="space-y-1.5 " >
   <CardTitle  className='line-clamp-1' >{product.name}</CardTitle>
   <CardDescription className='line-clamp-1' >${product.price}
    {product.discount > 0 && (
      <span className='ml-2 text-sm text-muted-foreground line-through'>${product.discount}</span>
    )}

   </CardDescription>

  </CardContent>
  <CardFooter className="">
  {product.status === "active" ? (
    <Button variant="outline" className='w-full bg-green-900 font-bold text-white cursor-pointer hover:bg-green-950 hover:text-white'><Icons.Plus /> Add to Cart</Button>
  ) : (
    <Button className='w-full cursor-pointer' aria-label='sold out' disabled>Sold Out</Button>
  )}
</CardFooter>
</Card>
            </div>  
        
    )
}