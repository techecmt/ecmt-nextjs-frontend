"use client";

import * as React from "react";
import { INTAKE } from "./campaign";

const TARGET = new Date(INTAKE.startsAtIso).getTime();

function remaining() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
    over: diff === 0,
  };
}

export default function Countdown({ tone = "dark" }: { tone?: "dark" | "light" }) {
  // Render zeros on the server so markup matches, then tick on the client.
  const [time, setTime] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    over: false,
  });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setTime(remaining());
    const id = window.setInterval(() => setTime(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (time.over) {
    return (
      <p className={tone === "dark" ? "text-sm text-white/80" : "text-sm text-gray-600"}>
        This intake has started — ask us about the next available date.
      </p>
    );
  }

  const cell =
    tone === "dark"
      ? "bg-white/10 text-white ring-1 ring-white/20"
      : "bg-white text-gray-900 ring-1 ring-gray-200 shadow-sm";
  const caption = tone === "dark" ? "text-white/60" : "text-gray-500";

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Mins" },
    { value: time.seconds, label: "Secs" },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3" suppressHydrationWarning>
      {units.map((unit) => (
        <div
          key={unit.label}
          className={`${cell} min-w-[58px] rounded-xl px-2.5 py-2 text-center sm:min-w-[66px]`}
        >
          <div className="text-xl font-bold tabular-nums sm:text-2xl">
            {mounted ? String(unit.value).padStart(2, "0") : "--"}
          </div>
          <div className={`${caption} text-[10px] font-semibold uppercase tracking-wider`}>
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
