"use client";

import { useMemo, useState } from "react";
import { batchScheduleData, type Batch, type BatchSchedule } from "../data/batchschedule";

const MONTHS: { key: keyof Omit<BatchSchedule, "courseName">; label: string; short: string }[] = [
  { key: "may2026", label: "MAY 2026", short: "May" },
  { key: "jun2026", label: "JUN 2026", short: "Jun" },
  { key: "jul2026", label: "JUL 2026", short: "Jul" },
  { key: "sep2026", label: "SEP 2026", short: "Sep" },
  { key: "oct2026", label: "OCT 2026", short: "Oct" },
  { key: "nov2026", label: "NOV 2026", short: "Nov" },
];

const isAvailable = (b: Batch) => Boolean(b.startDate && b.endDate);

export default function BatchSchedule() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredData = useMemo(
    () =>
      batchScheduleData.filter((course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
              <span className="text-xs md:text-sm font-semibold text-[#1AB69D] uppercase tracking-wider">
                Batch Schedule
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Upcoming Course Batches 2026
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              View available start &amp; end dates and reserve your seat today.
            </p>
          </div>

          {/* Search + Legend */}
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="relative w-full sm:max-w-sm">
              <input
                type="text"
                placeholder="Search course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-200" />
                <span className="text-gray-700">Available</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-gray-100 border border-gray-200" />
                <span className="text-gray-500">Not available</span>
              </span>
            </div>
          </div>

          {/* Desktop / Tablet Table (≥ md) */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-xs lg:text-sm border-collapse">
              <thead>
                <tr className="bg-[#1AB69D] text-white">
                  <th className="sticky left-0 z-10 bg-[#1AB69D] px-3 py-3 text-left font-semibold border-r border-white/20 min-w-[200px]">
                    Course
                  </th>
                  {MONTHS.map((m) => (
                    <th
                      key={m.key}
                      className="px-2 py-3 text-center font-semibold border-l border-white/20 whitespace-nowrap"
                    >
                      {m.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((course, idx) => (
                  <tr
                    key={course.courseName}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                    } hover:bg-[#1AB69D]/5 transition-colors`}
                  >
                    <td className="sticky left-0 z-1 bg-inherit px-3 py-3 align-middle border-r border-gray-200">
                      <div className="font-semibold text-gray-900 leading-snug max-w-[260px]">
                        {course.courseName}
                      </div>
                    </td>
                    {MONTHS.map((m) => {
                      const b = course[m.key];
                      const ok = isAvailable(b);
                      return (
                        <td
                          key={m.key}
                          className={`px-2 py-2 text-center align-middle border-l border-gray-200 ${
                            ok ? "bg-emerald-50/70" : "bg-gray-100/60"
                          }`}
                        >
                          {ok ? (
                            <dl className="space-y-1 text-[11px] text-left max-w-[140px] mx-auto">
                              <div className="flex items-center justify-between gap-2">
                                <dt className="text-gray-500">Start Date</dt>
                                <dd className="font-semibold text-gray-900 whitespace-nowrap">
                                  {b.startDate}
                                </dd>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <dt className="text-gray-500">End Date</dt>
                                <dd className="font-semibold text-gray-700 whitespace-nowrap">
                                  {b.endDate}
                                </dd>
                              </div>
                            </dl>
                          ) : (
                            <span className="text-gray-400 italic text-xs">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion (< md) */}
          <div className="md:hidden space-y-2.5">
            {filteredData.map((course, idx) => {
              const open = openIndex === idx;
              const availableCount = MONTHS.filter((m) =>
                isAvailable(course[m.key])
              ).length;
              return (
                <div
                  key={course.courseName}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    aria-expanded={open}
                    className="w-full text-left px-4 py-3 flex items-start gap-3 active:bg-gray-50"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                        {course.courseName}
                      </h3>
                      <p className="mt-1 text-xs text-[#1AB69D] font-medium">
                        {availableCount} batch
                        {availableCount === 1 ? "" : "es"} available
                      </p>
                    </div>
                    <span
                      className={`mt-1 shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-[#1AB69D]/10 text-[#1AB69D] transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {open && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-2">
                        {MONTHS.map((m) => {
                          const b = course[m.key];
                          const ok = isAvailable(b);
                          return (
                            <div
                              key={m.key}
                              className={`rounded-lg border p-2.5 ${
                                ok
                                  ? "border-emerald-200 bg-emerald-50/70"
                                  : "border-gray-200 bg-gray-50"
                              }`}
                            >
                              <div className="text-[10px] font-bold tracking-wider text-gray-500 mb-1.5">
                                {m.label}
                              </div>
                              {ok ? (
                                <dl className="space-y-1 text-[11px]">
                                  <div className="flex justify-between gap-2">
                                    <dt className="text-gray-500">Start</dt>
                                    <dd className="font-semibold text-gray-900">
                                      {b.startDate}
                                    </dd>
                                  </div>
                                  <div className="flex justify-between gap-2">
                                    <dt className="text-gray-500">End</dt>
                                    <dd className="font-semibold text-gray-900">
                                      {b.endDate}
                                    </dd>
                                  </div>
                                </dl>
                              ) : (
                                <p className="text-xs text-gray-400 italic">
                                  Not available
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No courses found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search term
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-8 bg-linear-to-r from-[#1AB69D]/10 to-[#1AB69D]/5 rounded-xl p-5 md:p-6 border border-[#1AB69D]/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                  Ready to Enroll?
                </h3>
                <p className="text-sm text-gray-600">
                  Secure your spot in our upcoming batches today.
                </p>
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-5 py-2.5 md:px-6 md:py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all whitespace-nowrap"
              >
                Let&apos;s Get Started
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7L18 12L13 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
