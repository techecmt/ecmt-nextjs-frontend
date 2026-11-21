"use client";

import * as React from "react";
import { CONTACT } from "./campaign";
import { openLeadForm } from "./events";
import { WhatsAppIcon } from "./icons";
import WhatsAppLink from "./WhatsAppLink";

/**
 * Bottom-of-screen actions:
 * - A "Check if I can join" bar that slides in once the hero is scrolled past
 *   (watched via #hero-end).
 * - A floating 56px WhatsApp button (bottom-right), shown at the same time. It
 *   sits in the bar's 84px right gutter, so the two never overlap.
 */
export default function StickyBar() {
  const [pastHero, setPastHero] = React.useState(false);

  React.useEffect(() => {
    const marker = document.getElementById("hero-end");
    if (!marker) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      // Past the hero once the marker has scrolled above the viewport.
      setPastHero(marker.getBoundingClientRect().top < 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={!pastHero}
        inert={!pastHero}
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur transition-transform duration-300 motion-reduce:transition-none ${
          pastHero ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Right padding leaves room for the 56px WhatsApp button + gap. */}
        <div className="mx-auto flex max-w-6xl items-center gap-3 py-3 pl-4 pr-[84px]">
          <button
            type="button"
            onClick={() => openLeadForm({ placement: "sticky_bottom" })}
            className="min-h-[56px] flex-1 rounded-xl bg-[#C8304A] px-5 text-base font-semibold text-white transition hover:bg-[#B42A42] sm:flex-none sm:px-8"
          >
            Check if I can join
          </button>
          <p className="hidden text-sm text-gray-600 sm:block">
            It takes 1 minute. No pressure.
          </p>
        </div>
      </div>

      <WhatsAppLink
        location="float"
        aria-label={`Chat with ${CONTACT.label} on WhatsApp, ${CONTACT.phone}`}
        // 12px up from the bottom: on its own it floats; with the bar up it
        // sits inside the bar's 84px right gutter, level with the button.
        // Hidden in the hero (which has its own WhatsApp buttons) so it never
        // covers the trust line on small phones.
        className={`fixed bottom-[calc(env(safe-area-inset-bottom)+12px)] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E7F4F] text-white shadow-lg shadow-black/20 transition duration-300 hover:bg-[#186A41] motion-reduce:transition-none ${
          pastHero ? "opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </WhatsAppLink>
    </>
  );
}
