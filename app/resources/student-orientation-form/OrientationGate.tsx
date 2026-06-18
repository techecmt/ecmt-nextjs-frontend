"use client";

import { useEffect, useMemo, useState } from "react";
import { courseData } from "../../data/courses";
import PdfReader from "./PdfReader";

type OrientationGateProps = {
  pdfUrl: string;
  documentKey: string;
};

type ActiveSession = {
  sessionId: string;
  requiredSeconds: number;
  studentName: string;
  course: string;
  createdAt: number;
};

const STORAGE_PREFIX = "orientation-session:";
// Resume a stored session for up to 24h before asking the student to re-enter.
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

export default function OrientationGate({
  pdfUrl,
  documentKey,
}: OrientationGateProps) {
  const storageKey = `${STORAGE_PREFIX}${documentKey}`;

  const [session, setSession] = useState<ActiveSession | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [nric, setNric] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const courseGroups = useMemo(
    () =>
      courseData.map((category) => ({
        label: category.title,
        options: category.courses.map((c) => c.title),
      })),
    [],
  );

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as ActiveSession;
        if (
          parsed?.sessionId &&
          Date.now() - (parsed.createdAt ?? 0) < SESSION_TTL_MS
        ) {
          setSession(parsed);
        } else {
          window.localStorage.removeItem(storageKey);
        }
      }
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, [storageKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!course) {
      setError("Please select your course.");
      return;
    }
    if (!/^\d{4}$/.test(nric)) {
      setError("Please enter the last 4 digits of your NRIC.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/orientation/start/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: trimmedName,
          course,
          nricLast4: nric,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      const next: ActiveSession = {
        sessionId: data.sessionId,
        requiredSeconds: data.requiredSeconds,
        studentName: trimmedName,
        course,
        createdAt: Date.now(),
      };
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // non-fatal if storage is unavailable
      }
      setSession(next);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleStartOver = () => {
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
    setSession(null);
    setName("");
    setCourse("");
    setNric("");
  };

  if (!hydrated) {
    return (
      <div className="flex h-40 items-center justify-center text-gray-400">
        Loading…
      </div>
    );
  }

  if (session) {
    return (
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm shadow-sm">
          <span className="text-gray-700">
            Reading as{" "}
            <span className="font-semibold text-gray-900">
              {session.studentName}
            </span>{" "}
            <span className="text-gray-400">·</span> {session.course}
          </span>
          <button
            type="button"
            onClick={handleStartOver}
            className="text-xs font-semibold text-[#EE4A62] hover:underline"
          >
            Not you? Start over
          </button>
        </div>

        <PdfReader
          pdfUrl={pdfUrl}
          sessionId={session.sessionId}
          requiredSeconds={session.requiredSeconds}
          studentName={session.studentName}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="bg-linear-to-br from-[#1AB69D] to-[#16917f] px-6 py-6 text-white">
          <h1 className="text-xl font-bold md:text-2xl">
            Student Orientation
          </h1>
          <p className="mt-1 text-sm text-white/90">
            Please enter your details to access the orientation document. Your
            reading progress will be recorded.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">
              Full Name <span className="text-[#EE4A62]">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 text-gray-800 outline-none transition-colors focus:border-[#1AB69D] focus:ring-2 focus:ring-[#1AB69D]/20"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">
              Course <span className="text-[#EE4A62]">*</span>
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2.5 text-gray-800 outline-none transition-colors focus:border-[#1AB69D] focus:ring-2 focus:ring-[#1AB69D]/20"
            >
              <option value="">Select your course</option>
              {courseGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </optgroup>
              ))}
              <option value="Other / Not listed">Other / Not listed</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-800">
              Last 4 digits of NRIC <span className="text-[#EE4A62]">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={nric}
              onChange={(e) =>
                setNric(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              required
              maxLength={4}
              className="w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 tracking-[0.4em] text-gray-800 outline-none transition-colors focus:border-[#1AB69D] focus:ring-2 focus:ring-[#1AB69D]/20"
              placeholder="1234"
            />
            <p className="mt-1 text-xs text-gray-400">
              Used only to identify your submission.
            </p>
          </div>

          {error && <p className="text-sm text-[#EE4A62]">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[#1AB69D] px-5 py-3 font-semibold text-white transition-all hover:bg-[#16917f] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Opening document…" : "Open the document"}
          </button>
        </form>
      </div>
    </div>
  );
}
