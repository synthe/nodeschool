var express = require('express'),
	path = require('path'),
	app = express(),
	port = process.argv[2],
	pathToJade = process.argv[3];

app.set('view engine', 'jade');
app.set('views', pathToJade);

app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});
app.listen(port);

