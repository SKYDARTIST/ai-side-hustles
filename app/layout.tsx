import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAdSense from "@/components/GoogleAdSense";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-side-hustles.vercel.app'),
  title: {
    default: "AI Side Hustles - Make Money with AI Tools in 2026",
    template: "%s | AI Side Hustles"
  },
  description: "Discover proven ways to make money using AI tools. Honest reviews, tutorials, and guides for side hustles with ChatGPT, Claude, and more.",
  keywords: ["AI side hustles", "make money with AI", "ChatGPT", "Claude", "AI tools", "freelancing", "AI passive income", "AI business ideas"],
  authors: [{ name: "Aakash", url: "https://cryptobulla.vercel.app" }],
  creator: "Aakash (Cryptobulla)",
  publisher: "AI Side Hustles",
  alternates: {
    canonical: "https://ai-side-hustles.vercel.app"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-side-hustles.vercel.app",
    siteName: "AI Side Hustles",
    title: "AI Side Hustles - Make Money with AI Tools",
    description: "Proven ways to make money with AI. No BS, just results.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Side Hustles - Make Money with AI Tools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Side Hustles - Make Money with AI Tools",
    description: "Proven ways to make money with AI. No BS, just results.",
    creator: "@Cryptobullaaa",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9599392402518869"
          crossOrigin="anonymous"
        />
        <GoogleAnalytics />
        <GoogleAdSense />
      </head>
      <body className={`${inter.className} antialiased selection:bg-black selection:text-white bg-gray-50 text-black`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black h-16 flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-black tracking-tighter uppercase italic group-hover:translate-x-1 transition-transform">
                AI SIDE HUSTLES<span className="text-gray-400">.</span>
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest hover:text-gray-500 transition-colors">Guides</Link>
              <Link href="/tools" className="text-[10px] font-black uppercase tracking-widest hover:text-gray-500 transition-colors hidden md:block">Tools</Link>
              <Link href="/blog" className="nb-button nb-button-primary !py-2 !px-4 text-[10px]">Start Now</Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-24 px-6 border-t-4 border-black bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-16 mb-16">
              <div className="md:col-span-2">
                <Link href="/" className="text-4xl font-black tracking-tighter uppercase italic mb-8 block">
                  AI SIDE HUSTLES<span className="text-gray-400">.</span>
                </Link>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs leading-relaxed max-w-md">
                  THE AI ECONOMY IS MOVING FAST. WE PROVIDE DATA-DRIVEN REVIEWS ON AI TOOLS THAT ACTUALLY GENERATE REVENUE IN 2026.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-gray-400">Directory</h4>
                <ul className="space-y-4">
                  <li><Link href="/blog" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">All Guides</Link></li>
                  <li><Link href="/tools" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Prompt Library</Link></li>
                  <li><Link href="/privacy" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Privacy Policy</Link></li>
                  <li><Link href="/" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Terms of Service</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-gray-400">Connect</h4>
                <ul className="space-y-4">
                  <li><Link href="https://x.com/Cryptobullaaa" target="_blank" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Twitter / X</Link></li>
                  <li><Link href="https://cryptobulla.vercel.app/" target="_blank" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Portfolio</Link></li>
                  <li><Link href="mailto:cryptobulla369@gmail.com" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Email</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                PRODUCED BY CRYPTOBULLA LABS © 2026 • BUILT BY AAKASH • AI ENGINE: GEMINI 2.0
              </div>
              <div className="flex gap-8">
                <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:line-through">Privacy</Link>
                <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:line-through">Terms</Link>
                <Link href="/ai-disclosure" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:line-through">AI Disclosure</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
