import { useState } from "react";

function Stars({ n = 0 }) {
	const rounded = Math.round(n);

	return (
		<span className="text-amber-400 text-sm">
			{"★".repeat(rounded)}
			{"☆".repeat(5 - rounded)}
		</span>
	);
}

export default function ProductDetail({ product, onClose, onAddToCart }) {
	const p = product;

	const finalPrice = p.discount
		? p.price - (p.price * p.discount) / 100
		: p.price;

	return (
		<div
			className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			<div
				className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Image */}
				<div className="relative aspect-video bg-gray-900 rounded-t-2xl flex items-center justify-center overflow-hidden">
					<img
						src={p.image}
						alt={p.name}
						className="w-full h-full object-contain p-6"
					/>

					{p.discount > 0 && (
						<span className="absolute top-3 left-3 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
							-{p.discount}%
						</span>
					)}

					{p.stock === 0 && (
						<span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
							Out of Stock
						</span>
					)}
				</div>

				<div className="p-6">
					{/* Title */}
					<div className="flex justify-between items-start gap-4 mb-3">
						<div>
							<p className="text-cyan-400 text-xs font-bold uppercase mb-1">
								{p.brand}
							</p>
							<h2 className="text-white font-extrabold text-2xl">
								{p.name}
							</h2>
						</div>

						<button
							onClick={onClose}
							className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white flex items-center justify-center"
						>
							✕
						</button>
					</div>

					{/* Rating */}
					<div className="mb-3">
						<Stars n={p.rating} />
						<span className="text-gray-500 text-sm ml-2">
							({p.reviews} reviews)
						</span>
					</div>

					{/* Description */}
					<p className="text-gray-400 text-sm leading-relaxed mb-6">
						{p.description}
					</p>

					{/* Specs Grid */}
					{p.specs && (
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
							{Object.entries(p.specs).map(([key, value]) => (
								<div
									key={key}
									className="bg-gray-800 border border-gray-700 rounded-xl p-3"
								>
									<p className="text-gray-500 text-xs uppercase mb-1 capitalize">
										{key}
									</p>
									<p className="text-white text-sm font-mono">
										{value}
									</p>
								</div>
							))}

							{/* Category */}
							<div className="bg-gray-800 border border-gray-700 rounded-xl p-3">
								<p className="text-gray-500 text-xs uppercase mb-1">
									Category
								</p>
								<p className="text-white text-sm font-mono capitalize">
									{p.category}
								</p>
							</div>

							{/* Stock */}
							<div className="bg-gray-800 border border-gray-700 rounded-xl p-3">
								<p className="text-gray-500 text-xs uppercase mb-1">
									Availability
								</p>
								<p
									className={`text-sm font-mono ${
										p.stock > 0
											? "text-green-400"
											: "text-red-400"
									}`}
								>
									{p.stock > 0
										? `In Stock (${p.stock})`
										: "Out of Stock"}
								</p>
							</div>
						</div>
					)}

					{/* Price + Buttons */}
					<div className="flex items-center justify-between flex-wrap gap-4">
						<p className="text-white font-extrabold text-3xl">
							${finalPrice.toLocaleString()}
							{p.discount > 0 && (
								<span className="text-gray-500 text-base line-through ml-2">
									${p.price.toLocaleString()}
								</span>
							)}
						</p>

						<div className="flex gap-3">
							<button
								disabled={p.stock === 0}
								onClick={() => {
									if (p.stock > 0) {
										onAddToCart(p);
										onClose();
									}
								}}
								className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all
                  ${
						p.stock === 0
							? "bg-gray-600 text-gray-400 cursor-not-allowed"
							: "bg-cyan-400 text-gray-950 hover:bg-cyan-300"
					}`}
							>
								Add to Cart
							</button>

							<button
								onClick={onClose}
								className="border border-gray-600 text-gray-300 px-5 py-2.5 rounded-xl hover:border-cyan-400 hover:text-cyan-400 text-sm font-semibold transition-colors"
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
