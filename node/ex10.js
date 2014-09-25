var net = require('net'),
	port = process.argv[2];

var server = net.createServer(function(socket) {
	var formattedDate = getFormattedDate();
	socket.write(formattedDate+'\n');
	socket.end();
});
server.listen(port);

function padToStringLeft(number, amount) {
	return ('000000' + number).slice(-1*amount);
}

function getFormattedDate() {
	var now = new Date(),
		dateString = now.getFullYear() + '-' + padToStringLeft(now.getMonth()+1, 2) + '-' + padToStringLeft(now.getDate(), 2) + ' ' + padToStringLeft(now.getHours(), 2) + ':' + padToStringLeft(now.getMinutes(), 2);
	return dateString;
}