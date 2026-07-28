import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import RelatedArticles from "../../components/RelatedArticles";
import SupplyChainCluster from "../../components/SupplyChainCluster";
import { courseData } from "../../data/courses";

export const metadata: Metadata = {
	title: "40 Logistics Executive Interview Questions & Answers (Singapore 2026)",
	description:
		"Prepare for your logistics executive or coordinator interview in Singapore with 40 questions and answers covering Incoterms 2020, freight modes, TradeNet declarations, shipping documents, warehousing and transport operations.",
	keywords:
		"logistics executive interview questions, logistics coordinator interview questions singapore, freight forwarding interview questions, incoterms interview questions, tradenet declaration, shipping documents interview, warehouse interview questions singapore",
	openGraph: {
		title:
			"40 Logistics Executive Interview Questions & Answers (Singapore 2026)",
		description:
			"Incoterms 2020, freight modes, Singapore Customs and TradeNet, shipping documentation, warehouse and transport operations — with model answers.",
		url: "https://edusphere.edu.sg/blog/logistics-executive-interview-questions",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-07-28T00:00:00Z",
		modifiedTime: "2026-07-28T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/blogimages/logistics-executive-interview-questions.jpg",
				width: 1200,
				height: 630,
				alt: "Logistics executive interview questions Singapore",
			},
		],
	},
	alternates: {
		canonical:
			"https://edusphere.edu.sg/blog/logistics-executive-interview-questions",
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
		title: "The Role & Logistics Fundamentals (1–8)",
		questions: [
			{
				question: "1. What does a logistics executive actually do day to day?",
				answer:
					"A logistics executive coordinates the physical movement of goods: raising and tracking shipments, liaising with freight forwarders and carriers, preparing and checking shipping documentation, arranging customs declarations, monitoring inbound and outbound schedules, resolving delivery exceptions, and maintaining records in the ERP or transport management system. It is a coordination role, so responsiveness and accuracy matter more than theory.",
			},
			{
				question: "2. What is the difference between logistics and supply chain management?",
				answer:
					"Logistics is the movement and storage of goods — transport, warehousing, freight and distribution. Supply chain management is the wider discipline that also covers demand planning, sourcing, supplier management, inventory strategy and information flow across all partners. Logistics is a critical execution arm within the supply chain.",
			},
			{
				question: "3. What are the seven Rs of logistics?",
				answer:
					"Delivering the right product, in the right quantity, in the right condition, to the right place, at the right time, to the right customer, at the right cost. It is a useful framework because it forces you to acknowledge that speed alone is not success — a fast delivery of damaged goods fails on condition.",
			},
			{
				question: "4. What is inbound versus outbound logistics?",
				answer:
					"Inbound logistics covers the movement of materials from suppliers into the business — purchase order follow-up, inbound freight, receiving and put-away. Outbound logistics covers the movement of finished goods to customers — order picking, packing, dispatch, transport and proof of delivery. Many roles cover both, and interviewers often ask which you prefer and why.",
			},
			{
				question: "5. What is the difference between a freight forwarder and a carrier?",
				answer:
					"A carrier physically transports the goods and owns or operates the vessel, aircraft or vehicle. A freight forwarder arranges transport on the shipper's behalf — booking space, consolidating cargo, preparing documentation and handling customs brokerage — but typically does not own the transport assets. Forwarders add value through routing options, consolidation and paperwork expertise.",
			},
			{
				question: "6. Explain FCL, LCL and consolidation.",
				answer:
					"FCL (Full Container Load) means your cargo fills a container booked exclusively for you. LCL (Less than Container Load) means your cargo shares a container with other shippers' goods, consolidated by the forwarder. LCL costs less for small volumes but adds handling time at both consolidation and deconsolidation points, and carries slightly higher damage risk from extra handling.",
			},
			{
				question: "7. What is the difference between transhipment, transit and re-export?",
				answer:
					"Transhipment means goods arrive and are transferred to another vessel or aircraft for onward movement without formally entering the domestic market. Transit means goods pass through the territory en route elsewhere. Re-export means goods that were imported are subsequently exported. In Singapore these distinctions determine which permit type you declare, so getting the terminology right matters operationally.",
			},
			{
				question: "8. What makes a good logistics executive?",
				answer:
					"Meticulous attention to detail on documentation, calm problem-solving when shipments go wrong, clear written communication with overseas parties across time zones, comfort with systems and data, and a sense of urgency. Most logistics failures are avoidable documentation or communication errors rather than genuinely unavoidable disruptions.",
			},
		],
	},
	{
		title: "Incoterms 2020 & Shipping Documentation (9–17)",
		questions: [
			{
				question: "9. What are Incoterms and how many are there?",
				answer:
					"Incoterms are the standardised international commercial terms published by the International Chamber of Commerce, currently in the Incoterms 2020 edition. There are eleven rules. Seven apply to any mode of transport — EXW, FCA, CPT, CIP, DAP, DPU and DDP — and four apply only to sea and inland waterway transport: FAS, FOB, CFR and CIF.",
			},
			{
				question: "10. What do Incoterms actually define, and what do they not?",
				answer:
					"They define the division of costs, the point at which risk transfers from seller to buyer, and who is responsible for carriage, insurance, export and import formalities. They do not define transfer of title or ownership, payment terms, governing law, or what happens in a breach of contract. Assuming Incoterms cover ownership is a common and costly misconception.",
			},
			{
				question: "11. Explain EXW and why buyers should be cautious with it.",
				answer:
					"Under Ex Works, the seller simply makes goods available at their premises and the buyer bears all cost and risk from that point, including loading and export clearance. Buyers should be cautious because in many countries export clearance can only practically be done by a local entity, so the buyer ends up dependent on the seller's cooperation with no contractual obligation. FCA is usually the better choice.",
			},
			{
				question: "12. What is the difference between CIF and CIP?",
				answer:
					"Both require the seller to arrange carriage and insurance to the named destination. CIF applies only to sea and inland waterway transport and requires only minimum cover insurance. CIP applies to any mode and, under Incoterms 2020, requires the seller to obtain all-risks level insurance cover. That insurance level difference is the change interviewers most often test.",
			},
			{
				question: "13. What is the difference between DAP, DPU and DDP?",
				answer:
					"Under DAP (Delivered at Place) the seller delivers ready for unloading at the named place, and the buyer handles import clearance and duties. DPU (Delivered at Place Unloaded) is the only rule that requires the seller to unload. Under DDP (Delivered Duty Paid) the seller carries maximum obligation, including import clearance, duties and taxes in the destination country.",
			},
			{
				question: "14. What is a bill of lading and what functions does it serve?",
				answer:
					"A bill of lading serves three functions: it is a receipt for the goods, evidence of the contract of carriage, and — when issued as a negotiable original — a document of title, meaning whoever holds the endorsed original can claim the goods. This third function is why originals are handled so carefully and why mis-release is a serious incident.",
			},
			{
				question: "15. What is the difference between a bill of lading and an air waybill?",
				answer:
					"An air waybill is a receipt and contract of carriage for air freight but is non-negotiable and is not a document of title — goods are released to the named consignee. A negotiable ocean bill of lading is a document of title. This is why air shipments release faster but offer the shipper less control over payment security.",
			},
			{
				question: "16. What documents make up a typical export shipment file?",
				answer:
					"Commercial invoice, packing list, bill of lading or air waybill, export permit or declaration, certificate of origin where a preferential trade agreement is claimed, insurance certificate where applicable, and any product-specific certificates such as phytosanitary, health or dangerous goods declarations. Consistency across all of them is essential — mismatched weights or values between invoice and packing list are a frequent cause of clearance delays.",
			},
			{
				question: "17. What is a letter of credit and what is your role in one?",
				answer:
					"A letter of credit is a bank undertaking to pay the seller once compliant documents are presented. The logistics role is critical because banks examine documents strictly: a spelling difference, a late shipment date or a missing endorsement creates a discrepancy and can delay or block payment. I check the LC terms against the documents before presentation rather than after.",
			},
		],
	},
	{
		title: "Singapore Customs & Trade Compliance (18–25)",
		questions: [
			{
				question: "18. What is TradeNet and what do you use it for?",
				answer:
					"TradeNet is Singapore's national single-window system for submitting trade declarations electronically to Singapore Customs and the relevant controlling agencies. It is used to apply for import, export and transhipment permits. Declarations are submitted through the system and approved permits returned electronically, which underpins Singapore's fast clearance performance.",
			},
			{
				question: "19. What is the Networked Trade Platform?",
				answer:
					"The Networked Trade Platform is Singapore's digital trade ecosystem, connecting traders, logistics providers, financial institutions and government systems on a shared platform. Where TradeNet handles regulatory declarations, the NTP is broader — supporting document exchange, trade finance and value-added services across the trade community.",
			},
			{
				question: "20. What is an HS code and why does classification matter?",
				answer:
					"The Harmonised System code is the internationally standardised classification number for traded goods. Classification determines the duty rate, the GST treatment, whether the goods are controlled and require additional agency approval, and whether preferential tariff treatment can be claimed under a free trade agreement. Misclassification is a compliance offence, not a clerical slip, so I verify rather than copy from a previous shipment.",
			},
			{
				question: "21. Which goods are dutiable in Singapore?",
				answer:
					"Singapore levies customs or excise duty on only four categories: intoxicating liquors, tobacco products, motor vehicles, and petroleum products and biodiesel blends. Everything else is duty-free on import, though GST still applies. Knowing this precisely is a strong signal that a candidate genuinely has Singapore trade experience.",
			},
			{
				question: "22. How is GST handled on imports into Singapore?",
				answer:
					"GST is payable on the value of imported goods at the prevailing rate, currently 9%, calculated on the CIF value plus any duty payable. Schemes exist to ease the cash flow impact — most notably the Major Exporter Scheme, which allows approved businesses that mainly export to suspend GST on their imports rather than paying and later reclaiming it.",
			},
			{
				question: "23. Explain Free Trade Zones and the warehouse schemes in Singapore.",
				answer:
					"Free Trade Zones are designated areas where goods can be stored, repacked and transhipped with duty and GST suspended until the goods enter the domestic market. The Zero-GST Warehouse Scheme allows approved warehouses outside FTZs to store non-dutiable imported goods with GST suspended, while the Licensed Warehouse Scheme covers dutiable goods. All three are cash-flow instruments as well as compliance frameworks.",
			},
			{
				question: "24. What is a certificate of origin and when is a preferential one needed?",
				answer:
					"A certificate of origin states where goods were produced. An ordinary certificate simply evidences origin, while a preferential certificate allows the importer to claim reduced or zero tariffs under a free trade agreement. Because Singapore has an extensive FTA network, correctly claiming preferential origin can materially reduce the customer's landed cost — a good commercial point to raise in an interview.",
			},
			{
				question: "25. How do you handle dangerous goods shipments?",
				answer:
					"Dangerous goods must be classified correctly, packed and labelled to the applicable regulations — IATA Dangerous Goods Regulations for air and the IMDG Code for sea — accompanied by a shipper's declaration, and handled only by trained and certified staff. In Singapore, storage and transport of hazardous materials additionally requires the relevant licences. I never accept a shipper's classification without checking the safety data sheet.",
			},
		],
	},
	{
		title: "Warehouse & Transport Operations (26–33)",
		questions: [
			{
				question: "26. Walk me through a standard warehouse receiving process.",
				answer:
					"Pre-advice and appointment scheduling, unloading and initial condition check, quantity verification against the packing list and purchase order, quality inspection where required, discrepancy reporting, system receipt into the WMS or ERP, labelling, and put-away to the assigned location. The system receipt should happen promptly, because stock that is physically present but not in the system is effectively invisible to order fulfilment.",
			},
			{
				question: "27. What picking methods do you know?",
				answer:
					"Single order picking, batch picking (multiple orders picked together and sorted afterwards), zone picking (each picker works a defined area and orders pass between zones), wave picking (releasing groups of orders timed to dispatch schedules), and cluster picking. The right method depends on order profile — many small orders favour batch or cluster picking, while few large orders favour single order picking.",
			},
			{
				question: "28. How do you improve warehouse picking accuracy?",
				answer:
					"Barcode or RFID scanning at every touch, clear and unambiguous location addressing, slotting similar-looking SKUs apart from each other, pick-face labelling with images where practical, cycle counting to catch errors early, and root-cause analysis of every mis-pick rather than blaming individuals. Accuracy problems are usually design problems disguised as attention problems.",
			},
			{
				question: "29. What is cross-docking and when does it make sense?",
				answer:
					"Cross-docking moves inbound goods directly to outbound dispatch with little or no storage in between. It works well for predictable, high-volume flows, pre-allocated orders and time-sensitive goods such as fresh produce. It requires tight inbound scheduling and accurate advance shipping notices, because a single late inbound truck stalls the whole outbound wave.",
			},
			{
				question: "30. What is a WMS and how does it differ from a TMS?",
				answer:
					"A Warehouse Management System controls activity inside the four walls — receiving, put-away, inventory locations, picking, packing and dispatch. A Transport Management System manages movement outside the walls — carrier selection, route and load planning, freight rating, tracking and freight audit. Larger operations run both, integrated with the ERP.",
			},
			{
				question: "31. How would you plan a delivery route efficiently?",
				answer:
					"I consider delivery time windows, vehicle capacity in both weight and volume, drop density and geography, traffic patterns, driver hours, and any special handling needs. The objective is maximising drops per trip and vehicle fill rate while meeting service commitments. Route optimisation software helps, but the constraints still have to be captured accurately or the output is not usable.",
			},
			{
				question: "32. How do you handle a damaged or short shipment on arrival?",
				answer:
					"Document the condition immediately with photographs before unloading further, note the discrepancy on the delivery receipt and have the driver acknowledge it, quarantine the affected goods, raise the claim with the carrier or insurer within the notification deadline, inform the customer or internal stakeholder, and arrange replacement stock. Missing the claim notification window is how recoverable losses become absorbed costs.",
			},
			{
				question: "33. What safety practices matter in a warehouse environment?",
				answer:
					"Forklift operator certification and segregation of pedestrian and vehicle traffic, correct racking load limits and regular racking inspection, safe manual handling practice, proper personal protective equipment, clear emergency egress, and correct segregation and labelling of hazardous materials. In Singapore this sits under the Workplace Safety and Health framework, where the employer carries a legal duty of care.",
			},
		],
	},
	{
		title: "Systems, Problem-Solving & Behavioural (34–40)",
		questions: [
			{
				question: "34. What systems and tools have you used?",
				answer:
					"Name them specifically and describe what you did in them — ERP modules such as SAP MM or SD, a WMS, a TMS, carrier portals, TradeNet through a declaring agent interface, and Excel. Describe the process you supported rather than just listing acronyms, because process understanding transfers between systems and screen familiarity does not.",
			},
			{
				question: "35. How strong is your Excel, and how do you use it in logistics?",
				answer:
					"I use pivot tables to analyse shipment volumes and freight spend by lane and carrier, XLOOKUP or INDEX-MATCH to reconcile carrier invoices against shipment records, SUMIFS for cost allocation, and conditional formatting to flag shipments approaching a delivery deadline. Freight invoice reconciliation in particular usually recovers more money than people expect.",
			},
			{
				question: "36. A critical shipment is going to miss the customer deadline. What do you do?",
				answer:
					"Confirm the facts and the realistic revised arrival time before communicating anything. Assess mitigation options: expedite or upgrade the mode, split the shipment so the critical portion moves faster, source from an alternate stocking location, or reroute. Then inform the customer proactively with a revised commitment and the recovery plan. Customers forgive delays far more readily than they forgive being told late.",
			},
			{
				question: "37. How do you reduce freight cost without hurting service?",
				answer:
					"Improve container and vehicle fill rates, consolidate shipments to fewer larger movements, review the mode mix and shift non-urgent volume from air to sea, renegotiate rates with volume commitments, audit freight invoices against agreed tariffs, reduce accessorial charges such as demurrage and detention through better scheduling, and optimise packaging to increase units per pallet.",
			},
			{
				question: "38. What are demurrage and detention?",
				answer:
					"Demurrage is the charge for keeping a container inside the port or terminal beyond the allowed free time. Detention is the charge for keeping the container outside the terminal — at your yard or warehouse — beyond the free time before returning it empty. Both are avoidable costs driven by planning and paperwork readiness, which is why interviewers use them to test operational awareness.",
			},
			{
				question: "39. Describe a time you improved a logistics process.",
				answer:
					"Use STAR. For example: the situation was recurring customs clearance delays; the task was to reduce dwell time; I found that incomplete supplier packing lists were the root cause, so I issued a standard documentation template to suppliers and added a pre-arrival document check to the process; the result was a reduction in clearance delays and the associated demurrage charges. Quantify wherever you can.",
			},
			{
				question: "40. Why do you want to work in logistics?",
				answer:
					"Give a genuine, specific answer. Strong versions reference the tangible nature of the work — you can see the result of your coordination arrive somewhere — the problem-solving under time pressure, the international exposure, and the fact that Singapore is one of the best places in the world to build a logistics career given the concentration of regional headquarters and hub operations here.",
			},
		],
	},
];

const faqQuestions = [
	interviewSections[1].questions[0],
	interviewSections[1].questions[3],
	interviewSections[1].questions[5],
	interviewSections[2].questions[0],
	interviewSections[2].questions[3],
	interviewSections[2].questions[4],
	interviewSections[3].questions[3],
	interviewSections[4].questions[4],
];

export default function LogisticsExecutiveInterviewQuestions() {
	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				headline:
					"40 Logistics Executive Interview Questions and Answers in Singapore (2026)",
				description:
					"Logistics executive and coordinator interview questions covering Incoterms 2020, freight modes, shipping documentation, Singapore Customs and TradeNet, warehousing and transport operations.",
				image:
					"https://edusphere.edu.sg/blogimages/logistics-executive-interview-questions.jpg",
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
						"https://edusphere.edu.sg/blog/logistics-executive-interview-questions",
				},
				articleSection: "Career Preparation",
				keywords:
					"logistics executive interview questions, incoterms 2020, tradenet, freight forwarding interview, warehouse operations singapore",
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
						name: "Logistics Executive Interview Questions",
						item: "https://edusphere.edu.sg/blog/logistics-executive-interview-questions",
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
							40 Logistics Executive Interview Questions and Answers in
							Singapore (2026)
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
								src="/blogimages/logistics-executive-interview-questions.jpg"
								alt="Colourful shipping containers stacked at a freight terminal with a container loaded on a truck trailer"
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
								Logistics executive and logistics coordinator roles are among
								the most consistently advertised supply chain jobs in
								Singapore, and the interviews are noticeably more technical than
								candidates expect. Employers here assume familiarity with
								Incoterms, shipping documentation and Singapore&apos;s customs
								environment. These 40 questions cover exactly that ground, with
								answers written for the Singapore trade context.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<p className="text-gray-700">
									<span className="font-semibold text-gray-900">
										Part of a series.
									</span>{" "}
									This article is one of four companion guides to our main{" "}
									<Link
										href="/blog/supply-chain-management-interview-questions"
										className="text-[#1AB69D] font-semibold hover:underline"
									>
										supply chain management interview questions guide
									</Link>
									. If you are preparing broadly rather than for a specific
									logistics role, start there.
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

								{sectionIndex === 2 && (
									<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
										<p className="text-gray-800">
											<span className="font-semibold">
												Compliance questions often lead into cost questions.
											</span>{" "}
											If the interviewer moves on to how you would measure
											logistics performance, be ready with definitions from our{" "}
											<Link
												href="/blog/supply-chain-kpis"
												className="text-[#1AB69D] font-semibold hover:underline"
											>
												supply chain KPI guide
											</Link>
											.
										</p>
									</div>
								)}
								{sectionIndex === 3 && (
									<div className="rounded-2xl border-l-4 border-[#1AB69D] bg-[#1AB69D]/5 p-5">
										<p className="text-gray-800">
											<span className="font-semibold">
												Warehouse questions usually turn to stock control.
											</span>{" "}
											Expect follow-ups on cycle counting, FIFO and stock
											accuracy — all covered in{" "}
											<Link
												href="/blog/inventory-management-techniques"
												className="text-[#1AB69D] font-semibold hover:underline"
											>
												inventory management techniques explained
											</Link>
											. If the role includes buying, review our{" "}
											<Link
												href="/blog/procurement-interview-questions"
												className="text-[#1AB69D] font-semibold hover:underline"
											>
												procurement interview questions
											</Link>{" "}
											as well.
										</p>
									</div>
								)}
							</div>
						))}

						{/* Quick reference */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Incoterms 2020 Quick Reference
							</h2>
							<p>
								Memorise this table before the interview. Being able to state
								which rules are sea-only is one of the fastest ways to
								demonstrate genuine trade knowledge.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full min-w-[560px] text-left text-sm">
									<thead className="bg-gray-50 text-gray-900">
										<tr>
											<th className="px-4 py-3 font-semibold">Rule</th>
											<th className="px-4 py-3 font-semibold">Mode</th>
											<th className="px-4 py-3 font-semibold">
												Risk transfers to buyer
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 text-gray-700">
										{[
											["EXW", "Any mode", "At seller's premises, before loading"],
											["FCA", "Any mode", "On delivery to the named carrier"],
											["CPT", "Any mode", "On handover to the first carrier"],
											[
												"CIP",
												"Any mode",
												"On handover to first carrier (seller insures, all-risks)",
											],
											["DAP", "Any mode", "At named place, ready for unloading"],
											["DPU", "Any mode", "At named place, once unloaded"],
											["DDP", "Any mode", "At named place, duties paid by seller"],
											["FAS", "Sea only", "Alongside the vessel"],
											["FOB", "Sea only", "On board the vessel"],
											["CFR", "Sea only", "On board (seller pays freight)"],
											[
												"CIF",
												"Sea only",
												"On board (seller pays freight + minimum insurance)",
											],
										].map(([rule, mode, risk]) => (
											<tr key={rule} className="odd:bg-white even:bg-gray-50">
												<td className="px-4 py-3 font-semibold text-gray-900">
													{rule}
												</td>
												<td className="px-4 py-3">{mode}</td>
												<td className="px-4 py-3">{risk}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* CTA */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Qualify for Better Logistics Roles
							</h2>
							<p>
								Employers in Singapore increasingly ask for a formal
								qualification alongside experience, particularly for progression
								beyond executive level. A diploma in logistics and supply chain
								management covers the trade documentation, warehousing,
								transport and inventory foundations these interviews test.
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

			<SupplyChainCluster currentSlug="logistics-executive-interview-questions" />

			<RelatedArticles currentSlug="logistics-executive-interview-questions" />

			<ContactForm />
		</main>
	);
}
