import Image from "next/image";
import ContactForm from "../components/contactform";
import { FaWhatsapp } from "react-icons/fa";

const BRAND_PRIMARY = "#1AB69D";
const BRAND_TEXT = "#202020";

const courseOutline = [
	"Spotting an emergency and conducting a safe scene check.",
	"Recognizing cardiac and breathing emergencies early.",
	"Performing high-quality CPR (cardiopulmonary resuscitation).",
	"Demonstrating and practicing with training AED devices.",
];

const entryRequirements = [
	"Able to speak, read, and understand English as the class is conducted in English.",
	"Physically fit with no existing back, knee, spinal, heart, or lung conditions (consult a doctor if unsure).",
	"Pregnant learners are strongly encouraged to attend only after maternity leave for safety considerations.",
];

export default function CprAedTrainingPage() {
	return (
		<main className="min-h-screen bg-gray-50">
			{/* Hero */}
			<section className="px-4 py-10 md:py-16">
				<div className="mx-auto max-w-6xl">
					<div className="relative overflow-hidden rounded-3xl bg-gray-900">
						<div className="absolute inset-0">
							<Image
								src="/homepage/cprAEDwebHero-1536x864.jpg.jpeg"
								alt="CPR and AED training"
								fill
								priority
								className="object-cover"
								sizes="100vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
						</div>

						<div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:p-14">
							<div className="text-white">
								<p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide">
									Accredited by SRFAC
								</p>
								<h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
									Cardiopulmonary Resuscitation (CPR) + AED Training
								</h1>
								<p className="mt-4 max-w-2xl text-base text-white/90">
									Equip yourself with the skills to recognise and respond to cardiac arrest emergencies and operate an Automated External Defibrillator with confidence.
								</p>
								<div className="mt-6 flex flex-wrap items-center gap-4">
									<span className="rounded-2xl bg-white/90 px-5 py-3 text-lg font-semibold text-gray-900 shadow">
										S$120.00
									</span>
									<a
										href="#register"
										className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg"
										style={{ backgroundColor: BRAND_PRIMARY }}
									>
										Register Now
									</a>
								</div>
							</div>

							<div className="grid gap-4 text-white sm:grid-cols-2">
								<div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
									<p className="text-sm text-white/70">Training Details</p>
									<p className="text-lg font-semibold">4 Hours</p>
									<p className="text-sm text-white/80">Classroom + Practical</p>
								</div>
								<div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
									<p className="text-sm text-white/70">Accreditation</p>
									<p className="text-lg font-semibold">SRFAC</p>
									<p className="text-sm text-white/80">Singapore Resuscitation & First Aid Council</p>
								</div>
								<div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
									<p className="text-sm text-white/70">Certificate Validity</p>
									<p className="text-lg font-semibold">2 Years</p>
									<p className="text-sm text-white/80">CPR + AED Training Certificate</p>
								</div>
								<div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
									<p className="text-sm text-white/70">Teaching Mode</p>
									<p className="text-lg font-semibold">Face to Face</p>
									<p className="text-sm text-white/80">Teacher-to-student 1:40 (Lecture/Practical)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Course outline */}
			<section className="px-4 pb-12">
				<div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wide" style={{ color: BRAND_PRIMARY }}>
								Course Outline
							</p>
							<h2 className="text-2xl font-bold" style={{ color: BRAND_TEXT }}>
								Hands-on practice with CPR fundamentals and AED deployment
							</h2>
						</div>
						<p className="text-gray-600 max-w-xl">
							Guided demonstrations, scenario drills, and practical assessments ensure every learner leaves with muscle memory and confidence to act in real emergencies.
						</p>
					</div>
					<div className="mt-6 grid gap-4 md:grid-cols-2">
						{courseOutline.map((item) => (
							<div key={item} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700">
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Venue & logistics */}
			<section className="px-4 pb-12">
				<div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
					<div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
						<h3 className="text-xl font-bold" style={{ color: BRAND_TEXT }}>
							Venue
						</h3>
						<p className="mt-3 text-gray-700">
							7500A Beach Rd, #05-312 THE PLAZA, Singapore 199591
						</p>
						<p className="mt-2 text-sm text-gray-600">
							Offsite training is available with a minimum of 8 trainees. Additional offsite fees apply.
						</p>
					</div>
					<div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
						<h3 className="text-xl font-bold" style={{ color: BRAND_TEXT }}>
							Certification
						</h3>
						<p className="mt-3 text-gray-700">
							Learners who meet assessment requirements will receive the “CPR + AED Training Certificate” issued by Edusphere College of Management and Technology Pte Ltd.
						</p>
					</div>
				</div>
			</section>

			{/* Entry requirements */}
			<section className="px-4 pb-12" id="entry-requirements">
				<div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-2">
					<div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
						<h3 className="text-xl font-bold" style={{ color: BRAND_TEXT }}>
							Entry Requirements
						</h3>
						<ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
							{entryRequirements.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
						<h3 className="text-xl font-bold" style={{ color: BRAND_TEXT }}>
							Teaching Mode & Support
						</h3>
						<ul className="mt-4 list-disc pl-5 text-gray-600 space-y-2">
							<li>Classroom-based, instructor-led demonstrations with guided practice.</li>
							<li>Teacher-to-student ratio: 1:40 for combined lecture and practical segments.</li>
							<li>Trainers provide corrective feedback during manikin practice and AED drills.</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Contact CTA */}
			<section className="px-4 pb-12">
				<div className="mx-auto max-w-6xl rounded-3xl bg-[#E91E63] p-6 text-white shadow-lg md:p-10">
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<h3 className="text-2xl font-bold">Talk to us</h3>
							<p className="mt-3 text-sm text-white/90">
								Need clarification on schedules, group bookings, or corporate training? Our programme consultants are ready to help.
							</p>
							<div className="mt-5 space-y-3 text-sm">
								<a href="https://wa.me/6582215143" target="_blank" className="flex items-center gap-3 hover:opacity-90">
								<FaWhatsapp className="text-xl" /> Whatsapp +65 8221 5143
								</a>
								<a href="tel:+6582215143" className="flex items-center gap-3 hover:opacity-90">
									<span className="text-xl">📞</span>Call +65 8221 5143
								</a>
							</div>
						</div>
						<div className="rounded-2xl bg-white/10 p-5">
							<h4 className="font-semibold">We can help you with:</h4>
							<ul className="mt-3 space-y-2 text-sm">
								<li>• Private or corporate group sessions</li>
								<li>• Schedule availability & rescheduling</li>
								<li>• Accessibility requirements</li>
								<li>• Certification & renewal queries</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Register section */}
			<section id="register" className="px-4 pb-20">
				<div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
					<h3 className="text-2xl font-bold" style={{ color: BRAND_TEXT }}>
						Ready to secure your slot?
					</h3>
					<p className="mt-2 text-gray-600">
						Share your preferred training date, number of participants, and any special arrangements. We will confirm your booking within one business day.
					</p>
					<div className="mt-6">
						<ContactForm />
					</div>
				</div>
			</section>
		</main>
	);
}
