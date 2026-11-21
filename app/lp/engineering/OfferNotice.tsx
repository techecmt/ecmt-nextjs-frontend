"use client";

import * as React from "react";
import { REGISTRATION_FEE, REGISTRATION_OFFER, formatIntake, singaporeToday } from "./campaign";

const noop = () => () => {};

/** True while the fixed-date registration offer runs (Singapore time). */
export function isOfferActive(today = singaporeToday()) {
  return REGISTRATION_OFFER.endsOn !== null && today <= REGISTRATION_OFFER.endsOn;
}

/**
 * "Registration fee S$109 waived for the <intake> intake. Offer ends <date>."
 * Rendered by the server while the offer is live at build/revalidate time, and
 * re-checked in the browser so it disappears on the day after it ends even if
 * the cached page is older.
 */
export default function OfferNotice({ className = "" }: { className?: string }) {
  const active = React.useSyncExternalStore(noop, () => isOfferActive(), () => isOfferActive());
  if (!active || !REGISTRATION_OFFER.endsOn) return null;
  return (
    <p className={className}>
      Registration fee S${REGISTRATION_FEE} waived for the {REGISTRATION_OFFER.intakeLabel} intake.
      Offer ends {formatIntake(REGISTRATION_OFFER.endsOn)}.
    </p>
  );
}
