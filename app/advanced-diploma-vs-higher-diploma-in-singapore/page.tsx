import Image from "next/image";
import ContactForm from "../components/contactform";

export default function AdvancedDiplomaVsHigherDiploma() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-white">
                <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
                    <div className="flex flex-col items-start gap-4">
                        <span className="text-sm font-semibold text-gray-500">Blog</span>

                        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 max-w-4xl">
                            Advanced Diploma vs Higher Diploma in Singapore: Which One Helps You Upskill Faster?
                        </h1>

                        <div className="flex items-center gap-6 text-gray-600 text-sm">
                            <div className="inline-flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>26 Nov, 2025</span>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-10H7a2 2 0 00-2 2v6a2 2 0 002 2h6m0-10V6a2 2 0 00-2-2H7m6 4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4" />
                                </svg>
                                <span>Com 0</span>
                            </div>
                        </div>

                        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/blogimages/Advanced-Diploma-vs-Higher-Diploma-in-Singapore.jpg"
                                alt="Advanced Diploma vs Higher Diploma in Singapore"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
                        <p>
                            If you’re planning to study in Singapore and want to grow your career quickly, you’ve probably heard of two popular qualifications: the Higher Diploma and the Advanced Diploma. Both are recognised training routes — but they serve different purposes and help you progress at different speeds.
                        </p>
                        <p>
                            This guide breaks down the difference in the simplest way possible, focusing on how fast you can complete them, how quickly you can enter the workforce, and why students choose Edusphere for Advanced Diplomas.
                        </p>

                        <h2>What’s the Main Difference? Speed, Skill Level & Job Readiness</h2>
                        <p>Here’s the real-world explanation:</p>
                        <ul>
                            <li>
                                <strong>Higher Diploma = Foundation learning:</strong> You learn broad subjects, build confidence, and understand the fundamentals of an industry. Perfect for beginners or those switching careers.
                            </li>
                            <li>
                                <strong>Advanced Diploma = Faster skill upgrade:</strong> You focus on specialised, job-ready skills that help you move into better roles in a shorter time.
                            </li>
                        </ul>

                        <h2>Which One Can You Complete Faster?</h2>
                        <h3>Higher Diploma</h3>
                        <p>
                            Higher Diploma courses generally take longer because students learn the full foundation of a subject — customer management, operations, communication, business basics, etc. If you’re new to the field, this is the correct starting point.
                        </p>
                        <h3>Advanced Diploma</h3>
                        <p>
                            Advanced Diploma programmes are shorter because they skip the fundamentals and go straight into practical, industry-relevant topics. You focus on what truly matters for the job.
                        </p>
                        <p className="bg-[#1AB69D]/10 border-l-4 border-[#1AB69D] p-4 rounded-r-lg text-gray-800 font-semibold">
                            If your goal is to upgrade your skills fast, the Advanced Diploma is the faster option.
                        </p>

                        <h2>Who Should Choose What?</h2>
                        <div className="grid md:grid-cols-2 gap-6 not-prose">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-[#1AB69D] mb-3">Choose Higher Diploma if:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    {["You are new to the industry","You want to build a strong foundation","You want structured learning from basics to intermediate level","You prefer slower, comfortable learning pace","You want to understand the entire field before specialising"].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-[#1AB69D] mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#1AB69D]/10 rounded-xl p-6 border border-[#1AB69D]/30 shadow-sm">
                                <h3 className="text-xl font-bold text-[#1AB69D] mb-3">Choose Advanced Diploma if:</h3>
                                <ul className="space-y-2 text-gray-800">
                                    {["You already have some industry exposure","You want to sharpen your skills quickly","You want practical knowledge you can use immediately","You want to qualify for better responsibilities","You are working and need a fast, flexible upgrade"].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-[#EE4A62] mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <h2>Why Choose Edusphere College for Your Advanced Diploma?</h2>
                        <p>Edusphere is preferred by many students in Singapore for one main reason: we make skill upgrading FAST, PRACTICAL, and JOB-FOCUSED.</p>

                        <ol className="space-y-4">
                            <li>
                                <strong>Short, Efficient Study Duration:</strong> Programmes are designed to be completed quickly without compromising learning quality — ideal for working adults who need speed.
                            </li>
                            <li>
                                <strong>Practical, Hands-On Learning:</strong> Case studies, real scenarios, practical tasks, and applied learning so you master what matters at work.
                            </li>
                            <li>
                                <strong>Flexible Timings for Busy People:</strong> Weekend and evening classes make it easy to study while working.
                            </li>
                            <li>
                                <strong>Industry-Focused Curriculum:</strong> Designed to match real needs in Hospitality, Business, HR, Management, Tourism, Retail, and Healthcare support.
                            </li>
                            <li>
                                <strong>Affordable Fees:</strong> Accessible pricing so more students can upgrade without financial stress.
                            </li>
                            <li>
                                <strong>Supportive, Student-Friendly Environment:</strong> Approachable trainers and clear course structure from registration to completion.
                            </li>
                        </ol>

                    </article>
                </div>
            </section>

            
            <ContactForm />
        </main>
    );
}
