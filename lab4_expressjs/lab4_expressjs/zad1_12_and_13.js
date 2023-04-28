const express = require("express"); //import frameworka
const app = express(); //utworzenie obiektu aplikacji express
const PORT = 3000; //ustawienie portu
const path = require("path");
let { users } = require("./users");
const { check, validationResult } = require("express-validator");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let metoda = (req, res, next) => {
	console.log("Metoda: ", req.method);
	let sciezka =
		"Ścieżka: " + req.protocol + "://" + req.get("host") + req.originalUrl;
	console.log(sciezka);
	let wynik = "Metoda: " + req.method + sciezka;
	res.send(wynik);
};

app.use(metoda);

app.get("/api/users", (req, res) => {
	res.json(users);
});
app.get("/api/users/:id", (req, res) => {
	const found = users.some((user) => user.id === parseInt(req.params.id));
	if (found) {
		res.json(users.filter((user) => user.id === parseInt(req.params.id)));
	} else {
		let metoda = (req, res, next) => {
			console.log("Metoda: ", req.method);
			let sciezka =
				"Ścieżka: " +
				req.protocol +
				"://" +
				req.get("host") +
				req.originalUrl;
			console.log(sciezka);
			res.send(sciezka);
			next();
		};
		res.status(400).json({
			msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`,
		});
	}
});

app.post("/api/users", (req, res) => {
	const newUser = {
		id: users.length + 1,
		name: req.body.name,
		email: req.body.email,
		status: "aktywny",
	};
	if (!newUser.name || !newUser.email) {
		return res
			.status(400)
			.json({ msg: "Wprowadź poprawne imię i nazwisko oraz email!" });
	}
	users.push(newUser);
	res.json(users);
});

app.delete("/api/users/:id", (req, res) => {
	const found = users.some((user) => user.id === parseInt(req.params.id));
	if (found) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === parseInt(req.params.id)) {
				users.splice(i, 1);
				res.status(200).json({ msg: "Uzytkownik usuniety" });
				break;
			}
		}
	} else {
		res.status(400).json({
			msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`,
		});
	}
});

app.patch("/api/users/:id", (req, res) => {
	const found = users.some((user) => user.id === parseInt(req.params.id));
	if (found) {
		const updUser = req.body;
		users.forEach((user) => {
			if (user.id === parseInt(req.params.id)) {
				user.name = updUser.name ? updUser.name : user.name;
				user.email = updUser.email ? updUser.email : user.email;
				res.json({ msg: "Dane użytkownika zaktualizowane", user });
			}
		});
	} else {
		res.status(400).json({
			msg: `Użytkownik o id ${req.params.id} nie istnieje!`,
		});
	}
});

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
