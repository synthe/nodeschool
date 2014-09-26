var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
});
app.listen(port);

