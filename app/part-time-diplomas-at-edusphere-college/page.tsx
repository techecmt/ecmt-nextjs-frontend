import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/contactform";

export const metadata: Metadata = {
    title: "Part-Time Diplomas at Edusphere College Singapore",
    description: "Balance work and study with flexible part-time diplomas at Edusphere College. Evening classes, online learning, career-focused programs in business, IT, and hospitality.",
    keywords: "part-time diploma singapore, flexible learning singapore, evening classes diploma, online diploma singapore, working adults education",
    openGraph: {
        title: "Part-Time Diplomas at Edusphere College: Balancing Work and Study",
        description: "Discover flexible part-time diploma programs at Edusphere College designed for working professionals in Singapore.",
        url: "https://www.edusphere.edu.sg/part-time-diplomas-at-edusphere-college",
        siteName: "Edusphere College of Management and Technology",
        locale: "en_SG",
        type: "article",
        publishedTime: "2025-07-08T00:00:00Z",
        modifiedTime: "2026-02-13T00:00:00Z",
        images: [{
            url: "https://www.edusphere.edu.sg/homepage/Registration-1111x1536.webp",
            width: 1200,
            height: 630,
            alt: "Part-time diploma students at Edusphere"
        }],
    },
    alternates: {
        canonical: "https://www.edusphere.edu.sg/part-time-diplomas-at-edusphere-college",
    },
    authors: [{ name: "Edusphere College Editorial Team" }],
};

export default function PartTimeDiplomasEdusphere() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Part-Time Diplomas at Edusphere College: Balancing Work and Study",
        "description": "Explore flexible part-time diploma programs at Edusphere College designed for working adults in Singapore. Learn about evening classes, online learning options, and career-focused programs that allow you to advance your education while maintaining your career.",
        "image": "https://www.edusphere.edu.sg/homepage/Registration-1111x1536.webp",
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
        "datePublished": "2025-07-08",
        "dateModified": "2026-02-13",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.edusphere.edu.sg/part-time-diplomas-at-edusphere-college"
        },
        "articleSection": "Education",
        "keywords": "part-time diploma, flexible learning, working adults education, evening classes, online diploma, career advancement",
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
							Part-Time Diplomas at Edusphere College: Balancing Work and Study
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
								<span>08 Jul, 2025</span>
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
								src="/homepage/Registration-1111x1536.webp"
								alt="Part-time diploma students at Edusphere"
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
								Working full-time while studying should not feel like juggling fire. Edusphere&apos;s part-time diplomas are built for working professionals, parents, and mid-career switchers who need flexibility without pausing their career.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<h2 className="text-xl font-semibold text-gray-900">Why part-time makes sense</h2>
								<p className="mt-2 text-gray-700">Stay competitive in Singapore&apos;s fast-moving job market across engineering, hospitality, logistics, or caregiving—while earning and learning.</p>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">What makes our part-time diplomas the best option?</h2>
							<ul className="grid gap-3 md:grid-cols-2 text-gray-700">
								{["Schedule flexibility around work and family", "Career-relevant, applied skills", "Balanced learning pace for working adults", "Keep earning while you upskill"].map((item) => (
									<li key={item} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">{item}</li>
								))}
							</ul>
							<p className="text-gray-700">Courses are customised for adult learners—built to fit your life.</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Adjustable timetables for learning</h2>
							<ul className="list-disc space-y-2 pl-5 text-gray-700">
								<li>Hybrid formats (online + on-campus)</li>
								<li>Small class sizes for focused attention</li>
								<li>Assignments tied to real-world scenarios</li>
							</ul>
							<p className="text-gray-700">Example: Evening sessions in the Diploma in Hospitality Services suit F&amp;B, retail, and customer service professionals.</p>
						</div>

						<div className="space-y-3">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Maintain your career focus while you learn</h2>
							<p className="text-gray-700">From Elder Caregiving to Mechanical &amp; Electrical Engineering, our part-time tracks help you upskill or pivot without career breaks. Industry trainers bring practical scenarios you can apply immediately.</p>
							<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
								<p className="font-semibold text-gray-900">Trainer example</p>
								<p className="mt-1 text-gray-700">A logistics diploma trainer with 10+ years in freight and warehousing shares real guidance from the field.</p>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Real stories from real students</h2>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<p className="italic text-gray-800">“As a full-time hotel supervisor, I didn’t think I could study again. Edusphere’s evening classes and supportive trainers made it possible.”</p>
									<p className="mt-2 font-semibold text-gray-900">— Mei Ling, Diploma in Hospitality Services</p>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
									<p className="italic text-gray-800">“I switched to elderly care after my part-time diploma. The skills were immediately applicable.”</p>
									<p className="mt-2 font-semibold text-gray-900">— Rajesh, Diploma in Caregiving</p>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Supported and affordable education</h2>
							<ul className="list-disc space-y-2 pl-5 text-gray-700">
								<li>Eligible grants and subsidies (profile and course dependent)</li>
								<li>Monthly installment plans</li>
								<li>Guidance on using SkillsFuture Credit</li>
							</ul>
							<p className="text-gray-700">Invest in your future while managing cash flow—speak with us for payment support options.</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Are you a good fit for a part-time diploma?</h2>
							<ul className="list-disc space-y-2 pl-5 text-gray-700">
								<li>Want to upskill but cannot leave your job</li>
								<li>Plan to switch careers but need a starting path</li>
								<li>Need a timetable that respects your commitments</li>
							</ul>
							<p className="text-gray-700">If you said “yes,” a part-time diploma at Edusphere is likely right for you.</p>
						</div>

						<div className="space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">Closing thoughts</h2>
							<p className="text-gray-700">Balancing work and study is possible when the program is designed around you. Edusphere helps you advance without pausing your life.</p>
							<div className="rounded-2xl border border-[#1AB69D] bg-[#1AB69D]/10 p-6 shadow-sm">
								<p className="text-gray-900 font-semibold">Ready to apply?</p>
								<p className="mt-2 text-gray-700">Apply now or speak to our course advisors to find a timetable that fits.</p>
							</div>
						</div>
					</article>
				</div>
			</section>

			<ContactForm />
		</main>
	);
}
