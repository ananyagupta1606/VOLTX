const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	const products = [
		{ id: 1, name: "Wireless Headphones", price: 2999 },
		{ id: 2, name: "Smart Watch", price: 4999 },
		{ id: 3, name: "Bluetooth Speaker", price: 1999 },
	];

	res.json(products);
});

module.exports = router;
