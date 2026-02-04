import Image from "next/image";
import WsqContactForm from "../../components/wsq_contactform";

// Brand Colors:
// Primary: #1AB69D
// Secondary: #EE4A62
// Text: #202020

export default function NavigatingServiceChallengesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/wsq-images/WSQ-_Navigating-Service-Challenges_-Level-1.webp"
                alt="Navigating Service Challenges"
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
                  TGS-2024042314
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Navigating Service Challenges
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
                  Master service recovery playbooks, communication tactics, and escalation frameworks to turn difficult interactions into loyalty-building opportunities.
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="rounded-2xl bg-white/90 px-4 py-3 text-left shadow-sm ring-1 ring-black/5 backdrop-blur">
                    <div style={{ color: "#1AB69D" }} className="font-semibold">
                      Service Recovery
                    </div>
                    <div style={{ color: "#202020" }} className="text-xs">
                      Expert Facilitators
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

                {/* CTA */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#register"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg"
                    style={{ backgroundColor: "#1AB69D" }}
                  >
                    Register Now
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/40"
                  >
                    Talk to us
                  </a>
                </div>
              </div>

              {/* Right sidebar */}
              <div className="col-span-4 flex flex-col gap-4 p-6 sm:p-10 md:p-14">
                <div
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 backdrop-blur"
                  style={{ color: "#EE4A62" }}
                >
                  🛟 SERVICE EXCELLENCE
                </div>
                <div className="rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur">
                  <p className="text-sm text-gray-700">
                    Learn how to stay calm under pressure, apply rapid recovery protocols, and rebuild customer trust with confidence.
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
                The Navigating Service Challenges course equips service professionals with actionable frameworks to manage challenging customer interactions. Participants will diagnose service triggers, apply structured recovery procedures, and leverage escalation paths to protect brand trust and satisfaction.
              </p>

              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "#202020" }}>
                Course Objective
              </h3>
              <p className="mb-4 text-gray-600">
                By the end of this course, participants will:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-gray-700">
                <li>Recognize service-environment triggers that lead to customer dissatisfaction.</li>
                <li>Apply end-to-end service recovery procedures to resolve issues efficiently.</li>
                <li>Escalate unresolved challenges through the appropriate chain of command.</li>
                <li>Communicate with confidence during high-pressure customer interactions.</li>
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#1AB69D" }}>
                  🕒 COURSE DURATION
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>
                  Training – 7 Hours
                  <br />Assessment – 40 mins
                  <br />Total – 7 Hours 40 mins
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
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#EE4A62" }}>
                  💳 COURSE FEE
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>S$210/- NETT (BEFORE FUNDING)</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#202020" }}>
                  ✅ WSQ COURSE
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>
                  Accreditation by SkillsFuture Singapore (SSG)
                  <br />Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: "#1AB69D" }}>www.myskillsfuture.gov.sg</a>
                </p>
              </div>
              <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold text-indigo-700">👔 ATTIRE</div>
                <p className="text-sm text-gray-700">Business casual or formal attire is recommended for professional training sessions.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Learning outcomes */}
      <section id="course-details" className="px-4 pb-4">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Learning Outcomes
          </h3>
          <p className="mt-4 text-gray-700">
            Upon successful completion of this course, learners will be able to:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Identify factors in the service environment that could result in service difficulties.",
              "Apply service recovery protocols to resolve customer challenges.",
              "Escalate unresolved service issues following company procedures.",
              "Define effective communication principles to strengthen service recovery.",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods of learning */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Methods of Learning
          </h3>
          <p className="mt-3 text-gray-700">Experience an interactive blend of theory and practice through:</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Lectures & Case Studies – unpacking service excellence frameworks.",
              "Group Discussions & Activities – collaborative problem solving.",
              "Role-Playing & Simulations – practicing real-world recovery scenarios.",
              "Classroom-Based Exercises – reinforcing procedures through application.",
            ].map((method) => (
              <div key={method} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-700">
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who should attend */}
      <section id="who-should-attend" className="px-4 pb-10">
        <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 border border-indigo-100">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Who Should Attend?
          </h3>
          <p className="mt-4 text-gray-700">
            Ideal for professionals who engage customers daily and must maintain service excellence under pressure:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Frontline Customer Service Professionals",
              "Call Center & Helpdesk Representatives",
              "Guest Relations Officers",
              "Sales & Marketing Executives",
              "Supervisors & Team Leaders",
              "Service Recovery Specialists",
            ].map((role) => (
              <div key={role} className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="text-xl text-indigo-500">👥</div>
                <span className="font-medium text-gray-800 text-sm">{role}</span>
              </div>
            ))}
          </div>

          <h4 className="mt-8 text-lg font-semibold" style={{ color: "#202020" }}>
            Relevant Job Roles
          </h4>
          <ul className="mt-3 grid gap-2 text-sm text-gray-700 md:grid-cols-2 list-disc pl-5">
            <li><strong>Customer Service Representatives:</strong> Retail, hospitality, banking, and e-commerce.</li>
            <li><strong>Call Center & Helpdesk Agents:</strong> Managing queries and complaints.</li>
            <li><strong>Guest Relations Officers:</strong> Elevating onsite experiences.</li>
            <li><strong>Sales & Business Development Executives:</strong> Safeguarding client relationships.</li>
            <li><strong>Service Recovery Specialists:</strong> Handling escalations and complex cases.</li>
            <li><strong>Supervisors & Managers:</strong> Leading teams to deliver consistent service excellence.</li>
          </ul>
        </div>
      </section>

      {/* Entry requirements */}
      <section id="entry-requirements" className="px-4 pb-10">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Minimum Entry Requirement
          </h3>
          <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
            <li>No prior experience is required.</li>
            <li>Suitable for professionals working in customer service or those building service management skills.</li>
          </ul>
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
                    <div className="font-semibold">TGS-2024042314 &mdash; Navigating Service Challenges</div>
                    <div className="mt-1 text-xs text-white/90">Funding Validity Period: 19–Feb–2024 to 18–Feb–2026</div>
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
                  <td className="px-4 py-3">S$210.00</td>
                  <td className="px-4 py-3">S$210.00</td>
                  <td className="px-4 py-3">S$210.00</td>
                  <td className="px-4 py-3">S$210.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">With GST (9%)</td>
                  <td className="px-4 py-3">S$18.90</td>
                  <td className="px-4 py-3">S$18.90</td>
                  <td className="px-4 py-3">S$18.90</td>
                  <td className="px-4 py-3">S$18.90</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">SkillsFuture Funding</td>
                  <td className="px-4 py-3">S$0.00</td>
                  <td className="px-4 py-3">S$105.00</td>
                  <td className="px-4 py-3">S$63.00</td>
                  <td className="px-4 py-3">S$63.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Nett Fee Payable</td>
                  <td className="px-4 py-3 font-semibold">S$228.90</td>
                  <td className="px-4 py-3 font-semibold">S$123.90</td>
                  <td className="px-4 py-3 font-semibold">S$81.90</td>
                  <td className="px-4 py-3 font-semibold">S$81.90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm" style={{ color: "#202020" }}>
            All Singaporeans aged 25 and above can use their S$500 SkillsFuture Credit from the government to pay for approved skills-related courses. Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: "#1AB69D" }}>MySkillsFuture</a> for details.
          </p>
        </div>
      </section>

      {/* Register form section */}
      <section id="register" className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact Info */}
            <div id="contact" className="lg:col-span-4 rounded-2xl bg-[#E91E63] text-white p-8 h-fit">
              <h3 className="text-2xl font-bold mb-6">Talk to us directly</h3>
              <div className="space-y-6">
                <a href="https://wa.me/6582215143" target="_blank" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="font-semibold">Whatsapp Us</div>
                    <div className="text-sm opacity-90">Get instant answers</div>
                  </div>
                </a>
                <a href="tel:+6582215143" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
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
              <WsqContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
