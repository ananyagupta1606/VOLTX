import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	// Initialize from localStorage
	const [cart, setCart] = useState(() => {
		const stored = localStorage.getItem("cart");
		return stored ? JSON.parse(stored) : [];
	});

	/* ==============================
        Persist to localStorage
  ============================== */
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	/* ==============================
        Add Item
  ============================== */
	const addToCart = (product) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);

			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, qty: item.qty + 1 }
						: item
				);
			}

			return [...prev, { ...product, qty: 1 }];
		});
	};

	/* ==============================
        Update Quantity
  ============================== */
	const updateQty = (id, delta) => {
		setCart((prev) =>
			prev
				.map((item) =>
					item.id === id
						? { ...item, qty: Math.max(0, item.qty + delta) }
						: item
				)
				.filter((item) => item.qty > 0)
		);
	};

	/* ==============================
        Remove Item Completely
  ============================== */
	const removeItem = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	/* ==============================
        Clear Cart
  ============================== */
	const clearCart = () => {
		setCart([]);
	};

	/* ==============================
        Derived Values
  ============================== */
	const cartCount = cart.reduce((total, item) => total + item.qty, 0);

	const cartTotal = cart.reduce(
		(total, item) => total + item.qty * item.price,
		0
	);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				updateQty,
				removeItem,
				clearCart,
				cartCount,
				cartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
