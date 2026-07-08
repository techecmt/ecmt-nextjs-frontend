import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../data/blog-posts";

/**
 * Cross-links each blog post to a few others so no post is a crawl dead-end.
 * Renders nothing if there are no other posts to show.
 */
export default function RelatedArticles({
	currentSlug,
	limit = 3,
}: {
	currentSlug: string;
	limit?: number;
}) {
	const related = blogPosts
		.filter((post) => post.slug !== currentSlug)
		.slice(0, limit);

	if (related.length === 0) return null;

	return (
		<section className="bg-gray-50 border-t border-gray-100">
			<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
				<div className="flex items-end justify-between gap-4 mb-8">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
						Related Articles
					</h2>
					<Link
						href="/blog"
						className="text-sm font-semibold text-[#1AB69D] hover:underline whitespace-nowrap"
					>
						View all &rarr;
					</Link>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{related.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#1AB69D]/60 transition-all duration-200"
						>
							<div className="relative h-44 md:h-48 overflow-hidden">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-300"
									sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
								/>
								<span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#1AB69D] text-white uppercase tracking-wide">
									{post.category}
								</span>
							</div>
							<div className="flex flex-col flex-1 p-5 gap-2">
								<span className="text-xs text-gray-500">{post.date}</span>
								<h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
									{post.title}
								</h3>
								<span className="mt-auto pt-2 inline-flex items-center text-sm font-semibold text-[#1AB69D]">
									Read Article
									<span className="ml-1 group-hover:translate-x-1 transition-transform">
										&rarr;
									</span>
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
