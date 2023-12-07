require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { catalogRoutes } = require("./routes/catalog.routes");
const { productRoutes } = require("./routes/product.routes");
const { messageRoutes } = require("./routes/message.routes");
const {contactRoutes}  = require("./routes/contact.routes");
const {reserveRoutes}  = require("./routes/reserve.routes");
const {articleRoutes}  = require("./routes/article.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
	res.send("here is the response");
});

//article routes
app.use("/article", articleRoutes)

// contact routes
app.use("/contact", contactRoutes);


// catalog routes
app.use("/catalogs", catalogRoutes);

// reserve routes
app.use("/reserve", reserveRoutes);

// messages routes
app.use("/messages", messageRoutes);

// messages routes
app.use("/product", productRoutes);


app.all("*", async (req, res) => {
	res.json({
		message: "Routes you're looking is not found",
	});
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is already running at ${PORT}`);
});
