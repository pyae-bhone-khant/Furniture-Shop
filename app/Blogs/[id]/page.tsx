"use client"

import { Icons } from "@/components/icon";
import { posts } from "@/components/post/post";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import RichText from "@/components/RichText/richtext";
import { Separator } from "@/components/ui/separator";

export default function BlogsDetails() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <div className="bg-slate-50 p-8 rounded-full mb-6">
                    <Icons.Layers className="h-12 w-12 text-slate-300" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Post not found</h2>
                <p className="text-slate-500 mt-2 mb-6">The article youre looking for might have been moved.</p>
                <Button asChild>
                    <Link href="/Blogs">Return to feed</Link>
                </Button>
            </div>
        );
    }

    return (
        <article className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
            {/* Top Navigation */}
            <nav className="mb-12 flex items-center justify-between">
                <Link 
                    href="/Blogs" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all text-sm font-medium border border-slate-200"
                >
                    <Icons.arrowback className="h-4 w-4" />
                    Back to Articles
                </Link>
                <div className="hidden sm:block text-xs uppercase tracking-widest text-slate-400 font-bold">
                    Reading: {post.title.slice(0, 30)}...
                </div>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Main Content Area */}
                <main className="flex-1 min-w-0">
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-8 leading-[1.05]">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between py-6 border-y border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 leading-none">{post.author}</p>
                                    <p className="text-sm text-slate-500 mt-1">{post.updated_at} • 5 min read</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                {/* Share buttons could go here */}
                                <Button variant="ghost" size="icon" className="rounded-full"><Icons.Layers className="h-4 w-4" /></Button>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/5">
                        <Image 
                            fill
                            priority
                            alt={post.title} 
                            src={post.image} 
                            className="object-cover transform hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1280px) 100vw, 800px"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-slate prose-lg lg:prose-xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600">
                        <p className="text-xl font-medium text-slate-800 leading-relaxed mb-10 italic border-l-4 border-primary pl-6">
                            {post.content}
                        </p>
                        <RichText content={post.body} className="mt-8" /> 
                    </div>

                    <Separator className="my-12" />

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-3">
                        <p className="w-full text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Topics</p>
                        {post.tags.map((tag) => (
                            <Link key={tag} href={`/tags/${tag}`}>
                                <Button variant="outline" size="sm" className="rounded-full hover:bg-primary hover:text-white transition-colors">
                                    #{tag}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </main>

                {/* Sidebar - Sticky Positioning */}
                <aside className="w-full lg:w-[350px]">
                    <div className="sticky top-24 space-y-10">
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
                                    <Icons.Layers className="h-4 w-4 text-white" />
                                </div>
                                <h3 className="text-lg font-bold tracking-tight">Up Next</h3>
                            </div>
                            
                            <div className="space-y-6">
                                {posts.filter(p => p.id !== Number(id)).slice(0, 4).map((p) => (
                                    <Link 
                                        key={p.id} 
                                        href={`/Blogs/${p.id}`} 
                                        className="group flex gap-4 items-center p-2 -m-2 rounded-xl hover:bg-slate-50 transition-all"
                                    >
                                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg shadow-sm border border-slate-100">
                                            <Image
                                                src={p.image}
                                                alt={p.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                                {p.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 mt-1">{p.updated_at}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Newsletter or CTA Card */}
                        <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-200">
                            <h4 className="font-bold mb-2">Enjoying our content?</h4>
                            <p className="text-slate-400 text-xs mb-4">Get the latest insights directly in your inbox weekly.</p>
                            <Button className="w-full bg-white text-black hover:bg-slate-200">Subscribe Now</Button>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}