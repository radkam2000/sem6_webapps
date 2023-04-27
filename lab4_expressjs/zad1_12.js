const express = require("express"); //import frameworka
const app = express(); //utworzenie obiektu aplikacji express
const PORT = 3000; //ustawienie portu
const path = require("path");
let { users } = require("./users");
const { check, validationResult } = require("express-validator");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users", (req, res) => {
	res.json(users);
});
app.get("/api/users/:id", (req, res) => {
	const found = users.some((user) => user.id === parseInt(req.params.id));
	if (found) {
		res.json(users.filter((user) => user.id === parseInt(req.params.id)));
	} else {
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

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
