import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '../../components/contactform';
import WsqRefundPolicy from '../../components/WsqRefundPolicy';
import OpenCertsGuide from '@/app/components/OpenCertsGuide';
import { FaClock, FaChalkboardTeacher, FaCheckCircle, FaCertificate } from 'react-icons/fa';

export const metadata: Metadata = {
	title: 'AI-Driven Communication Strategies to Drive Service Excellence | WSQ Course | Edusphere',
	description:
		'Take the WSQ course on AI-driven communication strategies to improve service excellence, customer engagement, and team performance.',
};

// Brand Colors:
// Primary: #1AB69D
// Secondary: #EE4A62
// Text: #202020

export default function AIDrivenCommunicationPage() {
	return (
		<main className="min-h-screen bg-gray-50">
			{/* Hero */}
			<section className="px-4 py-8 md:py-12">
				<div className="mx-auto max-w-7xl">
					<div className="relative overflow-hidden rounded-3xl bg-gray-900">
						{/* Background */}
						<div className="absolute inset-0">
							<Image
								src="/wsq-images/aicom.jpg"
								alt="AI-Driven Communication Strategies"
								fill
								priority
								className="object-cover"
								sizes="100vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
						</div>

						<div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
							{/* Left content */}
							<div className="col-span-7 p-6 sm:p-10 md:p-14">
								<div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
									TGS-2025055862
								</div>
								<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
									AI-Driven Communication Strategies to Drive Service Excellence
								</h1>
								<p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
									Elevate customer engagement skills through the integration of AI-driven communication techniques.
								</p>

								{/* Badges */}
								<div className="mt-6 flex flex-wrap items-center gap-4">
									<div className="rounded-2xl bg-white/90 px-4 py-3 text-left shadow-sm ring-1 ring-black/5 backdrop-blur">
										<div style={{ color: '#1AB69D' }} className="font-semibold">Up to 70%</div>
										<div style={{ color: '#202020' }} className="text-xs">Course Subsidy</div>
									</div>
									<div className="rounded-2xl bg-white/90 px-4 py-3 text-left shadow-sm ring-1 ring-black/5 backdrop-blur">
										<div style={{ color: '#1AB69D' }} className="font-semibold">SkillsFuture</div>
										<div style={{ color: '#202020' }} className="text-xs">Credits Eligible</div>
									</div>
								</div>

								{/* CTA */}
								<div className="mt-6">
									<div
										className="w-full max-w-md rounded-2xl p-px shadow-2xl ring-1 ring-white/20"
										style={{ background: 'linear-gradient(135deg, rgba(26, 182, 157, 0.95) 0%, rgba(49, 185, 121, 0.92) 55%, rgba(238, 74, 98, 0.86) 100%)' }}
									>
										<div className="rounded-2xl bg-black/35 p-5 text-white backdrop-blur-md">
											<div className="flex flex-wrap items-center gap-2">
												<span className="inline-flex items-center gap-1 rounded-full bg-orange-400/90 px-3 py-1 text-xs font-bold text-[#202020]">
													🔥 Limited Intake
												</span>
												<span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/95 ring-1 ring-white/20">
													16-Hour WSQ Course
												</span>
											</div>

											<p className="mt-3 text-sm leading-relaxed text-white/90">
												Secure your place in the next available run and master AI-driven communication strategies for service excellence.
											</p>

											<div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
												<a
													href="https://form.jotform.com/252672445341052"
													className="inline-flex w-full items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm transition hover:brightness-105"
													style={{ backgroundColor: '#1AB69D', color: '#ffffff' }}
												>
													Reserve Your Seat
												</a>
												<a
													href="#register"
													className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
												>
													View Full Details
												</a>
											</div>

											<p className="mt-3 text-xs text-white/80">
												Need help choosing funding? Call{' '}
												<a href="tel:+6582215143" className="font-semibold underline underline-offset-2">
													+65 8221 5143
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="px-4 py-10 md:py-12">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
					{/* Main */}
					<div className="lg:col-span-8 space-y-6">

						{/* Course Overview */}
						<div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm" style={{ color: '#202020' }}>
							<h2 className="text-lg font-bold" style={{ color: '#202020' }}>Course Overview</h2>
							<div className="mt-1 h-0.5 w-10 rounded" style={{ backgroundColor: '#1AB69D' }} />
							<p className="mt-4 text-sm leading-relaxed">
								The &quot;AI-Driven Communication Strategies for Service Excellence&quot; training program is designed to equip professionals in the hospitality and tourism sectors with AI-Driven communication strategies to enhance customer service and improve guest experiences. As customer expectations continue to rise, the ability to engage meaningfully with customers effectively, resolve issues proactively, and offer personalized service is crucial to maintaining competitive advantage.
							</p>
						</div>

						

						{/* Learning Outcomes */}
						<div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm" style={{ color: '#202020' }}>
							<h2 className="text-lg font-bold" style={{ color: '#202020' }}>Learning Outcomes</h2>
							<div className="mt-1 h-0.5 w-10 rounded" style={{ backgroundColor: '#1AB69D' }} />
							<p className="mt-4 text-sm">By the end of this course, learners are able to:</p>
							<ol className="mt-3 space-y-3 list-decimal pl-5 text-sm">
								<li>Identify the various types of customers, their needs and expectations, including those interacting through AI-driven channels.</li>
								<li>Demonstrate the qualities and characteristics of a service professional by projecting a professional image and persona that positively impacts the organization, both in person and through AI-mediated interactions.</li>
								<li>Provide a positive customer experience by going the extra mile, offering customized and personalized service that benefits both oneself and the organization to exceed customer expectations.</li>
								<li>Apply the principles of effective communication to build rapport with customers and ensure that their needs are met efficiently.</li>
								<li>Identify areas for enhancement in customer service and effectively communicate these insights to the relevant departments to drive improvements in the customer experience.</li>
							</ol>
						</div>

						{/* Entry Requirements */}
						<div className="rounded-2xl border-2 border-[#1AB69D] bg-[#1AB69D]/5 p-6 md:p-8 shadow-sm">
							<div className="flex items-center gap-3">
								<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1AB69D] text-white text-base">
									✓
								</span>
								<h2 className="text-lg font-bold" style={{ color: '#202020' }}>Minimum Entry Requirements</h2>
							</div>
							<div className="mt-2 ml-12 h-0.5 w-10 rounded" style={{ backgroundColor: '#1AB69D' }} />
							<p className="mt-4 ml-12 text-sm" style={{ color: '#202020' }}>
								Able to speak, listen, read and write English at a proficiency level not lower than the Employability Skills WSQ Level 4 Workplace Literacy (WPL).
							</p>
						</div>

						{/* Other Details */}
						<div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm" style={{ color: '#202020' }}>
							<h2 className="text-lg font-bold" style={{ color: '#202020' }}>Other Details</h2>
							<div className="mt-1 h-0.5 w-10 rounded" style={{ backgroundColor: '#1AB69D' }} />
							<div className="mt-4 space-y-4 text-sm">
								<div>
									<p className="font-semibold">Training Type</p>
									<p>Training and Assessment</p>
								</div>
								<div>
									<p className="font-semibold">Medium of Instruction</p>
									<p>English</p>
								</div>
							</div>
						</div>

					</div>

					{/* Sidebar */}
					<aside className="lg:col-span-4 space-y-5">
						{/* Upcoming Batch Dates */}
						<div className="relative rounded-2xl border-2 border-[#1AB69D] bg-gradient-to-br from-[#1AB69D]/10 to-emerald-50 p-6 shadow-md overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-[#1AB69D]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
							<div className="flex items-center gap-2 mb-4">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE4A62] opacity-75" />
									<span className="relative inline-flex rounded-full h-3 w-3 bg-[#EE4A62]" />
								</span>
								<span className="text-sm font-bold uppercase tracking-wider text-[#EE4A62]">
									Upcoming Batch
								</span>
							</div>
							<table className="w-full text-sm">
								<thead>
									<tr className="border-b border-[#1AB69D]/30">
										<th className="py-2 text-left font-semibold text-gray-700">Date</th>
										<th className="py-2 text-left font-semibold text-gray-700">AM</th>
										<th className="py-2 text-left font-semibold text-gray-700">PM</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200/60">
									<tr>
										<td className="py-2.5 font-semibold text-[#1AB69D]">TBA</td>
										<td className="py-2.5 text-gray-800">9:00 AM – 1:00 PM</td>
										<td className="py-2.5 text-gray-800">2:00 PM – 6:00 PM</td>
									</tr>
									<tr>
										<td className="py-2.5 font-semibold text-[#1AB69D]">TBA</td>
										<td className="py-2.5 text-gray-800">9:00 AM – 1:00 PM</td>
										<td className="py-2.5 text-gray-800">2:00 PM – 5:00 PM</td>
									</tr>
								</tbody>
							</table>
							<a
								href="https://form.jotform.com/252672445341052"
								className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1AB69D] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#16917f] active:scale-[0.98] transition-all"
							>
								Register for This Batch
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</a>
						</div>

						<div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
							<div className="mb-2 flex items-center gap-2 font-semibold text-sm" style={{ color: '#1AB69D' }}>
								<FaClock className="shrink-0" />
								COURSE DURATION
							</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								Training – 15 Hours (2 Days)<br />
								Assessment – 01 Hour<br />
								Total Duration – 16 Hours
							</p>
						</div>

						<div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
							<div className="mb-2 flex items-center gap-2 font-semibold text-sm" style={{ color: '#1AB69D' }}>
								<FaChalkboardTeacher className="shrink-0" />
								MODE OF TRAINING
							</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								FACE TO FACE<br />
								Trainer : Learner Ratio<br />
								1 Trainer : 24 Learners
							</p>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="mb-2 flex items-center gap-2 font-semibold text-sm" style={{ color: '#1AB69D' }}>
								<FaCheckCircle className="shrink-0" />
								WSQ COURSE
							</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								Accreditation by Skills and Workforce Development Agency (SWDA)<br />
								Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: '#1AB69D' }}>www.myskillsfuture.gov.sg</a>
							</p>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="mb-2 flex items-center gap-2 font-semibold text-sm" style={{ color: '#1AB69D' }}>
								<FaCertificate className="shrink-0" />
								CERTIFICATION TYPE
							</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								Statement of Attainment
							</p>
						</div>
					</aside>
				</div>
			</section>

			{/* OpenCerts Guide */}
			<section className="px-4 pb-10">
				<div className="mx-auto max-w-7xl">
					<OpenCertsGuide />
				</div>
			</section>

			{/* Fees table */}
			<section className="px-4 pb-16">
				<div className="mx-auto max-w-7xl">
					<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>Course Fee</h3>
					<div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
						<table className="min-w-full divide-y divide-gray-200 text-sm">
							<thead>
								<tr>
									<th className="px-4 py-3 text-left align-top" style={{ backgroundColor: '#E91E63', color: '#ffffff' }}>
										<div className="font-semibold">TGS-2025055862<br />AI-Driven Communication Strategies</div>
										<div className="mt-1 text-xs text-white/90">Funding Validity Period: 17–Jun–2025 to 16–Jun–2027</div>
									</th>
									<th className="px-4 py-3 text-left align-top" style={{ backgroundColor: '#E91E63', color: '#ffffff' }}>
										<div className="font-semibold">Full Course Fee</div>
										<div className="mt-1 text-xs text-white/90">For Foreigners and those not eligible for subsidies</div>
									</th>
									<th className="px-4 py-3 text-left align-top" style={{ backgroundColor: '#E91E63', color: '#ffffff' }}>
										<div className="font-semibold">SG Citizen (21–39 yrs) or SG PR ≥ 21 yrs old</div>
										<div className="mt-1 text-xs text-white/90">SkillsFuture Funding (Baseline) 50%</div>
									</th>
									<th className="px-4 py-3 text-left align-top" style={{ backgroundColor: '#E91E63', color: '#ffffff' }}>
										<div className="font-semibold">SG Citizen (Above 40 yrs old)</div>
										<div className="mt-1 text-xs text-white/90">SkillsFuture Mid-Career Enhanced Subsidy 70%</div>
									</th>
									<th className="px-4 py-3 text-left align-top" style={{ backgroundColor: '#E91E63', color: '#ffffff' }}>
										<div className="font-semibold">SME Sponsored</div>
										<div className="mt-1 text-xs text-white/90">SkillsFuture Enhanced Training Support for SMEs 70%</div>
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">Course Fees</td>
									<td className="px-4 py-3">S$660.00</td>
									<td className="px-4 py-3">S$660.00</td>
									<td className="px-4 py-3">S$660.00</td>
									<td className="px-4 py-3">S$660.00</td>
								</tr>
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">With GST (9%)</td>
									<td className="px-4 py-3">S$719.40</td>
									<td className="px-4 py-3">S$719.40</td>
									<td className="px-4 py-3">S$719.40</td>
									<td className="px-4 py-3">S$719.40</td>
								</tr>
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">SkillsFuture Funding</td>
									<td className="px-4 py-3">-S$0.00</td>
									<td className="px-4 py-3">-S$330.00</td>
									<td className="px-4 py-3">-S$462.00</td>
									<td className="px-4 py-3">-S$462.00</td>
								</tr>
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">Total Net Fee</td>
									<td className="px-4 py-3 font-semibold">S$719.40</td>
									<td className="px-4 py-3 font-semibold">S$389.40</td>
									<td className="px-4 py-3 font-semibold">S$257.40</td>
									<td className="px-4 py-3 font-semibold">S$257.40</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="mt-3 text-sm" style={{ color: '#202020' }}>
						All Singaporeans aged 25 and above can use their S$500 SkillsFuture Credit from the government to pay for a wide range of approved skills-related courses. Visit{' '}
						<a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: '#1AB69D' }}>MySkillsFuture</a> for details.
					</p>
				</div>
			</section>

			{/* Refund Policy */}
			<WsqRefundPolicy />

			{/* Register form section */}
			<section id="register" className="px-4 pb-20">
				<div className="mx-auto max-w-7xl">
					<ContactForm />
				</div>
			</section>
		</main>
	);
}
