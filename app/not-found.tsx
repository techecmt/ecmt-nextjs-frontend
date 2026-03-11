import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">
        <p className="text-8xl font-extrabold text-[#1AB69D]">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved. Try one of the links below instead.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1AB69D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#169d88] transition"
          >
            Browse Courses
          </Link>
          <Link
            href="/wsq-courses"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-[#1AB69D] px-6 py-3 text-sm font-semibold text-[#1AB69D] hover:bg-[#e9fbf7] transition"
          >
            WSQ Courses
          </Link>
          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="text-sm text-[#1AB69D] font-medium hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
