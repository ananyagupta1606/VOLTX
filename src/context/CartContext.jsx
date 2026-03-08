import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	/* ==============================
        Initialize Cart
	================================ */
	const [cart, setCart] = useState(() => {
		try {
			const stored = localStorage.getItem("cart");
			return stored ? JSON.parse(stored) : [];
		} catch {
			return [];
		}
	});

	/* ==============================
        Persist Cart
	================================ */
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	/* ==============================
        Add Item
	================================ */
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
	================================ */
	const updateQty = (id, delta) => {
		setCart((prev) =>
			prev
				.map((item) =>
					item.id === id ? { ...item, qty: item.qty + delta } : item
				)
				.filter((item) => item.qty > 0)
		);
	};

	/* ==============================
        Remove Item
	================================ */
	const removeItem = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	/* ==============================
        Clear Cart
	================================ */
	const clearCart = () => {
		setCart([]);
		localStorage.removeItem("cart");
	};

	/* ==============================
        Derived Values
	================================ */
	const cartCount = cart.reduce((total, item) => total + item.qty, 0);

	const cartTotal = cart.reduce(
		(total, item) => total + item.qty * item.price,
		0
	);

	/* ==============================
        Context Value
	================================ */
	const value = {
		cart,
		addToCart,
		updateQty,
		removeItem,
		clearCart,
		cartCount,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
