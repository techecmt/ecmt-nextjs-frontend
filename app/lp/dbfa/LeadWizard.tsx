"use client";

import * as React from "react";
import {
  COURSE_TITLE,
  INTAKE,
  PRIMARY_COUNSELLOR,
  REGISTRATION_URL,
  SEATS,
  whatsappLink,
} from "./campaign";

const COUNTRY_CODES = [
  "+65", "+60", "+91", "+62", "+63", "+95", "+880", "+94", "+977", "+86", "+84", "+66",
];

const START_WINDOWS = [
  {
    value: "this-intake",
    label: `Join the ${INTAKE.startLabel} intake`,
    hint: "I want a seat in this batch",
    startDate: INTAKE.startLabel,
  },
  {
    value: "next-3-months",
    label: "Within the next 3 months",
    hint: "Tell me about the next intake",
    startDate: "Next intake (within 3 months)",
  },
  {
    value: "exploring",
    label: "Still comparing options",
    hint: "I'd like details and fees first",
    startDate: "Still deciding",
  },
] as const;

const AGE_BANDS = ["18 – 24", "25 – 29", "30 – 39", "40 and above"];

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

type FormState = {
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

const STEP_TITLES = ["Your intake", "Your eligibility", "Your contact details"];

function trackEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push({ event, course: COURSE_TITLE, ...payload });
}

function readUtm() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const utm: Record<string, string> = {};
  for (const key of keys) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  if (!utm.utm_source) utm.utm_source = "landing_page";
  if (!utm.utm_medium) utm.utm_medium = "lp_dbfa";
  if (!utm.utm_campaign) utm.utm_campaign = "diwali_dbfa_nov2026";
  return utm;
}

export default function LeadWizard() {
  const [step, setStep] = React.useState(0);
  const [form, setForm] = React.useState<FormState>(INITIAL);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Steps differ in height. If the card header has scrolled off the top, pull it
  // back so the user never lands mid-card after advancing.
  React.useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (card.getBoundingClientRect().top < 0) {
      card.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [step, submitted]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  const stepValid = [
    Boolean(form.startWindow),
    Boolean(form.age && form.qualification && form.workPass && form.nationality.trim()),
    Boolean(
      form.name.trim() &&
        form.phone.trim().length >= 7 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
        form.consent,
    ),
  ];

  function goNext() {
    if (!stepValid[step]) return;
    trackEvent("lp_form_step_complete", { step: step + 1, step_name: STEP_TITLES[step] });
    setStep((current) => Math.min(current + 1, 2));
  }

  function chooseStartWindow(value: string) {
    update("startWindow", value);
    trackEvent("lp_form_step_complete", { step: 1, step_name: STEP_TITLES[0] });
    setStep(1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key !== "Enter") return;
    const target = event.target as HTMLElement;
    if (target.tagName === "TEXTAREA") return;
    // On steps 1 and 2 there is no submit button, so Enter would otherwise do
    // nothing at all. Treat it as "Continue".
    if (step < 2) {
      event.preventDefault();
      goNext();
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!stepValid[2] || isSubmitting) return;
    if (form.website) return; // honeypot

    setIsSubmitting(true);
    setError(null);

    const chosen = START_WINDOWS.find((option) => option.value === form.startWindow);

    try {
      const response = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          countryCode: form.countryCode,
          phone: form.phone.trim(),
          course: COURSE_TITLE,
          courseType: "Diploma",
          nationality: form.nationality.trim(),
          startDate: chosen?.startDate ?? INTAKE.startLabel,
          startWindow: chosen?.label ?? form.startWindow,
          age: form.age,
          qualification: form.qualification,
          workPass: form.workPass,
          message: `Diwali campaign enquiry — ${chosen?.label ?? ""}`,
          formSource: "lp_dbfa_wizard",
          pageUrl: window.location.href,
          utm: readUtm(),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "We could not save your details.");
      }

      trackEvent("lp_lead_submit", {
        start_window: form.startWindow,
        pass_status: form.workPass,
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

  if (submitted) {
    const firstName = form.name.trim().split(/\s+/)[0] || "there";
    const waText = `Hi ${PRIMARY_COUNSELLOR.name}, I'm ${form.name.trim()}. I just applied online for the ${COURSE_TITLE} (${INTAKE.startLabel} intake). Please confirm my seat and the free registration offer.`;

    return (
      <div
        id="apply"
        ref={cardRef}
        className="scroll-mt-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-900/5 sm:p-8"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1AB69D]/10">
          <svg className="h-7 w-7 text-[#1AB69D]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-center text-2xl font-bold text-gray-900">
          You&apos;re on the list, {firstName}
        </h3>
        <p className="mt-2 text-center text-sm leading-6 text-gray-600">
          Your application for the {INTAKE.startLabel} intake has been received. A student
          counsellor will call you within 1 working day to confirm your seat.
        </p>
        <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-center ring-1 ring-amber-200">
          <p className="text-sm font-semibold text-amber-900">
            Want your seat held today?
          </p>
          <p className="mt-1 text-xs leading-5 text-amber-800">
            Message {PRIMARY_COUNSELLOR.name} on WhatsApp — seats are released in order of
            confirmation.
          </p>
        </div>
        <a
          href={whatsappLink(PRIMARY_COUNSELLOR.wa, waText)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("lp_whatsapp_click", { placement: "success_panel" })}
          className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-4 text-base font-bold text-white transition hover:bg-[#1da851]"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.136-.136.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.244-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.4" />
          </svg>
          WhatsApp {PRIMARY_COUNSELLOR.name} now
        </a>
        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
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

  return (
    <div
      id="apply"
      ref={cardRef}
      className="scroll-mt-4 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5"
    >
      <div className="bg-gradient-to-r from-[#0f3d36] to-[#1AB69D] px-6 py-5 text-white">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold leading-tight">Apply for the {INTAKE.startLabel} intake</h3>
          <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ring-1 ring-white/25">
            Step {step + 1} / 3
          </span>
        </div>
        <p className="mt-1 text-sm text-white/80">
          Takes 40 seconds · {SEATS.remaining} of {SEATS.total} seats left
        </p>
        <div className="mt-4 flex gap-1.5">
          {STEP_TITLES.map((title, index) => (
            <div
              key={title}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                index <= step ? "bg-white" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="px-6 py-6 sm:px-7">
        {step === 0 ? (
          <fieldset>
            <legend className="text-base font-bold text-gray-900">
              When would you like to start?
            </legend>
            <p className="mt-1 text-sm text-gray-500">
              This tells your counsellor how urgently to hold a seat.
            </p>
            <div className="mt-4 space-y-3">
              {START_WINDOWS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => chooseStartWindow(option.value)}
                  className={`group flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                    form.startWindow === option.value
                      ? "border-[#1AB69D] bg-[#effbf8] shadow-sm"
                      : "border-gray-200 bg-white hover:border-[#1AB69D]/60 hover:bg-[#f7fdfb]"
                  }`}
                >
                  <span>
                    <span className="block text-sm font-bold text-gray-900">{option.label}</span>
                    <span className="mt-0.5 block text-xs text-gray-500">{option.hint}</span>
                  </span>
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#1AB69D]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                  </svg>
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <div className="space-y-5">
            <div>
              <h4 className="text-base font-bold text-gray-900">Check your eligibility</h4>
              <p className="mt-1 text-sm text-gray-500">
                We only shortlist applicants who meet the entry criteria.
              </p>
            </div>

            <Field label="Your age" htmlFor="lp-age">
              <select
                id="lp-age"
                required
                value={form.age}
                onChange={(event) => update("age", event.target.value)}
                className={inputClass}
              >
                <option value="">Select your age range</option>
                {AGE_BANDS.map((band) => (
                  <option key={band} value={band}>
                    {band}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Highest qualification" htmlFor="lp-qualification">
              <select
                id="lp-qualification"
                required
                value={form.qualification}
                onChange={(event) => update("qualification", event.target.value)}
                className={inputClass}
              >
                <option value="">Select your qualification</option>
                {QUALIFICATIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Your pass / residency status" htmlFor="lp-pass">
              <select
                id="lp-pass"
                required
                value={form.workPass}
                onChange={(event) => update("workPass", event.target.value)}
                className={inputClass}
              >
                <option value="">Select your status</option>
                {PASS_STATUSES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Nationality" htmlFor="lp-nationality">
              <input
                id="lp-nationality"
                required
                value={form.nationality}
                onChange={(event) => update("nationality", event.target.value)}
                className={inputClass}
                placeholder="e.g. Indian, Malaysian, Singaporean"
              />
            </Field>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-5">
            <div>
              <h4 className="text-base font-bold text-gray-900">Where should we confirm?</h4>
              <p className="mt-1 text-sm text-gray-500">
                One call to confirm your seat and the free registration offer.
              </p>
            </div>

            <Field label="Full name" htmlFor="lp-name">
              <input
                id="lp-name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                className={inputClass}
                placeholder="As printed on your passport"
              />
            </Field>

            <Field label="WhatsApp number" htmlFor="lp-phone">
              <div className="flex gap-2">
                <select
                  aria-label="Country code"
                  value={form.countryCode}
                  onChange={(event) => update("countryCode", event.target.value)}
                  className={`${fieldBase} w-[88px] shrink-0 px-2.5`}
                >
                  {COUNTRY_CODES.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  id="lp-phone"
                  type="tel"
                  required
                  minLength={7}
                  autoComplete="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className={`${fieldBase} w-full min-w-0 flex-1`}
                  placeholder="9123 4567"
                />
              </div>
            </Field>

            <Field label="Email address" htmlFor="lp-email">
              <input
                id="lp-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                className={inputClass}
                placeholder="you@example.com"
              />
            </Field>

            <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-gray-50 p-3.5 ring-1 ring-gray-200">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(event) => update("consent", event.target.checked)}
                className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-[#1AB69D]"
              />
              <span className="text-xs leading-5 text-gray-600">
                I agree to be contacted by an Edusphere College student counsellor by phone,
                WhatsApp or email about this diploma.
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
          <label htmlFor="lp-website">Website</label>
          <input
            id="lp-website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </div>

        {step > 0 ? (
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
              className="rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Back
            </button>
            {step === 1 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!stepValid[1]}
                className="flex-1 rounded-xl bg-[#1AB69D] px-5 py-3.5 text-base font-bold text-white transition hover:bg-[#169d88] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={!stepValid[2] || isSubmitting}
                className="flex-1 rounded-xl bg-[#EE4A62] px-5 py-3.5 text-base font-bold text-white transition hover:bg-[#d93d54] disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {isSubmitting ? "Reserving your seat…" : "Reserve my seat"}
              </button>
            )}
          </div>
        ) : null}

        <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">
          Your details go straight to our admissions team. No spam, no sharing.
        </p>
      </form>
    </div>
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
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-gray-800">
        {label} <span className="text-[#EE4A62]">*</span>
      </label>
      {children}
    </div>
  );
}
