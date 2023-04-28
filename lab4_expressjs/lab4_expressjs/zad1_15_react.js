const express = require("express");
const path = require("path");
const app = express();
const reactEngine = require("express-react-views");
app.set("view engine", "jsx");
app.engine("jsx", reactEngine.createEngine());
app.get("/about", (req, res) => {
	res.render("about", { nazwisko: "Kowalski" });
});

app.get("/info", (req, res) => {
	res.render("info", {
		nazwisko: "Kowalski",
		email: "kowalski@gmail.com",
		age: 20,
	});
});
app.listen(3000, () => console.log("Serwer działa!"));
