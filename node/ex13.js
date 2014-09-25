var http = require('http'),
	url = require('url'),
	port = process.argv[2],
	server;

server = http.createServer(function(req, res) {
	var parsed = url.parse(req.url, true);
	if (parsed.pathname === '/api/parsetime') {
		sendHMS(res, parsed.query.iso);
	}
	if (parsed.pathname === '/api/unixtime') {
		sendEpoch(res, parsed.query.iso);
	}
});
server.listen(port);

function sendHMS(res, iso) {
	var theTime = new Date(iso),
		timeOut = {
			hour: theTime.getHours(),
			minute: theTime.getMinutes(),
			second: theTime.getSeconds()
	};
	res.writeHead(200, {'Content-Type:': 'application/json'});
	res.end(JSON.stringify(timeOut));
}

function sendEpoch(res, iso) {
	var theTime = new Date(iso),
		timeOut = {
			unixtime: theTime.getTime()
	};
	res.writeHead(200, {'Content-Type:': 'application/json'});
	res.end(JSON.stringify(timeOut));
}