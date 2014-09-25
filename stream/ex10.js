var trumpet = require('trumpet'),
	through = require('through'),
	tr = trumpet(),
	trStream;



process.stdin
	.pipe(tr)
	.pipe(process.stdout);

trStream = tr.select('.loud').createStream();
trStream
	.pipe( through(function (buffer) {
		this.queue(buffer.toString().toUpperCase());
	}) )
	.pipe(trStream);