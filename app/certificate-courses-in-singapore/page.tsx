import Image from "next/image";

type CertificateCourse = {
	title: string;
	subtitle?: string;
	cta: string;
	ctaurl: string;
	image: string;
};

const CERTIFICATE_COURSES: CertificateCourse[] = [
    {
        title: "Certificate in NG (Nasogastric) Tube Feeding",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in NG (NASOGASTRIC) tube feeding.png",
    },
    {
        title: "Certificate in Physical and Massage Therapy",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in Physical and Massage Therapy.png",
    },
     {
        title: "Certificate in Autocad",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",	
        image: "/certificate_courses/Certificate in Autocad.png",
    },
    {
        title: "Certificate in Air Conditioning",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in Air Conditioning.png",
    },
    {
        title: "Certificate in Cafe & Restaurant Management",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate in Cafe _Restaurant Management.png",
    },
    {
        title: "Certificate in Foundation Skills",
        cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate-in-Foundation-Skills.png",
    },
    {
        title: "Professional Certificate in Mechanical and Electrical Engg",
        cta: "Register Now",	
		ctaurl: "https://form.jotform.com/253087866785072",
        image: "/certificate_courses/Certificate-in-Foundation-Skills.png",
    },
];

export default function CertificateCoursesInSingapore() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
				<div className="absolute inset-0 bg-grid-pattern opacity-5" />

				<div className="container mx-auto px-4 md:px-8 relative z-10">
					<div className="max-w-3xl space-y-4">
						<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
							<span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
							Our Certificate Courses
						</span>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
							Popular Certificate Courses in Singapore
						</h1>
						<p className="text-base md:text-lg text-gray-600 leading-relaxed">
							Short, industry-focused programmes designed to build practical skills
							and open new career pathways for learners in Singapore and beyond.
						</p>
					</div>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="py-12 md:py-16 bg-white">
				<div className="container mx-auto px-4 md:px-8 max-w-6xl">
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
								Our Precious Certificate Courses
							</h2>
							<div className="w-16 h-1 bg-[#1AB69D] rounded-full mt-2" />
						</div>
						<p className="text-sm text-gray-500 max-w-md">
							Explore flexible certificate courses in healthcare, engineering, F&B,
							logistics and foundation skills, curated to meet real industry needs.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{CERTIFICATE_COURSES.map((course) => (
							<article
								key={course.title}
								className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#1AB69D]/60 transition-all duration-200"
							>
								<div className="relative h-44 md:h-48 overflow-hidden">
									<Image
										src={course.image}
										alt={course.title}
										fill
										className="object-cover transform group-hover:scale-105 transition-transform duration-300"
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
								</div>

								<div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
									<h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
										{course.title}
									</h3>
									{course.subtitle && (
										<p className="text-xs md:text-sm text-gray-600 flex-1">
											{course.subtitle}
										</p>
									)}

									<div className="pt-1">
										<a
											href={course.ctaurl}
											className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all"
										>
											{course.cta}
											<svg
												className="h-4 w-4"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M13 7L18 12L13 17"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M6 12H18"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

