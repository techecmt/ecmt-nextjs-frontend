"use client";

import * as React from "react";
import {
  CONTACT,
  COURSES,
  GST_NOTE,
  OFFER,
  REGISTRATION_URL,
  findCourse,
  formatMoney,
  monthlyLabel,
  whatsappLink,
  type Course,
} from "./campaign";
import { onOpenLeadForm, trackEvent } from "./events";
import { getOfferStatus } from "./offer";
import { WhatsAppIcon } from "./icons";
import { OfferClock, WhileOfferActive } from "./OfferTimer";

const COUNTRY_CODES = [
  "+65", "+60", "+91", "+62", "+63", "+95", "+880", "+94", "+977", "+86", "+84", "+66",
];

const AGE_BANDS = ["16 – 17", "18 – 20", "21 – 24", "25 – 29", "30 – 39", "40 and above"];

// Labels must match mapQualificationForCrm in app/api/leads/route.ts.
const QUALIFICATIONS = [
  "GCE 'O' Level / SSC / 10th Std / SPM",
  "GCE 'A' Level / 12th Std / STPM",
  "Certificate / ITE / Polytechnic Diploma",
  "Bachelor's Degree or higher",
  "Other / Mature candidate (working experience)",
];

const PASS_STATUSES = [
  "Work Permit",
  "S Pass",
  "Employment Pass",
  "Singapore Citizen",
  "Singapore PR",
  "Dependant Pass / LTVP",
  "Student Pass",
  "Other",
];

const STEP_TITLES = ["Course", "Start date", "Eligibility", "Contact"];

function startWindows(course: Course | null) {
  const intake = course?.nextIntake;
  return [
    {
      value: "next-intake",
      label: intake ? `Join the ${intake} intake` : "Join the next intake",
      hint: "I want a seat in the coming batch",
      startDate: intake ?? "Next intake",
    },
    {
      value: "next-3-months",
      label: "Within the next 3 months",
      hint: "Tell me about upcoming intakes",
      startDate: "Within 3 months",
    },
    {
      value: "exploring",
      label: "Still comparing options",
      hint: "I'd like details and fees first",
      startDate: "Still deciding",
    },
  ];
}

type FormState = {
  courseId: string;
  startWindow: string;
  age: string;
  qualification: string;
  workPass: string;
  nationality: string;
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  consent: boolean;
  website: string;
};

const INITIAL: FormState = {
  courseId: "",
  startWindow: "",
  age: "",
  qualification: "",
  workPass: "",
  nationality: "",
  name: "",
  countryCode: "+65",
  phone: "",
  email: "",
  consent: false,
  website: "",
};

function readUtm() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const utm: Record<string, string> = {};
  for (const key of keys) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  if (!utm.utm_source) utm.utm_source = "landing_page";
  if (!utm.utm_medium) utm.utm_medium = "lp_engineering";
  if (!utm.utm_campaign) utm.utm_campaign = "engineering_free_registration";
  return utm;
}

export default function LeadModal() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState<FormState>(INITIAL);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const course = findCourse(form.courseId);
  const windows = startWindows(course);

  const close = React.useCallback(() => dialogRef.current?.close(), []);

  React.useEffect(
    () =>
      onOpenLeadForm(({ courseId, placement }) => {
        const dialog = dialogRef.current;
        if (!dialog || dialog.open) return;
        const preset = findCourse(courseId);
        if (!submitted) {
          setForm((current) => ({
            ...current,
            courseId: preset?.id ?? current.courseId,
            // A new course invalidates the chosen intake.
            startWindow: preset && preset.id !== current.courseId ? "" : current.startWindow,
          }));
          // Skip the course step when the visitor already picked one.
          setStep((current) => (preset ? Math.max(current, 1) : current));
          setError(null);
        }
        dialog.showModal();
        document.documentElement.style.overflow = "hidden";
        trackEvent("lp_modal_open", { placement, course_id: preset?.id ?? null });
      }),
    [submitted],
  );

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  // Steps differ in height; always show the top of the new step.
  React.useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [step, submitted]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  const stepValid = [
    Boolean(course),
    Boolean(form.startWindow),
    Boolean(form.age && form.qualification && form.workPass && form.nationality.trim()),
    Boolean(
      form.name.trim() &&
        form.phone.trim().length >= 7 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
        form.consent,
    ),
  ];

  function advance(from: number) {
    trackEvent("lp_form_step_complete", {
      step: from + 1,
      step_name: STEP_TITLES[from],
      course_id: form.courseId || null,
    });
    setStep(from + 1);
  }

  function chooseCourse(id: string) {
    setForm((current) => ({
      ...current,
      courseId: id,
      startWindow: id === current.courseId ? current.startWindow : "",
    }));
    trackEvent("lp_course_select", { course_id: id, placement: "modal" });
    advance(0);
  }

  function chooseStartWindow(value: string) {
    update("startWindow", value);
    advance(1);
  }

  function goNext() {
    if (!stepValid[step]) return;
    advance(step);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key !== "Enter") return;
    if ((event.target as HTMLElement).tagName === "BUTTON") return;
    if (step < 3) {
      event.preventDefault();
      goNext();
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!course || !stepValid[3] || isSubmitting) return;
    if (form.website) return; // honeypot

    setIsSubmitting(true);
    setError(null);

    const chosen = windows.find((option) => option.value === form.startWindow);
    const offer = getOfferStatus();
    const offerNote = offer.active
      ? `Free registration (S$${OFFER.registrationFee}) offer ACTIVE — visitor's 24h window ends ${offer.expiresAtIso}`
      : `Free registration offer EXPIRED at ${offer.expiresAtIso}`;

    try {
      const response = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          countryCode: form.countryCode,
          phone: form.phone.trim(),
          course: course.title,
          courseType: course.level,
          nationality: form.nationality.trim(),
          startDate: chosen?.startDate ?? "Next intake",
          startWindow: chosen?.label ?? form.startWindow,
          age: form.age,
          qualification: form.qualification,
          workPass: form.workPass,
          message: `Engineering campaign enquiry (${course.code}) — ${chosen?.label ?? ""}. ${offerNote}`,
          formSource: "lp_engineering_modal",
          pageUrl: window.location.href,
          utm: readUtm(),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "We could not save your details.");
      }

      trackEvent("lp_lead_submit", {
        course_id: course.id,
        course: course.title,
        start_window: form.startWindow,
        pass_status: form.workPass,
        offer_active: offer.active,
      });
      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? `${submitError.message} Please try again, or WhatsApp us directly.`
          : "Something went wrong. Please WhatsApp us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="lead-modal-title"
      onClick={(event) => {
        // Clicks on the backdrop land on the <dialog> element itself.
        if (event.target === dialogRef.current) close();
      }}
      className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-gray-950/55 backdrop:backdrop-blur-[2px] sm:m-auto sm:h-auto sm:max-h-[min(92dvh,760px)] sm:max-w-[480px] sm:rounded-3xl"
    >
      <div className="flex h-full max-h-[inherit] flex-col overflow-hidden bg-white sm:rounded-3xl sm:shadow-2xl">
        {/* Header */}
        <div className="shrink-0 border-b border-gray-100 px-5 pb-4 pt-5 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1AB69D]">
                {submitted ? "Application received" : `Step ${step + 1} of ${STEP_TITLES.length}`}
              </p>
              <h2 id="lead-modal-title" className="mt-1 text-lg font-semibold leading-snug text-gray-900">
                {submitted
                  ? "We'll be in touch shortly"
                  : course
                    ? `Apply: ${course.shortTitle} (${course.code})`
                    : "Claim your free registration"}
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!submitted ? (
            <>
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {STEP_TITLES.map((title, index) => (
                  <div
                    key={title}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      index <= step ? "bg-[#1AB69D]" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <WhileOfferActive
                expired={
                  <p className="mt-3 text-xs text-gray-500">
                    The 24-hour free registration offer has ended — ask us if it can still apply.
                  </p>
                }
              >
                <p className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#EE4A62]" aria-hidden="true" />
                  Free registration (save S${OFFER.registrationFee}) ends in{" "}
                  <OfferClock className="font-semibold text-gray-900" />
                </p>
              </WhileOfferActive>
            </>
          ) : null}
        </div>

        {/* Body */}
        <div ref={bodyRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {submitted && course ? (
            <SuccessPanel course={course} name={form.name} />
          ) : (
            <form
              onSubmit={handleSubmit}
              onKeyDown={handleKeyDown}
              className="px-5 py-6 sm:px-7"
              noValidate
            >
              {step === 0 ? (
                <fieldset>
                  <legend className="text-base font-semibold text-gray-900">
                    Which course are you interested in?
                  </legend>
                  <div className="mt-4 space-y-2.5">
                    {COURSES.map((item) => (
                      <OptionButton
                        key={item.id}
                        selected={form.courseId === item.id}
                        onClick={() => chooseCourse(item.id)}
                        title={
                          <>
                            <span className="mr-2 text-[#1AB69D]">{item.code}</span>
                            {item.shortTitle}
                          </>
                        }
                        hint={`${item.level} · ${item.durationMonths} months · ${monthlyLabel(item)}/mo`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-gray-400">{GST_NOTE}</p>
                </fieldset>
              ) : null}

              {step === 1 ? (
                <fieldset>
                  <legend className="text-base font-semibold text-gray-900">
                    When would you like to start?
                  </legend>
                  <p className="mt-1 text-sm text-gray-500">
                    Classes are on weekends, 4 hours a week.
                  </p>
                  <div className="mt-4 space-y-2.5">
                    {windows.map((option) => (
                      <OptionButton
                        key={option.value}
                        selected={form.startWindow === option.value}
                        onClick={() => chooseStartWindow(option.value)}
                        title={option.label}
                        hint={option.hint}
                      />
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {step === 2 ? (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Check your eligibility</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {course
                        ? `Minimum age for ${course.code} is ${course.minAge}.`
                        : "So your counsellor can confirm entry requirements."}
                    </p>
                  </div>

                  <Field label="Your age" htmlFor="eng-age">
                    <select id="eng-age" value={form.age} onChange={(e) => update("age", e.target.value)} className={inputClass}>
                      <option value="">Select your age range</option>
                      {AGE_BANDS.map((band) => (
                        <option key={band} value={band}>{band}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Highest qualification" htmlFor="eng-qualification">
                    <select id="eng-qualification" value={form.qualification} onChange={(e) => update("qualification", e.target.value)} className={inputClass}>
                      <option value="">Select your qualification</option>
                      {QUALIFICATIONS.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Your pass / residency status" htmlFor="eng-pass">
                    <select id="eng-pass" value={form.workPass} onChange={(e) => update("workPass", e.target.value)} className={inputClass}>
                      <option value="">Select your status</option>
                      {PASS_STATUSES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Nationality" htmlFor="eng-nationality">
                    <input
                      id="eng-nationality"
                      value={form.nationality}
                      onChange={(e) => update("nationality", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Indian, Bangladeshi, Singaporean"
                    />
                  </Field>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Where should we reach you?</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      One call to confirm your intake and the free registration.
                    </p>
                  </div>

                  <Field label="Full name" htmlFor="eng-name">
                    <input
                      id="eng-name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                      placeholder="As printed on your passport"
                    />
                  </Field>

                  <Field label="WhatsApp number" htmlFor="eng-phone">
                    <div className="flex gap-2">
                      <select
                        aria-label="Country code"
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className={`${fieldBase} w-[88px] shrink-0 px-2.5`}
                      >
                        {COUNTRY_CODES.map((code) => (
                          <option key={code} value={code}>{code}</option>
                        ))}
                      </select>
                      <input
                        id="eng-phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${fieldBase} w-full min-w-0 flex-1`}
                        placeholder="9123 4567"
                      />
                    </div>
                  </Field>

                  <Field label="Email address" htmlFor="eng-email">
                    <input
                      id="eng-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="you@example.com"
                    />
                  </Field>

                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-gray-50 p-3.5 ring-1 ring-gray-200">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#1AB69D]"
                    />
                    <span className="text-xs leading-5 text-gray-600">
                      I agree to be contacted by an Edusphere College counsellor by phone, WhatsApp
                      or email about this course.
                    </span>
                  </label>

                  {error ? (
                    <p aria-live="polite" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
                      {error}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div className="hidden" aria-hidden="true">
                <label htmlFor="eng-website">Website</label>
                <input
                  id="eng-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                />
              </div>

              {step > 0 ? (
                <div className="mt-7 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep((current) => Math.max(0, current - 1))}
                    className="rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                  >
                    Back
                  </button>
                  {step === 2 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!stepValid[2]}
                      className="flex-1 rounded-xl bg-gray-900 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                    >
                      Continue
                    </button>
                  ) : null}
                  {step === 3 ? (
                    <button
                      type="submit"
                      disabled={!stepValid[3] || isSubmitting}
                      className="flex-1 rounded-xl bg-[#EE4A62] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#d93d54] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                    >
                      {isSubmitting ? "Sending…" : "Claim free registration"}
                    </button>
                  ) : null}
                </div>
              ) : null}

              <p className="mt-5 text-center text-[11px] leading-5 text-gray-400">
                Your details go only to our admissions team. No spam, no sharing.
              </p>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}

function SuccessPanel({ course, name }: { course: Course; name: string }) {
  const firstName = name.trim().split(/\s+/)[0] || "there";
  const waText = `Hi, I'm ${name.trim()}. I just applied online for the ${course.title} (${course.code}). Please confirm my intake and the free registration offer.`;

  return (
    <div className="px-5 py-8 text-center sm:px-7">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1AB69D]/10">
        <svg className="h-7 w-7 text-[#1AB69D]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-gray-900">Thank you, {firstName}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-600">
        Your application for the <strong className="font-semibold text-gray-800">{course.code}</strong>{" "}
        has been received. A counsellor will contact you within 1 working day.
      </p>
      <WhileOfferActive>
        <p className="mx-auto mt-4 max-w-sm rounded-xl bg-[#effbf8] px-4 py-3 text-xs leading-5 text-[#0f6b5c]">
          Your free registration (S${formatMoney(OFFER.registrationFee)}) is locked in with this
          application.
        </p>
      </WhileOfferActive>
      <a
        href={whatsappLink(waText)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("lp_whatsapp_click", { placement: "success_panel", course_id: course.id })}
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#1da851]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Get a faster reply on WhatsApp
      </a>
      <p className="mt-4 text-xs leading-5 text-gray-500">
        {CONTACT.label} · {CONTACT.phone}
        <br />
        Prefer to finish online?{" "}
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#1AB69D] underline underline-offset-2"
        >
          Complete the registration form
        </a>
      </p>
    </div>
  );
}

function OptionButton({
  selected,
  onClick,
  title,
  hint,
}: {
  selected: boolean;
  onClick: () => void;
  title: React.ReactNode;
  hint: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${
        selected
          ? "border-[#1AB69D] bg-[#effbf8]"
          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-gray-900">{title}</span>
        <span className="mt-0.5 block text-xs text-gray-500">{hint}</span>
      </span>
      <svg
        className="h-5 w-5 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#1AB69D]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
      </svg>
    </button>
  );
}

// Width is deliberately left out of fieldBase: the phone row sets its own.
const fieldBase =
  "rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-4 focus:ring-[#1AB69D]/15";

const inputClass = `${fieldBase} w-full`;

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-gray-800">
        {label} <span className="text-[#EE4A62]">*</span>
      </label>
      {children}
    </div>
  );
}
