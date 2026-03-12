import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/contactform";

type InterviewSection = {
	title: string;
	questions: {
		question: string;
		answer: string;
	}[];
};

const interviewSections: InterviewSection[] = [
	{
		title: "Basic Civil Engineering Questions (1–20)",
		questions: [
			{
				question: "1. What is civil engineering?",
				answer:
					"Civil engineering is the branch of engineering that deals with the design, construction, and maintenance of infrastructure such as buildings, bridges, roads, dams, and water supply systems.",
			},
			{
				question: "2. What is concrete?",
				answer:
					"Concrete is a composite material made from cement, sand, aggregates, and water that hardens through hydration.",
			},
			{
				question: "3. What is the standard size of a brick?",
				answer: "Standard brick size as per IS code is 190 mm × 90 mm × 90 mm.",
			},
			{
				question: "4. What is curing in concrete?",
				answer:
					"Curing is the process of maintaining moisture and temperature in concrete to allow proper hydration and strength development.",
			},
			{
				question: "5. What is the minimum curing period for concrete?",
				answer: "Minimum 7 days for OPC concrete and 10–14 days for blended cement.",
			},
			{
				question: "6. What is the water-cement ratio?",
				answer:
					"Water-cement ratio is the ratio of the weight of water to the weight of cement in a concrete mix.",
			},
			{
				question: "7. What is the slump test?",
				answer: "A test used to measure the workability of fresh concrete.",
			},
			{
				question: "8. What is the density of steel?",
				answer: "The density of steel is approximately 7850 kg/m³.",
			},
			{
				question: "9. What is the difference between PCC and RCC?",
				answer:
					"PCC is plain cement concrete without reinforcement, while RCC contains steel reinforcement.",
			},
			{
				question: "10. What is the unit weight of concrete?",
				answer: "Approximately 24 kN/m³.",
			},
			{
				question: "11. What are aggregates?",
				answer: "Aggregates are inert materials like sand, gravel, or crushed stone used in concrete.",
			},
			{
				question: "12. What is M20 concrete?",
				answer: "Concrete with characteristic compressive strength of 20 MPa at 28 days.",
			},
			{
				question: "13. What is honeycombing?",
				answer: "Honeycombing is the presence of voids in concrete due to improper compaction.",
			},
			{
				question: "14. What is bleeding in concrete?",
				answer: "Bleeding is the upward movement of water in fresh concrete.",
			},
			{
				question: "15. What is a beam?",
				answer:
					"A horizontal structural element that carries loads and transfers them to columns.",
			},
			{
				question: "16. What is a column?",
				answer: "A vertical structural element that carries compressive loads.",
			},
			{
				question: "17. What is a footing?",
				answer: "A structural element that transfers load from the structure to the soil.",
			},
			{
				question: "18. What are dead loads?",
				answer: "Permanent loads from structural components.",
			},
			{
				question: "19. What are live loads?",
				answer: "Temporary loads such as people, furniture, and equipment.",
			},
			{
				question: "20. What is a plinth beam?",
				answer:
					"A beam constructed at plinth level to distribute loads and prevent differential settlement.",
			},
		],
	},
	{
		title: "Structural Engineering Questions (21–40)",
		questions: [
			{
				question: "21. What is stress?",
				answer: "Stress is the internal resistance offered by a material against external load.",
			},
			{
				question: "22. What is strain?",
				answer: "Strain is the deformation per unit length caused by stress.",
			},
			{
				question: "23. What is modulus of elasticity?",
				answer: "It is the ratio of stress to strain in the elastic range.",
			},
			{
				question: "24. What is bending moment?",
				answer: "The moment causing bending in a structural element.",
			},
			{
				question: "25. What is shear force?",
				answer: "A force that causes sliding between two parts of a structure.",
			},
			{
				question: "26. What is torsion?",
				answer: "Twisting force applied to a structural member.",
			},
			{
				question: "27. What is a cantilever beam?",
				answer: "A beam fixed at one end and free at the other.",
			},
			{
				question: "28. What is a simply supported beam?",
				answer: "A beam supported at both ends without restraint to rotation.",
			},
			{
				question: "29. What is moment of inertia?",
				answer: "A property of a section that indicates resistance to bending.",
			},
			{
				question: "30. What is buckling?",
				answer: "Sudden lateral failure of a column due to compressive loads.",
			},
			{
				question: "31. What is ductility?",
				answer: "Ability of a material to undergo deformation before failure.",
			},
			{
				question: "32. What is yield strength?",
				answer: "Stress at which material begins to deform plastically.",
			},
			{
				question: "33. What is ultimate strength?",
				answer: "Maximum stress material can withstand before failure.",
			},
			{
				question: "34. What is prestressed concrete?",
				answer: "Concrete where internal stresses are introduced before loading.",
			},
			{
				question: "35. What is creep in concrete?",
				answer: "Time-dependent deformation under constant load.",
			},
			{
				question: "36. What is shrinkage in concrete?",
				answer: "Reduction in volume due to moisture loss.",
			},
			{
				question: "37. What is reinforcement?",
				answer: "Steel bars embedded in concrete to resist tensile forces.",
			},
			{
				question: "38. What is a slab?",
				answer: "A flat horizontal structural element.",
			},
			{
				question: "39. What is a retaining wall?",
				answer: "A structure used to retain soil at different levels.",
			},
			{
				question: "40. What is factor of safety?",
				answer: "Ratio of ultimate strength to working stress.",
			},
		],
	},
	{
		title: "Geotechnical Engineering Questions (41–55)",
		questions: [
			{
				question: "41. What is soil?",
				answer:
					"Naturally occurring material composed of minerals, organic matter, water, and air.",
			},
			{
				question: "42. What is bearing capacity of soil?",
				answer: "Maximum load soil can support without failure.",
			},
			{
				question: "43. What is consolidation?",
				answer: "Compression of soil due to expulsion of water.",
			},
			{
				question: "44. What is permeability?",
				answer: "Ability of soil to allow water to pass through.",
			},
			{
				question: "45. What is soil compaction?",
				answer: "Process of increasing soil density by mechanical means.",
			},
			{
				question: "46. What is liquefaction?",
				answer: "Loss of soil strength due to earthquake vibrations.",
			},
			{
				question: "47. What are shallow foundations?",
				answer: "Foundations placed near ground surface.",
			},
			{
				question: "48. What are deep foundations?",
				answer: "Foundations transferring load to deeper layers.",
			},
			{
				question: "49. What is pile foundation?",
				answer: "Long slender column transferring loads deep into soil.",
			},
			{
				question: "50. What is raft foundation?",
				answer: "A large slab supporting multiple columns.",
			},
			{
				question: "51. What is differential settlement?",
				answer: "Uneven settlement of structure.",
			},
			{
				question: "52. What is soil classification?",
				answer: "Grouping soils based on particle size and properties.",
			},
			{
				question: "53. What is shear strength of soil?",
				answer: "Resistance to shear stress.",
			},
			{
				question: "54. What is angle of internal friction?",
				answer: "Resistance of soil particles to sliding.",
			},
			{
				question: "55. What is cohesion in soil?",
				answer: "Attraction between soil particles.",
			},
		],
	},
	{
		title: "Construction Management Questions (56–75)",
		questions: [
			{
				question: "56. What is project management?",
				answer: "Planning, organizing, and controlling project resources.",
			},
			{
				question: "57. What is CPM?",
				answer: "Critical Path Method used for project scheduling.",
			},
			{
				question: "58. What is PERT?",
				answer: "Program Evaluation and Review Technique for project planning.",
			},
			{
				question: "59. What is a Gantt chart?",
				answer: "A bar chart showing project schedule.",
			},
			{
				question: "60. What is quality control?",
				answer: "Process of ensuring construction quality standards.",
			},
			{
				question: "61. What is quality assurance?",
				answer: "Process to prevent defects.",
			},
			{
				question: "62. What is a BOQ?",
				answer: "Bill of Quantities listing materials and work.",
			},
			{
				question: "63. What is BBS?",
				answer: "Bar Bending Schedule listing reinforcement details.",
			},
			{
				question: "64. What is formwork?",
				answer: "Temporary mould used to shape concrete.",
			},
			{
				question: "65. What is scaffolding?",
				answer: "Temporary structure used by workers during construction.",
			},
			{
				question: "66. What is site layout?",
				answer: "Arrangement of facilities on construction site.",
			},
			{
				question: "67. What is lean construction?",
				answer: "Reducing waste and improving efficiency.",
			},
			{
				question: "68. What is safety management?",
				answer: "Ensuring safe working conditions on site.",
			},
			{
				question: "69. What is a punch list?",
				answer: "List of incomplete or defective work.",
			},
			{
				question: "70. What is procurement?",
				answer: "Purchasing materials and services.",
			},
			{
				question: "71. What is resource planning?",
				answer: "Allocation of labor, materials, and equipment.",
			},
			{
				question: "72. What is cost estimation?",
				answer: "Calculating expected project cost.",
			},
			{
				question: "73. What is tendering?",
				answer: "Process of inviting bids for construction work.",
			},
			{
				question: "74. What is contract management?",
				answer: "Managing agreements between client and contractor.",
			},
			{
				question: "75. What is value engineering?",
				answer: "Improving function while reducing cost.",
			},
		],
	},
	{
		title: "Advanced Civil Engineering Questions (76–100)",
		questions: [
			{
				question: "76. What is BIM?",
				answer: "Building Information Modeling used for digital construction planning.",
			},
			{
				question: "77. What is sustainable construction?",
				answer: "Building practices minimizing environmental impact.",
			},
			{
				question: "78. What is green building?",
				answer: "Energy-efficient and environmentally friendly construction.",
			},
			{
				question: "79. What is smart city concept?",
				answer: "Use of technology to improve urban infrastructure.",
			},
			{
				question: "80. What is structural health monitoring?",
				answer: "Monitoring structural performance using sensors.",
			},
			{
				question: "81. What is earthquake-resistant design?",
				answer: "Designing structures to withstand seismic forces.",
			},
			{
				question: "82. What is wind load?",
				answer: "Force exerted by wind on structures.",
			},
			{
				question: "83. What is thermal stress?",
				answer: "Stress caused by temperature changes.",
			},
			{
				question: "84. What are expansion joints?",
				answer: "Joints allowing thermal expansion.",
			},
			{
				question: "85. What is drainage system?",
				answer: "System for removing excess water.",
			},
			{
				question: "86. What is water supply system?",
				answer: "Infrastructure delivering clean water.",
			},
			{
				question: "87. What is sewage treatment?",
				answer: "Process of treating wastewater.",
			},
			{
				question: "88. What is pavement?",
				answer: "Road surface supporting vehicles.",
			},
			{
				question: "89. What is flexible pavement?",
				answer: "Bituminous road surface.",
			},
			{
				question: "90. What is rigid pavement?",
				answer: "Concrete road surface.",
			},
			{
				question: "91. What is traffic engineering?",
				answer: "Planning and managing traffic flow.",
			},
			{
				question: "92. What is surveying?",
				answer: "Measuring and mapping land.",
			},
			{
				question: "93. What is leveling?",
				answer: "Determining elevation differences.",
			},
			{
				question: "94. What is total station?",
				answer: "Electronic surveying instrument.",
			},
			{
				question: "95. What is GPS surveying?",
				answer: "Using satellites to measure location.",
			},
			{
				question: "96. What is drone surveying?",
				answer: "Using UAVs for site mapping.",
			},
			{
				question: "97. What is 3D printing in construction?",
				answer: "Automated layer-by-layer construction.",
			},
			{
				question: "98. What is modular construction?",
				answer: "Building components manufactured off-site.",
			},
			{
				question: "99. What are smart materials?",
				answer: "Materials that adapt to environmental changes.",
			},
			{
				question: "100. What is future of civil engineering?",
				answer:
					"Integration of AI, automation, sustainability, and digital construction technologies.",
			},
		],
	},
];

export const metadata: Metadata = {
	title: "Civil Engineering Interview Questions and Answers | Edusphere",
	description:
		"Prepare for civil engineering interviews with 100 complete questions and answers across fundamentals, structural concepts, geotechnical engineering, construction management, and advanced topics.",
};

export default function CivilEngineeringInterviewGuide() {
	return (
		<main className="min-h-screen bg-white">
			<section className="bg-white">
				<div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
					<div className="flex flex-col items-start gap-4">
						<span className="text-sm font-semibold text-gray-500">Blog</span>
						<h1 className="max-w-5xl text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
							100 Civil Engineering Interview Questions and Answers
						</h1>
						<div className="relative h-[260px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[360px] md:h-[440px]">
							<Image
								src="/homepage/ADcivil.webp"
								alt="Civil engineering interview questions and answers"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white py-12 md:py-16">
				<div className="container mx-auto max-w-5xl px-4 md:px-8">
					<article className="space-y-10 text-gray-800">
						{interviewSections.map((section) => (
							<section key={section.title} className="space-y-4">
								<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{section.title}</h2>
								<div className="grid gap-4">
									{section.questions.map((item) => (
										<div
											key={item.question}
											className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
										>
											<h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
											<p className="mt-2 leading-relaxed text-gray-700">{item.answer}</p>
										</div>
									))}
								</div>
							</section>
						))}
					</article>
				</div>
			</section>

			<ContactForm />
		</main>
	);
}
