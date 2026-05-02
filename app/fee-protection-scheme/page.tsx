import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Fee Protection Scheme (FPS) Waiver | Edusphere",
	description:
		"Learn about Edusphere College's Fee Protection Scheme (FPS) waiver, our monthly installment payment structure, and how we safeguard student fees.",
};

export default function Page() {
	return (
		<main>
			{/* Hero / Intro */}
			<section
				className="relative w-full bg-linear-to-b from-rose-50 to-white"
				aria-label="Fee Protection Scheme Introduction"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
					<p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-rose-600">
						Student Fee Protection
					</p>
					<h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Fee Protection Scheme <span className="text-rose-600">(FPS) Waiver</span>
					</h1>
					<h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
						Our Commitment to Student Fee Protection
					</h2>

					<div className="mt-6 md:mt-8 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
						<p>
							At Edusphere, we are committed to maintaining transparent and student-friendly payment
							practices.
						</p>
						<p>
							In accordance with the requirements of the Committee for Private Education (CPE), the
							Fee Protection Scheme (FPS) is generally intended to protect students’ fees in the event
							that a Private Education Institution (PEI) is unable to continue operations.
						</p>
						<p>
							However, our institution adopts a <span className="font-semibold text-gray-900">monthly
							installment payment structure</span>, where course fees are collected progressively in
							small monthly payments rather than large upfront lump-sum payments.
						</p>
						<p>
							As the fees collected do not exceed the applicable threshold requiring FPS coverage,
							students enrolled under this payment arrangement may qualify for an{" "}
							<span className="font-semibold text-gray-900">FPS waiver</span> in accordance with
							prevailing regulatory guidelines.
						</p>
					</div>
				</div>
			</section>

			{/* How Our Payment Structure Works */}
			<section className="w-full bg-white" aria-label="How Our Payment Structure Works">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						How Our <span className="text-rose-600">Payment Structure</span> Works
					</h2>

					<ul className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-sm sm:text-base text-gray-700">
						{[
							"Course fees are payable in manageable monthly installments",
							"No substantial upfront collection of fees is required",
							"Payments are scheduled progressively throughout the course duration",
							"Students only pay for the upcoming study period as stipulated in the student contract",
						].map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 rounded-xl bg-rose-50/60 ring-1 ring-rose-100 p-4 sm:p-5"
							>
								<span
									aria-hidden="true"
									className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-3.5 w-3.5"
									>
										<path
											fillRule="evenodd"
											d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
								<span>{item}</span>
							</li>
						))}
					</ul>

					<p className="mt-6 md:mt-8 text-sm sm:text-base text-gray-700">
						This arrangement helps minimize financial exposure for students while providing greater
						affordability and flexibility.
					</p>
				</div>
			</section>

			{/* Important Information for Students */}
			<section className="w-full bg-linear-to-b from-white to-rose-50" aria-label="Important Information for Students">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Important Information for <span className="text-rose-600">Students</span>
					</h2>

					<p className="mt-4 text-sm sm:text-base text-gray-700">Students are advised to:</p>

					<ul className="mt-4 list-disc pl-5 sm:pl-6 space-y-3 text-sm sm:text-base text-gray-700">
						<li>Review the student contract carefully before signing.</li>
						<li>Understand the installment payment schedule and terms.</li>
						<li>Ensure timely payment of monthly fees according to the agreed schedule.</li>
					</ul>

					<p className="mt-6 text-sm sm:text-base text-gray-700">
						For further clarification regarding the Fee Protection Scheme waiver or payment arrangements,
						please contact our student support team.
					</p>
				</div>
			</section>

			{/* Contact Us CTA */}
			<section className="w-full bg-white" aria-label="Contact Us">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
					<div className="rounded-2xl bg-linear-to-br from-rose-600 to-rose-500 text-white shadow-lg ring-1 ring-black/5 px-6 sm:px-10 py-10 md:py-12">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
							<div>
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
									Contact Us
								</h2>
								<p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl">
									Have questions about the FPS waiver or our monthly installment payment plan? Our
									student support team is here to help.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
								<Link
									href="/contact-us"
									className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-rose-600 shadow-md hover:bg-rose-50 transition-colors"
								>
									Contact Student Support
								</Link>
								<Link
									href="/essential-resources-and-support-for-students"
									className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-700/30 ring-1 ring-white/40 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-rose-700/50 transition-colors"
								>
									View Student Policies
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
