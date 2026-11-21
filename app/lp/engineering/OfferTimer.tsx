"use client";

import { pad, splitSeconds, useOfferSeconds } from "./offer";

/** Inline "23:41:07" text; "--:--:--" before mount, "Expired" after. */
export function OfferClock({ className = "" }: { className?: string }) {
  const seconds = useOfferSeconds();
  if (seconds === 0) return <span className={className}>Expired</span>;
  if (seconds === null) return <span className={`tabular-nums ${className}`}>--:--:--</span>;
  const t = splitSeconds(seconds);
  return (
    <span className={`tabular-nums ${className}`} role="timer" aria-live="off">
      {pad(t.hours)}:{pad(t.minutes)}:{pad(t.seconds)}
    </span>
  );
}

/** Hours / mins / secs tiles for the offer cards. */
export function OfferTiles({ size = "md" }: { size?: "sm" | "md" }) {
  const seconds = useOfferSeconds();
  const t = splitSeconds(seconds ?? 0);
  const units = [
    { value: t.hours, label: "Hours" },
    { value: t.minutes, label: "Mins" },
    { value: t.seconds, label: "Secs" },
  ];
  const tile =
    size === "sm"
      ? "min-w-[52px] rounded-lg px-2 py-1.5"
      : "min-w-[64px] rounded-xl px-3 py-2.5 sm:min-w-[72px]";
  const digits = size === "sm" ? "text-lg" : "text-2xl sm:text-[28px]";

  return (
    <div className="flex items-center gap-2" role="timer" aria-label="Time left on the free registration offer">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div className={`${tile} bg-white text-center ring-1 ring-gray-200`}>
            <div className={`${digits} font-semibold leading-none tabular-nums text-gray-900`}>
              {seconds === null ? "--" : pad(unit.value)}
            </div>
            <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">
              {unit.label}
            </div>
          </div>
          {index < units.length - 1 ? (
            <span className="text-lg font-semibold text-gray-300" aria-hidden="true">:</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

/** Renders children only while the offer is live (or not yet known). */
export function WhileOfferActive({
  children,
  expired = null,
}: {
  children: React.ReactNode;
  expired?: React.ReactNode;
}) {
  const seconds = useOfferSeconds();
  return <>{seconds === 0 ? expired : children}</>;
}
