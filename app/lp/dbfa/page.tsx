import type { Metadata } from "next";
import Image from "next/image";
import Countdown from "./Countdown";
import LeadWizard from "./LeadWizard";
import StickyBar from "./StickyBar";
import {
  CAREERS,
  COUNSELLORS,
  COURSE_TITLE,
  FEES,
  INTAKE,
  MODULES,
  PRIMARY_COUNSELLOR,
  REQUIREMENTS,
  SEATS,
  whatsappLink,
} from "./campaign";

export const metadata: Metadata = {
  title: `${COURSE_TITLE} — Diwali Offer | Edusphere College`,
  description: `Part-time Diploma in Business Finance & Accounting in Singapore. Online class available — live classes every Tuesday 7–10pm for 12 months. S$${FEES.monthly}/month, free registration this Diwali. Intake starts ${INTAKE.startLabel}.`,
};

const HIGHLIGHTS = [
  { label: "Classes", value: INTAKE.dayLabel, hint: INTAKE.timeLabel },
  { label: "Duration", value: INTAKE.durationLabel, hint: `${INTAKE.contactHours} contact time` },
  { label: "Study mode", value: INTAKE.studyMode, hint: "Keep working while you study" },
  { label: "Delivery", value: INTAKE.deliveryLabel, hint: INTAKE.teachingMode },
];

const INCLUDED = [
  "Online class available — attend live from home, no travel to campus",
  "All course books included — no hidden material fees",
  "Interest-free monthly instalments over 12 months",
  "Hands-on training in accounting software and Excel",
  "Diploma awarded by Edusphere College of Management and Technology Pte Ltd",
];

const seatsTakenPercent = Math.round(
  ((SEATS.total - SEATS.remaining) / SEATS.total) * 100,
);

export default function DbfaLandingPage() {
  const heroWaText = `Hi ${PRIMARY_COUNSELLOR.name}, I'd like details on the ${COURSE_TITLE} starting ${INTAKE.startLabel}.`;

  return (
    <div className="bg-white pb-24">
      {/* Logo band */}
      <header className="bg-white py-4 sm:py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
          <Image
            src="/brand/logo.png"
            alt="Edusphere College of Management and Technology"
            width={420}
            height={90}
            priority
            className="h-auto w-[200px] sm:w-[300px] lg:w-[400px]"
          />
          <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:mt-3 sm:text-[11px]">
            Part-Time Diplomas · Singapore
          </p>
        </div>
      </header>

      {/* Hero + form */}
      <section className="relative overflow-hidden bg-[#09302a]">
        {/* The photo is 16:9. Covering the whole hero works on desktop, but the
            mobile hero is tall and narrow, which crops it to a ~17%-wide slice
            (a zoomed face). So on mobile it occupies a band behind the headline
            at close to its own aspect ratio, then fades into the hero colour. */}
        <div className="absolute inset-x-0 top-0 h-[360px] lg:h-full">
          <Image
            src="/lp_images/dbfa-lp.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_30%] lg:object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09302a]/80 via-[#09302a]/80 to-[#09302a] lg:bg-gradient-to-r lg:from-[#09302a]/95 lg:via-[#09302a]/78 lg:to-[#09302a]/55" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EE4A62]/25 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-7 lg:grid lg:grid-cols-[1.05fr_440px] lg:items-start lg:gap-x-14 lg:gap-y-8">
            {/* Headline — first on every screen */}
            <div className="order-1 text-white lg:col-start-1 lg:row-start-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-200 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-amber-950">
                  🪔 Diwali · Free Registration
                </span>
                <span className="inline-flex items-center rounded-full bg-[#EE4A62] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white">
                  New intake
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[#09302a] ring-2 ring-[#5fe3cb]">
                  <svg className="h-3.5 w-3.5 text-[#1AB69D]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Online Class Available
                </span>
              </div>

              <h1 className="mt-4 text-[28px] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Diploma in{" "}
                <span className="bg-gradient-to-r from-[#5fe3cb] to-[#1AB69D] bg-clip-text text-transparent">
                  Business Finance &amp; Accounting
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-[15px] leading-6 text-white/75 sm:mt-4 sm:text-lg sm:leading-7">
                Become finance-ready in 12 months — one evening a week. Bookkeeping, reporting,
                payroll and accounting software, taught the way employers use them.
              </p>
            </div>

            {/* Form — second on mobile so it is reachable without scrolling the
                whole pitch; right-hand column on desktop. */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-6">
              <LeadWizard />
            </div>

            {/* Proof and urgency — below the form on mobile, under the headline
                on desktop. */}
            <div className="order-3 text-white lg:col-start-1 lg:row-start-2">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { title: "S$109", sub: "per month · 12 months" },
                  { title: "1 evening", sub: "a week · live online" },
                  { title: "186 hours", sub: "practical contact time" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/10 px-3 py-3 ring-1 ring-white/15 backdrop-blur-sm sm:px-4"
                  >
                    <div className="text-base font-bold text-white sm:text-xl">{item.title}</div>
                    <div className="mt-0.5 text-[11px] leading-4 text-white/60 sm:text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>

              {/* Urgency */}
              <div className="mt-6 rounded-2xl bg-black/25 p-4 ring-1 ring-white/10 sm:mt-8 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Intake closes when seats run out
                </p>
                <div className="mt-3">
                  <Countdown tone="dark" />
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-semibold text-white/70">
                    <span>
                      Only{" "}
                      <span className="text-[#ff8f9f]">{SEATS.remaining} of {SEATS.total} seats</span>{" "}
                      left
                    </span>
                    <span>Starts {INTAKE.startLabel}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#EE4A62] to-amber-400"
                      style={{ width: `${seatsTakenPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink(PRIMARY_COUNSELLOR.wa, heroWaText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                >
                  Or WhatsApp {PRIMARY_COUNSELLOR.name} on {PRIMARY_COUNSELLOR.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees / offer */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">What it costs</h2>
              <p className="mt-1.5 text-sm text-gray-500">
                All-inclusive. No exam fees, no book fees.
              </p>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-gray-600">Course fee</dt>
                  <dd className="font-semibold text-gray-900">S$ {FEES.courseFee.toLocaleString()}.00</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-gray-600">GST (9%)</dt>
                  <dd className="font-semibold text-gray-900">S$ {FEES.gst}.00</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-gray-200 pt-3">
                  <dt className="font-bold text-gray-900">Total fees payable</dt>
                  <dd className="text-lg font-bold text-gray-900">
                    S$ {FEES.total.toLocaleString()}.00
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-gray-600">Registration fee</dt>
                  <dd className="text-right">
                    <span className="mr-2 text-gray-400 line-through">S$ {FEES.registrationFee}</span>
                    <span className="font-bold text-[#1AB69D]">FREE</span>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-amber-50 to-white p-5 ring-1 ring-amber-200">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Monthly instalment
                </p>
                <p className="mt-1 text-3xl font-bold text-gray-900">
                  S$ {FEES.monthly}
                  <span className="ml-1 text-base font-semibold text-gray-500">
                    / month × {FEES.months}
                  </span>
                </p>
                <p className="mt-2 text-xs leading-5 text-amber-800">
                  🪔 Diwali offer: registration fee waived — you save S$ {FEES.registrationFee}.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">What&apos;s included</h2>
              <ul className="mt-6 space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1AB69D]/10">
                      <svg className="h-3 w-3 text-[#1AB69D]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-6 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-900">{item.value}</p>
                    <p className="mt-0.5 text-xs leading-5 text-gray-500">{item.hint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-sm ring-1 ring-gray-900/5">
              <Image
                src="/homepage/pexels-mikhail-nilov-8101931-1024x683.jpg.jpeg"
                alt="Finance team reviewing figures and reports around a meeting table"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                What you need to apply
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Three documents, that&apos;s it. Applicants must be at least 18 years old. Mature
                candidates without O-levels can qualify on working experience — ask your
                counsellor.
              </p>

              <div className="mt-7 space-y-3">
                {REQUIREMENTS.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-[#1AB69D]/50 hover:shadow-sm"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1AB69D] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{item.label}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-gray-500">{item.hint}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Six modules. 186 hours. All practical.
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Each module is assessed by written examination or coursework. 75% attendance and a
              pass in every module are required to graduate.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => (
              <div
                key={module.code}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-900/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wide text-[#1AB69D]">
                    {module.code}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                    {module.hours} hrs
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold leading-6 text-gray-900">{module.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm ring-1 ring-gray-900/5 lg:order-last">
            <Image
              src="/homepage/dbfa-cover.jpg"
              alt="Business finance professionals with performance charts and growth figures"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Where graduates go next
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            The diploma opens accounting and finance roles across Singapore&apos;s SMEs,
            corporates and shared-service centres.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {CAREERS.map((career) => (
              <span
                key={career}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {career}
              </span>
            ))}
            <span className="rounded-full bg-[#1AB69D]/10 px-4 py-2 text-sm font-semibold text-[#1AB69D]">
              and more
            </span>
          </div>
          </div>
        </div>
      </section>

      {/* Counsellors + final CTA */}
      <section className="bg-[#09302a] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Still deciding? Talk to a counsellor.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                Ask about instalments, eligibility if you don&apos;t have O-levels, or whether this
                diploma fits your work pass. No obligation.
              </p>
              <a
                href="#apply"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#EE4A62] px-7 py-4 text-base font-bold text-white transition hover:bg-[#d93d54]"
              >
                Reserve my seat
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                </svg>
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {COUNSELLORS.map((counsellor) => (
                <a
                  key={counsellor.wa}
                  href={whatsappLink(
                    counsellor.wa,
                    `Hi ${counsellor.name}, I have a question about the ${COURSE_TITLE}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#5fe3cb]">
                    Student counsellor
                  </p>
                  <p className="mt-1.5 text-lg font-bold text-white">{counsellor.name}</p>
                  <p className="mt-0.5 text-sm text-white/70">{counsellor.phone}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366]">
                    Message on WhatsApp
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                    </svg>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimal legal strip — the global footer is intentionally not rendered here */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-xs leading-6 text-gray-500">
            Edusphere College of Management and Technology Pte Ltd · 7500A Beach Road, #05-312 The
            Plaza, Singapore 199591
          </p>
          <p className="mt-2 text-xs leading-6 text-gray-400">
            Fees shown include GST and are valid for the {INTAKE.startLabel} intake. The Diwali
            registration waiver applies while seats remain. Standard withdrawal, transfer and
            refund policies apply.
          </p>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
}
