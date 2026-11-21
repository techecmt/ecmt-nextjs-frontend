"use client";

import * as React from "react";
import {
  COLLEGE,
  CONTACT,
  COURSES,
  GST_NOTE,
  OPENING_SOON,
  REGISTRATION_FEE,
  REGISTRATION_OFFER,
  REGISTRATION_URL,
  findCourse,
  monthlyLabel,
  type Course,
  type IntakeLabels,
} from "./campaign";
import { onOpenLeadForm, trackEvent, type OpenFormDetail } from "./events";
import { WhatsAppIcon } from "./icons";
import { isOfferActive } from "./OfferNotice";
import WhatsAppLink from "./WhatsAppLink";

const COUNTRY_CODES = [
  "+65", "+60", "+91", "+62", "+63", "+95", "+880", "+94", "+977", "+86", "+84", "+66",
];

const AGE_BANDS = ["16–17", "18–20", "21–24", "25–29", "30–39", "40 and above"];

// What the visitor sees -> the label the CRM mapping in app/api/leads/route.ts
// (mapQualificationForCrm) already understands. Unknown labels are stored as
// "other" with the text, which is what we want for the last two.
const QUALIFICATIONS: { label: string; crm: string }[] = [
  { label: "SSC / SPM / 10th Std / 'O' Level / any secondary", crm: "GCE 'O' Level / SSC / 10th Std / SPM" },
  { label: "No certificate, but 30+ with 8+ years of work", crm: "Other / Mature candidate (working experience)" },
  { label: "Diploma or higher", crm: "Diploma or higher" },
  { label: "Other / not sure", crm: "Other / not sure" },
];
const NO_CERT_LABEL = QUALIFICATIONS[1].label;

const PASS_STATUSES = [
  "Work Permit",
  "Work Permit (domestic worker)",
  "S Pass",
  "Employment Pass",
  "Singapore Citizen",
  "Singapore PR",
  "Dependant Pass / LTVP",
  "Other",
];

const STEP_TITLES = [
  "Which course do you like?",
  "When do you want to start?",
  "Can you join? (3 quick questions)",
  "How can we reach you?",
];
const STEP_NAMES = ["course", "start", "eligibility", "contact"];

/**
 * Leads are only POSTed in production. In development, or with ?lp_test=1 on
 * any environment, the submit is mocked so test runs never reach the CRM.
 */
function isMockSubmit() {
  if (process.env.NODE_ENV !== "production") return true;
  return new URLSearchParams(window.location.search).get("lp_test") === "1";
}

function startWindows(course: Course | null, intakes: IntakeLabels) {
  const intake = course ? intakes[course.id] : null;
  return [
    {
      value: "next-intake",
      label: intake ? `The next class: ${intake}` : "The next class",
      hint: intake ? "I want a seat in this class" : `Date: ${OPENING_SOON.toLowerCase()}`,
      startDate: intake ?? "Next intake",
    },
    {
      value: "next-3-months",
      label: "In the next 3 months",
      hint: "Tell me the dates",
      startDate: "Within 3 months",
    },
    {
      value: "exploring",
      label: "I am not sure yet",
      hint: "I want to know more first",
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

/** Lowest age in a band such as "21–24" or "40 and above". */
const bandFloor = (band: string) => Number.parseInt(band, 10);

export default function LeadModal({
  intakes,
  initialOpen = null,
  onInitialOpenHandled,
}: {
  intakes: IntakeLabels;
  initialOpen?: OpenFormDetail | null;
  onInitialOpenHandled?: () => void;
}) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState<FormState>(INITIAL);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const course = findCourse(form.courseId);
  const windows = startWindows(course, intakes);

  const close = React.useCallback(() => dialogRef.current?.close(), []);

  const open = React.useCallback(
    ({ courseId, placement }: OpenFormDetail) => {
      const dialog = dialogRef.current;
      if (!dialog || dialog.open) return;
      const preset = findCourse(courseId);
      let firstStep = 0;
      if (!submitted) {
        setForm((current) => ({
          ...current,
          courseId: preset?.id ?? current.courseId,
          // A new course invalidates the chosen start.
          startWindow: preset && preset.id !== current.courseId ? "" : current.startWindow,
        }));
        // "Check if I can join" on a course skips the course question.
        firstStep = preset ? Math.max(step, 1) : step;
        setStep(firstStep);
        setError(null);
      }
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
      trackEvent("lp_form_open", { placement, course_code: preset?.code ?? null });
      if (!submitted) {
        trackEvent("lp_form_step", {
          step: firstStep + 1,
          step_name: STEP_NAMES[firstStep],
          course_code: preset?.code ?? course?.code ?? null,
        });
      }
    },
    [submitted, step, course],
  );

  React.useEffect(() => onOpenLeadForm(open), [open]);

  // An open request that arrived while this module was still loading.
  React.useEffect(() => {
    if (!initialOpen) return;
    open(initialOpen);
    onInitialOpenHandled?.();
  }, [initialOpen, open, onInitialOpenHandled]);

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
    Boolean(form.age && form.qualification && form.workPass),
    Boolean(
      form.name.trim() &&
        form.phone.trim().length >= 7 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
        form.nationality.trim() &&
        form.consent,
    ),
  ];

  function goTo(next: number, courseCode = course?.code ?? null) {
    trackEvent("lp_form_step", { step: next + 1, step_name: STEP_NAMES[next], course_code: courseCode });
    setStep(next);
  }

  function chooseCourse(id: string) {
    setForm((current) => ({
      ...current,
      courseId: id,
      startWindow: id === current.courseId ? current.startWindow : "",
    }));
    goTo(1, findCourse(id)?.code ?? null);
  }

  function chooseStartWindow(value: string) {
    update("startWindow", value);
    goTo(2);
  }

  function goNext() {
    if (!stepValid[step]) return;
    goTo(step + 1);
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
    const qualification = QUALIFICATIONS.find((item) => item.label === form.qualification);
    const offerNote = isOfferActive()
      ? `Registration fee S$${REGISTRATION_FEE} waiver ACTIVE for the ${REGISTRATION_OFFER.intakeLabel} intake (ends ${REGISTRATION_OFFER.endsOn}).`
      : "No registration-fee offer running.";

    const payload = {
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
      qualification: qualification?.crm ?? form.qualification,
      workPass: form.workPass,
      message: `Engineering LP enquiry (${course.code}). Start: ${chosen?.label ?? "-"}. Qualification (as picked): ${form.qualification}. ${offerNote}`,
      formSource: "lp_engineering_modal",
      pageUrl: window.location.href,
      utm: readUtm(),
    };

    const mock = isMockSubmit();
    try {
      if (mock) {
        console.info("[lp/engineering] Mock submit, nothing was sent:", payload);
        await new Promise((resolve) => setTimeout(resolve, 600));
      } else {
        const response = await fetch("/api/leads/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = (await response.json().catch(() => ({}))) as { error?: string };
        if (!response.ok) {
          throw new Error(result.error || "We could not save your details.");
        }
      }

      trackEvent("generate_lead", { course_code: course.code, test_lead: mock });
      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? `${submitError.message} Please try again, or WhatsApp us.`
          : "Something went wrong. Please WhatsApp us.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // Gentle, non-blocking hints on the eligibility step.
  const hints: string[] = [];
  if (course && form.age && bandFloor(form.age) < course.minAge) {
    hints.push(`${course.code} is for age ${course.minAge} and above. A counsellor can help you pick another course.`);
  }
  if (course && form.qualification === NO_CERT_LABEL) {
    if (form.age && bandFloor(form.age) < 30) {
      hints.push("Joining without a certificate is for age 30 and above. A counsellor will check your options.");
    } else if (!course.entry.matureNoCertificate) {
      hints.push(`For ${course.code}, you also need a work-related certificate. A counsellor will check with you.`);
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
      className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-gray-950/55 sm:m-auto sm:h-auto sm:max-h-[min(92dvh,780px)] sm:max-w-[480px] sm:rounded-3xl"
    >
      <div className="flex h-full max-h-[inherit] flex-col overflow-hidden bg-white sm:rounded-3xl sm:shadow-2xl">
        {/* Header */}
        <div className="shrink-0 border-b border-gray-100 px-5 pb-4 pt-5 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#0F7A69]">
                {submitted ? "Sent" : `Step ${step + 1} of ${STEP_TITLES.length}`}
              </p>
              <h2 id="lead-modal-title" className="mt-1 text-xl font-semibold leading-snug text-gray-900">
                {submitted ? "Thank you!" : STEP_TITLES[step]}
              </h2>
              {!submitted && course && step > 0 ? (
                <p className="mt-1 text-sm text-gray-600">
                  {course.shortTitle} ({course.code})
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="-mr-2 -mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!submitted ? (
            <div className="mt-4 flex gap-1.5" aria-hidden="true">
              {STEP_TITLES.map((title, index) => (
                <div
                  key={title}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    index <= step ? "bg-[#0F7A69]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
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
                  <legend className="sr-only">{STEP_TITLES[0]}</legend>
                  <div className="space-y-3">
                    {COURSES.map((item) => (
                      <OptionButton
                        key={item.id}
                        selected={form.courseId === item.id}
                        onClick={() => chooseCourse(item.id)}
                        title={
                          <>
                            <span className="mr-2 text-[#0F7A69]">{item.code}</span>
                            {item.shortTitle}
                          </>
                        }
                        hint={`${item.durationMonths} months · ${monthlyLabel(item)} a month`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{GST_NOTE}</p>
                </fieldset>
              ) : null}

              {step === 1 ? (
                <fieldset>
                  <legend className="text-base text-gray-700">
                    Classes are on Saturday or Sunday.
                  </legend>
                  <div className="mt-4 space-y-3">
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
                  <Field label="1. Your age" htmlFor="eng-age">
                    <select id="eng-age" value={form.age} onChange={(e) => update("age", e.target.value)} className={inputClass}>
                      <option value="">Choose your age</option>
                      {AGE_BANDS.map((band) => (
                        <option key={band} value={band}>{band}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="2. Your school certificate" htmlFor="eng-qualification">
                    <select id="eng-qualification" value={form.qualification} onChange={(e) => update("qualification", e.target.value)} className={inputClass}>
                      <option value="">Choose one</option>
                      {QUALIFICATIONS.map((item) => (
                        <option key={item.label} value={item.label}>{item.label}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="3. Your pass" htmlFor="eng-pass">
                    <select id="eng-pass" value={form.workPass} onChange={(e) => update("workPass", e.target.value)} className={inputClass}>
                      <option value="">Choose your pass</option>
                      {PASS_STATUSES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </Field>

                  {hints.length ? (
                    <div aria-live="polite" className="space-y-2 rounded-2xl bg-amber-50 p-4 text-base leading-6 text-amber-950 ring-1 ring-amber-200">
                      {hints.map((hint) => (
                        <p key={hint}>{hint}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {step === 3 ? (
                <div className="space-y-5">
                  <p className="text-base text-gray-700">
                    A counsellor will WhatsApp you. No pressure.
                  </p>

                  <Field label="Full name" htmlFor="eng-name">
                    <input
                      id="eng-name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                      placeholder="Name on your passport"
                    />
                  </Field>

                  <Field label="WhatsApp number" htmlFor="eng-phone">
                    <div className="flex gap-2">
                      <select
                        aria-label="Country code"
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className={`${fieldBase} w-[92px] shrink-0 px-2.5`}
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

                  <Field label="Email" htmlFor="eng-email">
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

                  <Field label="Nationality" htmlFor="eng-nationality">
                    <input
                      id="eng-nationality"
                      value={form.nationality}
                      onChange={(e) => update("nationality", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Indian, Bangladeshi, Filipino"
                    />
                  </Field>

                  <div className="rounded-2xl bg-gray-50 p-4 ring-1 ring-gray-200">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 h-5 w-5 shrink-0 accent-[#0F7A69]"
                      />
                      <span className="text-base leading-6 text-gray-800">
                        I agree that Edusphere College can contact me by phone, WhatsApp or email
                        about this course.
                      </span>
                    </label>
                    <a
                      href={COLLEGE.privacyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-8 mt-1 inline-flex min-h-[44px] items-center text-base font-semibold text-[#0F7A69] underline underline-offset-4"
                    >
                      Read our Privacy Policy
                    </a>
                  </div>

                  {error ? (
                    <p aria-live="polite" className="rounded-xl bg-red-50 px-4 py-3 text-base text-red-800">
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
                    className="min-h-[52px] rounded-xl border border-gray-300 px-5 text-base font-semibold text-gray-800 transition hover:bg-gray-50"
                  >
                    Back
                  </button>
                  {step === 2 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!stepValid[2]}
                      className="min-h-[52px] flex-1 rounded-xl bg-gray-900 px-5 text-base font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-600"
                    >
                      Next
                    </button>
                  ) : null}
                  {step === 3 ? (
                    <button
                      type="submit"
                      disabled={!stepValid[3] || isSubmitting}
                      className="min-h-[52px] flex-1 rounded-xl bg-[#C8304A] px-4 text-base font-semibold text-white transition hover:bg-[#B42A42] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-600"
                    >
                      {isSubmitting ? "Sending…" : "Send, a counsellor will WhatsApp you"}
                    </button>
                  ) : null}
                </div>
              ) : null}

              <p className="mt-5 text-center text-sm leading-6 text-gray-600">
                Your details go only to our admissions team.
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
  const waText = `Hi, I'm ${name.trim()}. I just sent my details for the ${course.title} (${course.code}). Can you tell me the next class date and fees?`;

  return (
    <div className="px-5 py-8 text-center sm:px-7">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F6F2]">
        <svg className="h-7 w-7 text-[#0F7A69]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-gray-900">Thank you, {firstName}</h3>
      <p className="mx-auto mt-2 max-w-sm text-base leading-7 text-gray-700">
        We got your details for <strong className="font-semibold text-gray-900">{course.code}</strong>.
        <br />
        A counsellor will WhatsApp you soon.
      </p>
      <WhatsAppLink
        location="form_success"
        text={waText}
        className="mt-6 flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#1E7F4F] px-5 text-base font-semibold text-white transition hover:bg-[#186A41]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Chat with us now on WhatsApp
      </WhatsAppLink>
      <p className="mt-4 text-sm leading-6 text-gray-600">
        {CONTACT.label} · {CONTACT.phone}
        <br />
        Want to finish online?{" "}
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#0F7A69] underline underline-offset-2"
        >
          Fill in the registration form
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
      className={`group flex min-h-[64px] w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition ${
        selected
          ? "border-[#0F7A69] bg-[#E7F6F2]"
          : "border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50"
      }`}
    >
      <span className="min-w-0">
        <span className="block text-base font-semibold text-gray-900">{title}</span>
        <span className="mt-0.5 block text-sm text-gray-600">{hint}</span>
      </span>
      <svg
        className="h-5 w-5 shrink-0 text-gray-500 transition group-hover:translate-x-0.5 group-hover:text-[#0F7A69]"
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
  "min-h-[52px] rounded-xl border border-gray-400 bg-white px-3.5 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-[#0F7A69] focus:ring-4 focus:ring-[#0F7A69]/15";

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
      <label htmlFor={htmlFor} className="mb-2 block text-base font-medium text-gray-900">
        {label}
      </label>
      {children}
    </div>
  );
}
