import { useState, useCallback } from "react";

export default function useAuth(toast) {
	const [user, setUser] = useState(null);

	const login = useCallback(
		(userData) => {
			setUser(userData);
			toast(`Welcome, ${userData.name}!`);
		},
		[toast]
	);

	const logout = useCallback(() => {
		setUser(null);
		toast("Signed out successfully");
	}, [toast]);

	return { user, login, logout };
}
