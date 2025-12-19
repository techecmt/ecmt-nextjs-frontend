import Image from 'next/image';
import { getWsqCourses } from '../data/wsq-courses';

export default function WSQCoursesPage() {
  const courses = getWsqCourses();
  const featured = courses.filter((c) => c.featured);
  const others = courses.filter((c) => !c.featured);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wsq-images/WsqCoursePageHero.png"
            alt="WSQ Courses Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 via-blue-400/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="z-10">
              {/* Decorative dots pattern */}
              <div className="absolute top-8 left-4 w-20 h-20 opacity-30">
                <div className="grid grid-cols-5 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                Popular WSQ<br />
                Courses in Singapore
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
                Future-proof your career with AI, Workplace<br />
                optimization and Caregiving industries.
              </p>
            </div>

            {/* Right Content - Feature Image */}
            <div className="relative z-10">
              <div className="relative">
                <Image
                  src="/wsq-images/WsqHeroImageCreativev5.png"
                  alt="WSQ Course Features - AI-Powered Learning with SkillsFuture funding"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Singapore Workforce Skills Qualifications (WSQ) framework provides a nationally recognised
              pathway to develop job-ready skills and foster lifelong learning across a wide range of industries.
              At Edusphere College, our WSQ training courses are carefully designed to equip learners with both
              practical competencies and theoretical knowledge that meet current industry standards.
            </p>
            <p>
              Whether you aim to start a new career, enhance your professional skills, or meet mandatory compliance
              requirements, a WSQ course at Edusphere College offers a structured and recognised route for career
              growth. All our WSQ programs are delivered by experienced trainers and adhere strictly to SkillsFuture
              Singapore (SSG) competency standards, ensuring flexible, modular learning options for both individuals
              and corporate teams.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto mb-8 md:mb-12 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Featured WSQ Programmes
              </span>
            </h2>
            <p className="mt-3 text-gray-600">
              Curated courses with the biggest industry impact and demand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((course) => (
              <div key={course.id} className="group relative">
                {/* Gradient border + glass card */}
                <div className="rounded-3xl p-[1px] bg-gradient-to-br from-emerald-400/60 via-blue-400/40 to-transparent transition-all duration-300 group-hover:from-emerald-500 group-hover:via-blue-500 group-hover:to-emerald-200/20">
                  <div className="rounded-[calc(1.5rem-1px)] bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden">
                    {/* Media */}
                    <div className="relative w-full h-60 md:h-72">
                      <Image
                        src={course.imageSrc}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute inset-0 ring-1 ring-black/5"></div>
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
                          Featured
                        </span>
                        {course.tag && (
                          <span className="rounded-full bg-amber-100/90 px-3 py-1 text-[11px] font-medium text-amber-700 shadow-sm">
                            {course.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                        {course.title}
                      </h3>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <a
                          href={course.href}
                          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/40"
                        >
                          {course.ctaLabel ?? 'View Course Details'}
                          <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <div className="hidden sm:block text-xs text-gray-500">
                          SkillsFuture eligible
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="relative w-full h-44 md:h-48">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <div className="mt-5">
                    <a
                      href={course.href}
                      className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700"
                    >
                      {course.ctaLabel ?? 'Learn More'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}