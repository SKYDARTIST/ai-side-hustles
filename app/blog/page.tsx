import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export const metadata = {
  title: 'AI Side Hustle Blog - Learn How to Make Money with AI',
  description: 'Discover proven ways to make money using AI tools. Tutorials, guides, and reviews of the best AI tools for side hustles and freelancing.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 font-sans">
      <div className="mb-20">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 block">Archive</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-8">
          THE KNOWLEDGE BASE
        </h1>
        <p className="text-xl text-gray-600 font-bold uppercase tracking-wide max-w-2xl leading-tight">
          Every method, every tool, and every case study we've ever published. No gatekeeping.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full"
          >
            <div className="nb-card h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
              <div className="aspect-video bg-gray-100 relative overflow-hidden border-b-2 border-black grayscale group-hover:grayscale-0 transition-all duration-300">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-7xl font-black text-white/40 uppercase">
                      {post.category[0]}
                    </div>
                  </>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none italic group-hover:underline decoration-4 text-black">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-auto pt-4 border-t border-black/10 flex justify-between items-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {format(new Date(post.date), 'MMMM yyyy')}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform italic">Read More →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
