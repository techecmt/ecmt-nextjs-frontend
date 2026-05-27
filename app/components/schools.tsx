"use client";

import Image from "next/image";

type StudyArea = {
	name: string;
	image: string;
	description: string;
};

const studyAreas: StudyArea[] = [
	{
		name: "Caregiving Courses",
		image: "/homepage/dipcaregiving.webp",
		description: "Diplomas focused on professional caregiving and nursing support.",
	},
	{
		name: "Hospitality Courses",
		image: "/homepage/diphospital.webp",
		description: "Hotel, tourism and service excellence programmes.",
	},
	{
		name: "IT Courses",
		image: "/homepage/computerapptransport.webp",
		description: "Technology programmes built for modern, digital careers.",
	},
	{
		name: "Engineering Courses",
		image: "/homepage/dipcivil.webp",
		description: "Civil, M&E and facilities engineering specialisations.",
	},
	{
		name: "Business Courses",
		image: "/homepage/dipbusiness_adminstartion.webp",
		description: "Business, HR, logistics and retail management pathways.",
	},
	{
		name: "E-Learning Courses",
		image: "/homepage/logisticsElearnhomePage_nav.webp",
		description: "Flexible online programmes designed for working adults.",
	},
];

export default function StudyAreas() {
	return (
		<section className="py-12 md:py-16 bg-gray-50">
			<div className="container mx-auto px-4 md:px-8">
				<div className="text-center mb-10 md:mb-12">
					<p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#1AB69D] font-semibold mb-2">
						Our Courses
					</p>
					<h2 className="text-2xl md:text-3xl font-semibold text-[#202020] mb-3 font-poppins">
						Explore Areas of Study
					</h2>
					<p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
						Discover specialised courses designed to equip you with practical
						skills, industry-relevant knowledge and a strong professional edge.
					</p>
				</div>

				<div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
					{studyAreas.map((area) => (
						<article
							key={area.name}
							className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
						>
							<div className="relative h-44 md:h-48 overflow-hidden">
								<Image
									src={area.image}
									alt={area.name}
									fill
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									className="object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>

							<div className="flex-1 flex flex-col p-5 md:p-6">
								<h3 className="text-base md:text-lg font-semibold text-[#202020] mb-2 font-poppins">
									{area.name}
								</h3>
								<p className="text-sm text-gray-600 mb-4 flex-1">
									{area.description}
								</p>

								<button
									className="inline-flex items-center justify-center self-start rounded-full bg-[#1AB69D] text-white text-xs md:text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 hover:bg-[#16917f] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1AB69D] transition-colors"
									type="button"
								>
									View Courses
									<span className="ml-2 text-[10px]">→</span>
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

