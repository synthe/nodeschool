var express = require('express'),
	fs = require('fs'),
	app = express(),
	port = process.argv[2],
	filename = process.argv[3];

app.get('/books', function(req, res) {
	fs.readFile(filename, function(err, contents) {
		var obj;
		if (err) {
			res.send(500);
		}
		try {
			obj = JSON.parse(contents);
		} catch(e) {
			res.send(500);
		}
		
		res.send(obj);
	});
});

app.listen(port);

