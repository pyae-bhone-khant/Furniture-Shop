import { posts } from '@/components/post/post';
import BlogspostList from './BlogspostList';

export default function Blogs() {
    return (
        <div className="lg:px-40 px-4 mt-10 "> 
          <h1 className="text-2xl font-bold  text-center md:text-left">Latest blogs Post</h1>
          <BlogspostList  post={posts} />
         </div>
    )
}