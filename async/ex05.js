var async = require('async'),
	http = require('http'),
	hostname = process.argv[2],
	port = process.argv[3],
	baseUrl = 'http://'+hostname+':'+port;


function createUser(n, next) {
	var options = {
		hostname: hostname,
		port: port,
		path: '/users/create',
		method: 'POST'
	},
	user = {user_id: n+1},
	req;

	req = http.request(options, function(res) {
		next(null, user)
	}).on('error', function(err) {
		next(err);
	});
	req.write(JSON.stringify(user));
	req.end();
}


async.series({
	makeFiveUsers: function (cb) {
		async.times(5, createUser, function(err, users) {
			cb(err, users);
		});
	},
	getUserList: function(cb) {
		http.get(baseUrl+'/users', function(res) {
			var body = '';
			res.on('data', function(chunk) {
				body += chunk.toString();
			}).on('end', function() {
				cb(null, body);
			});
		}).on('error', function(err) {
			cb(err);
		});
	}
}, function(err, results) {
	if (err) return console.error(err);
	console.log(results.getUserList);
});



