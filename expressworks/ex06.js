var express = require('express'),
	crypto = require('crypto'),
	app = express(),
	port = process.argv[2];

app.put('/message/:id', function(req, res) {
	var id = req.params.id;
	res.end(crypto
			.createHash('sha1')
			.update(new Date().toDateString() + id)
			.digest('hex')
	);
});
app.listen(port);

