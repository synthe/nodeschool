var async = require('async'),
	http = require('http'),
	fs = require('fs'),
	filename = process.argv[2];


async.waterfall([
	function(cb) {
		fs.readFile(filename, function (err, data) {
			if (err) return cb(err);
			cb(null, data);
		});
	},
	function(url, cb) {
		http.get(url.toString(), function(res) {
			var body = '';
			res.on('data', function(chunk) {
				body += chunk.toString();
			});
			res.on('end', function() {
				cb(null, body);
			});

		}).on('error', function(err) {
			return cb(err);
		});
	}
], function(err, result) {
	if (err) throw err;
	console.log(result);
});
