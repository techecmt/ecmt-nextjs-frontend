 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

// Editable content for hero slides
const heroSlides: HeroSlide[] = [
  {
    image: "/herosections/adec_hero.png",
    alt: "Students in a classroom at Edusphere College",
    eyebrow: "Admissions Open",
    title: "Advanced Diploma in Engineering Coordinator (Building Services & Fire Safety)",
    description:
      "prepares learners to coordinate and manage engineering systems within modern buildings and infrastructure projects.",
    primaryCta: { label: "Learn More", href: "/advanced-diploma-in-engineering-coordinator/" },
    secondaryCta: { label: "Contact Us", href: "/contact-us" },
  },
  {
    image: "/herosections/dbfa_hero.png",
    alt: "Students learning business and finance concepts",
    eyebrow: "Future Ready",
    title: "Flexible Programmes For Modern Learners",
    description:
      "Study with experienced educators through part-time and career-oriented programmes built for today's workforce.",
    primaryCta: { label: "View Diploma Courses", href: "/#courses" },
    secondaryCta: { label: "Contact Us", href: "/contact-us" },
  },
  {
    image: "/herosections/autocad_hero.png",
    alt: "Professional using AutoCAD for architectural drafting and BIM modelling",
    eyebrow: "Certificate Programme",
    title: "Specialised Certificate in AutoCAD & BIM Applications",
    description:
      "Master 2D AutoCAD drafting and Revit BIM fundamentals for civil and MEP projects through practical, part-time training.",
    primaryCta: { label: "Learn More", href: "/certificate-courses-in-singapore/certificate-autocad-bim/" },
    secondaryCta: { label: "Contact Us", href: "/contact-us" },
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
  const slides = useMemo(() => heroSlides, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const goTo = (index: number) => setActiveIndex(index);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const onTouchStart = (x: number) => setTouchStartX(x);
  const onTouchEnd = (x: number) => {
    if (touchStartX === null) return;
    const delta = x - touchStartX;
    const threshold = 40;
    if (delta > threshold) goPrev();
    if (delta < -threshold) goNext();
    setTouchStartX(null);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero slider"
    >
      <div
        className="relative h-[74svh] min-h-[460px] max-h-[760px] w-full md:h-[78svh]"
        onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              <div className="relative z-10 container mx-auto flex h-full w-full max-w-[1600px] items-end px-6 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 md:px-12 md:pb-20 md:pt-28 lg:items-center lg:px-14 lg:pb-20 lg:pt-24 xl:px-20">
                <div className="max-w-3xl text-white pb-safe sm:pb-2 flex flex-col gap-4 md:gap-5 lg:gap-6">
                  {slide.eyebrow && (
                    <span className="inline-flex w-fit rounded-full bg-[#1AB69D]/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7ef3df] ring-1 ring-[#1AB69D]/35 sm:px-4">
                      {slide.eyebrow}
                    </span>
                  )}
                  <h1 className="text-balance text-3xl font-bold leading-tight drop-shadow-sm md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-2xl text-pretty text-sm leading-relaxed text-gray-100/95 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 md:gap-4 md:pt-0">
                    {slide.primaryCta && (
                      <Link
                        href={slide.primaryCta.href}
                        className="rounded-full bg-[#1AB69D] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#149985] md:px-6 md:py-3 md:text-base"
                      >
                        {slide.primaryCta.label}
                      </Link>
                    )}
                    {slide.secondaryCta && (
                      <Link
                        href={slide.secondaryCta.href}
                        className="rounded-full border border-white/55 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:px-6 md:py-3 md:text-base"
                      >
                        {slide.secondaryCta.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/45 md:grid"
          >
            &#10094;
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/45 md:grid"
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-6">
            {slides.map((slide, index) => (
              <button
                key={`${slide.image}-dot`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[#1AB69D]"
                    : "w-2.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
