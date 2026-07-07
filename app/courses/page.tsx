import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courseData } from "../data/courses";
import { wsqCourses } from "../data/wsq-courses";
import ContactForm from "../components/contactform";

export const metadata: Metadata = {
  title: "Private Diploma Courses in Singapore | Edusphere College",
  description:
    "Enrol in private diploma courses in Singapore at Edusphere College. Part-time diplomas, advanced diplomas & WSQ programmes in Engineering, IT, Business & more. SkillsFuture eligible.",
  keywords:
    "private diploma courses in singapore, private diploma singapore, diploma courses singapore, advanced diploma singapore, part-time diploma singapore, WSQ courses, Edusphere College courses, SkillsFuture courses",
  openGraph: {
    title: "Private Diploma Courses in Singapore | Edusphere College",
    description:
      "Explore private diploma courses in Singapore — part-time diplomas, advanced diplomas, WSQ short courses & certificates at Edusphere College. SkillsFuture eligible.",
    url: "https://edusphere.edu.sg/courses",
    siteName: "Edusphere College of Management and Technology",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Diploma Courses in Singapore | Edusphere College",
    description:
      "Part-time private diploma courses in Singapore — Engineering, IT, Business, Hospitality & more. SkillsFuture eligible.",
  },
  alternates: {
    canonical: "https://edusphere.edu.sg/courses",
  },
};

/* ── helpers to categorise courseData ── */

const diplomaCourses = courseData
  .filter(
    (category) =>
      !category.title.includes("E-Learning") && !category.title.includes("SRFAC")
  )
  .flatMap((category) =>
    category.courses
      .filter((c) => c.title.startsWith("Diploma"))
      .map((c) => ({ ...c, category: category.title, color: category.color }))
  );

const advancedDiplomaCourses = courseData
  .filter(
    (category) =>
      !category.title.includes("E-Learning") && !category.title.includes("SRFAC")
  )
  .flatMap((category) =>
    category.courses
      .filter((c) => c.title.startsWith("Advanced Diploma"))
      .map((c) => ({ ...c, category: category.title, color: category.color }))
  );

const eLearningCourses = courseData
  .filter((category) => category.title.includes("E-Learning"))
  .flatMap((category) =>
    category.courses.map((c) => ({ ...c, category: category.title, color: category.color }))
  );

const certificateCourses = courseData
  .flatMap((category) =>
    category.courses
      .filter(
        (c) =>
          c.title.includes("Certificate") ||
          c.title.includes("CPR")
      )
      .map((c) => ({ ...c, category: category.title, color: category.color }))
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
  const totalCourses =
    diplomaCourses.length +
    advancedDiplomaCourses.length +
    eLearningCourses.length +
    wsqCourses.length +
    certificateCourses.length;

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Private Diploma Courses in Singapore at Edusphere College",
    "description": "Complete list of private diploma, advanced diploma, WSQ, certificate, and e-learning courses offered by Edusphere College Singapore.",
    "numberOfItems": totalCourses,
    "itemListElement": [
      ...diplomaCourses,
      ...advancedDiplomaCourses,
      ...eLearningCourses,
      ...certificateCourses,
    ].map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "url": c.url ? `https://edusphere.edu.sg${c.url}` : "https://edusphere.edu.sg/courses",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Edusphere College of Management and Technology",
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://edusphere.edu.sg",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Private Diploma Courses in Singapore",
        "item": "https://edusphere.edu.sg/courses",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a private diploma in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A private diploma in Singapore is a post-secondary qualification awarded by a private education institution such as Edusphere College. These diplomas are often offered on a part-time or e-learning basis, making them ideal for working adults who want to upskill or change careers while continuing to work.",
        },
      },
      {
        "@type": "Question",
        "name": "Are private diploma courses at Edusphere College recognised?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Edusphere College of Management and Technology is a registered private education institution in Singapore, and many of our courses are SkillsFuture eligible. Our diploma programmes are designed to be industry-aligned and career-focused.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I study a private diploma in Singapore part-time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most of our private diploma courses are available part-time, with evening classes and flexible e-learning options so you can balance your studies with work and family commitments.",
        },
      },
      {
        "@type": "Question",
        "name": "How much do private diploma courses in Singapore cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Course fees vary by programme. Many WSQ short courses are SkillsFuture-funded with up to 70% subsidy for eligible Singaporeans. Contact our admissions team for the latest fees and funding options for your chosen diploma.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1AB69D]/8 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1AB69D] animate-pulse" />
              {totalCourses}+ Programmes Available
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Private Diploma Courses in{" "}
              <span className="text-[#1AB69D]">Singapore</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Explore industry-aligned private diploma courses in Singapore at
              Edusphere College. From part-time diplomas and advanced diplomas to
              SkillsFuture-funded WSQ short courses and e-learning — find a
              career-ready qualification built around your schedule.
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl">
              As a registered private education institution, our diplomas are
              designed for working adults who want recognised, practical
              qualifications without pausing their careers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1AB69D] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#149985] transition"
              >
                Enquire Now
              </a>
              <a
                href="#diploma"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:border-[#1AB69D] hover:text-[#1AB69D] transition"
              >
                Browse Diplomas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quick Nav */}
      <nav className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-1 py-2 text-sm font-medium whitespace-nowrap">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: s.accent }}
                  />
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
        subtitle="Industry-aligned private diploma courses in Singapore — part-time programmes designed for working professionals."
        accent="#1AB69D"
        courses={diplomaCourses}
      />

      {/* Advanced Diploma Courses */}
      <CourseSection
        id="advanced-diploma"
        title="Advanced Diploma Courses"
        subtitle="Deepen your expertise and accelerate your career with advanced qualifications."
        accent="#2563EB"
        courses={advancedDiplomaCourses}
      />

      {/* E-Learning Courses */}
      <CourseSection
        id="e-learning"
        title="E-Learning Courses"
        subtitle="Study from anywhere, at your own pace — flexible online programmes for busy professionals."
        accent="#EE4A62"
        courses={eLearningCourses}
      />

      {/* WSQ Courses */}
      <section id="wsq" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeader
            title="WSQ Courses"
            subtitle="SkillsFuture-funded short courses — up to 70% subsidy for eligible Singaporeans."
            accent="#F59E0B"
            count={wsqCourses.length}
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
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold rounded-full bg-white/90 text-[#F59E0B] ring-1 ring-black/5 backdrop-blur">
                    WSQ
                  </span>
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
        subtitle="Quick, practical programmes to develop specialised skills for immediate career impact."
        accent="#8B5CF6"
        courses={certificateCourses}
        bg="bg-gray-50"
      />

      {/* Enquiry Form */}
      <div id="enquire" className="scroll-mt-[120px]">
        <ContactForm />
      </div>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1AB69D] to-[#169d88]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Our admissions team can help you choose the best programme based on
            your career goals and qualifications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#1AB69D] shadow-lg hover:shadow-xl transition"
            >
              Talk to Admissions
            </Link>
            <Link
              href="/wsq-courses"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/60 px-7 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              Explore WSQ Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Reusable section header ─── */

function SectionHeader({
  title,
  subtitle,
  accent,
  count,
}: {
  title: string;
  subtitle: string;
  accent: string;
  count?: number;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        {count != null && (
          <span
            className="inline-flex items-center justify-center rounded-full px-3 py-0.5 text-xs font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            {count}
          </span>
        )}
      </div>
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
  courses: { title: string; mode?: string; duration: string; image?: string; url?: string; elearning?: boolean; isNew?: boolean }[];
  bg?: string;
}) {
  return (
    <section id={id} className={`py-12 md:py-16 ${bg}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader title={title} subtitle={subtitle} accent={accent} count={courses.length} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Link
              key={course.url || `${course.title}-${index}`}
              href={course.url || "/contact-us"}
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
