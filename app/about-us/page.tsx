import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { CheckCircle, Award, Users, Building2, MapPin, Phone } from "lucide-react";
import AboutUsClient from "./AboutUsClient";
import AboutCollegeReg from "../components/aboutcollege_reg";

export const metadata: Metadata = {
  title: "About Us | Edusphere College of Management and Technology",
  description: "Learn about Edusphere College, established in 2019, offering quality private diploma and WSQ courses in Singapore. Meet our team and discover our commitment to education excellence.",
  openGraph: {
    title: "About Us | Edusphere College of Management and Technology",
    description: "Established in 2019, Edusphere College offers quality private diploma and WSQ courses in Singapore with experienced industry professionals.",
    url: "https://edusphere.edu.sg/about-us",
    siteName: "Edusphere College of Management and Technology",
    locale: "en_SG",
    type: "website",
  },
  alternates: {
    canonical: "https://edusphere.edu.sg/about-us",
  },
};

export default function AboutUs() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "CollegeOrUniversity"],
    "name": "Edusphere College of Management and Technology Pte Ltd",
    "alternateName": "Edusphere College",
    "url": "https://edusphere.edu.sg",
    "logo": "https://edusphere.edu.sg/homepage/logoimage.png",
    "description": "Private educational institution in Singapore offering diploma programs and WSQ courses in Engineering, IT, Business, Hospitality, and Caregiving.",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500A Beach Road, #05-312 THE PLAZA",
      "addressLocality": "Singapore",
      "postalCode": "199591",
      "addressCountry": "SG"
    },
    "contactPoint": [
      { "@type": "ContactPoint", "telephone": "+65-9125-4523", "contactType": "sales",            "areaServed": "SG", "availableLanguage": ["English"] },
      { "@type": "ContactPoint", "telephone": "+65-8138-5600", "contactType": "customer service", "areaServed": "SG", "availableLanguage": ["English"] },
      { "@type": "ContactPoint", "telephone": "+65-8110-2783", "contactType": "billing support",  "areaServed": "SG", "availableLanguage": ["English"] },
      { "@type": "ContactPoint", "telephone": "+65-8070-6203", "contactType": "admissions",       "areaServed": "SG", "availableLanguage": ["English"] },
      { "@type": "ContactPoint", "telephone": "+65-8221-5143", "contactType": "technical support","areaServed": "SG", "availableLanguage": ["English"] }
    ],
    "email": "info@edusphere.edu.sg",
    "sameAs": [
      "https://www.facebook.com/eduspherecollege",
      "https://www.linkedin.com/company/edusphere-college",
      "https://www.instagram.com/eduspherecollege"
    ],
    "areaServed": { "@type": "Country", "name": "Singapore" }
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* CEO Message */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 relative h-96 lg:h-auto">
                <Image
                  src="/about-contact-other/Tahirdp.webp"
                  alt="Mr. Samsudeen Mohamed Tahir"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent lg:bg-none" />
                <div className="absolute bottom-4 left-4 text-white lg:hidden">
                  <p className="font-bold text-lg">Mr. Samsudeen Mohamed Tahir</p>
                  <p className="text-sm opacity-90">CEO / Director / PEI Manager</p>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">A Message from the CEO &amp; Director</h3>
                </div>
                <div className="space-y-4 text-gray-600 italic text-lg leading-relaxed mb-8 border-l-4 border-[#d81f26] pl-6">
                  <p>&ldquo;At Edusphere, we believe education is more than enrolment numbers. It is about trust, relationships, and long-term impact.</p>
                  <p>
                    If a student enrols once, we have made a sale.<br />
                    If a student stays until graduation, we have earned trust.<br />
                    If a student recommends Edusphere to others, we have built a reputation.
                  </p>
                  <p>That is why we do not focus only on enrolments. We focus on student relationships, learning journeys, and career outcomes. This belief guides every decision we make from admissions to training, from support to graduation.</p>
                  <p>
                    That is how great colleges grow.<br />
                    That is how Edusphere builds its legacy.&rdquo;
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Mr. Samsudeen Mohamed Tahir</h4>
                  <p className="text-[#d81f26] font-medium">CEO / Director / PEI Manager</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Bachelor of Mechanical Engineering</p>
                    <p>Anna University, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
          
            <AboutCollegeReg />           
          
      </section>

      {/* About Our College + Why Choose Edusphere — merged */}
      <section className="relative overflow-hidden py-16 lg:py-28 bg-linear-to-br from-gray-50 via-white to-red-50/30">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-100/40 blur-3xl -z-10" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#1AB69D]/10 blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-10 left-5 opacity-10 -z-10">
          <Image src="/brand/shape-01.png" alt="" width={200} height={200} />
        </div>

        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">

          {/* ── Row 1: narrative (left) + stat cards (right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left: narrative */}
            <div>
              <span className="inline-block text-xs font-bold tracking-widest text-[#d81f26] uppercase mb-4">
                Who We Are
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                About Our College
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                <strong className="text-gray-800">Edusphere College of Management and Technology Pte Ltd</strong>,
                established in <strong className="text-gray-800">2019</strong>, was founded on the principle that
                education can change the world. It is our goal to give every student that chooses Edusphere
                College the chance to change their world and master their future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Edusphere is operated by a team of education professionals from the industry with extensive
                years of experience in managing and teaching across Singapore and South East Asia. We believe
                that opportunity is the greatest gift one can receive &mdash; and education is your passport to a
                world of possibilities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Education is changing, and we are changing with it. We nurture and guide individual
                students as part of a community so they are confident and equipped to navigate the future
                world of new jobs and ways of working.
              </p>

              
            </div>

            {/* Right: stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2019", label: "Year Established",    sub: "Over 5 years of excellence",       bg: "bg-[#d81f26]", text: "text-white" },
                { value: "5+",   label: "Schools & Faculties", sub: "Engineering, IT, Business & more", bg: "bg-white",      text: "text-gray-900" },
                { value: "20+",  label: "Courses Offered",     sub: "Diploma, WSQ & Certificate",       bg: "bg-white",      text: "text-gray-900" },
                { value: "100%", label: "Student Focus",       sub: "Personalised learning journeys",   bg: "bg-[#1AB69D]", text: "text-white" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} ${stat.text} rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between min-h-[140px] hover:-translate-y-1 transition-transform duration-300`}
                >
                  <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">{stat.label}</p>
                    <p className={`text-xs leading-snug ${stat.bg === "bg-white" ? "text-gray-500" : "opacity-80"}`}>
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Organisational Chart */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-red-50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#d81f26] uppercase mb-3">
              How We&apos;re Organised
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Organisation Chart
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our structured leadership ensures every department works together to deliver the best educational experience.
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
            <Image
              src="/about-contact-other/orgchart_2026.png"
              alt="Edusphere College Organisation Chart 2026"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain"
              priority={false}
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Academic Board & Examination Board */}
      <section id="academic-examination-board" className="py-16 lg:py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">

          {/* Academic Board */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-sm font-bold tracking-widest text-[#d81f26] uppercase mb-3">Governance</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Academic Board</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Academic Board sets the standards for academic quality and ensures every course meets the highest educational benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: "Mr. Samsudeen Mohamed Tahir",     qualification: "Bachelor of Mechanical Engineering", institution: "Anna University, India" },
                { name: "Ms. Haji Noor Mohamed Mursidha",  qualification: "Bachelor of Science in Management",  institution: "University of London, UK" },
                { name: "Mr. Mohamed Yasin Mohamed Amin",  qualification: "Master of Computer Application",     institution: "Bharathidasan University, India" },
              ].map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#d81f26]">
                    <Award size={26} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-700">{member.qualification}</p>
                  <p className="text-sm text-gray-500">{member.institution}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 lg:p-10">
              <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Roles &amp; Responsibilities &ndash; Academic Board Member
              </h4>
              <ol className="list-decimal list-outside ml-5 space-y-4 text-gray-700 leading-relaxed">
                <li>To develop and review the policies and procedures on all academic matters of the private education institution, including but not limited to academic quality assurance measures; and</li>
                <li>To facilitate the implementation of and compliance with such policies and procedures.</li>
                <li>
                  Develop a set of standards to ensure the academic quality of every course to be offered or provided by the private education institution, including but not limited to &ndash;
                  <ol className="list-[lower-roman] list-outside ml-6 mt-2 space-y-1 text-gray-600">
                    <li>the content of the modules or subjects of the course;</li>
                    <li>the duration of the course; and</li>
                    <li>the appropriate entry and graduation requirements;</li>
                  </ol>
                </li>
                <li>Approve each person to be deployed to teach any course offered or provided by the private education institution or any module or subject thereof, after determining that the person possesses the minimum qualifications and experience and other criteria prescribed in regulation 26; and review the policies and procedures referred to in paragraph (1) &amp; (2).</li>
              </ol>
            </div>
          </div>

          {/* Examination Board */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-sm font-bold tracking-widest text-[#d81f26] uppercase mb-3">Governance</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Examination Board</h3>
              <p className="text-gray-600 leading-relaxed">
                The Examination Board oversees the development and integrity of all examination and assessment procedures across the institution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: "Mr. Samsudeen Mohamed Tahir",     qualification: "Bachelor of Mechanical Engineering", institution: "Anna University, India" },
                { name: "Ms. Haji Noor Mohamed Mursidha",  qualification: "Bachelor of Science in Management",  institution: "University of London, UK" },
                { name: "Mr. Mohamed Yasin Mohamed Amin",  qualification: "Master of Computer Application",     institution: "Bharathidasan University, India" },
              ].map((member) => (
                <div key={member.name} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1e2a4a]">
                    <CheckCircle size={26} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-700">{member.qualification}</p>
                  <p className="text-sm text-gray-500">{member.institution}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 lg:p-10">
              <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Roles &amp; Responsibilities &ndash; Examination Board Member
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Examination Board will be in charge of the development of examination and assessment procedures, such as developing and facilitating the implementation of procedures to:
              </p>
              <ol className="list-decimal list-outside ml-5 space-y-3 text-gray-700 leading-relaxed">
                <li>Ensure the security of examination scripts and answer scripts;</li>
                <li>Ensure the proper conduct of examinations and assessments;</li>
                <li>Define and ensure the proper discharge of duties and responsibilities of invigilators and markers;</li>
                <li>Conduct moderation of examination and assessment marks; and</li>
                <li>Handle appeals from students with regard to examination or assessment matters.</li>
              </ol>
            </div>
          </div>

        </div>
      </section>

      {/* Our Team Section */}
      <AboutUsClient />
    </div>
  );
}
