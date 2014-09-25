var mymodule = require('./module06.js');

mymodule(process.argv[2], process.argv[3], function(err, list) {
	console.log(list.join('\n'));
});