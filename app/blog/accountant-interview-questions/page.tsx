import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import { courseData } from "../../data/courses";

export const metadata: Metadata = {
	title: "60 Accountant Interview Questions & Answers in Singapore (2026)",
	description:
		"Prepare for your accounting interview in Singapore with 60 essential questions and answers covering financial reporting, taxation, auditing, GST, SFRS, and more.",
	keywords:
		"accountant interview questions singapore, accounting interview questions, finance interview singapore, GST interview questions, SFRS accounting, bookkeeping interview, audit interview questions",
	openGraph: {
		title: "60 Accountant Interview Questions & Answers in Singapore (2026)",
		description:
			"Complete guide to accountant interview questions in Singapore. Covers financial reporting, taxation, GST, auditing, and practical accounting scenarios.",
		url: "https://edusphere.edu.sg/blog/accountant-interview-questions",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-03-31T00:00:00Z",
		modifiedTime: "2026-03-31T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/homepage/dbfa-cover.jpg",
				width: 1200,
				height: 630,
				alt: "Accountant interview questions guide Singapore",
			},
		],
	},
	alternates: {
		canonical: "https://edusphere.edu.sg/blog/accountant-interview-questions",
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
		title: "General Accounting & Background Questions (1–10)",
		questions: [
			{
				question: "1. Tell me about yourself and your accounting background.",
				answer:
					"I hold a diploma in business finance and accounting with hands-on experience in bookkeeping, financial reporting, and tax filing. I have worked with SMEs in Singapore, handling full-set accounts, monthly closings, and GST submissions using accounting software such as Xero and QuickBooks.",
			},
			{
				question: "2. Why did you choose accounting as a career?",
				answer:
					"I enjoy working with numbers and problem-solving. Accounting provides a structured way to help businesses make sound financial decisions, and I find satisfaction in ensuring accuracy and compliance in financial records.",
			},
			{
				question: "3. What accounting software are you proficient in?",
				answer:
					"I am experienced with Xero, QuickBooks, MYOB, and SAP. In Singapore, Xero is widely used by SMEs, and I am comfortable with its invoicing, bank reconciliation, GST reporting, and payroll modules.",
			},
			{
				question: "4. What is the difference between accounting and bookkeeping?",
				answer:
					"Bookkeeping involves recording daily financial transactions such as sales, purchases, and payments. Accounting goes further by interpreting, classifying, analysing, and summarising financial data to produce reports and support business decisions.",
			},
			{
				question: "5. What are the key qualities of a good accountant?",
				answer:
					"Attention to detail, integrity, analytical thinking, strong knowledge of accounting standards, time management, and the ability to communicate financial information clearly to non-finance stakeholders.",
			},
			{
				question: "6. How do you stay updated with accounting standards and regulations?",
				answer:
					"I follow updates from ISCA (Institute of Singapore Chartered Accountants), ACRA, and IRAS. I also attend CPE workshops, read industry publications, and participate in professional accounting forums.",
			},
			{
				question: "7. What is your experience with full-set accounts?",
				answer:
					"I have managed full-set accounts including accounts payable, accounts receivable, general ledger, bank reconciliation, monthly journal entries, and preparation of trial balance and financial statements.",
			},
			{
				question: "8. How do you handle tight deadlines during month-end closing?",
				answer:
					"I plan ahead with a closing checklist, prioritise time-sensitive tasks like accruals and reconciliations, communicate with departments early for outstanding documents, and work systematically to avoid last-minute errors.",
			},
			{
				question: "9. Describe a time you identified and corrected an accounting error.",
				answer:
					"During a monthly reconciliation, I noticed a duplicate vendor payment of $12,000. I traced the entries, reversed the duplicate, contacted the vendor for a refund, and implemented a duplicate-check process in the AP workflow to prevent recurrence.",
			},
			{
				question: "10. What motivates you in your accounting work?",
				answer:
					"Producing accurate, timely financial information that directly supports business decisions. I also enjoy the continuous learning required to stay compliant with evolving regulations in Singapore.",
			},
		],
	},
	{
		title: "Financial Reporting & Standards (11–20)",
		questions: [
			{
				question: "11. What are the three main financial statements?",
				answer:
					"The Income Statement (Profit & Loss), the Balance Sheet (Statement of Financial Position), and the Cash Flow Statement. Together, they provide a complete picture of a company's financial performance, position, and liquidity.",
			},
			{
				question: "12. What is SFRS (Singapore Financial Reporting Standards)?",
				answer:
					"SFRS is the set of accounting standards adopted in Singapore, based on International Financial Reporting Standards (IFRS). Companies in Singapore must comply with SFRS when preparing financial statements for statutory reporting.",
			},
			{
				question: "13. What is the difference between SFRS and SFRS for Small Entities?",
				answer:
					"SFRS for Small Entities is a simplified reporting framework for qualifying small companies in Singapore. It reduces disclosure requirements and complexity compared to full SFRS, making compliance more manageable for smaller businesses.",
			},
			{
				question: "14. Explain the accounting equation.",
				answer:
					"Assets = Liabilities + Equity. This fundamental equation ensures the balance sheet always balances. Every transaction affects at least two accounts, maintaining this equilibrium through double-entry bookkeeping.",
			},
			{
				question: "15. What is the difference between accrual and cash basis accounting?",
				answer:
					"Accrual basis records revenue when earned and expenses when incurred, regardless of cash movement. Cash basis records transactions only when cash is received or paid. Singapore companies generally use accrual accounting as required by SFRS.",
			},
			{
				question: "16. What is depreciation and how is it calculated?",
				answer:
					"Depreciation allocates the cost of a fixed asset over its useful life. Common methods include straight-line (equal annual amounts) and reducing balance (percentage of book value). The method chosen should reflect how the asset's economic benefits are consumed.",
			},
			{
				question: "17. What is the difference between FIFO and weighted average method?",
				answer:
					"FIFO (First-In, First-Out) assumes the earliest inventory is sold first, while weighted average calculates cost based on the average cost of all units available. FIFO often results in higher closing inventory values during rising prices.",
			},
			{
				question: "18. How do you handle provisions and contingent liabilities?",
				answer:
					"A provision is recognised when there is a present obligation, a probable outflow of resources, and a reliable estimate. Contingent liabilities are disclosed in notes but not recognised on the balance sheet unless the outflow becomes probable.",
			},
			{
				question: "19. What is revenue recognition under SFRS 15?",
				answer:
					"SFRS 15 requires revenue to be recognised when performance obligations are satisfied. The five-step model involves identifying the contract, identifying performance obligations, determining the transaction price, allocating it, and recognising revenue as obligations are fulfilled.",
			},
			{
				question: "20. What is the difference between capital expenditure and revenue expenditure?",
				answer:
					"Capital expenditure (CapEx) is spending on assets that provide future economic benefits beyond one year, capitalised on the balance sheet. Revenue expenditure (OpEx) covers day-to-day running costs expensed in the income statement in the period incurred.",
			},
		],
	},
	{
		title: "Taxation & GST in Singapore (21–30)",
		questions: [
			{
				question: "21. What is the current corporate tax rate in Singapore?",
				answer:
					"The headline corporate tax rate in Singapore is 17%. However, start-ups may qualify for partial tax exemptions — 75% exemption on the first $100,000 and 50% on the next $100,000 of chargeable income for the first three consecutive YAs.",
			},
			{
				question: "22. What is GST and what is the current rate?",
				answer:
					"GST (Goods and Services Tax) is a broad-based consumption tax on the supply of goods and services in Singapore. The current rate is 9%, effective from 1 January 2024. GST-registered businesses must charge GST on their taxable supplies and file quarterly returns.",
			},
			{
				question: "23. When must a company register for GST?",
				answer:
					"A company must register for GST if its taxable turnover exceeds $1 million in the past 12 months (retrospective basis) or is expected to exceed $1 million in the next 12 months (prospective basis). Voluntary registration is also possible.",
			},
			{
				question: "24. What is input tax and output tax?",
				answer:
					"Output tax is the GST charged on goods and services you supply. Input tax is the GST you pay on business purchases and expenses. Your net GST payable is output tax minus claimable input tax.",
			},
			{
				question: "25. What expenses are not claimable for input tax?",
				answer:
					"Blocked input tax items include club subscriptions, medical expenses for employees (unless mandatory), motor car expenses, and family benefits. These are specified under the GST Act regulations.",
			},
			{
				question: "26. What is withholding tax in Singapore?",
				answer:
					"Withholding tax applies to certain payments made to non-residents, including royalties, interest, technical fees, and management fees. The payer must withhold a specified percentage and remit it to IRAS by the 15th of the second month from payment.",
			},
			{
				question: "27. What are the key deadlines for corporate tax filing in Singapore?",
				answer:
					"Companies must file their Estimated Chargeable Income (ECI) within 3 months of the financial year-end and their corporate tax return (Form C-S or Form C) by 30 November of the Year of Assessment. E-filing deadline is typically 15 December.",
			},
			{
				question: "28. What is the difference between Form C-S and Form C?",
				answer:
					"Form C-S is a simplified tax return for companies with annual revenue of $5 million or less, only deriving income taxable at 17%, and not claiming specific deductions. Form C is the full tax return required for all other companies.",
			},
			{
				question: "29. How do you handle tax provisions in the financial statements?",
				answer:
					"I calculate the estimated tax liability based on chargeable income, account for any tax adjustments (capital allowances, non-deductible expenses), and record the provision. Deferred tax is recognised for temporary differences between accounting and tax treatments.",
			},
			{
				question: "30. What are capital allowances in Singapore?",
				answer:
					"Capital allowances are tax deductions granted on qualifying capital expenditure such as plant, machinery, and equipment. Section 19 allows claims over 1 or 3 years. Section 19A provides accelerated write-off for qualifying assets.",
			},
		],
	},
	{
		title: "Auditing & Internal Controls (31–40)",
		questions: [
			{
				question: "31. What is the purpose of an audit?",
				answer:
					"An audit provides independent assurance that financial statements present a true and fair view in accordance with the applicable financial reporting framework. It enhances the credibility of financial information for stakeholders including investors, regulators, and creditors.",
			},
			{
				question: "32. What companies require a statutory audit in Singapore?",
				answer:
					"Companies in Singapore are exempt from audit if they qualify as small companies — meeting at least two of these criteria for the immediate past two financial years: total revenue ≤ $10 million, total assets ≤ $10 million, and employees ≤ 50.",
			},
			{
				question: "33. What is the difference between internal and external audit?",
				answer:
					"External audit provides independent opinion on financial statements for external stakeholders. Internal audit evaluates and improves the effectiveness of internal controls, risk management, and governance processes for the company's management and board.",
			},
			{
				question: "34. What are internal controls and why are they important?",
				answer:
					"Internal controls are policies and procedures that safeguard assets, ensure accuracy of financial records, promote operational efficiency, and ensure compliance with laws. Examples include segregation of duties, authorisation limits, and bank reconciliation.",
			},
			{
				question: "35. What is segregation of duties?",
				answer:
					"Segregation of duties divides responsibilities so that no single person controls all aspects of a financial transaction — for example, separating the roles of recording, authorising, and custody of assets. This reduces the risk of fraud and errors.",
			},
			{
				question: "36. How do you prepare for an external audit?",
				answer:
					"Ensure all accounts are reconciled, supporting documents are organised, year-end adjustments are posted, trial balance is balanced, and schedules for fixed assets, debtors, creditors, and bank are prepared. Respond promptly to auditor requests.",
			},
			{
				question: "37. What is a bank reconciliation and why is it important?",
				answer:
					"A bank reconciliation matches the company's cash book balance with the bank statement to identify timing differences, outstanding cheques, deposits in transit, bank charges, and errors. It is a key internal control performed monthly.",
			},
			{
				question: "38. How do you detect and prevent fraud in accounting?",
				answer:
					"Implement strong internal controls including segregation of duties, regular reconciliations, surprise audits, approval hierarchies, and whistleblower policies. Monitor unusual transactions and variances, and foster a culture of integrity.",
			},
			{
				question: "39. What is a management letter?",
				answer:
					"A management letter is issued by external auditors after an audit, highlighting internal control weaknesses, risks, and recommendations for improvement. Management responds with action plans and timelines for remediation.",
			},
			{
				question: "40. What is the going concern assumption?",
				answer:
					"The going concern assumption means the company is expected to continue operating for the foreseeable future (at least 12 months from reporting date). If there are doubts, auditors must assess whether the financial statements require adjustment or additional disclosure.",
			},
		],
	},
	{
		title: "Accounts Payable & Receivable (41–48)",
		questions: [
			{
				question: "41. How do you manage the accounts payable process?",
				answer:
					"I verify invoices against purchase orders and delivery orders, obtain proper approvals, code expenses to correct accounts, process payments within terms, and reconcile the AP sub-ledger to the general ledger monthly.",
			},
			{
				question: "42. How do you handle overdue accounts receivable?",
				answer:
					"I follow a structured collection process — send payment reminders before due date, follow up with calls, escalate to management for significantly overdue accounts, and assess whether a provision for doubtful debts is needed based on ageing analysis.",
			},
			{
				question: "43. What is an ageing report and how do you use it?",
				answer:
					"An ageing report categorises outstanding receivables or payables by the length of time they have been unpaid (current, 30, 60, 90+ days). It helps identify overdue amounts, prioritise collections, and estimate doubtful debt provisions.",
			},
			{
				question: "44. How do you handle a vendor invoice dispute?",
				answer:
					"I investigate by comparing the invoice to the purchase order, goods received note, and contract terms. I communicate discrepancies to the vendor with supporting documents, negotiate resolution, and only authorise payment once the issue is resolved.",
			},
			{
				question: "45. What is the three-way matching process?",
				answer:
					"Three-way matching verifies that the purchase order, goods receipt note, and vendor invoice all agree on quantity, price, and terms before authorising payment. This prevents overpayments, duplicate payments, and fraudulent invoices.",
			},
			{
				question: "46. How do you decide when to write off a bad debt?",
				answer:
					"A debt is written off when all reasonable collection efforts have been exhausted, the debtor is insolvent or uncontactable, and management approves the write-off. In Singapore, specific conditions must be met for the write-off to be tax-deductible under IRAS rules.",
			},
			{
				question: "47. What is a credit note and when is it issued?",
				answer:
					"A credit note reduces the amount owed by a customer. It is issued for returned goods, overcharges, billing errors, or agreed discounts. For GST purposes, a credit note must be issued within the prescribed timeframe and properly recorded.",
			},
			{
				question: "48. How do you ensure accuracy in payment processing?",
				answer:
					"I verify bank details against the vendor master file, use batch payment approvals with dual signatories, reconcile payments to invoices, and maintain a payment register. Any changes to vendor bank details require independent verification.",
			},
		],
	},
	{
		title: "Behavioural & Situational Questions (49–60)",
		questions: [
			{
				question: "49. Describe a time you improved an accounting process.",
				answer:
					"I automated the monthly bank reconciliation using Xero's bank feed feature, reducing the reconciliation time from two days to half a day. This also improved accuracy by flagging unmatched transactions automatically.",
			},
			{
				question: "50. How do you handle confidential financial information?",
				answer:
					"I follow strict data protection policies, use password-protected files, share information only on a need-to-know basis, comply with PDPA (Personal Data Protection Act) in Singapore, and never discuss sensitive financial data in public settings.",
			},
			{
				question: "51. Tell me about a time you worked under pressure to meet a reporting deadline.",
				answer:
					"During year-end closing, I managed simultaneous audit requests and GST filing deadlines. I created a priority matrix, delegated data gathering to junior staff, worked extended hours when needed, and delivered all submissions on time with zero errors.",
			},
			{
				question: "52. How do you handle disagreements with management on accounting treatment?",
				answer:
					"I present my position with reference to the relevant accounting standard, provide clear documentation, and explain the financial impact of different treatments. If we disagree, I escalate to the external auditor or a senior authority for guidance.",
			},
			{
				question: "53. Describe your experience working with cross-functional teams.",
				answer:
					"I regularly collaborate with sales, operations, and HR. For example, I work with sales on revenue recognition timing, with HR on payroll processing, and with operations on inventory costing. Clear communication and shared timelines are essential.",
			},
			{
				question: "54. How do you prioritise tasks when everything seems urgent?",
				answer:
					"I assess deadlines and regulatory requirements first — statutory filings and payroll take priority. Then I evaluate business impact and communicate realistic timelines to stakeholders. I use a task list and update it throughout the day.",
			},
			{
				question: "55. What would you do if you discovered your manager was manipulating financial records?",
				answer:
					"I would document the evidence, report it through the proper whistleblower channel or to the compliance officer, and avoid confronting the individual directly. Maintaining integrity is non-negotiable, and I would follow the company's code of conduct.",
			},
			{
				question: "56. How do you handle repetitive tasks without losing accuracy?",
				answer:
					"I use checklists, templates, and automation tools to maintain consistency. I also review my work before submission and take short breaks to maintain focus. Where possible, I implement process improvements to reduce manual repetition.",
			},
			{
				question: "57. Tell me about a complex reconciliation you performed.",
				answer:
					"I reconciled an intercompany account with over 200 monthly transactions across three entities. I built a standardised template, matched transactions by reference number, identified and resolved timing differences, and reduced the outstanding items from 45 to 3 within two months.",
			},
			{
				question: "58. How do you adapt to new accounting systems or software?",
				answer:
					"I actively participate in training sessions, explore the system's features hands-on, refer to user guides, and seek help from support teams when needed. I also document my learnings to create quick-reference guides for the team.",
			},
			{
				question: "59. Where do you see yourself in five years?",
				answer:
					"I aim to grow into a senior accounting role or finance manager position, obtain relevant professional certifications, and take on more strategic responsibilities such as budgeting, financial analysis, and business advisory within a growing organisation in Singapore.",
			},
			{
				question: "60. Do you have any questions for us?",
				answer:
					"I would ask about the team structure, the accounting systems and ERP used, opportunities for professional development and certifications, the company's approach to automation, and the key challenges facing the finance team in the next 12 months.",
			},
		],
	},
];

export default function AccountantInterviewQuestions() {
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "60 Accountant Interview Questions and Answers in Singapore (2026)",
		description:
			"Comprehensive guide with 60 essential accountant interview questions and answers covering financial reporting, Singapore taxation, GST, auditing, and practical accounting scenarios.",
		image: "https://edusphere.edu.sg/homepage/dbfa-cover.jpg",
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
		datePublished: "2026-03-31",
		dateModified: "2026-03-31",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://edusphere.edu.sg/blog/accountant-interview-questions",
		},
		articleSection: "Career Preparation",
		keywords:
			"accountant interview questions, accounting interview singapore, GST interview, SFRS, finance interview, bookkeeping, audit interview",
		inLanguage: "en-SG",
	};

	return (
		<main className="min-h-screen bg-white">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>

			{/* Hero */}
			<section className="bg-white">
				<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
					<div className="flex flex-col items-start gap-4">
						<span className="text-sm font-semibold text-gray-500">Blog</span>

						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 max-w-5xl">
							60 Accountant Interview Questions and Answers in Singapore (2026)
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
								<span>31 Mar, 2026</span>
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
								src="/homepage/dbfa-cover.jpg"
								alt="Accountant interview questions guide Singapore"
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
								Preparing for an accountant interview in Singapore? Whether
								you&apos;re a fresh graduate, an experienced bookkeeper, or a
								mid-career professional switching to finance, this guide covers 60
								essential questions that Singapore employers commonly ask — from
								basic accounting principles to GST, SFRS, auditing, and real-world
								scenarios.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<h2 className="text-xl font-semibold text-gray-900">
									How to Use This Guide
								</h2>
								<p className="mt-2 text-gray-700">
									Questions are grouped by topic so you can focus on your weak
									areas. Each answer is tailored to Singapore&apos;s regulatory
									environment including IRAS, ACRA, GST, and SFRS requirements.
									Personalise answers with your own examples using the STAR method
									(Situation, Task, Action, Result).
								</p>
							</div>
						</div>

						{/* Question Sections */}
						{interviewSections.map((section) => (
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
							</div>
						))}

						{/* Interview Tips */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Interview Tips for Accounting Roles in Singapore
							</h2>
							<div className="grid gap-5 md:grid-cols-3 text-gray-700">
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										Before the Interview
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>
											Research the company&apos;s industry, financials, and
											recent news.
										</li>
										<li>
											Review Singapore-specific regulations: GST rate,
											corporate tax, SFRS.
										</li>
										<li>
											Brush up on the accounting software mentioned in the job
											description.
										</li>
										<li>
											Prepare examples of your work with numbers and outcomes.
										</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										During the Interview
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>
											Be precise — use actual figures and timeframes in your
											answers.
										</li>
										<li>
											Demonstrate knowledge of local compliance (IRAS, ACRA,
											MAS).
										</li>
										<li>
											Show you can work independently and within a team.
										</li>
										<li>
											Ask informed questions about the finance team structure
											and systems.
										</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										After the Interview
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>
											Send a thank-you email within 24 hours referencing
											specific discussion points.
										</li>
										<li>
											Follow up politely if you haven&apos;t heard back within
											the stated timeline.
										</li>
										<li>
											Reflect on questions you found challenging and prepare
											better answers.
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* CTA */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Build Your Accounting Career with Edusphere
							</h2>
							<p>
								A strong foundation in accounting principles, financial reporting,
								and Singapore regulations is the key to interview success. Whether
								you are starting out or upgrading your skills, the right
								qualification gives you the confidence and knowledge employers
								look for.
							</p>
							<p className="text-lg font-semibold text-gray-900">
								Popular accounting &amp; business courses at Edusphere
							</p>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{courseData
									.flatMap((s) => s.courses)
									.filter((c) =>
										[
											"Diploma in Business Finance & Accounting",
											"Diploma in Business Administration",
											"Diploma in Business Administration (E-Learning)",
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

			<ContactForm />
		</main>
	);
}
