import { useState, useRef, useCallback } from "react";

export function useToast() {
	const [notif, setNotif] = useState(null);
	const timerRef = useRef(null);

	const toast = useCallback((msg, icon = null) => {
		setNotif({ msg, icon });

		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() => {
			setNotif(null);
		}, 2600);
	}, []);

	return { notif, toast };
}
