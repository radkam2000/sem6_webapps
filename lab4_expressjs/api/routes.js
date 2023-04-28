const express = require("express"); //import frameworka
const router = express.Router();
let { users } = require("../users");
const isAuthorized = require("./middleware/isAuthorized");
const pack = require("../package.json");

router.use(isAuthorized);

router.get("/", function (req, res) {
	res.send("Szkielet programistyczny Express!");
});

router.get("/about", function (req, res) {
	res.send("Autor strony:" + pack.author);
});

router.get("/name/:imie", function (req, res) {
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

router.get("/names/:imie&:imie2", function (req, res) {
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
router.get("/form", (req, res) => {
	res.sendFile(path.join(__dirname, "form_01.html"));
});

router.post("/result", (req, res) => {
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

module.exports = router;
