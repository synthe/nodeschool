var async = require('async'),
	http = require('http'),
	url = process.argv[2],
	runningBody = '',
	runCount = 0;

async.whilst(
	function () {
		return runningBody.indexOf('meerkat') === -1;
	},
	function (callback) {
		http.get(url, function(res) {
			runningBody = '';
			runCount++;
			res.on('data', function(chunk) {
				runningBody += chunk.toString();
			}).on('end', function() {
				callback(null);
			});
		});
	},
	function (err) {
		console.log(runCount);
	}
);