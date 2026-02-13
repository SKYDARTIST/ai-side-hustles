import Link from 'next/link';

export const metadata = {
    title: 'Terms and Conditions - AI Side Hustles',
    description: 'Terms and Conditions for using AI Side Hustles website.',
};

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 font-sans">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-12 hover:translate-x-1 transition-transform">
                ← BACK TO HOME
            </Link>

            <div className="mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 mb-6 inline-block">
                    LEGAL
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-[0.9]">
                    TERMS & CONDITIONS
                </h1>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                    Last Updated: February 14, 2026
                </p>
            </div>

            <div className="prose prose-lg max-w-none">
                <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            1. ACCEPTANCE OF TERMS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Welcome to AI Side Hustles. By accessing or using our website at aisidehustles.com (the "Website"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Website.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website following any changes indicates your acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            2. USE OF WEBSITE
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Permitted Use</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may access and use the Website for personal, non-commercial purposes. You agree to use the Website only for lawful purposes and in accordance with these Terms.
                        </p>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Prohibited Activities</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree NOT to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Use the Website in any way that violates any applicable law or regulation</li>
                            <li>Engage in any data mining, scraping, or similar data gathering activities</li>
                            <li>Attempt to interfere with the proper functioning of the Website</li>
                            <li>Use automated systems or software to extract data from the Website without permission</li>
                            <li>Impersonate or attempt to impersonate AI Side Hustles or its employees</li>
                            <li>Transmit any viruses, malware, or other harmful code</li>
                            <li>Reproduce, modify, distribute, or publicly display content without authorization</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            3. INTELLECTUAL PROPERTY RIGHTS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All content on this Website, including but not limited to text, graphics, logos, images, articles, guides, and software, is the property of AI Side Hustles or its content suppliers and is protected by international copyright laws.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may view, download, and print content from the Website for personal, non-commercial use only, provided you keep all copyright and other proprietary notices intact.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Any unauthorized use of the content may violate copyright, trademark, and other laws and could result in criminal or civil penalties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            4. CONTENT DISCLAIMER
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Educational Purpose</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The content provided on this Website is for general informational and educational purposes only. It is not intended as professional advice and should not be relied upon as such.
                        </p>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">No Guarantees</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AI Side Hustles makes no representations or warranties regarding:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>The accuracy, completeness, or timeliness of information</li>
                            <li>The results you may achieve by following our guides or recommendations</li>
                            <li>The performance or reliability of third-party tools, services, or platforms mentioned</li>
                            <li>Any earnings or income claims made in our content</li>
                        </ul>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">AI-Assisted Content</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some content on this Website is created with the assistance of artificial intelligence tools. All AI-assisted content is reviewed, edited, and verified by human editors to ensure accuracy and quality. See our <Link href="/ai-disclosure" className="text-black underline font-bold">AI Disclosure Policy</Link> for more information.
                        </p>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Third-Party Tools and Services</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We review and recommend various AI tools and services. These reviews represent our honest opinions based on our testing and research. However, the features, pricing, and availability of third-party tools may change without notice. We are not responsible for the actions or policies of third-party services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            5. AFFILIATE RELATIONSHIPS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AI Side Hustles may participate in affiliate marketing programs. This means we may earn a commission when you click on certain links and make a purchase. This comes at no additional cost to you.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our affiliate relationships do not influence our editorial content or reviews. We only recommend tools and services we genuinely believe provide value to our readers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            6. ADVERTISING
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            This Website displays advertisements through Google AdSense and potentially other advertising networks. We do not control the content of advertisements displayed on our Website and are not responsible for the products, services, or claims made in such advertisements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            7. EXTERNAL LINKS
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our Website may contain links to third-party websites or services that are not owned or controlled by AI Side Hustles. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that AI Side Hustles shall not be liable for any damage or loss caused by your use of any third-party content, goods, or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            8. LIMITATION OF LIABILITY
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To the fullest extent permitted by law, AI Side Hustles, its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Loss of profits or revenue</li>
                            <li>Loss of data</li>
                            <li>Loss of business opportunities</li>
                            <li>Costs of substitute goods or services</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            9. INDEMNIFICATION
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            You agree to indemnify and hold harmless AI Side Hustles and its affiliates, officers, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of your use of the Website or violation of these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            10. DISCLAIMER OF WARRANTIES
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. AI SIDE HUSTLES DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            11. GOVERNING LAW
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AI Side Hustles operates, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            12. SEVERABILITY
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            13. CONTACT INFORMATION
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about these Terms and Conditions, please contact us:
                        </p>
                        <div className="nb-card p-6 bg-gray-50">
                            <p className="font-bold text-gray-900 mb-2">Email:</p>
                            <p className="text-gray-700 mb-4">
                                <a href="mailto:cryptobulla369@gmail.com" className="text-black underline font-bold">cryptobulla369@gmail.com</a>
                            </p>
                            <p className="font-bold text-gray-900 mb-2">Website:</p>
                            <p className="text-gray-700">aisidehustles.com</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t-4 border-black text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/privacy" className="nb-button nb-button-secondary text-sm px-8">
                        PRIVACY POLICY
                    </Link>
                    <Link href="/ai-disclosure" className="nb-button nb-button-secondary text-sm px-8">
                        AI DISCLOSURE
                    </Link>
                    <Link href="/" className="nb-button nb-button-primary text-sm px-8">
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </div>
    );
}
