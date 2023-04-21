// const http = require("http");
// const fs = require("fs");
// const port = 3000;
// function serveStaticFile(res, path, contentType, responseCode = 200) {
// 	fs.readFile(__dirname + path, (err, data) => {
// 		if (err) {
// 			res.writeHead(500, { "Content-Type": "text/plain" });
// 			return res.end("500 - Blad wewnetrzny");
// 		}
// 		res.writeHead(responseCode, { "Content-Type": contentType });
// 		res.end(data);
// 	});
// }
// const server = http.createServer((req, res) => {
// 	switch (req.url) {
// 		case "/":
// 			serveStaticFile(res, "/public/home.html", "text/html");
// 			break;
// 		case "/about":
// 			serveStaticFile(res, "/public/about.html", "text/html");
// 			break;
// 		case "/img":
// 			serveStaticFile(res, "/public/img/pepe.png", "image/png");
// 			break;
// 		// Wstawić brakujący kod odpowiedzialny za udostępnienie grafiki
// 		default:
// 			serveStaticFile(res, "/public/404.html", "text/html");
// 			break;
// 	}
// });
// server.listen(port, () =>
// 	console.log(
// 		`Server działa na porcie ${port}; ` + "naciśnij Ctrl+C, aby zakończyć"
// 	)
// );

//ZADANIE 1.4
// const http = require("http");
// const url = require("url");
// http.createServer(function (req, res) {
// 	res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
// 	let q = url.parse(req.url, true).query;
// 	let txt = +q.a + " " + +q.b + " " + +q.c;
// 	let s = (+q.a + +q.b + +q.c) / 2;
// 	let A = Math.sqrt(s * (s - +q.a) * (s - +q.b) * (s - +q.c));
// 	txt = isNaN(A) ? "Blędne dane" : "Pole trojkąta wynosi " + A;
// 	res.end(txt);
// }).listen(3000);

//ZADANIE 1.7
const http = require("http");
const url = require("url");
let items = [];

function show(res) {
	let html =
		"<html><head><title>Lista zadan</title></head><body>" +
		"<h1>Lista zadan</h1>" +
		'<form method="post" action="/">' +
		'<p><input type="text" name="item" />' +
		'<input type="submit" value="Dodaj" /></p>' +
		"<ul>" +
		items
			.map(function (item) {
				return "<li>" + item + "</li>";
			})
			.join("") +
		"</ul>" +
		"</form>" +
		'<a href="/delete">Usun</a>' +
		"</body></html>";
	res.setHeader("Content-Type", "text/html");
	res.setHeader("Content-Length", Buffer.byteLength(html));
	res.end(html);
}

function notFound(res) {
	res.statusCode = 404;
	res.setHeader("Content-Type", "text/plain");
	res.end("Not Found");
}
function badRequest(res) {
	res.statusCode = 400;
	res.setHeader("Content-Type", "text/plain");
	res.end("Bad Request");
}
let qs = require("querystring");
function add(req, res) {
	var body = "";
	req.setEncoding("utf8");
	req.on("data", function (chunk) {
		body += chunk;
	});
	req.on("end", function () {
		var obj = qs.parse(body);
		items.push(obj.item);
		show(res);
	});
}
function deleteItems(req, res) {
	items.length = 0;
	console.log(items);
	res.writeHead(301, { Location: "/" });
	res.end("");
}
const server = http.createServer(function (req, res) {
	if ("/" == req.url) {
		console.log("main");
		switch (req.method) {
			case "GET":
				show(res);
				break;
			case "POST":
				add(req, res);
				break;
			default:
				badRequest(res);
		}
	} else if ("/delete" === req.url) {
		console.log("delete");
		deleteItems(req, res);
	} else {
		notFound(res);
	}
});
server.listen(3000);
