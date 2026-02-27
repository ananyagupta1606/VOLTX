import { useState } from "react";

function Stars({ n }) {
	return (
		<span className="text-amber-400 text-sm">
			{"★".repeat(n)}
			{"☆".repeat(5 - n)}
		</span>
	);
}

export default function ProductDetail({ product, onClose, onAddToCart }) {
	const p = product;
	const [index, setIndex] = useState(0);

	const nextImage = () => {
		if (!p.images || p.images.length <= 1) return;
		setIndex((prev) => (prev === p.images.length - 1 ? 0 : prev + 1));
	};

	const prevImage = () => {
		if (!p.images || p.images.length <= 1) return;
		setIndex((prev) => (prev === 0 ? p.images.length - 1 : prev - 1));
	};

	return (
		<div
			className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			<div
				className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Image Slider */}
				<div className="relative aspect-video bg-gray-900 rounded-t-2xl flex items-center justify-center overflow-hidden">
					{p.images && (
						<img
							src={p.images[index]}
							alt={p.name}
							className="w-full h-full object-contain p-6 transition-all duration-300"
						/>
					)}

					{/* Arrows (only show if more than 1 image) */}
					{p.images?.length > 1 && (
						<>
							<button
								onClick={prevImage}
								className="absolute left-3 text-white text-3xl px-2 hover:text-cyan-400 transition-colors"
							>
								‹
							</button>
							<button
								onClick={nextImage}
								className="absolute right-3 text-white text-3xl px-2 hover:text-cyan-400 transition-colors"
							>
								›
							</button>
						</>
					)}
				</div>

				<div className="p-6">
					{/* Title row */}
					<div className="flex justify-between items-start gap-4 mb-2">
						<div>
							<p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
								{p.brand}
							</p>
							<h2 className="text-white font-extrabold text-2xl leading-tight">
								{p.name}
							</h2>
						</div>

						<button
							onClick={onClose}
							className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white flex items-center justify-center text-sm flex-shrink-0 transition-colors"
						>
							✕
						</button>
					</div>

					<div className="mb-4">
						<Stars n={p.rating} />
					</div>

					<p className="text-gray-400 text-sm leading-relaxed mb-5">
						{p.desc}
					</p>

					{/* Specs grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
						{p.specs.split(" · ").map((s) => (
							<div
								key={s}
								className="bg-gray-800 border border-gray-700 rounded-xl p-3"
							>
								<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
									Spec
								</p>
								<p className="text-white font-mono text-sm">
									{s}
								</p>
							</div>
						))}
						<div className="bg-gray-800 border border-gray-700 rounded-xl p-3">
							<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
								Category
							</p>
							<p className="text-white font-mono text-sm">
								{p.cat}
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 rounded-xl p-3">
							<p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
								In Stock
							</p>
							<p className="text-green-400 font-mono text-sm">
								✓ Available
							</p>
						</div>
					</div>

					{/* Price + actions */}
					<div className="flex items-center justify-between flex-wrap gap-4">
						<p className="text-white font-extrabold text-3xl">
							${p.price.toLocaleString()}
							{p.oldPrice && (
								<span className="text-gray-500 font-normal text-base line-through ml-2">
									${p.oldPrice.toLocaleString()}
								</span>
							)}
						</p>

						<div className="flex gap-3">
							<button
								onClick={() => {
									onAddToCart(p);
									onClose();
								}}
								className="bg-cyan-400 text-gray-950 font-bold px-6 py-2.5 rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] text-sm"
							>
								Add to Cart
							</button>

							<button
								onClick={onClose}
								className="border border-gray-600 text-gray-300 px-5 py-2.5 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm font-semibold"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
