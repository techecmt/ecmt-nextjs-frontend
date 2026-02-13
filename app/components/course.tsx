"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { courseData, School, Course } from "../data/courses";

type SortOrder = "asc" | "desc";

export default function CourseList() {
	const [activeSchool, setActiveSchool] = useState<string>("All Schools");
	const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

	const sortedSchools = useMemo(() => {
		const schoolsCopy = [...courseData];
		schoolsCopy.sort((a, b) =>
			sortOrder === "asc"
				? a.title.localeCompare(b.title)
				: b.title.localeCompare(a.title)
		);
		return schoolsCopy;
	}, [sortOrder]);

	const visibleSchools: School[] = useMemo(() => {
		if (activeSchool === "All Schools") {
			return sortedSchools;
		}
		return sortedSchools.filter((s) => s.title === activeSchool);
	}, [activeSchool, sortedSchools]);

	return (
		<section className="py-12 md:py-16 bg-white">
			<div className="container mx-auto px-4 md:px-8">
				<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10">
					<div>
						<p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#1AB69D] font-semibold mb-2">
							Our Courses
						</p>
						<h2 className="text-2xl md:text-3xl font-semibold uppercase text-[#202020] font-spartan">
							Browse Courses by School
						</h2>
						<p className="text-sm md:text-base text-gray-600 mt-2 max-w-xl">
							Select a school to view its programmes, or browse all courses in
							alphabetical order.
						</p>
					</div>

					<div className="flex items-center gap-3 self-start md:self-auto">
						<label className="text-xs md:text-sm text-gray-600">Sort by school</label>
						<button
							type="button"
							onClick={() =>
								setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
							}
							className="px-3 py-1.5 rounded-full border border-gray-200 text-xs md:text-sm text-gray-700 bg-white hover:border-[#1AB69D] hover:text-[#1AB69D] transition-colors"
						>
							{sortOrder === "asc" ? "A → Z" : "Z → A"}
						</button>
					</div>
				</header>

				{/* School filter pills */}
				<div className="flex flex-wrap gap-2 md:gap-3 mb-8">
					<FilterPill
						label="All Schools"
						active={activeSchool === "All Schools"}
						onClick={() => setActiveSchool("All Schools")}
					/>
					{sortedSchools.map((school) => (
						<FilterPill
							key={school.title}
							label={school.title}
							active={activeSchool === school.title}
							onClick={() => setActiveSchool(school.title)}
						/>
					))}
				</div>

				{/* Courses grouped by school */}
				<div className="space-y-10 md:space-y-12">
					{visibleSchools.map((school) => (
						<SchoolSection key={school.title} school={school} />
					))}
				</div>
			</div>
		</section>
	);
}

function FilterPill({
	label,
	active,
	onClick,
}: {
	label: string;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-4 py-1.5 rounded-full text-xs md:text-sm border transition-colors ${
				active
					? "bg-[#1AB69D] text-white border-[#1AB69D]"
					: "bg-white text-gray-700 border-gray-200 hover:border-[#1AB69D] hover:text-[#1AB69D]"
			}`}
		>
			{label}
		</button>
	);
}

function SchoolSection({ school }: { school: School }) {
	return (
		<section>
			<div className="flex items-center gap-3 mb-4 md:mb-6">
				<div
					className="w-1 h-8 rounded-full"
					style={{ backgroundColor: school.color }}
				/>
				<div>
					<h2 className="text-lg md:text-xl font-semibold text-[#202020] font-poppins">
						{school.title}
					</h2>
					<p className="text-xs md:text-sm text-gray-600">
						{school.courses.length} programme
						{school.courses.length > 1 ? "s" : ""}
					</p>
				</div>
			</div>

			<div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
				{school.courses.map((course) => (
					<CourseCard key={course.title} course={course} />
				))}
			</div>
		</section>
	);
}


function CourseCard({ course }: { course: Course }) {
	const href = course.url ?? "/contact";
	return (
		<article className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col border border-transparent">
			{course.image ? (
				<div className="relative h-40 md:h-48 w-full overflow-hidden rounded-t-2xl bg-gray-100">
					<Image
						src={course.image}
						alt={course.title}
						fill
						sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
						className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
					/>
					{/* subtle gradient overlay to improve legibility when image colors are bright */}
					<div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/20 to-transparent" />
				</div>
			) : (
				<div className="relative h-40 md:h-48 w-full flex items-center justify-center bg-gray-100 rounded-t-2xl text-gray-400">
					<span className="text-sm">No image</span>
				</div>
			)}

			<div className="p-4 md:p-5 flex flex-col flex-1">
				<h3 className="text-base md:text-lg font-semibold text-[#202020] mb-2 group-hover:text-[#1AB69D] transition-colors leading-snug">
					{course.title}
				</h3>

				<div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
					{course.mode && (
						<span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-700">
							<span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
							{course.mode}
						</span>
					)}
					{course.duration && (
						<span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-700">
							<span className="w-2 h-2 rounded-full bg-[#EE4A62]" />
							{course.duration}
						</span>
					)}
					{course.elearning && (
						<span className="ml-1 inline-flex items-center px-2 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide text-[#EE4A62] bg-[#FFEEF0] border border-[#F7D6DA]">
							E-Learning
						</span>
					)}
				</div>

				<div className="mt-auto">
					<Link
						href={href}
						className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#1AB69D] text-white text-sm font-medium hover:bg-[#16917f] focus:outline-none focus:ring-4 focus:ring-[#1AB69D]/20"
						aria-label={`Learn more about ${course.title}`}>
						Learn More
						<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</div>
		</article>
	);
}

