import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Essential Resources and Support for Students | Edusphere",
	description:
		"Discover student resources and support services at Edusphere College, including academic guidance and learning support.",
};

export default function Page() {
	return (
		<main>
			{/* Combined hero + policy content in a single section */}
			<section className="relative w-full bg-linear-to-b from-rose-50 to-white" aria-label="Policy Content">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Our Policy – <span className="text-rose-600">Course or Module Deferment</span>
					</h1>

					<ul className="mt-6 md:mt-8 list-disc pl-5 sm:pl-6 space-y-4 text-gray-700 text-sm sm:text-base">
						<li>
							All requests for course or module deferment must be made in writing. Students should send their
							requests to any customer service staff. All requests must be supported with documentary evidence.
						</li>
						<li>
							Students are allowed to defer only once up to the maximum period of one (1) year, failing which he/she
							will be deemed to have withdrawn from the course and would have to re-apply as a new applicant if he/she
							wishes to register on the course again. ECMT’s refund policy shall apply.
						</li>
						<li>
							Deferment application made during the term will incur an administrative fee of $50 before GST.
						</li>
						<li>
							Approval for deferment is at the sole discretion of : Edusphere College of Management and Technology (ECMT).
						</li>
					</ul>
				</div>
			</section>

			{/* Attendance Policy section */}
			<section id="attendance-policy" className="w-full bg-white scroll-mt-24" aria-label="Attendance Policy">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 space-y-8 md:space-y-10 text-sm sm:text-base">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Our Policy – <span className="text-rose-600">Attendance</span>
					</h2>

					

					{/* Local Students */}
					<div>
						<h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Local Students</h3>
						<p className="mt-4 text-gray-700">
							Students who do not require a Student Pass (e.g., NRIC/WP holders) must maintain a minimum attendance of 75% (or as defined by institutional policy) to be eligible for certification.
						</p>

						<h4 className="mt-6 text-base font-semibold text-gray-900">Make-up Classes:</h4>
						<p className="mt-2 text-gray-700">
							Students with attendance below the required level due to valid reasons (e.g., medical or approved leave) may:
						</p>
						<ul className="mt-2 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700">
							<li>Attend make-up classes</li>
							<li>Pay applicable fees to fulfill attendance requirements</li>
						</ul>

						
					</div>
				</div>
			</section>

			{/* Student Contract & Documents section */}
			<section
				id="student-contract"
				className="w-full bg-linear-to-b from-white to-rose-50 scroll-mt-24"
				aria-label="Student Contract and Admission Documents"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Student <span className="text-rose-600">Contract & Admission Documents</span>
					</h2>
					<p className="mt-4 text-sm sm:text-base text-gray-700">
						Please review the following documents before enrolment. Click a button to open the document, or use the embedded preview below.
					</p>

					<div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
						<a
							href="https://drive.google.com/file/d/1FwMZFjnj6n_SuATuIsLHzVR9gFs4G_xX/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-5 sm:px-6 py-3 text-sm sm:text-base text-white font-semibold shadow-md hover:bg-rose-700 transition-colors w-full sm:w-auto"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
								<path d="M4 4a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
							</svg>
							Student Contract
						</a>
						<a
							href="https://drive.google.com/file/d/1h6HpU_O_-5M3_VyXq1CWOz7umpMFEz7G/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 sm:px-6 py-3 text-sm sm:text-base text-white font-semibold shadow-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
								<path d="M4 4a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
							</svg>
							Advisory Note, Offer of Admission and More
						</a>
					</div>

					<div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						<figure className="rounded-xl shadow-md ring-1 ring-black/5 bg-white overflow-hidden">
							<div className="w-full h-[60vh] sm:h-[70vh] md:h-auto md:aspect-3/4">
								<iframe
									src="https://drive.google.com/file/d/1FwMZFjnj6n_SuATuIsLHzVR9gFs4G_xX/preview"
									title="Student Contract preview"
									className="w-full h-full"
									allow="autoplay"
								/>
							</div>
							<figcaption className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800">
								Student Contract
							</figcaption>
						</figure>

						<figure className="rounded-xl shadow-md ring-1 ring-black/5 bg-white overflow-hidden">
							<div className="w-full h-[60vh] sm:h-[70vh] md:h-auto md:aspect-3/4">
								<iframe
									src="https://drive.google.com/file/d/1h6HpU_O_-5M3_VyXq1CWOz7umpMFEz7G/preview"
									title="Advisory Note, Offer of Admission and More preview"
									className="w-full h-full"
									allow="autoplay"
								/>
							</div>
							<figcaption className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800">
								Advisory Note, Offer of Admission and More
							</figcaption>
						</figure>
					</div>
				</div>
			</section>

			{/* Certificates section */}
			<section className="w-full bg-white" aria-label="Certificates">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Our <span className="text-rose-600">sample Certificate</span>
					</h2>

					<div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						<figure className="rounded-xl shadow-md ring-1 ring-black/5 bg-white overflow-hidden">
							<div className="relative aspect-3/4">
								<Image
									src="/brand/dhtm-certificate-sample.jpg"
									alt="DHTM certificate sample"
									fill
									className="object-cover"
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							</div>
							<figcaption className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800">
								DHTM Sample Certificate
							</figcaption>
						</figure>

						<figure className="rounded-xl shadow-md ring-1 ring-black/5 bg-white overflow-hidden">
							<div className="relative aspect-3/4">
								<Image
									src="/brand/dhtm-marksheet-sample.jpg"
									alt="DHTM marksheet sample"
									fill
									className="object-cover"
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							</div>
							<figcaption className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-medium text-gray-800">
								DHTM Sample Marksheet
							</figcaption>
						</figure>
					</div>
				</div>
			</section>

			{/* Withdrawal & Refund Policy section */}
			<section className="w-full bg-white" aria-label="Withdrawal and Refund Policy">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Our Policy – <span className="text-rose-600">Course withdrawal and Refund of Fee</span>
					</h2>

					<h3 className="mt-6 md:mt-8 text-sm font-semibold tracking-wide text-gray-900 uppercase">
						Refund for withdrawal due to non-delivery of course:
					</h3>

					<ol className="mt-6 space-y-6 text-sm sm:text-base text-gray-700">
						<li>
							<p>
								Subject to Force Majeure, a student shall be entitled to immediately withdraw from the Course by giving
								written notice to Edusphere College of Management and Technology (ECMT) of their intention to do because of
								one or more of the following circumstances: Edusphere College of Management and Technology (ECMT) will notify the
								Student within three (3) working days upon knowledge of any of the following:
							</p>
							<ul className="mt-4 list-disc pl-6 space-y-3">
								<li>ECMT does not commence the Course on the Course Commencement Date;</li>
								<li>ECMT terminates the Course before the Course Commencement Date;</li>
								<li>ECMT does not complete the Course by the Course Completion Date;</li>
								<li>ECMT terminates the Course before the Course Completion Date;</li>
								<li>
									ECMT has not ensured that the Student meets the course entry or matriculation requirement as set by the
									organisation stated in Schedule A within any stipulated timeline set by PEI; or
								</li>
							</ul>
						</li>
						<li>
							<p>
								The Student should be informed in writing of alternative study arrangements (if any), and also be entitled to a
								refund of the entire Course Fees and Miscellaneous Fees already paid should the Student decide to withdraw, within
								seven (7) working days of the above notice.
							</p>
						</li>
					</ol>

					<p className="mt-6 text-sm sm:text-base text-gray-700">
						If the Student withdraws from the Course for any reason other than those stated in Clause 2.1, ECMT will, within
						seven (7) working days of receiving the Student’s written notice of withdrawal, refund to the Student an amount
						based on the table in Schedule D.
					</p>

					{/* Refund table */}
					<div className="mt-6 md:mt-8 rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden">
						<div className="px-5 sm:px-7 pt-6 pb-4">
							<h3 className="text-2xl sm:text-3xl font-bold text-teal-500 leading-snug">
								Course Withdrawal/Transfer and Refund Policy
							</h3>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full table-auto text-sm sm:text-base">
								<thead>
									<tr>
										<th className="w-1/3 bg-rose-500 text-white font-bold px-4 sm:px-6 py-4 text-left align-top">
											Refund of Course Fee (%)
										</th>
										<th className="bg-rose-500 text-white font-bold px-4 sm:px-6 py-4 text-left align-top">
											If Student’s written notice of withdrawal is received:
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="text-center font-extrabold text-gray-900 px-4 sm:px-6 py-5">100%</td>
										<td className="px-4 sm:px-6 py-5 text-gray-700">("Maximum Refund") More than [30] days before the Course Commencement Date</td>
									</tr>
									<tr>
										<td className="text-center font-extrabold text-gray-900 px-4 sm:px-6 py-5">50%</td>
										<td className="px-4 sm:px-6 py-5 text-gray-700">Before, but not more than [30] days before the Course Commencement Date</td>
									</tr>
									<tr>
										<td className="text-center font-extrabold text-gray-900 px-4 sm:px-6 py-5">25%</td>
										<td className="px-4 sm:px-6 py-5 text-gray-700">After, but not more than [15] days after the Course Commencement Date</td>
									</tr>
									<tr>
										<td className="text-center font-extrabold text-gray-900 px-4 sm:px-6 py-5">0%</td>
										<td className="px-4 sm:px-6 py-5 text-gray-700">More than [15] days after the Course Commencement Date</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>

			{/* Non‑tuition Fees – Refund Policy */}
			<section className="w-full bg-white" aria-label="Non-tuition Fees Refund Policy">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
					<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Non-tuition Fees – <span className="text-rose-600">Refund Policy</span>
					</h2>

					<div className="mt-8 md:mt-10 overflow-x-auto -mx-4 sm:mx-0">
						<table className="min-w-full table-auto border border-gray-200 text-sm sm:text-base">
							<thead>
								<tr>
									<th className="w-1/3 bg-rose-600 text-white text-sm md:text-base font-semibold px-3 sm:px-4 py-3 border-r border-rose-600 text-left">
										Types of Fees
									</th>
									<th className="bg-rose-600 text-white text-sm md:text-base font-semibold px-3 sm:px-4 py-3 text-left">
										Percentage of Refund
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="px-3 sm:px-4 py-3">Course Application Fee</td>
									<td className="px-3 sm:px-4 py-3">Not refundable</td>
								</tr>
								<tr>
									<td className="px-3 sm:px-4 py-3">Not refundable</td>
									<td className="px-3 sm:px-4 py-3">Not refundable as fee is imposed by the bank.</td>
								</tr>
								<tr>
									<td className="px-3 sm:px-4 py-3">Continual Material Fee</td>
									<td className="px-3 sm:px-4 py-3">
										<span className="block">75% – if the refund request is made 30 days or more before the intake date</span>
										<span className="block">50% – if the refund request is made 14 days or more but less than 30 days before the intake date</span>
										<span className="block">5% – if the refund is made less than 14 days before the intake date</span>
										<span className="block">0% – if made on the intake date itself</span>
									</td>
								</tr>
								<tr>
									<td className="px-3 sm:px-4 py-3">Continual Assessment Fee</td>
									<td className="px-3 sm:px-4 py-3">
										<span className="block">75% – if the refund request is made 30 days or more before the intake date</span>
										<span className="block">50% – if the refund request is made 14 days or more but less than 30 days before the intake date</span>
										<span className="block">5% – if the refund is made less than 14 days before the intake date</span>
										<span className="block">0% – if made on the intake date itself</span>
									</td>
								</tr>
								<tr>
									<td className="px-3 sm:px-4 py-3">Examination Fee</td>
									<td className="px-3 sm:px-4 py-3">
										<span className="block">75% – if the refund request is made 30 days or more before the intake date</span>
										<span className="block">50% – if the refund request is made 14 days or more but less than 30 days before the intake date</span>
										<span className="block">5% – if the refund is made less than 14 days before the intake date</span>
										<span className="block">0% – if made on the intake date itself</span>
									</td>
								</tr>
								<tr>
									<td className="px-3 sm:px-4 py-3">Student Membership Fee</td>
									<td className="px-3 sm:px-4 py-3">
										<span className="block">75% – if the refund request is made 30 days or more before the intake date</span>
										<span className="block">50% – if the refund request is made 14 days or more but less than 30 days before the intake date</span>
										<span className="block">5% – if the refund is made less than 14 days before the intake date</span>
										<span className="block">0% – if made on the intake date itself</span>
									</td>
								</tr>
								<tr>
									<td className="px-3 sm:px-4 py-3">Insurance Fee</td>
									<td className="px-3 sm:px-4 py-3">Payable per academic year or per course, if applicable. NOT REFUNDABLE.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Cooling-off, Force Majeure, No Double Claim, Additional Info */}
			<section className="w-full bg-white" aria-label="Additional Policies">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 space-y-8 md:space-y-10 text-sm sm:text-base">
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
							Refund During <span className="text-rose-600">Cooling-off Period</span>
						</h2>
						<p className="mt-6 text-gray-700">
							ECMT shall provide the Student with a cooling-off period of seven (7) working days after the date that the
							Contract has been signed by both parties.
						</p>
						<p className="mt-4 text-gray-700">
							The Student will be refunded the highest percentage (stated in Schedule D) of the fees already paid if the
							Student submits a written notice of withdrawal to ECMT within the cooling-off period, regardless of whether the
							Student has started the course or not.
						</p>
					</div>

					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Force Majeure</h2>
						<p className="mt-6 text-gray-700">
							In the event that ECMT and the student shall be rendered unable to carry out the whole or any part of its
							obligations under the Student Contract for any reason beyond the control of that party, including but not limited to
							acts of God, force majeure, strikes, war, riot and any other causes of such nature, then the performance of the
							obligations hereunder of that party or all the parties as the case may be and as they are affected by such cause
							shall be excused during the continuance of any inability so caused, but such inability shall as far as possible be
							remedied with all reasonable despatch. For the avoidance of doubt, this shall not apply to cases where:
						</p>
						<ul className="mt-4 list-disc pl-6 space-y-3 text-gray-700">
							<li>ECMT is declared to be insolvent and/or a winding-up order made or bankruptcy issued by the Singapore court against it; and</li>
							<li>The relevant authority(ies) issue(s) an order to cease and/or terminate the operations of ECMT, or the happening of anything of a similar nature under the laws of Singapore.</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">No Double Claim</h2>
						<p className="mt-6 text-gray-700">
							If the Student and/or his/her parent/guardian receives any payment from ECMT or the Escrow Bank/Insurance Company
							due to a provision of the Student Contract or the Master Escrow Agreement/Master Insurance Agreement for any matter
							or damage, then the Student and his/her parent/guardian shall not be entitled to claim against ECMT or the Escrow
							Bank/Insurance Company* for the same payment for the same matter or damage due to any other provision in the Student
							Contract or the Master Escrow Agreement/Master Insurance Agreement.
						</p>
					</div>

					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Additional Information</h2>
						<ul className="mt-6 list-disc pl-6 space-y-3 text-gray-700">
							<li>The laws of Singapore will apply to how the student contract will be read and to the rights the parties have under the student Contract.</li>
							<li>If any part of the student Contract is not valid for any reason under the law of Singapore, this will not affect any other part of the student Contract.</li>
							<li>If the Student and ECMT cannot settle a dispute using the way arranged by ECMT, the Student and ECMT may refer the dispute to the PEI Mediation-Arbitration Scheme (https://www.ssg.gov.sg).</li>
							<li>All information given by the Student to ECMT will not be given by ECMT to anyone else, unless the Student signs in writing that he agrees or unless ECMT is allowed to give the information by law.</li>
							<li>Any agreement other than the student Contract is invalid if it is administered without the written permission of PEI. If there is any other agreement between ECMT and the Student that is different from the terms in the student Contract, then the terms in the student Contract will apply.</li>
							<li>If the Student or ECMT does not exercise or delay exercising any right granted by the student Contract, the Student and ECMT will still be able to exercise the same type of right under this Contract during the rest of the time the Contract continues.</li>
							<li>If the student Contract is also signed or translated in any language other than English and there is a difference from the English language copy of this Contract, the English language copy will apply.</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="w-full bg-white" aria-label="Personal Data Protection">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 space-y-6 md:space-y-8 text-sm sm:text-base">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Our Policy – <span className="text-rose-600">Personal Data Protection</span>
					</h2>

					<h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">Confidentiality of Information – Personal Data Protection Policy</h3>
					<p className="text-gray-700">
						ECMT complies with the Personal Data Protection Act 2012 (PDPA). Personal data refers to data, whether true or not,
						about an individual who can be identified from that data; or from that data and other information to which the organisation
						has or is likely to have access. Personal data in Singapore is protected under the Personal Data Protection Act 2012 (PDPA).
						See more at: <a className="text-rose-600 underline" href="http://www.pdpc.gov.sg/personal-data-protection-act/overview" target="_blank" rel="noopener noreferrer">pdpc.gov.sg</a>.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Accountability</h4>
					<p className="text-gray-700">
						We will be responsible for all personal data collected. All personal data collected will be used and processed fairly and
						lawfully while in our possession or custody. We ensure all our customers that we would be accountable for our organisation’s
						compliance to our Privacy Policy.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Specifying Purposes</h4>
					<p className="text-gray-700">
						Personal data collected, will not be used for a new purpose unless we obtain consent from our customers. We are the sole
						owner of the personally identifiable information and we will not use this information for purpose other than for which the
						information was collected.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Consent</h4>
					<p className="text-gray-700">
						We do not collect sensitive information from our customers. We assure all customers that all personal information collected
						would be used or disclosed only for the purposes for which it was collected.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Limiting Collection</h4>
					<p className="text-gray-700">
						Only the necessary personal data is collected from customers’ for business purposes. Both the amount and the type of data
						collected shall be limited to that which is necessary to fulfill the purposes identified.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Limiting Use, Disclosure and Retention</h4>
					<ul className="mt-2 list-disc pl-6 space-y-3 text-gray-700">
						<li>We will not disclose, share, transfer, sell or rent personally identifiable information to any 3rd party.</li>
						<li>We do not send unsolicited marketing email to our customers unless consented by them. Customers who have consented will occasionally receive email on special promotions we hold. Out of respect for the privacy of our users, users may opt-out of receiving these communications by replying to unsubscribe in the subject line in the email.</li>
						<li>We do not keep personal data for longer than is necessary for those purposes for which they are collected.</li>
						<li>We have developed guidelines and implemented procedures to govern the destruction of personal data that are no longer required to fulfill the identified purposes.</li>
						<li>We do not use “cookies”, “web-bugs” or any other tracking technologies to collect information from users of our web site.</li>
						<li>We would not display or make publicly available, whether through online directories, customer lists or otherwise, the personally identifiable information collected.</li>
					</ul>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Accuracy</h4>
					<p className="text-gray-700">
						We ensure our customers that all personal information collected is accurate and kept up to date. We do not maintain duplicate
						copies of personal information in different systems.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Safeguards</h4>
					<p className="text-gray-700">
						We ensure our customers that appropriate security safeguards are in place to protect personal data against unauthorised access,
						misuse, disclosure, copying, use, alteration, accidental loss or theft, destruction or damage.
					</p>
					<p className="text-gray-700">Only authorised staff have access to our systems. Consultants, contractors or other temporary employees do not have access to the data.</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Openness</h4>
					<p className="text-gray-700">
						Our data protection policy (Privacy Policy) is displayed on the web site and the policy is set out in the same language medium
						as the web site. We encourage all our customers to read our Privacy Policy to understand the objectives of collecting their
						personal data.
					</p>

					<h4 className="mt-6 text-base font-semibold text-gray-900">Challenging Compliance</h4>
					<p className="text-gray-700">
						Our mechanisms and processes are in place to receive and address complaints or inquiries about our policies and procedures
						relating to the handling of personal data. Appropriate measures will be taken to amend policies and procedures if a complaint is
						found to be justified.
					</p>
				</div>
			</section>

			<section className="w-full bg-white" aria-label="Feedback and Complaints">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 space-y-6 text-sm sm:text-base">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
						Our Policy – <span className="text-rose-600">Feedback and Complaints</span>
					</h2>
					<p className="text-gray-700">Edusphere College of Management and Technology has a Customer Feedback and Resolution Framework in place.</p>
					<h3 className="text-base font-semibold text-gray-900">The Policy</h3>
					<p className="text-gray-700">
						ECMT believes strongly that feedback is an important part in its continual efforts to improve its products, delivery,
						administration and service quality. Students and/or customers are encouraged to give feedback.
					</p>
					<h3 className="text-base font-semibold text-gray-900">Guiding Principles</h3>
					<p className="text-gray-700">
						ECMT approaches student/customer feedback and grievances according to the following guiding principles.
					</p>

					<div className="mt-6 overflow-x-auto -mx-4 sm:mx-0">
						<table className="min-w-full table-auto border border-gray-200">
							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="w-28 sm:w-40 md:w-52 font-semibold text-gray-900 px-3 sm:px-4 py-3 border-r border-gray-200 text-center align-top">Step 1:</td>
									<td className="px-3 sm:px-4 py-3 text-gray-700">
										Informal management of feedback (minor problem) will be attempted on the same day it is received before escalation to
										Grievance or Written Grievance (major problem).
									</td>
								</tr>
								<tr>
									<td className="w-28 sm:w-40 md:w-52 font-semibold text-gray-900 px-3 sm:px-4 py-3 border-r border-gray-200 text-center align-top">Step 2:</td>
									<td className="px-3 sm:px-4 py-3 text-gray-700">
										If unresolved on the same day, the grievance will be resolved within 14 working days from the day the feedback/grievance was
										received.
									</td>
								</tr>
								<tr>
									<td className="w-28 sm:w-40 md:w-52 font-semibold text-gray-900 px-3 sm:px-4 py-3 border-r border-gray-200 text-center align-top">Step 3:</td>
									<td className="px-3 sm:px-4 py-3 text-gray-700">
										If the matter remains unresolved or the student is unsatisfied with the outcome, students may approach the PEI Student Services
										Centre for assistance. At the Student Services Centre, PEI officers will review the complaints and provide the appropriate advice.
									</td>
								</tr>
								<tr>
									<td className="w-28 sm:w-40 md:w-52 font-semibold text-gray-900 px-3 sm:px-4 py-3 border-r border-gray-200 text-center align-top">Step 4:</td>
									<td className="px-3 sm:px-4 py-3 text-gray-700">
										The PEI may advise the student to participate in the Committee for Private Education’s (PEI’s) appointed Dispute Resolution Scheme
										which works as follows: Dispute Resolution Scheme Private education institutions participation in the dispute resolution process is
										compulsory as stipulated by the Private Education Act. There are two stages in the process mediation and arbitration.
										<strong className="font-semibold"> Stage 1: Mediation</strong> The complaint may be referred to the Singapore Mediation Centre for mediation. If a settlement between the student and the private education institution could be reached at the mediation stage, a settlement agreement would be drawn up and endorsed by the respective parties, and the dispute resolved.
										<strong className="font-semibold"> Stage 2: Arbitration</strong> If the parties fail to reach a settlement through mediation, the student can progress on to arbitration for a resolution to his dispute. The Singapore Institute of Arbitrators is the appointed provider of arbitration services.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</main>
	);
}

