import type { Metadata } from "next";
import {
  FaGoogleDrive,
  FaFacebookF,
  FaPlay,
  FaImages,
} from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import SharePopup from "./SharePopup";

export const metadata: Metadata = {
  title: "Students Affairs | Edusphere College of Management and Technology",
  description:
    "Stay connected with Edusphere College student life — watch our Graduation Ceremony 2026, access event photos, and more.",
  openGraph: {
    title: "Students Affairs | Edusphere College",
    description:
      "Graduation Ceremony 2026 highlights, videos, and student resources at Edusphere College Singapore.",
    type: "website",
  },
};

export default function StudentsAffairPage() {
  const driveLink =
    "https://drive.google.com/drive/folders/1I9JM6jGijj0VG58rgX-8g5qsM3gqj6ia?usp=drive_link";
  const videoUrl =
    "https://www.youtube.com/embed/6jct1CQVtLo?si=qcfuZzSqOi1DNFdt&controls=0";
  const shareUrl = "https://www.youtube.com/watch?v=6jct1CQVtLo";

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 md:py-32">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#1AB69D]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#1877F2]/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block mb-4 rounded-full bg-[#1AB69D]/15 px-4 py-1.5 text-sm font-medium text-[#1AB69D] tracking-wide uppercase">
            Student Life
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Students Affairs
          </h1>
          <div className="mt-5 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[#1AB69D] to-[#1877F2]" />
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Celebrating milestones, building memories — stay connected with the
            Edusphere community.
          </p>
        </div>
      </section>

      {/* Graduation Ceremony Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-700 px-4 py-1.5 text-sm font-semibold mb-4">
              <FaPlay className="text-xs" /> Now Streaming
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Graduation Ceremony 2026
              <br />
              <span className="text-[#1AB69D]">Part 1</span>
            </h2>
            <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
              Relive the proud moments of our graduates. Watch the full ceremony
              and browse the photo gallery below.
            </p>
          </div>

          {/* Video Card */}
          <div className="relative max-w-4xl mx-auto rounded-3xl bg-white p-3 shadow-2xl shadow-black/5 ring-1 ring-black/5">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title="Graduation Ceremony 2026 – Part 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Action Cards Grid */}
          <div className="mt-14 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Share Card */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Pulse dot */}
              <span className="absolute top-4 right-4 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1877F2]/60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#1877F2]" />
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                <FaFacebookF className="text-2xl" />
              </div>
              <span className="text-sm font-bold text-gray-900">
                Share on Facebook
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <HiOutlineShare className="text-sm" /> Spread the word
              </span>
            </a>

            {/* Photos Card */}
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1AB69D]/10 text-[#1AB69D] transition-colors group-hover:bg-[#1AB69D] group-hover:text-white">
                <FaImages className="text-2xl" />
              </div>
              <span className="text-sm font-bold text-gray-900">
                View Photos
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <FaGoogleDrive className="text-sm" /> Google Drive
              </span>
            </a>
          </div>
        </div>
      </section>

      <SharePopup shareUrl={shareUrl} />
    </>
  );
}
