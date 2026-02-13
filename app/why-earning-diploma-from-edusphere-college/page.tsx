import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/contactform";

export const metadata: Metadata = {
    title: "Why Earn a Diploma from Edusphere College Singapore",
    description: "Discover why Edusphere College is a smart choice for professional education in Singapore. Affordable fees, flexible learning, industry-recognized diplomas, and career support.",
    keywords: "edusphere college singapore, private diploma singapore, affordable diploma courses, flexible learning singapore, career advancement education",
    openGraph: {
        title: "Why Earning a Diploma from Edusphere College Is a Wise Professional Choice",
        description: "Learn why professionals choose Edusphere College for diploma programs - affordable, flexible, and industry-recognized.",
        url: "https://www.edusphere.edu.sg/why-earning-diploma-from-edusphere-college",
        siteName: "Edusphere College of Management and Technology",
        locale: "en_SG",
        type: "article",
        publishedTime: "2025-07-05T00:00:00Z",
        modifiedTime: "2026-02-13T00:00:00Z",
        images: [{
            url: "https://www.edusphere.edu.sg/homepage/Registration.webp",
            width: 1200,
            height: 630,
            alt: "Students enrolling at Edusphere"
        }],
    },
    alternates: {
        canonical: "https://www.edusphere.edu.sg/why-earning-diploma-from-edusphere-college",
    },
    authors: [{ name: "Edusphere College Editorial Team" }],
};

export default function WhyDiplomaEdusphere() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Earning a Diploma from Edusphere College Is a Wise Professional Choice in Singapore",
        "description": "Comprehensive guide explaining why Edusphere College is an excellent choice for professional education in Singapore. Covers affordable fees, flexible learning options, industry-recognized diplomas, experienced faculty, and comprehensive career support.",
        "image": "https://www.edusphere.edu.sg/homepage/Registration.webp",
        "author": {
            "@type": "Organization",
            "name": "Edusphere College Editorial Team",
            "url": "https://www.edusphere.edu.sg"
        },
        "publisher": {
            "@type": "EducationalOrganization",
            "name": "Edusphere College of Management and Technology Pte Ltd",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.edusphere.edu.sg/brand/edusphere-logo.png"
            },
            "url": "https://www.edusphere.edu.sg"
        },
        "datePublished": "2025-07-05",
        "dateModified": "2026-02-13",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.edusphere.edu.sg/why-earning-diploma-from-edusphere-college"
        },
        "articleSection": "Education",
        "keywords": "edusphere college, diploma programs singapore, career education, flexible learning, affordable education",
        "inLanguage": "en-SG"
    };

	return (
		<main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
			{/* Hero */}
			<section className="bg-white">
				<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
					<div className="flex flex-col items-start gap-4">
						<span className="text-sm font-semibold text-gray-500">Blog</span>

						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 max-w-5xl">
							Why Earning a Diploma from Edusphere College Is a Wise Professional Choice in Singapore
						</h1>

						<div className="flex items-center gap-6 text-gray-600 text-sm">
							<div className="inline-flex items-center gap-2">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span>05 Jul, 2025</span>
							</div>
							<div className="inline-flex items-center gap-2">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-10H7a2 2 0 00-2 2v6a2 2 0 002 2h6m0-10V6a2 2 0 00-2-2H7m6 4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4"
									/>
								</svg>
								<span>Com 0</span>
							</div>
						</div>

						<div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-lg">
							<Image
								src="/homepage/Registration.webp"
								alt="Students enrolling at Edusphere"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-12 md:py-16 bg-white">
				<div className="container mx-auto px-4 md:px-8 max-w-5xl">
					<article className="space-y-12 text-gray-800">
						<div className="space-y-4">
							<p className="text-lg leading-relaxed">
								Selecting the right diploma can accelerate your career. At Edusphere, working adults and students upskill with applied learning guided by industry practitioners across engineering, hospitality, caregiving, and logistics.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<h2 className="text-xl font-semibold text-gray-900">Designed for real career growth</h2>
								<p className="mt-2 text-gray-700">Hands-on, practical training that aligns to Singapore&apos;s job market—not just textbook theory.</p>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">What makes our diplomas stand out?</h2>
							<ul className="grid gap-3 md:grid-cols-2 text-gray-700">
								{["Tailored for job readiness and industry relevance", "Applied learning with real-life scenarios", "Built for working adults and career switchers", "Delivered by experienced trainers from the field"].map((item) => (
									<li key={item} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">{item}</li>
								))}
							</ul>
							<p className="text-gray-800 font-semibold">Explore programmes across engineering, hospitality, logistics, and healthcare.</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Who are these diplomas ideal for?</h2>
							<ul className="grid gap-3 md:grid-cols-2 text-gray-700">
								{["Young professionals looking to fast-track", "Mid-career individuals seeking a new path", "Adult learners needing flexible study options", "Employers upskilling teams"].map((item) => (
									<li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">{item}</li>
								))}
							</ul>
							<p className="text-gray-700">Whether it is mechanical engineering, eldercare, or logistics operations, we have pathways for your goals.</p>
						</div>

						<div className="space-y-3">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Learn from industry experts</h2>
							<p className="text-gray-700">Our trainers bring years of field experience—sharing insights only practitioners have.</p>
							<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
								<p className="font-semibold text-gray-900">Example</p>
								<p className="mt-1 text-gray-700">Civil and mechanical engineering trainers have delivered large-scale infrastructure projects and bring those lessons directly into class.</p>
							</div>
						</div>

						<div className="space-y-3">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Flexible and part-time learning</h2>
							<ul className="list-disc space-y-2 pl-5 text-gray-700">
								<li>Evening and weekend classes</li>
								<li>Blended formats (on-campus + online)</li>
								<li>Shorter durations without losing depth</li>
							</ul>
							<p className="text-gray-700">Your learning fits your lifestyle—not the other way around.</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Career opportunities after graduation</h2>
							<ul className="grid gap-3 md:grid-cols-2 text-gray-700">
								{["Engineering and construction", "Logistics and supply chain", "Healthcare and caregiving", "Hospitality and food services"].map((item) => (
									<li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">{item}</li>
								))}
							</ul>
							<p className="text-gray-700">Alumni secure roles locally and regionally, and many progress to higher studies.</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">What our students say</h2>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<p className="italic text-gray-800">“The trainers were patient and supportive. I gained confidence to apply for roles I never thought I could handle.”</p>
									<p className="mt-2 font-semibold text-gray-900">— Alvin, Diploma in Electrical Engineering</p>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
									<p className="italic text-gray-800">“Edusphere gave me flexibility while working full-time. Classes were practical and the environment supportive.”</p>
									<p className="mt-2 font-semibold text-gray-900">— Farah, Diploma in Hospitality Services</p>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to take the next step?</h2>
							<div className="rounded-2xl border border-[#1AB69D] bg-[#1AB69D]/10 p-6 shadow-sm">
								<p className="text-gray-900 font-semibold">A diploma from Edusphere is a stepping stone to better roles, income, and growth.</p>
								<p className="mt-2 text-gray-700">Apply now or speak to our course advisors for guidance on the best pathway.</p>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Part-time diplomas at Edusphere College</h2>
							<p className="text-gray-700">Discover diplomas designed for working adults and career switchers across engineering, hospitality, logistics, and healthcare.</p>
						</div>
					</article>
				</div>
			</section>

			<ContactForm />
		</main>
	);
}
