var express = require("express");
var app = express();
var port = 3000;
var middleware = require("./middleware.js");

app.use(middleware.logger);

app.get("/About", middleware.requireAuthentification, function(req, res) {
	res.send("About us");
});

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
	console.log("express server started on " + port);
});