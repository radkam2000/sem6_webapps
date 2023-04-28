const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://s00000:<s00000>@cluster0.qshd63v.mongodb.net/?retryWrites=true&w=majority",
		{ useNewUrlParser: true }
	)
	.then((result) => {
		console.log("Połączono z bazą");
	})
	.catch((err) => {
		console.log("Nie można połączyć się z MongoDB. Błąd: " + err);
	});

module.exports = mongoose;
