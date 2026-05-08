"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmissionBanner({ success }: { success: boolean }) {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => dismiss(), 8000);
    return () => clearTimeout(timer);
  });

  function dismiss() {
    setVisible(false);
    router.replace("/forms/course-evaluation-form", { scroll: false });
  }

  if (!visible) return null;

  return (
    <div
      role="alert"
      className={`mb-6 flex items-start justify-between gap-3 rounded-2xl border px-5 py-4 shadow-sm transition-all ${
        success
          ? "border-green-200 bg-green-50 text-green-800"
          : "border-red-200 bg-red-50 text-red-800"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-xl leading-none" aria-hidden="true">
          {success ? "✓" : "✕"}
        </span>
        <div>
          <p className="text-sm font-semibold md:text-base">
            {success
              ? "Thank you! Your evaluation has been submitted successfully."
              : "Something went wrong. Please try submitting again."}
          </p>
          {success && (
            <p className="mt-1 text-xs text-green-600">
              Your feedback helps us improve our courses and training quality.
            </p>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded-lg p-1 text-current opacity-60 transition-opacity hover:opacity-100"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
