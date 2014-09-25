var fs = require('fs'),
	path = require('path'),
	folder = process.argv[2],
	ext = '.'+process.argv[3];

fs.readdir(folder, function(err, list) {
	list.forEach(function(filename) {
		if (path.extname(filename) === ext) {
			console.log(filename);
		}
	});
});