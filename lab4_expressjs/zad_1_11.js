const express = require("express"); //import frameworka
const app = express(); //utworzenie obiektu aplikacji express
const PORT = 3000; //ustawienie portu
const path = require("path");
const { check, validationResult } = require("express-validator");

app.get("/", function (req, res) {
	res.send("Szkielet programistyczny Express!");
});

app.get("/form", (req, res) => {
	res.sendFile(path.join(__dirname, "form_1_11.html"));
});

app.post(
	"/form",
	[
		check("nazwisko").isLength({ min: 3 }),
		check("email").isEmail(),
		check("wiek").isNumeric(),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		const nazwisko = req.body.nazwisko;
		const email = req.body.email;
		const wiek = req.body.wiek;
		res.send(
			"Użytkownik: " +
				nazwisko +
				"<br>Email: " +
				email +
				"<br>Wiek: " +
				wiek
		);
	}
);
// inne endpointy
// ...
//ustawienie portu dla aplikacji i wyświetlenie informacji na konsoli
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
