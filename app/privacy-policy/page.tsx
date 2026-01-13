'use client';

export default function PrivacyPolicyPage() {
	return (
		<main className="min-h-screen bg-white pb-16">
			<section className="bg-gray-50 border-b border-gray-200">
				<div className="container mx-auto px-4 md:px-8 py-10 md:py-14">
					<h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
						Privacy Policy
					</h1>
					<p className="mt-2 text-gray-600">Last updated: 29/05/2025</p>
					<p className="mt-4 text-gray-700 max-w-4xl leading-7">
						Edusphere (“we”, “our”, or “us”) is committed to protecting your personal data in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you visit our website (www.edusphere.edu.sg) or interact with us through our services.
					</p>
				</div>
			</section>

			<section className="container mx-auto px-4 md:px-8 pt-10 md:pt-14 space-y-10 text-gray-800 leading-7">
				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">1. Collection of Personal Information</h2>
					<p>We collect personal data when you:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Register for a course, program, or event</li>
						<li>Subscribe to our mailing list or newsletter</li>
						<li>Submit an inquiry via our contact forms</li>
						<li>Use any of our digital platforms or services</li>
					</ul>
					<p className="pt-2">Types of data we may collect include:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Full name, NRIC/FIN (where applicable), date of birth</li>
						<li>Contact information (email, phone number, address)</li>
						<li>Employment and education history</li>
						<li>Payment details (where relevant)</li>
						<li>Device and browser data (e.g., IP address, cookies)</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">2. Purpose of Data Collection</h2>
					<p>We collect and use your personal data for the following purposes:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>To process your enrolment and manage your participation in courses or programs</li>
						<li>To communicate with you regarding our services, updates, or promotions</li>
						<li>To comply with statutory or regulatory obligations</li>
						<li>To manage feedback, complaints, or service requests</li>
						<li>To improve our website, content, and services</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">3. Consent and Withdrawal</h2>
					<p>
						By providing your personal data to us, you consent to its collection, use, and disclosure for the purposes stated in this policy. You may withdraw your consent at any time by contacting us at <span className="underline decoration-dotted">[insert contact email]</span>. Please note that withdrawal may limit our ability to provide you with certain services.
					</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">4. Disclosure of Personal Data</h2>
					<p>We may share your personal data with:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Government agencies, regulators, or statutory boards (e.g., SkillsFuture Singapore, MOE) when required by law</li>
						<li>External service providers (e.g., IT, payment processing, event support) under strict confidentiality agreements</li>
						<li>Industry partners or collaborators where you have registered for joint programs</li>
					</ul>
					<p className="pt-2">We will not sell, rent, or trade your personal data to third parties.</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">5. Protection of Personal Data</h2>
					<p>We implement reasonable administrative, physical, and technical safeguards to protect your personal data from unauthorised access, disclosure, or misuse, including:</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Encryption and secure data transmission protocols</li>
						<li>Access control and authentication mechanisms</li>
						<li>Regular system monitoring and audit reviews</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">6. Retention of Data</h2>
					<p>We retain personal data only for as long as necessary to fulfil the stated purposes or as required by law. Data no longer required will be securely disposed of.</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">7. Access and Correction Requests</h2>
					<p>You may request access to or correction of your personal data by submitting a written request to our Data Protection Officer (DPO) at <span className="underline decoration-dotted">[insert DPO contact email or form link]</span>. We will respond within a reasonable timeframe and in accordance with the PDPA.</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">8. Use of Cookies</h2>
					<p>Our website uses cookies to enhance user experience and collect usage data. You may control or disable cookies through your browser settings. However, disabling cookies may affect certain functionalities on our website.</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">9. Third-Party Links</h2>
					<p>Our website may contain links to external websites not operated by us. We are not responsible for the privacy practices or content of such sites.</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">10. Updates to this Privacy Policy</h2>
					<p>We may revise this policy from time to time. All updates will be published on this page with a revised effective date. Continued use of our website constitutes acceptance of the revised policy.</p>
				</div>

				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-gray-900">11. Contact Us</h2>
					<p>For any queries, feedback, or complaints regarding your personal data, please contact our:</p>
					<div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 space-y-2">
						<p className="font-semibold text-gray-900">Data Protection Related Enquiries</p>
						<p>Email: <a href="mailto:info@edusphere.edu.sg" className="text-[#1AB69D] hover:underline">info@edusphere.edu.sg</a></p>
						<p>Phone: <a href="tel:+6591254523" className="text-[#1AB69D] hover:underline">+65 9125 4523</a></p>
						<p>Address: 7500A Beach Rd, #05-312 THE PLAZA, Singapore 199591</p>
					</div>
				</div>
			</section>
		</main>
	);
}
