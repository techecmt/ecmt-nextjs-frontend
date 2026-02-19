"use client";

import { useState } from "react";
import { batchScheduleData } from "../data/batchschedule";

export default function BatchSchedule() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = batchScheduleData.filter(
    (course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDateCellClass = (date: string) => {
    if (date === "N.A") {
      return "text-gray-400 italic text-sm";
    }
    if (date.includes("BATCH FULL")) {
      return "text-red-600 font-bold text-sm";
    }
    return "text-gray-900 font-semibold text-sm";
  };

  const getDateCellBg = (date: string) => {
    if (date.includes("BATCH FULL")) {
      return "bg-red-50";
    }
    if (date !== "N.A") {
      return "bg-green-50";
    }
    return "bg-gray-50";
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
              <span className="text-sm font-semibold text-[#1AB69D] uppercase tracking-wider">
                Batch Schedule
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Upcoming Course Batches 2026
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              View our available batch schedules and secure your spot today
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search by course name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-green-50 border border-green-200" />
              <span className="text-gray-700">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-red-50 border border-red-200" />
              <span className="text-gray-700">Batch Full</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-gray-50 border border-gray-200" />
              <span className="text-gray-700">Not Available</span>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1AB69D] text-white">
                  <th className="px-4 py-4 text-left text-sm font-semibold w-[25%]">
                    Course Name
                  </th>
                  <th className="px-3 py-4 text-center text-sm font-semibold w-[10%]">
                    Code
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold w-[13%]">
                    JAN '26
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold w-[13%]">
                    FEB '26
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold w-[13%]">
                    MAR '26
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold w-[13%]">
                    APR '26
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold w-[13%]">
                    MAY '26
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((course, index) => (
                  <tr
                    key={course.courseCode}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4 w-[25%]">
                      <div className="text-xs font-medium text-gray-900 leading-tight">
                        {course.courseName}
                      </div>
                    </td>
                    <td className="px-3 py-4 w-[10%]">
                      <div className="text-xs font-bold text-center text-[#1AB69D] bg-[#1AB69D]/10 rounded-full px-2 py-1 inline-block">
                        {course.courseCode}
                      </div>
                    </td>
                    <td
                      className={`px-4 py-4 text-center font-medium w-[13%] ${getDateCellBg(
                        course.jan2026
                      )}`}
                    >
                      <span className={getDateCellClass(course.jan2026)}>
                        {course.jan2026}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-4 text-center font-medium w-[13%] ${getDateCellBg(
                        course.feb2026
                      )}`}
                    >
                      <span className={getDateCellClass(course.feb2026)}>
                        {course.feb2026}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-4 text-center font-medium w-[13%] ${getDateCellBg(
                        course.mar2026
                      )}`}
                    >
                      <span className={getDateCellClass(course.mar2026)}>
                        {course.mar2026}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-4 text-center font-medium w-[13%] ${getDateCellBg(
                        course.apr2026
                      )}`}
                    >
                      <span className={getDateCellClass(course.apr2026)}>
                        {course.apr2026}
                      </span>
                    </td>
                    <td
                      className={`px-4 py-4 text-center font-medium w-[13%] ${getDateCellBg(
                        course.may2026
                      )}`}
                    >
                      <span className={getDateCellClass(course.may2026)}>
                        {course.may2026}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {filteredData.map((course) => (
              <div
                key={course.courseCode}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="bg-[#1AB69D] px-4 py-3">
                  <h3 className="text-white font-semibold text-sm">
                    {course.courseName}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-bold text-[#1AB69D] bg-white rounded-full px-3 py-1">
                    {course.courseCode}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className={`p-3 rounded-lg ${getDateCellBg(
                        course.jan2026
                      )}`}
                    >
                      <div className="text-xs text-gray-600 font-medium mb-1">
                        JAN '26
                      </div>
                      <div className={`text-sm ${getDateCellClass(course.jan2026)}`}>
                        {course.jan2026}
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${getDateCellBg(
                        course.feb2026
                      )}`}
                    >
                      <div className="text-xs text-gray-600 font-medium mb-1">
                        FEB '26
                      </div>
                      <div className={`text-sm ${getDateCellClass(course.feb2026)}`}>
                        {course.feb2026}
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${getDateCellBg(
                        course.mar2026
                      )}`}
                    >
                      <div className="text-xs text-gray-600 font-medium mb-1">
                        MAR '26
                      </div>
                      <div className={`text-sm ${getDateCellClass(course.mar2026)}`}>
                        {course.mar2026}
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${getDateCellBg(
                        course.apr2026
                      )}`}
                    >
                      <div className="text-xs text-gray-600 font-medium mb-1">
                        APR '26
                      </div>
                      <div className={`text-sm ${getDateCellClass(course.apr2026)}`}>
                        {course.apr2026}
                      </div>
                    </div>
                    <div
                      className={`p-3 rounded-lg col-span-2 ${getDateCellBg(
                        course.may2026
                      )}`}
                    >
                      <div className="text-xs text-gray-600 font-medium mb-1">
                        MAY '26
                      </div>
                      <div className={`text-sm ${getDateCellClass(course.may2026)}`}>
                        {course.may2026}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="mt-8 bg-gradient-to-r from-[#1AB69D]/10 to-[#1AB69D]/5 rounded-xl p-6 border border-[#1AB69D]/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Ready to Enroll?
                </h3>
                <p className="text-sm text-gray-600">
                  Secure your spot in our upcoming batches today
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1AB69D] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#16917f] hover:shadow-md active:scale-95 transition-all whitespace-nowrap"
              >
                Let's Get Started
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
