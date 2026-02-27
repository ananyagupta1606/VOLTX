import { memo } from "react";
import { BADGE_STYLES } from "../data/products";

function Stars({ n }) {
	return (
		<span
			className="text-amber-400 text-xs"
			aria-label={`${n} out of 5 stars`}
		>
			{"★".repeat(n)}
			{"☆".repeat(5 - n)}
		</span>
	);
}

function ProductCard({ product, onAddToCart, onViewDetail }) {
	const p = product;

	const handleView = () => {
		onViewDetail(p);
	};

	const handleAdd = (e) => {
		e.stopPropagation();
		onAddToCart(p);
	};

	return (
		<article
			onClick={handleView}
			className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden cursor-pointer 
      hover:border-cyan-400/60 hover:-translate-y-1.5 
      hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] 
      transition-all duration-200 flex flex-col group"
			role="button"
			tabIndex={0}
			onKeyDown={(e) => e.key === "Enter" && handleView()}
		>
			{/* Image Area */}
			<div className="relative aspect-square bg-gray-900 flex items-center justify-center overflow-hidden">
				{/* Hover glow */}
				<div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-200" />

				{p.badge && (
					<span
						className={`absolute top-2.5 left-2.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10 ${
							BADGE_STYLES[p.badge]
						}`}
					>
						{p.badge}
					</span>
				)}

				<img
					src={p.image}
					alt={p.name}
					loading="lazy"
					className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			{/* Body */}
			<div className="p-4 flex flex-col flex-1">
				<p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
					{p.brand}
				</p>

				<h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2">
					{p.name}
				</h3>

				<p className="text-gray-500 font-mono text-xs leading-relaxed mb-3 line-clamp-2">
					{p.specs}
				</p>

				{/* Footer */}
				<div className="mt-auto pt-3 border-t border-gray-700 flex items-center justify-between gap-2">
					<div>
						<p className="text-white font-extrabold text-lg leading-tight">
							${p.price.toLocaleString()}
							{p.oldPrice && (
								<span className="text-gray-500 font-normal text-xs line-through ml-1.5">
									${p.oldPrice.toLocaleString()}
								</span>
							)}
						</p>

						<Stars n={p.rating} />
					</div>

					<button
						onClick={handleAdd}
						className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/30 
            text-cyan-400 text-xl flex items-center justify-center 
            hover:bg-cyan-400 hover:text-gray-950 
            hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] 
            transition-all flex-shrink-0"
						aria-label={`Add ${p.name} to cart`}
						type="button"
					>
						+
					</button>
				</div>
			</div>
		</article>
	);
}

export default memo(ProductCard);
