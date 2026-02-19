import Image from 'next/image';
import WsqContactForm from '../../components/wsq_contactform';import { FaWhatsapp } from "react-icons/fa";
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
							<div className="col-span-8 p-6 sm:p-10 md:p-14">
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
									<div className="w-full max-w-sm rounded-2xl p-1 shadow-lg" style={{ background: 'linear-gradient(135deg, #1AB69D 0%, #31B979 100%)' }}>
										<div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur">
											<div className="flex items-center gap-2 text-sm font-semibold">
												<span className="text-orange-300">🔥</span>
												Seats filling fast
											</div>
											<div className="mt-3">
												<a
													href="#register"
													className="inline-flex w-full items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold shadow-sm hover:opacity-90"
													style={{ backgroundColor: '#1AB69D', color: '#ffffff' }}
												>
													Register Now
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Right sidebar */}
							<div className="col-span-4 flex flex-col items-end gap-4 p-6 sm:p-10 md:p-14">
								<div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 backdrop-blur" style={{ color: '#EE4A62' }}>
									✨ AI INTEGRATED CURRICULUM
								</div>
								{/* Placeholder or specific AI badges can go here if needed */}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="px-4 py-10 md:py-12">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
					{/* Main */}
					<div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
						<h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#202020' }}>Course Overview</h2>
						<p className="mb-6 text-gray-600">
							The “AI-Driven Communication Strategies for Service Excellence” course is tailored for professionals in the service industry who aim to elevate their customer engagement skills through the integration of AI-driven communication techniques. With the evolving landscape of customer expectations, this course empowers participants to deliver exceptional service experiences, build stronger relationships, and drive service excellence both in person and through digital channels.
						</p>

						<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#202020' }}>Course Objective</h3>
						<p className="mb-6 text-gray-600">
							This course aims to equip learners with the essential skills and knowledge to leverage AI-driven tools and communication strategies in enhancing customer experiences. Participants will learn how to understand diverse customer needs, project a professional image, communicate effectively, and go the extra mile to exceed service expectations in both traditional and digital service environments.
						</p>

						<h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#202020' }}>Learning Outcomes</h3>
						<p className="mb-3 font-medium" style={{ color: '#202020' }}>By the end of the course, participants will:</p>
						<ul className="space-y-3 list-disc pl-5 text-gray-600">
							<li>Identify different types of customers and understand their needs and expectations, including interactions through AI platforms.</li>
							<li>Demonstrate professionalism and service excellence both face-to-face and via AI-assisted channels.</li>
							<li>Deliver personalized and value-added service that exceeds customer expectations.</li>
							<li>Use effective communication techniques to build rapport and meet customer needs efficiently.</li>
							<li>Recognize areas of improvement in service delivery and communicate these effectively for continuous enhancement.</li>
						</ul>
					</div>

					{/* Sidebar */}
					<aside className="lg:col-span-4 space-y-5">
						<div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
							<div className="mb-2 font-semibold" style={{ color: '#1AB69D' }}>🕒 COURSE DURATION</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								Training – 15 Hours (2 Days)<br />
								Assessment – 1 Hour<br />
								Total Duration – 16 Hours
							</p>
						</div>
						<div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
							<div className="mb-2 font-semibold" style={{ color: '#1AB69D' }}>👩‍🏫 MODE OF TRAINING</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								FACE TO FACE<br />
								Trainer : Learner Ratio<br />
								1 Trainer : 24 Learners
							</p>
						</div>
						<div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
							<div className="mb-2 font-semibold" style={{ color: '#EE4A62' }}>💳 COURSE FEE</div>
							<p className="text-sm" style={{ color: '#202020' }}>S$660/- NETT (BEFORE FUNDING)</p>
						</div>
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="mb-2 font-semibold" style={{ color: '#202020' }}>✅ WSQ COURSE</div>
							<p className="text-sm" style={{ color: '#202020' }}>
								Accreditation by SkillsFuture Singapore (SSG)<br />
								Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: '#1AB69D' }}>www.myskillsfuture.gov.sg</a>
							</p>
						</div>
					</aside>
				</div>
			</section>

			{/* Who should attend */}
			<section id="audience" className="px-4 pb-4">
				<div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 border border-indigo-100">
					<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>Who Should Attend?</h3>
					<p className="mt-4 text-gray-700">
						This course is ideal for individuals working in the service sector who wish to improve their customer communication skills using modern, AI-enhanced approaches. It is suitable for professionals at various levels who are committed to delivering quality customer service and staying competitive in a tech-driven market.
					</p>
					
					<h4 className="mt-6 text-lg font-semibold" style={{ color: '#202020' }}>Relevant Job Roles</h4>
					<p className="mt-2 text-sm text-gray-600 mb-4">The AI-Driven Communication Strategies for Service Excellence is ideal for individuals who work as Service staff, or in Supervisor and Managerial roles, particularly:</p>
					
					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
						{['Frontline Service Staff', 'Customer Service Officers', 'Hospitality Executives', 'Retail Associates', 'Team Leaders', 'Supervisors', 'Department Managers', 'Service-oriented Roles'].map((role) => (
							<div key={role} className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 flex items-center gap-3">
								<div className="text-xl text-indigo-500">👥</div>
								<span className="font-medium text-gray-800 text-sm">{role}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Entry requirements */}
			<section id="entry" className="px-4 py-10">
				<div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
					<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>Minimum Entry Requirement</h3>
					<p className="mt-3 text-gray-700">
						There are no strict prerequisites for this course. However, it is recommended for individuals with:
					</p>
					<ul className="mt-2 list-disc pl-5 text-gray-600 space-y-1">
						<li>Basic proficiency in English (spoken and written)</li>
						<li>Interest or experience in customer service or service-related roles</li>
						<li>Openness to exploring digital and AI-driven communication tools</li>
					</ul>
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
						All Singaporeans aged 25 and above can use their S$500 SkillsFuture Credit from the government to pay for a wide range of approved skills-related courses. Visit
						{' '}<a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: '#1AB69D' }}>MySkillsFuture</a> for details.
					</p>
				</div>
			</section>

			{/* Register form section */}
			<section id="register" className="px-4 pb-20">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
						{/* Contact Info */}
						<div className="lg:col-span-4 rounded-2xl bg-[#E91E63] text-white p-8 h-fit">
							<h3 className="text-2xl font-bold mb-6">Talk to us directly</h3>
							<div className="space-y-6">
								<a href="https://wa.me/6582215143" target="_blank" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
									<FaWhatsapp className="text-2xl" />
									<div>
										<div className="font-semibold">Whatsapp Us</div>
										<div className="text-sm opacity-90">Get instant answers</div>
									</div>
								</a>
								<a href="tel:+6582215143" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
									<span className="text-2xl">📞</span>
									<div>
										<div className="font-semibold">+65 8221 5143</div>
										<div className="text-sm opacity-90">Call our roadmap consultants</div>
									</div>
								</a>
								<a href="https://maps.google.com" target="_blank" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
									<span className="text-2xl">📍</span>
									<div>
										<div className="font-semibold">Find us on Google Maps</div>
										<div className="text-sm opacity-90">Visit our campus</div>
									</div>
								</a>
							</div>
							<div className="mt-8 pt-8 border-t border-white/20">
								<h4 className="font-semibold mb-3">We can help you with:</h4>
								<ul className="space-y-2 text-sm opacity-90">
									<li>• Understanding the available subsidies</li>
									<li>• Clarifying course details (Assessment, Schedule etc.)</li>
									<li>• Finding out if this course suits your goals</li>
									<li>• Checking if you are eligible for the course</li>
								</ul>
							</div>
						</div>

						{/* Form */}
						<div className="lg:col-span-8">
							<WsqContactForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
