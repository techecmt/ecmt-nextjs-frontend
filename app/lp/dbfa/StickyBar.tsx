"use client";

import * as React from "react";
import { COURSE_TITLE, INTAKE, PRIMARY_COUNSELLOR, SEATS, whatsappLink } from "./campaign";

const WA_TEXT = `Hi ${PRIMARY_COUNSELLOR.name}, I'm interested in the ${COURSE_TITLE} (${INTAKE.startLabel} intake). Could you share the fees and seat availability?`;

function track(event: string) {
  if (typeof window === "undefined") return;
  (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
    event,
    placement: "sticky_bar",
    course: COURSE_TITLE,
  });
}

export default function StickyBar() {
  const [scrolledPast, setScrolledPast] = React.useState(false);
  const [formOnScreen, setFormOnScreen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScrolledPast(window.scrollY > 520);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar sits exactly where the form's own buttons are. While the form is on
  // screen the bar is redundant, and leaving it up means taps aimed at "Reserve
  // my seat" inside the form hit the bar instead.
  React.useEffect(() => {
    const form = document.getElementById("apply");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFormOnScreen(entry.isIntersecting),
      { rootMargin: "0px 0px -72px 0px" },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !formOnScreen;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <div className="hidden min-w-0 flex-1 sm:block">
          <p className="truncate text-sm font-bold text-gray-900">
            Free registration · Save S$109
          </p>
          <p className="truncate text-xs text-gray-500">
            {SEATS.remaining} seats left · starts {INTAKE.startLabel}
          </p>
        </div>
        <a
          href="#apply"
          onClick={() => track("lp_sticky_apply_click")}
          className="flex-1 rounded-xl bg-[#EE4A62] px-4 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#d93d54] sm:flex-none sm:px-6"
        >
          Reserve my seat
        </a>
        <a
          href={whatsappLink(PRIMARY_COUNSELLOR.wa, WA_TEXT)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("lp_whatsapp_click")}
          aria-label={`WhatsApp ${PRIMARY_COUNSELLOR.name} on ${PRIMARY_COUNSELLOR.phone}`}
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#1da851]"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.136-.136.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.244-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.4" />
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
