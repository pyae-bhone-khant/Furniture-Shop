import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { CarouselCard } from "../product/CarouselCard";
import { products } from "../product/products";
import { posts } from "../post/post";
import BlogsCard from "@/app/(main)/Blogs/BlogsCards";
import ProductCard from "@/app/(main)/product/productcard";


interface TitleProps {
  title: string;
  href: string;
  sideText: string;
}

const Title = ({ title, href, sideText }: TitleProps) => (
  <div className="flex  px-4 lg:px-0 flex-col mt-20  md:flex-row mb-10 items-start justify-start md:items-center md:justify-between">
    <h2 className="text-2xl font-bold mb-4 md:mb-0">{title}</h2>
    <Link href={href} className="font-semibold text-muted-foreground underline">
      {sideText}
    </Link>
  </div>
);

export default function Homepage() {
  return (
    <div className="min-h-screen container mt-5 lg:mt-35  px-4 lg:px-30">
      <div className="flex flex-col lg:flex-row  justify-between gap-10">
        <div className=" my-8 lg:w-2/5  text-center lg:text-left ">
          <h1 className="text-4xl text-[#1A2A44] mb-4 lg:text-6xl lg:mb-8 font-extrabold">Mondern Interior Desgin Studio </h1>
          <p className="mb-6">
            Furniture is an essential component of any living space ,
            providing functionality , comfort , and aesthetic appeal
          </p>
          <div className="flex  justify-center lg:justify-start gap-4">
            <Button asChild className=" rounded-full hover:bg-orange-400 bg-orange-300 px-8 py-6 text-base font-bold">
              <Link href={'/'} >Shop Now</Link>
            </Button>
            <Button asChild variant={"outline"} className="rounded-full px-8  text-[#1A2A44] py-6 text-base font-bold ">
              <Link href={'/'}>Explore</Link>
            </Button>

          </div>
        </div>
        <Image width={900} height={200} className="w-300 lg:w-3/5 h-65 lg:h-auto" src="/imges/photo1.png" alt="Placeholder" />
      </div>


      <CarouselCard products={products} />
      <Title title="Featured Products" href="/product" sideText="View All Products" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.slice(0,4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} 

      </div>
      
      <Title title="Recent Blog " href="/Blogs" sideText="View All Posts" />
      <BlogsCard posts={posts} />
    </div>
  );
}