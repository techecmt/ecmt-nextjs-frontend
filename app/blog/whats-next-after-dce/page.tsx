import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import RelatedArticles from "../../components/RelatedArticles";

export const metadata: Metadata = {
	title:
		"You Have Your Civil Engineering Diploma. Here's the One Course That Turns It Into a Career | Edusphere",
	description:
		"Explore why the Advanced Diploma in Project Coordinator (Building Services & Fire Safety) is a strong next step after a Diploma in Civil Engineering in Singapore.",
	keywords:
		"diploma in civil engineering what next, advanced diploma Project Coordinator singapore, building services and fire safety course, part-time engineering diploma singapore, edusphere engineering programmes",
	openGraph: {
		title:
			"You Have Your Civil Engineering Diploma. Here's the One Course That Turns It Into a Career",
		description:
			"Already have a Diploma in Civil Engineering? Discover how this advanced diploma helps you move into higher-value coordination and management-track roles.",
		url: "https://edusphere.edu.sg/blog/whats-next-after-dce",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-06-10T00:00:00Z",
		modifiedTime: "2026-06-10T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/herosections/adec_hero.png",
				width: 1200,
				height: 630,
				alt: "Advanced Diploma in Project Coordinator programme",
			},
		],
	},
	alternates: {
		canonical: "https://edusphere.edu.sg/blog/whats-next-after-dce",
	},
	authors: [{ name: "Edusphere College Editorial Team" }],
};

const modules = [
	"Engineering Coordination & Project Management",
	"Air-conditioning & Mechanical Ventilation",
	"Water, Sanitary & Gas Services",
	"Building Electrical Systems & Design",
	"Fire Safety Management",
	"Intelligent & Green Buildings",
];

const jobRoles = [
	"Project Coordinator",
	"Building Services Engineer",
	"Facilities Manager",
	"Fire Safety Manager",
	"M&E Coordinator",
	"Project Engineer",
	"Technical Officer",
	"Building Systems Technician",
	"Sustainability Engineer",
];

export default function WhatsNextAfterDcePage() {
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline:
			"You Have Your Civil Engineering Diploma. Here's the One Course That Turns It Into a Career",
		description:
			"A practical career guide for civil engineering diploma holders in Singapore exploring the Advanced Diploma in Project Coordinator (Building Services & Fire Safety).",
		image: "https://edusphere.edu.sg/herosections/adec_hero.png",
		author: {
			"@type": "Organization",
			name: "Edusphere College Editorial Team",
			url: "https://edusphere.edu.sg",
		},
		publisher: {
			"@type": "EducationalOrganization",
			name: "Edusphere College of Management and Technology Pte Ltd",
			logo: {
				"@type": "ImageObject",
				url: "https://edusphere.edu.sg/brand/edusphere-logo.png",
			},
			url: "https://edusphere.edu.sg",
		},
		datePublished: "2026-06-10",
		dateModified: "2026-06-10",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://edusphere.edu.sg/blog/whats-next-after-dce",
		},
		articleSection: "Career Progression",
		keywords:
			"diploma in civil engineering, Project Coordinator singapore, building services course, fire safety management, green buildings",
		inLanguage: "en-SG",
	};

	return (
		<main className="min-h-screen bg-white">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>

			<section className="bg-white">
				<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
					<div className="flex flex-col items-start gap-4">
						<span className="text-sm font-semibold text-gray-500">Blog</span>
						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 max-w-5xl">
							You Have Your Civil Engineering Diploma. Here&apos;s the One
							Course That Turns It Into a Career.
						</h1>

						<div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
							<div className="inline-flex items-center gap-2">
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span>10 Jun, 2026</span>
							</div>
							<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-xs font-semibold">
								Career Progression
							</span>
							<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
								Civil Engineering
							</span>
						</div>

						<div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-lg">
							<Image
								src="/herosections/adec_hero.png"
								alt="Advanced Diploma in Project Coordinator programme"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
							<div className="absolute bottom-6 left-6 right-6">
								<p className="text-white text-lg md:text-2xl font-semibold leading-snug max-w-3xl drop-shadow">
									From civil diploma holder to coordination-track professional:
									the next step that helps you move up faster.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 md:py-16 bg-white">
				<div className="container mx-auto px-4 md:px-8 max-w-5xl">
					<article className="space-y-12 text-gray-800">
						<div className="space-y-4">
							<p className="text-lg leading-relaxed">
								So you&apos;ve done it. The site visits, the structural
								drawings, the late-night assignments - your Diploma in Civil
								Engineering is in your hands. Congratulations.
							</p>
							<p className="leading-relaxed">
								Now comes the question nobody warns you about: what next? A
								diploma gets you in the door. But the people who move up fast in
								the built environment are not only the ones who know how a
								building stands up - they are the ones who know how a building
								runs.
							</p>
							<p className="leading-relaxed">
								The wiring, the cooling, the water, the fire systems, the smart
								controls - and the coordination that holds it all together.
								That&apos;s exactly what the Advanced Diploma in Engineering
								Coordinator (Building Services &amp; Fire Safety) at Edusphere
								College is built to teach.
							</p>
						</div>

						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Civil engineering tells you how a building is built. This tells
								you how it works.
							</h2>
							<p className="leading-relaxed">
								Your civil diploma gave you structure: foundations, concrete,
								loads, and drawings. Valuable - but only half the picture. Every
								modern building is a living system of services running behind the
								walls, and those systems need someone who can coordinate them.
							</p>
							<p className="leading-relaxed">
								This Advanced Diploma fills in the half your civil training
								didn&apos;t cover through six focused modules:
							</p>
							<div className="grid sm:grid-cols-2 gap-3">
								{modules.map((module) => (
									<div
										key={module}
										className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800"
									>
										<span className="font-semibold">{module}</span>
									</div>
								))}
							</div>
							<p className="leading-relaxed">
								Put your civil foundation together with these building services
								skills, and you stop being a diploma holder looking for a job.
								You become the person who can stand in the middle of a project
								and make every trade work together.
							</p>
						</div>

						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								The job titles this opens up are not entry-level dead ends
							</h2>
							<p className="leading-relaxed">
								A lot of courses promise career opportunities and leave it vague.
								Let&apos;s be specific. After this programme, roles realistically
								in front of you include:
							</p>
							<div className="flex flex-wrap gap-2.5">
								{jobRoles.map((role) => (
									<span
										key={role}
										className="inline-flex items-center rounded-full bg-[#1AB69D]/10 text-[#1AB69D] px-3 py-1.5 text-sm font-semibold"
									>
										{role}
									</span>
								))}
							</div>
							<p className="leading-relaxed">
								Notice the pattern: these are coordination and management-track
								roles. They sit above pure technical execution. You are not just
								adding another skill to the pile - you are moving onto a pathway
								that leads to leading projects, not just working on them.
							</p>
						</div>

						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								It&apos;s designed for someone exactly like you - building a
								career while building a life
							</h2>
							<p className="leading-relaxed">
								This is a part-time, 12-month programme with 186 contact hours,
								taught through blended learning - a mix of face-to-face classes
								and e-learning.
							</p>
							<p className="leading-relaxed">
								Translation: you can work, earn, and gain real site experience
								while you study. You don&apos;t have to choose between a paycheck
								and an upgrade.
							</p>
							<div className="grid md:grid-cols-2 gap-4">
								<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										Programme Format
									</h3>
									<ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
										<li>Part-time (12 months)</li>
										<li>186 contact hours</li>
										<li>Blended: face-to-face + e-learning</li>
										<li>Built for working adults</li>
									</ul>
								</div>
								<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										Entry Notes
									</h3>
									<ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
										<li>Local Diploma holders can apply</li>
										<li>Minimum age: 21</li>
										<li>Mature candidate pathway available (case by case)</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								The maths makes sense
							</h2>
							<p className="leading-relaxed">
								Let&apos;s talk honestly about cost, because it matters. The
								total nett course fee is S$2,997.50 (course fee S$2,750 + 9% GST
								+ a S$109 registration fee), and it is payable in monthly
								instalments over 12 months.
							</p>
							<p className="leading-relaxed">
								When you compare that monthly outlay with the long-term earning
								potential of moving into Project Coordinator, Facilities
								Management, or M&amp;E project-track roles, this is less an
								expense and more an upgrade investment.
							</p>
						</div>

						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Fire safety and green buildings are not trends - they are the
								future of the job
							</h2>
							<p className="leading-relaxed">
								Two modules deserve a special mention because demand is only
								going up. Fire Safety Management is regulated, mandatory, and
								non-negotiable in the built environment. Every building needs
								people who understand it, making it one of the most stable
								specialisations you can hold.
							</p>
							<p className="leading-relaxed">
								Intelligent and Green Buildings are also where the industry is
								moving: smart controls, energy efficiency, and sustainability.
								Learning this now means you are preparing for where projects are
								going, not where they were.
							</p>
						</div>

						<div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8 space-y-4">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								So - why this course, and why now?
							</h2>
							<p className="leading-relaxed">
								Because your diploma is a foundation, and foundations are meant
								to be built on. Waiting does not make you more employable; adding
								the right skills does.
							</p>
							<p className="leading-relaxed">
								This Advanced Diploma extends your civil knowledge into the exact
								areas where better-paid, harder-to-replace roles live:
								coordination, building services, fire safety, and smart
								buildings.
							</p>
							<p className="leading-relaxed">
								You&apos;ve already done the hard part. The next 12 months can be
								the difference between having a qualification and having a
								career.
							</p>
						</div>

						<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 md:p-8">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Ready to take the next step?
							</h2>
							<p className="mt-3 text-gray-700 leading-relaxed">
								Edusphere College runs this programme part-time so it fits around
								your work and life. Learn more, get the full module breakdown, or
								start your registration today.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<Link
									href="/advanced-diploma-in-engineering-coordinator/"
									className="inline-flex items-center rounded-full bg-[#1AB69D] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#149985]"
								>
									View Programme Details
								</Link>
								<Link
									href="/contact-us"
									className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
								>
									Start Registration Enquiry
								</Link>
							</div>
						</div>
					</article>
				</div>
			</section>

			<RelatedArticles currentSlug="whats-next-after-dce" />

			<ContactForm />
		</main>
	);
}
