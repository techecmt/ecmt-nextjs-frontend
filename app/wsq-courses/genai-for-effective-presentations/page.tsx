import type { Metadata } from 'next';
import Image from 'next/image';
import WsqContactForm from '../../components/wsq_contactform';
import ContactForm from '@/app/components/contactform';

export const metadata: Metadata = {
	title: 'GenAI for Effective Presentations | WSQ Course | Edusphere',
	description:
		'Build presentation confidence with this WSQ GenAI course covering content planning, storytelling, and AI-assisted delivery techniques.',
};

// Brand Colors:
// Primary: #1AB69D
// Secondary: #EE4A62
// Text: #202020

export default function GenAIPresentationsPage() {
	return (
		<main className="min-h-screen bg-gray-50">
			{/* Hero */}
			<section className="px-4 py-8 md:py-12">
				<div className="mx-auto max-w-7xl">
					<div className="relative overflow-hidden rounded-3xl bg-gray-900">
						{/* Background */}
						<div className="absolute inset-0">
							<Image
								src="/wsq-images/GenAi-presentation-1024x576.jpg.jpeg"
								alt="GenAI for Effective Presentations"
								fill
								priority
								className="object-cover"
								sizes="100vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
						</div>

						<div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
							{/* Left content */}
							<div className="col-span-7 p-6 sm:p-10 md:p-14">
								<div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
									TGS-2025055863
								</div>
								<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
									GenAI for Effective Presentations
								</h1>
								<p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
									You don’t need design experience — AI handles the heavy lifting while you focus on your message.
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
										className="w-full max-w-md rounded-2xl p-[1px] shadow-2xl ring-1 ring-white/20"
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
												Secure your place in the next available run and get hands-on practice with ChatGPT, Gemini, and Gamma.
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
												Need help choosing funding? Call
												{' '}
												<a href="tel:+6582200095" className="font-semibold underline underline-offset-2">
													+65 8220 0095
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Right sidebar */}
							<div className="col-span-5 flex flex-col items-end gap-4 p-6 sm:p-10 md:p-14">
								<div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-black/5 backdrop-blur" style={{ color: '#EE4A62' }}>
									✨ AI INTEGRATED CURRICULUM
								</div>
								<div className="w-full max-w-xs space-y-4">
									<div className="rounded-2xl bg-white px-6 py-5 text-center shadow-sm ring-1 ring-black/5" style={{ color: '#202020' }}>
										<img src="/wsq-images/chatgpt.png" alt="gptlogo" />
									</div>
									<div className="rounded-2xl bg-white px-6 py-5 text-center shadow-sm ring-1 ring-black/5" style={{ color: '#202020' }}>
										<img src="/wsq-images/gemini.png" alt="geminilogo" />
									</div>
									<div className="rounded-2xl bg-white px-6 py-5 text-center shadow-sm ring-1 ring-black/5" style={{ color: '#202020' }}>
										<img src="/wsq-images/gamma.png" alt="gammalogo" />
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
					<div className="lg:col-span-8 rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
						<h2 className="sr-only">About this course</h2>
					<p className="mb-5 font-semibold" style={{ color: '#202020' }}>At the end of this course, learners are able to:</p>
					<ol className="space-y-3 list-decimal pl-5" style={{ color: '#202020' }}>
							<li>Interpret the overall objectives of a presentation by understanding the core principles of presentation content design.</li>
							<li>Review the target audience for a presentation and determine the best ways to tailor the information disclosure to that audience.</li>
							<li>Develop AI-generated information with structured topics for different communication purposes.</li>
							<li>Construct AI-generated information through text-to-multimedia tools for audience engagement.</li>
							<li>Apply communication techniques to refine AI-generated presentation script for optimal engagement.</li>
							<li>Integrate AI-generated content into desired presentation and collaterals.</li>
							<li>Evaluate presentations based on iterative feedback and a deep understanding of audience needs.</li>
						</ol>
					<p className="mt-6" style={{ color: '#202020' }}>
							“GenAI for Effective Presentations” empowers learners to leverage generative AI for creating impactful presentations. This course covers AI-driven content generation, automated slide design, and the creation of immersive experiences. Trainees will gain skills in using GenAI tools to automate tasks, personalize narratives, and enhance audience engagement. The syllabus includes modules on AI-powered brainstorming, data visualization, immersive storytelling and interactive element creation. Learn to transform static presentations into dynamic, engaging experiences using cutting-edge GenAI tools. Enhance your presentation skills and future-proof your communication strategy.
						</p>
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
										<td className="py-2.5 font-semibold text-[#1AB69D]">24-Mar</td>
										<td className="py-2.5 text-gray-800">9:00 AM – 1:00 PM</td>
										<td className="py-2.5 text-gray-800">2:00 PM – 6:00 PM</td>
									</tr>
									<tr>
										<td className="py-2.5 font-semibold text-[#1AB69D]">25-Mar</td>
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
						<div className="mb-2" style={{ color: '#1AB69D' }}>🕒 COURSE DURATION</div>
						<p className="text-sm" style={{ color: '#202020' }}>
								Training – 15 Hours (2 Days)<br />
								Assessment – 01 Hour<br />
								Total Duration – 16 Hours
							</p>
						</div>
						<div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
						<div className="mb-2" style={{ color: '#1AB69D' }}>👩‍🏫 MODE OF TRAINING</div>
						<p className="text-sm" style={{ color: '#202020' }}>
								FACE TO FACE<br />
								Trainer : Learner Ratio<br />
								1 Trainer : 24 Learners
							</p>
						</div>
						<div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
						<div className="mb-2" style={{ color: '#EE4A62' }}>💳 COURSE FEE</div>
						<p className="text-sm" style={{ color: '#202020' }}>S$1000 – NETT (BEFORE FUNDING)</p>
						</div>
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
						<div className="mb-2" style={{ color: '#202020' }}>✅ WSQ COURSE</div>
						<p className="text-sm" style={{ color: '#202020' }}>
							Accreditation by SkillsFuture Singapore (SSG)<br />
							Visit <a className="underline" href="https://www.myskillsfuture.gov.sg" target="_blank" style={{ color: '#1AB69D' }}>www.myskillsfuture.gov.sg</a>
							</p>
						</div>
					</aside>
				</div>
			</section>

			{/* How this course transforms */}
			<section className="px-4 pb-4">
				<div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 border border-indigo-100">
					<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>How This Course Will Transform Your Presentation Skills</h3>
					<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
							<div className="text-2xl">⚡</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>3× Faster Presentation Creation</p>
							<p className="text-sm" style={{ color: '#202020' }}>Visuals and layouts with smart AI design</p>
						</div>
						<div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
							<div className="text-2xl">🪄</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Generate Slides Instantly</p>
							<p className="text-sm" style={{ color: '#202020' }}>Create professional slides in minutes</p>
						</div>
						<div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
							<div className="text-2xl">🧰</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Hands-On with AI Tools</p>
							<p className="text-sm" style={{ color: '#202020' }}>Master Prompt Engineering for Presentations</p>
						</div>
						<div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
							<div className="text-2xl">✅</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Real Outcomes</p>
							<p className="text-sm" style={{ color: '#202020' }}>Polished decks you can deploy immediately</p>
						</div>
					</div>
				</div>
			</section>

			{/* What you'll learn */}
			<section id="learn" className="px-4 py-10">
				<div className="mx-auto max-w-7xl">
					<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>What You Will Learn</h3>
					<div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="text-2xl">📊</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Build Clear & Impactful Presentation Structures</p>
							<ul className="mt-2 list-disc pl-5 text-sm space-y-1" style={{ color: '#202020' }}>
								<li>Convert raw ideas into logical flow</li>
								<li>Use AI frameworks for storytelling</li>
								<li>Improve clarity and audience engagement</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="text-2xl">⚡</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Generate Slides Instantly with AI</p>
							<ul className="mt-2 list-disc pl-5 text-sm space-y-1" style={{ color: '#202020' }}>
								<li>Create slide decks with Copilot & Gemini</li>
								<li>Produce layouts using Canva AI</li>
								<li>Auto-generate images, icons, and visuals</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="text-2xl">🧠</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Master Prompt Engineering for Presentations</p>
							<ul className="mt-2 list-disc pl-5 text-sm space-y-1" style={{ color: '#202020' }}>
								<li>Write prompts for accurate slide content</li>
								<li>Generate speaker notes & scripts</li>
								<li>Turn PDFs/documents into slides</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="text-2xl">📈</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>AI for Data Visualization</p>
							<ul className="mt-2 list-disc pl-5 text-sm space-y-1" style={{ color: '#202020' }}>
								<li>Upload Excel sheets to generate charts</li>
								<li>Create infographics & comparison visuals</li>
								<li>Simplify complex data for audiences</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
							<div className="text-2xl">🎨</div>
							<p className="mt-2 font-semibold" style={{ color: '#202020' }}>Design Polished Presentations Without Design Skills</p>
							<ul className="mt-2 list-disc pl-5 text-sm space-y-1" style={{ color: '#202020' }}>
								<li>Improve consistency & branding</li>
								<li>Use AI suggestions for layouts</li>
								<li>Fix outdated slides with one prompt</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Entry requirements */}
			<section id="entry" className="px-4 pb-10">
				<div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
					<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>Entry Requirements</h3>
					<p className="mt-3" style={{ color: '#202020' }}>
						Minimum Entry Requirement: Able to speak, listen, read and write English at a proficiency level not lower than the Employability Skills WSQ Level 4 Workplace Literacy (WPL).
					</p>
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
										<div className="font-semibold">TGS-2025055863<br />GenAI for Effective Presentations</div>
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
									<td className="px-4 py-3">S$1000.00</td>
									<td className="px-4 py-3">S$1000.00</td>
									<td className="px-4 py-3">S$1000.00</td>
									<td className="px-4 py-3">S$1000.00</td>
								</tr>
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">With GST (9%)</td>
									<td className="px-4 py-3">S$1090.00</td>
									<td className="px-4 py-3">S$1090.00</td>
									<td className="px-4 py-3">S$1090.00</td>
									<td className="px-4 py-3">S$1090.00</td>
								</tr>
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">SkillsFuture Funding</td>
									<td className="px-4 py-3">–S$0.00</td>
									<td className="px-4 py-3">–S$500.00</td>
									<td className="px-4 py-3">–S$700.00</td>
									<td className="px-4 py-3">–S$700.00</td>
								</tr>
								<tr style={{ color: '#202020' }}>
									<td className="px-4 py-3 font-semibold">Total Nett Fee</td>
									<td className="px-4 py-3 font-semibold">S$1090.00</td>
									<td className="px-4 py-3 font-semibold">S$590.00</td>
									<td className="px-4 py-3 font-semibold">S$390.00</td>
									<td className="px-4 py-3 font-semibold">S$390.00</td>
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
					<ContactForm />
				</div>
			</section>
		</main>
	);
}
