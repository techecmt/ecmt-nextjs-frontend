import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Certificate Courses in Singapore | Edusphere College - Professional Training",
	description:
		"Enroll in professional certificate courses in Singapore at Edusphere College. Healthcare, engineering, F&B, AutoCAD & foundation skills. Industry-focused training with practical skills development.",
	keywords: "certificate courses Singapore, professional training Singapore, healthcare certificates, engineering courses, AutoCAD certification, nursing training Singapore, Edusphere College",
	openGraph: {
		title: "Certificate Courses in Singapore | Edusphere College",
		description: "Professional certificate courses in healthcare, engineering, F&B and more. Industry-focused training in Singapore.",
		type: "website",
		images: ["/certificate_courses/Certificate-in-Foundation-Skills.png"]
	}
};

type CertificateCourse = {
	title: string;
	subtitle?: string;
	cta: string;
	ctaurl: string;
	image: string;
};

const CERTIFICATE_COURSES: CertificateCourse[] = [
    {
        title: "Certificate in NG (Nasogastric) Tube Feeding",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in NG (NASOGASTRIC) tube feeding.png",
    },
    {
        title: "Certificate in Physical and Massage Therapy",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in Physical and Massage Therapy.png",
    },
     {
        title: "Certificate in Autocad",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",	
        image: "/certificate_courses/Certificate in Autocad.png",
    },
    {
        title: "Certificate in Air Conditioning",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in Air Conditioning.png",
    },
    {
        title: "Certificate in Cafe & Restaurant Management",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in Cafe _Restaurant Management.png",
    },
    {
        title: "Certificate in Foundation Skills",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate-in-Foundation-Skills.png",
    },
    {
        title: "Professional Certificate in Mechanical and Electrical Engg",
        cta: "Register Now",	
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate-in-Foundation-Skills.png",
    },
];

const FAQ_DATA = [
	{
		question: "What are certificate courses and how do they differ from diploma courses?",
		answer: "Certificate courses are shorter, focused training programs typically lasting 3-6 months that provide specific skills for immediate employment. Unlike diplomas which are comprehensive 1-2 year programs, certificates target particular competencies and are ideal for career changers or skill upgrades."
	},
	{
		question: "Are certificate courses in Singapore recognized by employers?",
		answer: "Yes, our certificate courses are industry-recognized and designed to meet current market demands. Many are aligned with SkillsFuture Singapore initiatives and accepted by employers across healthcare, engineering, F&B, and other sectors."
	},
	{
		question: "How long does it take to complete a certificate course?",
		answer: "Most certificate courses range from 3-6 months depending on the program. Healthcare certificates like NG Tube Feeding may be completed in 2-3 months, while technical courses like AutoCAD or Air Conditioning may take 4-6 months including practical training."
	},
	{
		question: "Can I use SkillsFuture credits for these certificate courses?",
		answer: "Many of our certificate courses are SkillsFuture eligible, allowing you to use your credits to offset course fees. Check with our admissions team for specific course eligibility and funding options available."
	},
	{
		question: "What are the entry requirements for certificate courses?",
		answer: "Entry requirements vary by course but generally require completion of secondary education or equivalent work experience. Some healthcare courses may require basic English proficiency. Specific prerequisites are listed for each program."
	},
	{
		question: "Do certificate courses include practical training?",
		answer: "Yes, all our certificate courses emphasize hands-on learning with practical components, laboratory sessions, or internship opportunities to ensure you gain real-world experience alongside theoretical knowledge."
	},
	{
		question: "Are there part-time options for working professionals?",
		answer: "We offer flexible scheduling including evening and weekend classes for most certificate programs to accommodate working professionals. Online learning components are available for select courses."
	},
	{
		question: "What support is available after course completion?",
		answer: "Graduates receive career guidance, job placement assistance, and access to our alumni network. We also provide ongoing support for professional development and advanced certification pathways."
	}
];

export default function CertificateCoursesInSingapore() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		"name": "Edusphere College",
		"description": "Professional certificate courses in Singapore covering healthcare, engineering, F&B, and technical skills",
		"url": "https://edusphere.edu.sg/certificate-courses-in-singapore",
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Certificate Courses",
			"itemListElement": CERTIFICATE_COURSES.map((course, index) => ({
				"@type": "Course",
				"name": course.title,
				"description": `Professional certificate course in ${course.title.toLowerCase()} in Singapore`,
				"provider": {
					"@type": "EducationalOrganization",
					"name": "Edusphere College"
				},
				"courseMode": "blended",
				"educationalCredentialAwarded": "Certificate"
			}))
		}
	};

	const faqStructuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": FAQ_DATA.map(faq => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}))
	};

	return (
		<>
			<Script
				id="course-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Script
				id="faq-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
			/>
			<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
				<div className="absolute inset-0 bg-grid-pattern opacity-5" />

				<div className="container mx-auto px-4 md:px-8 relative z-10">
					<div className="max-w-3xl space-y-4">
						<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
							<span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
							Our Certificate Courses
						</span>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
							Popular Certificate Courses in Singapore
						</h1>
						<p className="text-base md:text-lg text-gray-600 leading-relaxed">
							Short, industry-focused programmes designed to build practical skills
							and open new career pathways for learners in Singapore and beyond.
						</p>
					</div>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="py-12 md:py-16 bg-white">
				<div className="container mx-auto px-4 md:px-8 max-w-6xl">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Our Precious Certificate Courses
							</h2>
							<div className="w-16 h-1 bg-[#1AB69D] rounded-full mt-2" />
						</div>
						<p className="text-sm text-gray-500 max-w-md">
							Explore flexible certificate courses in healthcare, engineering, F&B,
							logistics and foundation skills, curated to meet real industry needs.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{CERTIFICATE_COURSES.map((course) => (
							<article
								key={course.title}
								className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#1AB69D]/60 transition-all duration-200"
							>
								<div className="relative h-44 md:h-48 overflow-hidden">
									<Image
										src={course.image}
										alt={course.title}
										fill
										className="object-cover transform group-hover:scale-105 transition-transform duration-300"
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
								</div>

								<div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
									<h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
										{course.title}
									</h3>
									{course.subtitle && (
										<p className="text-xs md:text-sm text-gray-600 flex-1">
											{course.subtitle}
										</p>
									)}

									<div className="pt-1">
										<a
											href={course.ctaurl}
											className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all"
										>
											{course.cta}
											<svg
												className="h-4 w-4"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M13 7L18 12L13 17"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M6 12H18"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-12 md:py-16 bg-gray-50">
				<div className="container mx-auto px-4 md:px-8 max-w-4xl">
					<div className="text-center mb-10">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
							Frequently Asked Questions
						</h2>
						<div className="w-16 h-1 bg-[#1AB69D] rounded-full mx-auto mb-4" />
						<p className="text-gray-600 max-w-2xl mx-auto">
							Find answers to common questions about our certificate courses in Singapore
						</p>
					</div>

					<div className="space-y-3">
						{FAQ_DATA.map((faq, index) => (
							<details 
								key={index} 
								className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
							>
								<summary className="flex items-center justify-between w-full px-6 py-4 text-left cursor-pointer hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1AB69D]/40 transition-colors [&::-webkit-details-marker]:hidden">
									<span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
										{faq.question}
									</span>
									<span className="shrink-0 w-6 h-6 rounded-full bg-[#1AB69D]/10 grid place-items-center group-open:bg-[#1AB69D] transition-colors duration-200" aria-hidden="true">
										<svg 
											className="w-4 h-4 text-[#1AB69D] group-open:text-white group-open:rotate-45 transition-all duration-200" 
											viewBox="0 0 24 24"
											fill="none" 
											stroke="currentColor" 
											strokeWidth="2"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
										</svg>
									</span>
								</summary>
								<div className="px-6 pb-5 pt-1">
									<p className="text-gray-600 leading-relaxed text-sm md:text-base">
										{faq.answer}
									</p>
								</div>
							</details>
						))}
					</div>

					{/* Call to Action */}
					<div className="mt-12 text-center">
						<div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
							<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
								Still have questions?
							</h3>
							<p className="text-gray-600 mb-6 max-w-md mx-auto">
								Our admissions team is here to help you choose the right certificate course for your career goals.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a 
									href="/contact-us"
									className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all"
								>
									Contact Us
								</a>
								<a 
									href="tel:+65-6908-8885"
									className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#1AB69D] px-6 py-3 text-sm font-semibold text-[#1AB69D] hover:bg-[#1AB69D] hover:text-white transition-all"
								>
									Call Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
		</>
	);
}

