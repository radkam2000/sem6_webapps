const express = require("express"); //import frameworka
const app = express(); //utworzenie obiektu aplikacji express
const PORT = 3000; //ustawienie portu
const bodyParser = require("body-parser");
const router = require("./api/routes");
// routing:

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(router);
// inne endpointy
// ...
//ustawienie portu dla aplikacji i wyświetlenie informacji na konsoli
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
