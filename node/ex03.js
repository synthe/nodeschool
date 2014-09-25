var fs = require('fs'),
	filename = process.argv[2];

console.log((fs.readFileSync(filename)).toString().split('\n').length - 1);
