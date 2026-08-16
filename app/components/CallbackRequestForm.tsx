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

type FormData = {
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
        throw new Error(result.error || "Unable to submit your callback request.");
      }

      setFormData(initialFormData());
      setMessage({
        type: "success",
        text: "Thank you. A student counsellor will contact you at your preferred time.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Unable to submit your callback request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
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
        <Field label="Best date for a callback" htmlFor="callback-date">
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
        <Field label="Best time for a callback" htmlFor="callback-time">
          <input
            id="callback-time"
            type="time"
            required
            value={formData.preferredTime}
            onChange={(event) => updateField("preferredTime", event.target.value)}
            className={inputClassName}
          />
        </Field>
      </div>

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
        {isSubmitting ? "Submitting request…" : "Request a callback"}
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
