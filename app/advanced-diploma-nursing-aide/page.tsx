import type { Metadata } from "next";
import ContactForm from "../components/contactform";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Advanced Diploma in Nursing Aide | Edusphere Singapore",
    description: "Advanced Nursing Aide Diploma at Edusphere College. 10-month blended learning covering Basic Nursing, Medical Terminology, Geriatric Care. S$600 discount available.",
    keywords: "advanced nursing aide singapore, geriatric nursing course, nursing diploma singapore, healthcare assistant course",
    openGraph: {
        title: "Advanced Diploma in Nursing Aide | Edusphere Singapore",
        description: "Blended learning advanced nursing aide diploma. Covers Basic Nursing, Geriatric Care & Emergency Care. 10 months, 168 hours.",
        url: "https://www.edusphere.edu.sg/advanced-diploma-nursing-aide",
        siteName: "Edusphere College of Management and Technology",
        locale: "en_SG",
        type: "website",
    },
    alternates: {
        canonical: "https://www.edusphere.edu.sg/advanced-diploma-nursing-aide",
    },
};

export default function AdvancedDiplomaNursingAide() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Advanced Diploma in Nursing Aide",
        "description": "Advanced nursing aide diploma covering basic nursing principles, medical terminology, human anatomy, geriatric nursing, and emergency care procedures.",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Edusphere College of Management and Technology Pte Ltd",
            "url": "https://www.edusphere.edu.sg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "7500A Beach Road, #05-312 THE PLAZA",
                "addressLocality": "Singapore",
                "postalCode": "199591",
                "addressCountry": "SG"
            }
        },
        "courseCode": "ADNA",
        "educationalLevel": "Advanced Diploma",
        "teaches": [
            "Basic Nursing",
            "Medical Terminology",
            "Basic Human Sciences - Anatomy and Physiology",
            "Nursing Management",
            "Geriatric Nursing and Care",
            "Principles of Emergency Care",
            "Project"
        ],
        "educationalCredentialAwarded": "Advanced Diploma in Nursing Aide",
        "timeToComplete": "P10M",
        "totalTime": "PT168H",
        "courseMode": "Blended",
        "inLanguage": "en",
        "isAccessibleForFree": false,
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "price": "2400.00",
            "priceCurrency": "SGD",
            "availability": "https://schema.org/InStock"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["Blended", "Onsite"],
            "courseWorkload": "PT168H"
        },
        "numberOfCredits": 7
    };

    return (
        <main className="min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  Professional Healthcare Education
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Advanced Diploma in <span className="text-[#EE4A62]">Nursing Aide</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Equip yourself with professional skills and knowledge in healthcare nursing with utmost compassion and excellence.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                    <div className="flex items-center">
                    <Image
                      src="/brand/google-review.png"
                      alt="Google rating badge"
                      width={240}
                      height={80}
                      className="w-44 md:w-60 h-auto drop-shadow-lg"
                    />
                    </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#register"
                  className="group bg-[#1AB69D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Register Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#brochure"
                  className="group bg-white text-[#1AB69D] border-2 border-[#1AB69D] px-8 py-4 rounded-lg font-semibold hover:bg-[#1AB69D] hover:text-white transition-all hover:shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[450px] md:h-[550px]">
              <Image
                src="/homepage/diplomaincaregiving.webp"
                alt="Advanced Diploma in Nursing Aide"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programme Details */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            Programme Details
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-900 leading-relaxed text-justify max-w-4xl mx-auto">
              This course is developed for those who are currently working or intend to work in Health Nursing Aide in healthcare sectors. Each module is designed to facilitate and enhance the knowledge of future Healthcare professionals with giving them a kick-start into their career pathway in health and social care. As this profession requires higher level of communication and patience, students will be taught the fundamentals of Counselling and Communication. Throughout the course, the students will also learn how to assist clients with day-to-day activities, health and safety and to promote professionalism when encountered special situations.
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Study Modes</h3>
              <p className="text-2xl font-bold text-[#1AB69D]">Part Time</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Course Duration</h3>
              <p className="text-2xl font-bold text-[#1AB69D]">10 Months</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Contact Hours</h3>
              <p className="text-2xl font-bold text-[#1AB69D]">168 Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            Schedule
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Weekend Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#EE4A62]">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Weekend
              </h3>
              <p className="text-gray-700 font-semibold mb-3">(4 Hours per week)</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#EE4A62] rounded-full"></span>
                  Sat or Sunday (10AM to 2PM)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#EE4A62] rounded-full"></span>
                  Sat or Sunday (2PM to 6PM)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#EE4A62] rounded-full"></span>
                  Sat or Sunday (6PM to 10PM)
                </li>
              </ul>
            </div>

            {/* Weekday Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#1AB69D]">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Weekday
              </h3>
              <p className="text-gray-700 font-semibold mb-3">WED & FRI</p>
              <p className="text-gray-700 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-[#1AB69D] rounded-full"></span>
                7PM to 9PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Entry Qualification */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Entry Qualification:
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>At least 2 "A" Levels pass or Diploma or equivalent foreign qualifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>English language proficiency: Pass in GCE 'O' level English or its equivalent</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Working Experience: Matured candidate (i.e. minimum 30 years old with 8 years of working experience) with other relevant certificate qualification. Working Experience: Matured candidate (i.e. minimum 30 years old with 8 years of working experience) with another relevant certificate qualification.</span>
                </li>
              </ul>
            </div>

            {/* Teaching Mode */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Teaching Mode:
              </h3>
              <p className="text-gray-700 text-sm">
                Blended Learning – (Face to Face & E-learning)
              </p>
            </div>

            {/* Teacher-to-Student Ratio */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Teacher-to-Student Ratio:
              </h3>
              <p className="text-gray-700 text-sm">
                The Teacher-to-student ratio is 1:40 (Lecture / Practical)
              </p>
            </div>

            {/* Certification */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Certification:
              </h3>
              <p className="text-gray-700 text-sm">
                'Advanced Diploma in Nursing Aide' will be awarded by Edusphere College of Management and Technology Pte Ltd
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            Course Outline
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#EE4A62] text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-bold">Code</th>
                    <th className="px-4 py-4 text-left font-bold">Module Title</th>
                    <th className="px-4 py-4 text-center font-bold">Contact Hours</th>
                    <th className="px-4 py-4 text-center font-bold">Assessment Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {[
                    { code: 'ADNA01', title: 'Healthcare Operations Management', hours: 24 },
                    { code: 'ADNA02', title: 'Introduction to Counselling and Communication', hours: 24 },
                    { code: 'ADNA03', title: 'Exercise Programming and Assessment', hours: 24 },
                    { code: 'ADNA04', title: 'Dementia and Mental Health', hours: 24 },
                    { code: 'ADNA05', title: 'Integrated Care', hours: 24 },
                    { code: 'ADNA06', title: 'Early Intervention for Children with Special Needs', hours: 24 },
                    { code: 'ADNA07', title: 'Project - Case Management', hours: 24, assessment: 'Project Work 100%' },
                  ].map((module, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-semibold text-[#1AB69D]">{module.code}</td>
                      <td className="px-4 py-4 text-gray-700">{module.title}</td>
                      <td className="px-4 py-4 text-center font-medium">{module.hours}</td>
                      <td className="px-4 py-4 text-center text-gray-700">{module.assessment || 'Written Exam 100%'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Fees & Refund Policy */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Programme Fees */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#1AB69D] mb-6">
                Programme Fees (Part-time):
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EE4A62] text-white flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Registration Fee (Non-Refundable)</span>
                    <span className="font-bold text-gray-900">S$100.00</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EE4A62] text-white flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Course Fee</span>
                    <span className="font-bold text-gray-900">S$3000.00</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EE4A62] text-white flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-gray-700 text-sm">Discount</span>
                    <span className="font-bold text-gray-900">S$600.00</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#EE4A62] text-white flex items-center justify-center shrink-0 font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm font-semibold">Total Fees</span>
                      <span className="font-bold text-gray-900">S$2400.00</span>
                    </div>
                    <span className="text-xs text-gray-500">(excluding registration fee)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <h2 className="text-2xl font-bold text-[#1AB69D] p-6 pb-4">
                Course Withdrawal/Transfer and Refund Policy
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#EE4A62] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Refund of Course Fee (%)</th>
                      <th className="px-4 py-3 text-left font-semibold">If Student's written notice of withdrawal is received:</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-bold text-lg text-gray-900">100%</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">
                        ("Maximum Refund") More than [30] days before the Course Commencement Date
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-bold text-lg text-gray-900">50%</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">
                        Before, but not more than [30] days before the Course Commencement Date
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-bold text-lg text-gray-900">25%</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">
                        After, but not more than [15] days after the Course Commencement Date
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-bold text-lg text-gray-900">0%</td>
                      <td className="px-4 py-3 text-gray-700 text-xs">
                        More than [15] days after the Course Commencement Date
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
