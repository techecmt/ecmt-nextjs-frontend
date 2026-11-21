import type { Metadata } from "next";
import Image from "next/image";
import { Poppins } from "next/font/google";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  CircleCheck,
  Clock3,
  GraduationCap,
  HardHat,
  House,
  Ruler,
  TrendingUp,
  Wallet,
} from "lucide-react";
import CourseExplorer from "./CourseExplorer";
import GraduationVideo from "./GraduationVideo";
import LeadModalLoader from "./LeadModalLoader";
import { WhatsAppIcon } from "./icons";
import OfferNotice from "./OfferNotice";
import OpenFormButton from "./OpenFormButton";
import { DevOnly, Placeholder, Verify } from "./Placeholder";
import StickyBar from "./StickyBar";
import WhatsAppLink from "./WhatsAppLink";
import {
  ALL_COURSES_NO_CERT,
  CAMPUS_ADDRESS,
  COLLEGE,
  CONTACT,
  COURSES,
  GST_NOTE,
  LOWEST_MONTHLY,
  MAX_MIN_AGE,
  MAX_MONTHS,
  MIN_AGE,
  MIN_MONTHS,
  NO_CERT_COURSES,
  PAGE_URL,
  REGISTRATION_FEE,
  SCHEDULE,
  cheapestFee,
  earliestIntakeLabel,
  findCourse,
  formatMoney,
  intakeLabels,
  listCourses,
  singaporeToday,
  totalLabel,
} from "./campaign";

// Intake dates come from app/data/batchschedule.ts and are filtered against
// today's date, so rebuild the page hourly to drop intakes that have started.
export const revalidate = 3600;

const META_TITLE = "Part-Time Engineering Diploma, Weekends Only | Edusphere College";
// The entry clause is only added once every course accepts it (see campaign.ts).
const META_DESCRIPTION = `Study 4 hours a week on Saturday or Sunday. Finish in ${MIN_MONTHS}–${MAX_MONTHS} months. Pay monthly from S$${LOWEST_MONTHLY}.${
  ALL_COURSES_NO_CERT ? " SSC/SPM or 30+ with 8 years' work can apply." : ""
}`;
const OG_IMAGE = "https://edusphere.edu.sg/lp_images/engineering/og-image.webp";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Edusphere College",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, type: "image/webp", alt: "Part-time engineering diplomas at Edusphere College" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// Self-hosted with a size-matched fallback, so text does not reflow (CLS 0.19 -> 0)
// when the font arrives. This page no longer needs the Google Fonts @import in
// globals.css, but that import is site-wide and still render-blocking.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const RANGE = `${MIN_MONTHS} to ${MAX_MONTHS} months`;
const LONGEST = COURSES.find((course) => course.durationMonths === MAX_MONTHS);
const DCE = findCourse("dce");
const codesFor = (level: string) =>
  COURSES.filter((course) => course.level === level).map((course) => course.code).join(", ");
const DIPLOMA_CODES = codesFor("Diploma");
const ADVANCED_CODES = codesFor("Advanced Diploma");

/** "No certificate? …" wording, honest about which courses accept it. */
const NO_CERT_SCOPE = ALL_COURSES_NO_CERT ? "" : ` for ${listCourses(NO_CERT_COURSES)}`;
const HAS_NO_CERT_ROUTE = NO_CERT_COURSES.length > 0;

const PRIMARY_CTA =
  "inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-[#C8304A] px-6 text-base font-semibold text-white shadow-sm transition hover:bg-[#B42A42]";
const WA_CTA =
  "inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-[#1E7F4F] px-6 text-base font-semibold text-white transition hover:bg-[#186A41]";
const ICON = "h-8 w-8 text-[#0F7A69]";

export default function EngineeringLandingPage() {
  const today = singaporeToday();
  const intakes = intakeLabels(today);
  const earliest = earliestIntakeLabel(today);

  return (
    <div className={`${poppins.className} bg-white pb-28 text-gray-900`}>
      {/* Sticky top bar (replaces the per-visitor countdown ribbon) */}
      <div className="sticky top-0 z-30 bg-gray-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5">
          <p className="text-sm leading-5">
            {earliest ? (
              <>
                Next class starts <strong className="font-semibold">{earliest}</strong>
              </>
            ) : (
              "New classes opening soon"
            )}
            <span className="text-white/70"> · </span>Weekends only
            <span className="text-white/70"> · </span>From S${LOWEST_MONTHLY} a month
          </p>
          <WhatsAppLink
            location="sticky"
            className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-lg bg-[#1E7F4F] px-3 text-sm font-semibold text-white transition hover:bg-[#186A41]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp us
          </WhatsAppLink>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-2">
          <Image
            src="/brand/logo.png"
            alt="Edusphere College of Management and Technology"
            width={420}
            height={90}
            loading="eager"
            sizes="200px"
            className="h-auto w-[140px] sm:w-[210px]"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-4 sm:pt-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12 lg:pb-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#E7F6F2] px-3 py-1 text-sm font-medium text-[#0E6E5F]">
            Part-time · Weekends · Beach Road, Singapore
          </p>
          <h1 className="mt-2 text-[32px] font-bold leading-[1.1] tracking-tight [text-wrap:balance] sm:text-5xl lg:text-[56px]">
            Get a diploma on your day off.
          </h1>
          <p className="mt-2 text-lg leading-7 text-gray-800 sm:text-xl sm:leading-8">
            Study 4 hours a week, on Saturday or Sunday.
            <br />
            Finish in {RANGE}.
            <br />
            Pay monthly, from S${LOWEST_MONTHLY}.
          </p>
          <p className="mt-2 text-base leading-6 text-gray-700">
            For construction workers, domestic workers and anyone who works full-time.
          </p>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <OpenFormButton placement="hero" className={PRIMARY_CTA}>
              Check if I can join
              <Arrow />
            </OpenFormButton>
            <WhatsAppLink location="hero" className={WA_CTA}>
              <WhatsAppIcon className="h-5 w-5" />
              Ask on WhatsApp
            </WhatsAppLink>
          </div>

          <p className="mt-2.5 text-sm leading-5 text-gray-700">
            {COLLEGE.name} · PEI Reg No {COLLEGE.peiRegNo}{" "}
            <Placeholder>· registration period</Placeholder>
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key facts">
            <Pill emoji="🕓">4 hrs a week</Pill>
            <Pill emoji="📅">Sat or Sun</Pill>
            <Pill emoji="💳">From S${LOWEST_MONTHLY}/mo</Pill>
          </ul>

          {HAS_NO_CERT_ROUTE ? (
            <a
              href="#entry"
              className="mt-5 flex min-h-[56px] items-center gap-3 rounded-2xl border-2 border-dashed border-[#0F7A69]/40 bg-[#F3FBF8] px-4 py-3 text-base leading-6 text-gray-900 transition hover:border-[#0F7A69]"
            >
              <CircleCheck className="h-6 w-6 shrink-0 text-[#0F7A69]" aria-hidden="true" />
              <span>
                <strong className="font-semibold">No certificate?</strong> Age 30+ with 8 years of
                work can apply{NO_CERT_SCOPE}. <Verify>mature-entry rule per course</Verify>
              </span>
              <ChevronDown className="ml-auto h-5 w-5 shrink-0 text-[#0F7A69]" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <figure className="relative">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 lg:aspect-[4/3]">
            <Image
              src="/lp_images/engineering/hero.webp"
              alt="Engineers in safety helmets at a building site in Singapore"
              fill
              preload
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[30%_40%]"
            />
          </div>
          <DevOnly>
            <figcaption className="mt-2">
              <Placeholder>
                real student in site PPE in class, smiling, with notes (consent on file). Alt:
                &quot;Edusphere engineering student studying on a weekend class at Beach Road campus&quot;
              </Placeholder>
            </figcaption>
          </DevOnly>
        </figure>
      </section>
      <div id="hero-end" aria-hidden="true" />

      {/* Stat strip */}
      <section aria-label="At a glance" className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-2 sm:grid-cols-4">
          <Stat value="1 day" label="a week" />
          <Stat value="4 hrs" label="per class" />
          <Stat value={`${MIN_MONTHS}–${MAX_MONTHS}`} label="months" />
          <Stat value="S$0" label="interest" />
        </div>
      </section>

      {/* Is this course for you? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="Is this course for you?" />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            <AudienceCard icon={<HardHat className={ICON} aria-hidden="true" />} title="I work in construction">
              Learn the skills to become a site supervisor or BIM modeller.
            </AudienceCard>
            <AudienceCard icon={<House className={ICON} aria-hidden="true" />} title="I am a domestic worker">
              Use your rest day to earn a diploma and plan your future.{" "}
              <Verify>FDW/WP wording reviewed</Verify>
            </AudienceCard>
            {HAS_NO_CERT_ROUTE ? (
              <AudienceCard
                icon={<BriefcaseBusiness className={ICON} aria-hidden="true" />}
                title="I have no certificate, but many years of work"
              >
                If you are 30+ with 8 years of work, you can still apply{NO_CERT_SCOPE}.{" "}
                <Verify>mature-entry rule per course</Verify>
              </AudienceCard>
            ) : null}
          </ul>
        </div>
      </section>

      {/* Small time. Big step. */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="Small time. Big step." body="Built for people who work 6 days a week." />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Block icon={<CalendarDays className={ICON} aria-hidden="true" />} title="Only 1 day a week">
              Come on Saturday or Sunday. 4 hours each time.{" "}
              <Verify>lesson length per course</Verify>
            </Block>
            <Block icon={<Clock3 className={ICON} aria-hidden="true" />} title="Pick your time">
              {SCHEDULE.slots.map((slot, index) => (
                <span key={slot.label}>
                  {index === SCHEDULE.slots.length - 1 ? "or " : ""}
                  {index === 0 ? slot.label : slot.label.toLowerCase()} {slot.time}
                  {index < SCHEDULE.slots.length - 1 ? ", " : "."}
                </span>
              ))}
            </Block>
            <Block icon={<Wallet className={ICON} aria-hidden="true" />} title="Pay a little each month">
              From S${LOWEST_MONTHLY} a month. No interest. No exam or book fees.
            </Block>
            <Block icon={<GraduationCap className={ICON} aria-hidden="true" />} title={`Finish in ${RANGE}`}>
              Get your diploma in less than one year
              {LONGEST ? ` (${LONGEST.durationMonths} months for ${LONGEST.shortTitle})` : ""}.
            </Block>
          </ul>
          <DevOnly>
            <div className="mt-6 rounded-3xl border-2 border-dashed border-yellow-500 p-6">
              <Placeholder>
                photo of a real weekend class in session. Alt: &quot;Weekend part-time class at Edusphere
                College&quot;
              </Placeholder>
            </div>
          </DevOnly>
        </div>
      </section>

      {/* Entry */}
      <section id="entry" className="scroll-mt-20 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="Can I join? Easy entry." body="You need ONE of these:" />
          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
            <EntryBox title="Option 1: School certificate">
              <p>SSC, SPM, 10th Std, GCE &apos;O&apos; Level, or a similar school certificate.</p>
              <p className="mt-2 text-gray-700">It should include English and 2 science subjects.</p>
              <p className="mt-2 text-gray-700">For the Diplomas ({DIPLOMA_CODES}).</p>
              <Verify>Option 1 wording vs course pages (&quot;3 GCE &apos;O&apos; levels incl. English + 2 sciences&quot;)</Verify>
            </EntryBox>
            <div className="flex items-center justify-center" aria-hidden="true">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-base font-bold text-white">
                OR
              </span>
            </div>
            <p className="sr-only">or</p>
            <EntryBox title="Option 2: Work experience">
              <p>Age 30 or above, with at least 8 years of work.</p>
              {ALL_COURSES_NO_CERT ? (
                <p className="mt-2 font-semibold">No certificate needed.</p>
              ) : (
                <>
                  {HAS_NO_CERT_ROUTE ? (
                    <p className="mt-2">
                      <strong className="font-semibold">No certificate needed</strong> for{" "}
                      {listCourses(NO_CERT_COURSES)}.
                    </p>
                  ) : null}
                  <p className="mt-2 text-gray-700">
                    For other courses, you also need a work-related certificate.
                  </p>
                </>
              )}
              <Verify>mature-entry rule per course</Verify>
            </EntryBox>
          </div>
          <p className="mt-5 text-base leading-7 text-gray-700">
            Minimum age: {MIN_AGE} to {MAX_MIN_AGE}, depends on the course. Advanced Diplomas need a
            diploma first. <Verify>entry note</Verify>
          </p>
          <OpenFormButton placement="entry" className={`${PRIMARY_CTA} mt-6 w-full sm:w-auto`}>
            Check if I can join, takes 1 minute
            <Arrow />
          </OpenFormButton>
        </div>
      </section>

      {/* Course picker */}
      <section id="courses" className="scroll-mt-20 bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            title="Choose your course"
            body="Start with a Diploma. Later, go up to an Advanced Diploma."
          />
          <div className="mt-8">
            <CourseExplorer intakes={intakes} />
          </div>
        </div>
      </section>

      {/* What can this diploma do for you? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="What can this diploma do for you?" />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            <Block icon={<Ruler className={ICON} aria-hidden="true" />} title="Real site skills">
              Learn real site skills: drawing, BIM, safety, M&amp;E.
            </Block>
            <Block icon={<CircleCheck className={ICON} aria-hidden="true" />} title="Proof of your skills">
              Show employers a diploma, not just experience.
            </Block>
            <Block icon={<TrendingUp className={ICON} aria-hidden="true" />} title="Step by step">
              Go up step by step: Diploma → Advanced Diploma
              <Placeholder fallback={null}> → next level</Placeholder>.
            </Block>
          </ul>

          {/* Progress path */}
          <ol className="mt-8 flex flex-col items-stretch gap-2 md:flex-row md:items-center" aria-label="Study path">
            <PathStep label="Diploma" detail={DIPLOMA_CODES.replace(", ", " or ")} />
            <PathArrow />
            <PathStep label="Advanced Diploma" detail={ADVANCED_CODES.replace(", ", " or ")} />
            <DevOnly>
              <PathArrow />
              <PathStep label={<Placeholder>next level after Advanced Diploma</Placeholder>} detail="" />
            </DevOnly>
          </ol>

          <DevOnly>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 p-5">
                <dt className="text-sm text-gray-600">Graduates</dt>
                <dd className="mt-1"><Placeholder>graduates</Placeholder></dd>
              </div>
              <div className="rounded-2xl border border-gray-200 p-5">
                <dt className="text-sm text-gray-600">In a higher role</dt>
                <dd className="mt-1"><Placeholder>% in a higher role</Placeholder></dd>
              </div>
            </dl>
          </DevOnly>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="scroll-mt-20 bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="Clear fees. Pay monthly." body="The price includes GST. No exam fees. No book fees." />

          <p className="mt-6 rounded-2xl bg-[#ECFDF5] px-5 py-4 text-base font-semibold leading-7 text-[#166534] ring-1 ring-[#BBF7D0]">
            No interest · No exam fees · No book fees · GST included
          </p>

          <ul className="mt-6 divide-y divide-gray-200 overflow-hidden rounded-3xl border border-gray-200 bg-white">
            {COURSES.map((course) => (
              <li key={course.id} className="grid gap-1 px-5 py-4 sm:grid-cols-[1.4fr_1fr_1fr] sm:items-center sm:gap-4">
                <p>
                  <span className="text-sm font-bold text-[#0F7A69]">{course.code}</span>{" "}
                  <span className="font-semibold">{course.shortTitle}</span>
                  <span className="block text-sm text-gray-600">
                    {course.durationMonths} months · {course.hours} hrs
                  </span>
                </p>
                <p className="text-base">
                  <span className="text-gray-700">Total </span>
                  <span className="font-semibold">{totalLabel(course)}</span>
                </p>
                <p className="text-base">
                  <span className="font-semibold">
                    {course.fees.length > 1 ? "from " : ""}S${formatMoney(cheapestFee(course).monthly)}
                  </span>
                  <span className="text-gray-700"> a month × {cheapestFee(course).months}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 text-base leading-7 text-gray-700">
            <p>{GST_NOTE} Interest-free monthly instalments. No exam or book fees on top.</p>
            <p>
              Registration fee: S${REGISTRATION_FEE}.{" "}
              <Placeholder>refunded if class does not start?</Placeholder>
            </p>
            <OfferNotice className="font-semibold text-[#B42A42]" />
            <p>
              Refund policy:{" "}
              {COURSES.map((course, index) => (
                <span key={course.id}>
                  <a
                    href={course.pageUrl}
                    className="inline-flex min-h-[48px] items-center font-semibold text-[#0F7A69] underline underline-offset-4"
                  >
                    {course.code}
                  </a>
                  {index < COURSES.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="Real students. Real graduation." body={`Classes run at our campus: ${CAMPUS_ADDRESS}.`} />
          <div className="mt-8 grid gap-4 lg:h-[480px] lg:grid-cols-3 lg:grid-rows-2">
            <GraduationVideo />
            <Photo
              src="/lp_images/engineering/graduation-class-2026.webp"
              alt="Edusphere College graduates seated together at the Graduation Ceremony 2026"
              caption="Class of 2026"
            />
            <Photo
              src="/lp_images/engineering/osh-expo.webp"
              alt="Edusphere College engineering students at the Occupational Safety and Health Expo, Marina Bay Sands"
              caption="Safety expo, Marina Bay Sands"
              position="object-top"
            />
          </div>
          <div className="mt-4">
            <Photo
              src="/lp_images/engineering/classroom.webp"
              alt="Edusphere College classroom at The Plaza, 7500A Beach Road"
              caption="Our classroom at The Plaza, Beach Road"
              aspect="aspect-[16/9] lg:aspect-[21/8]"
            />
          </div>

          <DevOnly>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <li key={n} className="rounded-3xl border border-gray-200 p-6">
                  <Placeholder>
                    testimonial {n}: name, job before → after, 1:1 photo under 40 KB, quote, written consent
                  </Placeholder>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-3xl border border-gray-200 p-6">
              <p className="font-semibold">Your lecturers</p>
              <p className="mt-2">
                <Placeholder>lecturer row: name, photo, qualifications, years of industry work</Placeholder>
              </p>
            </div>
          </DevOnly>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title="Questions people ask" />
          <div className="mt-8 divide-y divide-gray-200 rounded-3xl border border-gray-200 bg-white">
            <Faq question="I have no certificate. Can I join?">
              {HAS_NO_CERT_ROUTE ? (
                <>
                  Yes{NO_CERT_SCOPE}, if you are 30 or older and have worked for at least 8 years.
                  {ALL_COURSES_NO_CERT ? "" : " For other courses, you also need a work-related certificate."}
                </>
              ) : (
                "You need a school certificate, or a work-related certificate and work experience."
              )}{" "}
              <Verify>per course</Verify>
            </Faq>
            <Faq question="I am on a Work Permit. Can I study?">
              Many Work Permit holders study with us on their rest day. Please talk to your employer
              about your rest day first. You must still follow your Work Permit rules.{" "}
              <Verify>FDW/WP wording reviewed</Verify>
            </Faq>
            <Faq question="I am a domestic worker. Can I join?">
              Yes, you can study on your rest day. Agree your rest day with your employer.{" "}
              <Verify>wording</Verify>
            </Faq>
            <Faq question="How many hours do I study?">
              4 hours, one day a week ({SCHEDULE.days}).
              {LONGEST && LONGEST.durationMonths !== MIN_MONTHS
                ? ` For ${LONGEST.shortTitle}, it is about 4 hours a week.`
                : ""}{" "}
              <Verify>lesson length per course</Verify>
            </Faq>
            <Faq question="What if I miss a class?">
              <Placeholder fallback="Please ask a counsellor on WhatsApp.">make-up policy</Placeholder>
            </Faq>
            <Faq question="My English is not strong. Is that OK?">
              <Placeholder fallback="Please ask a counsellor on WhatsApp.">
                English support answer (DCE has a module called &quot;Engineering English &amp;
                Communication&quot;)
              </Placeholder>
            </Faq>
            <Faq question="How do I pay?">
              Pay monthly with no interest.
              {DCE
                ? ` Example: S$${formatMoney(DCE.fees[0].monthly)} a month for ${DCE.fees[0].months} months (${DCE.code}).`
                : ""}
            </Faq>
            <Faq question="What if the class does not start?">
              <Placeholder fallback="Please ask a counsellor on WhatsApp.">
                minimum class size, backup plan, waiting period, refund
              </Placeholder>
            </Faq>
            <Faq question="Who gives the diploma?">
              {COLLEGE.awardingBody}, {COLLEGE.awardingCountry}.{" "}
              <Placeholder fallback={null}>course developer and country</Placeholder>
            </Faq>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[32px] border border-gray-200 bg-gradient-to-br from-white to-[#F3FBF8] px-5 py-10 text-center sm:px-12 sm:py-14">
            <h2 className="text-3xl font-bold tracking-tight [text-wrap:balance] sm:text-4xl">
              {earliest ? `Next class starts ${earliest}. Save your seat.` : "Save your seat for the next class."}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-lg leading-7 text-gray-700">
              It takes 1 minute. A counsellor will WhatsApp you. No pressure.
            </p>
            <OfferNotice className="mt-3 text-base font-semibold text-[#B42A42]" />
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <OpenFormButton placement="final_cta" className={PRIMARY_CTA}>
                Check if I can join
                <Arrow />
              </OpenFormButton>
              <WhatsAppLink location="final" className={WA_CTA}>
                <WhatsAppIcon className="h-5 w-5" />
                Ask on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Legal footer (the global footer is not rendered on /lp pages) */}
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-4xl space-y-2 px-4 text-center text-sm leading-6 text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">{COLLEGE.legalName}</strong> · PEI Reg No{" "}
            {COLLEGE.peiRegNo} <Placeholder>· registration period</Placeholder>
          </p>
          <p>
            Diplomas awarded by {COLLEGE.awardingBody}, {COLLEGE.awardingCountry}.{" "}
            <Placeholder fallback={null}>course developer and country</Placeholder>
          </p>
          <p>{CAMPUS_ADDRESS} · WhatsApp {CONTACT.phone}</p>
          <p>
            {GST_NOTE} Class dates depend on enough students signing up.{" "}
            <a href={COLLEGE.privacyUrl} className="inline-flex min-h-[48px] items-center font-semibold text-[#0F7A69] underline underline-offset-4">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>

      <StickyBar />
      <LeadModalLoader intakes={intakes} />
    </div>
  );
}

function SectionHeading({ title, body }: { title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-[28px] font-bold leading-tight tracking-tight [text-wrap:balance] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-2 text-lg leading-7 text-gray-700">{body}</p> : null}
    </div>
  );
}

function Pill({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <li className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3.5 text-base font-medium text-gray-900">
      <span aria-hidden="true">{emoji}</span>
      {children}
    </li>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <p className="flex flex-col items-center px-2 py-4 text-center">
      <span className="text-3xl font-bold tracking-tight text-gray-900">{value}</span>
      <span className="text-base text-gray-700">{label}</span>
    </p>
  );
}

function AudienceCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-3xl border border-gray-200 bg-white p-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F6F2]">{icon}</span>
      <h3 className="mt-4 text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-base leading-7 text-gray-700">{children}</p>
    </li>
  );
}

function Block({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="rounded-3xl border border-gray-200 bg-white p-6">
      {icon}
      <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-base leading-7 text-gray-700">{children}</p>
    </li>
  );
}

function EntryBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border-2 border-[#0F7A69]/30 bg-white p-6 text-base leading-7 text-gray-900">
      <p className="flex items-center gap-2 text-lg font-semibold">
        <CircleCheck className="h-7 w-7 shrink-0 text-[#15803D]" aria-hidden="true" />
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function PathStep({ label, detail }: { label: React.ReactNode; detail: string }) {
  return (
    <li className="flex-1 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center">
      <span className="block text-lg font-semibold">{label}</span>
      {detail ? <span className="block text-base text-gray-700">{detail}</span> : null}
    </li>
  );
}

function PathArrow() {
  return (
    <li aria-hidden="true" className="flex justify-center text-2xl font-bold text-[#0F7A69]">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </li>
  );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="group px-5">
      <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold leading-snug [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown className="h-5 w-5 shrink-0 text-gray-600 transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <p className="pb-5 text-base leading-7 text-gray-700">{children}</p>
    </details>
  );
}

function Photo({
  src,
  alt,
  caption,
  position = "object-center",
  aspect = "aspect-[16/10] lg:aspect-auto",
}: {
  src: string;
  alt: string;
  caption: string;
  position?: string;
  aspect?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-3xl ${aspect}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className={`object-cover ${position}`} />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-12 text-base font-medium text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

function Arrow({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
    </svg>
  );
}
