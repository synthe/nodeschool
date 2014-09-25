var http = require('http'),
	urls = process.argv.slice(2),
	output = new Array(urls.length),
	counter = 0;

urls.forEach(function(url, index) {
	getUrlContents(url, function(resultString) {
		counter++;
		output[index] = resultString;
		if (counter >= urls.length) {
			console.log(output.join('\n'));
		}
	})
});

function getUrlContents(url, callback) {
	http.get(url, function(response) {
		var fullString = '';
		response.setEncoding('utf8');
		response.on('data', function(data) {
			fullString = fullString + data;
		});
		response.on('end', function() {
			callback(fullString);
		});
	});
}