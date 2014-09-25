var http = require('http'),
	url = process.argv[2];


http.get(url, function(response) {
	var fullString = '';
	response.setEncoding('utf8');
	response.on('data', function(data) {
		fullString = fullString + data;
	});
	response.on('end', function() {
		console.log(fullString.length);
		console.log(fullString);
	});
});