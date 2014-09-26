var express = require('express'),
	stylus = require('stylus'),
	app = express(),
	port = process.argv[2],
	pathToPublic = process.argv[3];

app.use(express.static(pathToPublic));
app.use(stylus.middleware(pathToPublic));

app.listen(port);

