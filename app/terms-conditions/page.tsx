import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto px-4 py-8 lg:px-20 max-w-7xl font-sans">
            <h1 className="text-3xl font-bold mb-2">Terms and Conditions of Use</h1>
            <p className="text-gray-600 mb-8">Last Updated: 29/05/2025</p>

            <div className="space-y-6 text-gray-800">
                <p>
                    Welcome to Edusphere’s official website (www.edusphere.edu.sg). By accessing or using this website, you agree to be bound by the following Terms and Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, please do not use this site.
                </p>

                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p>
                        Your use of this website constitutes your agreement to comply with and be bound by these Terms and Conditions. All materials on this website are protected by intellectual property laws and remain the property of Edusphere.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Limited License to Use</h2>
                    <p className="mb-2">
                        You are granted a temporary, non-exclusive license to download one copy of materials from the website for personal, non-commercial use only. You may not:
                    </p>
                    <ul className="list-disc pl-5 mb-2 space-y-1">
                        <li>Modify or copy the materials;</li>
                        <li>Use them for commercial or public purposes;</li>
                        <li>Reverse engineer or decompile any software;</li>
                        <li>Remove proprietary notices; or</li>
                        <li>Transfer the materials or mirror them on any other server.</li>
                    </ul>
                    <p>
                        This license automatically terminates if you violate these terms and may be terminated by Edusphere at any time. Upon termination, you must destroy any downloaded materials in your possession.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Personal Data Protection</h2>
                    <p className="mb-2">
                        Edusphere is committed to protecting your personal data in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore. By using this website, you acknowledge and consent to the collection, use, and disclosure of your personal data in accordance with our Privacy Policy. Key principles include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Data will be collected for specific, legitimate purposes.</li>
                        <li>Reasonable security arrangements will be in place to prevent unauthorized access, collection, use, disclosure, or disposal.</li>
                        <li>You have the right to access and correct your personal data upon request.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Cybersecurity and User Responsibility</h2>
                    <p className="mb-2">
                        We employ reasonable administrative, technical, and physical safeguards to protect the confidentiality and integrity of your data. However, you are responsible for:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Keeping your login credentials secure;</li>
                        <li>Ensuring your device is free of malware;</li>
                        <li>Immediately notifying us of any unauthorized use of your account.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
                    <p>
                        All content on this website is provided “as is.” Edusphere disclaims all warranties, express or implied, including warranties of merchantability and fitness for a particular purpose. We make no guarantees regarding the accuracy, completeness, or reliability of the website’s content.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
                    <p>
                        Edusphere will not be liable for any damages arising from your use or inability to use this website, even if we have been advised of such damages. This includes, but is not limited to, loss of data, business interruption, or indirect damages. Jurisdictional exceptions may apply.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Content Accuracy and Updates</h2>
                    <p>
                        Website content may contain errors or outdated information. Edusphere reserves the right to modify content at any time without prior notice, but does not commit to updating information on a scheduled basis.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. External Links</h2>
                    <p>
                        Links to third-party websites are provided for convenience only. Edusphere does not control or endorse any external websites and is not responsible for their content or data practices.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">9. Revisions and Changes</h2>
                    <p>
                        These Terms and Conditions may be updated periodically. Continued use of the website following any changes constitutes acceptance of the new terms. Please check this page regularly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
                    <p>
                        These Terms and Conditions are governed by the laws of the Republic of Singapore. Any disputes shall be subject to the exclusive jurisdiction of Singapore’s courts.
                    </p>
                </section>

                <section className="pt-4 border-t border-gray-200">
                    <p>
                        If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:info@edusphere.edu.sg" className="text-blue-600 hover:underline">info@edusphere.edu.sg</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
