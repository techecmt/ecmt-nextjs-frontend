import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import RelatedArticles from "../../components/RelatedArticles";
import ArticleToc from "../../components/ArticleToc";
import SupplyChainCluster from "../../components/SupplyChainCluster";
import { courseData } from "../../data/courses";

export const metadata: Metadata = {
	title: "40 Procurement Interview Questions & Answers (Singapore 2026)",
	description:
		"Prepare for your procurement, purchasing or buyer interview in Singapore with 40 questions and answers covering strategic sourcing, RFQ and tendering, negotiation, contracts, supplier performance and procurement ethics.",
	keywords:
		"procurement interview questions, purchasing interview questions singapore, buyer interview questions, strategic sourcing interview, tender evaluation questions, supplier negotiation interview, procurement executive interview singapore",
	openGraph: {
		title: "40 Procurement Interview Questions & Answers (Singapore 2026)",
		description:
			"Strategic sourcing, tendering, negotiation, contracts, supplier performance and ethics — 40 procurement interview questions with model answers.",
		url: "https://edusphere.edu.sg/blog/procurement-interview-questions",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-07-28T00:00:00Z",
		modifiedTime: "2026-07-28T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/blogimages/procurement-interview-questions.jpg",
				width: 1200,
				height: 630,
				alt: "Procurement interview questions Singapore",
			},
		],
	},
	alternates: {
		canonical: "https://edusphere.edu.sg/blog/procurement-interview-questions",
	},
	authors: [{ name: "Edusphere College Editorial Team" }],
};

type InterviewSection = {
	title: string;
	questions: {
		question: string;
		answer: string;
	}[];
};

const interviewSections: InterviewSection[] = [
	{
		title: "Procurement Fundamentals (1–8)",
		questions: [
			{
				question: "1. What is the difference between purchasing and procurement?",
				answer:
					"Purchasing is the transactional activity of buying — raising purchase orders, expediting and processing invoices. Procurement is the broader strategic function covering needs identification, market analysis, sourcing strategy, supplier selection, negotiation, contracting, supplier performance management and continuous improvement. Purchasing is a step within procurement.",
			},
			{
				question: "2. Walk me through the procure-to-pay cycle.",
				answer:
					"Requisition raised and approved, purchase order issued to the supplier, order acknowledged, goods or services received and receipted, invoice received, three-way match between purchase order, goods receipt and invoice, then payment released per agreed terms. Understanding the three-way match matters because that control is where most invoice disputes and duplicate payments are caught.",
			},
			{
				question: "3. What are the five rights of procurement?",
				answer:
					"Buying the right quality, in the right quantity, at the right time, from the right source, at the right price. Interviewers use this to test whether a candidate treats price as one factor among five rather than the only one that matters.",
			},
			{
				question: "4. What is direct versus indirect procurement?",
				answer:
					"Direct procurement covers goods and materials that go into the finished product — raw materials, components and packaging. Indirect procurement covers everything the business consumes to operate but does not resell — IT, facilities, professional services, travel and office supplies. Indirect spend is typically more fragmented and is where most quick-win savings sit.",
			},
			{
				question: "5. What is total cost of ownership and why does it matter more than unit price?",
				answer:
					"Total cost of ownership includes unit price plus freight, duty and GST, inspection and quality failure cost, inventory holding cost driven by lead time and minimum order quantity, payment terms, switching cost and disposal. A supplier that is five per cent cheaper but has a twelve-week lead time and inconsistent quality is frequently more expensive once the full picture is priced.",
			},
			{
				question: "6. What is spend analysis and what would you do with the output?",
				answer:
					"Spend analysis consolidates and classifies purchasing data by category, supplier, business unit and time period to show where the money actually goes. The output drives action: consolidating fragmented spend across duplicate suppliers, identifying maverick spend outside agreed contracts, prioritising which categories to re-tender, and establishing a credible savings baseline.",
			},
			{
				question: "7. Explain the Kraljic matrix and how you would use it.",
				answer:
					"It segments spend on profit impact and supply risk into four quadrants. Leverage items — high impact, low risk — suit competitive tendering. Strategic items — high impact, high risk — need partnership and joint planning. Bottleneck items — low impact, high risk — need supply continuity measures such as buffer stock or dual sourcing. Non-critical items should be simplified, catalogued and automated so buyers stop spending time on them.",
			},
			{
				question: "8. What is a category management approach?",
				answer:
					"Category management groups related spend into categories and assigns ownership so that a single strategy — informed by market analysis, supplier landscape and internal demand — is applied across the whole category rather than transaction by transaction. It produces better leverage and more sustainable savings than opportunistic buying, but it requires cross-functional buy-in from the budget holders.",
			},
		],
	},
	{
		title: "Sourcing, RFQ & Tendering (9–17)",
		questions: [
			{
				question: "9. Walk me through the strategic sourcing process.",
				answer:
					"Define the requirement and profile the spend, analyse the supply market, develop the sourcing strategy, go to market via RFI, RFQ or RFP, evaluate and shortlist, negotiate, award and contract, then implement, transition and manage supplier performance. The last stage is where the negotiated value is either realised or quietly leaks away.",
			},
			{
				question: "10. What is the difference between an RFI, RFQ and RFP?",
				answer:
					"An RFI (Request for Information) gathers market and capability information without commitment, usually to shortlist. An RFQ (Request for Quotation) seeks priced offers against a clearly defined specification and is used where requirements are standard. An RFP (Request for Proposal) is used where the solution is not fully defined and suppliers propose an approach as well as a price.",
			},
			{
				question: "11. How do you write a good specification?",
				answer:
					"Describe the requirement in terms of function and performance outcomes rather than a specific brand or design wherever possible, because a performance specification opens the market to more suppliers and better solutions. Include measurable acceptance criteria, applicable standards, quantities and delivery expectations. Over-specification is a hidden cost driver.",
			},
			{
				question: "12. How would you evaluate tender submissions fairly?",
				answer:
					"Agree the evaluation criteria and their weightings before the tenders are opened, not after. Score technical and commercial elements separately, involve a cross-functional panel to reduce individual bias, document the rationale for each score, and apply the same clarification process to all bidders. Setting criteria after seeing the bids is the most common way a tender process loses defensibility.",
			},
			{
				question: "13. What is a weighted scoring model?",
				answer:
					"Each evaluation criterion — price, technical compliance, delivery lead time, quality systems, financial stability, service and support — is assigned a weight reflecting its importance, and each supplier is scored against it. Scores multiplied by weights and summed give a comparable total. It converts a subjective decision into a transparent, auditable one.",
			},
			{
				question: "14. How do you approach a make-or-buy decision?",
				answer:
					"Compare total in-house cost, including capital, capacity and overhead, against the total cost of buying externally. Then layer in the strategic questions: is this capability core to our competitive advantage, do we have the capacity and skills, what is the intellectual property risk, and how mature is the supply market? Cost alone rarely settles it.",
			},
			{
				question: "15. Single sourcing or multiple sourcing — which do you prefer?",
				answer:
					"It depends on the category. Single sourcing gives volume leverage, deeper collaboration and lower management cost, but concentrates risk. Multiple sourcing improves resilience and competitive tension but fragments volume and adds management overhead. For critical items I favour a dual-source approach with a primary and a qualified secondary supplier, even if the secondary carries only a small volume share to stay live.",
			},
			{
				question: "16. How do you evaluate and qualify a new supplier?",
				answer:
					"Assess financial stability through published accounts or credit checks, technical and production capability, quality management systems and certifications such as ISO 9001, capacity headroom relative to our volume, delivery track record, compliance and sustainability credentials, and communication responsiveness. For critical categories this includes a site audit and a pilot order before full approval.",
			},
			{
				question: "17. What sustainability or ESG factors do you consider in sourcing?",
				answer:
					"Supplier environmental management practices, emissions associated with the product and its transport, packaging and waste, labour standards and modern slavery risk in lower tiers, and relevant certifications. This has moved from optional to expected as buyers face reporting obligations, and a candidate who can discuss it credibly stands out from one who treats it as a slogan.",
			},
		],
	},
	{
		title: "Negotiation & Contracts (18–25)",
		questions: [
			{
				question: "18. How do you prepare for a supplier negotiation?",
				answer:
					"I build a cost breakdown or should-cost model so I understand the supplier's likely margin, benchmark against market data, define my target, opening position and walk-away point, identify my BATNA, and anticipate the supplier's priorities and constraints. Preparation is the negotiation — what happens in the room mostly reflects who prepared better.",
			},
			{
				question: "19. What is a BATNA?",
				answer:
					"The Best Alternative to a Negotiated Agreement — what you will do if this negotiation fails. It sets your genuine walk-away point. If your BATNA is weak, for example a single-sourced critical component with no qualified alternative, you have limited leverage regardless of negotiation technique, which is why supply base development is a negotiation activity too.",
			},
			{
				question: "20. Beyond price, what levers can you negotiate?",
				answer:
					"Payment terms, volume rebates and tiered pricing, minimum order quantities, lead times, consignment or vendor-managed inventory, price validity periods and indexation mechanisms, warranty scope, packaging, freight terms via Incoterms, service levels and penalties, and free training or technical support. Widening the agenda usually produces more total value than grinding on unit price alone.",
			},
			{
				question: "21. How do you handle a supplier requesting a price increase?",
				answer:
					"Ask for the justification in writing with a cost breakdown showing which input drove the increase and what proportion of total cost it represents. Test it against published indices for that input. Then negotiate scope — accept a partial increase, seek an offsetting concession elsewhere, agree a validity period, or offer volume or term commitment in exchange for holding price. Reflexively refusing damages relationships without solving the cost problem.",
			},
			{
				question: "22. What key clauses do you look for in a supply contract?",
				answer:
					"Scope and specification, pricing and price adjustment mechanism, payment terms, delivery terms and Incoterms, lead times and service levels with remedies, warranty and liability caps, indemnities, intellectual property ownership, confidentiality, force majeure, termination rights and notice, dispute resolution and governing law. I involve legal on anything non-standard rather than accepting a supplier's template.",
			},
			{
				question: "23. What is a service level agreement and what makes a good one?",
				answer:
					"An SLA defines the measurable performance standards a supplier must meet — for example on-time delivery percentage, response time, quality defect rate — along with how performance is measured, how often it is reviewed, and what happens when it is missed. A good SLA is measurable from data both parties can see; an SLA nobody can objectively measure is decoration.",
			},
			{
				question: "24. What is force majeure and why has it received more attention recently?",
				answer:
					"Force majeure excuses a party from performance when prevented by defined extraordinary events beyond their control. It has drawn more scrutiny since the pandemic and subsequent disruptions, because many contracts had vague clauses that did not clearly cover epidemics, port closures or export restrictions. Buyers now negotiate these clauses far more carefully, including notification obligations and mitigation duties.",
			},
			{
				question: "25. What are payment terms and how do they affect the business?",
				answer:
					"Payment terms define when the supplier is paid after invoicing or delivery. Extending terms improves the buyer's working capital and cash-to-cash cycle, but pushes financing cost onto the supplier — who eventually prices it back in, and for a small supplier may create genuine viability risk. The commercially mature answer recognises both sides.",
			},
		],
	},
	{
		title: "Supplier Performance & Risk (26–33)",
		questions: [
			{
				question: "26. How do you measure supplier performance?",
				answer:
					"Through a scorecard combining on-time delivery, quality acceptance or defect rate, price competitiveness and cost reduction delivered, responsiveness and issue resolution time, and compliance with contract and documentation requirements. The scorecard should be shared with the supplier and reviewed at a regular business review, because a score the supplier never sees changes nothing.",
			},
			{
				question: "27. What would you do with a consistently underperforming supplier?",
				answer:
					"Quantify the performance gap with data, meet to establish root causes, and agree a documented corrective action plan with owners and deadlines. If performance does not recover within the agreed period, escalate through the contract, begin qualifying an alternative, and phase out volume in a controlled way. Switching abruptly without a qualified alternative creates a worse problem than the one being solved.",
			},
			{
				question: "28. How do you build strong long-term supplier relationships?",
				answer:
					"Share honest forecasts so suppliers can plan capacity, pay on agreed terms, communicate changes early, run structured business reviews, involve key suppliers early in design and process changes, and be a customer they want to prioritise when capacity is short. During shortages, allocation decisions are made partly on relationship — that is when the investment pays back.",
			},
			{
				question: "29. What is supplier relationship management and how does it differ from sourcing?",
				answer:
					"Sourcing is the periodic activity of selecting and contracting suppliers. Supplier relationship management is the ongoing discipline of governing, developing and extracting value from the supplier base after contracting — through performance reviews, joint improvement initiatives, innovation sharing and risk monitoring. Most of a contract's value is realised or lost in this phase.",
			},
			{
				question: "30. How do you assess and mitigate supply risk?",
				answer:
					"Map the supply base to identify single points of failure, critical parts and geographic concentration. Assess each risk on likelihood and impact. Mitigate through dual sourcing, qualified alternates, strategic buffer stock for long-lead critical items, contractual protections, supplier financial health monitoring, and multi-tier visibility for critical components — because the tier-two supplier you have never spoken to is often the real constraint.",
			},
			{
				question: "31. What is vendor-managed inventory and what are its trade-offs?",
				answer:
					"Under VMI, the supplier monitors the buyer's stock levels and replenishes automatically against agreed minimum and maximum parameters. The buyer benefits from lower administrative effort, reduced stockouts and often deferred ownership of stock; the supplier gains demand visibility and can plan production better. The trade-offs are dependence on data accuracy and a loss of direct buyer control over order timing.",
			},
			{
				question: "32. How do you handle a conflict of interest or an offered gift from a supplier?",
				answer:
					"Declare it immediately through the company's declaration process and decline anything beyond nominal hospitality. Procurement roles carry heightened integrity expectations precisely because the discretion involved is valuable. I would also recuse myself from decisions involving any supplier where a personal relationship exists. The strongest answer treats this as a straightforward, non-negotiable rule.",
			},
			{
				question: "33. What ethical issues arise in procurement?",
				answer:
					"Bribery and kickbacks, conflicts of interest, unfair or rigged tender processes, misuse of a competitor's confidential pricing, abuse of buyer power against small suppliers, and labour or environmental abuses in the supply base. Good practice means segregation of duties, transparent evaluation, documented decisions, declaration registers, and a supplier code of conduct that is actually audited.",
			},
		],
	},
	{
		title: "Systems, Analysis & Behavioural (34–40)",
		questions: [
			{
				question: "34. What procurement systems have you used?",
				answer:
					"Describe the ERP purchasing module you worked in — SAP MM, Oracle, Microsoft Dynamics — and any dedicated e-procurement or e-sourcing platform such as Coupa, Ariba or Jaggaer, plus what you actually did in them: creating requisitions and POs, maintaining supplier master data, running e-tenders or managing contract repositories. Be honest about depth; overstating system experience is easily exposed in a second interview.",
			},
			{
				question: "35. How do you use Excel in a procurement role?",
				answer:
					"Pivot tables for spend analysis by category and supplier, XLOOKUP or INDEX-MATCH to consolidate quotations into comparison sheets, weighted scoring models for tender evaluation, should-cost models, savings trackers, and conditional formatting to flag contracts approaching expiry. A clean bid comparison sheet is often the deliverable that wins the interviewer over.",
			},
			{
				question: "36. How do you calculate and validate procurement savings?",
				answer:
					"Agree the baseline and methodology with finance before the project, not after. Hard savings reduce actual spend against a prior verified price on comparable volume; cost avoidance prevents an increase that would otherwise have occurred. Distinguishing the two honestly builds credibility — inflated savings claims are the fastest way for procurement to lose the finance team's trust.",
			},
			{
				question: "37. How would you control maverick spend?",
				answer:
					"Make the compliant route the easiest route: catalogue frequently bought items, set clear approval thresholds in the system, block non-PO invoices, publish preferred supplier lists, and report non-compliant spend back to the budget holders by department. Most maverick buying is a symptom of a slow or unclear process rather than deliberate circumvention.",
			},
			{
				question: "38. Describe a time you delivered a cost saving.",
				answer:
					"Use STAR and quantify. For example: the situation was a fragmented packaging spend across six suppliers with no contract; the task was to reduce cost without disrupting supply; I ran a spend analysis, standardised specifications across product lines, and re-tendered as a single consolidated volume with a two-year term; the result was a double-digit percentage unit cost reduction plus improved payment terms, validated jointly with finance.",
			},
			{
				question: "39. Describe a time you disagreed with an internal stakeholder.",
				answer:
					"Choose an example where you held a defensible position and reached a workable outcome. Typically an engineer or budget holder insists on a specific brand while a qualified alternative exists at lower cost. The approach that works is asking what the underlying technical requirement is, arranging a sample trial to remove the argument from opinion, and letting the data decide — while accepting the stakeholder's judgement where the risk genuinely justifies it.",
			},
			{
				question: "40. Where do you see procurement heading?",
				answer:
					"Towards a more strategic, risk-aware and data-driven function: greater use of analytics and automation for transactional buying, supply chain risk and multi-tier visibility as a permanent priority, mandatory ESG and emissions reporting pulling supplier data into scope, and procurement being judged on resilience and total value contribution rather than on savings percentage alone.",
			},
		],
	},
];

const faqQuestions = [
	interviewSections[0].questions[0],
	interviewSections[0].questions[1],
	interviewSections[0].questions[6],
	interviewSections[1].questions[1],
	interviewSections[1].questions[7],
	interviewSections[2].questions[1],
	interviewSections[2].questions[2],
	interviewSections[3].questions[0],
];

export default function ProcurementInterviewQuestions() {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				headline:
					"40 Procurement Interview Questions and Answers in Singapore (2026)",
				description:
					"Procurement, purchasing and buyer interview questions covering strategic sourcing, RFQ and tendering, negotiation, contracts, supplier performance and procurement ethics.",
				image:
					"https://edusphere.edu.sg/blogimages/procurement-interview-questions.jpg",
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
						"https://edusphere.edu.sg/blog/procurement-interview-questions",
				},
				articleSection: "Career Preparation",
				keywords:
					"procurement interview questions, purchasing interview, strategic sourcing, tender evaluation, supplier negotiation, kraljic matrix",
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
					name: item.question.replace(/^\d+\.\s*/, ""),
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
						name: "Procurement Interview Questions",
						item: "https://edusphere.edu.sg/blog/procurement-interview-questions",
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
							40 Procurement Interview Questions and Answers in Singapore (2026)
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
								src="/blogimages/procurement-interview-questions.jpg"
								alt="Colleagues seated around a table taking notes during a business meeting"
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
						<ArticleToc />
						{/* Introduction */}
						<div className="space-y-4">
							<p className="text-lg leading-relaxed">
								Procurement interviews test two things at once: whether you know
								the process, and whether you can be trusted with commercial
								discretion. Expect technical questions on sourcing and
								contracting alongside probing questions on ethics and
								stakeholder conflict. These 40 questions cover both, with model
								answers that show the commercial reasoning interviewers are
								listening for.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<p className="text-gray-700">
									<span className="font-semibold text-gray-900">
										Part of a series.
									</span>{" "}
									This is one of four companion guides to our main{" "}
									<Link
										href="/blog/supply-chain-management-interview-questions"
										className="text-[#1AB69D] font-semibold hover:underline"
									>
										supply chain management interview questions guide
									</Link>
									. Start there if your interview covers the full supply chain
									rather than procurement specifically.
								</p>
							</div>
						</div>

						{/* Question Sections */}
						{interviewSections.map((section, sectionIndex) => (
							<div key={section.title} className="space-y-6">
								<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
									{section.title}
								</h2>
								<div className="space-y-4 text-gray-700">
									{section.questions.map((item, index) => (
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

								{sectionIndex === 1 && (
									<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
										<p className="text-gray-800">
											<span className="font-semibold">
												Sourcing questions often lead into freight terms.
											</span>{" "}
											If you are asked who pays for shipping and where risk
											transfers, the full Incoterms 2020 reference table is in
											our{" "}
											<Link
												href="/blog/logistics-executive-interview-questions"
												className="text-[#1AB69D] font-semibold hover:underline"
											>
												logistics executive interview questions guide
											</Link>
											.
										</p>
									</div>
								)}
								{sectionIndex === 3 && (
									<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
										<p className="text-gray-800">
											<span className="font-semibold">
												Be ready to define the metrics you name.
											</span>{" "}
											Supplier on-time delivery, PPM defect rate and days
											payable outstanding are all defined with formulas in our{" "}
											<Link
												href="/blog/supply-chain-kpis"
												className="text-[#1AB69D] font-semibold hover:underline"
											>
												supply chain KPI guide
											</Link>
											. Questions on minimum order quantity and stock coverage
											are covered in{" "}
											<Link
												href="/blog/inventory-management-techniques"
												className="text-[#1AB69D] font-semibold hover:underline"
											>
												inventory management techniques explained
											</Link>
											.
										</p>
									</div>
								)}
							</div>
						))}

						{/* Preparation checklist */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Procurement Interview Preparation Checklist
							</h2>
							<div className="grid gap-5 md:grid-cols-3 text-gray-700">
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										Know Cold
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>Procure-to-pay cycle and the three-way match</li>
										<li>RFI vs RFQ vs RFP</li>
										<li>Kraljic matrix quadrants and the strategy for each</li>
										<li>Total cost of ownership components</li>
										<li>Your own BATNA definition and an example</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										Prepare Stories
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>A quantified cost saving you delivered</li>
										<li>A supplier failure you recovered from</li>
										<li>A disagreement with a stakeholder</li>
										<li>A tender or sourcing project you ran end to end</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										Expect to Be Tested On
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>Ethics and conflict-of-interest scenarios</li>
										<li>How you validate savings with finance</li>
										<li>Excel bid comparison and weighted scoring</li>
										<li>How you would handle a price increase request</li>
									</ul>
								</div>
							</div>
						</div>

						{/* CTA */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Strengthen Your Procurement Credentials
							</h2>
							<p>
								Procurement rewards structured thinking — and a formal
								qualification is how you demonstrate it before you have the
								track record. Edusphere&apos;s business and supply chain
								diplomas cover sourcing, contracts, inventory and cost
								management with a Singapore commercial context.
							</p>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{courseData
									.flatMap((s) => s.courses)
									.filter((c) =>
										[
											"Diploma in Logistics & Supply Chain Management",
											"Diploma in Business Administration",
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

			<SupplyChainCluster currentSlug="procurement-interview-questions" />

			<RelatedArticles currentSlug="procurement-interview-questions" />

			<ContactForm />
		</main>
	);
}
