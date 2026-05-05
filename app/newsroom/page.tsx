import type { Metadata } from "next";
import { newsEvents } from "./events";
import NewsroomTimeline from "./NewsroomTimeline";

const SITE_URL = "https://edusphere.edu.sg";

export const metadata: Metadata = {
  title: "Newsroom | Edusphere College Singapore",
  description:
    "Latest news, events, ceremonies and campus highlights from Edusphere College of Management and Technology, Singapore.",
  alternates: { canonical: `${SITE_URL}/newsroom/` },
  openGraph: {
    title: "Newsroom | Edusphere College Singapore",
    description:
      "Latest news, events, ceremonies and campus highlights from Edusphere College of Management and Technology, Singapore.",
    url: `${SITE_URL}/newsroom/`,
    type: "website",
  },
};

export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-emerald-50/40 via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.18),transparent_70%)]"
        />
        <div className="container mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="flex flex-col items-start md:items-center gap-4 md:text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs sm:text-sm font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Edusphere Newsroom
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Stories, Events &amp; Milestones
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              A timeline of memorable moments at Edusphere College —
              graduations, ceremonies, industry visits, and student life.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-20 md:pb-28">
        <NewsroomTimeline events={newsEvents} siteUrl={SITE_URL} />
      </section>
    </main>
  );
}
