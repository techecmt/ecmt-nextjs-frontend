"use client";

import * as React from "react";

import { certificateCourseTitles } from "../data/certificate-courses";
import { courseData } from "../data/courses";
import { wsqCourses } from "../data/wsq-courses";

const CRM_URL =
  process.env.NEXT_PUBLIC_ECMT_CRM_URL ?? "https://ecmt-crm.vercel.app";
const WEBSITE_KEY =
  process.env.NEXT_PUBLIC_ECMT_CRM_WEBSITE_KEY ??
  "e6789d0ad1d758bc6b381fc78bf7a6aa35ca";

const COURSE_OPTIONS = Array.from(
  new Set([
    ...courseData.flatMap((category) => category.courses.map((course) => course.title)),
    ...wsqCourses.map((course) => course.title),
    ...certificateCourseTitles,
  ]),
).sort((left, right) => left.localeCompare(right));

const APPOINTMENT_SLOTS = Array.from({ length: 29 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
});
const CAMPUS_LAST_SLOT = "17:30";

function slotsForMode(mode: AppointmentMode) {
  if (mode !== "campus") return APPOINTMENT_SLOTS;
  return APPOINTMENT_SLOTS.filter((slot) => slot <= CAMPUS_LAST_SLOT);
}

const APPOINTMENT_MODES = [
  { value: "phone", label: "Phone counselling", hint: "A counsellor will call you" },
  { value: "video", label: "Video call", hint: "Meet online at the booked time" },
  { value: "campus", label: "Campus visit", hint: "Visit Edusphere for a face-to-face session" },
] as const;

type AppointmentMode = (typeof APPOINTMENT_MODES)[number]["value"];

type FormData = {
  requestType: "appointment";
  appointmentMode: AppointmentMode;
  durationMinutes: number;
  fullName: string;
  email: string;
  phone: string;
  course: string;
  preferredDate: string;
  preferredTime: string;
  website: string;
};

function singaporeDate() {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  return `${value("year")}-${value("month")}-${value("day")}`;
}

function initialFormData(): FormData {
  return {
    requestType: "appointment",
    appointmentMode: "phone",
    durationMinutes: 30,
    fullName: "",
    email: "",
    phone: "",
    course: "",
    preferredDate: singaporeDate(),
    preferredTime: "09:00",
    website: "",
  };
}

function getUtmParams() {
  const parameters = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
      .map((key) => [key, parameters.get(key)])
      .filter(([, value]) => value),
  );
}

export default function CallbackRequestForm() {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function selectAppointmentMode(mode: AppointmentMode) {
    const availableSlots = slotsForMode(mode);
    setFormData((current) => ({
      ...current,
      appointmentMode: mode,
      preferredTime: availableSlots.includes(current.preferredTime)
        ? current.preferredTime
        : availableSlots[availableSlots.length - 1] ?? "09:00",
    }));
  }

  const availableSlots = slotsForMode(formData.appointmentMode);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(`${CRM_URL}/api/public/callback-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          publicKey: WEBSITE_KEY,
          sourceUrl: window.location.href,
          referrer: document.referrer,
          preferredTimezone:
            Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Singapore",
          utm: getUtmParams(),
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your request.");
      }

      setFormData(initialFormData());
      setMessage({
        type: "success",
        text: "Thank you. Your appointment request has been received. A student counsellor will confirm the slot with you.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to submit your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="mb-2 block text-sm font-semibold text-gray-800">
          How would you like to meet? <span className="text-[#EE4A62]">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {APPOINTMENT_MODES.map((mode) => {
            const selected = formData.appointmentMode === mode.value;
            return (
              <button
                key={mode.value}
                type="button"
                onClick={() => selectAppointmentMode(mode.value)}
                className={`rounded-2xl border px-3.5 py-3 text-left transition ${
                  selected
                    ? "border-[#1AB69D] bg-[#effbf8] shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="block text-sm font-semibold text-gray-900">{mode.label}</span>
                <span className="mt-1 block text-xs leading-5 text-gray-500">{mode.hint}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="callback-full-name">
          <input
            id="callback-full-name"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={inputClassName}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Email address" htmlFor="callback-email">
          <input
            id="callback-email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClassName}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number" htmlFor="callback-phone">
          <input
            id="callback-phone"
            type="tel"
            autoComplete="tel"
            required
            minLength={7}
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClassName}
            placeholder="+65 9123 4567"
          />
        </Field>
        <Field label="Course" htmlFor="callback-course">
          <select
            id="callback-course"
            required
            value={formData.course}
            onChange={(event) => updateField("course", event.target.value)}
            className={inputClassName}
          >
            <option value="">Select a course</option>
            {COURSE_OPTIONS.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Appointment date" htmlFor="callback-date">
          <input
            id="callback-date"
            type="date"
            required
            min={singaporeDate()}
            value={formData.preferredDate}
            onChange={(event) => updateField("preferredDate", event.target.value)}
            className={inputClassName}
          />
        </Field>
        <Field
          label="Available time slot"
          htmlFor="callback-time"
          hint={
            formData.appointmentMode === "campus"
              ? "Campus visits are available from 9:00 am to 5:30 pm."
              : undefined
          }
        >
          <select
            id="callback-time"
            required
            value={formData.preferredTime}
            onChange={(event) => updateField("preferredTime", event.target.value)}
            className={inputClassName}
          >
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {formatSlotLabel(slot)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Session length" htmlFor="callback-duration">
        <select
          id="callback-duration"
          required
          value={String(formData.durationMinutes)}
          onChange={(event) => updateField("durationMinutes", Number(event.target.value))}
          className={inputClassName}
        >
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="callback-website">Website</label>
        <input
          id="callback-website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      {message ? (
        <div
          aria-live="polite"
          className={`rounded-xl px-4 py-3 text-sm ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {message.text}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#1AB69D] px-5 py-3.5 font-semibold text-white transition hover:bg-[#169d88] focus:outline-none focus:ring-4 focus:ring-[#1AB69D]/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting request…" : "Book appointment"}
      </button>
      <p className="text-center text-xs leading-5 text-gray-500">
        By submitting, you agree that an Edusphere student counsellor may contact
        you about your selected course.
      </p>
    </form>
  );
}

const inputClassName =
  "w-full rounded-xl border border-gray-300 bg-white px-3.5 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-4 focus:ring-[#1AB69D]/15";

function formatSlotLabel(slot: string) {
  const [hours, minutes] = slot.split(":").map(Number);
  const suffix = hours >= 12 ? "pm" : "am";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-gray-800">
        {label} <span className="text-[#EE4A62]">*</span>
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-xs leading-5 text-gray-500">{hint}</p> : null}
    </div>
  );
}
