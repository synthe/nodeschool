var async = require('async'),
	http = require('http'),
	url1 = process.argv[2],
	url2 = process.argv[3];

async.each([url1, url2], function(item, done) {
	http.get(item, function(res) {
		res.on('end', function() {
			done(null);
		});
	}).on('error', function(err) {
		done(err);
	});
},
function(err) {
	console.log(err);
});