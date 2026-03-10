import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courseData } from "../data/courses";
import { wsqCourses } from "../data/wsq-courses";

export const metadata: Metadata = {
  title: "All Courses | Edusphere College of Management and Technology",
  description:
    "Browse all diploma, advanced diploma, WSQ, certificate, and e-learning courses offered by Edusphere College Singapore. Find the right programme for your career.",
};

/* ── helpers to categorise courseData ── */

const diplomaCourses = courseData
  .filter(
    (s) =>
      !s.title.includes("E-Learning") && !s.title.includes("SFARC")
  )
  .flatMap((s) =>
    s.courses
      .filter((c) => c.title.startsWith("Diploma"))
      .map((c) => ({ ...c, school: s.title, color: s.color }))
  );

const advancedDiplomaCourses = courseData
  .filter(
    (s) =>
      !s.title.includes("E-Learning") && !s.title.includes("SFARC")
  )
  .flatMap((s) =>
    s.courses
      .filter((c) => c.title.startsWith("Advanced Diploma"))
      .map((c) => ({ ...c, school: s.title, color: s.color }))
  );

const eLearningCourses = courseData
  .filter((s) => s.title.includes("E-Learning"))
  .flatMap((s) =>
    s.courses.map((c) => ({ ...c, school: s.title, color: s.color }))
  );

const certificateCourses = courseData
  .flatMap((s) =>
    s.courses
      .filter(
        (c) =>
          c.title.includes("Certificate") ||
          c.title.includes("CPR")
      )
      .map((c) => ({ ...c, school: s.title, color: s.color }))
  );

type Section = {
  id: string;
  label: string;
  accent: string;
};

const sections: Section[] = [
  { id: "diploma", label: "Diploma Courses", accent: "#1AB69D" },
  { id: "advanced-diploma", label: "Advanced Diploma Courses", accent: "#2563EB" },
  { id: "e-learning", label: "E-Learning Courses", accent: "#EE4A62" },
  { id: "wsq", label: "WSQ Courses", accent: "#F59E0B" },
  { id: "certificate", label: "Certificate & Short Courses", accent: "#8B5CF6" },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
              All Programmes
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Explore Our Full Range of Courses
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              From diploma and advanced diploma programmes to WSQ-funded
              short courses and industry certificates — discover the right
              pathway for your career at Edusphere College.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="sticky top-[72px] z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-6 py-3 text-sm font-medium whitespace-nowrap">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-gray-600 hover:text-[#1AB69D] transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Diploma Courses */}
      <CourseSection
        id="diploma"
        title="Diploma Courses"
        subtitle="Industry-aligned part-time diploma programmes designed for working professionals."
        accent="#1AB69D"
        courses={diplomaCourses}
      />

      {/* Advanced Diploma Courses */}
      <CourseSection
        id="advanced-diploma"
        title="Advanced Diploma Courses"
        subtitle="Take the next step with our advanced diploma qualifications for career progression."
        accent="#2563EB"
        courses={advancedDiplomaCourses}
      />

      {/* E-Learning Courses */}
      <CourseSection
        id="e-learning"
        title="E-Learning Courses"
        subtitle="Flexible online programmes you can study from anywhere, at your own pace."
        accent="#EE4A62"
        courses={eLearningCourses}
      />

      {/* WSQ Courses */}
      <section id="wsq" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeader
            title="WSQ Courses"
            subtitle="SkillsFuture-funded short courses to upskill and stay competitive."
            accent="#F59E0B"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wsqCourses.map((course) => (
              <Link
                key={course.id}
                href={course.href}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:border-[#F59E0B]/60 transition-all duration-200"
              >
                <div className="relative h-44 md:h-48 overflow-hidden">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  {course.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#F59E0B] text-white">
                      {course.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                    {course.title}
                  </h3>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center text-sm font-semibold text-[#F59E0B] group-hover:gap-2 transition-all">
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
      </section>

      {/* Certificate & Short Courses */}
      <CourseSection
        id="certificate"
        title="Certificate & Short Courses"
        subtitle="Quick, practical programmes to develop specialised skills."
        accent="#8B5CF6"
        courses={certificateCourses}
        bg="bg-gray-50"
      />
    </main>
  );
}

/* ─── Reusable section header ─── */

function SectionHeader({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        {title}
      </h2>
      <div
        className="w-16 h-1 rounded-full mt-2"
        style={{ backgroundColor: accent }}
      />
      <p className="mt-3 text-sm md:text-base text-gray-500 max-w-xl">
        {subtitle}
      </p>
    </div>
  );
}

/* ─── Reusable course grid section ─── */

function CourseSection({
  id,
  title,
  subtitle,
  accent,
  courses,
  bg = "bg-white",
}: {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  courses: { title: string; mode?: string; duration: string; image?: string; url?: string }[];
  bg?: string;
}) {
  return (
    <section id={id} className={`py-12 md:py-16 ${bg}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader title={title} subtitle={subtitle} accent={accent} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.title}
              href={course.url || "/contact"}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-200"
              style={
                {
                  "--card-accent": accent,
                } as React.CSSProperties
              }
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
                </div>
              )}
              <div className="flex flex-col flex-1 p-5 md:p-6 gap-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  {course.mode && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full">
                      {course.mode}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <div className="mt-auto pt-3">
                  <span
                    className="inline-flex items-center text-sm font-semibold group-hover:gap-2 transition-all"
                    style={{ color: accent }}
                  >
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
    </section>
  );
}
