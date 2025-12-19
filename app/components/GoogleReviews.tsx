"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Review = {
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime?: string;
  time?: number;
  text?: string;
};

type PlacePayload = {
  name: string;
  address: string;
  location: { lat: number; lng: number } | null;
  rating: number | null;
  userRatingsTotal: number;
  mapUrl: string | null;
  reviews: Review[];
  placeId: string;
};

export default function GoogleReviews() {
  const [data, setData] = useState<PlacePayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/places/edusphere", { cache: "no-store" });
        if (!res.ok) {
          const meta = await res.json().catch(() => ({}));
          throw new Error(meta?.error || `Request failed: ${res.status}`);
        }
        const json: PlacePayload = await res.json();
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load reviews");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-200 p-4 bg-white">Loading Google reviews…</div>
    );
  }
  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 p-4 bg-red-50 text-red-700 text-sm">{error}</div>
    );
  }
  if (!data) return null;

  const toggle = (i: number) => setExpanded((s) => ({ ...s, [i]: !s[i] }));

  const Star = ({ filled }: { filled: boolean }) => (
    filled ? <AiFillStar className="text-amber-500" size={16} /> : <AiOutlineStar className="text-gray-300" size={16} />
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white lg:sticky lg:top-20">
      <div className="p-4 md:p-6 border-b border-gray-100">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <FcGoogle size={22} />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">Google Reviews</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1 truncate">{data.name} • {data.address}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-2xl font-semibold text-gray-900 flex items-baseline justify-end gap-1">
              <span>{data.rating ?? "—"}</span>
              <span className="text-sm text-gray-600">/ 5</span>
            </div>
            <div className="text-xs text-gray-600">{data.userRatingsTotal} reviews</div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        {data.reviews.length === 0 && (
          <div className="text-sm text-gray-600">No reviews available.</div>
        )}
        <ul className="space-y-6">
          {data.reviews.map((rev, idx) => {
            const rounded = Math.round(rev.rating ?? 0);
            const isLong = (rev.text?.length || 0) > 220;
            const showFull = !!expanded[idx];
            const text = isLong && !showFull ? `${rev.text?.slice(0, 220)}…` : rev.text;
            return (
              <li key={idx}>
                <div className="flex items-start gap-3">
                  {rev.profilePhotoUrl ? (
                    <Image
                      src={rev.profilePhotoUrl}
                      alt={rev.authorName}
                      width={40}
                      height={40}
                      className="rounded-full object-cover ring-1 ring-gray-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 ring-1 ring-gray-200" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-gray-900 truncate">{rev.authorName}</span>
                      <span className="text-xs text-gray-500">{rev.relativeTime}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} filled={i < rounded} />
                      ))}
                    </div>
                    {text && (
                      <p className="mt-2 text-sm text-gray-800 whitespace-pre-line">{text}</p>
                    )}
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggle(idx)}
                        className="mt-1 text-xs font-semibold text-[#1AB69D] hover:underline"
                      >
                        {showFull ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={data.mapUrl ?? "https://maps.google.com"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-[#1AB69D] text-white px-4 py-2 text-sm font-semibold hover:bg-[#169d88]"
          >
            See more on Google Maps
          </a>
          <a
            href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(data.placeId)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-[#1AB69D] text-[#1AB69D] px-4 py-2 text-sm font-semibold hover:bg-[#e9fbf7]"
          >
            Write a review
          </a>
        </div>
        {data.location && (
          <div className="mt-3 text-xs text-gray-600">Lat: {data.location.lat.toFixed(6)} • Lng: {data.location.lng.toFixed(6)}</div>
        )}
      </div>
    </div>
  );
}
