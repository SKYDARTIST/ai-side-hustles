import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import AdSense from '@/components/AdSense';

export const metadata = {
  title: 'AI Side Hustles - Make Money with AI Tools in 2026',
  description: 'Discover proven ways to make money using AI tools like ChatGPT, Claude, and Midjourney. Honest reviews, tutorials, and comparisons.',
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 text-black selection:bg-black selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black h-16 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter uppercase italic">
              AI SIDE HUSTLES<span className="text-gray-400">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/blog" className="text-xs font-black uppercase tracking-widest hover:text-gray-500 transition-colors">Guides</Link>
            <Link href="/blog" className="text-xs font-black uppercase tracking-widest hover:text-gray-500 transition-colors">Tools</Link>
            <Link href="/blog" className="nb-button nb-button-primary !py-2 !px-4 text-[10px]">Start Now</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-2 border-black">
            EST. 2026 • AI REVOLUTION
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
            MAKE MONEY<br />
            <span className="text-white [-webkit-text-stroke:2px_black]">WITH AI TOOLS</span>
          </h1>

          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-wide leading-tight">
            No BS. Just Results. We provide honest, data-driven reviews on AI tools that actually generate revenue in 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/blog" className="nb-button nb-button-primary text-sm px-10">
              Browse All Guides →
            </Link>
            <Link href="#popular" className="nb-button nb-button-secondary text-sm px-10">
              Popular Articles
            </Link>
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden flex items-center justify-center -z-10">
          <span className="text-[50rem] font-black leading-none">AI</span>
        </div>
      </section>

      {/* Popular Posts */}
      <section id="popular" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16 px-2">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Curation</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic">POPULAR GUIDES</h2>
          </div>
          <Link href="/blog" className="hidden md:block text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 transition-colors">
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="nb-card-heavy h-full flex flex-col group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden border-b-2 border-black grayscale group-hover:grayscale-0 transition-all duration-500">
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
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/40 uppercase">
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
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none italic group-hover:underline decoration-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-black/10 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">Read Guide →</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 italic">2026</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20">
          <div className="nb-card p-4 bg-gray-100 border-dashed border-gray-300">
            <AdSense slot="197802428" className="min-h-[100px]" />
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            href="/blog"
            className="nb-button nb-button-secondary text-base px-12"
          >
            Explore All Content
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic inline-block bg-white text-black px-4 -rotate-1">
              CHOOSE YOUR PATH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Tools', link: '/tools', desc: 'Prompt sequences and AI tools' },
              { name: 'Tutorials', link: '/blog?category=tutorials', desc: 'Step-by-step guides to make money' },
              { name: 'Reviews', link: '/blog?category=reviews', desc: 'Honest tool reviews and comparisons' },
              { name: 'Articles', link: '/blog?category=articles', desc: 'In-depth analysis and insights' }
            ].map((category, index) => (
              <Link key={category.name} href={category.link} className="group relative">
                <div className="nb-card bg-gray-900 border-white text-white p-10 h-full group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6 block">0{index + 1}</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">{category.name}</h3>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed mb-8 uppercase tracking-widest">
                    {category.desc}
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-1 group-hover:border-white transition-all">
                    Explore Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-32 border-t-8 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-8 leading-[0.85]">
            STOP <span className="text-white [-webkit-text-stroke:2px_black]">DREAMING</span><br />
            START EARNING
          </h2>
          <p className="text-xl mb-12 font-bold text-gray-500 uppercase tracking-widest">
            The AI economy is moving fast. Don't get left behind in the old world.
          </p>
          <Link href="/blog" className="nb-button nb-button-primary text-xl px-16 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none">
            Get Free Access →
          </Link>
          <div className="mt-12 flex justify-center gap-10">
            <div className="text-center">
              <div className="text-2xl font-black italic tracking-tighter uppercase">50+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Deep Guides</div>
            </div>
            <div className="text-center border-x border-black/10 px-10">
              <div className="text-2xl font-black italic tracking-tighter uppercase">10k+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black italic tracking-tighter uppercase">2026</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic">
            AI SIDE HUSTLES<span className="text-gray-400">.</span>
          </Link>

          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">
            PRODUCED BY CRYPTOBULLA LABS © 2026 • AI ENGINE: GEMINI 2.0
          </div>

          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            <Link href="#" className="hover:line-through transition-all">Privacy</Link>
            <Link href="#" className="hover:line-through transition-all">Terms</Link>
            <Link href="#" className="hover:line-through transition-all">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
