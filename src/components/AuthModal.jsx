import { useState } from "react";

export default function AuthModal({ onClose, onAuth }) {
	const [tab, setTab] = useState("login");
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const update = (field) => (e) =>
		setForm((prev) => ({ ...prev, [field]: e.target.value }));


	// local storage login
	const handleSubmit = () => {
		if (!form.email || !form.password) return;

		const users = JSON.parse(localStorage.getItem("users")) || [];

		if (tab === "signup") {
			const exists = users.find((u) => u.email === form.email);

			if (exists) {
				alert("User already exists. Please login.");
				return;
			}

			const newUser = {
				name: form.name || form.email.split("@")[0],
				email: form.email,
				password: form.password,
			};

			users.push(newUser);

			localStorage.setItem("users", JSON.stringify(users));
			localStorage.setItem("currentUser", JSON.stringify(newUser));

			onAuth(newUser);
		} else {
			const user = users.find(
				(u) => u.email === form.email && u.password === form.password
			);

			if (!user) {
				alert("Invalid email or password");
				return;
			}

			localStorage.setItem("currentUser", JSON.stringify(user));

			onAuth(user);
		}

		setForm({ name: "", email: "", password: "" });
	};

	return (
		<div
			className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			<div
				className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-sm p-8 relative"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 hover:text-white flex items-center justify-center text-sm transition-colors"
					aria-label="Close authentication modal"
				>
					✕
				</button>

				{/* Logo */}
				{/* <div className="text-center text-3xl mb-2">⚡</div> */}

				<h2 className="text-white font-extrabold text-xl text-center mb-1">
					{tab === "login" ? "Welcome Back" : "Create Account"}
				</h2>

				<p className="text-gray-500 text-sm text-center mb-6">
					{tab === "login"
						? "Sign in to your VOLTX account"
						: "Join thousands of tech enthusiasts"}
				</p>

				{/* Tabs */}
				<div className="flex bg-gray-800 rounded-xl p-1 mb-5">
					{[
						["login", "Sign In"],
						["signup", "Sign Up"],
					].map(([value, label]) => (
						<button
							key={value}
							onClick={() => setTab(value)}
							className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
								tab === value
									? "bg-cyan-400 text-gray-950"
									: "text-gray-400 hover:text-gray-200"
							}`}
						>
							{label}
						</button>
					))}
				</div>

				{/* Name Field (Signup only) */}
				{tab === "signup" && (
					<div className="mb-4">
						<label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
							Full Name
						</label>
						<input
							className="w-full bg-gray-800 border border-gray-700 text-gray-200 px-3 py-2.5 rounded-lg text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
							placeholder="John Doe"
							value={form.name}
							onChange={update("name")}
						/>
					</div>
				)}

				{/* Email */}
				<div className="mb-4">
					<label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
						Email
					</label>
					<input
						type="email"
						className="w-full bg-gray-800 border border-gray-700 text-gray-200 px-3 py-2.5 rounded-lg text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
						placeholder="you@example.com"
						value={form.email}
						onChange={update("email")}
					/>
				</div>

				{/* Password */}
				<div className="mb-5">
					<label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
						Password
					</label>
					<input
						type="password"
						className="w-full bg-gray-800 border border-gray-700 text-gray-200 px-3 py-2.5 rounded-lg text-sm outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
						placeholder="••••••••"
						value={form.password}
						onChange={update("password")}
						onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
					/>
				</div>

				{/* Submit */}
				<button
					onClick={handleSubmit}
					className="w-full bg-cyan-400 text-gray-950 font-bold py-3 rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] text-sm"
				>
					{tab === "login" ? "Sign In →" : "Create Account →"}
				</button>
			</div>
		</div>
	);
}
