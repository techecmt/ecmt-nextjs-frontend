"use client";

import { openLeadForm, trackEvent } from "./events";

export default function OpenFormButton({
  courseId,
  placement,
  className,
  children,
}: {
  courseId?: string;
  placement: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackEvent("lp_cta_click", { placement, course_id: courseId ?? null });
        openLeadForm({ courseId, placement });
      }}
    >
      {children}
    </button>
  );
}
