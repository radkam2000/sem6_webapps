const express = require("express");
const app = express();
const PORT = 3000;
const getDate = require("./server-files/getDate");

app.listen(PORT, () =>
	console.log(`${getDate()} === Serwer zostaje uruchomiony na porcie ${PORT}`)
);
