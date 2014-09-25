var http = require('http'),
	fs = require('fs'),
	through = require('through'),
	port = process.argv[2],
	server;

server = http.createServer(function(req, res) {
	req.pipe(through(function(buffer) {
		this.queue(buffer.toString().toUpperCase());
	})).pipe(res);
});

server.listen(port);
