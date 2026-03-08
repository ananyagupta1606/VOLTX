import { memo } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({
	products = [],
	category = "All",
	onAddToCart,
	onViewDetail,
}) {
	const title =
		category === "All"
			? "All Products"
			: category.charAt(0).toUpperCase() + category.slice(1);

	const itemCount = products.length;

	return (
		<section
			className="bg-gray-900 min-h-[60vh] px-4 sm:px-6 py-8"
			aria-live="polite"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex justify-between items-baseline mb-6">
					<h2 className="text-white font-extrabold text-2xl tracking-tight">
						{title}
					</h2>

					<span className="text-gray-500 text-sm">
						{itemCount} item{itemCount !== 1 ? "s" : ""}
					</span>
				</div>

				{/* Empty State */}
				{itemCount === 0 ? (
					<div className="text-center py-24 text-gray-500">
						<div className="text-5xl mb-4 animate-pulse">🔍</div>

						<p className="text-lg font-semibold text-gray-400 mb-1">
							No products found
						</p>

						<p className="text-sm">
							Try changing category or search keyword
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-all duration-300">
						{products.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								onAddToCart={onAddToCart}
								onViewDetail={onViewDetail}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default memo(ProductGrid);
