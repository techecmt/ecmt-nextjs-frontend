"use client";

import { useState } from "react";
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
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+60", country: "Malaysia" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
];

export default function ContactForm() {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/zoho", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, courseType: activeTab }),
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#1AB69D] font-semibold mb-2">
            Get in Touch
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1AB69D] font-spartan mb-3">
            Let's start the registration process!
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            Fill in the form below and we'll get back to you as soon as
            possible
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex">
              {courseTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setFormData({ ...formData, course: "" });
                  }}
                    className={`relative flex-1 px-2 md:px-4 py-3 text-[10px] md:text-xs font-bold transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white bg-[#1AB69D] shadow-lg scale-105 -mb-px"
                      : "text-gray-600 hover:text-[#1AB69D] hover:bg-white hover:shadow-md transform hover:scale-102"
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 md:p-6 animate-fadeIn">
            <div className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                    placeholder="✏️ Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                    placeholder="📧 your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone with Country Code */}
              <div className="group">
                <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-24 px-2 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 hover:border-gray-400 hover:shadow-sm font-semibold"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                    placeholder="📱 Enter phone number"
                  />
                </div>
              </div>

              {/* Course and Nationality Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                    Select Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 hover:border-gray-400 hover:shadow-sm font-medium cursor-pointer"
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
                  <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    required
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                    placeholder="🌍 Enter your nationality"
                  />
                </div>
              </div>

              {/* When to Start */}
              <div className="group">
                <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  When would you like to take this course?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="month"
                  name="startDate"
                  required
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 text-gray-600 hover:border-gray-400 hover:shadow-sm cursor-pointer font-medium"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-semibold text-[#202020] mb-2 transition-colors group-focus-within:text-[#1AB69D]">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] outline-none transition-all duration-300 resize-none text-gray-600 placeholder:text-gray-400 hover:border-gray-400 hover:shadow-sm"
                  placeholder="💬 Tell us more about your interest or any questions you have"
                />
              </div>

              {/* Submission status */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg text-center font-semibold ${
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
                className="w-full bg-linear-to-r from-[#1AB69D] to-[#16a890] text-white font-bold py-3.5 rounded-lg hover:from-[#16917f] hover:to-[#138f7d] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#1AB69D]/40 transition-all duration-300 transform relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
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
    </section>
  );
}