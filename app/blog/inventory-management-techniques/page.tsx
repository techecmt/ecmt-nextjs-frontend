import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import RelatedArticles from "../../components/RelatedArticles";
import SupplyChainCluster from "../../components/SupplyChainCluster";
import { courseData } from "../../data/courses";

export const metadata: Metadata = {
	title: "Inventory Management Techniques Explained: JIT, EOQ & Safety Stock",
	description:
		"A practical guide to inventory management techniques — JIT vs JIC, EOQ, safety stock, reorder point, ABC analysis, FIFO and FEFO, MTS vs MTO and cycle counting — with worked examples and interview answers.",
	keywords:
		"inventory management techniques, JIT vs JIC, EOQ formula, safety stock formula, reorder point calculation, ABC analysis inventory, FIFO FEFO LIFO, make to stock vs make to order, cycle counting, excess and obsolete inventory",
	openGraph: {
		title: "Inventory Management Techniques Explained: JIT, EOQ & Safety Stock",
		description:
			"JIT vs JIC, EOQ, safety stock, reorder point, ABC analysis, FIFO/FEFO and cycle counting — explained with worked examples for interview preparation.",
		url: "https://edusphere.edu.sg/blog/inventory-management-techniques",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-07-28T00:00:00Z",
		modifiedTime: "2026-07-28T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/blogimages/inventory-management-techniques.jpg",
				width: 1200,
				height: 630,
				alt: "Inventory management techniques explained",
			},
		],
	},
	alternates: {
		canonical:
			"https://edusphere.edu.sg/blog/inventory-management-techniques",
	},
	authors: [{ name: "Edusphere College Editorial Team" }],
};

const faqQuestions = [
	{
		question: "What is the difference between JIT and JIC inventory?",
		answer:
			"Just-in-Time minimises holding cost by receiving material only as it is needed, which requires short, reliable lead times and accurate forecasts. Just-in-Case deliberately holds buffer stock to absorb demand spikes and supply disruption. JIT optimises for cost and JIC optimises for resilience; most companies now run a hybrid, applying JIT to stable low-risk items and JIC to critical or single-sourced ones.",
	},
	{
		question: "What is the EOQ formula?",
		answer:
			"Economic Order Quantity equals the square root of (2 × annual demand × ordering cost per order) divided by the annual holding cost per unit. It identifies the order size where total ordering cost and total holding cost are balanced, minimising the combined cost.",
	},
	{
		question: "How do you calculate safety stock?",
		answer:
			"The common statistical method multiplies a service factor (the Z-score for your target service level) by the standard deviation of demand over the replenishment lead time. For a 95% service level the Z-score is 1.65, so safety stock equals 1.65 times that standard deviation.",
	},
	{
		question: "How do you calculate the reorder point?",
		answer:
			"Reorder point equals average daily demand multiplied by the lead time in days, plus safety stock. It is the stock level at which a replenishment order must be placed so that stock does not run out before the new order arrives.",
	},
	{
		question: "What is ABC analysis in inventory management?",
		answer:
			"ABC analysis ranks SKUs by annual consumption value. Roughly 20% of items (A) typically account for around 80% of value, B items sit in the middle, and C items are numerous but low value. Each class then receives a different level of control, so management effort is concentrated where the money is.",
	},
	{
		question: "What is the difference between FIFO and FEFO?",
		answer:
			"FIFO issues the oldest received stock first, based on receipt date. FEFO issues stock with the earliest expiry date first, regardless of when it was received. FEFO is essential for pharmaceuticals, food and any dated product, because the oldest stock received is not always the soonest to expire.",
	},
];

export default function InventoryManagementTechniques() {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				headline:
					"Inventory Management Techniques Explained: JIT, EOQ, Safety Stock and ABC Analysis",
				description:
					"A practical guide to the inventory management techniques tested in supply chain interviews, with formulas and worked examples.",
				image:
					"https://edusphere.edu.sg/blogimages/inventory-management-techniques.jpg",
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
				datePublished: "2026-07-28",
				dateModified: "2026-07-28",
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id":
						"https://edusphere.edu.sg/blog/inventory-management-techniques",
				},
				articleSection: "Career Preparation",
				keywords:
					"inventory management techniques, JIT, EOQ, safety stock, reorder point, ABC analysis, FIFO, FEFO, cycle counting",
				inLanguage: "en-SG",
				isPartOf: {
					"@type": "WebPage",
					"@id":
						"https://edusphere.edu.sg/blog/supply-chain-management-interview-questions",
				},
			},
			{
				"@type": "FAQPage",
				mainEntity: faqQuestions.map((item) => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.answer,
					},
				})),
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "https://edusphere.edu.sg",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Blog",
						item: "https://edusphere.edu.sg/blog",
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "Supply Chain Management Interview Questions",
						item: "https://edusphere.edu.sg/blog/supply-chain-management-interview-questions",
					},
					{
						"@type": "ListItem",
						position: 4,
						name: "Inventory Management Techniques",
						item: "https://edusphere.edu.sg/blog/inventory-management-techniques",
					},
				],
			},
		],
	};

	return (
		<main className="min-h-screen bg-white">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			{/* Hero */}
			<section className="bg-white">
				<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
					<div className="flex flex-col items-start gap-4">
						<span className="text-sm font-semibold text-gray-500">Blog</span>

						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 max-w-5xl">
							Inventory Management Techniques Explained: JIT, EOQ, Safety Stock
							and ABC Analysis
						</h1>

						<div className="flex items-center gap-6 text-gray-600 text-sm">
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
								<span>28 Jul, 2026</span>
							</div>
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
										d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-10H7a2 2 0 00-2 2v6a2 2 0 002 2h6m0-10V6a2 2 0 00-2-2H7m6 4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4"
									/>
								</svg>
								<span>Com 0</span>
							</div>
						</div>

						<div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-lg">
							<Image
								src="/blogimages/inventory-management-techniques.jpg"
								alt="Warehouse aisle with tall pallet racking holding stacked cartons and shrink-wrapped pallets"
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
						{/* Introduction */}
						<div className="space-y-4">
							<p className="text-lg leading-relaxed">
								Inventory is where supply chain decisions become visible on the
								balance sheet, which is why interviewers push hardest here. They
								are rarely testing whether you can recite a definition — they
								want to know whether you understand the trade-off every
								inventory technique is trying to resolve: holding too much ties
								up cash, holding too little loses sales. This guide covers the
								techniques that come up, with the formulas and worked examples.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<p className="text-gray-700">
									<span className="font-semibold text-gray-900">
										Part of a series.
									</span>{" "}
									This is a companion guide to our main{" "}
									<Link
										href="/blog/supply-chain-management-interview-questions"
										className="text-[#1AB69D] font-semibold hover:underline"
									>
										supply chain management interview questions guide
									</Link>
									. The metrics used to measure inventory performance are
									defined in our{" "}
									<Link
										href="/blog/supply-chain-kpis"
										className="text-[#1AB69D] font-semibold hover:underline"
									>
										supply chain KPI guide
									</Link>
									.
								</p>
							</div>
						</div>

						{/* Why inventory exists */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Why Inventory Exists at All
							</h2>
							<p>
								Before techniques, understand purpose. Inventory exists for four
								reasons, and a strong interview answer names them: cycle stock
								covers demand between replenishments; safety stock absorbs
								variability in demand and lead time; anticipation stock covers
								known future events such as a promotion, a plant shutdown or
								Chinese New Year factory closures; and pipeline stock is
								whatever is in transit. Each type is reduced by a different
								lever, which is why &ldquo;just cut inventory&rdquo; is never a
								strategy.
							</p>
						</div>

						{/* JIT vs JIC */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								1. Just-in-Time vs Just-in-Case
							</h2>
							<p>
								This is the most frequently asked inventory question in supply
								chain interviews, and the expected answer has changed since
								2020.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full min-w-[560px] text-left text-sm">
									<thead className="bg-gray-50 text-gray-900">
										<tr>
											<th className="px-4 py-3 font-semibold">Factor</th>
											<th className="px-4 py-3 font-semibold">
												Just-in-Time (JIT)
											</th>
											<th className="px-4 py-3 font-semibold">
												Just-in-Case (JIC)
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 text-gray-700">
										{[
											[
												"Objective",
												"Minimise holding cost and waste",
												"Protect availability against disruption",
											],
											[
												"Stock level",
												"Minimal — material arrives as needed",
												"Deliberate buffer above expected demand",
											],
											[
												"Requires",
												"Reliable suppliers, short lead times, accurate forecasts",
												"Working capital and storage space",
											],
											[
												"Main risk",
												"A single supply failure halts operations",
												"Excess, obsolescence and tied-up cash",
											],
											[
												"Best suited to",
												"Stable demand, local or reliable supply, high-value items",
												"Critical parts, long or volatile lead times, single-sourced items",
											],
										].map(([factor, jit, jic]) => (
											<tr key={factor} className="odd:bg-white even:bg-gray-50">
												<td className="px-4 py-3 font-semibold text-gray-900">
													{factor}
												</td>
												<td className="px-4 py-3">{jit}</td>
												<td className="px-4 py-3">{jic}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
								<p className="text-gray-800">
									<span className="font-semibold">Interview tip:</span> Do not
									pick a side. The strongest answer is that the choice is made
									per item, not per company — segment the portfolio and apply
									JIT to stable, low-risk, easily resourced items while holding
									JIC buffers on critical or single-sourced ones. That answer
									shows you think in segments rather than slogans.
								</p>
							</div>
						</div>

						{/* EOQ */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								2. Economic Order Quantity (EOQ)
							</h2>
							<p>
								EOQ answers the question &ldquo;how much should I order at a
								time?&rdquo; by balancing two costs that move in opposite
								directions. Order in small frequent batches and you pay more
								ordering and freight cost; order in large batches and you pay
								more holding cost. EOQ is the quantity where their sum is
								lowest.
							</p>
							<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
								<p className="font-semibold text-gray-900">Formula</p>
								<p className="mt-2 rounded-lg bg-gray-900/5 px-3 py-2 font-mono text-sm text-gray-900 overflow-x-auto">
									EOQ = √( (2 × D × S) ÷ H )
								</p>
								<p className="mt-3 text-gray-700">
									Where D is annual demand in units, S is the ordering cost per
									order, and H is the annual holding cost per unit.
								</p>
								<p className="mt-4 font-semibold text-gray-900">
									Worked example
								</p>
								<p className="mt-2 text-gray-700">
									Annual demand of 10,000 units, ordering cost of $50 per order,
									holding cost of $4 per unit per year:
								</p>
								<p className="mt-2 rounded-lg bg-gray-900/5 px-3 py-2 font-mono text-sm text-gray-900 overflow-x-auto">
									EOQ = √( (2 × 10,000 × 50) ÷ 4 ) = √250,000 = 500 units
								</p>
								<p className="mt-3 text-gray-700">
									So you would order 500 units at a time — twenty orders a year.
								</p>
							</div>
							<p>
								<span className="font-semibold">The limitation to mention:</span>{" "}
								EOQ assumes constant demand, a fixed lead time, no quantity
								discounts and no capacity constraints. Real buying decisions have
								to accommodate supplier minimum order quantities, price break
								tiers, container fill and shelf life. Naming those limitations
								unprompted is what separates a textbook answer from a practical
								one.
							</p>
						</div>

						{/* Safety stock and ROP */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								3. Safety Stock and Reorder Point
							</h2>
							<p>
								If EOQ answers &ldquo;how much&rdquo;, the reorder point answers
								&ldquo;when&rdquo;. Safety stock is the cushion inside that
								calculation, sized against the variability you are trying to
								protect against.
							</p>
							<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
								<p className="font-semibold text-gray-900">
									Safety stock formula
								</p>
								<p className="mt-2 rounded-lg bg-gray-900/5 px-3 py-2 font-mono text-sm text-gray-900 overflow-x-auto">
									Safety stock = Z × σ(demand over lead time)
								</p>
								<p className="mt-3 text-gray-700">
									Z is the service factor for your target service level. Common
									values: 1.28 for 90%, 1.65 for 95%, 2.05 for 98% and 2.33 for
									99%. Note how steeply the requirement climbs — moving from 95%
									to 99% service adds roughly 40% more safety stock, which is
									the trade-off to raise if an interviewer asks why you would
									not simply target 100%.
								</p>
								<p className="mt-4 font-semibold text-gray-900">
									Reorder point formula
								</p>
								<p className="mt-2 rounded-lg bg-gray-900/5 px-3 py-2 font-mono text-sm text-gray-900 overflow-x-auto">
									Reorder point = (Average daily demand × Lead time in days) +
									Safety stock
								</p>
								<p className="mt-4 font-semibold text-gray-900">
									Worked example
								</p>
								<p className="mt-2 text-gray-700">
									Average daily demand of 40 units, a supplier lead time of 10
									days, and a demand standard deviation over the lead time of 90
									units at a 95% target service level:
								</p>
								<p className="mt-2 rounded-lg bg-gray-900/5 px-3 py-2 font-mono text-sm text-gray-900 overflow-x-auto">
									Safety stock = 1.65 × 90 ≈ 149 units
									<br />
									Reorder point = (40 × 10) + 149 = 549 units
								</p>
								<p className="mt-3 text-gray-700">
									When stock on hand falls to 549 units, the replenishment order
									is triggered.
								</p>
							</div>
							<p>
								<span className="font-semibold">
									The point candidates miss:
								</span>{" "}
								safety stock protects against variability, not against volume. If
								your lead time is unreliable as well as your demand, lead time
								variability usually drives more safety stock than demand
								variability does — so shortening and stabilising lead times
								reduces inventory more effectively than any recalculation.
							</p>
						</div>

						{/* ABC */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								4. ABC Analysis
							</h2>
							<p>
								ABC analysis applies the Pareto principle to inventory: rank
								every SKU by annual consumption value (unit cost × annual usage),
								then classify. The purpose is to concentrate scarce management
								attention where the money actually is.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full min-w-[560px] text-left text-sm">
									<thead className="bg-gray-50 text-gray-900">
										<tr>
											<th className="px-4 py-3 font-semibold">Class</th>
											<th className="px-4 py-3 font-semibold">
												Typical share of SKUs / value
											</th>
											<th className="px-4 py-3 font-semibold">
												Control approach
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 text-gray-700">
										<tr className="bg-white">
											<td className="px-4 py-3 font-semibold text-gray-900">
												A
											</td>
											<td className="px-4 py-3">~20% of SKUs / ~80% of value</td>
											<td className="px-4 py-3">
												Tight control, frequent review, accurate forecasting,
												lean safety stock, frequent cycle counts
											</td>
										</tr>
										<tr className="bg-gray-50">
											<td className="px-4 py-3 font-semibold text-gray-900">
												B
											</td>
											<td className="px-4 py-3">~30% of SKUs / ~15% of value</td>
											<td className="px-4 py-3">
												Moderate control, periodic review, standard replenishment
												rules
											</td>
										</tr>
										<tr className="bg-white">
											<td className="px-4 py-3 font-semibold text-gray-900">
												C
											</td>
											<td className="px-4 py-3">~50% of SKUs / ~5% of value</td>
											<td className="px-4 py-3">
												Simple rules, larger buffers, bulk ordering — managing
												these closely costs more than it saves
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p>
								A more sophisticated variant is XYZ analysis, which classifies
								items by demand variability rather than value. Combining the two
								into a nine-box grid is genuinely useful: an AX item — high value
								with stable demand — should be run lean, while an AZ item — high
								value with erratic demand — is where the real planning difficulty
								lives.
							</p>
						</div>

						{/* Stock rotation */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								5. Stock Rotation: FIFO, FEFO and LIFO
							</h2>
							<div className="grid gap-5 md:grid-cols-3 text-gray-700">
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">FIFO</h3>
									<p className="mt-2 text-sm">
										First In, First Out — the oldest received stock is issued
										first. The default for most operations, and it keeps
										inventory valuation close to current cost.
									</p>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">FEFO</h3>
									<p className="mt-2 text-sm">
										First Expired, First Out — issued by expiry date rather than
										receipt date. Essential for pharmaceuticals, food and
										chemicals, because the first item received is not always the
										first to expire.
									</p>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">LIFO</h3>
									<p className="mt-2 text-sm">
										Last In, First Out — rarely used physically, and worth
										knowing that LIFO is not permitted as an inventory valuation
										method under IFRS, which Singapore Financial Reporting
										Standards follow.
									</p>
								</div>
							</div>
						</div>

						{/* Production strategies */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								6. Make-to-Stock, Make-to-Order and the Decoupling Point
							</h2>
							<p>
								Where you hold inventory in the process is as important as how
								much. The decoupling point is the position in the flow where
								forecast-driven activity stops and order-driven activity begins.
							</p>
							<ul className="list-disc space-y-3 pl-5">
								<li>
									<span className="font-semibold">Make-to-Stock (MTS):</span>{" "}
									finished goods are built to forecast and held ready. Fast
									delivery, but full forecast risk sits in finished goods — the
									most expensive place to be wrong.
								</li>
								<li>
									<span className="font-semibold">Assemble-to-Order (ATO):</span>{" "}
									components are held to forecast and assembled on receipt of an
									order. A good compromise for products with many variants built
									from common parts.
								</li>
								<li>
									<span className="font-semibold">Make-to-Order (MTO):</span>{" "}
									production starts only on a confirmed order. Minimal finished
									goods risk, longer customer lead time.
								</li>
								<li>
									<span className="font-semibold">Engineer-to-Order (ETO):</span>{" "}
									the product is designed as well as built to the specific order.
									Used for capital equipment and projects.
								</li>
							</ul>
							<p>
								Moving the decoupling point upstream — from finished goods to
								components — reduces obsolescence risk while keeping responsiveness,
								which is one of the more sophisticated answers you can give on
								how to reduce inventory without hurting service.
							</p>
						</div>

						{/* Counting and E&O */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								7. Cycle Counting and Excess &amp; Obsolete Stock
							</h2>
							<p>
								<span className="font-semibold">Cycle counting</span> replaces the
								single annual stocktake with continuous counting of a subset of
								locations, usually weighted by ABC class so A items are counted
								most often. It finds errors while the cause is still traceable,
								avoids shutting the operation down, and produces a far more
								reliable accuracy figure than one count a year.
							</p>
							<p>
								<span className="font-semibold">
									Excess and obsolete (E&amp;O) stock
								</span>{" "}
								is identified by two simple screens: coverage — months of stock on
								hand relative to forward demand — and last movement date. Items
								breaching the policy threshold are classified as slow-moving,
								non-moving or obsolete, and dispositioned through discounting,
								reallocation to another market, return to supplier, rework or
								write-off.
							</p>
							<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
								<p className="text-gray-800">
									<span className="font-semibold">Interview tip:</span> When
									asked about E&amp;O, do not stop at disposal options. Say that
									the disposal recovers a little cash but the root-cause analysis
									is what prevents the same excess being rebuilt next year —
									usually forecast bias, minimum order quantities that exceed
									real demand, or product changes that were never reflected in
									planning parameters.
								</p>
							</div>
						</div>

						{/* Cross-links */}
						<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
							<p className="text-gray-800">
								<span className="font-semibold">Continue preparing.</span>{" "}
								Inventory questions almost always lead into metrics — turnover,
								DIO and fill rate are all defined in our{" "}
								<Link
									href="/blog/supply-chain-kpis"
									className="text-[#1AB69D] font-semibold hover:underline"
								>
									supply chain KPI guide
								</Link>
								. Minimum order quantities and supplier lead times are
								negotiation topics covered in our{" "}
								<Link
									href="/blog/procurement-interview-questions"
									className="text-[#1AB69D] font-semibold hover:underline"
								>
									procurement interview questions
								</Link>
								, and warehouse stock accuracy is covered in the{" "}
								<Link
									href="/blog/logistics-executive-interview-questions"
									className="text-[#1AB69D] font-semibold hover:underline"
								>
									logistics executive guide
								</Link>
								.
							</p>
						</div>

						{/* FAQ */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Frequently Asked Questions
							</h2>
							<div className="space-y-4 text-gray-700">
								{faqQuestions.map((item, index) => (
									<div
										key={item.question}
										className={`rounded-2xl border border-gray-200 p-4 shadow-sm ${
											index % 2 === 0 ? "bg-white" : "bg-gray-50"
										}`}
									>
										<p className="font-semibold text-gray-900">
											{item.question}
										</p>
										<p className="mt-1">{item.answer}</p>
									</div>
								))}
							</div>
						</div>

						{/* CTA */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Turn Inventory Theory into Career Progression
							</h2>
							<p>
								Inventory planning is one of the most transferable skills in
								supply chain, and one of the clearest routes from an executive
								role into a planning or management position. Edusphere&apos;s
								logistics and supply chain diplomas cover inventory control,
								demand planning and warehouse operations with practical,
								Singapore-relevant application.
							</p>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{courseData
									.flatMap((s) => s.courses)
									.filter((c) =>
										[
											"Diploma in Logistics & Supply Chain Management",
											"Diploma in Logistics & Supply Chain Management (E-Learning)",
											"Diploma in Retail & E-Commerce Management",
										].includes(c.title),
									)
									.map((course) => (
										<Link
											key={course.url}
											href={course.url || "/contact-us"}
											className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#1AB69D]/60 transition-all duration-200"
										>
											{course.image && (
												<div className="relative h-44 md:h-48 overflow-hidden">
													<Image
														src={course.image}
														alt={course.title}
														fill
														className="object-cover group-hover:scale-105 transition-transform duration-300"
														sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
													/>
													<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
													{course.elearning && (
														<span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#EE4A62] text-white">
															E-LEARNING
														</span>
													)}
												</div>
											)}
											<div className="flex flex-col flex-1 p-5 md:p-6 gap-2">
												<h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
													{course.title}
												</h3>
												<div className="flex flex-wrap gap-2 text-xs text-gray-500">
													{course.mode && (
														<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-full font-medium">
															{course.mode}
														</span>
													)}
													<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 rounded-full font-medium">
														{course.duration}
													</span>
												</div>
												<div className="mt-auto pt-3">
													<span className="inline-flex items-center text-sm font-semibold text-[#1AB69D] group-hover:gap-2 transition-all">
														View Details
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
					</article>
				</div>
			</section>

			<SupplyChainCluster currentSlug="inventory-management-techniques" />

			<RelatedArticles currentSlug="inventory-management-techniques" />

			<ContactForm />
		</main>
	);
}
