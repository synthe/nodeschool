var express = require('express'),
	app = express(),
	port = process.argv[2],
	pathToIndexFile = process.argv[3];

app.use(express.static(pathToIndexFile));

app.listen(port);

