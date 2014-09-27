var async = require('async'),
	http = require('http'),
	url1 = process.argv[2],
	url2 = process.argv[3];


async.series({
	requestOne: function(done) {
		http.get(url1, function(res) {
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
	requestTwo: function(done) {
		http.get(url2, function(res) {
			var body = '';
			res.on('data', function(chunk) {
				body += chunk.toString();
			}).on('end', function() {
				done(null, body);
			});

		}).on('error', function(err) {
			done(err, null);
		});
	}
},
function(err, result) {
	if (err) throw err;
	console.log(result);
});