var split = require('split'),
	through = require('through'),
	counter = 0;

process.stdin
	.pipe(split())
	.pipe(through(function(line) {
		counter++;
		if (counter % 2 === 1) {
			this.queue(line.toString().toLowerCase() + '\n');
		} else {
			this.queue(line.toString().toUpperCase() + '\n');
		}
	}))
	.pipe(process.stdout);
