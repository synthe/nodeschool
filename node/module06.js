var fs = require('fs'),
	path = require('path');

module.exports = function(dir, ext, callback) {
	var filteredList = [];
	ext = '.'+ext;
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}
		filteredList = list.filter(function(filename) {
			return (path.extname(filename) === ext);
		});
		callback(null, filteredList);
	});
};