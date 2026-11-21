"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const YOUTUBE_ID = "NveGnjEdhjY";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribeToReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

export default function GraduationVideo() {
  // Autoplay is motion. The poster stays in place when the visitor asks for less motion.
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => true
  );

  return (
    <figure
      className="relative aspect-[16/10] overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2 lg:aspect-auto"
      style={{ containerType: "size" }}
    >
      <Image
        src="/herosections/graduation_2026_hero.jpg"
        alt="Edusphere College graduands celebrating at the 2026 graduation ceremony"
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        className="object-cover object-bottom"
      />
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&playsinline=1`}
            title="Edusphere College Graduation Ceremony 2026 - Part 2"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            loading="lazy"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              border: 0,
              width: "max(100cqw, calc(100cqh * 16 / 9))",
              height: "max(100cqh, calc(100cqw * 9 / 16))",
            }}
          />
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent px-5 pt-16 pb-5 text-sm font-medium text-white">
        Graduation ceremony 2026
      </figcaption>
    </figure>
  );
}
