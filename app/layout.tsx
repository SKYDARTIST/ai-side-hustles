import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Side Hustles - Make Money with AI Tools in 2026",
  description: "Discover proven ways to make money using AI tools. Honest reviews, tutorials, and guides for side hustles with ChatGPT, Claude, and more.",
  keywords: ["AI side hustles", "make money with AI", "ChatGPT", "Claude", "AI tools", "freelancing"],
  authors: [{ name: "AI Side Hustles" }],
  openGraph: {
    title: "AI Side Hustles - Make Money with AI Tools",
    description: "Proven ways to make money with AI. No BS, just results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
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
              <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest hover:text-gray-500 transition-colors hidden md:block">Tools</Link>
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
                  <li><Link href="/" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Case Studies</Link></li>
                  <li><Link href="/" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Tools Review</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-gray-400">Social</h4>
                <ul className="space-y-4">
                  <li><Link href="https://x.com/Cryptobullaaa" target="_blank" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Twitter / X</Link></li>
                  <li><Link href="mailto:cryptobulla369@gmail.com" className="text-xs font-black uppercase tracking-widest hover:line-through transition-all">Gmail</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                PRODUCED BY CRYPTOBULLA LABS © 2026 • BUILT BY AAKASH • AI ENGINE: GEMINI 2.0
              </div>
              <div className="flex gap-8">
                <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:line-through">Privacy</Link>
                <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:line-through">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
