var express = require("express");
var app = express();
var port = 3000;

var middleware = {
	requireAuthentification: function(req, res, next) {
		console.log("private route hit");
		next();
	},
	logger: function(req, res, next) {
		console.log(req.method + " " + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentification);

app.get("/About", middleware.requireAuthentification, function(req, res) {
	res.send("About us");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log("express server started on " + port);
});