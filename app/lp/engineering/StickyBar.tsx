"use client";

import * as React from "react";
import { CONTACT, OFFER, whatsappLink } from "./campaign";
import { openLeadForm, trackEvent } from "./events";
import { WhatsAppIcon } from "./icons";
import { OfferClock, WhileOfferActive } from "./OfferTimer";

const WA_TEXT =
  "Hi, I'm interested in your part-time engineering diplomas (DCE / DME / ADME / ADPC). Could you share the next intake and fees?";

export default function StickyBar() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 560);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <WhileOfferActive
            expired={<p className="truncate text-sm font-semibold text-gray-900">Weekend engineering diplomas</p>}
          >
            <p className="truncate text-[11px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
              Free registration · save S${OFFER.registrationFee}
            </p>
            <p className="text-base font-semibold text-[#EE4A62] sm:text-lg">
              <OfferClock />
            </p>
          </WhileOfferActive>
        </div>
        <button
          type="button"
          onClick={() => {
            trackEvent("lp_cta_click", { placement: "sticky_bar" });
            openLeadForm({ placement: "sticky_bar" });
          }}
          className="shrink-0 rounded-xl bg-[#EE4A62] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d93d54] sm:px-7"
        >
          Apply now
        </button>
        <a
          href={whatsappLink(WA_TEXT)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("lp_whatsapp_click", { placement: "sticky_bar" })}
          aria-label={`WhatsApp ${CONTACT.label} on ${CONTACT.phone}`}
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1da851] sm:px-5"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
