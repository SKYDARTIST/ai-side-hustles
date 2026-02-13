import Link from 'next/link';

export const metadata = {
    title: 'Contact - AI Side Hustles',
    description: 'Get in touch with AI Side Hustles. Contact us for partnerships, feedback, or questions.',
};

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 font-sans">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-12 hover:translate-x-1 transition-transform">
                ← BACK TO HOME
            </Link>

            <div className="mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 inline-block">
                    CONNECT
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
                    GET IN TOUCH
                </h1>
                <p className="text-xl text-gray-600 font-bold uppercase tracking-wide leading-tight">
                    Have questions? Want to collaborate? Let's talk.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
                {/* Email Card */}
                <div className="nb-card-heavy p-10 hover:-translate-x-1 hover:-translate-y-1 transition-all">
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                        EMAIL
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-4 italic">
                        DROP A LINE
                    </h2>
                    <a
                        href="mailto:cryptobulla369@gmail.com"
                        className="text-lg font-bold text-black hover:underline decoration-4 break-all"
                    >
                        cryptobulla369@gmail.com
                    </a>
                </div>

                {/* Social Card */}
                <div className="nb-card-heavy p-10 hover:-translate-x-1 hover:-translate-y-1 transition-all">
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                        SOCIAL
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-6 italic">
                        FOLLOW THE JOURNEY
                    </h2>
                    <div className="space-y-4">
                        <a
                            href="https://x.com/Cryptobullaaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm font-black uppercase tracking-wide hover:translate-x-1 transition-transform"
                        >
                            → TWITTER / X
                        </a>
                        <a
                            href="https://cryptobulla.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm font-black uppercase tracking-wide hover:translate-x-1 transition-transform"
                        >
                            → PORTFOLIO
                        </a>
                    </div>
                </div>
            </div>

            {/* What to Contact About */}
            <div className="nb-card p-10 mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-black pb-4">
                    WHAT WE CAN HELP WITH
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="text-xs font-black uppercase tracking-widest mb-2">
                            PARTNERSHIPS
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Interested in collaborating on AI tools or content? Let's explore opportunities.
                        </p>
                    </div>
                    <div>
                        <div className="text-xs font-black uppercase tracking-widest mb-2">
                            FEEDBACK
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Found an error or have suggestions? We're always looking to improve.
                        </p>
                    </div>
                    <div>
                        <div className="text-xs font-black uppercase tracking-widest mb-2">
                            QUESTIONS
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Need help with AI tools or side hustles? Reach out and we'll do our best to help.
                        </p>
                    </div>
                </div>
            </div>

            {/* Response Time */}
            <div className="nb-card bg-black text-white p-8 text-center">
                <p className="text-xs font-black uppercase tracking-widest">
                    Typical response time: 24-48 hours
                </p>
            </div>

            <div className="mt-16 pt-8 border-t-4 border-black text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/about" className="nb-button nb-button-secondary text-sm px-8">
                        ABOUT US
                    </Link>
                    <Link href="/blog" className="nb-button nb-button-primary text-sm px-8">
                        READ OUR GUIDES
                    </Link>
                </div>
            </div>
        </div>
    );
}
