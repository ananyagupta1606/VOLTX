import { useState } from "react";

export default function Navbar({
	cartCount = 0,
	onCartOpen,
	onAuthOpen,
	user,
	onSignOut,
	search = "",
	onSearchChange,
}) {
	const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
	const [userMenuOpen, setUserMenuOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
				{/* Logo */}
				<div className="flex items-center gap-2 flex-shrink-0">
					<span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
					<span className="text-white font-extrabold text-xl tracking-tight">
						VOLT<span className="text-cyan-400">X</span>
					</span>
				</div>

				{/* Desktop Search */}
				<div className="hidden sm:flex flex-1 max-w-xl mx-auto items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all">
					<svg
						className="w-4 h-4 text-gray-500 flex-shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
						/>
					</svg>

					<input
						className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500 text-sm"
						placeholder="Search products, brands..."
						value={search}
						onChange={(e) => onSearchChange(e.target.value)}
					/>

					{search && (
						<button
							onClick={() => onSearchChange("")}
							className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
						>
							✕
						</button>
					)}
				</div>

				{/* Right Side */}
				<div className="flex items-center gap-2 ml-auto flex-shrink-0">
					{/* Mobile Search Toggle */}
					<button
						onClick={() => setMobileSearchOpen((v) => !v)}
						className="sm:hidden w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-colors"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
							/>
						</svg>
					</button>

					{/* Cart */}
					<button
						onClick={onCartOpen}
						className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors"
					>
						<span>🛒</span>
						<span className="hidden sm:inline">Cart</span>

						{cartCount > 0 && (
							<span className="bg-cyan-400 text-gray-950 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-[0_0_6px_#22d3ee]">
								{cartCount}
							</span>
						)}
					</button>

					{/* User Auth */}
					<div className="relative">
						{user ? (
							<>
								<button
									onClick={() => setUserMenuOpen((v) => !v)}
									className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold text-sm hover:scale-110 transition-transform"
								>
									{user.name?.[0]?.toUpperCase()}
								</button>

								{userMenuOpen && (
									<div className="absolute right-0 mt-2 w-44 bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-2">
										<p className="text-gray-400 text-xs px-2 py-1">
											Signed in as
										</p>

										<p className="text-white text-sm font-semibold px-2 pb-2 border-b border-gray-700">
											{user.name}
										</p>

										{/* Profile */}
										<button
											onClick={() => {
												alert(
													"Profile page coming soon!"
												);
												setUserMenuOpen(false);
											}}
											className="w-full text-left px-2 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
										>
											Profile
										</button>

										{/* Orders */}
										<button
											onClick={() => {
												alert(
													"Orders feature coming soon!"
												);
												setUserMenuOpen(false);
											}}
											className="w-full text-left px-2 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
										>
											Orders
										</button>

										{/* Logout */}
										<button
											onClick={() => {
												onSignOut();
												setUserMenuOpen(false);
											}}
											className="w-full text-left px-2 py-2 text-sm text-red-400 hover:bg-gray-800 rounded-lg transition-colors border-t border-gray-700 mt-1"
										>
											Logout
										</button>
									</div>
								)}
							</>
						) : (
							<button
								onClick={onAuthOpen}
								className="border border-gray-700 text-gray-300 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors"
							>
								Sign In
							</button>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Search */}
			{mobileSearchOpen && (
				<div className="sm:hidden px-4 pb-3 border-t border-gray-800 pt-3">
					<div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all">
						<svg
							className="w-4 h-4 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
							/>
						</svg>

						<input
							autoFocus
							className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500 text-sm"
							placeholder="Search products, brands..."
							value={search}
							onChange={(e) => onSearchChange(e.target.value)}
						/>

						{search && (
							<button
								onClick={() => onSearchChange("")}
								className="text-gray-500 text-xs"
							>
								✕
							</button>
						)}
					</div>
				</div>
			)}
		</nav>
	);
}
