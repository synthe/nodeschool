var Q = require('q');



function throwMyGod() {
	throw new Error('OH NOES');
}

function iterate(item) {
	console.log(item);
	return item + 1;
}

Q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);
