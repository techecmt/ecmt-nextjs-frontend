"use client";

import { whatsappLink } from "./campaign";
import { trackEvent } from "./events";

export type WhatsAppLocation = "hero" | "sticky" | "final" | "float" | "form_success";

/** WhatsApp link that reports `whatsapp_click { location }` to the dataLayer. */
export default function WhatsAppLink({
  location,
  text,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  location: WhatsAppLocation;
  text?: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackEvent("whatsapp_click", { location })}
      className={className}
    >
      {children}
    </a>
  );
}
