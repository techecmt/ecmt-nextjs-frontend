import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../components/contactform";
import { courseData } from "../../data/courses";

export const metadata: Metadata = {
	title: "50 Maid Interview Questions & Answers in Singapore (2026)",
	description:
		"Prepare for your maid or domestic helper interview in Singapore with 50 essential questions and answers covering caregiving, housekeeping, childcare, eldercare, cooking, and employment regulations.",
	keywords:
		"maid interview questions singapore, domestic helper interview questions, FDW interview questions, helper interview tips singapore, maid hiring singapore, foreign domestic worker interview, caregiving interview questions",
	openGraph: {
		title: "50 Maid Interview Questions & Answers in Singapore (2026)",
		description:
			"Complete guide to maid and domestic helper interview questions in Singapore. Covers caregiving, housekeeping, childcare, eldercare, cooking, and MOM regulations.",
		url: "https://edusphere.edu.sg/blog/maid-interview-questions",
		siteName: "Edusphere College of Management and Technology",
		locale: "en_SG",
		type: "article",
		publishedTime: "2026-04-05T00:00:00Z",
		modifiedTime: "2026-04-05T00:00:00Z",
		images: [
			{
				url: "https://edusphere.edu.sg/homepage/addipcaregiving.jpg",
				width: 1200,
				height: 630,
				alt: "Maid interview questions guide Singapore",
			},
		],
	},
	alternates: {
		canonical: "https://edusphere.edu.sg/blog/maid-interview-questions",
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
		title: "General Background & Experience (1–10)",
		questions: [
			{
				question: "1. Tell me about yourself and your experience as a domestic helper.",
				answer:
					"I have been working as a domestic helper for several years, handling household duties such as cooking, cleaning, laundry, and caring for children and elderly family members. I am reliable, hardworking, and comfortable adapting to different family routines. I take pride in maintaining a clean, organised home and building a trusting relationship with my employers.",
			},
			{
				question: "2. Why do you want to work as a maid in Singapore?",
				answer:
					"Singapore offers a safe and structured working environment for foreign domestic workers (FDWs). The Ministry of Manpower (MOM) provides clear guidelines that protect both employers and helpers. I want to work here because I can support my family financially while gaining professional experience in a well-regulated country.",
			},
			{
				question: "3. How many years of experience do you have as a domestic helper?",
				answer:
					"I have [X] years of experience working in households in Singapore and/or overseas. During this time, I have taken care of children of various ages, cooked meals for families, handled grocery shopping, and managed daily housekeeping tasks. Each employer has helped me grow and learn new skills.",
			},
			{
				question: "4. Have you worked in Singapore before? If so, for how long?",
				answer:
					"Yes, I have worked in Singapore for [X] years with [number] employers. I am familiar with Singapore's living environment, public transport, HDB and condo living, neighbourhood shops, and the cultural diversity of Singaporean families. I understand MOM regulations regarding my employment.",
			},
			{
				question: "5. What types of households have you worked in previously?",
				answer:
					"I have worked in different household settings — HDB flats, condominiums, and landed properties. I have experience serving small families, multi-generational households, and families with young children and elderly members. Each setting taught me to be flexible and adaptable.",
			},
			{
				question: "6. Why did you leave your previous employer?",
				answer:
					"My previous employer's family relocated overseas, so my contract ended naturally. We parted on good terms, and they provided me with a reference letter. I am grateful for the experience I gained and am now looking for a new family where I can contribute my skills.",
			},
			{
				question: "7. What do you enjoy most about being a domestic helper?",
				answer:
					"I enjoy taking care of people and making a home comfortable. There is satisfaction in knowing that the family can focus on their work and daily life because the household is well managed. I also enjoy bonding with the children or elderly members and seeing them happy and well cared for.",
			},
			{
				question: "8. What are your strengths as a helper?",
				answer:
					"My strengths are my reliability, attention to detail, and ability to multitask. I can manage cooking, cleaning, and caregiving duties simultaneously without compromising quality. I am also patient, especially when caring for young children or elderly persons, and I take instructions well.",
			},
			{
				question: "9. What are your weaknesses, and how do you work on them?",
				answer:
					"I sometimes spend extra time making sure everything is perfect, which can slow me down. I have learned to prioritise tasks and manage my time more efficiently. I also ask my employer for clear priorities so I can focus on what matters most each day.",
			},
			{
				question: "10. Are you comfortable working on rest days if needed?",
				answer:
					"Under MOM regulations, I am entitled to one rest day per week or compensation in lieu. I am open to discussing arrangements with my employer. If I am needed on my rest day occasionally, I am willing to help as long as it is mutually agreed upon and compensated according to the employment contract.",
			},
		],
	},
	{
		title: "Housekeeping & Cleaning Skills (11–20)",
		questions: [
			{
				question: "11. How do you organise your daily housekeeping routine?",
				answer:
					"I start with the most time-sensitive tasks such as preparing breakfast and getting the children ready for school. After that, I do laundry, sweep and mop floors, clean bathrooms, and tidy bedrooms. In the afternoon, I prepare ingredients for dinner. I keep a weekly schedule for deeper tasks like cleaning windows, fans, and wardrobes.",
			},
			{
				question: "12. How do you handle laundry for different types of fabrics?",
				answer:
					"I always check garment care labels before washing. Delicate fabrics like silk and wool are hand-washed or placed in a laundry bag for gentle machine cycles. I separate whites, colours, and darks. For heavily soiled items, I pre-soak them. I also know how to iron different fabrics at the correct temperature settings.",
			},
			{
				question: "13. How do you clean and maintain a kitchen after cooking?",
				answer:
					"I clean as I cook to avoid a big mess afterwards. After preparing a meal, I wash all utensils, wipe down countertops and the stove, and mop the kitchen floor. I also clean the sink and ensure the rubbish is disposed of properly. Once a week, I deep-clean the oven, microwave, and refrigerator.",
			},
			{
				question: "14. What cleaning products are you familiar with?",
				answer:
					"I am familiar with common cleaning products used in Singapore such as Dettol, Magiclean, Cif, bleach, and dishwashing liquid. I know which products are suitable for different surfaces — for example, using non-abrasive cleaners on marble countertops and avoiding bleach on coloured fabrics.",
			},
			{
				question: "15. How do you keep the house pest-free?",
				answer:
					"I make sure food is stored in sealed containers, rubbish is thrown out daily, and the kitchen is kept clean and dry. I check for standing water in flower pots and drains to prevent mosquito breeding. In Singapore, NEA conducts regular inspections, so I ensure the home complies with hygiene standards. I alert my employer if I notice signs of pests like cockroaches or ants.",
			},
			{
				question: "16. Can you handle grocery shopping and managing household supplies?",
				answer:
					"Yes, I can shop at local supermarkets, wet markets, and neighbourhood shops. I know how to compare prices, check expiry dates, and choose fresh produce. I keep track of household supplies and inform my employer when items are running low. I am also comfortable using cashless payment methods if needed.",
			},
			{
				question: "17. How do you manage cleaning in a large house or condo?",
				answer:
					"I break the cleaning into zones and assign specific days for deep cleaning each area. Daily tasks like sweeping, mopping, and wiping surfaces are done throughout the house. For larger spaces, I use a systematic approach — cleaning room by room — so nothing is missed. I also prioritise high-traffic areas like the kitchen, living room, and bathrooms.",
			},
			{
				question: "18. How do you handle delicate items or expensive furniture?",
				answer:
					"I handle fragile items with extra care — using soft cloths and appropriate cleaning solutions. For expensive furniture, I follow the employer's instructions on how to clean and maintain them. I avoid using harsh chemicals on wood or leather and always test a small hidden area first when using a new product.",
			},
			{
				question: "19. How do you manage waste and recycling?",
				answer:
					"I separate recyclable items such as paper, plastic, glass, and metal from general waste. In Singapore, most HDB estates have recycling bins at void decks or designated recycling corners. I also ensure food waste is bagged properly before disposal to avoid odours and pests. I follow the household's specific recycling preferences.",
			},
			{
				question: "20. Are you comfortable using household appliances like vacuum cleaners, washing machines, and dishwashers?",
				answer:
					"Yes, I am comfortable operating various household appliances. I have used front-load and top-load washing machines, dryers, vacuum cleaners, robot vacuums, dishwashers, and steam mops. If I encounter an appliance I have not used before, I am happy to learn — I read the instruction manual or ask my employer to show me.",
			},
		],
	},
	{
		title: "Cooking & Meal Preparation (21–28)",
		questions: [
			{
				question: "21. What types of cuisine can you cook?",
				answer:
					"I can prepare a range of dishes including Asian cuisines such as Chinese, Malay, Indian, Filipino, and Indonesian. I am also comfortable cooking Western-style meals like pasta, soups, salads, and grilled meats. I am willing to learn new recipes — I can follow YouTube tutorials, recipe books, or instructions from my employer.",
			},
			{
				question: "22. How do you handle meal planning for a family?",
				answer:
					"I plan meals weekly based on the family's dietary preferences, schedule, and budget. I prepare a grocery list in advance and ensure there is variety throughout the week. I also consider nutritional balance — including proteins, vegetables, carbohydrates, and fruits in each meal. I check with my employer if anyone has allergies or dietary restrictions.",
			},
			{
				question: "23. Can you cook for a family member with dietary restrictions (e.g., halal, vegetarian, diabetic)?",
				answer:
					"Yes, I have experience preparing meals for various dietary needs. For halal meals, I use halal-certified ingredients and follow proper preparation guidelines. For vegetarian or vegan diets, I prepare plant-based meals with adequate protein sources like tofu, tempeh, and legumes. For diabetic-friendly meals, I limit sugar and refined carbohydrates and use healthier cooking methods.",
			},
			{
				question: "24. How do you prepare baby food or meals for toddlers?",
				answer:
					"For babies, I prepare puréed or mashed food using fresh ingredients like sweet potato, carrots, broccoli, fish, and rice porridge. I follow age-appropriate feeding guidelines and avoid adding salt, sugar, or seasoning for infants. For toddlers, I prepare soft, bite-sized meals that are nutritious and easy to chew. I always ensure that food is freshly prepared and stored hygienically.",
			},
			{
				question: "25. How do you ensure food safety and hygiene in the kitchen?",
				answer:
					"I wash my hands thoroughly before handling food. I separate raw meats from cooked food and vegetables to prevent cross-contamination. I store perishable items in the refrigerator promptly and check expiry dates regularly. I ensure food is cooked to the right temperature and avoid leaving prepared food at room temperature for more than two hours.",
			},
			{
				question: "26. Can you bake or prepare snacks for children?",
				answer:
					"Yes, I can bake simple items like cookies, muffins, cakes, and bread. I also prepare healthy snacks like fruit platters, sandwiches, and homemade smoothies for children. I am happy to learn new recipes if the family has specific preferences.",
			},
			{
				question: "27. How do you manage cooking when the employer is hosting guests?",
				answer:
					"I discuss the menu and guest count with my employer in advance. I prepare as much as possible a day ahead — marinating meats, pre-cutting vegetables, and setting the table. On the day itself, I focus on cooking and serving. I also help with cleaning up during and after the event.",
			},
			{
				question: "28. Are you comfortable shopping at wet markets in Singapore?",
				answer:
					"Yes, I enjoy shopping at wet markets because the ingredients are fresh and affordable. I know how to select good quality meat, seafood, and vegetables. I am also confident bargaining politely and communicating with stallholders. I am familiar with popular wet markets and can navigate them efficiently.",
			},
		],
	},
	{
		title: "Childcare & Eldercare (29–40)",
		questions: [
			{
				question: "29. Do you have experience caring for newborns or infants?",
				answer:
					"Yes, I have cared for newborns and infants. I am experienced in bottle-feeding, burping, nappy changing, bathing, and putting babies to sleep. I understand the importance of maintaining a consistent feeding and sleeping schedule. I am also alert to signs of discomfort, fever, or illness and will inform the parents immediately.",
			},
			{
				question: "30. How do you handle a crying or fussy child?",
				answer:
					"I stay calm and try to identify the cause — whether the child is hungry, tired, uncomfortable, or seeking attention. I use soothing techniques such as gentle rocking, singing, or distracting the child with toys or activities. If the crying persists and I suspect the child is unwell, I inform the parents right away.",
			},
			{
				question: "31. Can you help children with their homework or school preparation?",
				answer:
					"I can assist with basic homework tasks, help children pack their school bags, prepare their uniforms, and ensure they follow a daily routine. For subjects I am less familiar with, I will supervise and encourage the child to complete their work. I communicate with the parents about any difficulties the child may face.",
			},
			{
				question: "32. How do you ensure the safety of young children at home?",
				answer:
					"I keep sharp objects, chemicals, and small items out of reach. I use safety gates near stairs and ensure windows and balcony doors are secured. I never leave young children unattended, especially near water or in the kitchen. I also teach older children basic safety rules and supervise outdoor play.",
			},
			{
				question: "33. Do you have experience caring for elderly family members?",
				answer:
					"Yes, I have looked after elderly persons, including those with limited mobility, diabetes, and dementia. My duties included assisting with daily hygiene, preparing meals according to dietary needs, reminding them to take medication, accompanying them for walks, and keeping them company. I understand the importance of patience and compassion in eldercare.",
			},
			{
				question: "34. How do you handle an elderly person who is difficult or uncooperative?",
				answer:
					"I approach the situation with patience and empathy. I try to understand the reason for their behaviour — it could be frustration, pain, or confusion. I speak calmly and respectfully, offer choices when possible, and avoid confrontation. If the behaviour continues, I inform the family so we can find a suitable solution together.",
			},
			{
				question: "35. Can you assist with basic medical care such as monitoring blood pressure or blood sugar?",
				answer:
					"Yes, I can use a digital blood pressure monitor and a glucometer to check readings. I record the results in a logbook for the family and doctor's reference. I also know how to recognise warning signs such as extremely high or low blood sugar and will alert the family or call for emergency help if necessary.",
			},
			{
				question: "36. How do you manage medication schedules for elderly family members?",
				answer:
					"I use a pill organiser and set reminders to ensure medication is taken at the correct time and dosage. I label each compartment by day and time (morning, afternoon, evening). I also keep a record of medication names and dosages and check with the family before administering any new medication.",
			},
			{
				question: "37. How would you respond in a medical emergency at home?",
				answer:
					"I would first ensure the person is safe and call 995 (Singapore's emergency ambulance number) immediately. I would stay calm, provide basic first aid if I know how (such as CPR or stopping bleeding), and keep the person comfortable until help arrives. I would also contact the employer or family members right away.",
			},
			{
				question: "38. Are you comfortable accompanying children to school or elderly persons to medical appointments?",
				answer:
					"Yes, I am comfortable accompanying family members outside the home. I am familiar with Singapore's public transport system — MRT, buses, and ride-hailing apps like Grab. I ensure children arrive at school safely and on time, and I assist elderly members during medical appointments by helping them communicate with medical staff if needed.",
			},
			{
				question: "39. How do you engage and stimulate young children during the day?",
				answer:
					"I plan age-appropriate activities such as reading, colouring, puzzles, building blocks, outdoor play, and simple crafts. I also limit screen time and encourage physical activity. For older children, I help them with enrichment homework and encourage them to develop good habits like reading and tidying up after themselves.",
			},
			{
				question: "40. How do you handle bedtime routines for children?",
				answer:
					"I follow a consistent bedtime routine that includes bathing, brushing teeth, changing into pyjamas, and reading a story or singing a lullaby. I dim the lights and create a calm environment to help the child wind down. I follow the parents' instructions regarding bedtime rules and ensure the child feels safe and comfortable.",
			},
		],
	},
	{
		title: "Communication, Attitude & Work Ethic (41–46)",
		questions: [
			{
				question: "41. How do you handle disagreements or misunderstandings with your employer?",
				answer:
					"I believe in open and respectful communication. If there is a misunderstanding, I try to clarify it calmly and listen to my employer's perspective. I avoid being defensive and focus on finding a solution. If I feel uncomfortable raising an issue directly, I know I can seek help from MOM or the Centre for Domestic Employees (CDE) in Singapore.",
			},
			{
				question: "42. How do you manage homesickness or personal stress while working abroad?",
				answer:
					"I stay connected with my family through video calls and messages during my free time. I also use my rest day to socialise with friends and participate in community activities. I focus on my work goals and remind myself of the reasons I chose to work abroad. If I feel overwhelmed, I seek support from fellow helpers or organisations like CDE.",
			},
			{
				question: "43. Are you comfortable following house rules set by your employer?",
				answer:
					"Yes, every household has its own rules and preferences, and I respect that. I make an effort to understand and follow the house rules from the very beginning. If I am unsure about something, I ask for clarification instead of assuming. Clear rules help me perform my duties better and build trust with my employer.",
			},
			{
				question: "44. How do you handle feedback or criticism from your employer?",
				answer:
					"I receive feedback positively and see it as an opportunity to improve. I listen carefully, apologise if I made a mistake, and take steps to correct it. I do not take constructive criticism personally. I appreciate employers who communicate their expectations clearly so I can meet their standards.",
			},
			{
				question: "45. What languages do you speak?",
				answer:
					"I speak [languages, e.g., English, Bahasa Indonesia, Tagalog, Burmese, basic Mandarin]. I can communicate effectively in English for daily interactions, and I am willing to learn basic phrases in other languages to communicate better with the family, especially elderly members who may prefer speaking in Mandarin, Malay, or a dialect.",
			},
			{
				question: "46. How do you ensure good communication with your employer?",
				answer:
					"I provide daily updates on tasks completed, the children's activities, or any issues that came up during the day. I ask questions when I am unsure and confirm instructions to avoid misunderstandings. I also keep my employer informed about household supplies, maintenance needs, or anything that requires their attention.",
			},
		],
	},
	{
		title: "Singapore Regulations & Practical Knowledge (47–50)",
		questions: [
			{
				question: "47. Are you aware of Singapore's MOM regulations for foreign domestic workers?",
				answer:
					"Yes, I understand that MOM governs the employment of foreign domestic workers (FDWs) in Singapore. Key regulations include having a valid work permit, mandatory rest days (at least one per week or compensation in lieu), adequate food and accommodation provided by the employer, and access to medical care. I also know that my employer is required to purchase a security bond and medical insurance for me.",
			},
			{
				question: "48. What do you know about your rights as a foreign domestic worker in Singapore?",
				answer:
					"I know that I am entitled to fair treatment, adequate rest, proper living conditions, and timely salary payments. If I face any issues, I can approach MOM, the Centre for Domestic Employees (CDE), or the Foreign Domestic Worker Association for Social Support and Training (FAST). Singapore has laws that protect FDWs from abuse and exploitation.",
			},
			{
				question: "49. Do you have any certifications or training relevant to caregiving or domestic work?",
				answer:
					"Yes, I have completed [mention any relevant training, e.g., a caregiving course, first aid certification, or a settling-in programme (SIP) required by MOM for first-time FDWs]. These courses covered topics like home safety, caregiving basics, employment rights, and cultural adaptation. I am also open to further training to upgrade my skills.",
			},
			{
				question: "50. What are your salary expectations and contract terms?",
				answer:
					"I am open to discussing salary based on the scope of duties and the family's needs. I understand that the typical salary for FDWs in Singapore varies depending on experience and nationality, and I expect a salary that is fair and in line with market rates. I also expect my employer to cover my levy, medical insurance, and provide adequate food and accommodation as required by MOM.",
			},
		],
	},
];

type FAQItem = {
	question: string;
	answer: string;
};

const faqItems: FAQItem[] = [
	{
		question: "What should employers look for when interviewing a maid in Singapore?",
		answer:
			"Employers should assess the candidate's relevant experience in housekeeping, cooking, childcare, or eldercare. It is also important to evaluate communication skills, willingness to learn, attitude towards following house rules, and familiarity with Singapore's living environment and MOM regulations.",
	},
	{
		question: "Is it mandatory for new maids in Singapore to attend a settling-in programme (SIP)?",
		answer:
			"Yes, first-time foreign domestic workers in Singapore are required to attend the Settling-In Programme (SIP) within the first three days of arrival. The one-day course covers safety awareness, employment rights, and living in Singapore. The employer bears the cost of this programme.",
	},
	{
		question: "How many rest days is a maid entitled to in Singapore?",
		answer:
			"Under MOM regulations, foreign domestic workers are entitled to at least one rest day per week. Employers and helpers can mutually agree on compensation in lieu of rest days, but this must be documented in the employment contract.",
	},
	{
		question: "What is the typical salary range for a maid in Singapore in 2026?",
		answer:
			"Salaries for FDWs in Singapore typically range from SGD 550 to SGD 800 per month, depending on the helper's nationality, experience, and skill set. Experienced helpers or those with specialised skills such as eldercare or infant care may command higher salaries.",
	},
	{
		question: "Can I hire a maid in Singapore if I live in an HDB flat?",
		answer:
			"Yes, you can hire a foreign domestic worker if you live in an HDB flat, provided you meet MOM's eligibility criteria. You must be a Singapore citizen or permanent resident (or hold certain work pass types), be at least 21 years old, and be able to provide adequate accommodation for the helper.",
	},
	{
		question: "What should be included in a maid's employment contract in Singapore?",
		answer:
			"The employment contract should include the monthly salary, rest day arrangements, job scope, food and accommodation provisions, medical benefits, termination terms, and any other agreed-upon conditions. Both the employer and helper should sign the contract before work begins.",
	},
	{
		question: "How do I verify a maid's employment history and references?",
		answer:
			"You can ask the maid or her agency for reference letters from previous employers. You may also contact previous employers directly (with the helper's consent) to verify her work experience, strengths, and any areas for improvement. Some agencies also provide performance records.",
	},
	{
		question: "What training or certifications can improve a maid's employability in Singapore?",
		answer:
			"Courses in caregiving, first aid and CPR, eldercare, infant care, and cooking can significantly improve a domestic helper's skills and employability. Edusphere College offers relevant programmes such as the Diploma in Caregiving and the International Certificate in Nursing Aid that equip helpers with professional caregiving knowledge.",
	},
];

export default function MaidInterviewQuestions() {
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline:
			"50 Maid Interview Questions and Answers in Singapore (2026)",
		description:
			"Comprehensive guide with 50 essential maid and domestic helper interview questions and answers covering housekeeping, cooking, childcare, eldercare, and Singapore MOM regulations.",
		image: "https://edusphere.edu.sg/homepage/addipcaregiving.jpg",
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
		datePublished: "2026-04-05",
		dateModified: "2026-04-05",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://edusphere.edu.sg/blog/maid-interview-questions",
		},
		articleSection: "Career Preparation",
		keywords:
			"maid interview questions, domestic helper interview singapore, FDW interview, caregiving interview, housekeeping interview, eldercare, childcare",
		inLanguage: "en-SG",
	};

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqItems.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	return (
		<main className="min-h-screen bg-white">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			{/* Hero */}
			<section className="bg-white">
				<div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
					<div className="flex flex-col items-start gap-4">
						<span className="text-sm font-semibold text-gray-500">Blog</span>

						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 max-w-5xl">
							50 Maid Interview Questions and Answers in Singapore (2026)
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
								<span>05 Apr, 2026</span>
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
								src="/homepage/addipcaregiving.jpg"
								alt="Maid interview questions guide Singapore"
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
								Hiring a maid or foreign domestic worker (FDW) in Singapore is a
								significant decision that affects your entire household. Whether
								you are an employer preparing interview questions or a domestic
								helper getting ready for an interview, this guide provides 50
								essential questions and answers to help both sides prepare
								thoroughly.
							</p>
							<p className="text-lg leading-relaxed">
								Singapore has over 250,000 foreign domestic workers, and the
								Ministry of Manpower (MOM) sets clear regulations to ensure fair
								treatment and a positive working relationship. The right interview
								helps employers find a reliable, skilled helper — and helps
								domestic workers showcase their experience, skills, and
								professionalism.
							</p>
							<div className="rounded-2xl border border-[#1AB69D]/30 bg-[#1AB69D]/10 p-6 shadow-sm">
								<h2 className="text-xl font-semibold text-gray-900">
									How to Use This Guide
								</h2>
								<p className="mt-2 text-gray-700">
									Questions are organised by category — general background,
									housekeeping, cooking, childcare, eldercare, communication,
									and Singapore-specific regulations. Employers can use these
									questions to assess candidates systematically. Helpers can
									prepare answers tailored to their own experience. Personalise
									each answer with real examples from your work history.
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
								Tips for a Successful Maid Interview in Singapore
							</h2>
							<div className="grid gap-5 md:grid-cols-3 text-gray-700">
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										For Employers
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>
											Clearly define your job scope — include housekeeping,
											cooking, childcare, eldercare, or pet care duties.
										</li>
										<li>
											Be upfront about house rules, rest day arrangements,
											and salary.
										</li>
										<li>
											Assess the candidate&apos;s experience with Singapore-specific
											tasks like wet market shopping and using public transport.
										</li>
										<li>
											Check references from previous employers and verify
											employment history.
										</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										For Domestic Helpers
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>
											Prepare answers based on your real experience — use
											specific examples.
										</li>
										<li>
											Highlight your strengths in caregiving, cooking, or
											housekeeping.
										</li>
										<li>
											Show willingness to learn new skills and adapt to the
											family&apos;s routines.
										</li>
										<li>
											Ask about the job scope, rest days, and living
											arrangements during the interview.
										</li>
									</ul>
								</div>
								<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
									<h3 className="text-lg font-semibold text-gray-900">
										During the Interview
									</h3>
									<ul className="mt-3 list-disc space-y-2 pl-5">
										<li>
											Conduct the interview via video call if the helper is
											overseas — observe body language and communication.
										</li>
										<li>
											Discuss expectations openly to avoid misunderstandings
											later.
										</li>
										<li>
											Use scenario-based questions to assess
											problem-solving ability.
										</li>
										<li>
											Ensure the helper understands MOM regulations and her
											rights and responsibilities.
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* FAQ Section */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Frequently Asked Questions (FAQ)
							</h2>
							<div className="space-y-4">
								{faqItems.map((item, index) => (
									<div
										key={item.question}
										className={`rounded-2xl border border-gray-200 p-5 shadow-sm ${
											index % 2 === 0 ? "bg-white" : "bg-gray-50"
										}`}
									>
										<h3 className="text-lg font-semibold text-gray-900">
											{item.question}
										</h3>
										<p className="mt-2 text-gray-700">{item.answer}</p>
									</div>
								))}
							</div>
						</div>

						{/* CTA */}
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Upgrade Your Caregiving Skills with Edusphere
							</h2>
							<p>
								Whether you are a domestic helper looking to enhance your
								professional skills or an employer seeking trained caregivers,
								the right qualification makes all the difference. Edusphere
								College offers industry-recognised caregiving and healthcare
								programmes that equip you with practical knowledge and
								certification.
							</p>
							<p className="text-lg font-semibold text-gray-900">
								Recommended caregiving courses at Edusphere
							</p>
							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{courseData
									.flatMap((s) => s.courses)
									.filter((c) =>
										[
											"Diploma in Caregiving",
											"Advanced Diploma in Nursing Aide",
											"International Certificate in Nursing Aid",
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
