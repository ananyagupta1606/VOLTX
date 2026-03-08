export default function Footer() {
	const footerColumns = [
		{
			title: "Shop",
			links: ["Phones", "Laptops", "Audio", "Gaming"],
		},
		{
			title: "Support",
			links: ["Help Center", "Track Order", "Returns", "Warranty"],
		},
		{
			title: "Company",
			links: ["About Us", "Careers", "Press", "Contact"],
		},
	];

	return (
		<footer className="bg-gray-950 border-t border-gray-800 py-10 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
					{/* Brand Section */}
					<div className="col-span-2 sm:col-span-1">
						<div className="flex items-center gap-2 mb-3">
							<span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
							<span className="text-white font-extrabold text-lg">
								VOLT<span className="text-cyan-400">X</span>
							</span>
						</div>

						<p className="text-gray-500 text-xs leading-relaxed">
							Your one-stop shop for the latest and greatest in
							consumer electronics.
						</p>
					</div>

					{/* Link Columns */}
					{footerColumns.map((column) => (
						<div key={column.title}>
							<h3 className="text-white font-semibold text-sm mb-3">
								{column.title}
							</h3>

							<ul className="space-y-2">
								{column.links.map((link) => (
									<li key={link}>
										<button
											type="button"
											className="text-gray-500 text-xs hover:text-cyan-400 transition-colors"
										>
											{link}
										</button>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
					<p>© 2026 VOLTX Electronics. All rights reserved.</p>
					
				</div>
			</div>
		</footer>
	);
}
