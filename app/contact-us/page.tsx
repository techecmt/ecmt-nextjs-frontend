import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/contactform";
import GoogleCarousel from "../components/GoogleCarousel";
import { FiMapPin, FiMail, FiPhone, FiNavigation, FiExternalLink } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | Edusphere College of Management and Technology",
	description: "Get in touch with Edusphere College. Visit us at 7500A Beach Road, #05-312 THE PLAZA, Singapore 199591. WhatsApp us for marketing, admin, student accounts, registration support, sales, and examination matters.",
  openGraph: {
    title: "Contact Us | Edusphere College of Management and Technology",
		description: "Contact Edusphere College on WhatsApp for marketing, admin support, student accounts, registration support, sales, and examination matters.",
    url: "https://edusphere.edu.sg/contact",
    siteName: "Edusphere College of Management and Technology",
    locale: "en_SG",
    type: "website",
  },
  alternates: {
    canonical: "https://edusphere.edu.sg/contact",
  },
};

const BUSINESS_NAME = "Edusphere College of Management and Technology Pte Ltd";
const ADDRESS = "7500A Beach Road, #05-312 THE PLAZA, Singapore 199591";
// Precise coordinates from the official Google Maps place link
const DEST_COORDS = "1.299739,103.860815";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(DEST_COORDS)}&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(DEST_COORDS)}`;
const REVIEW_LINK = "https://www.google.com/maps/place/Edusphere+College+of+Management+and+Technology+Pte+Ltd/@1.299739,103.860815,829m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31da19aaa62b6895:0x440e6d5afcb67346!8m2!3d1.299739!4d103.860815!16s%2Fg%2F11fr1lc7mf?entry=ttu";

export default function ContactPage() {
	// Contact Schema (JSON-LD) - LocalBusiness & ContactPage
	const contactSchema = {
		"@context": "https://schema.org",
		"@type": ["EducationalOrganization", "CollegeOrUniversity"],
		"name": BUSINESS_NAME,
		"alternateName": "Edusphere College",
		"url": "https://edusphere.edu.sg",
		"logo": "https://edusphere.edu.sg/homepage/logoimage.png",
		"description": "Private educational institution in Singapore offering diploma programs and WSQ courses.",
		"foundingDate": "2019",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "7500A Beach Road, #05-312 THE PLAZA",
			"addressLocality": "Singapore",
			"postalCode": "199591",
			"addressCountry": "SG"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": "1.299739",
			"longitude": "103.860815"
		},
		"contactPoint": [
			{
				"@type": "ContactPoint",
				"telephone": "+65-9125-4523",
				"contactType": "marketing",
				"areaServed": "SG",
				"availableLanguage": ["English"]
			},
			{
				"@type": "ContactPoint",
				"telephone": "+65-8138-5600",
				"contactType": "administration support",
				"areaServed": "SG",
				"availableLanguage": ["English"]
			},
			{
				"@type": "ContactPoint",
				"telephone": "+65-8110-2783",
				"contactType": "student accounts",
				"areaServed": "SG",
				"availableLanguage": ["English"]
			},
			{
				"@type": "ContactPoint",
				"telephone": "+65-8070-6203",
				"contactType": "registration support and sales",
				"areaServed": "SG",
				"availableLanguage": ["English"]
			},
			{
				"@type": "ContactPoint",
				"telephone": "+65-8221-5143",
				"contactType": "examination and results",
				"areaServed": "SG",
				"availableLanguage": ["English"]
			}
		],
		"email": "info@edusphere.edu.sg",
		"telephone": "+65-8070-6203",
		"sameAs": [
			"https://www.facebook.com/eduspherecollege",
			"https://www.linkedin.com/company/edusphere-college",
			"https://www.instagram.com/eduspherecollege"
		],
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "09:00",
				"closes": "18:00"
			}
		],
		"priceRange": "$$"
	};

	return (
		<main className="pb-16">
			{/* JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(contactSchema),
				}}
			/>
			{/* Hero / Heading */}
			<section className="py-10 md:py-14 bg-white">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-4xl font-semibold text-[#1AB69D]">
						Contact Us
					</h1>					<h2 className="mt-3 text-xl md:text-2xl font-bold text-gray-900">
						{BUSINESS_NAME}
					</h2>					<p className="mt-2 text-gray-600 max-w-2xl">
						We’re eager to hear from you. Reach us via the details below or send
						us a message — we usually reply within one working day.
					</p>
				</div>
			</section>

			{/* Two column: left info, right form */}
			<section className="py-4">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
						{/* Left: Contact details */}
						<div className="lg:col-span-5">
							<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
								<h2 className="text-xl md:text-2xl font-semibold text-gray-900">We’re Always Eager to Hear From You!</h2>								<p className="mt-2 text-sm text-gray-600 font-medium">{BUSINESS_NAME}</p>
								<div className="mt-6 space-y-5 text-[15px] leading-7 text-gray-700">
									<div className="flex items-start gap-3">
										<FiMapPin className="text-[#1AB69D] mt-1 shrink-0" size={18} />
										<div>
											<h3 className="font-semibold text-gray-900">Address</h3>
											<p className="mt-1">{ADDRESS}</p>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<FiMail className="text-[#1AB69D] mt-1 shrink-0" size={18} />
										<div>
											<h3 className="font-semibold text-gray-900">Email</h3>
											<a href="mailto:info@edusphere.edu.sg" className="mt-1 block text-[#1AB69D] hover:underline">info@edusphere.edu.sg</a>
										</div>
									</div>

									<div>
										<div className="flex items-center gap-2 mb-3">
											<FiPhone className="text-[#1AB69D] shrink-0" size={18} />
											<h3 className="font-semibold text-gray-900">Phone / WhatsApp</h3>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
											{([
												{ href: "https://wa.me/6591254523", number: "+65-9125-4523", label: "Marketing" },
												{ href: "https://wa.me/6581385600", number: "+65-8138-5600", label: "All Admin Related" },
												{ href: "https://wa.me/6581102783", number: "+65-8110-2783", label: "Student Accounts" },
												{ href: "https://wa.me/6580706203", number: "+65-8070-6203", label: "Registration & Sales" },
												{ href: "https://wa.me/6582215143", number: "+65-8221-5143", label: "Examination / Results" },
											] as const).map((c) => (
												<a
													key={c.number}
													href={c.href}
													target="_blank"
													rel="noreferrer"
													className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 transition hover:border-green-200 hover:bg-green-50"
												>
													<FaWhatsapp className="text-green-600 shrink-0" size={18} />
													<div className="min-w-0">
														<p className="text-sm font-semibold text-gray-900 leading-tight">{c.number}</p>
														<p className="text-xs text-gray-500 truncate">{c.label}</p>
													</div>
												</a>
											))}
										</div>
									</div>

									<div>
										<h3 className="font-semibold text-gray-900">Quick Actions</h3>
										<div className="mt-2 flex flex-wrap gap-3">
											<a
												href={MAP_DIRECTIONS}
												target="_blank"
												rel="noreferrer"
												aria-label="Get directions to Edusphere on Google Maps"
												className="inline-flex items-center gap-2 rounded-lg bg-[#1AB69D] text-white px-4 py-2 text-sm font-semibold hover:bg-[#169d88]"
											>
												<FiNavigation />
												<span>Get Directions</span>
											</a>
											<a
												href={REVIEW_LINK}
												target="_blank"
												rel="noreferrer"
												aria-label="Open our Google listing to read and leave reviews"
												className="inline-flex items-center gap-2 rounded-lg border border-[#1AB69D] text-[#1AB69D] px-4 py-2 text-sm font-semibold hover:bg-[#e9fbf7]"
											>
												<FcGoogle />
												<span>Review Us on Google</span>
											</a>
										</div>
									</div>

									
								</div>
							</div>
						</div>

						{/* Right: Contact form */}
						<div className="lg:col-span-7">
							<div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
								
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Map + Reviews two-column */}
			<section className="mt-10">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
						{/* Map card */}
						<div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
							<div className="w-full h-80 sm:h-96 md:h-112 lg:h-128">
								<iframe
									src={MAP_EMBED}
									loading="lazy"
									className="w-full h-full"
									title="Google Map — Edusphere College, Singapore"
									referrerPolicy="no-referrer-when-downgrade"
									allowFullScreen
								/>
							</div>
							<div className="flex flex-col md:flex-row items-start md:items-center gap-3 p-4 bg-gray-50">
								<span className="text-gray-700 text-sm">{ADDRESS}</span>
								<div className="md:ml-auto flex gap-3">
									<a
										href={MAP_DIRECTIONS}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center rounded-md bg-[#1AB69D] text-white px-4 py-2 text-sm font-semibold hover:bg-[#169d88]"
									>
										Get Directions
									</a>
									<a
										href={REVIEW_LINK}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center rounded-md border border-[#1AB69D] text-[#1AB69D] px-4 py-2 text-sm font-semibold hover:bg-[#e9fbf7]"
									>
										Leave a Review
									</a>
								</div>
							</div>
						</div>

						{/* Reviews card */}
						<div>
							<GoogleCarousel />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

