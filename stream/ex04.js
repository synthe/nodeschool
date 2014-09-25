var through = require('through'),
	src = process.stdin,
	dest = process.stdout,
	tr;


tr = through(function(buffer) {
	this.queue(buffer.toString().toUpperCase());
});

src.pipe(tr).pipe(dest);
