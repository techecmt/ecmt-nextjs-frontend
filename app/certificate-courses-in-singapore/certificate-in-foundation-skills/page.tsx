import ContactForm from "../../components/contactform";
import Image from "next/image";

export default function CertificateInFoundationSkills() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
                <div className="absolute inset-0 opacity-65" aria-hidden="true">
                    <Image
                        src="/homepage/cfs.png"
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 bg-white/65 p-6 rounded-xl">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    Foundation Programme
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EE4A62]/10 text-[#EE4A62] text-xs font-semibold">
                                    Pre-Diploma Preparation
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Certificate in <span className="text-[#EE4A62]">Foundation Skills</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                A preparatory programme designed to equip learners with the essential academic, mathematical, and study skills required for successful entry into diploma-level education.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">3 Modules</div>
                                        <div className="text-sm text-gray-500">Core foundation areas</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">Flexible</div>
                                        <div className="text-sm text-gray-500">Online or Face-to-Face</div>
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
                        <div className="relative h-[450px] md:h-[550px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
                           
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
                            The Certificate in Foundation Skills is a preparatory programme designed to equip learners with the essential academic, mathematical, and study skills required for successful entry into diploma-level education.
                        </p>
                        <p>
                            This course focuses on strengthening academic English, foundational mathematics, and effective learning and communication skills, ensuring learners gain confidence, clarity, and readiness for higher education and professional environments.
                        </p>
                        <p>
                            Through practical instruction and guided learning, students develop the core competencies needed to understand academic content, communicate effectively, solve problems, and manage their studies independently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Cards */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Overview
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Contact Hours</h3>
                            <p className="text-2xl font-bold text-[#1AB69D]">36 Hours</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Modules</h3>
                            <p className="text-2xl font-bold text-[#1AB69D]">3</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Assessment</h3>
                            <p className="text-lg font-bold text-[#1AB69D]">Continuous Learning</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow">
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">Mode of Study</h3>
                            <p className="text-lg font-bold text-[#1AB69D]">Online / Face-to-Face</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose This Course */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Why Choose This Course?
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                ),
                                title: "Designed specifically for pre-diploma and diploma-ready learners",
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                                title: "Focus on practical academic and workplace skills",
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Improves confidence in communication and problem-solving",
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                title: "Supports a smooth transition into higher education",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center text-[#1AB69D] shrink-0">
                                    {item.icon}
                                </div>
                                <p className="text-gray-700 font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Will Learn */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        What You Will Learn
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="space-y-8">
                        {/* Academic English */}
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#EE4A62]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Academic English for Higher Education
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Academic vocabulary and grammar accuracy",
                                            "Reading and understanding academic texts",
                                            "Structured paragraph and short academic writing",
                                            "Basic oral presentation skills",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Foundational Mathematics */}
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#1AB69D]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Foundational Mathematics for Applied Studies
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Arithmetic, ratios, percentages, and algebra basics",
                                            "Interpreting data from charts, tables, and graphs",
                                            "Solving real-world quantitative problems",
                                            "Applying mathematical reasoning confidently",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-[#1AB69D] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Learning, Communication & Study Skills */}
                        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#EE4A62]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <svg className="w-8 h-8 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Learning, Communication & Study Skills
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Effective note-taking and time management",
                                            "Exam preparation strategies",
                                            "Clear communication in group and individual settings",
                                            "Critical thinking and problem-solving techniques",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </main>
    );
}
