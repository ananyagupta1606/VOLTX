import { CATEGORIES } from "../data/products";

export default function CategoryBar({ active = "All", onChange }) {
	return (
		<nav
			className="bg-gray-900 border-b border-gray-800 px-4 sm:px-6 py-3 sticky top-16 z-40"
			aria-label="Product Categories"
		>
			<div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
				{CATEGORIES.map((category) => {
					const isActive = active === category;

					return (
						<button
							key={category}
							type="button"
							onClick={() => onChange?.(category)}
							aria-pressed={isActive}
							className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap border flex-shrink-0 transition-all duration-200 ${
								isActive
									? "bg-cyan-400 text-gray-900 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] scale-105"
									: "bg-gray-800 border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105"
							}`}
						>
							{category}
						</button>
					);
				})}
			</div>
		</nav>
	);
}
