"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Download,
  Copy,
  Check,
  Facebook,
  Instagram,
  MessageCircle,
  Twitter,
  CalendarDays,
  MapPin,
} from "lucide-react";
import {
  type NewsEvent,
  formatEventDate,
  groupEventsByYearMonth,
} from "./events";

type Props = {
  events: NewsEvent[];
  siteUrl: string;
};

type LightboxState = {
  eventIndex: number;
  imageIndex: number;
} | null;

export default function NewsroomTimeline({ events, siteUrl }: Props) {
  const grouped = useMemo(() => groupEventsByYearMonth(events), [events]);
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);

  const activeEvent =
    lightbox != null ? events[lightbox.eventIndex] : null;
  const activeImage =
    activeEvent != null ? activeEvent.images[lightbox!.imageIndex] : null;

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const next = useCallback(() => {
    setLightbox((s) => {
      if (!s) return s;
      const ev = events[s.eventIndex];
      return { ...s, imageIndex: (s.imageIndex + 1) % ev.images.length };
    });
  }, [events]);

  const prev = useCallback(() => {
    setLightbox((s) => {
      if (!s) return s;
      const ev = events[s.eventIndex];
      return {
        ...s,
        imageIndex: (s.imageIndex - 1 + ev.images.length) % ev.images.length,
      };
    });
  }, [events]);

  // Lock scroll + keyboard nav when lightbox open
  useEffect(() => {
    if (!lightbox) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, closeLightbox, next, prev]);

  // Reset copy state when image changes
  useEffect(() => {
    setCopied(false);
    setShareError(null);
  }, [lightbox?.eventIndex, lightbox?.imageIndex]);

  // Touch swipe
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const buildShareUrl = (ev: NewsEvent, img: string) => {
    const base = siteUrl.replace(/\/$/, "");
    return {
      pageUrl: `${base}/newsroom/#${ev.id}`,
      imageUrl: `${base}${img}`,
      text: `${ev.title} — ${formatEventDate(ev.date)}`,
    };
  };

  const onCopyLink = async () => {
    if (!activeEvent || !activeImage) return;
    const { imageUrl } = buildShareUrl(activeEvent, activeImage);
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setShareError("Could not copy link");
    }
  };

  const onNativeShare = async () => {
    if (!activeEvent || !activeImage) return;
    const { pageUrl, imageUrl, text } = buildShareUrl(activeEvent, activeImage);
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title: activeEvent.title, text, url: imageUrl || pageUrl });
        return;
      } catch {
        // user cancelled or unsupported – fall through to copy
      }
    }
    onCopyLink();
  };

  return (
    <>
      <div className="relative">
        {/* Vertical timeline rail */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-linear-to-b from-emerald-300/60 via-emerald-200 to-transparent"
        />

        <div className="space-y-16 md:space-y-24">
          {Object.entries(grouped).map(([year, months]) => (
            <section key={year} aria-label={`Events in ${year}`}>
              {/* Year marker */}
              <div className="relative mb-10 md:mb-14 flex md:justify-center">
                <div className="ml-12 md:ml-0 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-2 text-white shadow-lg shadow-emerald-500/20">
                  <span className="text-base md:text-lg font-bold tracking-wide">
                    {year}
                  </span>
                </div>
              </div>

              {Object.entries(months).map(([month, monthEvents]) => (
                <div key={month} className="mb-12 md:mb-16">
                  <div className="relative mb-8 flex md:justify-center">
                    <h3 className="ml-12 md:ml-0 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      {month}
                    </h3>
                  </div>

                  <ul className="space-y-12 md:space-y-16">
                    {monthEvents.map((ev) => {
                      const eventIndex = events.findIndex((e) => e.id === ev.id);
                      const side =
                        (eventIndex % 2 === 0 ? "left" : "right") as
                          | "left"
                          | "right";
                      return (
                        <TimelineItem
                          key={ev.id}
                          event={ev}
                          side={side}
                          onOpen={(imageIndex) =>
                            setLightbox({ eventIndex, imageIndex })
                          }
                        />
                      );
                    })}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && activeEvent && activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeEvent.title} – image ${lightbox.imageIndex + 1} of ${activeEvent.images.length}`}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative w-full h-full sm:w-[92vw] sm:h-[88vh] flex flex-col items-center justify-center px-2 sm:px-6 py-14 sm:py-10"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              key={`${lightbox.eventIndex}-${lightbox.imageIndex}`}
              className="relative w-full flex-1 animate-in fade-in zoom-in-95 duration-300"
            >
              <Image
                src={activeImage}
                alt={`${activeEvent.title} – photo ${lightbox.imageIndex + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Bottom bar: caption + share */}
            <div className="mt-3 sm:mt-4 w-full max-w-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl bg-white/10 backdrop-blur px-4 py-3 text-white">
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-semibold truncate">
                    {activeEvent.title}
                  </p>
                  <p className="text-xs text-white/70">
                    {formatEventDate(activeEvent.date)} ·{" "}
                    {lightbox.imageIndex + 1} / {activeEvent.images.length}
                  </p>
                </div>

                <ShareBar
                  event={activeEvent}
                  image={activeImage}
                  siteUrl={siteUrl}
                  onCopy={onCopyLink}
                  onNativeShare={onNativeShare}
                  copied={copied}
                  error={shareError}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TimelineItem({
  event,
  side,
  onOpen,
}: {
  event: NewsEvent;
  side: "left" | "right";
  onOpen: (imageIndex: number) => void;
}) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sideClasses =
    side === "left"
      ? "md:pr-[calc(50%+2rem)]"
      : "md:pl-[calc(50%+2rem)] md:text-left";

  return (
    <li
      ref={ref}
      id={event.id}
      className={`relative pl-12 md:pl-0 ${sideClasses} scroll-mt-24`}
    >
      {/* Dot on rail */}
      <span
        aria-hidden
        className={`absolute left-4 sm:left-6 md:left-1/2 top-3 -translate-x-1/2 flex h-4 w-4 items-center justify-center`}
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 ring-4 ring-white" />
      </span>

      <article
        className={`group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 will-change-transform ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
        style={{ transitionProperty: "opacity, transform, box-shadow" }}
      >
        <div className="p-5 sm:p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
              <CalendarDays className="h-4 w-4" />
              {formatEventDate(event.date)}
            </span>
            {event.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
            )}
            <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-700 font-medium">
              {event.images.length} photos
            </span>
          </div>

          <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
            {event.title}
          </h3>
          {event.description && (
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {event.description}
            </p>
          )}
        </div>

        {/* Gallery */}
        <div className="px-5 sm:px-6 md:px-7 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {event.images.slice(0, 8).map((img, i) => (
              <GalleryThumb
                key={img}
                src={img}
                index={i}
                eventTitle={event.title}
                onClick={() => onOpen(i)}
                overlayCount={
                  i === 7 && event.images.length > 8
                    ? event.images.length - 8
                    : 0
                }
              />
            ))}
          </div>

          {event.images.length > 8 && (
            <button
              type="button"
              onClick={() => onOpen(0)}
              className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:shadow-lg hover:shadow-emerald-500/30 active:scale-[0.98]"
            >
              View all {event.images.length} photos
            </button>
          )}
        </div>
      </article>
    </li>
  );
}

function GalleryThumb({
  src,
  index,
  eventTitle,
  onClick,
  overlayCount,
}: {
  src: string;
  index: number;
  eventTitle: string;
  onClick: () => void;
  overlayCount: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open photo ${index + 1}`}
      className="group/thumb relative aspect-square overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5 transition active:scale-[0.98]"
    >
      <Image
        src={src}
        alt={`${eventTitle} – photo ${index + 1}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-110"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100" />
      {overlayCount > 0 && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-white text-lg sm:text-xl font-bold backdrop-blur-[2px]">
          +{overlayCount}
        </span>
      )}
    </button>
  );
}

function ShareBar({
  event,
  image,
  siteUrl,
  onCopy,
  onNativeShare,
  copied,
  error,
}: {
  event: NewsEvent;
  image: string;
  siteUrl: string;
  onCopy: () => void;
  onNativeShare: () => void;
  copied: boolean;
  error: string | null;
}) {
  const base = siteUrl.replace(/\/$/, "");
  const pageUrl = `${base}/newsroom/#${event.id}`;
  const imageUrl = `${base}${image}`;
  const text = `${event.title} — ${formatEventDate(event.date)}`;

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const tw = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(text)}`;
  const wa = `https://wa.me/?text=${encodeURIComponent(`${text} ${imageUrl}`)}`;

  const downloadName = image.split("/").pop() ?? "photo.jpg";

  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      <ShareBtn href={fb} label="Share on Facebook" color="hover:bg-[#1877F2]/80">
        <Facebook className="h-4 w-4" />
      </ShareBtn>
      <ShareBtn href={tw} label="Share on X" color="hover:bg-black/70">
        <Twitter className="h-4 w-4" />
      </ShareBtn>
      <ShareBtn href={wa} label="Share on WhatsApp" color="hover:bg-[#25D366]/80">
        <MessageCircle className="h-4 w-4" />
      </ShareBtn>
      {/* Instagram – use native share sheet (Instagram doesn't allow direct web sharing) */}
      <button
        type="button"
        onClick={onNativeShare}
        aria-label="Share to Instagram via your device"
        title="Share to Instagram (uses your device's share sheet)"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-linear-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
      >
        <Instagram className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onNativeShare}
        aria-label="Share"
        title="Share"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
      >
        <Share2 className="h-4 w-4" />
      </button>
      <a
        href={image}
        download={downloadName}
        aria-label="Download photo"
        title="Download"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
      >
        <Download className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy image link"
        title={copied ? "Link copied" : "Copy image link"}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      {error && <span className="text-xs text-red-200">{error}</span>}
    </div>
  );
}

function ShareBtn({
  href,
  label,
  color,
  children,
}: {
  href: string;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition ${color}`}
    >
      {children}
    </a>
  );
}
