import Image from "next/image";
import WsqContactForm from "../../components/wsq_contactform";

// Brand Colors:
// Primary: #1AB69D
// Secondary: #EE4A62
// Text: #202020

export default function FlexibleWorkPracticesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/wsq-images/WsqCoursePageHero.png"
                alt="Workplace Optimization through Flexible Work Practices"
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
                  TGS-2024049950
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Maximizing Performance: Workplace Optimization through Flexible Work Practices
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
                  Build the capabilities to design, evaluate, and optimize flexible work environments that uplift productivity, employee satisfaction, and business outcomes.
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="rounded-2xl bg-white/90 px-4 py-3 text-left shadow-sm ring-1 ring-black/5 backdrop-blur">
                    <div style={{ color: "#1AB69D" }} className="font-semibold">
                      Workplace Strategy
                    </div>
                    <div style={{ color: "#202020" }} className="text-xs">
                      Expert Led
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
                  ⚙️ FLEX WORK BLUEPRINT
                </div>
                <div className="rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur">
                  <p className="text-sm text-gray-700">
                    Learn to align infrastructure, policies, and culture so your teams thrive in flexible workplaces.
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
                The “Maximizing Performance: Workplace Optimization through Flexible Work Practices” course equips professionals with the frameworks, playbooks, and tools to implement future-ready flexible work arrangements (FWAs). Participants will evaluate workplace environments, adopt best practices for hybrid workspaces, and optimize infrastructure to improve operational efficiency, employee experience, and business productivity.
              </p>

              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "#202020" }}>
                Course Objective
              </h3>
              <p className="mb-4 text-gray-600">
                This course aims to equip learners with the knowledge and skills needed to:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-gray-700">
                <li>Assess and optimize workplace environments to support flexible work arrangements.</li>
                <li>Apply best practices in designing and managing office workspaces.</li>
                <li>Develop budgeting strategies to optimize workplace resources.</li>
                <li>Identify key performance indicators (KPIs) for workforce effectiveness and productivity.</li>
                <li>Establish workplace enhancement initiatives that support flexible work arrangements.</li>
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
                <div className="mb-2 font-semibold" style={{ color: "#1AB69D" }}>
                  🕒 COURSE DURATION
                </div>
                <p className="text-sm" style={{ color: "#202020" }}>
                  Training – 15 Hours (2 Days)
                  <br />Assessment – 50 mins
                  <br />Total – 15 Hours 50 mins
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
                <p className="text-sm" style={{ color: "#202020" }}>S$900/- NETT (BEFORE FUNDING)</p>
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
            Upon completing the course, learners will be able to:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Identify key indicators that determine workplace environment effectiveness.",
              "Evaluate the effectiveness of current physical work environments in supporting flexible work arrangements.",
              "Apply best practices in office workspace design and layout.",
              "Develop innovative strategies to enhance operational efficiency and effectiveness.",
              "Describe budgeting processes and techniques for managing workplace infrastructure.",
              "Establish initiatives to enhance the workplace environment for flexible work arrangements.",
              "Identify KPIs of FWAs on workforce effectiveness.",
              "Assess feasibility of improvements to HR policies, workplace environment, and infrastructure."
            ].map((item) => (
              <div key={item} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section id="who-should-attend" className="px-4 py-10">
        <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 border border-indigo-100">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#202020" }}>
            Who Should Attend?
          </h3>
          <p className="mt-4 text-gray-700">
            This course is suitable for HR professionals, workplace strategists, and leaders responsible for workplace policies, productivity, and employee engagement.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "HR Professionals & Managers",
              "Business Leaders & Executives",
              "Operations & Administrative Professionals",
              "Entrepreneurs & Small Business Owners",
              "Project Managers",
              "Employee Experience Specialists"
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
            <li><strong>HR Professionals:</strong> HR Managers, HR Executives, HR Business Partners</li>
            <li><strong>Workplace & Office Administrators:</strong> Office Managers, Facilities Managers</li>
            <li><strong>Business Leaders & Executives:</strong> CEOs, COOs, General Managers</li>
            <li><strong>Operations & Strategy Professionals:</strong> Operations Managers, Strategy Consultants</li>
            <li><strong>Project Managers:</strong> Workplace & workforce transformation leads</li>
            <li><strong>Entrepreneurs & Business Owners:</strong> Managers of hybrid or remote teams</li>
            <li><strong>Employee Experience Specialists:</strong> Engagement & productivity leads</li>
            <li><strong>Talent & Workforce Planning:</strong> Recruiters implementing FWA policies</li>
            <li><strong>IT & Digital Workplace Specialists:</strong> Managers of remote collaboration tools</li>
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
            <li>A basic understanding of workplace policies and management.</li>
            <li>Experience in HR, administration, or operational roles is helpful.</li>
            <li>An interest in workplace optimization and employee engagement strategies.</li>
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
                    <div className="font-semibold">Nett Fee after SSG’s Course Fee Funding</div>
                    <div className="mt-1 text-xs text-white/90">Funding Validity Period: 25–Oct–2024 to 23–Oct–2026</div>
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
                  <td className="px-4 py-3">S$900.00</td>
                  <td className="px-4 py-3">S$900.00</td>
                  <td className="px-4 py-3">S$900.00</td>
                  <td className="px-4 py-3">S$900.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">With GST (9%)</td>
                  <td className="px-4 py-3">S$81.00</td>
                  <td className="px-4 py-3">S$81.00</td>
                  <td className="px-4 py-3">S$81.00</td>
                  <td className="px-4 py-3">S$81.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">SkillsFuture Funding</td>
                  <td className="px-4 py-3">S$0.00</td>
                  <td className="px-4 py-3">S$450.00</td>
                  <td className="px-4 py-3">S$630.00</td>
                  <td className="px-4 py-3">S$630.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Nett Fee Payable</td>
                  <td className="px-4 py-3 font-semibold">S$981.00</td>
                  <td className="px-4 py-3 font-semibold">S$531.00</td>
                  <td className="px-4 py-3 font-semibold">S$351.00</td>
                  <td className="px-4 py-3 font-semibold">S$351.00</td>
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
