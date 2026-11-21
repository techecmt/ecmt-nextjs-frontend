"use client";

import { openLeadForm } from "./events";

/** Opens the lead form. `lp_form_open` is tracked by the modal when it opens. */
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
      onClick={() => openLeadForm({ courseId, placement })}
    >
      {children}
    </button>
  );
}
