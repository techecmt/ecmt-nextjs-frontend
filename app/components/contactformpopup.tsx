"use client";

import { useState, useEffect, useCallback } from "react";
import { courseData } from "../data/courses";

type CourseType =
  | "Diploma Courses"
  | "WSQ Courses"
  | "SFARC"
  | "Certificate Course";

const courseTabs: CourseType[] = [
  "Diploma Courses",
  "WSQ Courses",
  "SFARC",
  "Certificate Course",
];

// Extract face-to-face diploma courses
const faceToFaceDiplomas =
  courseData
    .filter((school) => school.title !== "E-Learning Courses")
    .flatMap((school) => school.courses)
    .filter(
      (course) =>
        course.title.toLowerCase().includes("diploma") ||
        course.title.toLowerCase().includes("certificate")
    )
    .map((course) => course.title) || [];

// Extract e-learning diploma courses
const elearningDiplomas =
  courseData
    .find((school) => school.title === "E-Learning Courses")
    ?.courses.map((course) => course.title) || [];

const courseOptions: {
  [key in CourseType]: string[] | { label: string; options: string[] }[];
} = {
  "Diploma Courses": [
    { label: "Face-to-Face", options: faceToFaceDiplomas },
    { label: "E-Learning", options: elearningDiplomas },
  ],
  "WSQ Courses": [
    "GenAI for Effective Presentations",
    "Master Executive Presence in Stakeholder Management",
    "Support Service to Persons with Disabilities",
    "Essential Care-giving Skills for Elderly",
    "Maximizing Performance: Workplace Optimization through Flexible Work Practices",
    "Navigating Service Challenges",
    "AI-Driven Communication Strategies to Drive Service Excellence",
  ],
  SFARC: ["Cardiopulmonary Resuscitation (CPR) + AED Training"],
  "Certificate Course": [
    "Certificate in NG (NASOGASTRIC) tube feeding",
    "Certificate in Physical and Massage Therapy",
    "Certificate in Foundation Skills",
    "Certificate in Autocad",
    "Certificate in Air Conditioning",
    "Certificate in Cafe & Restaurant Management",
    "Professional Certificate in Mechanical and Electrical Engg",
    "Certificate in Logistics and Supply Chain Management",
    "Certificate In Caregiving For The Infant and Early Child",
  ],
};

const countryCodes = [
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+66", country: "Thailand" },
  { code: "+84", country: "Vietnam" },
  { code: "+82", country: "South Korea" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+880", country: "Bangladesh" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+965", country: "Kuwait" },
  { code: "+973", country: "Bahrain" },
  { code: "+968", country: "Oman" },
  { code: "+962", country: "Jordan" },
  { code: "+961", country: "Lebanon" },
  { code: "+972", country: "Israel" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "other", country: "Other" },
];

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormPopup({ isOpen, onClose }: ContactFormPopupProps) {
  const [activeTab, setActiveTab] = useState<CourseType>("Diploma Courses");
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+65",
    phone: "",
    email: "",
    course: "",
    nationality: "",
    startDate: "",
    message: "",
  });
  const [isCustomCode, setIsCustomCode] = useState(false);
  const [customCountryCode, setCustomCountryCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const finalCountryCode = isCustomCode ? customCountryCode : formData.countryCode;

      const response = await fetch("/api/zoho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          countryCode: finalCountryCode,
          courseType: activeTab,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          countryCode: "+65",
          phone: "",
          email: "",
          course: "",
          nationality: "",
          startDate: "",
          message: "",
        });
        setIsCustomCode(false);
        setCustomCountryCode("");
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "countryCode") {
      if (value === "other") {
        setIsCustomCode(true);
        setFormData({
          ...formData,
          countryCode: "",
        });
      } else {
        setIsCustomCode(false);
        setCustomCountryCode("");
        setFormData({
          ...formData,
          countryCode: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm sm:p-4 lg:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full sm:max-w-lg lg:max-w-3xl h-[95dvh] sm:h-auto sm:max-h-[90vh] overflow-y-auto overscroll-contain bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl animate-fadeIn">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-10 bg-white rounded-t-2xl sm:rounded-t-2xl">
          {/* Mobile drag handle */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-gray-300"></div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="text-center pt-4 sm:pt-6 pb-3 sm:pb-4 px-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1AB69D] font-spartan mb-1.5 sm:mb-3 pr-8 sm:pr-0">
              Download our course brochure
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 max-w-2xl mx-auto">
              Fill in the form below and our student counselor will get in touch with you.
            </p>
          </div>

          {/* Tabs */}
          <div className="border-t border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-4 sm:flex">
              {courseTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setFormData({ ...formData, course: "" });
                  }}
                  className={`relative sm:flex-1 px-1.5 sm:px-3 lg:px-4 py-2.5 sm:py-3 text-[9px] sm:text-[10px] lg:text-xs font-bold transition-all duration-300 leading-tight ${
                    activeTab === tab
                      ? "text-white bg-[#1AB69D] shadow-lg -mb-px"
                      : "text-gray-600 hover:text-[#1AB69D] hover:bg-white"
                  }`}
                >
                  <span className="block">{tab}</span>
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#EE4A62] rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-5 lg:p-6">
          <div className="space-y-3 sm:space-y-4">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {/* Name */}
              <div className="group">
                <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                  placeholder="✏️ Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                  placeholder="📧 your.email@example.com"
                />
              </div>
            </div>

            {/* Phone with Country Code */}
            <div className="group">
              <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {isCustomCode ? (
                  <input
                    type="text"
                    value={customCountryCode}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "" || /^\+?\d*$/.test(value)) {
                        setCustomCountryCode(value);
                        setFormData({
                          ...formData,
                          countryCode: value,
                        });
                      }
                    }}
                    required
                    placeholder="+XXX"
                    className="w-20 sm:w-24 px-2 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 hover:border-gray-400 hover:shadow-sm font-semibold"
                  />
                ) : (
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-28 sm:w-32 px-1.5 sm:px-2 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-xs sm:text-sm text-gray-600 hover:border-gray-400 hover:shadow-sm font-semibold"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code === "other" ? "Other" : `${item.code} ${item.country}`}
                      </option>
                    ))}
                  </select>
                )}
                {isCustomCode && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomCode(false);
                      setCustomCountryCode("");
                      setFormData({
                        ...formData,
                        countryCode: "+65",
                      });
                    }}
                    className="px-3 py-2.5 border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                    title="Back to list"
                  >
                    ✕
                  </button>
                )}
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                  placeholder="📱 Enter phone number"
                />
              </div>
            </div>

            {/* Course and Nationality Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="group">
                <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Select Course <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 hover:border-gray-400 hover:shadow-sm font-medium cursor-pointer"
                >
                  <option value="">Choose a course</option>
                  {(() => {
                    const options = courseOptions[activeTab];
                    const isGrouped =
                      Array.isArray(options) &&
                      typeof options[0] === "object";

                    if (isGrouped) {
                      const groupedOptions = options as Array<{
                        label: string;
                        options: string[];
                      }>;
                      return groupedOptions.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.options.map((course) => (
                            <option key={course} value={course}>
                              {course}
                            </option>
                          ))}
                        </optgroup>
                      ));
                    } else {
                      const flatOptions = options as string[];
                      return flatOptions.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ));
                    }
                  })()}
                </select>
              </div>

              {/* Nationality */}
              <div className="group">
                <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  required
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                  placeholder="🌍 Enter your nationality"
                />
              </div>
            </div>

            {/* When to Start and Message Row — side by side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="group">
                <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  When would you like to take this course?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="month"
                  name="startDate"
                  required
                  min="2026-02"
                  max="2026-05"
                  value={formData.startDate}
                  onChange={handleChange}
                  onClick={(e) => {
                    try {
                      (e.target as HTMLInputElement).showPicker();
                    } catch (error) {
                      // showPicker not supported in this browser
                    }
                  }}
                  className="w-full px-3 sm:px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-sm sm:text-base text-gray-600 hover:border-gray-400 hover:shadow-sm cursor-pointer font-medium"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-xs sm:text-sm font-semibold text-[#202020] mb-1.5 sm:mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 resize-none text-sm sm:text-base text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                  placeholder="💬 Any questions or comments"
                />
              </div>
            </div>

            {/* Submission status */}
            {submitStatus && (
              <div
                className={`p-3 sm:p-4 rounded-lg text-center text-sm sm:text-base font-semibold ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-[#1AB69D] to-[#16a890] text-white font-bold py-3 sm:py-3.5 rounded-lg text-sm sm:text-base hover:from-[#16917f] hover:to-[#138f7d] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#1AB69D]/40 transition-all duration-300 transform relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubmitting ? "Submitting..." : "Send Message"}
              </span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
