import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import CourseExplorer from "./CourseExplorer";
import GraduationVideo from "./GraduationVideo";
import heroEng from "./hero_eng.png";
import heroEngMb from "./hero_eng_mb.png";
import LeadModal from "./LeadModal";
import { WhatsAppIcon } from "./icons";
import OpenFormButton from "./OpenFormButton";
import { OfferClock, OfferTiles, WhileOfferActive } from "./OfferTimer";
import StickyBar from "./StickyBar";
import {
  CAMPAIGN_TITLE,
  CAMPUS_ADDRESS,
  CONTACT,
  COURSES,
  GST_NOTE,
  LOWEST_MONTHLY,
  OFFER,
  SCHEDULE,
  cheapestFee,
  formatMoney,
  monthlyLabel,
  whatsappLink,
  type Course,
} from "./campaign";

export const metadata: Metadata = {
  title: `${CAMPAIGN_TITLE} in Singapore — Free Registration | Edusphere College`,
  description: `Part-time Civil, M&E and Project Coordinator diplomas (DCE, DME, ADME, ADPC) with weekend classes in Singapore. From S$${LOWEST_MONTHLY}/month. Free registration for a limited time.`,
};

const WA_TEXT =
  "Hi, I'm interested in your part-time engineering diplomas (DCE / DME / ADME / ADPC). Could you share the next intake and fees?";

// Hero photo, art-directed: portrait below 1024px, landscape above.
const HERO_IMAGE_BASE = { alt: "", fill: true, fetchPriority: "high", loading: "eager" } as const;
const heroDesktop = getImageProps({ ...HERO_IMAGE_BASE, src: heroEng, sizes: "60vw" }).props;
const { srcSet: heroMobileSrcSet, ...heroMobileRest } = getImageProps({
  ...HERO_IMAGE_BASE,
  src: heroEngMb,
  sizes: "100vw",
}).props;
const heroMobile = { srcSet: heroMobileSrcSet, rest: heroMobileRest };

const PRIMARY_CTA =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#EE4A62] px-6 py-4 text-base font-semibold text-white shadow-sm shadow-[#EE4A62]/20 transition hover:bg-[#d93d54]";

const REASONS = [
  {
    title: "Weekend classes",
    body: `${SCHEDULE.days}, ${SCHEDULE.hoursPerWeek} hours a week. Choose ${SCHEDULE.slots.join(", ")}.`,
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Keep your job",
    body: "Built for working adults. Work Permit, S Pass, EP, PR and Citizens are all welcome to apply.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Pay monthly",
    body: `Interest-free instalments from S$${LOWEST_MONTHLY} a month. No exam or book fees on top.`,
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Clear progression",
    body: "Start with DCE or DME, then upgrade to ADME or ADPC for supervisory and coordination roles.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

export default function EngineeringLandingPage() {
  return (
    <div className="bg-white pb-24 text-gray-900">
      {/* Offer ribbon */}
      <div className="bg-gray-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-xs sm:text-sm">
          <WhileOfferActive
            expired={<span className="text-white/80">New weekend intakes open for all four engineering courses</span>}
          >
            <span className="font-medium text-white/80">
              Free registration (save S${OFFER.registrationFee}) ends in
            </span>
            <OfferClock className="font-semibold text-[#ff8f9f]" />
          </WhileOfferActive>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Image
            src="/brand/logo.png"
            alt="Edusphere College of Management and Technology"
            width={420}
            height={90}
            priority
            className="h-auto w-[170px] sm:w-[230px]"
          />
          <a
            href={whatsappLink(WA_TEXT)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gray-200 px-3.5 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span className="hidden sm:inline">{CONTACT.phone}</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* One <picture> art-directs the photo: portrait on phones and tablets,
            landscape on desktop, so each device downloads a single image.
            Mobile: full-bleed at the top, headline over the sky, fading to
            white at the bottom where the rest of the copy sits.
            Desktop: right 60%, fading into white behind the copy. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 aspect-[941/1450] sm:aspect-square lg:inset-y-0 lg:left-auto lg:right-0 lg:aspect-auto lg:w-[60%]"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroDesktop.srcSet} sizes="60vw" />
            <source srcSet={heroMobile.srcSet} sizes="100vw" />
            <img
              {...heroMobile.rest}
              alt=""
              className="object-cover object-[50%_0%] sm:object-[50%_15%] lg:object-[22%_30%]"
            />
          </picture>
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-transparent lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] sm:h-[30%] bg-gradient-to-t from-white from-25% via-white/85 via-55% to-transparent lg:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-white via-white/70 to-transparent lg:block" />
        </div>

        <div className="relative mx-auto max-w-6xl lg:px-4 lg:pb-20 lg:pt-20">
          <div className="lg:max-w-xl">
            {/* On mobile this box reserves the photo's height; the headline
                sits at its top, over the sky. */}
            <div className="aspect-[941/1450] px-4 pt-5 sm:aspect-square sm:pt-12 lg:aspect-auto lg:px-0 lg:pt-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm lg:border-gray-200 lg:bg-white lg:text-gray-600 lg:backdrop-blur-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5fe3cb] lg:bg-[#1AB69D]" aria-hidden="true" />
                Part-time · Weekend classes · Singapore
              </p>
              <h1 className="mt-3 text-[28px] font-semibold leading-[1.1] tracking-tight [text-wrap:balance] min-[400px]:text-[31px] text-white [text-shadow:0_2px_18px_rgba(2,6,23,0.35)] sm:mt-5 sm:text-5xl lg:text-[56px] lg:[text-wrap:wrap] lg:text-gray-900 lg:[text-shadow:none]">
                Engineering diplomas that fit around your work.
              </h1>
            </div>

            <div className="relative -mt-36 px-4 pb-12 sm:-mt-32 lg:mt-4 lg:px-0 lg:pb-0">
            <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 lg:text-gray-600">
              Civil, M&amp;E and Project Coordination — four career-focused programmes, taught on
              weekends at our Beach Road campus, paid monthly.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <OpenFormButton placement="hero" className={PRIMARY_CTA}>
                Claim free registration
                <Arrow />
              </OpenFormButton>
              <a
                href="#compare"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-4 text-base font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
              >
                Compare the 4 courses
              </a>
            </div>

            <WhileOfferActive>
              <div className="mt-7 inline-flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/90 p-4 backdrop-blur sm:flex-row sm:items-center sm:gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EE4A62]">
                    Free registration
                  </p>
                  <p className="mt-0.5 text-sm text-gray-600">
                    <span className="text-gray-400 line-through">S${OFFER.registrationFee}</span>{" "}
                    <span className="font-semibold text-gray-900">S$0</span> · ends in
                  </p>
                </div>
                <OfferTiles size="sm" />
              </div>
            </WhileOfferActive>
            </div>
          </div>
        </div>
      </section>

      {/* Course quick-pick */}
      <section className="border-y border-gray-100 bg-gray-50/70">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 lg:grid-cols-4">
          {COURSES.map((course) => (
            <OpenFormButton
              key={course.id}
              courseId={course.id}
              placement="quick_pick"
              className="group px-2 py-6 text-left transition sm:px-5"
            >
              <span className="text-xs font-semibold tracking-wide text-[#1AB69D]">{course.code}</span>
              <span className="mt-1 block text-sm font-semibold leading-snug text-gray-900 sm:text-base">
                {course.shortTitle}
              </span>
              <span className="mt-1 block text-xs text-gray-500">
                {course.durationMonths} months · {monthlyLabel(course)}/mo
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#EE4A62] opacity-80 transition group-hover:gap-1.5 group-hover:opacity-100">
                Apply <Arrow className="h-3.5 w-3.5" />
              </span>
            </OpenFormButton>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-4 text-[11px] text-gray-400 sm:px-9">{GST_NOTE}</p>
      </section>

      {/* Course explorer */}
      <section id="courses" className="scroll-mt-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="The programmes"
            title="Explore each course"
            body="Modules, intake dates, entry requirements and full fees — everything you need to decide."
          />
          <div className="mt-10">
            <CourseExplorer />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="scroll-mt-4 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Side by side"
            title="Which course is right for you?"
            body="Diplomas build the foundation. Advanced Diplomas take you into supervisory and coordination roles."
          />

          {/* Desktop table */}
          <div className="mt-10 hidden overflow-hidden rounded-3xl border border-gray-200 bg-white lg:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th scope="col" className="w-[19%] px-6 py-5 text-xs font-medium uppercase tracking-wider text-gray-400" />
                  {COURSES.map((course) => (
                    <th key={course.id} scope="col" className="px-6 py-5 align-top">
                      <span className="block text-xs font-semibold tracking-wide text-[#1AB69D]">{course.code}</span>
                      <span className="mt-1 block text-base font-semibold leading-snug text-gray-900">
                        {course.shortTitle}
                      </span>
                      <span className="mt-0.5 block text-xs font-normal text-gray-500">{course.level}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <CompareRow label="Best for" cells={COURSES.map((c) => c.bestFor)} />
                <CompareRow label="Duration" cells={COURSES.map((c) => `${c.durationMonths} months · ${c.hours} hrs`)} />
                <CompareRow label="Next intake" cells={COURSES.map((c) => c.nextIntake ?? "Opening soon")} />
                <CompareRow label="Minimum age" cells={COURSES.map((c) => `${c.minAge}`)} />
                <CompareRow label="Total fee (incl. GST)" cells={COURSES.map(totalLabel)} />
                <CompareRow
                  label="Monthly (incl. GST)"
                  strong
                  cells={COURSES.map((c) => `${monthlyLabel(c)} × ${cheapestFee(c).months}`)}
                />
                <tr>
                  <th scope="row" className="px-6 py-5" />
                  {COURSES.map((course) => (
                    <td key={course.id} className="px-6 py-5">
                      <OpenFormButton
                        courseId={course.id}
                        placement="compare_table"
                        className="w-full rounded-xl border border-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                      >
                        Apply for {course.code}
                      </OpenFormButton>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 hidden text-xs text-gray-500 lg:block">{GST_NOTE}</p>

          {/* Mobile cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
            {COURSES.map((course) => (
              <div key={course.id} className="rounded-3xl border border-gray-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold tracking-wide text-[#1AB69D]">{course.code}</span>
                    <h3 className="mt-0.5 text-lg font-semibold leading-snug">{course.shortTitle}</h3>
                    <p className="text-xs text-gray-500">{course.level}</p>
                  </div>
                  <p className="shrink-0 text-right">
                    <span className="block text-xl font-semibold">{monthlyLabel(course)}</span>
                    <span className="text-xs text-gray-500">/ month × {cheapestFee(course).months}</span>
                    <span className="block text-[11px] text-gray-400">incl. 9% GST</span>
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{course.bestFor}</p>
                <dl className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <MiniStat label="Duration" value={`${course.durationMonths} mo`} />
                  <MiniStat label="Min. age" value={`${course.minAge}`} />
                  <MiniStat label={course.fees.length > 1 ? "Total from" : "Total"} value={`S$${formatMoney(cheapestFee(course).total)}`} />
                </dl>
                <p className="mt-3 text-xs text-gray-500">
                  Next intake: <span className="font-medium text-gray-800">{course.nextIntake ?? "Opening soon"}</span>
                </p>
                <OpenFormButton
                  courseId={course.id}
                  placement="compare_card"
                  className="mt-4 w-full rounded-xl border border-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                >
                  Apply for {course.code}
                </OpenFormButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why study here */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Designed for working adults" title="Study without stopping work" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((reason) => (
              <div key={reason.title} className="rounded-3xl border border-gray-200 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1AB69D]/10 text-[#1AB69D]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={reason.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 text-base font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation + campus */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Edusphere College"
            title="Join our graduates"
            body={`Classes run at our campus in the heart of the city — ${CAMPUS_ADDRESS}.`}
          />
          <div className="mt-10 grid gap-4 lg:h-[480px] lg:grid-cols-3 lg:grid-rows-2">
            <GraduationVideo />
            <figure className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:aspect-auto">
              <Image
                src="https://qgmpiaxddyshkureyanw.supabase.co/storage/v1/object/public/event-photos/36c24891-6012-4ca2-b29a-0528fcb8ca8e/1792473087513-ly4tf1k575.jpg"
                alt="Edusphere College graduands seated together at the Graduation Ceremony 2026"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-12 text-sm font-medium text-white">
                Class of 2026
              </figcaption>
            </figure>
            <figure className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:aspect-auto">
              <Image
                src="https://qgmpiaxddyshkureyanw.supabase.co/storage/v1/object/public/event-photos/04985602-65de-4901-92af-19c512da46bb/1789191888969-ht82oefg4v9.jpeg"
                alt="Edusphere College engineering students at the Occupational Safety and Health Expo, Marina Bay Sands"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-12 text-sm font-medium text-white">
                Safety expo, Marina Bay Sands
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[32px] border border-gray-200 bg-gradient-to-br from-white to-[#f3fbf9] px-6 py-10 text-center sm:px-12 sm:py-14">
            <WhileOfferActive
              expired={
                <>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to start?</h2>
                  <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-gray-600">
                    Apply in under a minute and a counsellor will confirm your intake.
                  </p>
                </>
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#EE4A62]">
                Your free registration is reserved for
              </p>
              <div className="mt-4 flex justify-center">
                <OfferTiles />
              </div>
              <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                Save S${OFFER.registrationFee} — apply today
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-gray-600">
                Takes under a minute. A counsellor will confirm your intake, eligibility and
                instalment plan.
              </p>
            </WhileOfferActive>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <OpenFormButton placement="final_cta" className={PRIMARY_CTA}>
                Claim free registration
                <Arrow />
              </OpenFormButton>
              <a
                href={whatsappLink(WA_TEXT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 text-base font-semibold text-gray-800 transition hover:border-gray-300"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal legal strip — the global footer is intentionally not rendered here */}
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-xs leading-6 text-gray-500">
            Edusphere College of Management and Technology Pte Ltd · {CAMPUS_ADDRESS}
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-xs leading-6 text-gray-400">
            Fees include 9% GST. The S${OFFER.registrationFee} registration fee is waived for
            applications submitted within 24 hours of your first visit to this page. Intake dates
            are subject to class confirmation. Standard withdrawal, transfer and refund policies
            apply.
          </p>
        </div>
      </footer>

      <StickyBar />
      <LeadModal />
    </div>
  );
}

/** "S$2,398", or "S$1,962 – S$2,398" when a course has several fee options. */
function totalLabel(course: Course) {
  const totals = course.fees.map((option) => option.total);
  const low = Math.min(...totals);
  const high = Math.max(...totals);
  return low === high ? `S$${formatMoney(low)}` : `S$${formatMoney(low)} – S$${formatMoney(high)}`;
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1AB69D]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {body ? <p className="mt-3 text-base leading-7 text-gray-600">{body}</p> : null}
    </div>
  );
}

function CompareRow({ label, cells, strong = false }: { label: string; cells: string[]; strong?: boolean }) {
  return (
    <tr>
      <th scope="row" className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </th>
      {cells.map((cell, index) => (
        <td
          key={index}
          className={`px-6 py-4 align-top leading-6 ${strong ? "text-base font-semibold text-gray-900" : "text-gray-700"}`}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-gray-50 px-3 py-2">
      <dt className="text-[10px] uppercase tracking-wider text-gray-400">{label}</dt>
      <dd className="mt-0.5 font-semibold text-gray-900">{value}</dd>
    </div>
  );
}

function Arrow({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
    </svg>
  );
}
