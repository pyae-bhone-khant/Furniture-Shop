import { post } from "@/type"
import Image from "next/image";
import Link from "next/link";

interface Postprops {
    post: post[];
}

export default function blogspostList({ post }: Postprops) {
    return (
       <div className="my-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
    {post.map((post) => (
        <Link href={`/Blogs/${post.id}`} key={post.id} className="group flex flex-col">
            
            {/* --- CONTAINER FOR FULL PHOTO --- */}
            <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-4 bg-gray-100">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    // 'object-contain' shows the FULL image without cropping
                    className="object-contain" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <h2 className=" line-clamp-1 text-xl font-extrabold">{post.title}</h2>
            <h3 className="my-2 line-clamp-3  text-base font-[400]">{post.content}</h3>

            <div className="mt-2 text-sm text-gray-600">
                by <span className="font-[600] text-black">{post.author}</span> on 
                <span className="font-[600] text-black"> {post.updated_at}</span>
            </div>
        </Link>
    ))}
</div>
    )
}