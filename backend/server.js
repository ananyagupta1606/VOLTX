const express = require("express");

const app = express();
const productRoutes = require("./routes/productRoutes");

/* Home */
app.get("/", (req, res) => {
	res.send("Welcome to Voltx Backend");
});

/* Products */
app.use("/products", productRoutes);

/* About */
app.get("/about", (req, res) => {
	res.send("About Voltx Company");
});

/* Contact */
app.get("/contact", (req, res) => {
	res.send("Contact Page");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
