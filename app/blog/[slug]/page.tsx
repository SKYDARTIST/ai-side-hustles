import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import { format } from 'date-fns';
import Link from 'next/link';
import AdSense from '@/components/AdSense';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const url = `https://ai-side-hustles.vercel.app/blog/${slug}`;
  const ogImage = post.image || '/images/og-image.jpg';

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Aakash'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@Cryptobullaaa',
      images: [ogImage]
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || 'https://ai-side-hustles.vercel.app/images/og-image.jpg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Aakash',
      url: 'https://cryptobulla.vercel.app'
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Side Hustles',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ai-side-hustles.vercel.app/images/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ai-side-hustles.vercel.app/blog/${slug}`
    }
  };

  return (
    <div className="pb-32 selection:bg-black selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="bg-white border-b-4 border-black pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black mb-12 inline-flex items-center gap-2 group transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO KNOWLEDGE BASE
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1">
              {post.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {post.readingTime} • {format(new Date(post.date), 'MMMM d, yyyy')}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-tight leading-tight max-w-2xl">
            {post.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mt-16">
        {/* Main Article Container */}
        <article className="lg:col-span-8">
          <div className="nb-card bg-white p-10 md:p-16">
            <div className="prose prose-lg prose-gray max-w-none 
              prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-4
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:font-medium prose-p:leading-relaxed prose-p:text-gray-700
              prose-a:text-black prose-a:font-black prose-a:underline prose-a:decoration-4 hover:prose-a:bg-black hover:prose-a:text-white transition-all
              prose-blockquote:border-l-8 prose-blockquote:border-black prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:italic prose-blockquote:font-bold
              prose-ul:list-square prose-li:font-bold prose-li:text-gray-700">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    development: false,
                  },
                }}
              />
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="nb-card bg-black text-white p-10">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-6">READY TO SCALE?</h3>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8">
              THE AI REVOLUTION IS HERE. DON'T BE A BYSTANDER. START BUILDING YOUR FUTURE TODAY.
            </p>
            <Link href="/blog" className="nb-button nb-button-secondary w-full text-center">
              GET STARTED NOW
            </Link>
          </div>

          <div className="nb-card p-10">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6">SPONSORED</h3>
            <AdSense slot="197802428" />
          </div>

          <div className="nb-card p-10">
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-6">MORE GUIDES</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-black/10 pb-4 last:border-0 hover:translate-x-1 transition-transform cursor-pointer group">
                  <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">JUNE 2026</div>
                  <div className="text-xs font-black uppercase italic group-hover:underline">STORMING THE AI ECONOMY: A STEP-BY-STEP GUIDE</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Share Section */}
      <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
        <div className="inline-block py-16 px-12 border-x-4 border-black">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">SHARE THE KNOWLEDGE</h2>
          <div className="flex justify-center gap-6">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://ai-side-hustles.vercel.app/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-button nb-button-secondary text-[10px]"
            >
              TWITTER
            </a>
            <a
              href={`https://reddit.com/submit?url=${encodeURIComponent(`https://ai-side-hustles.vercel.app/blog/${slug}`)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-button nb-button-secondary text-[10px]"
            >
              REDDIT
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://ai-side-hustles.vercel.app/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-button nb-button-secondary text-[10px]"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
