"use client";

import React, { useMemo, useState } from "react";
import { getWsqCourses } from "../data/wsq-courses";

type TabKey = "individual" | "corporate";

const PRIMARY = "#1AB69D"; // brand primary
const TEXT = "#202020"; // brand text

export default function WsqContactForm() {
	const [activeTab, setActiveTab] = useState<TabKey>("individual");

	const courses = useMemo(() => getWsqCourses(), []);

	const baseInput =
		"w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[#1AB69D] focus:border-[#1AB69D] text-[#202020] placeholder:text-gray-400";
	const baseLabel = "block text-sm font-medium mb-1";

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const payload = Object.fromEntries(formData.entries());
		// Replace with API call as needed
		// await fetch('/api/wsq-contact', { method: 'POST', body: JSON.stringify(payload) })
		console.log("WSQ Contact Submit:", { tab: activeTab, ...payload });
		alert("Thanks! We have received your message.");
		e.currentTarget.reset();
	}

	return (
		<section className="mx-auto w-full max-w-3xl">
			{/* Header */}
			<div className="mb-4 text-center">
				<div className="text-[12px] font-semibold tracking-[0.2em]" style={{ color: PRIMARY }}>
					GET IN TOUCH
				</div>
				<h2 className="mt-1 text-2xl md:text-3xl font-extrabold" style={{ color: TEXT }}>
					Enroll Now
				</h2>
				<p className="mt-1 text-sm md:text-base text-gray-600">
					Fill in the form below and we’ll get back to you as soon as possible
				</p>
			</div>

			{/* Tabs */}
			<div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-1 shadow-sm">
				<div className="grid grid-cols-2 gap-1">
					<button
						type="button"
						onClick={() => setActiveTab("individual")}
						className="rounded-lg px-4 py-2 text-sm font-semibold transition"
						style={{
							color: activeTab === "individual" ? "#fff" : TEXT,
							background:
								activeTab === "individual"
									? "linear-gradient(135deg, #1BB69B 0%, #31B979 100%)"
									: "transparent",
							boxShadow:
								activeTab === "individual" ? "0 4px 14px rgba(26, 182, 157, 0.35)" : undefined,
						}}
						aria-pressed={activeTab === "individual"}
					>
						Individual
					</button>
					<button
						type="button"
						onClick={() => setActiveTab("corporate")}
						className="rounded-lg px-4 py-2 text-sm font-semibold transition"
						style={{
							color: activeTab === "corporate" ? "#fff" : TEXT,
							background:
								activeTab === "corporate"
									? "linear-gradient(135deg, #1BB69B 0%, #31B979 100%)"
									: "transparent",
							boxShadow:
								activeTab === "corporate" ? "0 4px 14px rgba(26, 182, 157, 0.35)" : undefined,
						}}
						aria-pressed={activeTab === "corporate"}
					>
						Corporate
					</button>
				</div>
			</div>

			{/* Form */}
			<div className="rounded-2xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(26,182,157,0.3) 0%, rgba(49,185,121,0.3) 100%)" }}>
				<form
					onSubmit={handleSubmit}
					className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
				>
				{activeTab === "individual" ? (
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="name">
								Full Name
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">📝</span>
								<input id="name" name="name" type="text" required className={`pl-8 ${baseInput}`} placeholder="Enter your full name" />
							</div>
						</div>
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="email">
								Email
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">📧</span>
								<input id="email" name="email" type="email" required className={`pl-8 ${baseInput}`} placeholder="your.email@example.com" />
							</div>
						</div>
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="phone">
								Phone
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">📱</span>
								<input id="phone" name="phone" type="tel" required className={`pl-8 ${baseInput}`} placeholder="Enter phone number" />
							</div>
						</div>
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="course">
								Select WSQ Course
							</label>
							<select id="course" name="course" required className={baseInput} defaultValue="">
								<option value="" disabled>
									Select a course
								</option>
								{courses.map((c) => (
									<option key={c.id} value={c.title}>
										{c.title}
									</option>
								))}
							</select>
						</div>
						<div className="md:col-span-2">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="message">
								Message
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">💬</span>
								<textarea id="message" name="message" rows={5} required className={`pl-8 ${baseInput}`} placeholder="Tell us more about your interest or any questions you have" />
							</div>
						</div>
						<div className="md:col-span-2">
							<button
								type="submit"
								className="w-full rounded-lg px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition"
								style={{ background: "linear-gradient(135deg, #1BB69B 0%, #31B979 100%)", color: "#fff" }}
							>
								Send Message
							</button>
						</div>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="companyName">
								Company Name
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">🏢</span>
								<input id="companyName" name="companyName" type="text" required className={`pl-8 ${baseInput}`} placeholder="Enter company name" />
							</div>
						</div>
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="workEmail">
								Work Email
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">📧</span>
								<input id="workEmail" name="workEmail" type="email" required className={`pl-8 ${baseInput}`} placeholder="your.email@company.com" />
							</div>
						</div>
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="workPhone">
								Phone Number
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">📱</span>
								<input id="workPhone" name="workPhone" type="tel" required className={`pl-8 ${baseInput}`} placeholder="Enter phone number" />
							</div>
						</div>
						<div className="md:col-span-1">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="employees">
								No. of Employees
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">👥</span>
								<input id="employees" name="employees" type="number" min={1} className={`pl-8 ${baseInput}`} placeholder="e.g., 24" />
							</div>
						</div>
						<div className="md:col-span-2">
							<label className={baseLabel} style={{ color: TEXT }} htmlFor="corpMessage">
								Message
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">💬</span>
								<textarea id="corpMessage" name="message" rows={5} required className={`pl-8 ${baseInput}`} placeholder="Tell us about your training needs, class size, preferred dates, etc." />
							</div>
						</div>
						<div className="md:col-span-2">
							<button
								type="submit"
								className="w-full rounded-lg px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition"
								style={{ background: "linear-gradient(135deg, #1BB69B 0%, #31B979 100%)", color: "#fff" }}
							>
								Send Message
							</button>
						</div>
					</div>
				)}
				</form>
			</div>
		</section>
	);
}

