import Link from 'next/link';

export const metadata = {
    title: 'About - AI Side Hustles',
    description: 'Learn about AI Side Hustles and our mission to help people make money with AI tools in 2026.',
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 font-sans">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-12 hover:translate-x-1 transition-transform">
                ← BACK TO HOME
            </Link>

            <div className="mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 inline-block">
                    OUR STORY
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
                    ABOUT AI SIDE HUSTLES
                </h1>
                <p className="text-xl text-gray-600 font-bold uppercase tracking-wide leading-tight">
                    No BS. Just real strategies to make money with AI in 2026.
                </p>
            </div>

            {/* Mission Statement */}
            <div className="nb-card-heavy p-12 mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-6">
                    OUR MISSION
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    The AI economy is moving fast. Too fast for most people to keep up. We cut through the hype and show you what actually works.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    AI Side Hustles provides honest, data-driven reviews and tutorials on AI tools that generate real revenue. We test everything ourselves and only recommend what we'd use to make money.
                </p>
            </div>

            {/* What We Do */}
            <div className="mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-black pb-4">
                    WHAT WE DO
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="nb-card p-6 hover:-translate-x-1 hover:-translate-y-1 transition-all">
                        <div className="text-5xl font-black mb-4">01</div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 italic">
                            TOOL REVIEWS
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            We test AI tools with real money and report what actually works. No affiliate bias, just honest results.
                        </p>
                    </div>
                    <div className="nb-card p-6 hover:-translate-x-1 hover:-translate-y-1 transition-all">
                        <div className="text-5xl font-black mb-4">02</div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 italic">
                            STEP-BY-STEP GUIDES
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Actionable tutorials that walk you through building AI-powered side hustles from zero to first dollar.
                        </p>
                    </div>
                    <div className="nb-card p-6 hover:-translate-x-1 hover:-translate-y-1 transition-all">
                        <div className="text-5xl font-black mb-4">03</div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 italic">
                            CASE STUDIES
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Real examples of people making money with AI. Numbers, strategies, and lessons learned.
                        </p>
                    </div>
                </div>
            </div>

            {/* Who We Are */}
            <div className="nb-card bg-gray-50 p-10 mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-6">
                    WHO WE ARE
                </h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2">Aakash (Cryptobulla)</h3>
                        <p className="text-sm text-gray-700 leading-relaxed mb-4 font-medium">
                            Founder and lead writer at AI Side Hustles. I've been building AI-powered products and side hustles since 2023, and I've made every mistake in the book so you don't have to.
                        </p>
                        <div className="flex gap-4 text-xs font-black uppercase tracking-widest">
                            <a href="https://x.com/Cryptobullaaa" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                → TWITTER
                            </a>
                            <a href="https://cryptobulla.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                → PORTFOLIO
                            </a>
                        </div>
                    </div>
                    <div className="border-t-2 border-black pt-6">
                        <p className="text-xs text-gray-600 uppercase tracking-wide font-bold">
                            POWERED BY: CRYPTOBULLA LABS © 2026
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-black pb-4">
                    OUR VALUES
                </h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="text-2xl font-black">→</div>
                        <div>
                            <h3 className="text-lg font-black uppercase mb-2">HONESTY OVER HYPE</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                We'll tell you when an AI tool is overpriced garbage. We'll also tell you when something actually works.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-2xl font-black">→</div>
                        <div>
                            <h3 className="text-lg font-black uppercase mb-2">RESULTS OVER PROMISES</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                We don't promise you'll make $10k in a month. We show you what real people are making and how they did it.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-2xl font-black">→</div>
                        <div>
                            <h3 className="text-lg font-black uppercase mb-2">QUALITY OVER QUANTITY</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                We don't pump out daily content. We publish when we have something worth saying.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Disclosure */}
            <div className="nb-card bg-black text-white p-10 mb-16">
                <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-4">
                    AI TRANSPARENCY
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                    We use AI tools (ChatGPT, Claude, Gemini) to help with research and drafting. Every article is edited, fact-checked, and verified by humans before publishing.
                </p>
                <Link href="/ai-disclosure" className="text-xs font-black uppercase tracking-widest underline hover:text-gray-300">
                    READ FULL AI DISCLOSURE →
                </Link>
            </div>

            <div className="text-center border-t-4 border-black pt-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-6">
                    READY TO GET STARTED?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/blog" className="nb-button nb-button-primary text-sm px-8">
                        READ OUR GUIDES
                    </Link>
                    <Link href="/contact" className="nb-button nb-button-secondary text-sm px-8">
                        GET IN TOUCH
                    </Link>
                </div>
            </div>
        </div>
    );
}
