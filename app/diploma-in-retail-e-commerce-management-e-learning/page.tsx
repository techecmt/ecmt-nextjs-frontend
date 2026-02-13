import type { Metadata } from "next";
import ContactForm from "../components/contactform";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Diploma in Retail & E-Commerce Management (E-Learning) | Edusphere Singapore",
    description: "Online Retail & E-Commerce Diploma at Edusphere College. 100% e-learning covering Digital Marketing, E-commerce Platforms, Inventory Management. 12-month flexible learning.",
    keywords: "retail management diploma online, e-commerce course online, digital marketing diploma, online retail course singapore",
    openGraph: {
        title: "Diploma in Retail & E-Commerce Management (E-Learning) | Edusphere Singapore",
        description: "100% online retail & e-commerce diploma covering Digital Marketing, E-commerce Platforms & Entrepreneurship. Flexible e-learning, 12 months.",
        url: "https://www.edusphere.edu.sg/diploma-in-retail-e-commerce-management-e-learning",
        siteName: "Edusphere College of Management and Technology",
        locale: "en_SG",
        type: "website",
    },
    alternates: {
        canonical: "https://www.edusphere.edu.sg/diploma-in-retail-e-commerce-management-e-learning",
    },
};

export default function DiplomaInRetailECommerceManagementELearning() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Diploma in Retail & E-Commerce Management (E-Learning)",
        "description": "Comprehensive online retail and e-commerce diploma covering digital marketing, e-commerce platforms, inventory management, and online retail entrepreneurship.",
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
        "courseCode": "DREM",
        "educationalLevel": "Diploma",
        "teaches": [
            "Introduction to Retail and E-commerce Management",
            "E-commerce Platforms and Technologies",
            "Digital Marketing and Customer Engagement",
            "Inventory and Supply Chain Management",
            "Retail Finance and Budgeting",
            "Retail and E-commerce Entrepreneurship"
        ],
        "educationalCredentialAwarded": "Diploma in Retail & E-Commerce Management",
        "timeToComplete": "P12M",
        "totalTime": "PT144H",
        "courseMode": "Online",
        "inLanguage": "en",
        "isAccessibleForFree": false,
        "offers": {
            "@type": "Offer",
            "category": "Paid",
            "price": "1800.00",
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
                                    Retail & E-Commerce Focus
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Diploma in <span className="text-[#EE4A62]">Retail & E-Commerce Management</span><br />
                                <span className="text-[#1AB69D]">(E-Learning)</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                The Diploma in Retail & E-Commerce Management (E-Learning) is designed to equip students with the essential skills and knowledge required to thrive in the rapidly evolving retail landscape.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">Retail Ready</div>
                                        <div className="text-sm text-gray-500">Traditional & Digital</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">100% Online</div>
                                        <div className="text-sm text-gray-500">Flexible learning</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="#register"
                                    className="group bg-[#1AB69D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                                >
                                    Get Started Now
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
                                src="/homepage/retail-ecommerce-elearning.webp"
                                alt="Diploma in Retail & E-Commerce Management E-Learning"
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
                            The Diploma in Retail & E-Commerce Management (E-Learning) is designed to equip students with the essential skills and knowledge required to thrive in the rapidly evolving retail landscape. This course offers a comprehensive overview of both traditional retail and modern e-commerce practices, emphasizing the integration of digital technologies in retail management. Participants will explore various aspects of the retail industry, from foundational concepts to advanced strategies, preparing them for successful careers in this dynamic field.
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
                            <p className="text-2xl font-bold text-[#1AB69D]">12 Months</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Contact Hours</h3>
                            <p className="text-2xl font-bold text-[#1AB69D]">144 Hours</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Opportunities */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Career Opportunities
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {[
                            "E-commerce Manager",
                            "Retail Store Manager",
                            "Digital Marketing Specialist",
                            "Omnichannel Retail Manager",
                            "Data Analyst (Retail/E-commerce)",
                            "E-commerce Entrepreneur",
                            "Product Manager (E-commerce)"
                        ].map((career, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#1AB69D] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 text-sm font-medium">{career}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Cards Grid */}
            <section className="py-12 md:py-16 bg-white">
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
                                    <span>Age: 16 years old</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Language: GCE 'O' level – C6 or equivalent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Academic: Minimum of 3 GCE 'O' levels passes including English (C6) or equivalent qualification to GCE 'O' Level, such as International Secondary school certificate with passes English</span>
                                </li>
                            </ul>
                        </div>

                        {/* Teaching Mode */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1AB69D] mb-4">
                                Teaching Mode:
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Online Classes
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
                                'The Diploma in Retail & E-Commerce Management (E-Learning)' will be awarded by Edusphere College of Management and Technology Pte Ltd
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Outline */}
            <section className="py-12 md:py-16 bg-gray-50">
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
                                        { code: "DREM01", title: "Introduction to Retail and E-commerce Management", hours: 24 },
                                        { code: "DREM02", title: "E-commerce Platforms and Technologies", hours: 24 },
                                        { code: "DREM03", title: "Digital Marketing and Customer Engagement", hours: 24 },
                                        { code: "DREM04", title: "Inventory and Supply Chain Management", hours: 24 },
                                        { code: "DREM05", title: "Retail Finance and Budgeting", hours: 24 },
                                        { code: "DREM06", title: "Retail and E-commerce Entrepreneurship", hours: 24 },
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
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Programme Fees */}
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#1AB69D] mb-6">
                                Programme Fees (Part-time):
                            </h2>

                            <div className="space-y-2 text-sm text-gray-700 max-w-xl">
                                <div className="flex items-start justify-between gap-4">
                                    <span>Registration Fee</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 50.00</span>
                                </div>
                                <div className="italic text-gray-500 mb-1">Non-Refundable</div>
                                <div className="border-t border-gray-800 my-2"></div>

                                <div className="flex items-start justify-between gap-4">
                                    <span>Course Fee</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 1800.00</span>
                                </div>
                                <div className="flex items-start justify-between gap-4 font-semibold mt-2">
                                    <span>Total Fees</span>
                                    <span className="font-bold text-gray-900">:&nbsp;&nbsp;S$ 1800.00</span>
                                </div>
                                <div className="text-xs text-gray-500 italic">(excluding registration fee)</div>
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
