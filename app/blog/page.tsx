import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Education Blog | Edusphere College Singapore",
	description:
		"Read Edusphere insights on diploma programmes, career guidance, interview preparation, and practical learning tips in Singapore.",
};

const blogPosts = [
	{
		title: "60 Accountant Interview Questions & Answers in Singapore (2026)",
		description:
			"Prepare for your accounting interview in Singapore with 60 essential questions and answers covering financial reporting, taxation, auditing, GST, SFRS, and more.",
		slug: "accountant-interview-questions",
		image: "/homepage/dbfa-cover.jpg",
		date: "31 Mar, 2026",
		category: "Interview Preparation",
	},
	{
		title: "50 Maid Interview Questions & Answers in Singapore (2026)",
		description:
			"Prepare for your maid or domestic helper interview in Singapore with 50 essential questions and answers covering caregiving, housekeeping, childcare, eldercare, cooking, and employment regulations.",
		slug: "maid-interview-questions",
		image: "/homepage/addipcaregiving.jpg",
		date: "05 Apr, 2026",
		category: "Interview Preparation",
	},
	{
		title: "50 Waiter & Waitress Interview Questions & Answers in Singapore (2026)",
		description:
			"Ace your waiter or waitress interview in Singapore with 50 essential questions and answers covering customer service, F&B knowledge, restaurant operations, and career growth tips.",
		slug: "waiter-waitress-interview-questions-and-answers",
		image: "/homepage/addipcaregiving.jpg",
		date: "05 Apr, 2026",
		category: "Interview Preparation",
	},
];

export default function BlogPage() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero */}
			<section className="bg-white">
				<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
					<div className="flex flex-col items-start gap-3">
						<span className="text-sm font-semibold text-gray-500">
							Edusphere College
						</span>
						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
							Our Blog
						</h1>
						<p className="text-lg text-gray-600 max-w-3xl">
							Insights on diploma programmes, career guidance, interview
							preparation, and practical learning tips in Singapore.
						</p>
					</div>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="pb-16 md:pb-24 bg-white">
				<div className="container mx-auto px-4 md:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<Link
								key={post.slug}
								href={`/blog/${post.slug}`}
								className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#1AB69D]/60 transition-all duration-200"
							>
								<div className="relative h-48 md:h-56 overflow-hidden">
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
									<span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#1AB69D] text-white uppercase tracking-wide">
										{post.category}
									</span>
								</div>
								<div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
									<div className="flex items-center gap-2 text-xs text-gray-500">
										<svg
											className="w-3.5 h-3.5"
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
										<span>{post.date}</span>
									</div>
									<h2 className="text-base md:text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
										{post.title}
									</h2>
									<p className="text-sm text-gray-600 line-clamp-3">
										{post.description}
									</p>
									<div className="mt-auto pt-3">
										<span className="inline-flex items-center text-sm font-semibold text-[#1AB69D] group-hover:gap-2 transition-all">
											Read Article
											<span className="ml-1 group-hover:translate-x-1 transition-transform">
												&rarr;
											</span>
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
