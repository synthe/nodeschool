var http = require('http'),
	t2map = require('through2-map'),
	port = process.argv[2],
	server;

server = http.createServer(function(req, res) {
	var body = '';
	req.pipe(t2map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);

});

server.listen(port);
