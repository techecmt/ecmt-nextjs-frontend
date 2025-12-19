"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { MdStorefront } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Review = {
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime?: string;
  text?: string;
};

type PlacePayload = {
  name: string;
  rating: number | null;
  userRatingsTotal: number;
  placeId: string;
  reviews: Review[];
};

/* ------------------ Stars ------------------ */
function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) =>
        i < full ? (
          <FaStar key={i} className="text-amber-400" />
        ) : i === full && half ? (
          <FaStarHalfAlt key={i} className="text-amber-400" />
        ) : (
          <FaRegStar key={i} className="text-gray-300" />
        )
      )}
    </div>
  );
}

/* ------------------ Info Card ------------------ */
function InfoCard({ data }: { data: PlacePayload }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md border space-y-4 h-full flex flex-col">
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
          <MdStorefront className="text-white text-2xl" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-gray-900 leading-tight break-words">
            {data.name}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-4xl font-bold text-amber-500">
          {data.rating?.toFixed(1) ?? "—"}
        </span>
        <div className="flex-1">
          <Stars value={data.rating ?? 0} />
          <p className="text-xs text-gray-600 mt-1 font-medium">
            Based on {data.userRatingsTotal.toLocaleString()} reviews
          </p>
        </div>
      </div>

      <div className="flex-grow" />

      <div className="text-xs text-gray-600 flex items-center gap-1.5 pt-4 border-t font-medium">
        <span>powered by</span>
        <span className="font-semibold">
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#DB4437" }}>o</span>
          <span style={{ color: "#F4B400" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#0F9D58" }}>l</span>
          <span style={{ color: "#DB4437" }}>e</span>
        </span>
      </div>

      <a
        href={`https://search.google.com/local/writereview?placeid=${data.placeId}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Write a review
        <FcGoogle />
      </a>
    </div>
  );
}

/* ------------------ Review Card ------------------ */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="h-full rounded-2xl border bg-white p-5 shadow-md flex flex-col">
      <div className="flex items-center gap-3">
        {review.profilePhotoUrl ? (
          <Image
            src={review.profilePhotoUrl}
            alt={review.authorName}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
            {review.authorName[0]}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold truncate" title={review.authorName}>
            {review.authorName}
          </p>
          <p className="text-xs text-gray-500">{review.relativeTime}</p>
        </div>
        <FcGoogle className="ml-auto shrink-0" />
      </div>

      <div className="mt-3">
        <Stars value={review.rating} />
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-4 flex-grow">
        {review.text || (
          <span className="italic text-gray-400">No written review</span>
        )}
      </p>
    </div>
  );
}

/* ------------------ Fetch Hook ------------------ */
function usePlaceData() {
  const [data, setData] = useState<PlacePayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/places/edusphere", { cache: "no-store" })
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

/* ------------------ Carousel ------------------ */
export default function GoogleCarousel() {
  const { data, loading } = usePlaceData();

  if (loading) {
    return (
      <div className="rounded-xl border p-6 text-center text-gray-600">
        Loading Google reviews…
      </div>
    );
  }

  if (!data) return null;

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
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {data.reviews.map((review, index) => (
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

          <CarouselPrevious className="hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="hidden sm:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  );
}
