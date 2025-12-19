"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
						<h1 className="text-2xl md:text-3xl font-semibold uppercase text-[#202020] font-spartan">
							Browse Courses by School
						</h1>
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
	return (
		<article className="group rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col">
			{course.image && (
				<div className="relative h-32 md:h-36 w-full overflow-hidden">
					<Image
						src={course.image}
						alt={course.title}
						fill
						sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
			)}
			<div className="p-4 md:p-5 flex flex-col flex-1">
				<h3 className="text-sm md:text-base font-semibold text-[#202020] mb-2 group-hover:text-[#1AB69D] transition-colors leading-snug">
					{course.title}
				</h3>

				{(course.mode || course.duration) && (
					<div className="flex flex-wrap items-center gap-3 text-[11px] md:text-xs text-gray-600 mb-3">
						{course.mode && (
							<span className="inline-flex items-center gap-1">
								<span className="w-1.5 h-1.5 rounded-full bg-[#1AB69D]" />
								{course.mode}
							</span>
						)}
						{course.duration && (
							<span className="inline-flex items-center gap-1">
								<span className="w-1.5 h-1.5 rounded-full bg-[#EE4A62]" />
								{course.duration}
							</span>
						)}
					</div>
				)}

				{course.elearning && (
					<span className="inline-flex items-center text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-[#EE4A62] bg-pink-50 px-2 py-0.5 rounded-full mb-3">
						E-Learning
					</span>
				)}

				<button
					type="button"
					className="mt-auto inline-flex items-center text-[11px] md:text-xs font-medium text-[#1AB69D] hover:text-[#16917f]"
				>
					Learn More
					<span className="ml-1 text-[10px]">→</span>
				</button>
			</div>
		</article>
	);
}

