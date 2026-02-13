export const metadata = {
    title: 'Privacy Policy - AI Side Hustle',
    description: 'Our commitment to your privacy and data security. Learn how we handle information at AI Side Hustle.',
};

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-32 font-sans">
            <h1 className="text-6xl font-black uppercase tracking-tighter italic mb-12">PRIVACY POLICY</h1>

            <div className="space-y-12 text-gray-700">
                <section>
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">1. INTRODUCTION</h2>
                    <p className="font-medium leading-relaxed uppercase text-sm tracking-widest text-gray-500 mb-4">Last Updated: February 14, 2026</p>
                    <p className="leading-relaxed">
                        Welcome to AI Side Hustle. We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">2. INFORMATION WE COLLECT</h2>
                    <p className="leading-relaxed">
                        We may collect information that your browser sends whenever you visit our site, such as your IP address, browser type, and pages visited. If you subscribe to our newsletter, we collect your email address.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">3. COOKIES AND TRACKING</h2>
                    <p className="leading-relaxed mb-4">
                        We use cookies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                    <div className="nb-card p-6 bg-gray-50 border-dashed">
                        <h3 className="text-sm font-black uppercase mb-2">Google AdSense & DoubleClick Cookie</h3>
                        <p className="text-sm leading-relaxed">
                            Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our site or other sites on the Internet.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">4. DATA SECURITY</h2>
                    <p className="leading-relaxed">
                        The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your personal information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">5. THIRD-PARTY LINKS</h2>
                    <p className="leading-relaxed">
                        Our site may contain links to other sites. If you click on a third-party link, you will be directed to that site. We strongly advise you to review the Privacy Policy of every site you visit.
                    </p>
                </section>

                <div className="nb-card-heavy p-8 border-t-8 border-black">
                    <h2 className="text-2xl font-black uppercase mb-4 tracking-tight">CONTACT US</h2>
                    <p className="text-sm font-bold uppercase tracking-widest">
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </div>
            </div>
        </div>
    );
}
