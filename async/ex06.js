var async = require('async'),
	http = require('http'),
	url = process.argv[2],
	setArray = ['one', 'two', 'three'];




async.reduce(setArray, 0, function(memo, item, callback){
	http.get(url+'?number='+item, function(res) {
		var body = '';
		res.on('data', function(chunk) {
			body += chunk.toString();
		}).on('end', function() {
			callback(null, Number(body) + memo);
		});
	});
}, function(err, result){
	if (err) return console.error(err);
	console.log(result);
});


