import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Hotel Management Course in Singapore | Edusphere College",
	description:
		"Explore top hotel management courses in Singapore at Edusphere College. Diploma & advanced diploma programmes in hospitality management, hospital management, and e-learning options for working adults.",
	keywords:
		"hotel management course in singapore, hospitality management diploma singapore, hospital management course, hotel management diploma, hospitality e-learning singapore, Edusphere College",
	openGraph: {
		title: "Hotel Management Course in Singapore | Edusphere College",
		description:
			"Diploma & advanced diploma hotel management courses in Singapore. Flexible classroom and e-learning options at Edusphere College.",
		url: "https://edusphere.edu.sg/category/hotel-management-course-in-singapore",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "website",
	},
	alternates: {
		canonical: "https://edusphere.edu.sg/category/hotel-management-course-in-singapore",
	},
};

type HotelCourse = {
	title: string;
	description: string;
	badge: string;
	href: string;
	image: string;
};

const COURSES: HotelCourse[] = [
	{
		title: "Diploma in Hotel & Tourism Management",
		description:
			"Gain practical skills in healthcare facility operations, patient services coordination, and hospital administration to launch a career in the growing healthcare sector.",
		badge: "Part Time",
		href: "/diploma-in-hospital-management",
		image: "/homepage/diphospital.webp",
	},
	{
		title: "Diploma in Hotel & Tourism Management (E-Learning)",
		description:
			"Study hospitality operations, front office management, and guest services online at your own pace — perfect for working adults seeking flexible hotel management training.",
		badge: "E-Learning",
		href: "/diploma-in-hospitality-management-e-learning",
		image: "/homepage/elearnhotelmangeS.webp",
	},
	{
		title: "Advanced Diploma in Hospitality Management",
		description:
			"Advance your hospitality career with specialised modules in revenue management, strategic planning, and leadership for the hotel and tourism industry.",
		badge: "Part Time",
		href: "/advanced-diploma-in-hospitality-management",
		image: "/homepage/addiphospital.webp",
	},
];

const FAQ_DATA = [
	{
		question: "What is a hotel management course and who is it for?",
		answer: "A hotel management course teaches operational, administrative, and leadership skills needed in the hospitality and hotel industry. It is ideal for school leavers looking to enter the hospitality sector, working adults wanting to upskill, and career switchers interested in hotel operations, front office management, or guest services.",
	},
	{
		question: "What are the entry requirements for hotel management courses at Edusphere?",
		answer: "Most diploma programmes require a minimum of GCE 'O' Level or equivalent qualifications. For advanced diploma courses, applicants typically need a relevant diploma or equivalent work experience in the hospitality or hotel industry. Mature candidates with relevant industry experience may also be considered.",
	},
	{
		question: "Is there an e-learning option for hotel management courses?",
		answer: "Yes. The Diploma in Hospitality Management (E-Learning) allows you to study at your own pace from anywhere. It is designed for working professionals who need flexibility to balance work, family, and study commitments while earning a recognised qualification.",
	},
	{
		question: "How long does it take to complete a hotel management course in Singapore?",
		answer: "Diploma programmes typically take 8 to 12 months to complete, while advanced diploma programmes may take 6 to 8 months. E-learning courses offer flexible timelines so you can progress at a pace that suits your schedule.",
	},
	{
		question: "What career opportunities are available after completing a hotel management course?",
		answer: "Graduates can pursue roles such as hotel front office executive, guest relations officer, food & beverage supervisor, event coordinator, hospital administrator, or hospitality operations manager. Singapore's thriving tourism industry offers strong demand across hotels, resorts, hospitals, and service-oriented organisations.",
	},
	{
		question: "What is the difference between hospital management and hospitality management?",
		answer: "Hospital management focuses on healthcare facility operations including patient services, medical records, and healthcare compliance. Hospitality management covers hotel and tourism operations such as front office, housekeeping, food & beverage, and guest services. Both share core management principles but serve different industries.",
	},
	{
		question: "Are Edusphere's hotel management courses recognised by employers in Singapore?",
		answer: "Yes. Edusphere College is a registered Private Education Institution (PEI) in Singapore. Our courses are industry-aligned and recognised by employers across the hospitality, hotel, and healthcare sectors.",
	},
	{
		question: "Can I study hotel management part-time while working?",
		answer: "Absolutely. We offer evening and weekend classes for classroom programmes, as well as a fully online e-learning diploma. These flexible options allow working adults to upskill without leaving their jobs.",
	},
];

export default function HotelManagementCourseInSingapore() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		name: "Edusphere College",
		description:
			"Hotel management courses in Singapore covering hospitality operations, hospital management, and advanced hospitality leadership",
		url: "https://edusphere.edu.sg/category/hotel-management-course-in-singapore",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Hotel Management Courses",
			itemListElement: COURSES.map((course) => ({
				"@type": "Course",
				name: course.title,
				description: course.description,
				provider: {
					"@type": "EducationalOrganization",
					name: "Edusphere College",
				},
				courseMode: course.badge === "E-Learning" ? "online" : "blended",
				educationalCredentialAwarded: course.badge === "Advanced Programme" ? "Advanced Diploma" : "Diploma",
			})),
		},
	};

	const faqStructuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: FAQ_DATA.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
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
								Hospitality &amp; Hotel Management
							</span>
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
								Hotel Management Course in Singapore
							</h1>
							<p className="text-base md:text-lg text-gray-600 leading-relaxed">
								Build a successful career in Singapore&apos;s booming hospitality
								industry with our diploma and advanced diploma programmes in hotel
								and hospital management — available in classroom and e-learning
								formats.
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
									Our Hotel Management Courses
								</h2>
								<div className="w-16 h-1 bg-[#1AB69D] rounded-full mt-2" />
							</div>
							<p className="text-sm text-gray-500 max-w-md">
								Choose from classroom, e-learning, and advanced programmes designed
								to match your career stage and learning preference.
							</p>
						</div>

						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{COURSES.map((course) => (
								<article
									key={course.title}
									className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#1AB69D]/60 transition-all duration-200"
								>
									<div className="relative h-44 md:h-48 overflow-hidden bg-gray-100">
										<Image
											src={course.image}
											alt={course.title}
											fill
											className="object-cover transform group-hover:scale-105 transition-transform duration-300"
											sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
										<div className="absolute top-3 left-3 z-20">
											<span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-[#1AB69D]">
												{course.badge}
											</span>
										</div>
									</div>

									<div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
										<h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
											{course.title}
										</h3>
										<p className="text-xs md:text-sm text-gray-600 flex-1">
											{course.description}
										</p>

										<div className="pt-1">
											<Link
												href={course.href}
												className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all"
											>
												View Course Details
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
											</Link>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Why Study Hotel Management */}
				<section className="py-12 md:py-16 bg-gray-50">
					<div className="container mx-auto px-4 md:px-8 max-w-5xl">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
							Why Study a Hotel Management Course in Singapore?
						</h2>
						<div className="w-16 h-1 bg-[#1AB69D] rounded-full mb-8" />

						<div className="grid md:grid-cols-2 gap-6">
							{[
								{
									title: "Thriving Tourism Industry",
									text: "Singapore consistently ranks among Asia's top tourism destinations, creating strong demand for trained hospitality professionals across hotels, resorts, and event management.",
								},
								{
									title: "Diverse Career Opportunities",
									text: "From front office management and food & beverage to healthcare administration, a hotel management qualification opens doors across multiple service-oriented industries.",
								},
								{
									title: "Flexible Learning Options",
									text: "Choose between classroom-based learning, e-learning, or advanced programmes that fit around your work schedule and personal commitments.",
								},
								{
									title: "Practical, Industry-Focused Training",
									text: "Our courses are designed with input from industry professionals, ensuring you gain skills that employers value — from guest services to revenue management.",
								},
							].map((item) => (
								<div
									key={item.title}
									className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
								>
									<h3 className="text-lg font-bold text-gray-900 mb-2">
										{item.title}
									</h3>
									<p className="text-sm text-gray-600 leading-relaxed">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-12 md:py-16 bg-white">
					<div className="container mx-auto px-4 md:px-8 max-w-4xl">
						<div className="text-center mb-10">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
								Frequently Asked Questions
							</h2>
							<div className="w-16 h-1 bg-[#1AB69D] rounded-full mx-auto mb-4" />
							<p className="text-gray-600 max-w-2xl mx-auto">
								Find answers to common questions about hotel management courses in
								Singapore
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
										<span
											className="shrink-0 w-6 h-6 rounded-full bg-[#1AB69D]/10 grid place-items-center group-open:bg-[#1AB69D] transition-colors duration-200"
											aria-hidden="true"
										>
											<svg
												className="w-4 h-4 text-[#1AB69D] group-open:text-white group-open:rotate-45 transition-all duration-200"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v12m6-6H6"
												/>
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
									Ready to start your hotel management career?
								</h3>
								<p className="text-gray-600 mb-6 max-w-md mx-auto">
									Speak with our admissions team to find the right hotel management
									course for your goals.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Link
										href="/contact-us"
										className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all"
									>
										Contact Us
									</Link>
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
