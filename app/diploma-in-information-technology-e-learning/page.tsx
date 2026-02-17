import type { Metadata } from "next";
import ContactForm from "../components/contactform";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Diploma in Information Technology (E-Learning) | Edusphere Singapore",
    description: "Online IT Diploma at Edusphere College. 100% e-learning covering AI, Blockchain, Cybersecurity, Database & Programming. 8-month flexible online learning.",
    keywords: "IT diploma online, information technology e-learning, online IT course singapore, cybersecurity course online, AI blockchain course",
    openGraph: {
        title: "Diploma in Information Technology (E-Learning) | Edusphere Singapore",
        description: "100% online IT diploma covering AI, Blockchain, Cybersecurity & Programming. Flexible e-learning, 8 months.",
        url: "https://www.edusphere.edu.sg/diploma-in-information-technology-e-learning",
        siteName: "Edusphere College of Management and Technology",
        locale: "en_SG",
        type: "website",
    },
    alternates: {
        canonical: "https://www.edusphere.edu.sg/diploma-in-information-technology-e-learning",
    },
};

export default function DiplomaInInformationTechnologyELearning() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Diploma in Information Technology (E-Learning)",
        "description": "Comprehensive online IT diploma covering computer science fundamentals, database systems, programming, blockchain technology, artificial intelligence, and cybersecurity.",
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
        "courseCode": "DIT",
        "educationalLevel": "Diploma",
        "teaches": [
            "Introduction to Computer Science",
            "Fundamentals of Database",
            "Fundamentals of programming",
            "Introduction to Blockchain Technology",
            "Introduction to Artificial Intelligence",
            "Fundamentals of Cybersecurity"
        ],
        "educationalCredentialAwarded": "Diploma in Information Technology",
        "timeToComplete": "P8M",
        "totalTime": "PT144H",
        "courseMode": "Online",
        "inLanguage": "en",
        "isAccessibleForFree": false,
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "price": "2180.00",
            "priceCurrency": "SGD",
            "availability": "https://schema.org/InStock"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["Online", "E-Learning"],
            "courseWorkload": "PT144H"
        },
        "numberOfCredits": 6
    };

    return (
        <main className="min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    E-Learning Programme
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EE4A62]/10 text-[#EE4A62] text-xs font-semibold">
                                    Learn from Anywhere
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Diploma in <span className="text-[#EE4A62]">Information Technology</span><br />
                                <span className="text-[#1AB69D]">(E-Learning)</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Elevate your tech career with our Diploma in Information Technology (E-Learning) at Edusphere, designed to equip you with cutting-edge skills in a flexible, online environment. Master the digital world from anywhere!
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">100% Online</div>
                                        <div className="text-sm text-gray-500">Learn at your own pace</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">Industry-Ready</div>
                                        <div className="text-sm text-gray-500">Practical IT skills</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://onlineportal.edusphere.edu.sg/ecmt-registration-form"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                        <div className="relative h-[450px] md:h-[550px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/homepage/dit-el.png"
                                alt="Diploma in Information Technology E-Learning"
                                fill
                                className="object-contain rounded-tl-3xl rounded-br-3xl"
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
                            The Diploma in Information Technology (E-Learning) at Edusphere College of Management and Technology offers a robust foundation in computing and IT, combined with essential management principles. This program is tailored to equip students with both theoretical knowledge and practical skills, ensuring they stay competitive in the ever-evolving tech industry. Through immersive learning and real-world experience, students will be well-prepared to meet the demands of today's dynamic workplace.
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
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                                Entry Qualification:
                            </h3>
                            <ul className="space-y-3 text-gray-700 text-sm">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>With minimum 3 GCE 'O' level – C6 or Pass in International Secondary including English</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>English language proficiency: GCE 'O' level – C6 or equivalent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Working Experience: Matured candidate (minimum 30 years old with 8 years of working experience) with another relevant certificate qualification.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Teaching Mode */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                                Teaching Mode:
                            </h3>
                            <p className="text-gray-700 text-sm">
                                E-Learning
                            </p>
                        </div>

                        {/* Teacher-to-Student Ratio */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                                Teacher-to-Student Ratio:
                            </h3>
                            <p className="text-gray-700 text-sm">
                                The Teacher-to-student ratio is 1:40 (Lecture / Practical)
                            </p>
                        </div>

                        {/* Certification */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                                Certification:
                            </h3>
                            <p className="text-gray-700 text-sm">
                                'Diploma in Information Technology (E-Learning)' will be awarded by Edusphere College of Management and Technology Pte Ltd
                            </p>
                        </div>

                        {/* Schedule */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 md:col-span-2">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">Schedule</h3>
                            <div className="space-y-3 text-gray-700 text-sm">
                                <p><span className="font-semibold">Weekend:</span> (4 Hours per week) Sat or Sunday (10AM to 2PM) or (2PM to 6PM) or (6PM to 10PM)</p>
                                <p><span className="font-semibold">Weekday:</span> Wed & Fri (7PM to 9PM)</p>
                            </div>
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
                                        { code: "DIT01", title: "Introduction to Computer Science", hours: 24 },
                                        { code: "DIT02", title: "Fundamentals of Database", hours: 24 },
                                        { code: "DIT03", title: "Fundamentals of programming", hours: 24 },
                                        { code: "DIT04", title: "Introduction to Blockchain Technology", hours: 24 },
                                        { code: "DIT05", title: "Introduction to Artificial Intelligence", hours: 24 },
                                        { code: "DIT06", title: "Fundamentals of Cybersecurity", hours: 24 },
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
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#1AB69D] mb-6">
                                Programme Fees (Part-time):
                            </h2>

                            <div className="space-y-2 text-sm text-gray-700 max-w-xl">
                                <div className="flex items-start justify-between gap-4">
                                    <span>Registration Fee (With GST)</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 54.50</span>
                                </div>
                                <div className="italic text-gray-500 mb-1">Non-Refundable</div>
                                <div className="border-t border-gray-800 my-2"></div>

                                <div className="flex items-start justify-between gap-4">
                                    <span>Course Fee</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 2000.00</span>
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                    <span>GST (9%)</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 180.00</span>
                                </div>
                                <div className="flex items-start justify-between gap-4 font-semibold mt-2">
                                    <span>Net Course Fee Payable</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 2180.00</span>
                                </div>
                            </div>
                        </div>

                        {/* Refund Policy */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
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
