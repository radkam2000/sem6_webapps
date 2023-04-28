const isAuthorised = (req, res, next) => {
	if (req.body.password === "secretpaswd") {
		next();
		return;
	} else {
		res.status(401);
		res.end("Dostęp zabroniony");
	}
};

module.exports = isAuthorised;
