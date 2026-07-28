import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import RelatedArticles from "../../components/RelatedArticles";
import SupplyChainCluster from "../../components/SupplyChainCluster";
import { courseData } from "../../data/courses";

export const metadata: Metadata = {
	title: "20 Supply Chain KPIs Every Candidate Should Know (With Formulas)",
	description:
		"The 20 supply chain KPIs interviewers ask you to define — OTIF, fill rate, perfect order, inventory turnover, DIO, forecast accuracy, MAPE, cash-to-cash cycle and more, each with its formula and what it tells you.",
	keywords:
		"supply chain KPIs, supply chain kpi formulas, OTIF definition, fill rate formula, inventory turnover formula, days inventory outstanding, forecast accuracy MAPE, perfect order rate, cash to cash cycle, logistics KPIs",
	openGraph: {
		title: "20 Supply Chain KPIs Every Candidate Should Know (With Formulas)",
		description:
			"Every supply chain metric an interviewer may ask you to define, grouped by category with the formula and what good performance looks like.",
		url: "https://edusphere.edu.sg/blog/supply-chain-kpis",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-07-28T00:00:00Z",
		modifiedTime: "2026-07-28T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/blogimages/supply-chain-kpis.jpg",
				width: 1200,
				height: 630,
				alt: "Supply chain KPIs and formulas guide",
			},
		],
	},
	alternates: {
		canonical: "https://edusphere.edu.sg/blog/supply-chain-kpis",
	},
	authors: [{ name: "Edusphere College Editorial Team" }],
};

type Kpi = {
	name: string;
	formula: string;
	meaning: string;
};

type KpiCategory = {
	title: string;
	intro: string;
	kpis: Kpi[];
};

const kpiCategories: KpiCategory[] = [
	{
		title: "1. Delivery & Customer Service KPIs",
		intro:
			"These are the metrics the customer actually feels, and the ones most likely to open a KPI conversation in an interview. Know the difference between them — candidates routinely use on-time delivery and OTIF interchangeably, which is wrong.",
		kpis: [
			{
				name: "On-Time Delivery (OTD)",
				formula: "(Orders delivered on or before the due date ÷ Total orders delivered) × 100",
				meaning:
					"Measures schedule reliability only. An order delivered on time but short-shipped still counts as on time, which is exactly why OTD alone flatters performance.",
			},
			{
				name: "On-Time In-Full (OTIF)",
				formula: "(Orders delivered on time AND in full ÷ Total orders) × 100",
				meaning:
					"The stricter and more meaningful service measure. Because both conditions must be met, OTIF is always lower than OTD — being able to explain why is a good interview signal.",
			},
			{
				name: "Order Fill Rate",
				formula: "(Units shipped ÷ Units ordered) × 100",
				meaning:
					"How much of demand you satisfied from available stock. Also measured at line level (line fill rate) and order level (order fill rate) — say which variant you mean.",
			},
			{
				name: "Perfect Order Rate",
				formula:
					"(Orders delivered on time, in full, damage-free and with correct documentation ÷ Total orders) × 100",
				meaning:
					"The most demanding service metric, because it multiplies several independent success conditions. It exposes problems that individual metrics hide.",
			},
		],
	},
	{
		title: "2. Inventory KPIs",
		intro:
			"Inventory metrics are where supply chain meets the balance sheet, so expect finance-literate follow-up questions. Interviewers frequently ask candidates to calculate inventory turnover on the spot.",
		kpis: [
			{
				name: "Inventory Turnover",
				formula: "Cost of Goods Sold ÷ Average inventory value",
				meaning:
					"How many times inventory is sold and replaced in a period. Higher generally means leaner working capital — but pushed too far it produces stockouts, so it must be read alongside fill rate.",
			},
			{
				name: "Days Inventory Outstanding (DIO)",
				formula: "(Average inventory ÷ COGS) × 365, or simply 365 ÷ Inventory turnover",
				meaning:
					"The same information expressed as days of stock held. Operational teams usually find days more intuitive than turns, and it feeds directly into the cash-to-cash calculation.",
			},
			{
				name: "Inventory Record Accuracy",
				formula: "(Count locations matching system record ÷ Total locations counted) × 100",
				meaning:
					"Measured through cycle counting. Everything downstream — MRP, availability promises, replenishment — is only as reliable as this number.",
			},
			{
				name: "Excess & Obsolete (E&O) Ratio",
				formula: "(Value of excess and obsolete stock ÷ Total inventory value) × 100",
				meaning:
					"Capital tied up in stock that will probably never sell at full value. Rising E&O usually points upstream to forecast bias or over-ordering, not to a warehouse problem.",
			},
			{
				name: "Stockout Rate",
				formula: "(Order lines unfulfilled due to no stock ÷ Total order lines) × 100",
				meaning:
					"The direct cost of running too lean. Pair it with inventory turnover in your answer to show you understand the trade-off rather than optimising one side blindly.",
			},
		],
	},
	{
		title: "3. Planning & Forecasting KPIs",
		intro:
			"If you are interviewing for a planner or analyst role, these will come up. The distinction between accuracy and bias is the single most common thing candidates get wrong.",
		kpis: [
			{
				name: "Forecast Accuracy (via MAPE)",
				formula: "MAPE = Average of ( |Actual − Forecast| ÷ Actual ) × 100; Accuracy = 100 − MAPE",
				meaning:
					"Measures the size of forecast error regardless of direction. Accuracy targets vary enormously by product volatility, so quote it with context rather than as an absolute standard.",
			},
			{
				name: "Forecast Bias",
				formula: "( Σ(Forecast − Actual) ÷ Σ Actual ) × 100",
				meaning:
					"Measures the direction of error. Persistent positive bias silently builds excess stock; persistent negative bias causes chronic shortages. Errors that cancel out look fine on MAPE but are still a systematic problem.",
			},
			{
				name: "Schedule Adherence",
				formula: "(Units produced as scheduled ÷ Units scheduled) × 100",
				meaning:
					"How reliably production executes the agreed plan. Poor adherence undermines every downstream promise, and is often caused by upstream material shortages rather than by the factory itself.",
			},
		],
	},
	{
		title: "4. Procurement & Supplier KPIs",
		intro:
			"These appear in both procurement and general supply chain interviews. Be ready to say how you would present them to the supplier, not just how you would calculate them.",
		kpis: [
			{
				name: "Supplier On-Time Delivery",
				formula: "(Purchase orders received on or before due date ÷ Total POs received) × 100",
				meaning:
					"The core supplier reliability measure. Define whether early deliveries count as on time — many companies treat early receipt as a failure because it consumes space and cash prematurely.",
			},
			{
				name: "Supplier Quality / Defect Rate (PPM)",
				formula: "(Defective units ÷ Total units received) × 1,000,000",
				meaning:
					"Parts per million is used because acceptable defect rates in manufacturing are far below one per cent, and percentages lose resolution at that scale.",
			},
			{
				name: "Cost Savings / Purchase Price Variance",
				formula: "((Baseline price − Negotiated price) ÷ Baseline price) × 100",
				meaning:
					"Always state the baseline and whether it is a hard saving or a cost avoidance. Agreeing the methodology with finance in advance is what makes the number credible.",
			},
		],
	},
	{
		title: "5. Logistics & Warehouse KPIs",
		intro:
			"Logistics metrics should be SMART — specific, measurable, achievable, relevant and time-bound — or PACT: purposeful, actionable, continuous and trackable. Quoting one of those frameworks before listing metrics shows structured thinking.",
		kpis: [
			{
				name: "Freight Cost as a Percentage of Sales",
				formula: "(Total freight spend ÷ Net sales) × 100",
				meaning:
					"The headline logistics efficiency measure. It moves with product mix and fuel prices as well as with your own performance, so trend it rather than reading a single month.",
			},
			{
				name: "Cost per Unit Shipped",
				formula: "Total logistics cost ÷ Total units (or orders, or cases) shipped",
				meaning:
					"Normalises cost against activity, so it separates genuine efficiency change from simple volume change. Choose the denominator that matches how your operation actually scales.",
			},
			{
				name: "Vehicle / Container Fill Rate",
				formula: "(Actual load used ÷ Maximum capacity) × 100, by weight or by volume",
				meaning:
					"Shipping air is one of the largest avoidable costs in logistics. Measure against whichever constraint binds first — heavy goods cube out slowly, light goods weigh out slowly.",
			},
		],
	},
	{
		title: "6. Financial & Cross-Functional KPIs",
		intro:
			"These are the metrics that get supply chain taken seriously by the executive team. Being able to speak in them separates a supervisor from a manager in an interview.",
		kpis: [
			{
				name: "Cash-to-Cash Cycle Time",
				formula: "Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding",
				meaning:
					"How many days cash is tied up between paying suppliers and being paid by customers. Every day removed releases working capital, which is why inventory decisions are treasury decisions.",
			},
			{
				name: "Total Supply Chain Cost as a Percentage of Revenue",
				formula: "(Plan + source + make + deliver costs ÷ Total revenue) × 100",
				meaning:
					"The broadest efficiency measure, and the one that stops teams optimising one function at another's expense — cutting freight cost by holding more stock is not a saving.",
			},
		],
	},
];

const faqQuestions = [
	{
		question: "What is the difference between OTD and OTIF?",
		answer:
			"On-Time Delivery measures only whether an order arrived by the due date. OTIF requires the order to be both on time and complete, so a partial shipment delivered on schedule passes OTD but fails OTIF. OTIF is always the lower and more meaningful of the two figures.",
	},
	{
		question: "How do you calculate inventory turnover?",
		answer:
			"Inventory turnover equals cost of goods sold divided by average inventory value for the same period. It shows how many times stock is sold and replaced. Dividing 365 by the turnover figure converts it into days inventory outstanding.",
	},
	{
		question: "What is the difference between forecast accuracy and forecast bias?",
		answer:
			"Forecast accuracy, usually measured through MAPE, captures the magnitude of error regardless of direction. Forecast bias captures the direction — whether you consistently over- or under-forecast. A forecast can have acceptable accuracy while carrying a damaging systematic bias.",
	},
	{
		question: "What is the perfect order rate?",
		answer:
			"The percentage of orders delivered on time, in full, undamaged and with correct documentation. Because all conditions must be satisfied simultaneously, it is the most demanding service metric and exposes failures that single-condition metrics hide.",
	},
	{
		question: "What is cash-to-cash cycle time?",
		answer:
			"Days inventory outstanding plus days sales outstanding minus days payable outstanding. It measures how long cash is tied up between paying suppliers and collecting from customers, and is the metric that connects supply chain decisions to the finance team's priorities.",
	},
	{
		question: "What is a good number of KPIs to track?",
		answer:
			"Few enough that each one drives a decision. A focused scorecard of eight to twelve metrics aligned to strategy outperforms a dashboard of fifty that nobody acts on. In an interview, say which metrics you would choose and why, rather than listing everything you know.",
	},
];

export default function SupplyChainKpis() {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				headline:
					"20 Supply Chain KPIs Every Candidate Should Know (With Formulas)",
				description:
					"A reference guide to the 20 supply chain KPIs most often raised in interviews, grouped by category, each with its formula and what it actually tells you.",
				image:
					"https://edusphere.edu.sg/blogimages/supply-chain-kpis.jpg",
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
					"@id": "https://edusphere.edu.sg/blog/supply-chain-kpis",
				},
				articleSection: "Career Preparation",
				keywords:
					"supply chain KPIs, OTIF, fill rate, inventory turnover, forecast accuracy, MAPE, cash to cash cycle, logistics KPIs",
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
						name: "Supply Chain KPIs",
						item: "https://edusphere.edu.sg/blog/supply-chain-kpis",
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
							20 Supply Chain KPIs Every Candidate Should Know (With Formulas)
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
								src="/blogimages/supply-chain-kpis.jpg"
								alt="Laptop screen displaying a performance analytics dashboard with bar charts and trend lines"
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
								&ldquo;Which KPIs would you track?&rdquo; is one of the most
								common supply chain interview questions — and one of the most
								commonly fumbled. Candidates list metric names confidently, then
								stall when asked to define one. This guide gives you all twenty
								metrics that come up, with the formula for each and, more
								importantly, what the number actually tells you.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<p className="text-gray-700">
									<span className="font-semibold text-gray-900">
										Part of a series.
									</span>{" "}
									This is a companion reference to our main{" "}
									<Link
										href="/blog/supply-chain-management-interview-questions"
										className="text-[#1AB69D] font-semibold hover:underline"
									>
										supply chain management interview questions guide
									</Link>
									, which covers the full interview rather than metrics alone.
								</p>
							</div>
						</div>

						{/* KPI categories */}
						{kpiCategories.map((category) => (
							<div key={category.title} className="space-y-5">
								<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
									{category.title}
								</h2>
								<p>{category.intro}</p>
								<div className="space-y-4">
									{category.kpis.map((kpi, index) => (
										<div
											key={kpi.name}
											className={`rounded-2xl border border-gray-200 p-5 shadow-sm ${
												index % 2 === 0 ? "bg-white" : "bg-gray-50"
											}`}
										>
											<h3 className="text-lg font-semibold text-gray-900">
												{kpi.name}
											</h3>
											<p className="mt-2 rounded-lg bg-gray-900/5 px-3 py-2 font-mono text-sm text-gray-900 overflow-x-auto">
												{kpi.formula}
											</p>
											<p className="mt-3 text-gray-700">{kpi.meaning}</p>
										</div>
									))}
								</div>
							</div>
						))}

						{/* How to answer */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								How to Answer a KPI Question in an Interview
							</h2>
							<p>
								Reciting metrics is a weak answer. The structure that lands is:
								name the metric, define it precisely, say what decision it
								drives, and acknowledge its limitation. Interviewers are testing
								judgement, not recall.
							</p>
							<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-6">
								<p className="font-semibold text-gray-900">Weak answer</p>
								<p className="mt-1 text-gray-700">
									&ldquo;I would track OTIF, inventory turns, fill rate and
									forecast accuracy.&rdquo;
								</p>
								<p className="mt-5 font-semibold text-gray-900">
									Strong answer
								</p>
								<p className="mt-1 text-gray-700">
									&ldquo;I would start with OTIF, because it captures both
									timeliness and completeness in one number and is what the
									customer actually experiences. I would pair it with inventory
									turnover, because it is always possible to buy a better OTIF
									by holding more stock — so the two have to be read together.
									Then forecast accuracy and bias upstream, since most service
									failures trace back to a planning error rather than an
									execution one.&rdquo;
								</p>
							</div>
							<p>
								Notice what the strong answer does: it explains the relationship
								between metrics and shows awareness that any single KPI can be
								gamed. That is the difference between someone who has read a
								list and someone who has managed a scorecard.
							</p>
						</div>

						{/* Common mistakes */}
						<div className="space-y-5">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Five Mistakes Candidates Make with KPIs
							</h2>
							<div className="grid gap-4 md:grid-cols-2 text-gray-700">
								{[
									[
										"Using OTD and OTIF interchangeably",
										"They measure different things and OTIF is always lower. Mixing them up signals inexperience immediately.",
									],
									[
										"Quoting benchmarks without context",
										"There is no universal good inventory turn figure — it varies by industry, product shelf life and business model. Say what it depends on.",
									],
									[
										"Ignoring the trade-offs",
										"Every service metric can be improved by spending more on stock or freight. A metric quoted without its counterweight looks naive.",
									],
									[
										"Listing too many metrics",
										"A scorecard everyone ignores is worse than four metrics that drive weekly decisions. Prioritise, and explain the prioritisation.",
									],
									[
										"Forgetting the financial metrics",
										"Cash-to-cash cycle time and total supply chain cost are what the executive team cares about. Candidates who mention them stand out.",
									],
									[
										"Not knowing the formula",
										"If you name a metric, assume you will be asked to define it. Never name one you cannot calculate on a whiteboard.",
									],
								].map(([title, detail]) => (
									<div
										key={title}
										className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
									>
										<h3 className="font-semibold text-gray-900">{title}</h3>
										<p className="mt-2 text-sm">{detail}</p>
									</div>
								))}
							</div>
						</div>

						{/* Cross-links */}
						<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
							<p className="text-gray-800">
								<span className="font-semibold">Next steps.</span> Inventory
								turnover and DIO make far more sense once you understand the
								underlying stock policies — see{" "}
								<Link
									href="/blog/inventory-management-techniques"
									className="text-[#1AB69D] font-semibold hover:underline"
								>
									inventory management techniques explained
								</Link>
								. For role-specific preparation, work through our{" "}
								<Link
									href="/blog/logistics-executive-interview-questions"
									className="text-[#1AB69D] font-semibold hover:underline"
								>
									logistics executive
								</Link>{" "}
								and{" "}
								<Link
									href="/blog/procurement-interview-questions"
									className="text-[#1AB69D] font-semibold hover:underline"
								>
									procurement
								</Link>{" "}
								question sets.
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
								Learn to Manage the Numbers, Not Just Quote Them
							</h2>
							<p>
								Understanding how these metrics interact — and which lever to
								pull when one moves the wrong way — is what employers pay for.
								Edusphere&apos;s logistics and supply chain diplomas cover
								inventory control, performance measurement and cost management
								in a Singapore business context.
							</p>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{courseData
									.flatMap((s) => s.courses)
									.filter((c) =>
										[
											"Diploma in Logistics & Supply Chain Management",
											"Diploma in Logistics & Supply Chain Management (E-Learning)",
											"Diploma in Business Finance & Accounting",
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
													{course.isNew && (
														<span className="absolute top-3 right-3 animate-pulse px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#EE4A62] text-white uppercase tracking-wide shadow-lg">
															New
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

			<SupplyChainCluster currentSlug="supply-chain-kpis" />

			<RelatedArticles currentSlug="supply-chain-kpis" />

			<ContactForm />
		</main>
	);
}
