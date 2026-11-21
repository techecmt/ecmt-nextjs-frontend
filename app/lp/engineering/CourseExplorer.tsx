"use client";

import * as React from "react";
import Image from "next/image";
import { COURSES, OFFER, SCHEDULE, findCourse, formatMoney, type Course } from "./campaign";
import { openLeadForm, trackEvent } from "./events";
import { OfferClock, WhileOfferActive } from "./OfferTimer";

export default function CourseExplorer() {
  const [activeId, setActiveId] = React.useState<Course["id"]>(COURSES[0].id);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  // Ads can deep-link a course with ?course=dce. Read it after mount so the
  // page stays statically rendered.
  React.useEffect(() => {
    const preset = findCourse(new URLSearchParams(window.location.search).get("course"));
    if (preset) setActiveId(preset.id);
  }, []);

  const [feeIndex, setFeeIndex] = React.useState(0);

  const active = findCourse(activeId) ?? COURSES[0];
  const fee = active.fees[feeIndex] ?? active.fees[0];

  function select(id: Course["id"]) {
    setActiveId(id);
    setFeeIndex(0);
    trackEvent("lp_course_select", { course_id: id, placement: "explorer_tab" });
  }

  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + COURSES.length) % COURSES.length;
    select(COURSES[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Engineering courses"
        className="grid grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-1.5 lg:grid-cols-4"
      >
        {COURSES.map((course, index) => {
          const selected = course.id === active.id;
          return (
            <button
              key={course.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              id={`tab-${course.id}`}
              aria-selected={selected}
              aria-controls={`panel-${course.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(course.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`rounded-xl px-3 py-3 text-left transition sm:px-4 ${
                selected
                  ? "bg-white shadow-sm ring-1 ring-gray-900/5"
                  : "text-gray-600 hover:bg-white/60"
              }`}
            >
              <span
                className={`block text-xs font-semibold tracking-wide ${
                  selected ? "text-[#1AB69D]" : "text-gray-400"
                }`}
              >
                {course.code}
              </span>
              <span className={`mt-0.5 block text-sm font-semibold leading-snug ${selected ? "text-gray-900" : ""}`}>
                {course.shortTitle}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8"
      >
        {/* Left: course story + modules */}
        <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-5 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="relative aspect-[9/5] w-full shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:w-48">
              <Image
                key={active.image}
                src={active.image}
                alt={active.imageAlt}
                fill
                sizes="(min-width: 640px) 192px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                {active.level} · {active.code}
              </p>
              <h3 className="mt-1.5 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                {active.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{active.overview}</p>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-4">
            {[
              { label: "Duration", value: `${active.durationMonths} months` },
              { label: "Contact hours", value: `${active.hours} hrs` },
              { label: "Next intake", value: active.nextIntake ?? "Opening soon" },
              { label: "Min. age", value: `${active.minAge} years` },
            ].map((item) => (
              <div key={item.label} className="bg-white px-4 py-3.5">
                <dt className="text-[11px] font-medium uppercase tracking-wider text-gray-400">{item.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900">{item.value}</dd>
              </div>
            ))}
          </dl>

          <h4 className="mt-8 text-sm font-semibold text-gray-900">
            6 modules · {active.hours} hours
          </h4>
          <ol className="mt-3 divide-y divide-gray-100 rounded-2xl border border-gray-200">
            {active.modules.map((module) => (
              <li key={module.code} className="flex items-center gap-4 px-4 py-3.5">
                <span className="w-14 shrink-0 text-xs font-semibold tracking-wide text-[#1AB69D]">
                  {module.code}
                </span>
                <span className="min-w-0 flex-1 text-sm text-gray-800">{module.title}</span>
                <span className="shrink-0 text-xs tabular-nums text-gray-400">{module.hours}h</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Career paths</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {active.careers.map((career) => (
                  <li
                    key={career}
                    className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    {career}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Entry requirements</h4>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2 text-xs leading-5 text-gray-600">
                  <Check /> Minimum age {active.minAge}
                </li>
                {active.entry.map((line) => (
                  <li key={line} className="flex gap-2 text-xs leading-5 text-gray-600">
                    <Check /> {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: fees + CTA */}
        <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
              {active.code} fees
            </p>
            {active.fees.length > 1 ? (
              <div role="radiogroup" aria-label="Class day" className="mt-3 grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1">
                {active.fees.map((option, index) => (
                  <button
                    key={option.label ?? index}
                    type="button"
                    role="radio"
                    aria-checked={index === feeIndex}
                    onClick={() => setFeeIndex(index)}
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                      index === feeIndex ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-800"
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
              <span className="text-sm text-gray-500">/ month × {fee.months}</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">Incl. 9% GST · interest-free monthly instalments</p>

            <dl className="mt-6 space-y-2.5 border-t border-gray-100 pt-5 text-sm">
              <FeeRow label="Course fee" value={`S$${formatMoney(fee.courseFee)}`} />
              <FeeRow label="GST (9%)" value={`S$${formatMoney(fee.gst)}`} />
              <div className="flex items-baseline justify-between gap-4 border-t border-gray-100 pt-3">
                <dt className="font-semibold text-gray-900">Total payable</dt>
                <dd className="text-base font-semibold text-gray-900">S${formatMoney(fee.total)}</dd>
              </div>
              <FeeRow
                label="Registration fee"
                value={
                  <WhileOfferActive expired={<span className="text-gray-900">S${OFFER.registrationFee}</span>}>
                    <span className="mr-1.5 text-gray-400 line-through">S${OFFER.registrationFee}</span>
                    <span className="font-semibold text-[#EE4A62]">FREE</span>
                  </WhileOfferActive>
                }
              />
            </dl>

            <WhileOfferActive
              expired={
                <p className="mt-5 rounded-xl bg-gray-50 px-4 py-3 text-xs leading-5 text-gray-600">
                  Your 24-hour free registration window has ended. Apply anyway — your counsellor
                  will tell you what offers apply.
                </p>
              }
            >
              <p className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-[#FFF5F6] px-4 py-3 text-xs text-[#b4233a]">
                <span>Free registration ends in</span>
                <OfferClock className="text-sm font-semibold" />
              </p>
            </WhileOfferActive>

            <button
              type="button"
              onClick={() => {
                trackEvent("lp_cta_click", { placement: "explorer_fee_card", course_id: active.id });
                openLeadForm({ courseId: active.id, placement: "explorer_fee_card" });
              }}
              className="mt-5 w-full rounded-xl bg-[#EE4A62] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#d93d54]"
            >
              Apply for {active.code}
            </button>
            <p className="mt-3 text-center text-xs text-gray-500">
              {SCHEDULE.days} · {SCHEDULE.hoursPerWeek} hrs a week
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FeeRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-gray-600">{label}</dt>
      <dd className="text-right font-medium text-gray-900">{value}</dd>
    </div>
  );
}

function Check() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1AB69D]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
