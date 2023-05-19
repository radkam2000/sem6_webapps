const mongoose = require("mongoose");

mongoose
	.connect("mongodb://127.0.0.1:27017/StudentDB", { useNewUrlParser: true })
	.then((result) => {
		console.log("Połączono z bazą");
	})
	.catch((err) => {
		console.log("Nie można połączyć się z MongoDB. Błąd: " + err);
	});

module.exports = mongoose;
