import Link from "next/link";

/**
 * Hub-and-spoke navigation for the supply chain interview content cluster.
 *
 * `RelatedArticles` links a post to whatever is newest on the blog, which is
 * fine for general crawl coverage but says nothing about topical structure.
 * This component encodes the cluster explicitly: the pillar links down to every
 * spoke, and every spoke links back up to the pillar and across to its
 * siblings. That two-way pattern is what tells search engines these five pages
 * are one topic with a single canonical entry point.
 *
 * To extend the cluster, add an entry here and the links appear on every other
 * page in the cluster automatically.
 */

export type ClusterPage = {
	slug: string;
	title: string;
	blurb: string;
};

export const CLUSTER_PILLAR: ClusterPage = {
	slug: "supply-chain-management-interview-questions",
	title: "50 Supply Chain Management Interview Questions & Answers (Singapore)",
	blurb:
		"The complete guide — fundamentals, planning, sourcing, logistics, inventory and behavioural questions in one place.",
};

export const CLUSTER_SPOKES: ClusterPage[] = [
	{
		slug: "logistics-executive-interview-questions",
		title: "40 Logistics Executive & Coordinator Interview Questions",
		blurb:
			"Freight modes, Incoterms 2020, TradeNet declarations, warehouse and transport operations.",
	},
	{
		slug: "procurement-interview-questions",
		title: "40 Procurement & Purchasing Interview Questions",
		blurb:
			"Strategic sourcing, tendering, negotiation, contracts, supplier performance and procurement ethics.",
	},
	{
		slug: "supply-chain-kpis",
		title: "20 Supply Chain KPIs Every Candidate Should Know",
		blurb:
			"Every formula an interviewer may ask you to define — OTIF, DIO, fill rate, forecast accuracy and more.",
	},
	{
		slug: "inventory-management-techniques",
		title: "Inventory Management Techniques Explained",
		blurb:
			"JIT vs JIC, EOQ, safety stock, reorder point, ABC analysis and FIFO/FEFO — with worked examples.",
	},
];

const ALL_CLUSTER_PAGES = [CLUSTER_PILLAR, ...CLUSTER_SPOKES];

export function clusterSlugs(): string[] {
	return ALL_CLUSTER_PAGES.map((page) => page.slug);
}

export default function SupplyChainCluster({
	currentSlug,
}: {
	currentSlug: string;
}) {
	const isPillar = currentSlug === CLUSTER_PILLAR.slug;
	const spokes = CLUSTER_SPOKES.filter((spoke) => spoke.slug !== currentSlug);

	return (
		<section className="bg-white border-t border-gray-100">
			<div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-5xl">
				<span className="text-sm font-semibold text-[#1AB69D] uppercase tracking-wide">
					Supply Chain Interview Guide
				</span>
				<h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
					{isPillar
						? "Go Deeper on Each Area"
						: "Continue Your Interview Preparation"}
				</h2>
				<p className="mt-2 text-gray-600">
					{isPillar
						? "This guide is the starting point. These companion guides drill into the roles and technical areas interviewers probe hardest."
						: "This article is part of our complete supply chain interview series. Start with the main guide, then work through the companion articles."}
				</p>

				{/* Pillar link — shown on spokes only, styled as the primary destination. */}
				{!isPillar && (
					<Link
						href={`/blog/${CLUSTER_PILLAR.slug}`}
						className="group mt-8 flex flex-col gap-2 rounded-2xl border-2 border-[#1AB69D]/40 bg-[#1AB69D]/5 p-6 shadow-sm hover:border-[#1AB69D] hover:shadow-lg transition-all duration-200"
					>
						<span className="text-xs font-bold uppercase tracking-wide text-[#1AB69D]">
							Start Here — Main Guide
						</span>
						<h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
							{CLUSTER_PILLAR.title}
						</h3>
						<p className="text-gray-700">{CLUSTER_PILLAR.blurb}</p>
						<span className="mt-1 inline-flex items-center text-sm font-semibold text-[#1AB69D]">
							Read the full guide
							<span className="ml-1 group-hover:translate-x-1 transition-transform">
								&rarr;
							</span>
						</span>
					</Link>
				)}

				<div className="mt-6 grid gap-5 sm:grid-cols-2">
					{spokes.map((spoke) => (
						<Link
							key={spoke.slug}
							href={`/blog/${spoke.slug}`}
							className="group flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-[#1AB69D]/60 hover:shadow-lg transition-all duration-200"
						>
							<h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
								{spoke.title}
							</h3>
							<p className="text-sm text-gray-600">{spoke.blurb}</p>
							<span className="mt-auto pt-2 inline-flex items-center text-sm font-semibold text-[#1AB69D]">
								Read Article
								<span className="ml-1 group-hover:translate-x-1 transition-transform">
									&rarr;
								</span>
							</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
