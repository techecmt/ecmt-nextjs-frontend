import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import WsqContactForm from "../../components/wsq_contactform";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../../components/contactform";
import OpenCertsGuide from "@/app/components/OpenCertsGuide";
import WsqRefundPolicy from "../../components/WsqRefundPolicy";

export const metadata: Metadata = {
  title: 'Support Service to Persons with Disabilities | WSQ Course | Edusphere',
  description:
    'Gain inclusive service and support skills for persons with disabilities through this WSQ course with practical workplace application.',
};

// Brand Colors:
// Primary: #1AB69D
// Secondary: #EE4A62
// Text: #202020

export default function SupportServiceDisabilitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/wsq-images/Support-Service-to-Persons-with-Disabilities.webp"
                alt="Support Service to Persons with Disabilities"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            </div>

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left content */}
              <div className="col-span-8 p-6 sm:p-10 md:p-14">
                <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
                  TGS-2024050928
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Support Service to Persons with Disabilities
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
                  Build empathy-driven capabilities to support persons with disabilities safely, respectfully, and confidently across community, home, and workplace settings.
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="rounded-2xl bg-white/90 px-4 py-3 text-left shadow-sm ring-1 ring-black/5 backdrop-blur">
                    <div style={{ color: "#1AB69D" }} className="font-semibold">
                      Inclusive Service
                    </div>
                    <div style={{ color: "#202020" }} className="text-xs">
                      Safety-Focused
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/90 px-4 py-3 text-left shadow-sm ring-1 ring-black/5 backdrop-blur">
                    <div style={{ color: "#1AB69D" }} className="font-semibold">
                      SkillsFuture
                    </div>
                    <div style={{ color: "#202020" }} className="text-xs">
                      Credits Eligible
                    </div>
                  </div>
                </div>

                {/* Registration CTA */}
                <div className="mt-8 w-full max-w-md">
                  <div
                    className="rounded-2xl p-1 shadow-2xl ring-1 ring-white/25"
                    style={{ background: "linear-gradient(135deg, #1AB69D 0%, #31B979 50%, #EE4A62 100%)" }}
                  >
                    <div className="rounded-2xl bg-gray-950/90 p-5 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1AB69D]">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1AB69D] opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1AB69D]" />
                        </span>
                        Enrolment Open
                      </div>

                      <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/15">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: "rgba(26, 182, 157, 0.2)" }}
                        >
                          <CalendarDays className="h-5 w-5 text-[#1AB69D]" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white/70">Next Batch Starts</div>
                          <div className="text-lg font-bold text-white">09-Aug-2026</div>
                        </div>
                      </div>

                      <a
                        href="https://form.jotform.com/252672445341052"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                        style={{ backgroundColor: "#1AB69D" }}
                      >
                        Register Now
                        <svg
                          className="h-5 w-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>

                      <a
                        href="#contact"
                        className="mt-3 inline-flex w-full items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold text-white/90 ring-1 ring-white/25 transition-colors hover:bg-white/10"
                      >
                        Talk to us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="col-span-4 flex flex-col items-end justify-end gap-4 p-6 sm:p-10 md:p-14">
                <div
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 backdrop-blur"
                  style={{ color: "#EE4A62" }}
                >
                  💙 PERSON-CENTRED CARE
                </div>
                <div className="w-full max-w-sm rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur">
                  <p className="text-sm text-gray-700">
                    Learn to apply trauma-informed communication, safe handling, and inclusive service practices tailored to varying disabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Objective */}
      <section id="overview" className="px-4 py-10 md:py-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-wrap gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
            {["Overview", "Course Details", "Entry Requirements"].map((item) => (
              <a key={item} className="text-sm font-semibold text-gray-700" href={`#${item.toLowerCase().replace(/ /g, "-")}`}>
                {item}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#202020" }}>
                Course Overview
              </h2>
              <p className="mb-6 text-gray-600">
                This course builds a deep understanding of disability, prevalence trends, and the day-to-day realities experienced by persons with disabilities and their families. Learners will explore various disability types, respectful etiquette, and methods to safeguard dignity while assisting with mobility and communication needs. Safety protocols and self-care strategies ensure both service providers and clients feel supported.
              </p>

              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "#202020" }}>
                Course Objective
              </h3>
              <p className="mb-4 text-gray-600">
                Designed for professionals who regularly interact with persons with disabilities, the course equips participants to:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-gray-700">
                <li>Identify different disabilities and tailor communication with empathy.</li>
                <li>Support individuals while upholding respect, autonomy, and confidence.</li>
                <li>Use transport devices and mobility aids safely during escort or transfer.</li>
                <li>Apply workplace safety protocols and personal well-being practices.</li>
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#1AB69D" }}>
                  🕒 COURSE DURATION
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>
                  Training – 11 Hours (1.5 Days)
                  <br />Assessment – 1 Hour
                  <br />Total – 12 Hours
                </p>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#1AB69D" }}>
                  👩‍🏫 MODE OF TRAINING
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>
                  FACE TO FACE
                  <br />Trainer : Learner Ratio
                  <br />1 Trainer : 24 Learners
                </p>
              </div>
              
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#202020" }}>
                  ✅ WSQ COURSE
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>
                  Accreditation by Skills and Workforce Development Agency (SWDA)
                  <br />Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: "#1AB69D" }}>www.myskillsfuture.gov.sg</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section id="course-details" className="px-4 pb-4">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Learning Outcomes
          </h3>
          <p className="mt-4 text-gray-700">
            By the end of the course, learners will:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Describe disability types, prevalence, and support needs.",
              "Interact with respect and dignity across diverse disabilities.",
              "Assist safely using transport devices, wheelchairs, and mobility aids.",
              "Apply workplace safety procedures when escorting or transferring clients.",
              "Recognize stress signals and practice self-care to maintain resilience.",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should attend */}
      <section id="who-should-attend" className="px-4 py-10">
        <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 border border-indigo-100">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Who Should Attend?
          </h3>
          <p className="mt-4 text-gray-700">
            Perfect for professionals and caregivers providing daily support to persons with disabilities across home, community, and institutional settings:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Support Care Staff",
              "Social Service Workers",
              "Community Volunteers",
              "Special Needs Educators",
              "Healthcare Assistants",
              "Family & Informal Caregivers",
            ].map((role) => (
              <div key={role} className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="text-xl text-indigo-500">👥</div>
                <span className="font-medium text-gray-800 text-sm">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry requirements */}
      <section id="entry-requirements" className="px-4 pb-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Minimum Entry Requirement
          </h3>
          <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
            <li>A basic understanding of caregiving or support work in community or healthcare settings.</li>
            <li>Experience in roles related to eldercare, disability services, or personal care assistance.</li>
            <li>An interest in providing respectful and safe support to persons with disabilities.</li>
            <li>Able to read, write, and speak English at WPL Level 4</li>
          </ul>
        </div>
      </section>

      {/* OpenCerts Guide */}
                              <section className="px-4 pb-10">
                                  <div className="mx-auto max-w-7xl">
                                      <OpenCertsGuide />
                                  </div>
                              </section>

      {/* Fees table */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Course Fee
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left align-top" style={{ backgroundColor: "#E91E63", color: "#ffffff" }}>
                    <div className="font-semibold">TGS-2024050928 &mdash; Support Service to Persons with Disabilities</div>
                    <div className="mt-1 text-xs text-white/90">Course Validity Period: 13–Nov–2024 to 12–Nov–2026</div>
                  </th>
                  <th className="px-4 py-3 text-left align-top" style={{ backgroundColor: "#E91E63", color: "#ffffff" }}>
                    <div className="font-semibold">Full Course Fee</div>
                    <div className="mt-1 text-xs text-white/90">For Foreigners and those not eligible</div>
                  </th>
                  <th className="px-4 py-3 text-left align-top" style={{ backgroundColor: "#E91E63", color: "#ffffff" }}>
                    <div className="font-semibold">Singapore Citizens, PRs, LTVP+</div>
                    <div className="mt-1 text-xs text-white/90">Baseline Funding up to 50%</div>
                  </th>
                  <th className="px-4 py-3 text-left align-top" style={{ backgroundColor: "#E91E63", color: "#ffffff" }}>
                    <div className="font-semibold">SG Citizens ≥ 40 yrs</div>
                    <div className="mt-1 text-xs text-white/90">Mid-Career Enhanced Subsidy 70%</div>
                  </th>
                  <th className="px-4 py-3 text-left align-top" style={{ backgroundColor: "#E91E63", color: "#ffffff" }}>
                    <div className="font-semibold">SME Sponsored Locals</div>
                    <div className="mt-1 text-xs text-white/90">Enhanced Training Support 70%</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100" style={{ color: "#202020" }}>
                <tr>
                  <td className="px-4 py-3 font-semibold">Course Fee</td>
                  <td className="px-4 py-3">S$315.00</td>
                  <td className="px-4 py-3">S$315.00</td>
                  <td className="px-4 py-3">S$315.00</td>
                  <td className="px-4 py-3">S$315.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">With GST (9%)</td>
                  <td className="px-4 py-3">S$28.35</td>
                  <td className="px-4 py-3">S$28.35</td>
                  <td className="px-4 py-3">S$28.35</td>
                  <td className="px-4 py-3">S$28.35</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">SkillsFuture Funding</td>
                  <td className="px-4 py-3">S$0.00</td>
                  <td className="px-4 py-3">S$157.50</td>
                  <td className="px-4 py-3">S$220.50</td>
                  <td className="px-4 py-3">S$220.50</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Nett Fee Payable</td>
                  <td className="px-4 py-3 font-semibold">S$343.35</td>
                  <td className="px-4 py-3 font-semibold">S$185.85</td>
                  <td className="px-4 py-3 font-semibold">S$122.85</td>
                  <td className="px-4 py-3 font-semibold">S$122.85</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm" style={{ color: "#202020" }}>
            All Singaporeans aged 25 and above can use their S$500 SkillsFuture Credit from the government to pay for approved skills-related courses. Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: "#1AB69D" }}>MySkillsFuture</a> for details.
          </p>
        </div>
      </section>

      {/* Refund Policy */}
      <WsqRefundPolicy />

      {/* Register form section */}
      <section id="register" className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact Info */}
            <div id="contact" className="lg:col-span-4 rounded-2xl bg-[#E91E63] text-white p-8 h-fit">
              <h3 className="text-2xl font-bold mb-6">Talk to us directly</h3>
              <div className="space-y-6">
                <a href="https://wa.me/6582215143" target="_blank" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
                  <FaWhatsapp className="text-2xl" />
                  <div>
                    <div className="font-semibold">Whatsapp Us</div>
                    <div className="text-sm opacity-90">Get instant answers</div>
                  </div>
                </a>
                <a href="tel:+6582215143" className="flex items-around gap-4 hover:opacity-90 transition-opacity">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold">+65 8221 5143</div>
                    <div className="text-sm opacity-90">Call our roadmap consultants</div>
                  </div>
                </a>
                <a href="https://maps.google.com" target="_blank" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold">Find us on Google Maps</div>
                    <div className="text-sm opacity-90">Visit our campus</div>
                  </div>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-3">We can help you with:</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Understanding the available subsidies</li>
                  <li>• Clarifying course details (Assessment, Schedule etc.)</li>
                  <li>• Finding out if this course suits your goals</li>
                  <li>• Checking if you are eligible for the course</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
