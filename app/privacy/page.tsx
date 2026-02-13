import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy - AI Side Hustles',
    description: 'Privacy Policy for AI Side Hustles. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
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
                    PRIVACY POLICY
                </h1>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                    Last Updated: February 14, 2026
                </p>
            </div>

            <div className="prose prose-lg max-w-none">
                <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            1. INTRODUCTION
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AI Side Hustles ("we," "our," or "us") operates the website ai-side-hustles.vercel.app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By using our website, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            2. INFORMATION WE COLLECT
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>IP address</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                            <li>Click patterns and user behavior</li>
                        </ul>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Cookies and Tracking Technologies</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to track activity on our website and store certain information. Technologies used include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                            <li><strong>Google AdSense:</strong> To display personalized advertisements</li>
                            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            3. HOW WE USE YOUR INFORMATION
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>To improve and optimize our website</li>
                            <li>To understand how users interact with our content</li>
                            <li>To analyze trends and user preferences</li>
                            <li>To display relevant advertisements via Google AdSense</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect against fraudulent or illegal activity</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            4. THIRD-PARTY SERVICES
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Google Analytics</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use Google Analytics to monitor and analyze web traffic. Google Analytics collects information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Google Analytics privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-black underline font-bold">https://policies.google.com/privacy</a>
                        </p>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">Google AdSense</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            AdSense privacy policy: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-black underline font-bold">https://policies.google.com/technologies/ads</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            5. DATA RETENTION
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We retain automatically collected information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            6. YOUR PRIVACY RIGHTS
                        </h2>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">GDPR Rights (European Users)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you are located in the European Economic Area (EEA), you have certain data protection rights:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Right to access your personal data</li>
                            <li>Right to rectification of inaccurate data</li>
                            <li>Right to erasure ("right to be forgotten")</li>
                            <li>Right to restrict processing</li>
                            <li>Right to data portability</li>
                            <li>Right to object to processing</li>
                        </ul>

                        <h3 className="text-xl font-black uppercase tracking-tight mb-3 mt-6">CCPA Rights (California Users)</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you are a California resident, you have the following rights:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Right to know what personal information is collected</li>
                            <li>Right to know if personal information is sold or disclosed</li>
                            <li>Right to say no to the sale of personal information</li>
                            <li>Right to access your personal information</li>
                            <li>Right to equal service and price</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mt-6">
                            To exercise any of these rights, please contact us at: <a href="mailto:cryptobulla369@gmail.com" className="text-black underline font-bold">cryptobulla369@gmail.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            7. DO NOT TRACK SIGNALS
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We do not currently respond to "Do Not Track" browser signals or other mechanisms that provide consumers the ability to exercise choice regarding the collection of personally identifiable information about their online activities over time and across third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            8. CHILDREN'S PRIVACY
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            9. CHANGES TO THIS PRIVACY POLICY
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-4 border-b-4 border-black pb-2">
                            10. CONTACT US
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div className="nb-card p-6 bg-gray-50">
                            <p className="font-bold text-gray-900 mb-2">Email:</p>
                            <p className="text-gray-700 mb-4">
                                <a href="mailto:cryptobulla369@gmail.com" className="text-black underline font-bold">cryptobulla369@gmail.com</a>
                            </p>
                            <p className="font-bold text-gray-900 mb-2">Website:</p>
                            <p className="text-gray-700">ai-side-hustles.vercel.app</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t-4 border-black text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/terms" className="nb-button nb-button-secondary text-sm px-8">
                        TERMS & CONDITIONS
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
