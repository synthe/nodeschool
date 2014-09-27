var async = require('async'),
	http = require('http'),
	url1 = process.argv[2],
	url2 = process.argv[3];

async.map([url1, url2], function(item, done) {
	http.get(item, function(res) {
		var body = '';
		res.on('data', function(chunk) {
			body += chunk.toString();
		}).on('end', function() {
			done(null, body);
		});
	}).on('error', function(err) {
		done(err, null);
	});
},
function(err, result) {
	if (err) return console.log(err);
	console.log(result);
});