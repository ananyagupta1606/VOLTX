export default function HeroBanner({ onShopNow }) {
	return (
		<section className="relative bg-gray-950 overflow-hidden">
			{/* Background Glow */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-175 h-125 rounded-full bg-cyan-400/5 blur-3xl" />
				<div className="absolute bottom-0 -left-25 w-100 h-75 rounded-full bg-blue-600/5 blur-3xl" />
				<div className="absolute bottom-0 -right-25 w-100 h-75 rounded-full bg-cyan-400/5 blur-3xl" />
			</div>

			{/* Grid Overlay */}
			<div
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage:
						"linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
				{/* Left Content */}
				<div className="flex-1 text-center md:text-left">
					<span className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
						⚡ 2026 Tech Collection
					</span>

					<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] tracking-tight mb-6">
						The Future of
						<br />
						<span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
							Electronics
						</span>
						<br />
						Is Here.
					</h1>

					<p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed mb-8">
						Shop the latest MacBooks, RTX 5090s, OLED TVs, and more
						— curated for the tech-obsessed. Free shipping on every
						order.
					</p>

					<div className="flex flex-wrap gap-3 justify-center md:justify-start">
						<button
							onClick={onShopNow}
							className="bg-cyan-400 text-gray-950 font-bold px-8 py-3.5 rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_24px_rgba(34,211,238,0.4)] hover:shadow-[0_0_36px_rgba(34,211,238,0.6)] hover:-translate-y-0.5 text-sm"
						>
							Shop Now →
						</button>

						<button
							onClick={onShopNow}
							className="border border-gray-600 text-gray-300 font-semibold px-8 py-3.5 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm"
						>
							View Deals
						</button>
					</div>

					{/* Trust Badges */}
					<div className="flex flex-wrap gap-5 mt-10 justify-center md:justify-start">
						{[
							{ icon: "🚚", label: "Free Shipping" },
							{ icon: "🔒", label: "Secure Checkout" },
							{ icon: "↩️", label: "30-Day Returns" },
						].map((badge) => (
							<div
								key={badge.label}
								className="flex items-center gap-2 text-gray-500 text-xs font-medium"
							>
								<span>{badge.icon}</span>
								<span>{badge.label}</span>
							</div>
						))}
					</div>
				</div>

				{/* Right Floating Cards */}
				<div className="shrink-0 relative w-72 h-72 md:w-80 md:h-80 hidden md:block">
					<div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-2xl" />

					{[
						{
							emoji: "💻",
							name: "MacBook Pro",
							price: "$3,499",
							top: "0%",
							left: "50%",
							translate: "-translate-x-1/2",
						},
						{
							emoji: "📱",
							name: "iPhone 16",
							price: "$1,299",
							top: "50%",
							left: "90%",
							translate: "-translate-y-1/2",
						},
						{
							emoji: "🎧",
							name: "Sony XM5",
							price: "$279",
							top: "85%",
							left: "60%",
							translate: "-translate-x-1/2",
						},
						{
							emoji: "🖥️",
							name: "RTX 5090",
							price: "$1,999",
							top: "50%",
							left: "5%",
							translate: "-translate-y-1/2",
						},
					].map((card) => (
						<div
							key={card.name}
							className={`absolute ${card.translate} bg-gray-800/90 border border-gray-700 rounded-2xl px-3 py-2.5 backdrop-blur flex items-center gap-2.5 shadow-xl hover:border-cyan-400/50 hover:scale-105 transition-all cursor-pointer`}
							style={{ top: card.top, left: card.left }}
						>
							<span className="text-2xl">{card.emoji}</span>
							<div>
								<p className="text-white text-xs font-semibold leading-tight">
									{card.name}
								</p>
								<p className="text-cyan-400 text-xs font-bold">
									{card.price}
								</p>
							</div>
						</div>
					))}

					{/* Center Icon
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-20 h-20 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-4xl shadow-2xl">
							⚡
						</div>
					</div> */}
				</div>
			</div>

			{/* Bottom Stats
			<div className="relative border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
					{[
						{ value: "500+", label: "Products" },
						{ value: "50K+", label: "Happy Customers" },
						{ value: "24hr", label: "Fast Shipping" },
						{ value: "4.9★", label: "Avg. Rating" },
					].map((stat) => (
						<div key={stat.label} className="text-center">
							<p className="text-white font-extrabold text-xl md:text-2xl">
								{stat.value}
							</p>
							<p className="text-gray-500 text-xs mt-0.5">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div> */}
		</section>
	);
}
