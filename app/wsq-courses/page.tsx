import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import WsqContactForm from '../components/wsq_contactform';
import {
  getWsqCourses,
  WSQ_COURSE_CATEGORIES,
  type WsqCourse,
} from '../data/wsq-courses';

const SITE_URL = 'https://edusphere.edu.sg';
const PAGE_URL = `${SITE_URL}/wsq-courses/`;

const FAQ_DATA = [
  {
    question: 'What are WSQ courses in Singapore?',
    answer:
      'WSQ (Workforce Skills Qualifications) courses are nationally recognised training programmes under SkillsFuture Singapore. They certify job-ready competencies across industries and award a Statement of Attainment (SOA) when learners are assessed competent.',
  },
  {
    question: 'Are Edusphere WSQ courses SkillsFuture eligible?',
    answer:
      'Yes. Our WSQ courses are delivered by a Registered Training Provider (RTP) accredited by SkillsFuture Singapore. Eligible Singapore Citizens and Permanent Residents may tap SkillsFuture Credit and course fee subsidies, subject to prevailing funding rules.',
  },
  {
    question: 'Who should enrol in WSQ courses at Edusphere College?',
    answer:
      'WSQ courses suit working professionals, career switchers, and corporate teams seeking short, modular upskilling in areas such as AI, service excellence, caregiving, and workplace leadership. Many modules have flexible entry requirements.',
  },
  {
    question: 'What certificate will I receive after completing a WSQ course?',
    answer:
      'Learners assessed as Competent receive a WSQ Statement of Attainment (SOA) issued through SkillsFuture Singapore. This credential is recognised by employers across Singapore.',
  },
  {
    question: 'How do I claim SkillsFuture Credit for a WSQ course?',
    answer:
      'Register for your chosen WSQ course with Edusphere, then submit your SkillsFuture Credit claim on MySkillsFuture using your Singpass before the course start date. Our team will guide you through registration and funding documentation.',
  },
  {
    question: 'How do I register for WSQ courses at Edusphere?',
    answer:
      'Browse our WSQ course listings, select your programme, and register online via the course page or contact our WSQ team at (+65) 8221 5143 or training@edusphere.edu.sg for enrolment and funding support.',
  },
  {
    question: 'What makes Edusphere a Registered Training Provider?',
    answer:
      'Edusphere is certified and approved by SkillsFuture Singapore as an RTP, meeting standards for curriculum quality, trainer qualifications, facilities, and financial probity. Learn more on our FAQ page.',
  },
  {
    question: 'Can employers send teams for WSQ training?',
    answer:
      'Yes. We offer corporate WSQ training for teams in AI, service excellence, caregiving, and workplace skills. Employers may also apply for Absentee Payroll funding where applicable. Contact us for group enrolment.',
  },
];

export const metadata: Metadata = {
  title: 'WSQ Courses in Singapore | SkillsFuture Eligible Training | Edusphere College',
  description:
    'Explore WSQ courses in Singapore at Edusphere College — a SkillsFuture Registered Training Provider. GenAI, caregiving, service excellence & workplace skills. SkillsFuture Credit eligible.',
  keywords: [
    'WSQ courses in Singapore',
    'WSQ courses Singapore',
    'WSQ training Singapore',
    'SkillsFuture WSQ courses',
    'WSQ short courses',
    'Registered Training Provider',
    'Edusphere WSQ',
    'Statement of Attainment',
  ],
  openGraph: {
    title: 'WSQ Courses in Singapore | Edusphere College',
    description:
      'SkillsFuture-eligible WSQ courses in AI, caregiving, service excellence, and workplace skills at Edusphere College Singapore.',
    url: PAGE_URL,
    siteName: 'Edusphere College of Management and Technology',
    locale: 'en_SG',
    type: 'website',
    images: ['/wsq-images/WsqCoursePageHero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WSQ Courses in Singapore | Edusphere College',
    description:
      'Explore SkillsFuture-eligible WSQ courses in Singapore — GenAI, caregiving, service excellence & more.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

function CourseMeta({ course }: { course: WsqCourse }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
      {course.duration && (
        <span className="rounded-full bg-gray-100 px-2.5 py-1">{course.duration}</span>
      )}
      {course.courseMode && (
        <span className="rounded-full bg-gray-100 px-2.5 py-1">{course.courseMode}</span>
      )}
      {course.tgsCode && (
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">
          {course.tgsCode}
        </span>
      )}
    </div>
  );
}

export default function WSQCoursesPage() {
  const courses = getWsqCourses();
  const featured = courses.filter((c) => c.featured);
  const others = courses.filter((c) => !c.featured);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Edusphere College of Management and Technology',
    alternateName: 'Edusphere College',
    url: SITE_URL,
    description:
      'Registered Training Provider offering WSQ courses in Singapore across AI, caregiving, service excellence, and workplace skills.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7500A Beach Road, #05-312 THE PLAZA',
      addressLocality: 'Singapore',
      postalCode: '199591',
      addressCountry: 'SG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+65-8221-5143',
      email: 'training@edusphere.edu.sg',
      contactType: 'customer service',
      areaServed: 'SG',
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'WSQ Courses in Singapore',
      itemListElement: courses.map((course) => ({
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Edusphere College',
        },
        courseMode: course.courseMode?.toLowerCase() ?? 'classroom',
        educationalCredentialAwarded: 'WSQ Statement of Attainment',
        url: `${SITE_URL}${course.href.replace(/\/+$/, '')}/`,
        identifier: course.tgsCode,
      })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'WSQ Courses in Singapore',
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'WSQ Courses in Singapore at Edusphere College',
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: course.title,
      url: `${SITE_URL}${course.href.replace(/\/+$/, '')}/`,
    })),
  };

  return (
    <>
      <Script
        id="wsq-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="wsq-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="wsq-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="wsq-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="container mx-auto px-4 pt-4 max-w-6xl"
        >
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-900" aria-current="page">
              WSQ Courses in Singapore
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/wsq-images/WsqCoursePageHero.png"
              alt="WSQ courses in Singapore at Edusphere College — SkillsFuture eligible training programmes"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 via-blue-400/50 to-transparent" />
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="z-10">
                <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur mb-4">
                  SkillsFuture Registered Training Provider
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  WSQ Courses in Singapore
                </h1>
                <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md max-w-xl">
                  Future-proof your career with nationally recognised WSQ training in AI,
                  workplace optimisation, caregiving, and service excellence — with SkillsFuture
                  funding support.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#wsq-courses-list"
                    className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    Browse WSQ Courses
                  </a>
                  <Link
                    href="/faq/"
                    className="inline-flex items-center rounded-lg bg-white/90 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white transition-colors"
                  >
                    WSQ Funding FAQ
                  </Link>
                </div>
              </div>

              <div className="relative z-10">
                <Image
                  src="/wsq-images/WsqHeroImageCreativev5.png"
                  alt="WSQ course features — AI-powered learning with SkillsFuture funding in Singapore"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What are WSQ courses */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Are WSQ Courses in Singapore?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Singapore Workforce Skills Qualifications (WSQ) framework is a national
                credential system administered by SkillsFuture Singapore (SSG). WSQ courses in
                Singapore help workers and employers build job-ready skills through modular,
                industry-relevant training that leads to a{' '}
                <strong>Statement of Attainment (SOA)</strong> when competency is demonstrated.
              </p>
              <p>
                At Edusphere College, our WSQ training courses are designed for individuals and
                corporate teams who want practical upskilling without long-term diploma
                commitments. Programmes cover high-demand areas including GenAI, executive
                communication, eldercare, disability support, service recovery, and flexible
                workplace practices — all aligned with SSG competency standards.
              </p>
              <p>
                Whether you are switching careers, meeting compliance requirements, or investing
                in team development, WSQ courses at Edusphere offer a structured, recognised
                pathway backed by experienced trainers and flexible learning formats.
              </p>
            </div>
          </div>
        </section>

        {/* Why Edusphere + Trust */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Edusphere for WSQ Training in Singapore?
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1 text-emerald-600 font-bold" aria-hidden="true">✓</span>
                    <span>
                      <strong>Registered Training Provider (RTP)</strong> — certified and approved
                      by SkillsFuture Singapore for WSQ delivery.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-emerald-600 font-bold" aria-hidden="true">✓</span>
                    <span>
                      <strong>SkillsFuture eligible programmes</strong> — tap course fee subsidies
                      and SkillsFuture Credit where applicable.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-emerald-600 font-bold" aria-hidden="true">✓</span>
                    <span>
                      <strong>Industry-focused curriculum</strong> — AI, caregiving, service
                      excellence, and workplace leadership modules.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-emerald-600 font-bold" aria-hidden="true">✓</span>
                    <span>
                      <strong>Experienced trainers</strong> — practical, competency-based
                      learning with real-world application.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-emerald-600 font-bold" aria-hidden="true">✓</span>
                    <span>
                      <strong>Corporate &amp; individual enrolment</strong> — flexible options for
                      working professionals and teams.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-gray-600">
                  PEI Registration No: 201940174R · Validity: 28 August 2026 to 27 August 2032.{' '}
                  <Link href="/about-us/" className="text-emerald-600 font-semibold hover:underline">
                    Learn about Edusphere College
                  </Link>
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  WSQ Enquiries &amp; Registration
                </h3>
                <dl className="space-y-3 text-gray-700">
                  <div>
                    <dt className="text-sm font-semibold text-gray-500">Phone</dt>
                    <dd>
                      <a href="tel:+6582215143" className="text-emerald-600 font-semibold hover:underline">
                        (+65) 8221 5143
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-500">Email</dt>
                    <dd>
                      <a
                        href="mailto:training@edusphere.edu.sg"
                        className="text-emerald-600 font-semibold hover:underline"
                      >
                        training@edusphere.edu.sg
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-gray-500">Address</dt>
                    <dd className="text-sm">
                      7500A Beach Rd, #05-312 THE PLAZA, Singapore 199591
                    </dd>
                  </div>
                </dl>
                <Link
                  href="/contact-us/"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-600 hover:underline"
                >
                  Contact admissions →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SkillsFuture Funding */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              SkillsFuture Funding for WSQ Courses
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl">
              <p>
                Eligible Singapore Citizens and Permanent Residents can offset WSQ course fees
                through <strong>SkillsFuture Credit</strong> and SSG course fee subsidies. Funding
                amounts vary by learner profile, course type, and prevailing SkillsFuture policies.
                Many learners pay a significantly reduced nett fee after subsidies are applied.
              </p>
              <p>
                To use SkillsFuture Credit, register with Edusphere for your chosen WSQ course,
                then submit your claim on{' '}
                <a
                  href="https://www.myskillsfuture.gov.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold hover:underline"
                >
                  MySkillsFuture
                </a>{' '}
                before the course start date. Our WSQ team will guide you through registration and
                documentation. Employers may also apply for Absentee Payroll funding for staff
                training where applicable.
              </p>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              WSQ Course Categories at Edusphere
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Our WSQ courses in Singapore span four in-demand sectors. Select a category to
              explore relevant programmes below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WSQ_COURSE_CATEGORIES.map((category) => {
                const count = courses.filter((c) => c.category === category).length;
                return (
                  <div
                    key={category}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-semibold text-gray-900">{category}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {count} WSQ {count === 1 ? 'programme' : 'programmes'}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section
          id="wsq-courses-list"
          className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50/60 scroll-mt-24"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mx-auto mb-8 md:mb-12 text-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Featured WSQ Programmes
                </span>
              </h2>
              <p className="mt-3 text-gray-600">
                Popular WSQ courses in Singapore with the strongest industry demand and SkillsFuture
                support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featured.map((course) => (
                <article key={course.id} className="group relative">
                  <div className="rounded-3xl p-[1px] bg-gradient-to-br from-emerald-400/60 via-blue-400/40 to-transparent transition-all duration-300 group-hover:from-emerald-500 group-hover:via-blue-500 group-hover:to-emerald-200/20">
                    <div className="rounded-[calc(1.5rem-1px)] bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden">
                      <div className="relative w-full h-60 md:h-72">
                        <Image
                          src={course.imageSrc}
                          alt={`${course.title} — WSQ course in Singapore`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 ring-1 ring-black/5" />
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

                      <div className="p-6 md:p-7">
                        {course.category && (
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">
                            {course.category}
                          </p>
                        )}
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                          {course.title}
                        </h3>
                        {course.description && (
                          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            {course.description}
                          </p>
                        )}
                        <CourseMeta course={course} />
                        <div className="mt-6 flex items-center justify-between gap-4">
                          <Link
                            href={course.href}
                            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/40"
                          >
                            {course.ctaLabel ?? 'View Course Details'}
                            <svg
                              className="ml-2 h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                          <div className="hidden sm:block text-xs text-gray-500">
                            SkillsFuture eligible
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="py-6 md:py-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              All WSQ Courses in Singapore
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((course) => (
                <article
                  key={course.id}
                  className="rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="relative w-full h-44 md:h-48">
                    <Image
                      src={course.imageSrc}
                      alt={`${course.title} — WSQ course in Singapore`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    {course.category && (
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-1">
                        {course.category}
                      </p>
                    )}
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {course.title}
                    </h3>
                    {course.description && (
                      <p className="mt-2 text-sm text-gray-600 flex-1">{course.description}</p>
                    )}
                    <CourseMeta course={course} />
                    <div className="mt-5">
                      <Link
                        href={course.href}
                        className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700"
                      >
                        {course.ctaLabel ?? 'Learn More'}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions About WSQ Courses
            </h2>
            <p className="text-gray-600 mb-8">
              Common questions about WSQ training, SkillsFuture funding, and enrolment at
              Edusphere College Singapore.
            </p>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-lg border border-gray-200 bg-white p-4 open:shadow-sm"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-gray-900">
                    {faq.question}
                    <span
                      className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              For more answers on funding, refunds, and registration, visit our{' '}
              <Link href="/faq/" className="text-emerald-600 font-semibold hover:underline">
                full FAQ page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <WsqContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
