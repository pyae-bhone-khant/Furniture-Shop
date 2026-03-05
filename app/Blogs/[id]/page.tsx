"use client"

import { Icons } from "@/components/icon";
import { posts } from "@/components/post/post";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"

export default function BlogsDetails() {
const {id} = useParams();
const post = posts.find((post) => id === id );
    return (
        <div className="px-4 mt-10 lg:px-40 ">
            <section className="flex flex-col lg:flex-row ">
                <section className="">
                    <Button variant={'outline'} asChild>
                        <Link  href={'/Blogs'}> <Icons.arrowback  /> All posts</Link>
                    </Button>
                    {post ? (
                         <>
                           <h2 className=""></h2>
                           <div className="">
                            <span></span>
                            </div>
                            <h3 className=""></h3>
                            <Image width={800} height={450} alt='s0' src={'/dd'} className="" />
                         </>
                    ) : (
                           <p className="mb-16 mt-8 text-center text-xl font-bold text-muted-foreground lg:mt-24">No post found !</p>
                    )}
                </section>
                <section className="">Other</section>
               
            </section>
        </div>
    )
}