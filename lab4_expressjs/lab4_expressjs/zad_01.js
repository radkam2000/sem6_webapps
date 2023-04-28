const express = require("express"); //import frameworka
const app = express(); //utworzenie obiektu aplikacji express
const PORT = 3000; //ustawienie portu
const pack = require("./package.json");
const path = require("path");
const bodyParser = require("body-parser");
// routing:

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get("/", function (req, res) {
	res.send("Szkielet programistyczny Express!");
});

app.get("/about", function (req, res) {
	res.send("Autor strony:" + pack.author);
});

app.get("/name/:imie", function (req, res) {
	res.status(200);
	res.set("Content-Type", "text/html");
	res.end(
		"<hmtl><body>" +
			"<h1>Cześć " +
			req.params.imie +
			"</h1>" +
			"</body></html>"
	);
});

app.get("/names/:imie&:imie2", function (req, res) {
	res.status(200);
	res.set("Content-Type", "text/html");
	res.end(
		"<hmtl><body>" +
			"<h1>Cześć " +
			req.params.imie +
			" " +
			req.params.imie2 +
			"</h1>" +
			"</body></hhtml>"
	);
});

//Z 1.10
app.get("/form", (req, res) => {
	res.sendFile(path.join(__dirname, "form_01.html"));
});

app.post("/result", (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let languages = req.body.language;
	res.send(
		"Użytkownik: " +
			username +
			"<br>Hasło: " +
			password +
			"</br>" +
			languages
	);
});

// inne endpointy
// ...
//ustawienie portu dla aplikacji i wyświetlenie informacji na konsoli
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
