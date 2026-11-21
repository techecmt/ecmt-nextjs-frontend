"use client";

import * as React from "react";
import Image from "next/image";
import {
  COLLEGE,
  COURSES,
  GST_NOTE,
  OPENING_SOON,
  REGISTRATION_FEE,
  SCHEDULE,
  cheapestFee,
  findCourse,
  formatMoney,
  monthlyLabel,
  type Course,
  type IntakeLabels,
} from "./campaign";
import { openLeadForm } from "./events";
import { Placeholder, SHOW_PLACEHOLDERS, Verify } from "./Placeholder";

const CTA =
  "flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#C8304A] px-5 text-base font-semibold text-white transition hover:bg-[#B42A42]";

/** "4 hrs a week" / "About 4 hrs a week" for the card line. */
function weeklyShort(course: Course) {
  return course.weeklyLoad.startsWith("About") ? "About 4 hrs a week" : "4 hrs a week";
}

export default function CourseExplorer({ intakes }: { intakes: IntakeLabels }) {
  const [activeId, setActiveId] = React.useState<Course["id"]>(COURSES[0].id);
  const [feeIndex, setFeeIndex] = React.useState(0);
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Ads can deep-link a course with ?course=dce. Read it after mount so the
  // page stays statically rendered.
  React.useEffect(() => {
    const preset = findCourse(new URLSearchParams(window.location.search).get("course"));
    if (preset) setActiveId(preset.id);
  }, []);

  const active = findCourse(activeId) ?? COURSES[0];
  const fee = active.fees[feeIndex] ?? active.fees[0];

  function showDetails(id: Course["id"]) {
    setActiveId(id);
    setFeeIndex(0);
    // On phones the panel sits below all four cards; bring it into view.
    requestAnimationFrame(() => {
      const panel = panelRef.current;
      if (panel && panel.getBoundingClientRect().top > window.innerHeight * 0.6) {
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  return (
    <div>
      {/* Course cards */}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COURSES.map((course) => {
          const selected = course.id === active.id;
          const advanced = course.level === "Advanced Diploma";
          return (
            <li
              key={course.id}
              className={`flex flex-col rounded-3xl border bg-white p-5 transition ${
                selected ? "border-[#0F7A69] ring-2 ring-[#0F7A69]/20" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-wide text-[#0F7A69]">{course.code}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    advanced ? "bg-gray-900 text-white" : "bg-[#E7F6F2] text-[#0E6E5F]"
                  }`}
                >
                  {advanced ? "Advanced" : "Diploma"}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-gray-900">{course.shortTitle}</h3>
              <p className="mt-2 text-base leading-6 text-gray-700">{course.bestFor}</p>

              <p className="mt-4 text-[15px] font-medium leading-6 text-gray-900">
                {weeklyShort(course)} · {SCHEDULE.days} · {SCHEDULE.delivery}
              </p>

              <dl className="mt-3 space-y-1.5 text-[15px] leading-6">
                <CardFact label="Duration" value={`${course.durationMonths} months (${course.hours} hrs)`} />
                <CardFact label="Pay" value={`${monthlyLabel(course)} a month × ${cheapestFee(course).months}`} />
                <CardFact label="Next class" value={intakes[course.id] ?? OPENING_SOON} />
                <CardFact label="Min. age" value={`${course.minAge}`} />
                <CardFact label="Max time to finish" value={<Placeholder>max candidature for {course.code}</Placeholder>} hideWhenEmpty />
              </dl>

              <div className="mt-auto space-y-2 pt-5">
                <button
                  type="button"
                  onClick={() => showDetails(course.id)}
                  aria-controls="course-details"
                  aria-pressed={selected}
                  className={`min-h-[48px] w-full rounded-xl border px-4 text-base font-semibold transition ${
                    selected
                      ? "border-[#0F7A69] bg-[#E7F6F2] text-[#0E6E5F]"
                      : "border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {selected ? "Showing details ↓" : "See modules & fees"}
                </button>
                <button
                  type="button"
                  onClick={() => openLeadForm({ courseId: course.id, placement: "course_card" })}
                  className={CTA}
                >
                  Check if I can join
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Details for the selected course */}
      <div
        id="course-details"
        ref={panelRef}
        aria-live="polite"
        className="mt-8 grid scroll-mt-20 gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8"
      >
        <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-5 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="relative aspect-[9/5] w-full shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:w-52">
              <Image
                key={active.image}
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(min-width: 640px) 208px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-600">
                {active.level} · {active.code} · Part-time
              </p>
              <h3 className="mt-1 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                {active.title} <Verify>CPE-permitted course title</Verify>
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-700">{active.overview}</p>
            </div>
          </div>

          {/* SSG Advertising Code §5.8 items */}
          <h4 className="mt-8 text-base font-semibold text-gray-900">Course facts</h4>
          <dl className="mt-3 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            <Fact label="Study mode" value={`Part-time · ${SCHEDULE.delivery}`} />
            <Fact label="Total time" value={`${active.durationMonths} months · ${active.hours} hours`} />
            <Fact
              label="Each week"
              value={
                <>
                  {active.weeklyLoad} ({SCHEDULE.days}) <Verify>lesson length per course</Verify>
                </>
              }
            />
            <Fact label="Class times" value={SCHEDULE.slots.map((slot) => slot.time).join(" or ")} />
            <Fact label="Next class" value={intakes[active.id] ?? OPENING_SOON} />
            <Fact label="Max time to finish" value={<Placeholder fallback="Ask a counsellor">max candidature and what happens if you need longer</Placeholder>} />
            <Fact label="Min. class size" value={<Placeholder fallback="Ask a counsellor">minimum class size</Placeholder>} />
            <Fact
              label="If the class does not start"
              value={<Placeholder fallback="Ask a counsellor">backup plan, waiting period, refund</Placeholder>}
            />
            <Fact
              label="Diploma given by"
              value={
                <>
                  {COLLEGE.awardingBody}, {COLLEGE.awardingCountry}
                </>
              }
            />
            <Fact label="Course developer" value={<Placeholder fallback={null}>course developer and country</Placeholder>} hideWhenEmpty />
          </dl>

          <h4 className="mt-8 text-base font-semibold text-gray-900">
            6 modules · {active.hours} hours
          </h4>
          <ol className="mt-3 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            {active.modules.map((module) => (
              <li key={module.code} className="flex items-center gap-3 px-4 py-3">
                <span className="w-16 shrink-0 text-sm font-semibold text-[#0F7A69]">{module.code}</span>
                <span className="min-w-0 flex-1 text-base text-gray-800">{module.title}</span>
                <span className="shrink-0 text-sm tabular-nums text-gray-600">{module.hours}h</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-base font-semibold text-gray-900">Jobs you can aim for</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {active.careers.map((career) => (
                  <li
                    key={career}
                    className="rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800"
                  >
                    {career}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                These are jobs this course prepares you for. A job is not promised.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-900">Who can join</h4>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2 text-base leading-6 text-gray-800">
                  <Check /> Age {active.minAge} or above
                </li>
                {[...active.entry.academic, ...active.entry.mature].map((line) => (
                  <li key={line} className="flex gap-2 text-base leading-6 text-gray-800">
                    <Check /> <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fees + CTA */}
        <aside className="min-w-0 lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-7">
            <p className="text-sm font-semibold text-gray-600">{active.code} fees</p>
            {active.fees.length > 1 ? (
              <div role="radiogroup" aria-label="Class day" className="mt-3 grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1">
                {active.fees.map((option, index) => (
                  <button
                    key={option.label ?? index}
                    type="button"
                    role="radio"
                    aria-checked={index === feeIndex}
                    onClick={() => setFeeIndex(index)}
                    className={`min-h-[48px] rounded-lg px-3 text-sm font-semibold transition ${
                      index === feeIndex ? "bg-white text-gray-900 shadow-sm" : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : null}
            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">
                S${formatMoney(fee.monthly)}
              </span>
              <span className="text-base text-gray-700">a month × {fee.months}</span>
            </p>
            <p className="mt-1 text-sm text-gray-600">Interest-free monthly instalments</p>

            <dl className="mt-6 space-y-2.5 border-t border-gray-100 pt-5 text-base">
              <FeeRow label="Course fee" value={`S$${formatMoney(fee.courseFee)}`} />
              <FeeRow label="GST (9%)" value={`S$${formatMoney(fee.gst)}`} />
              <div className="flex items-baseline justify-between gap-4 border-t border-gray-100 pt-3">
                <dt className="font-semibold text-gray-900">Total</dt>
                <dd className="font-semibold text-gray-900">S${formatMoney(fee.total)}</dd>
              </div>
              <FeeRow
                label="Registration fee"
                value={
                  <>
                    S${REGISTRATION_FEE}{" "}
                    <Placeholder>refunded if class does not start?</Placeholder>
                  </>
                }
              />
            </dl>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {GST_NOTE} No exam fees. No book fees.
            </p>
            <a
              href={active.pageUrl}
              className="mt-2 inline-flex min-h-[48px] items-center text-base font-semibold text-[#0F7A69] underline underline-offset-4"
            >
              Read the refund policy ({active.code} course page)
            </a>

            <button
              type="button"
              onClick={() => openLeadForm({ courseId: active.id, placement: "course_details" })}
              className={`${CTA} mt-4`}
            >
              Check if I can join {active.code}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function CardFact({
  label,
  value,
  hideWhenEmpty = false,
}: {
  label: string;
  value: React.ReactNode;
  hideWhenEmpty?: boolean;
}) {
  // Placeholders render nothing in production; drop the row with them.
  if (hideWhenEmpty && !SHOW_PLACEHOLDERS) return null;
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-gray-600">{label}</dt>
      <dd className="text-right font-semibold text-gray-900">{value}</dd>
    </div>
  );
}

function Fact({
  label,
  value,
  hideWhenEmpty = false,
}: {
  label: string;
  value: React.ReactNode;
  hideWhenEmpty?: boolean;
}) {
  if (hideWhenEmpty && !SHOW_PLACEHOLDERS) return null;
  return (
    <div className="grid gap-0.5 px-4 py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
      <dt className="text-sm font-medium text-gray-600">{label}</dt>
      <dd className="text-base text-gray-900">{value}</dd>
    </div>
  );
}

function FeeRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-gray-700">{label}</dt>
      <dd className="text-right font-medium text-gray-900">{value}</dd>
    </div>
  );
}

function Check() {
  return (
    <svg className="mt-1 h-4 w-4 shrink-0 text-[#0F7A69]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
