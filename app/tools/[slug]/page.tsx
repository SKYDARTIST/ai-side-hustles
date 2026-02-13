import Link from 'next/link';
import { notFound } from 'next/navigation';

const PROMPT_DATA = {
    'mega-content-architect': {
        title: 'THE "MEGA-CONTENT" ARCHITECT',
        category: 'CONTENT WRITING',
        description: 'A multi-step prompt designed to turn a simple topic into a 2,000-word structured article with deep research and unique perspective.',
        useCase: 'Transform simple topics into comprehensive, research-backed articles that demonstrate expertise and drive organic traffic.',
        steps: [
            {
                stepNumber: 'STEP 01',
                title: 'TOPIC ANALYSIS & RESEARCH FOUNDATION',
                prompt: `You are an expert content strategist. I want to write a comprehensive article about [TOPIC].

Before we begin writing, please:
1. Identify the 5 most critical questions my audience needs answered about this topic
2. List 3 unique angles or perspectives that most articles on this topic miss
3. Suggest 5 credible sources or data points I should reference
4. Outline potential objections or skepticism readers might have

Format your response clearly with headers for each section.`
            },
            {
                stepNumber: 'STEP 02',
                title: 'STRUCTURE & OUTLINE CREATION',
                prompt: `Based on the research foundation we just established, create a detailed outline for a 2,000-word article about [TOPIC].

The outline should include:
- A compelling headline (5 options)
- Introduction hook that addresses reader pain points
- 5-7 main sections with descriptive H2 headings
- 2-3 H3 subheadings under each H2
- A strong conclusion with clear takeaways
- Suggested placement for data points and sources

Make the structure flow logically from problem to solution.`
            },
            {
                stepNumber: 'STEP 03',
                title: 'INTRODUCTION & HOOK WRITING',
                prompt: `Write the introduction section for this article (approximately 200 words).

Requirements:
- Start with a compelling hook that grabs attention in the first sentence
- Clearly establish the problem or opportunity
- Preview what the reader will learn
- Build credibility without being boastful
- End with a smooth transition to the first main section

Tone: Professional but conversational. Write like you're explaining to a smart colleague.`
            },
            {
                stepNumber: 'STEP 04',
                title: 'MAIN CONTENT DEVELOPMENT',
                prompt: `Now write the main body sections of the article following the outline we created.

For each section:
- Start with a clear, bold statement or insight
- Support claims with the research and data points we identified
- Include specific examples or case studies where relevant
- Use short paragraphs (2-3 sentences max) for readability
- Add transitional phrases between sections
- Incorporate bullet points or numbered lists where appropriate

Write sections [SPECIFY WHICH SECTIONS] now.`
            },
            {
                stepNumber: 'STEP 05',
                title: 'CONCLUSION & CALL TO ACTION',
                prompt: `Write a powerful conclusion for this article (approximately 150-200 words).

The conclusion should:
- Recap the main insights without being repetitive
- Address the "so what" - why this matters
- Provide 2-3 specific, actionable next steps
- End with a thought-provoking final statement
- Include a subtle call to action (if appropriate)

Make it memorable and leave the reader feeling empowered.`
            },
            {
                stepNumber: 'STEP 06',
                title: 'POLISH & OPTIMIZATION',
                prompt: `Review the complete article and suggest improvements for:

1. SEO optimization: Suggest natural keyword placement for [TARGET KEYWORD]
2. Readability: Flag any sections that are too dense or complex
3. Engagement: Recommend where to add pull quotes, stats, or visual breaks
4. Credibility: Verify all claims are properly attributed
5. Meta description: Write a compelling 155-character meta description

Provide specific line edits for the top 5 improvements.`
            }
        ],
        tips: [
            'Replace [TOPIC] with your specific subject matter',
            'Complete each step fully before moving to the next',
            'Save the AI responses between steps for reference',
            'Adjust the tone and complexity based on your target audience',
            'The final article will need your human editing and fact-checking'
        ]
    },
    'retention-first-social-calendar': {
        title: 'THE RETENTION-FIRST SOCIAL CALENDAR',
        category: 'SOCIAL MEDIA',
        description: 'Generates 30 days of high-hook social content focused on conversion metrics and community building rather than vanity likes.',
        useCase: 'Create a month of strategic social media content that builds engaged communities and drives measurable business outcomes.',
        steps: [
            {
                stepNumber: 'STEP 01',
                title: 'AUDIENCE & BRAND FOUNDATION',
                prompt: `You are a social media strategist. Help me build a content calendar that drives real business results.

First, analyze my target audience and brand:

My business: [YOUR BUSINESS/NICHE]
Target audience: [DESCRIBE YOUR IDEAL FOLLOWER]
Current follower count: [NUMBER]
Main business goal: [LEADS/SALES/COMMUNITY/AWARENESS]

Please provide:
1. The top 5 pain points or desires of this audience
2. 3 content pillars that will resonate with them
3. Optimal posting frequency and times
4. Key metrics I should track (beyond likes)
5. The voice/tone that will build trust with this audience`
            },
            {
                stepNumber: 'STEP 02',
                title: 'CONTENT FRAMEWORK DESIGN',
                prompt: `Based on the audience analysis, create a content framework for my 30-day calendar.

Design a mix that includes:
- Educational posts (teach something valuable): ___%
- Engagement posts (spark conversation): ___%
- Proof/credibility posts (case studies, results): ___%
- Personal/behind-scenes posts (build connection): ___%
- Promotional posts (direct CTA): ___%

For each category, suggest:
- 2-3 specific post formats that work well
- Hook templates that stop the scroll
- Engagement tactics beyond "double tap if you agree"

Platform: [INSTAGRAM/LINKEDIN/TWITTER/TIKTOK]`
            },
            {
                stepNumber: 'STEP 03',
                title: '30-DAY CONTENT CALENDAR GENERATION',
                prompt: `Create a detailed 30-day content calendar using the framework we established.

For each day, provide:
- Post type (from our framework)
- Compelling hook (first line)
- Main content/value proposition (2-3 sentences)
- Call to action (specific instruction)
- Suggested visual/media type

Format as a table with columns: Day | Type | Hook | Content | CTA | Visual

Ensure variety: no more than 2 posts of the same type consecutively.
Include at least 3 posts that directly drive to [YOUR BUSINESS GOAL].`
            },
            {
                stepNumber: 'STEP 04',
                title: 'HIGH-PRIORITY POST EXPANSION',
                prompt: `From the 30-day calendar, select Days [X, Y, Z] - the posts most critical to my business goals.

For each of these priority posts, write the full caption:
- Attention-grabbing hook (first 1-2 lines)
- Value-packed body (use storytelling, data, or frameworks)
- Strategic hashtags (mix of reach and niche)
- Clear, specific call to action
- Engagement question to boost comments

Length: [SHORT 50-100 WORDS / MEDIUM 100-200 / LONG 200-300]
Keep paragraphs to 1-2 lines for mobile readability.`
            },
            {
                stepNumber: 'STEP 05',
                title: 'ENGAGEMENT & COMMENT RESPONSE STRATEGY',
                prompt: `Create a comment engagement strategy to maximize retention and relationship building.

For each content pillar, provide:
1. Conversation starter questions to include in captions
2. Response templates for common comments (that feel personal, not robotic)
3. Strategies to move engaged commenters to DMs or email list
4. Ways to identify and nurture potential customers in comments

Also suggest:
- 5 posts that could spark debate or strong reactions (to boost algorithm)
- How to handle negative comments professionally
- Timing for posting replies (immediate vs. delayed for reach)`
            },
            {
                stepNumber: 'STEP 06',
                title: 'PERFORMANCE TRACKING & ITERATION FRAMEWORK',
                prompt: `Set up a tracking system to measure what actually drives business results.

Create a simple spreadsheet structure with these metrics:
- Engagement rate (comments + saves / followers)
- Profile visits per post
- Link clicks (if applicable)
- DMs received
- Email signups or sales attributed
- Best performing content types

After 30 days, analyze:
1. Which 3 post types had highest engagement?
2. Which 3 drove the most business results (leads/sales)?
3. What patterns exist in high-performing hooks?
4. Recommended adjustments for month 2

Provide the analysis template now.`
            }
        ],
        tips: [
            'Adapt the platform-specific features (Stories, Reels, Threads, etc.)',
            'Schedule posts in batches using tools like Later or Buffer',
            'Repurpose top performers across multiple platforms',
            'Track performance weekly and adjust the remaining calendar',
            'Engage with your audience daily, not just when posting'
        ]
    },
    'cold-outreach-engine': {
        title: 'THE COLD OUTREACH ENGINE',
        category: 'BUSINESS GROWTH',
        description: 'Crafts personalized client proposals that highlight the human-led value of your AI-assisted services to overcome "AI-skepticism."',
        useCase: 'Win high-value clients with personalized outreach that positions AI as your competitive advantage, not a replacement for quality.',
        steps: [
            {
                stepNumber: 'STEP 01',
                title: 'IDEAL CLIENT PROFILE & RESEARCH',
                prompt: `You are a business development strategist. Help me define and research my ideal clients for cold outreach.

My service: [DESCRIBE YOUR AI-ASSISTED SERVICE]
Industry I serve: [TARGET INDUSTRY]
Typical project value: [PRICE RANGE]

Help me create:
1. Detailed ideal client profile (company size, pain points, budget indicators)
2. Where to find these prospects (platforms, groups, directories)
3. Red flags that indicate a bad fit client
4. 5 research points to gather before reaching out to each prospect
5. How to identify decision-makers vs. gatekeepers

Be specific and actionable.`
            },
            {
                stepNumber: 'STEP 02',
                title: 'VALUE PROPOSITION FRAMEWORK',
                prompt: `Craft a compelling value proposition that positions my AI-assisted service as premium quality.

My service: [YOUR SERVICE]
How AI enhances it: [SPECIFIC AI TOOLS/WORKFLOWS]
My unique human expertise: [YOUR BACKGROUND/SKILLS]
Client results: [OUTCOMES YOU DELIVER]

Create:
1. One-sentence value proposition
2. Three-paragraph explanation (problem, solution, proof)
3. How to address "Why not just use ChatGPT myself?" objection
4. Differentiation from competitors who use AI vs. those who don't
5. Pricing positioning statement

Focus on outcomes, not tools. Make AI your advantage, not your entire pitch.`
            },
            {
                stepNumber: 'STEP 03',
                title: 'PERSONALIZED OUTREACH MESSAGE TEMPLATE',
                prompt: `Write a cold outreach email template that feels personal and positions me as a strategic partner.

Structure:
- Subject line (3 options: curiosity, benefit, question-based)
- Opening: Specific reference to their business [PERSONALIZATION PLACEHOLDER]
- Problem identification: Pain point they likely have
- Solution preview: How I solve it (mention AI efficiency without making it the focus)
- Credibility: Brief social proof or case study
- Soft CTA: Low-friction next step
- PS: Additional value or conversation starter

Length: 120-180 words max
Tone: Professional but conversational, confident but not pushy

Include [BRACKETS] where I need to customize per prospect.`
            },
            {
                stepNumber: 'STEP 04',
                title: 'PROSPECT-SPECIFIC CUSTOMIZATION',
                prompt: `I'm reaching out to this specific prospect. Help me customize the template.

Prospect details:
- Company: [NAME]
- What they do: [BRIEF DESCRIPTION]
- Recent news/activity: [LINKEDIN POST / COMPANY UPDATE / CHALLENGE]
- Decision maker: [NAME & TITLE]

Using the template from Step 3, write a fully customized outreach message that:
1. References something specific about their business
2. Connects their situation to my solution naturally
3. Demonstrates I did my homework
4. Feels like it was written just for them

Also suggest:
- Best day/time to send
- LinkedIn connection request message (if applicable)
- Follow-up angle if no response in 5-7 days`
            },
            {
                stepNumber: 'STEP 05',
                title: 'PROPOSAL & CASE STUDY DEVELOPMENT',
                prompt: `A prospect responded positively. Help me create a proposal that closes the deal.

Prospect need: [THEIR SPECIFIC CHALLENGE]
Proposed solution: [YOUR APPROACH]
Timeline: [ESTIMATED DURATION]
Investment: [YOUR PRICING]

Create a proposal structure:
1. Executive summary (their problem + your solution in 3 sentences)
2. Detailed approach (phases, deliverables, how AI accelerates without sacrificing quality)
3. Timeline and milestones
4. Investment and payment terms
5. Why me (credibility, process, guarantees)
6. Next steps (simple decision path)

Also write:
- A mini case study format for past client success
- Response to "This seems expensive" objection
- 3 questions to ask them to refine the proposal`
            },
            {
                stepNumber: 'STEP 06',
                title: 'FOLLOW-UP SEQUENCE & OBJECTION HANDLING',
                prompt: `Create a follow-up sequence for prospects at different stages.

Write follow-up messages for:
1. No response to initial outreach (Day 5, Day 10)
2. Interested but "not right now" (30-day nurture sequence)
3. Proposal sent but no response (3-day, 7-day check-in)
4. Price objection (value reframe)
5. "We'll use AI ourselves" objection (quality/expertise angle)

For each:
- Subject line
- Message body (75-100 words)
- When to stop following up
- How to add value without being pushy

Also provide:
- Signs prospect is genuinely interested vs. being polite
- When to walk away from a bad fit
- How to ask for referrals from non-fits`
            }
        ],
        tips: [
            'Research each prospect for 10 minutes before reaching out',
            'Send outreach in small batches (5-10/day) to maintain quality',
            'Track response rates and A/B test subject lines',
            'Connect on LinkedIn before emailing for higher response rates',
            'Position yourself as the expert who leverages AI, not an AI service'
        ]
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const prompt = PROMPT_DATA[slug as keyof typeof PROMPT_DATA];

    if (!prompt) {
        return {
            title: 'Prompt Not Found',
        };
    }

    return {
        title: `${prompt.title} - AI Side Hustles Prompt Library`,
        description: prompt.description,
    };
}

export default async function PromptDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const prompt = PROMPT_DATA[slug as keyof typeof PROMPT_DATA];

    if (!prompt) {
        notFound();
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-32 font-sans">
            {/* Back Button */}
            <Link href="/tools" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-12 hover:translate-x-1 transition-transform">
                ← BACK TO LIBRARY
            </Link>

            {/* Header */}
            <div className="mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 inline-block">
                    {prompt.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
                    {prompt.title}
                </h1>
                <p className="text-xl text-gray-600 font-bold uppercase tracking-wide mb-8 leading-tight">
                    {prompt.description}
                </p>
                <div className="nb-card p-6 bg-gray-50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">USE CASE</span>
                    <p className="text-sm font-medium text-gray-700 leading-relaxed">
                        {prompt.useCase}
                    </p>
                </div>
            </div>

            {/* Steps */}
            <div className="space-y-8 mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-black pb-4">
                    PROMPT SEQUENCE
                </h2>
                {prompt.steps.map((step, index) => (
                    <div key={index} className="nb-card-heavy">
                        <div className="p-8">
                            <div className="flex items-start gap-6 mb-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-1">
                                    {step.stepNumber}
                                </span>
                                <h3 className="text-2xl font-black uppercase tracking-tight leading-none italic flex-grow">
                                    {step.title}
                                </h3>
                            </div>
                            <div className="bg-black text-white p-6 font-mono text-sm leading-relaxed border-4 border-black">
                                <pre className="whitespace-pre-wrap font-mono">{step.prompt}</pre>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tips */}
            <div className="nb-card bg-gray-900 text-white p-8 mb-16">
                <h3 className="text-xl font-black uppercase tracking-tighter italic mb-6">
                    IMPLEMENTATION TIPS
                </h3>
                <ul className="space-y-3">
                    {prompt.tips.map((tip, index) => (
                        <li key={index} className="flex gap-3 text-sm font-medium leading-relaxed">
                            <span className="text-gray-500 font-black">→</span>
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="text-center border-t-4 border-black pt-16">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6">
                    READY TO USE THIS PROMPT?
                </h3>
                <p className="text-sm text-gray-600 font-bold uppercase tracking-wide mb-8 max-w-2xl mx-auto">
                    Copy each step into ChatGPT, Claude, or your preferred AI tool. Replace the bracketed placeholders with your specific details.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/tools" className="nb-button nb-button-secondary text-sm px-8">
                        ← BACK TO LIBRARY
                    </Link>
                    <Link href="/blog" className="nb-button nb-button-primary text-sm px-8">
                        READ MORE GUIDES
                    </Link>
                </div>
            </div>
        </div>
    );
}
