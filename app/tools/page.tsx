import Link from 'next/link';

export const metadata = {
    title: 'AI Side Hustle Tools - Professional Prompt Library & Resources',
    description: 'Access our high-value AI prompt library and upcoming tools to scale your side hustle. Professional resources for ChatGPT, Claude, and more.',
};

const PROMPTS = [
    {
        title: 'THE "MEGA-CONTENT" ARCHITECT',
        description: 'A multi-step prompt designed to turn a simple topic into a 2,000-word structured article with deep research and unique perspective.',
        category: 'CONTENT WRITING',
        slug: 'mega-content-architect',
    },
    {
        title: 'THE RETENTION-FIRST SOCIAL CALENDAR',
        description: 'Generates 30 days of high-hook social content focused on conversion metrics and community building rather than vanity likes.',
        category: 'SOCIAL MEDIA',
        slug: 'retention-first-social-calendar',
    },
    {
        title: 'THE COLD OUTREACH ENGINE',
        description: 'Crafts personalized client proposals that highlight the human-led value of your AI-assisted services to overcome "AI-skepticism."',
        category: 'BUSINESS GROWTH',
        slug: 'cold-outreach-engine',
    }
];

const COMING_SOON = [
    {
        title: 'SIDE HUSTLE EARNINGS CALCULATOR',
        description: 'Data-driven forecasting for your monthly revenue based on tool overhead and specialized hourly rates.'
    },
    {
        title: 'CURATED AI TOOL DIRECTORY',
        description: 'A vetted list of 50+ AI tools verified for reliability and high ROI in a professional freelancing context.'
    }
];

export default function ToolsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-32 font-sans">
            <div className="mb-20">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 block">Prototypes & Resources</span>
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
                    THE PROMPT <br /> LIBRARY
                </h1>
                <p className="text-xl text-gray-600 font-bold uppercase tracking-wide max-w-2xl leading-tight">
                    Professional-grade instructions for high-output systems. Copy, paste, and refine.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                {PROMPTS.map((prompt, index) => (
                    <div key={index} className="nb-card h-full flex flex-col hover:-translate-x-1 hover:-translate-y-1 transition-all group">
                        <div className="p-8 flex-grow flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 self-start">
                                {prompt.category}
                            </span>
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none italic group-hover:underline decoration-4">
                                {prompt.title}
                            </h2>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 flex-grow">
                                {prompt.description}
                            </p>
                            <Link href={`/tools/${prompt.slug}`} className="nb-button nb-button-secondary w-full text-[10px]">
                                VIEW PROMPT SEQUENCE
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t-4 border-black pt-20">
                <div className="mb-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 block">Pipeline</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic">DEVELOPMENT TRACKER</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {COMING_SOON.map((tool, index) => (
                        <div key={index} className="nb-card-heavy p-10 bg-gray-50 border-dashed">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-black uppercase italic tracking-tight leading-none max-w-[70%]">
                                    {tool.title}
                                </h3>
                                <span className="text-[8px] font-black uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1">
                                    COMING SOON
                                </span>
                            </div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
