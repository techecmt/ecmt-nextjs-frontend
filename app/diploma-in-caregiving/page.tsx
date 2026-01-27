import ContactForm from "../components/contactform";
import Image from "next/image";

export default function DiplomaInCaregiving() {
  return (
    <main className="min-h-screen">
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
                Diploma in <span className="text-[#EE4A62]">Caregiving</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Equip yourself with professional skills and knowledge in elderly care, infant care, and disability support with utmost compassion and excellence.
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
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">Graduates</div>
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
                alt="Diploma in Caregiving"
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
              The <span className="text-gray-900 font-semibold">Diploma in caregiving</span> is designed to <span className="text-gray-900 font-semibold">equip</span> the <span className="text-gray-900 font-semibold">students</span> with <span className="text-gray-900 font-semibold">appropriate skills</span> and <span className="text-gray-900 font-semibold">knowledge</span> in <span className="text-gray-900 font-semibold">looking after</span> the <span className="text-gray-900 font-semibold">Elderly, Infants</span> and <span className="text-gray-900 font-semibold">disabled</span> with <span className="text-gray-900 font-semibold">utmost care</span> and <span className="text-gray-900 font-semibold">professionalism</span>. Upon <span className="text-gray-900 font-semibold">successful completion</span> of this course our students shall be able to will provide <span className="text-gray-900 font-semibold">effective community care</span> through the introduction of <span className="text-gray-900 font-semibold">appropriate exercises</span> and <span className="text-gray-900 font-semibold">healthy behaviours</span> for seniors to enhance their <span className="text-gray-900 font-semibold">physical health, emotional</span> and <span className="text-gray-900 font-semibold">mental resilience</span>, and <span className="text-gray-900 font-semibold">socially activeness</span> and demonstrate <span className="text-gray-900 font-semibold">professional handling</span> of New born or Infant especially with the <span className="text-gray-900 font-semibold">special needs</span>.
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
              <p className="text-2xl font-bold text-[#1AB69D]">08 Months</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Contact Hours</h3>
              <p className="text-2xl font-bold text-[#1AB69D]">144 Hours</p>
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
                  <span>With minimum 3 GCE 'O' level or International Secondary including English</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>English language proficiency: GCE 'O' level or equivalent</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Working Experience: Matured candidate (i.e. minimum 30 years old with 8 years of working experience) with another relevant certificate qualification.</span>
                </li>
              </ul>
            </div>

            {/* Teaching Mode */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Teaching Mode:
              </h3>
              <p className="text-gray-700 text-sm">
                Classroom – Face to Face & Practical classes
              </p>
            </div>

            {/* Teacher-to-Student Ratio */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Teacher-to-Student Ratio:
              </h3>
              <p className="text-gray-700 text-sm">
                The Teacher-to-student ratio is 1:30 (Lecture / Practical)
              </p>
            </div>

            {/* Certification */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                Certification:
              </h3>
              <p className="text-gray-700 text-sm">
                'Diploma in Caregiving' will be awarded by Edusphere College of Management and Technology Pte Ltd
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
                    { code: 'DC01', title: 'Introduction to health care & role of Caregiver', hours: 24 },
                    { code: 'DC02', title: 'Effective Communication and Interpersonal Skills', hours: 24 },
                    { code: 'DC03', title: 'Psychosocial Health and Nutrition', hours: 24 },
                    { code: 'DC04', title: 'New Born & Infant Care', hours: 24 },
                    { code: 'DC05', title: 'Ageing Process & Promotion of Physical Health', hours: 24 },
                    { code: 'DC06', title: 'Prevention and Management of Falls', hours: 24 },
                  ].map((module, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-semibold text-[#1AB69D]">{module.code}</td>
                      <td className="px-4 py-4 text-gray-700">{module.title}</td>
                      <td className="px-4 py-4 text-center font-medium">{module.hours}</td>
                      <td className="px-4 py-4 text-center text-gray-700">Written Exam 100%</td>
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

              <div className="space-y-2 text-sm text-gray-700 max-w-xl">
                <div className="flex items-start justify-between gap-4">
                  <span>Registration Fee (With GST)</span>
                  <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 109.00</span>
                </div>
                <div className="italic text-gray-500 mb-1">Non-Refundable</div>
                <div className="border-t border-gray-800 my-2"></div>

                <div className="flex items-start justify-between gap-4">
                  <span>Course Fee</span>
                  <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 3000.00</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Discount</span>
                  <span className="font-bold text-[#EE4A62]">:&nbsp;&nbsp;(S$ 600.00)</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Fee After Discount</span>
                  <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 2400.00</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>GST (9%)</span>
                  <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 216.00</span>
                </div>
                <div className="flex items-start justify-between gap-4 font-semibold mt-2">
                  <span>Net Course Fee Payable</span>
                  <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 2616.00</span>
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
