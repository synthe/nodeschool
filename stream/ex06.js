var concat = require('concat-stream');

process.stdin.pipe(concat(function(fullText) {
	process.stdout.write(fullText.toString().split('').reverse().join(''));
	process.stdout.write('\n');
}));

