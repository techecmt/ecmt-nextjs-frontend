import WSQContactForm from "../../components/wsq_contactform";
import Image from "next/image";

export default function MasterExecutivePresenceInStakeholderManagement() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#1AB69D]/10 via-white to-[#EE4A62]/5 py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-6">
                        <div className="flex justify-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <a href="https://www.myskillsfuture.gov.sg/content/portal/en/training-exchange/course-directory/course-detail.html?courseReferenceNumber=TGS-2025056021">WSQ Course - TGS-2025056021 </a>
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Master Executive Presence in <span className="text-[#EE4A62]">Stakeholder Management</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Build confidence, influence, and leadership skills to effectively manage stakeholder relationships and become a trusted leader
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <a
                                href="#contact"
                                className="group bg-[#1AB69D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                            >
                                Talk to Us
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="#register"
                                className="group bg-white text-[#1AB69D] border-2 border-[#1AB69D] px-8 py-4 rounded-lg font-semibold hover:bg-[#1AB69D] hover:text-white transition-all hover:shadow-lg flex items-center gap-2"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="flex justify-center gap-8 pt-8 text-sm text-gray-600">
                            <a href="#overview" className="hover:text-[#1AB69D] transition-colors font-medium">Overview</a>
                            <a href="#course-details" className="hover:text-[#1AB69D] transition-colors font-medium">Course Details</a>
                            <a href="#entry-requirements" className="hover:text-[#1AB69D] transition-colors font-medium">Entry Requirements</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <section id="overview" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Course Overview
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-700 leading-relaxed text-justify mb-8">
                            "Stakeholder Management: Executive Presence, Influence & Leadership" is a powerful course created to help professionals become confident and effective leaders. It teaches how to manage relationships with different stakeholders, build trust, and communicate clearly. This course goes beyond basic management by focusing on advanced skills like influencing others, handling conflicts, and leading with impact—both online and in-person.
                        </p>

                        <div className="bg-[#1AB69D]/5 border-l-4 border-[#1AB69D] p-6 rounded-r-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Course Objective</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The main goal of this course is to help participants lead with confidence and build strong connections with stakeholders. It provides practical tools and insights to improve communication, align with company goals, and become a trusted and influential leader in any organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section id="course-details" className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Course Details
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Course Duration</h3>
                            <p className="text-xl font-bold text-[#1AB69D]">16 Hours</p>
                            <p className="text-xs text-gray-500 mt-1">Training: 15 Hours (2 Days)</p>
                            <p className="text-xs text-gray-500">Assessment: 1 Hour</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Mode of Training</h3>
                            <p className="text-xl font-bold text-[#EE4A62]">Face to Face</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Trainer : Learner Ratio</h3>
                            <p className="text-xl font-bold text-[#1AB69D]">1 : 24</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Course Fee</h3>
                            <p className="text-xl font-bold text-[#EE4A62]">S$1000/-</p>
                            <p className="text-xs text-gray-500 mt-1">NETT (Before Funding)</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 max-w-2xl mx-auto">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-[#1AB69D]/10 rounded-xl flex items-center justify-center shrink-0">
                                <svg className="w-8 h-8 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">WSQ Course</h3>
                                <p className="text-gray-700 text-sm">Accreditation by SkillsFuture Singapore (SSG)</p>
                                <a href="https://www.myskillsfuture.gov.sg" target="_blank" rel="noopener noreferrer" className="text-[#1AB69D] hover:text-[#16917f] text-sm font-medium inline-flex items-center gap-1 mt-2">
                                    Visit www.myskillsfuture.gov.sg
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Funding Information */}
            <section id="entry-requirements" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Funding Information
                    </h2>
                    <div className="flex justify-center mb-2">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>
                    <p className="text-center text-gray-600 mb-8">
                        Funding Validity Period: <span className="font-semibold text-[#1AB69D]">24-Jun-2025 TO 23-Jun-2027</span>
                    </p>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-[#1AB69D] text-white">
                                    <tr>
                                        <th className="px-4 py-4 text-left font-bold"></th>
                                        <th className="px-4 py-4 text-center font-bold">
                                            Full Course Fee<br />
                                            <span className="font-normal text-xs">(For Foreigners and those not eligible for subsidies)</span>
                                        </th>
                                        <th className="px-4 py-4 text-center font-bold">
                                            SG Citizen<br />
                                            (21-39 years old)<br />
                                            or SG PR ≥ 21 yrs old<br />
                                            <span className="font-normal text-xs">SkillsFuture Funding (Baseline) 50%</span>
                                        </th>
                                        <th className="px-4 py-4 text-center font-bold">
                                            SG Citizen<br />
                                            (Above 40 years old)<br />
                                            <span className="font-normal text-xs">SkillsFuture Mid-Career Enhance Subsidy 70%</span>
                                        </th>
                                        <th className="px-4 py-4 text-center font-bold">
                                            SME Sponsored<br />
                                            <span className="font-normal text-xs">SkillsFuture Enhanced Training Support for SMEs 70%</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 font-semibold text-gray-900">Course Fees</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1000.00</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1000.00</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1000.00</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1000.00</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 font-semibold text-gray-900">With GST (9%)</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1090.00</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1090.00</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1090.00</td>
                                        <td className="px-4 py-3 text-center text-gray-700">S$1090.00</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 font-semibold text-[#EE4A62]">SkillsFuture Funding</td>
                                        <td className="px-4 py-3 text-center text-[#EE4A62] font-medium">-S$0.00</td>
                                        <td className="px-4 py-3 text-center text-[#EE4A62] font-medium">-S$500.00</td>
                                        <td className="px-4 py-3 text-center text-[#EE4A62] font-medium">-S$700.00</td>
                                        <td className="px-4 py-3 text-center text-[#EE4A62] font-medium">-S$700.00</td>
                                    </tr>
                                    <tr className="bg-[#1AB69D]/5 font-bold">
                                        <td className="px-4 py-4 text-gray-900 text-lg">Total Net Fee</td>
                                        <td className="px-4 py-4 text-center text-[#1AB69D] text-lg">S$1090.00</td>
                                        <td className="px-4 py-4 text-center text-[#1AB69D] text-lg">S$590.00</td>
                                        <td className="px-4 py-4 text-center text-[#1AB69D] text-lg">S$390.00</td>
                                        <td className="px-4 py-4 text-center text-[#1AB69D] text-lg">S$390.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-[#EE4A62]/5 border-l-4 border-[#EE4A62] p-6 rounded-r-lg max-w-4xl mx-auto">
                        <div className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                All Singaporeans aged 25 and above can use their <span className="font-semibold">$500 SkillsFuture Credit</span> from the government to pay for a wide range of approved skills-related courses. Visit MySkillsFuture (at <a href="https://www.myskillsfuture.gov.sg" target="_blank" rel="noopener noreferrer" className="text-[#1AB69D] hover:underline font-medium">www.myskillsfuture.gov.sg</a>) to choose from the courses available on the website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Talk to Us Directly
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch For:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Understanding the available subsidies",
                                        "Clarify course details (Assessment, Schedule etc.)",
                                        "Find out if this course suits your goals",
                                        "Check if you are eligible for the course",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-[#1AB69D] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid gap-3">
                                {[
                                    {
                                        href: "https://wa.me/6582215143",
                                        label: "WhatsApp Us",
                                        bg: "bg-[#25D366]",
                                        hoverBg: "hover:bg-[#20BA5A]",
                                        icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>,
                                        external: true,
                                    },
                                    {
                                        href: "tel:+6582215143",
                                        label: "+65 8221 5143",
                                        bg: "bg-[#1AB69D]",
                                        hoverBg: "hover:bg-[#16917f]",
                                        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                                        external: false,
                                    },
                                    {
                                        href: "https://maps.google.com/?q=7500A+Beach+Road+THE+PLAZA+Singapore+199591",
                                        label: "Find Us on Google Maps",
                                        bg: "bg-white",
                                        hoverBg: "hover:bg-[#1AB69D]",
                                        textColor: "text-[#1AB69D]",
                                        hoverText: "hover:text-white",
                                        border: "border-2 border-[#1AB69D]",
                                        icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                                        external: true,
                                    },
                                ].map((contact, idx) => (
                                    <a
                                        key={idx}
                                        href={contact.href}
                                        {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                                        className={`flex items-center justify-center gap-3 ${contact.bg} ${contact.textColor || "text-white"} ${contact.border || ""} px-6 py-3 rounded-lg font-semibold ${contact.hoverBg} ${contact.hoverText || ""} transition-all hover:shadow-lg hover:scale-105 active:scale-95`}
                                    >
                                        <svg className="w-6 h-6" fill={idx === 0 ? "currentColor" : "none"} stroke={idx !== 0 ? "currentColor" : "none"} viewBox="0 0 24 24">
                                            {contact.icon}
                                        </svg>
                                        {contact.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[400px] md:h-full min-h-[350px] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/wsq-images/callcenteryoungwomen.png"
                                alt="Contact Us - Our friendly team is ready to help"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            <WSQContactForm />
        </main>
    );
}
