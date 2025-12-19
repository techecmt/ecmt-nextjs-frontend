import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Frequently Asked Questions (FAQ) | Edusphere College of Management and Technology",
	description:
		"Find answers about Edusphere courses, WSQ funding and subsidies, registration, refunds, career support, and our status as a Registered Training Provider in Singapore.",
	keywords: [
		"Edusphere",
		"ECMT",
		"FAQ",
		"WSQ",
		"SkillsFuture",
		"funding",
		"subsidies",
		"courses",
		"Singapore",
		"Registered Training Provider",
	],
	alternates: { canonical: "/faq" },
	openGraph: {
		title:
			"Frequently Asked Questions (FAQ) | Edusphere College of Management and Technology",
		description:
			"Answers to common questions about courses, funding, registration, refunds, and career support at Edusphere (ECMT).",
		url: "/faq",
		siteName: "Edusphere College of Management and Technology",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Frequently Asked Questions (FAQ) | Edusphere College of Management and Technology",
		description:
			"Answers about courses, WSQ funding, registration, refunds and career support at Edusphere (ECMT).",
	},
};

type FaqItem = {
	question: string;
	answer: string;
};

const courseInformation: FaqItem[] = [
	{
		question: "How are Edusphere courses conducted?",
		answer:
			"Our courses are delivered in flexible formats including full‑time, part‑time, and online modes such as live virtual classes via Zoom. Course materials and assignments are accessible through our online learning platform for anytime, anywhere learning.",
	},
	{
		question: "Do I need any prerequisites to enroll in a course?",
		answer:
			"Entry requirements vary by course. Some WSQ modules have no formal prerequisites, while Diplomas/Advanced Diplomas typically require minimum academic qualifications or relevant experience. Refer to each course page or contact us for guidance.",
	},
	{
		question: "Will I receive a certificate after completing a course?",
		answer:
			"Yes. For WSQ modules, eligible learners who are assessed ‘Competent’ receive a WSQ Statement of Attainment (SOA) issued via SkillsFuture Singapore. For non‑WSQ programmes (e.g., Certificates/Diplomas), awards are issued by Edusphere upon successful completion.",
	},
	{
		question: "How much time should I devote outside of class?",
		answer:
			"It depends on the programme. As a guide, set aside additional weekly time for readings, assignments, and project work to reinforce classroom learning.",
	},
];

const fundingSubsidies: FaqItem[] = [
	{
		question: "What funding options are available with Edusphere courses?",
		answer:
			"Eligible Singapore Citizens and Permanent Residents can tap on government subsidies such as SkillsFuture Credit. Employers may apply for Absentee Payroll where applicable. See our WSQ courses for commonly supported modules.",
	},
	{
		question: "Who is eligible for SkillsFuture Credit and subsidies?",
		answer:
			"SkillsFuture Credit is generally available to Singapore Citizens aged 25 and above. Other subsidies vary by learner profile (e.g., citizenship/PR status) and course type. Check the specific course page or the official SkillsFuture website for details.",
	},
	{
		question: "How do I apply for course fee funding?",
		answer:
			"Indicate your intent to use funding during registration and provide the required supporting documents. For SkillsFuture Credit, submit your claim on MySkillsFuture before course start. Our team will guide you through each step.",
	},
];

const registrationPolicies: FaqItem[] = [
	{
		question: "How do I register for a course?",
		answer:
			"Register online via our website or contact our administration office. You will be guided through course selection, funding options, admissions, and payment procedures.",
	},
	{
		question: "What is the refund policy if I withdraw from a course?",
		answer:
			"Refunds are subject to the notice period and terms stated in the Student Contract and our Refund Policy. Please review the applicable policy on the course page or contact our office for assistance.",
	},
];

const careerSupport: FaqItem[] = [
	{
		question: "Does Edusphere provide career support?",
		answer:
			"Yes. We support learners with resume clinics, interview preparation, industry insights, and referrals through our network where available.",
	},
	{
		question: "Are there job placement guarantees?",
		answer:
			"We provide strong support to enhance employability, however job placement depends on individual effort and market conditions and is not guaranteed.",
	},
];

const aboutRTP: FaqItem[] = [
	{
		question: "What makes Edusphere a Registered Training Provider (RTP)?",
		answer:
			"Edusphere is certified and approved by SkillsFuture Singapore as an RTP, meeting criteria for course quality, trainer qualifications, facilities, and financial probity. We continuously align with SkillsFuture’s standards.",
	},
	{
		question: "How does Edusphere ensure course quality?",
		answer:
			"We implement robust curriculum design, qualified trainers, learner feedback loops, and regular reviews to meet regulatory standards and industry needs.",
	},
];

export default function FAQPage() {
	const allFaqs = [
		...courseInformation,
		...fundingSubsidies,
		...registrationPolicies,
		...careerSupport,
		...aboutRTP,
	];

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: allFaqs.map((f) => ({
			"@type": "Question",
			name: f.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.answer,
			},
		})),
	};

	return (
		<main className="min-h-screen">
			<section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-14 md:py-20 overflow-hidden">
				<div className="container mx-auto px-4 md:px-8">
					<div className="max-w-3xl">
						<span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
							Frequently Asked Questions
						</span>
						<h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
							Your questions, answered
						</h1>
						<p className="mt-4 text-lg text-gray-600">
							Quick answers about courses, WSQ funding and subsidies, registration,
							refunds, career support, and our status as a Registered Training Provider.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<Link
								href="/wsq-courses"
								className="bg-[#1AB69D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-md"
							>
								Explore WSQ Courses
							</Link>
                            <Link
								href="/diploma-courses"
								className="bg-[#1AB69D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-md"
							>
								Explore Diploma Courses
							</Link>
							<Link
								href="/#contact"
								className="border-2 border-[#1AB69D] text-[#1AB69D] px-6 py-3 rounded-lg font-semibold hover:bg-[#1AB69D] hover:text-white transition-all"
							>
								Contact Admissions
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="py-10 md:py-14 bg-white">
				<div className="container mx-auto px-4 md:px-8 max-w-5xl">
					<div className="space-y-12">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Information</h2>
							<div className="mt-6 space-y-4">
								{courseInformation.map((item, idx) => (
									<details key={`ci-${idx}`} className="group rounded-lg border border-gray-200 p-4 open:bg-gray-50">
										<summary className="cursor-pointer list-none flex items-start justify-between gap-4">
											<span className="font-semibold text-gray-900">{item.question}</span>
											<span className="shrink-0 text-gray-500 group-open:rotate-180 transition will-change-transform">
												▼
											</span>
										</summary>
										<div className="mt-3 text-gray-700 leading-relaxed">{item.answer}</div>
									</details>
								))}
							</div>
						</div>

						<div>
							<h2 className="text-2xl md:3xl font-bold text-gray-900">Funding &amp; Subsidies</h2>
							<div className="mt-6 space-y-4">
								{fundingSubsidies.map((item, idx) => (
									<details key={`fs-${idx}`} className="group rounded-lg border border-gray-200 p-4 open:bg-gray-50">
										<summary className="cursor-pointer list-none flex items-start justify-between gap-4">
											<span className="font-semibold text-gray-900">{item.question}</span>
											<span className="shrink-0 text-gray-500 group-open:rotate-180 transition">▼</span>
										</summary>
										<div className="mt-3 text-gray-700 leading-relaxed">
											{item.answer} {" "}
											<Link href="/wsq-courses" className="text-[#1AB69D] font-semibold hover:underline">
												View WSQ courses
											</Link>
											.
										</div>
									</details>
								))}
							</div>
						</div>

						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Course Registration &amp; Policies</h2>
							<div className="mt-6 space-y-4">
								{registrationPolicies.map((item, idx) => (
									<details key={`rp-${idx}`} className="group rounded-lg border border-gray-200 p-4 open:bg-gray-50">
										<summary className="cursor-pointer list-none flex items-start justify-between gap-4">
											<span className="font-semibold text-gray-900">{item.question}</span>
											<span className="shrink-0 text-gray-500 group-open:rotate-180 transition">▼</span>
										</summary>
										<div className="mt-3 text-gray-700 leading-relaxed">{item.answer}</div>
									</details>
								))}
							</div>
						</div>

						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Career Support &amp; Outcomes</h2>
							<div className="mt-6 space-y-4">
								{careerSupport.map((item, idx) => (
									<details key={`cs-${idx}`} className="group rounded-lg border border-gray-200 p-4 open:bg-gray-50">
										<summary className="cursor-pointer list-none flex items-start justify-between gap-4">
											<span className="font-semibold text-gray-900">{item.question}</span>
											<span className="shrink-0 text-gray-500 group-open:rotate-180 transition">▼</span>
										</summary>
										<div className="mt-3 text-gray-700 leading-relaxed">{item.answer}</div>
									</details>
								))}
							</div>
						</div>

						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Registered Training Providers</h2>
							<div className="mt-6 space-y-4">
								{aboutRTP.map((item, idx) => (
									<details key={`rtp-${idx}`} className="group rounded-lg border border-gray-200 p-4 open:bg-gray-50">
										<summary className="cursor-pointer list-none flex items-start justify-between gap-4">
											<span className="font-semibold text-gray-900">{item.question}</span>
											<span className="shrink-0 text-gray-500 group-open:rotate-180 transition">▼</span>
										</summary>
										<div className="mt-3 text-gray-700 leading-relaxed">{item.answer}</div>
									</details>
								))}
							</div>
						</div>
					</div>

					<div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
						<h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
						<p className="mt-3 text-gray-700">
							Address: 7500A Beach Rd, #05-312 THE PLAZA, Singapore 199591
						</p>
						<div className="mt-3 grid gap-2 md:grid-cols-2 text-gray-700">
							<div>
								<p>
									Reach Out for Diploma Courses: <strong>(+65) 9125 4523</strong> ·
									<a href="mailto:admin@edusphere.edu.sg" className="text-[#1AB69D] font-semibold hover:underline"> admin@edusphere.edu.sg</a>
								</p>
								<p>
									Management Contact: <strong>(+65) 8220 0095</strong> ·
									<a href="mailto:info@edusphere.edu.sg" className="text-[#1AB69D] font-semibold hover:underline"> info@edusphere.edu.sg</a>
								</p>
							</div>
							<div>
								<p>
									Reach Out for WSQ Courses: <strong>(+65) 8221 5143</strong> ·
									<a href="mailto:training@edusphere.edu.sg" className="text-[#1AB69D] font-semibold hover:underline"> training@edusphere.edu.sg</a>
								</p>
								<p>
									CPE Reg No: 201940174R · Validity: 28 Aug 2022 – 27 Aug 2026
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Script id="faq-schema" type="application/ld+json">
				{JSON.stringify(faqSchema)}
			</Script>
		</main>
	);
}

