import { post } from "@/type"
import Image from "next/image";
import Link from "next/link";

interface PostsProps {
    posts: post[];
}

export default function BlogsCard({ posts }: PostsProps) {
    return (
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
            {posts.slice(0, 3).map((post) => (
                <Link
                    key={post.id}
                    href={`/Blogs/${post.id}`}
                    className="group flex flex-col border border-gray-100 rounded-3xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-5">
                        <Image
                            src={post.image}
                            alt={post.title}    
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimization
                        />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 line-clamp-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h2>          
                    <div className="mt-auto flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2">                         
                            <div className="w-6 h-6 rounded-full bg-gray-200" />
                            <span className="font-medium text-gray-800">{post.author}</span>
                        </div>
                        <span className="text-gray-500">{post.updated_at}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}