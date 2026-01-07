"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { MdStorefront } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Review {
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime?: string;
  text?: string;
}

interface PlacePayload {
  name: string;
  rating: number | null;
  userRatingsTotal: number;
  placeId: string;
  reviews: Review[];
}

const GOOGLE_BRAND_LETTERS = [
  { letter: "G", color: "#4285F4" },
  { letter: "o", color: "#DB4437" },
  { letter: "o", color: "#F4B400" },
  { letter: "g", color: "#4285F4" },
  { letter: "l", color: "#0F9D58" },
  { letter: "e", color: "#DB4437" },
];

function GoogleBrand() {
  return (
    <span className="font-medium">
      {GOOGLE_BRAND_LETTERS.map((char, index) => (
        <span key={index} style={{ color: char.color }}>
          {char.letter}
        </span>
      ))}
    </span>
  );
}

function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;

  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < full) return <span key={index}>★</span>;
        if (index === full && hasHalf) return <span key={index}>☆</span>;
        return (
          <span key={index} className="text-gray-300">
            ★
          </span>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="h-full rounded-3xl bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-6 flex flex-col border border-white/70">
      <div className="flex items-center gap-3">
        {review.profilePhotoUrl ? (
          <Image
            src={review.profilePhotoUrl}
            alt={review.authorName}
            width={48}
            height={48}
            className="rounded-full border border-white/80 shadow"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#1AB69D]/20 flex items-center justify-center text-[#1AB69D] font-semibold">
            {review.authorName[0]}
          </div>
        )}
        <div className="min-w-0">
          <p
            className="font-semibold text-slate-900 truncate"
            title={review.authorName}
          >
            {review.authorName}
          </p>
          <p className="text-xs text-slate-500">{review.relativeTime}</p>
        </div>
        <FcGoogle className="ml-auto shrink-0" />
      </div>

      <div className="mt-4">
        <Stars value={review.rating} />
      </div>

      <p className="relative mt-4 flex-1 text-sm text-slate-700 leading-relaxed line-clamp-5">
        <FaQuoteLeft className="absolute -top-4 -left-2 text-[#1AB69D]/20 text-xl" />
        {review.text || (
          <span className="italic text-slate-400">
            .
          </span>
        )}
      </p>
    </article>
  );
}

function InfoCard({ data }: { data: PlacePayload }) {
  if (!data.rating) return null;

  return (
    <div className="rounded-2xl bg-slate-50/50 shadow-lg shadow-slate-200/30 p-6 border border-slate-200/60 text-center">
      <h3 className="text-base font-semibold text-slate-700">
        Reviews on <GoogleBrand />
      </h3>
      <p className="text-5xl font-bold text-slate-900 mt-2">
        {data.rating.toFixed(1)}
      </p>
      <div className="mt-2 flex justify-center">
        <Stars value={data.rating} />
      </div>
      <p className="text-sm text-slate-500 mt-2">
        Based on {data.userRatingsTotal} reviews
      </p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${data.placeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all text-sm font-medium text-slate-600"
      >
        <MdStorefront />
        <span>Get Directions</span>
      </a>
    </div>
  );
}

/* ------------------ Fetch Hook ------------------ */
function usePlaceData() {
  const [data, setData] = useState<PlacePayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/places/edusphere", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = (await response.json()) as PlacePayload;
        if (!controller.signal.aborted) {
          setData(payload);
        }
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error("Failed to fetch Google reviews", err);
        setError(
          "Unable to load Google reviews right now. Please try again later."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
}

/* ------------------ Carousel ------------------ */
export default function GoogleCarousel() {
  const { data, loading, error } = usePlaceData();
  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const reviews = useMemo(() => data?.reviews ?? [], [data]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow animate-pulse h-60" />
        <div className="lg:col-span-3 space-y-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="h-32 rounded-2xl bg-white shadow animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border p-6 text-center text-red-600 bg-red-50">
        {error}
      </div>
    );
  }

  if (!data || reviews.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Left Column: Sticky Info Card */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-6">
          <InfoCard data={data} />
        </div>
      </div>

      {/* Right Column: Reviews Carousel */}
      <div className="lg:col-span-3 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 xl:basis-1/3"
              >
                <div className="h-full">
                  <ReviewCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
