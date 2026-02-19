import type { Metadata } from "next";
import ContactForm from "../components/contactform";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Advanced Diploma in M&E Engineering | Edusphere Singapore",
    description: "Advanced M&E Engineering Diploma at Edusphere College. 8-month course covering Building Automation, Energy Management, AI/ML in M&E. S$600 discount available.",
    keywords: "advanced M&E engineering singapore, building automation course, energy management singapore, smart building course",
    openGraph: {
        title: "Advanced Diploma in M&E Engineering | Edusphere Singapore",
        description: "Advanced M&E diploma covering Building Automation, Energy Management & AI in M&E systems. 8 months, 144 hours.",
        url: "https://www.edusphere.edu.sg/advanced-diploma-in-mechanical-and-electrical-engineering",
        siteName: "Edusphere College of Management and Technology",
        locale: "en_SG",
        type: "website",
    },
    alternates: {
        canonical: "https://www.edusphere.edu.sg/advanced-diploma-in-mechanical-and-electrical-engineering",
    },
};

export default function AdvancedDiplomaInMechanicalAndElectricalEngineering() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Advanced Diploma in Mechanical and Electrical (M&E) Engineering",
        "description": "Advanced M&E engineering diploma covering building automation technology, energy management systems, smart building management, and AI/ML applications in M&E systems.",
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
        "courseCode": "AME",
        "educationalLevel": "Advanced Diploma",
        "teaches": [
            "Building Automation Technology",
            "Energy Management System",
            "Smart Building Management",
            "Advanced Facilities Management Solutions",
            "Artificial Intelligence and Machine Learning in M&E",
            "Project"
        ],
        "educationalCredentialAwarded": "Advanced Diploma in Mechanical and Electrical (M&E) Engineering",
        "timeToComplete": "P8M",
        "totalTime": "PT144H",
        "courseMode": "Part Time",
        "inLanguage": "en",
        "isAccessibleForFree": false,
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "price": "2616.00",
            "priceCurrency": "SGD",
            "availability": "https://schema.org/InStock"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["Onsite", "Classroom"],
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
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    Advanced Engineering Programme
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EE4A62] text-white text-xs font-semibold">
                                    Save S$600
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Advanced Diploma in <span className="text-[#EE4A62]">Mechanical and Electrical (M&E) Engineering</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Specializes in Built Environment. The aim of this course is to introduce the Principle and Concepts of latest M&E systems & services in market demand.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">Built Environment</div>
                                        <div className="text-sm text-gray-500">Advanced M&E systems</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">Career Upgrade</div>
                                        <div className="text-sm text-gray-500">Supervisory & Managerial</div>
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
                                src="/homepage/admech.webp"
                                alt="Advanced Diploma in Mechanical and Electrical Engineering"
                                fill
                                className="object-cover rounded-tl-3xl rounded-br-3xl"
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

                    <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed text-justify">
                        <p>
                            'Advanced Diploma in Mechanical and Electrical (M&E) Engineering' specializes in Built Environment and it aims to create pathway to our Diploma in M&E graduates to upgrade their advanced skillset to work in Supervisory and Managerial level.
                        </p>
                        <p>
                            This course enables and enhance the employability and create career progression to the students matching the current demand for latest technologies in built environment.
                        </p>
                    </div>

                    {/* Overview Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12 mt-12">
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
                                    <span>Local Diploma or 3 GCE 'A' levels or equivalent foreign qualifications</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>English language proficiency: GCE 'A' level or equivalent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Working Experience: Matured candidate (i.e. minimum 30 years old with 8 years of working experience) with other relevant certificate qualification with 3 years' relevant work experience</span>
                                </li>
                            </ul>
                        </div>

                        {/* Teaching Mode */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                                Teaching Mode:
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Classroom – Face to Face & Practical classes
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
                                'Advanced Diploma in Mechanical and Electrical (M&E) Engineering' will be awarded by Edusphere College of Management and Technology Pte Ltd
                            </p>
                        </div>

                        {/* Schedule */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 md:col-span-2">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">Schedule</h3>
                            <div className="space-y-3 text-gray-700 text-sm">
                                <p><span className="font-semibold">Weekend:</span> (4 Hours per week) - Sat or Sunday (10AM to 2PM) or (2PM to 6PM) or (6PM to 10PM)</p>
                                <p><span className="font-semibold">Weekday:</span> Wed & Fri (7PM TO 9PM)</p>
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
                                        { code: "AME01", title: "Building Automation Technology", hours: 24, mode: "Written Exam 100%" },
                                        { code: "AME02", title: "Energy Management System", hours: 24, mode: "Written Exam 100%" },
                                        { code: "AME03", title: "Smart Building Management", hours: 24, mode: "Written Exam 100%" },
                                        { code: "AME04", title: "Advanced Facilities Management Solutions", hours: 24, mode: "Written Exam 100%" },
                                        { code: "AME05", title: "Artificial Intelligence and Machine Learning in M&E", hours: 24, mode: "Written Exam 100%" },
                                        { code: "AME06", title: "Project", hours: 24, mode: "Assignment 100%" },
                                    ].map((module, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-4 font-semibold text-[#1AB69D]">{module.code}</td>
                                            <td className="px-4 py-4 text-gray-700">{module.title}</td>
                                            <td className="px-4 py-4 text-center font-medium">{module.hours}</td>
                                            <td className="px-4 py-4 text-center text-gray-700">{module.mode}</td>
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
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 109.00</span>
                                </div>
                                <div className="italic text-gray-500 mb-1">Non-Refundable</div>
                                <div className="border-t border-gray-800 my-2"></div>

                                <div className="flex items-start justify-between gap-4">
                                    <span>Course Fee</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 3000.00</span>
                                </div>
                                <div className="flex items-start justify-between gap-4 text-[#EE4A62]">
                                    <span>Discount</span>
                                    <span className="font-bold">:&nbsp;&nbsp;(S$ 600.00)</span>
                                </div>
                                <div className="flex items-start justify-between gap-4 font-semibold mt-2 pt-2 border-t border-gray-300">
                                    <span>Fee After Discount</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 2400.00</span>
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                    <span>GST (9%)</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 216.00</span>
                                </div>
                                <div className="flex items-start justify-between gap-4 font-semibold text-lg mt-2 pt-2 border-t-2 border-gray-400">
                                    <span>Net Course Fee Payable</span>
                                    <span className="font-bold text-[#1AB69D]">:&nbsp;&nbsp;S$ 2616.00</span>
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
