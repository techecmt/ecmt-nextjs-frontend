export default function WsqRefundPolicy() {
	return (
		<section className="px-4 py-10">
			<div className="mx-auto max-w-7xl rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
				<h3 className="text-xl md:text-2xl font-bold" style={{ color: '#202020' }}>
					Refund Policy
				</h3>
				<p className="mt-3 text-gray-600 text-sm">
					Edusphere College is committed to transparent fee policies. The following refund guidelines apply to all WSQ courses.
				</p>

				{/* Refund Table */}
				<div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
					<table className="min-w-full divide-y divide-gray-200 text-sm">
						<thead>
							<tr>
								<th
									className="px-6 py-4 text-left font-semibold"
									style={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
								>
									Notice Period Before Course Start
								</th>
								<th
									className="px-6 py-4 text-left font-semibold"
									style={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
								>
									Refund Eligibility
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							<tr className="bg-white hover:bg-gray-50 transition-colors">
								<td className="px-6 py-4 font-medium" style={{ color: '#202020' }}>
									More than 14 days
								</td>
								<td className="px-6 py-4" style={{ color: '#202020' }}>
									100% of course fees refunded (minus admin fee)
								</td>
							</tr>
							<tr className="bg-gray-50/50 hover:bg-gray-50 transition-colors">
								<td className="px-6 py-4 font-medium" style={{ color: '#202020' }}>
									7 to 14 days
								</td>
								<td className="px-6 py-4" style={{ color: '#202020' }}>
									50% of course fees refunded
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors">
								<td className="px-6 py-4 font-medium" style={{ color: '#202020' }}>
									Less than 7 days
								</td>
								<td className="px-6 py-4" style={{ color: '#202020' }}>
									No refund
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Admin Fees */}
				<div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-5">
					<h4 className="font-semibold text-amber-800 flex items-center gap-2">
						<span>💰</span> Admin Fees (non-refundable)
					</h4>
					<ul className="mt-3 space-y-2 text-sm text-amber-900">
						<li className="flex items-center gap-2">
							<span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
							<strong>$15.00</strong> for regular courses
						</li>
						<li className="flex items-center gap-2">
							<span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
							<strong>$55.00</strong> for diploma-level and above
						</li>
					</ul>
				</div>

				<p className="mt-4 text-xs text-gray-500">
					For more details on our refund and withdrawal policies, please refer to our{' '}
					<a href="/terms-conditions" className="underline hover:text-gray-700" style={{ color: '#1AB69D' }}>
						Terms &amp; Conditions
					</a>{' '}
					or contact our student services team.
				</p>
			</div>
		</section>
	);
}
