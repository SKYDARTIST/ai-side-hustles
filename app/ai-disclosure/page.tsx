import Link from 'next/link';

export const metadata = {
    title: 'AI Content Disclosure - AI Side Hustles',
    description: 'Learn how AI Side Hustles uses artificial intelligence in content creation while maintaining quality and accuracy.',
};

export default function AIDisclosurePage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 font-sans">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-12 hover:translate-x-1 transition-transform">
                ← BACK TO HOME
            </Link>

            <div className="mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 inline-block">
                    TRANSPARENCY
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
                    AI CONTENT DISCLOSURE
                </h1>
                <p className="text-xl text-gray-600 font-bold uppercase tracking-wide leading-tight">
                    How we use artificial intelligence to create better content for you
                </p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide mt-4">
                    Last Updated: February 14, 2026
                </p>
            </div>

            <div className="prose prose-lg max-w-none">
                <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            OUR COMMITMENT TO TRANSPARENCY
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At AI Side Hustles, we believe in complete transparency about how we create our content. This page explains exactly how we use artificial intelligence tools in our content creation process and the quality standards we maintain.
                        </p>
                        <div className="nb-card p-6 bg-black text-white">
                            <p className="font-black uppercase tracking-wide text-sm mb-2">TL;DR</p>
                            <p className="leading-relaxed">
                                We use AI tools like ChatGPT, Claude, and others as research and writing assistants. Every piece of content is reviewed, edited, fact-checked, and enhanced by human editors before publication. AI helps us work faster, but humans ensure quality and accuracy.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            HOW WE USE AI
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">1. Research and Ideation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use AI tools to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Generate topic ideas based on trending searches and user needs</li>
                            <li>Research technical specifications and feature comparisons</li>
                            <li>Identify common questions people ask about AI tools</li>
                            <li>Create initial content outlines and structures</li>
                        </ul>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">2. Draft Creation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AI assists in creating initial drafts by:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Generating baseline content based on our outlines and research</li>
                            <li>Suggesting alternative phrasings and explanations</li>
                            <li>Helping maintain consistent tone and style</li>
                            <li>Organizing complex information into readable sections</li>
                        </ul>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">3. Editing and Enhancement</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AI tools help us improve content by:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Identifying unclear or overly complex sentences</li>
                            <li>Suggesting improvements to readability and flow</li>
                            <li>Checking for grammatical errors and typos</li>
                            <li>Ensuring technical accuracy in our explanations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            WHAT AI DOESN'T DO
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To be absolutely clear, AI does NOT:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Replace human expertise:</strong> All content is created by humans with real experience using the tools we review</li>
                            <li><strong>Make final publishing decisions:</strong> Humans decide what gets published and when</li>
                            <li><strong>Test tools independently:</strong> Our team personally tests every AI tool we review</li>
                            <li><strong>Create opinions:</strong> All opinions, recommendations, and conclusions come from human experience</li>
                            <li><strong>Fabricate case studies:</strong> All case studies and earnings examples are based on real data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            OUR QUALITY STANDARDS
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Human Review Process</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Every piece of content goes through our quality checklist:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                            <li><strong>Human Editing:</strong> A human editor reviews and rewrites AI-generated drafts to add personal experience and expertise</li>
                            <li><strong>Fact-Checking:</strong> All claims, statistics, and technical details are verified against official sources</li>
                            <li><strong>Tool Testing:</strong> We personally test every AI tool mentioned in our guides</li>
                            <li><strong>Readability Check:</strong> Content is reviewed to ensure it's clear, helpful, and accessible to real people</li>
                            <li><strong>SEO Optimization:</strong> Content is optimized for search engines while maintaining natural, human-friendly language</li>
                            <li><strong>Final Approval:</strong> A senior editor approves all content before publication</li>
                        </ol>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Accuracy Commitment</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We verify all information through official sources, actual tool testing, and industry research. If we discover an error, we correct it immediately and note the update at the bottom of the article.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            WHY WE USE AI
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We're honest about using AI because:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>It's ironic not to:</strong> We're a website about AI tools. Not using AI would be hypocritical.</li>
                            <li><strong>It improves efficiency:</strong> AI helps us produce more content without sacrificing quality</li>
                            <li><strong>It's the future:</strong> We believe AI-assisted content creation is the standard for 2026 and beyond</li>
                            <li><strong>Transparency builds trust:</strong> We'd rather be honest than pretend we write everything from scratch</li>
                        </ul>

                        <div className="nb-card p-6 bg-gray-50 mt-6">
                            <p className="text-sm font-black uppercase tracking-wide text-gray-900 mb-3">OUR PHILOSOPHY</p>
                            <p className="text-gray-700 leading-relaxed italic">
                                "AI is a tool, not a replacement. We use ChatGPT and Claude the same way a carpenter uses a power drill - it makes the work faster and more precise, but the craftsmanship still comes from the human behind it."
                            </p>
                            <p className="text-xs text-gray-500 mt-3 uppercase font-bold">- CRYPTOBULLA, FOUNDER</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            TOOLS WE USE
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For full transparency, here are the main AI tools we use in our content workflow:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>ChatGPT (OpenAI):</strong> Research, initial drafting, and brainstorming</li>
                            <li><strong>Claude (Anthropic):</strong> Long-form writing, editing, and technical explanations</li>
                            <li><strong>Gemini (Google):</strong> Fact-checking and web research</li>
                            <li><strong>Grammarly:</strong> Grammar checking and style suggestions</li>
                            <li><strong>Hemingway Editor:</strong> Readability optimization</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            COMPLIANCE WITH STANDARDS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our AI-assisted content creation process complies with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Google's E-E-A-T Guidelines:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness</li>
                            <li><strong>Google AdSense Content Policies:</strong> Original, valuable content with human oversight</li>
                            <li><strong>FTC Guidelines:</strong> Clear disclosure of affiliate relationships and sponsored content</li>
                            <li><strong>Industry Best Practices:</strong> Following transparency standards set by reputable publishers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            YOUR FEEDBACK
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have questions about our content creation process or notice any inaccuracies in our content, please contact us immediately.
                        </p>
                        <div className="nb-card p-6 bg-gray-50">
                            <p className="font-bold text-gray-900 mb-2">Report an Issue:</p>
                            <p className="text-gray-700">
                                <a href="mailto:cryptobulla369@gmail.com" className="text-black underline font-bold">cryptobulla369@gmail.com</a>
                            </p>
                        </div>
                    </section>

                    <section className="nb-card-heavy p-8 bg-black text-white">
                        <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-4">
                            BOTTOM LINE
                        </h2>
                        <p className="leading-relaxed mb-4">
                            We use AI to write faster. We use humans to write better. Every article you read has been reviewed, tested, and verified by someone who actually uses these tools to make money.
                        </p>
                        <p className="leading-relaxed font-bold">
                            No shortcuts. No fake case studies. No BS.
                        </p>
                    </section>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t-4 border-black text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/privacy" className="nb-button nb-button-secondary text-sm px-8">
                        PRIVACY POLICY
                    </Link>
                    <Link href="/terms" className="nb-button nb-button-secondary text-sm px-8">
                        TERMS & CONDITIONS
                    </Link>
                    <Link href="/" className="nb-button nb-button-primary text-sm px-8">
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </div>
    );
}
