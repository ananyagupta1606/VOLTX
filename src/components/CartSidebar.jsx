import { useCart } from "../context/CartContext";

export default function CartSidebar({ onClose, onCheckout }) {
	const { cart, updateQty, cartTotal, cartCount } = useCart();

	return (
		<>
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
				onClick={onClose}
			/>

			{/* Drawer */}
			<div className="fixed right-0 top-0 bottom-0 w-96 max-w-[95vw] bg-gray-900 border-l border-gray-700 z-50 flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
					<h2 className="text-white font-extrabold text-lg">
						🛒 Your Cart
						<span className="ml-2 text-gray-400 font-normal text-sm">
							({cartCount} item{cartCount !== 1 ? "s" : ""})
						</span>
					</h2>

					<button
						onClick={onClose}
						className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors flex items-center justify-center text-sm"
					>
						✕
					</button>
				</div>

				{/* Items */}
				<div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
					{cart.length === 0 ? (
						<div className="text-center py-16">
							<div className="text-5xl mb-3">🛒</div>
							<p className="text-gray-400 mb-5">
								Your cart is empty
							</p>
							<button
								onClick={onClose}
								className="bg-cyan-400 text-gray-950 font-bold px-6 py-2.5 rounded-xl hover:bg-cyan-300 transition-colors text-sm"
							>
								Start Shopping
							</button>
						</div>
					) : (
						cart.map((item) => (
							<div
								key={item.id}
								className="bg-gray-800 border border-gray-700 rounded-xl p-3 flex gap-3"
							>
								{/* Image (instead of emoji now) */}
								<div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center overflow-hidden">
									{item.image ? (
										<img
											src={item.image}
											alt={item.name}
											className="w-full h-full object-contain"
										/>
									) : (
										<span className="text-2xl">📦</span>
									)}
								</div>

								{/* Info */}
								<div className="flex-1 min-w-0">
									<p className="text-white font-semibold text-sm truncate">
										{item.name}
									</p>
									<p className="text-cyan-400 font-mono text-xs mt-0.5">
										${item.price.toLocaleString()}
									</p>

									{/* Quantity Controls */}
									<div className="flex items-center gap-2 mt-2">
										<button
											onClick={() =>
												updateQty(item.id, -1)
											}
											className="w-6 h-6 rounded bg-gray-700 border border-gray-600 text-gray-300 flex items-center justify-center text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors"
										>
											−
										</button>

										<span className="text-white font-mono text-sm min-w-[20px] text-center">
											{item.qty}
										</span>

										<button
											onClick={() =>
												updateQty(item.id, 1)
											}
											className="w-6 h-6 rounded bg-gray-700 border border-gray-600 text-gray-300 flex items-center justify-center text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors"
										>
											+
										</button>
									</div>
								</div>

								{/* Subtotal + Remove */}
								<div className="flex flex-col items-end justify-between flex-shrink-0">
									<span className="text-white font-semibold text-sm">
										$
										{(
											item.price * item.qty
										).toLocaleString()}
									</span>

									<button
										onClick={() =>
											updateQty(item.id, -item.qty)
										}
										className="text-gray-500 hover:text-red-400 transition-colors text-xs"
									>
										🗑️
									</button>
								</div>
							</div>
						))
					)}
				</div>

				{/* Footer */}
				{cart.length > 0 && (
					<div className="p-4 border-t border-gray-700 bg-gray-900">
						<div className="flex justify-between text-sm mb-2">
							<span className="text-gray-400">Subtotal</span>
							<span className="text-white font-mono">
								${cartTotal.toLocaleString()}
							</span>
						</div>

						<div className="flex justify-between text-sm mb-3">
							<span className="text-gray-400">Shipping</span>
							<span className="text-green-400 font-semibold">
								Free
							</span>
						</div>

						<div className="flex justify-between items-center mb-4 pt-2 border-t border-gray-700">
							<span className="text-white font-bold text-base">
								Total
							</span>
							<span className="text-white font-extrabold text-2xl">
								${cartTotal.toLocaleString()}
							</span>
						</div>

						<button
							onClick={onCheckout}
							className="w-full bg-cyan-400 text-gray-950 font-bold py-3.5 rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] text-sm"
						>
							Checkout →
						</button>
					</div>
				)}
			</div>
		</>
	);
}
