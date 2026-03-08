import { useState, useCallback, useMemo, useEffect } from "react";
import { PRODUCTS } from "./data/products";
import { useCart } from "./context/CartContext";
import { useToast } from "./hooks/useToast";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import AuthModal from "./components/AuthModal";
import ProductDetail from "./components/ProductDetail";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

export default function App() {
	/* ==============================
	   Context Hooks
	================================ */
	const { cart, addToCart, updateQty, cartCount } = useCart();
	const { notif, toast } = useToast();

	/* ==============================
	   Local State
	================================ */
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");
	const [cartOpen, setCartOpen] = useState(false);
	const [authOpen, setAuthOpen] = useState(false);
	const [detail, setDetail] = useState(null);
	const [user, setUser] = useState(null);

	/* ==============================
	   Restore Login From LocalStorage
	================================ */
	useEffect(() => {
		const savedUser = localStorage.getItem("currentUser");

		if (savedUser) {
			setUser(JSON.parse(savedUser));
		}
	}, []);

	/* ==============================
	   Cart Handler
	================================ */
	const handleAddToCart = useCallback(
		(product) => {
			addToCart(product);
			toast(`${product.name} added to cart`, "🛒");
		},
		[addToCart, toast]
	);

	/* ==============================
	   Auth Handlers
	================================ */
	const handleAuth = useCallback(
		(userData) => {
			setUser(userData);
			setAuthOpen(false);
			toast(`Welcome, ${userData.name}!`, "⚡");
		},
		[toast]
	);

	const handleSignOut = useCallback(() => {
		localStorage.removeItem("currentUser");
		setUser(null);
		toast("Signed out successfully", "👋");
	}, [toast]);

	/* ==============================
	   Filter Products
	================================ */
	const filteredProducts = useMemo(() => {
		return PRODUCTS.filter((p) => {
			const matchCat = category === "All" || p.category === category;

			const matchSearch =
				p.name.toLowerCase().includes(search.toLowerCase()) ||
				p.brand.toLowerCase().includes(search.toLowerCase());

			return matchCat && matchSearch;
		});
	}, [category, search]);

	/* ==============================
	   Scroll Helper
	================================ */
	const scrollToProducts = useCallback(() => {
		document
			.getElementById("products")
			?.scrollIntoView({ behavior: "smooth" });
	}, []);

	return (
		<div className="min-h-screen bg-gray-950 text-gray-200">
			{/* Navbar */}
			<Navbar
				search={search}
				onSearchChange={setSearch}
				cartCount={cartCount}
				onCartOpen={() => setCartOpen(true)}
				onAuthOpen={() => setAuthOpen(true)}
				user={user}
				onSignOut={handleSignOut}
			/>

			{/* Hero */}
			<HeroBanner onShopNow={scrollToProducts} />

			{/* Categories */}
			<CategoryBar active={category} onChange={setCategory} />

			{/* Products */}
			<div id="products">
				<ProductGrid
					products={filteredProducts}
					category={category}
					search={search}
					onAddToCart={handleAddToCart}
					onViewDetail={setDetail}
				/>
			</div>

			{/* Footer */}
			<Footer />

			{/* Cart Sidebar */}
			{cartOpen && (
				<CartSidebar
					cart={cart}
					onClose={() => setCartOpen(false)}
					onUpdateQty={updateQty}
					onCheckout={() => {
						if (!user) {
							setAuthOpen(true);
							toast("Please login to continue", "🔐");
							return;
						}

						toast("Order placed successfully!", "🎉");
						setCartOpen(false);
					}}
				/>
			)}

			{/* Auth Modal */}
			{authOpen && (
				<AuthModal
					onClose={() => setAuthOpen(false)}
					onAuth={handleAuth}
				/>
			)}

			{/* Product Detail Modal */}
			{detail && (
				<ProductDetail
					product={detail}
					onClose={() => setDetail(null)}
					onAddToCart={handleAddToCart}
				/>
			)}

			{/* Toast Notification */}
			<Toast message={notif?.msg} icon={notif?.icon} />
		</div>
	);
}
