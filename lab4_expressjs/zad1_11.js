const express = require("express"); //import frameworka
const app = express(); //utworzenie obiektu aplikacji express
const PORT = 3000; //ustawienie portu
const path = require("path");
const { check, validationResult } = require("express-validator");

const sanitizeValue = (value) => {
	arrayOfValues = value.split(" ");
	tmp = "";
	arrayOfValues.forEach((element) => {
		tmp += element.charAt(0);
	});
	return tmp.toUpperCase();
};

app.get("/", function (req, res) {
	res.send("Szkielet programistyczny Express!");
});

app.get("/form", (req, res) => {
	res.sendFile(path.join(__dirname, "form1_11.html"));
});

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.post(
	"/form",
	[
		check("nazwisko")
			.isLength({ min: 3, max: 25 })
			.isAlpha("pl-PL", { ignore: " " })
			.trim()
			.stripLow()
			.bail()
			.customSanitizer((value) => {
				return sanitizeValue(value);
			}),
		check("email")
			.isEmail()
			.withMessage("Błędny email")
			.trim()
			.stripLow()
			.normalizeEmail()
			.bail(),
		check("wiek").isInt({ min: 0, max: 110 }).trim().stripLow().bail(),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(418).json({ errors: errors.array() });
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
