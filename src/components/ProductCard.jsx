import { memo } from "react";

function Stars({ n = 0 }) {
	const rounded = Math.round(n);

	return (
		<span
			className="text-amber-400 text-xs"
			aria-label={`${rounded} out of 5 stars`}
		>
			{"★".repeat(rounded)}
			{"☆".repeat(5 - rounded)}
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
		if (p.stock > 0) {
			onAddToCart(p);
		}
	};

	const finalPrice = p.discount
		? p.price - (p.price * p.discount) / 100
		: p.price;

	return (
		<article
			onClick={handleView}
			className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden cursor-pointer 
      hover:border-cyan-400/60 hover:-translate-y-1.5 
      transition-all duration-200 flex flex-col group"
			role="button"
			tabIndex={0}
			onKeyDown={(e) => e.key === "Enter" && handleView()}
		>
			{/* Image Area */}
			<div className="relative aspect-square bg-gray-900 flex items-center justify-center overflow-hidden">
				<img
					src={p.image}
					alt={p.name}
					loading="lazy"
					className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
				/>

				{/* Discount Badge */}
				{p.discount > 0 && (
					<span className="absolute top-2.5 left-2.5 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
						-{p.discount}%
					</span>
				)}

				{/* Out of Stock Badge */}
				{p.stock === 0 && (
					<span className="absolute top-2.5 right-2.5 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
						Out of Stock
					</span>
				)}
			</div>

			{/* Body */}
			<div className="p-4 flex flex-col flex-1">
				<p className="text-cyan-400 text-xs font-bold uppercase mb-1">
					{p.brand}
				</p>

				<h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
					{p.name}
				</h3>

				<p className="text-gray-400 text-xs mb-3 line-clamp-2">
					{p.description}
				</p>

				{/* Footer */}
				<div className="mt-auto pt-3 border-t border-gray-700 flex items-center justify-between gap-2">
					<div>
						<p className="text-white font-extrabold text-lg">
							${finalPrice.toLocaleString()}
							{p.discount > 0 && (
								<span className="text-gray-500 text-xs line-through ml-2">
									${p.price.toLocaleString()}
								</span>
							)}
						</p>

						<Stars n={p.rating} />

						<p className="text-gray-500 text-xs">
							{p.reviews} reviews
						</p>
					</div>

					<button
						onClick={handleAdd}
						disabled={p.stock === 0}
						className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all
              ${
					p.stock === 0
						? "bg-gray-600 text-gray-400 cursor-not-allowed"
						: "bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950"
				}`}
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
